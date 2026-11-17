/* Pascals Python-Lerner – komplette App-Logik (ohne Frameworks) */
(() => {
"use strict";

const D = window.APP_DATA;
const $ = (sel, root = document) => root.querySelector(sel);
const view = $("#view");
const TOPIC = Object.fromEntries(D.topics.map(t => [t.id, t]));
const TASK = Object.fromEntries(D.tasks.map(t => [t.id, t]));
const DAY = 24 * 3600 * 1000;
const INTERVALS = [0, 0, 1, 3, 7, 16]; // Tage bis zur nächsten Wiederholung je Box (1–5)

// =====================================================================
// Speicher
// =====================================================================
const KEY = "ppl-state-v1";
let S;
try { S = JSON.parse(localStorage.getItem(KEY)) || {}; } catch (e) { S = {}; }
S.cards = S.cards || {}; S.quiz = S.quiz || {}; S.tasks = S.tasks || {}; S.play = S.play || "";
function save() { try { localStorage.setItem(KEY, JSON.stringify(S)); } catch (e) { /* privat-modus */ } }

// =====================================================================
// Hilfen: HTML, Markdown, Syntax-Highlighting
// =====================================================================
const esc = s => String(s).replace(/[&<>"']/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));

const KW = new Set("False None True and as assert break class continue def del elif else except finally for from global if import in is lambda nonlocal not or pass raise return try while with yield".split(" "));
const BI = new Set("print input len range int float str bool list dict set tuple sum min max sorted abs round type enumerate zip map filter open isinstance super reversed any all self".split(" "));

function highlight(code) {
  const re = /(#[^\n]*)|([fFrRbB]{0,2}"""[\s\S]*?"""|[fFrRbB]{0,2}'''[\s\S]*?'''|[fFrRbB]{0,2}"(?:\\.|[^"\\\n])*"|[fFrRbB]{0,2}'(?:\\.|[^'\\\n])*')|\b(\d+\.?\d*(?:e[+-]?\d+)?)\b|([A-Za-z_][A-Za-z0-9_]*)/g;
  let out = "", last = 0, m, prevWord = "";
  while ((m = re.exec(code))) {
    out += esc(code.slice(last, m.index));
    last = re.lastIndex;
    if (m[1]) out += `<span class="tk-com">${esc(m[1])}</span>`;
    else if (m[2]) out += `<span class="tk-str">${esc(m[2])}</span>`;
    else if (m[3]) out += `<span class="tk-num">${esc(m[3])}</span>`;
    else if (m[4]) {
      const w = m[4];
      if (KW.has(w)) out += `<span class="tk-kw">${w}</span>`;
      else if (prevWord === "def" || prevWord === "class") out += `<span class="tk-fn">${w}</span>`;
      else if (BI.has(w)) out += `<span class="tk-bi">${w}</span>`;
      else out += w;
      prevWord = w;
      continue;
    }
    prevWord = "";
  }
  return out + esc(code.slice(last));
}
const codeBlock = c => `<pre class="code"><code>${highlight(c)}</code></pre>`;

function inline(t) {
  // `code` und **fett**
  return t.split(/(`[^`]+`)/g).map(part => {
    if (part.startsWith("`") && part.endsWith("`") && part.length > 1) return `<code>${esc(part.slice(1, -1))}</code>`;
    return esc(part).replace(/\*\*(.+?)\*\*/g, "<b>$1</b>");
  }).join("");
}

function md(text) {
  const parts = String(text).split(/```\n?([\s\S]*?)\n?```/g);
  let html = "";
  parts.forEach((p, i) => {
    if (i % 2 === 1) { html += codeBlock(p); return; }
    p.split(/\n{2,}/).forEach(block => {
      block = block.replace(/^\n+|\n+$/g, "");
      if (!block) return;
      const lines = block.split("\n");
      if (lines.every(l => /^- /.test(l))) {
        html += "<ul>" + lines.map(l => `<li>${inline(l.slice(2))}</li>`).join("") + "</ul>";
      } else if (lines.every(l => /^\d+\. /.test(l))) {
        html += "<ol>" + lines.map(l => `<li>${inline(l.replace(/^\d+\. /, ""))}</li>`).join("") + "</ol>";
      } else {
        // gemischt: Listenzeilen innerhalb eines Absatzes trotzdem schön darstellen
        let buf = [], listBuf = [];
        const flushP = () => { if (buf.length) { html += `<p>${buf.map(inline).join("<br>")}</p>`; buf = []; } };
        const flushL = () => { if (listBuf.length) { html += "<ul>" + listBuf.map(l => `<li>${inline(l)}</li>`).join("") + "</ul>"; listBuf = []; } };
        lines.forEach(l => {
          if (/^- /.test(l)) { flushP(); listBuf.push(l.slice(2)); }
          else { flushL(); buf.push(l); }
        });
        flushP(); flushL();
      }
    });
  });
  return `<div class="md">${html}</div>`;
}

function shuffle(a) {
  a = a.slice();
  for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; }
  return a;
}

// =====================================================================
// Python-Runner (Web Worker + Timeout)
// =====================================================================
const Py = {
  worker: null, state: "idle", pending: new Map(), seq: 0, readyWaiters: [],
  ensure() {
    if (this.worker) return;
    this.state = "loading"; updatePyStatus();
    this.worker = new Worker("js/py-worker.js");
    this.worker.onmessage = (e) => {
      const m = e.data;
      if (m.type === "ready") {
        this.state = "ready"; updatePyStatus();
        this.readyWaiters.forEach(r => r.resolve()); this.readyWaiters = [];
      } else if (m.type === "loaderror") {
        this.state = "error"; updatePyStatus();
        this.readyWaiters.forEach(r => r.reject(new Error(m.message))); this.readyWaiters = [];
        this.worker.terminate(); this.worker = null;
      } else if (m.type === "result") {
        const p = this.pending.get(m.id);
        if (p) { clearTimeout(p.timer); this.pending.delete(m.id); p.resolve(m.data); }
      }
    };
  },
  whenReady() {
    this.ensure();
    if (this.state === "ready") return Promise.resolve();
    return new Promise((resolve, reject) => this.readyWaiters.push({ resolve, reject }));
  },
  async exec(type, code, arg, timeoutMs = 6000) {
    await this.whenReady();
    const id = ++this.seq;
    return new Promise((resolve) => {
      const timer = setTimeout(() => {
        this.pending.delete(id);
        // Endlosschleife o. ä. → Worker abschießen und neu starten
        this.worker.terminate(); this.worker = null; this.state = "idle";
        this.pending.forEach(p => p.resolve({ timeout: true })); this.pending.clear();
        this.ensure();
        resolve({ timeout: true });
      }, timeoutMs);
      this.pending.set(id, { resolve, timer });
      this.worker.postMessage({ type, id, code, arg });
    });
  },
  run(code, inputs) { return this.exec("run", code, inputs || []); },
  check(code, spec) { return this.exec("check", code, spec, 10000); },
};

function updatePyStatus() {
  const el = $("#pyStatus");
  el.classList.toggle("ready", Py.state === "ready");
  el.innerHTML = { idle: "🐍 Python: aus", loading: '<span class="spinner"></span> Python lädt…', ready: "🐍 bereit", error: "⚠️ Python offline" }[Py.state];
  document.querySelectorAll("[data-pyhint]").forEach(n => {
    n.innerHTML = Py.state === "loading" ? '<span class="spinner"></span> Python wird geladen – beim ersten Mal ca. 10 MB, danach offline verfügbar.'
      : Py.state === "error" ? "⚠️ Python konnte nicht geladen werden. Beim allerersten Start wird eine Internetverbindung benötigt." : "";
  });
}

// =====================================================================
// Editor (Textarea mit Python-freundlichem Verhalten + Sondertasten)
// =====================================================================
function insertText(ta, text) {
  ta.focus();
  if (!document.execCommand || !document.execCommand("insertText", false, text)) {
    ta.setRangeText(text, ta.selectionStart, ta.selectionEnd, "end");
    ta.dispatchEvent(new Event("input"));
  }
}

function makeEditor(container, initial, onChange) {
  container.innerHTML = `
    <div class="editor-wrap">
      <textarea class="editor" spellcheck="false" autocapitalize="off" autocomplete="off" autocorrect="off"></textarea>
      <div class="keys">
        ${["⇥", ":", "(", ")", "[", "]", "{", "}", '"', "'", "=", "==", "+", "-", "*", "/", "%", "<", ">", "#", "_", ".", ",", "↶"]
          .map(k => `<button type="button" data-k="${esc(k)}">${esc(k)}</button>`).join("")}
      </div>
    </div>`;
  const ta = $("textarea", container);
  ta.value = initial;
  const fit = () => { ta.style.height = "auto"; ta.style.height = Math.max(220, ta.scrollHeight + 4) + "px"; };
  ta.addEventListener("input", () => { fit(); onChange && onChange(ta.value); });
  setTimeout(fit, 0);

  ta.addEventListener("keydown", (e) => {
    const v = ta.value, pos = ta.selectionStart;
    const lineStart = v.lastIndexOf("\n", pos - 1) + 1;
    const before = v.slice(lineStart, pos);
    if (e.key === "Tab") {
      e.preventDefault();
      insertText(ta, "    ");
    } else if (e.key === "Enter" && !e.shiftKey && ta.selectionStart === ta.selectionEnd) {
      e.preventDefault();
      let indent = (before.match(/^ */) || [""])[0];
      if (/:\s*$/.test(before)) indent += "    ";
      insertText(ta, "\n" + indent);
    } else if (e.key === "Backspace" && ta.selectionStart === ta.selectionEnd && before.length && /^ +$/.test(before) && before.length % 4 === 0) {
      e.preventDefault();
      ta.setSelectionRange(pos - 4, pos);
      insertText(ta, "");
    }
  });

  $(".keys", container).addEventListener("pointerdown", e => { if (e.target.closest("button")) e.preventDefault(); });
  $(".keys", container).addEventListener("click", (e) => {
    const b = e.target.closest("button"); if (!b) return;
    const k = b.dataset.k;
    if (k === "⇥") insertText(ta, "    ");
    else if (k === "↶") { ta.focus(); document.execCommand("undo"); }
    else insertText(ta, k);
  });
  return {
    get value() { return ta.value; },
    set value(v) { ta.value = v; fit(); onChange && onChange(v); },
    textarea: ta,
  };
}

function renderConsole(el, res) {
  if (!res) { el.innerHTML = '<span class="info">Noch nichts ausgeführt.</span>'; return; }
  if (res.timeout) { el.innerHTML = '<span class="err">⏱ Zeitlimit überschritten – hast du eine Endlosschleife? (z. B. Zähler in while nicht erhöht)</span>'; return; }
  if (res.internal) { el.innerHTML = `<span class="err">Interner Fehler: ${esc(res.internal)}</span>`; return; }
  let h = res.output ? esc(res.output) : "";
  if (res.error) h += (h && !h.endsWith("\n") ? "\n" : "") + errorHtml(res.error);
  if (!h) h = '<span class="info">(Keine Ausgabe – nutze print(), um etwas anzuzeigen.)</span>';
  el.innerHTML = h;
}
function errorHtml(err) {
  return `<span class="err">❌ ${esc(err.type)}${err.line ? ` in Zeile ${err.line}` : ""}: ${esc(err.message)}</span>` +
    (err.hint ? `\n<span class="info">💡 ${esc(err.hint)}</span>` : "");
}

// =====================================================================
// Statistik
// =====================================================================
function cardStats(topic) {
  const cs = D.cards.filter(c => !topic || c.topic === topic);
  const now = Date.now();
  let due = 0, learned = 0, seen = 0;
  cs.forEach(c => {
    const st = S.cards[c.id];
    if (!st) { due++; return; }
    seen++;
    if (st.box >= 3) learned++;
    if (st.due <= now) due++;
  });
  return { total: cs.length, due, learned, seen };
}
function taskStats(topic) {
  const ts = D.tasks.filter(t => !topic || t.topic === topic);
  return { total: ts.length, solved: ts.filter(t => S.tasks[t.id] && S.tasks[t.id].solved).length };
}
function quizStats(topic) {
  const qs = D.quiz.filter(q => !topic || q.topic === topic);
  let right = 0, answered = 0;
  qs.forEach(q => { const s = S.quiz[q.id]; if (s) { answered++; if (s.last) right++; } });
  return { total: qs.length, right, answered };
}
function topicProgress(topic) {
  const c = cardStats(topic), t = taskStats(topic), q = quizStats(topic);
  return (c.learned / c.total + t.solved / t.total + q.right / q.total) / 3;
}
const pct = x => Math.round(x * 100) + "%";

// =====================================================================
// Router
// =====================================================================
const routes = [];
const route = (re, fn) => routes.push([re, fn]);
let cleanup = null;

function go() {
  if (cleanup) { cleanup(); cleanup = null; }
  const hash = location.hash.replace(/^#/, "") || "/";
  for (const [re, fn] of routes) {
    const m = hash.match(re);
    if (m) { window.scrollTo(0, 0); fn(...m.slice(1).map(decodeURIComponent)); return; }
  }
  location.hash = "#/";
}
function setHeader(title, back, tab) {
  $("#title").textContent = title;
  const b = $("#backBtn");
  b.hidden = !back;
  b.onclick = () => { location.hash = back; };
  document.querySelectorAll(".tabbar a").forEach(a => a.classList.toggle("active", a.dataset.tab === tab));
}
window.addEventListener("hashchange", go);

// =====================================================================
// START
// =====================================================================
route(/^\/$/, () => {
  setHeader("Python-Lerner", null, "home");
  const c = cardStats(), t = taskStats(), q = quizStats();
  const next = D.tasks.find(x => !(S.tasks[x.id] && S.tasks[x.id].solved));
  view.innerHTML = `
    <div class="card hero">
      <h2>Hallo Pascal 👋</h2>
      <p>Karteikarten für die Theorie, Quiz zum Code-Lesen und echte Programmieraufgaben, die automatisch geprüft werden.</p>
    </div>
    <div class="stats">
      <div class="stat"><b>${c.learned}/${c.total}</b><span>Karten sicher</span></div>
      <div class="stat"><b>${q.answered ? pct(q.right / q.total) : "–"}</b><span>Quiz richtig</span></div>
      <div class="stat"><b>${t.solved}/${t.total}</b><span>Aufgaben gelöst</span></div>
    </div>
    <div style="height:14px"></div>
    <div class="btnrow">
      <a class="btn" href="#/karten/alle">🗂️ ${c.due} Karten fällig</a>
      ${next ? `<a class="btn yellow" href="#/aufgabe/${next.id}">💻 Nächste Aufgabe</a>` : `<a class="btn ok" href="#/aufgaben">🏆 Alles gelöst!</a>`}
    </div>
    <h3>Themen</h3>
    <div class="list">
      ${D.topics.map(tp => {
        const p = topicProgress(tp.id);
        return `<a class="item" href="#/thema/${tp.id}">
          <div class="ico">${tp.icon}</div>
          <div class="grow"><div class="t">${esc(tp.title)}</div><div class="s">${esc(tp.desc)}</div>
          <div class="bar"><i style="width:${pct(p)}"></i></div></div>
          <div class="chev">›</div></a>`;
      }).join("")}
    </div>
    <div class="list">
      <a class="item" href="#/info"><div class="ico">ℹ️</div><div class="grow"><div class="t">Infos, Offline & Einstellungen</div><div class="s">Zum Home-Bildschirm hinzufügen, Fortschritt zurücksetzen</div></div><div class="chev">›</div></a>
    </div>`;
});

// ---- Themenseite
route(/^\/thema\/([\w]+)$/, (id) => {
  const tp = TOPIC[id]; if (!tp) return (location.hash = "#/");
  setHeader(tp.title, "#/", "home");
  const c = cardStats(id), t = taskStats(id), q = quizStats(id);
  const tasks = D.tasks.filter(x => x.topic === id);
  view.innerHTML = `
    <div class="card"><div class="row"><div style="font-size:40px">${tp.icon}</div>
      <div><h2 style="margin:0">${esc(tp.title)}</h2><div class="muted small">${esc(tp.desc)}</div></div></div></div>
    <div class="list">
      <a class="item" href="#/karten/${id}"><div class="ico">🗂️</div><div class="grow"><div class="t">Karteikarten</div><div class="s">${c.learned} von ${c.total} sicher</div></div>${c.due ? `<span class="badge due">${c.due} fällig</span>` : ""}<div class="chev">›</div></a>
      <a class="item" href="#/quiz/${id}"><div class="ico">❓</div><div class="grow"><div class="t">Quiz</div><div class="s">${q.right} von ${q.total} zuletzt richtig</div></div><div class="chev">›</div></a>
    </div>
    <h3>Aufgaben (${t.solved}/${t.total})</h3>
    <div class="list">${tasks.map(taskItem).join("")}</div>`;
});

const stars = n => `<span class="level">${"★".repeat(n)}</span><span class="level off">${"★".repeat(3 - n)}</span>`;
function taskItem(x) {
  const st = S.tasks[x.id] || {};
  return `<a class="item" href="#/aufgabe/${x.id}">
    <div class="ico">${st.solved ? "✅" : "⬜️"}</div>
    <div class="grow"><div class="t">${esc(x.title)}</div><div class="s">${stars(x.level)} ${esc(TOPIC[x.topic].title)}</div></div>
    <div class="chev">›</div></a>`;
}

// =====================================================================
// KARTEIKARTEN
// =====================================================================
route(/^\/karten$/, () => {
  setHeader("Karteikarten", null, "karten");
  const all = cardStats();
  view.innerHTML = `
    <div class="card">
      <h2>Karteikarten</h2>
      <p class="muted small" style="margin:0 0 12px">Lernkartei-System: Gewusste Karten wandern ins nächste Fach und kommen später wieder (1, 3, 7, 16 Tage). Nicht gewusste Karten kommen sofort zurück in Fach 1.</p>
      <a class="btn block" href="#/karten/alle">Alle Themen gemischt · ${all.due} fällig</a>
    </div>
    <div class="list">
      ${D.topics.map(tp => {
        const s = cardStats(tp.id);
        return `<a class="item" href="#/karten/${tp.id}"><div class="ico">${tp.icon}</div>
          <div class="grow"><div class="t">${esc(tp.title)}</div><div class="s">${s.learned}/${s.total} sicher</div>
          <div class="bar"><i style="width:${pct(s.learned / s.total)}"></i></div></div>
          ${s.due ? `<span class="badge due">${s.due}</span>` : `<span class="badge done">✓</span>`}</a>`;
      }).join("")}
    </div>`;
});

route(/^\/karten\/([\w]+)(?:\/(alle))?$/, (topic, forceAll) => {
  const isAll = topic === "alle";
  if (!isAll && !TOPIC[topic]) return (location.hash = "#/karten");
  setHeader(isAll ? "Alle Karten" : TOPIC[topic].title, "#/karten", "karten");
  const pool = D.cards.filter(c => isAll || c.topic === topic);
  const now = Date.now();
  let deck = forceAll ? shuffle(pool) : shuffle(pool.filter(c => !S.cards[c.id] || S.cards[c.id].due <= now));
  // niedrige Fächer zuerst
  deck.sort((a, b) => ((S.cards[a.id] || {}).box || 0) - ((S.cards[b.id] || {}).box || 0));
  if (!forceAll && deck.length > 25) deck = deck.slice(0, 25);

  if (!deck.length) {
    view.innerHTML = `<div class="card center"><div style="font-size:48px">🎉</div><h2>Alles erledigt!</h2>
      <p class="muted">In diesem Bereich ist gerade keine Karte fällig.</p>
      <a class="btn block" href="#/karten/${topic}/alle">Trotzdem alle wiederholen</a></div>`;
    return;
  }
  let i = 0, known = 0, again = 0;
  const total = deck.length;

  function show() {
    if (!deck.length) {
      view.innerHTML = `<div class="card center"><div style="font-size:48px">💪</div><h2>Runde geschafft!</h2>
        <p>${known} gewusst · ${again} nochmal</p>
        <div class="btnrow"><a class="btn secondary" href="#/karten">Übersicht</a><a class="btn" href="#/karten/${topic}">Weiter lernen</a></div></div>`;
      return;
    }
    const c = deck[0];
    const st = S.cards[c.id] || { box: 0 };
    view.innerHTML = `
      <div class="progress-line"><span>${TOPIC[c.topic].icon} ${esc(TOPIC[c.topic].title)}</span><span>${Math.min(i + 1, total)} / ${total} · Fach ${st.box || "neu"}</span></div>
      <div class="flash" id="flash"><div class="flash-inner">
        <div class="face front"><div class="label">Frage</div><div class="content">${md(c.front)}</div><div class="tap">Tippen zum Umdrehen</div></div>
        <div class="face back"><div class="label">Antwort</div>${md(c.back)}</div>
      </div></div>
      <div class="btnrow" id="answerBtns" style="visibility:hidden">
        <button class="btn bad" id="no">✗ Nochmal</button>
        <button class="btn ok" id="yes">✓ Gewusst</button>
      </div>`;
    const flash = $("#flash");
    flash.onclick = () => { flash.classList.toggle("flipped"); $("#answerBtns").style.visibility = "visible"; };
    $("#yes").onclick = () => rate(true);
    $("#no").onclick = () => rate(false);
  }
  function rate(ok) {
    const c = deck.shift();
    const st = S.cards[c.id] || { box: 0 };
    if (ok) {
      st.box = Math.min(5, (st.box || 0) + 1);
      st.due = Date.now() + INTERVALS[st.box] * DAY;
      known++; i++;
    } else {
      st.box = 1; st.due = Date.now();
      again++;
      deck.splice(Math.min(deck.length, 3), 0, c); // kommt in dieser Runde nochmal
    }
    S.cards[c.id] = st; save();
    show();
  }
  show();
});

// =====================================================================
// QUIZ
// =====================================================================
route(/^\/quiz(?:\/([\w]+))?$/, (topicArg) => {
  setHeader("Quiz", topicArg ? "#/thema/" + topicArg : null, "quiz");
  let selected = new Set(topicArg ? [topicArg] : D.topics.map(t => t.id));
  function renderSetup() {
    const qs = quizStats();
    view.innerHTML = `
      <div class="card">
        <h2>Quiz: Code lesen</h2>
        <p class="muted small" style="margin:0 0 12px">Was gibt der Code aus? Genau das kommt in Klausuren dran. Bisher ${qs.right} von ${qs.total} Fragen zuletzt richtig.</p>
        <div class="chips">${D.topics.map(t => `<button class="chip ${selected.has(t.id) ? "on" : ""}" data-t="${t.id}">${t.icon} ${esc(t.title)}</button>`).join("")}</div>
        <div class="btnrow"><button class="btn secondary" id="toggleAll">Alle / keine</button>
        <button class="btn" id="start">10 Fragen starten</button></div>
        <div style="height:10px"></div>
        <button class="btn yellow block" id="startWrong">Nur bisher falsche / neue Fragen</button>
      </div>`;
    view.querySelectorAll(".chip").forEach(ch => ch.onclick = () => {
      const t = ch.dataset.t; selected.has(t) ? selected.delete(t) : selected.add(t); renderSetup();
    });
    $("#toggleAll").onclick = () => { selected = selected.size ? new Set() : new Set(D.topics.map(t => t.id)); renderSetup(); };
    $("#start").onclick = () => start(false);
    $("#startWrong").onclick = () => start(true);
  }
  function start(onlyWrong) {
    let pool = D.quiz.filter(q => selected.has(q.topic));
    if (onlyWrong) pool = pool.filter(q => !S.quiz[q.id] || !S.quiz[q.id].last);
    if (!pool.length) { alert(onlyWrong ? "Keine offenen Fragen – stark! 🎉" : "Bitte mindestens ein Thema wählen."); return; }
    runQuiz(shuffle(pool).slice(0, 10));
  }
  function runQuiz(qs) {
    let idx = 0, score = 0;
    function q() {
      if (idx >= qs.length) {
        view.innerHTML = `<div class="card center"><div style="font-size:48px">${score === qs.length ? "🏆" : score >= qs.length * 0.7 ? "👍" : "📚"}</div>
          <h2>${score} von ${qs.length} richtig</h2>
          <div class="btnrow"><button class="btn secondary" id="back">Andere Themen</button><button class="btn" id="again">Neue Runde</button></div></div>`;
        $("#back").onclick = renderSetup; $("#again").onclick = () => start(false);
        return;
      }
      const item = qs[idx];
      const opts = shuffle(item.options);
      const isCode = !!item.code;
      view.innerHTML = `
        <div class="progress-line"><span>${TOPIC[item.topic].icon} ${esc(TOPIC[item.topic].title)}</span><span>Frage ${idx + 1} / ${qs.length} · ${score} ✓</span></div>
        <div class="card">
          <div style="font-weight:600;margin-bottom:10px">${inline(item.question)}</div>
          ${isCode ? codeBlock(item.code) : ""}
        </div>
        <div id="opts">${opts.map((o, i) => `<button class="opt ${isCode ? "" : "plain"}" data-i="${i}">${esc(o)}</button>`).join("")}</div>
        <div id="fb"></div>`;
      view.querySelectorAll(".opt").forEach(b => b.onclick = () => {
        if (view.querySelector(".opt.right")) return;
        const chosen = opts[+b.dataset.i];
        const ok = chosen === item.options[0];
        if (ok) score++;
        S.quiz[item.id] = { last: ok, n: ((S.quiz[item.id] || {}).n || 0) + 1 }; save();
        view.querySelectorAll(".opt").forEach(x => {
          if (opts[+x.dataset.i] === item.options[0]) x.classList.add("right");
          else if (x === b) x.classList.add("wrong");
        });
        $("#fb").innerHTML = `<div class="feedback ${ok ? "ok" : "bad"}"><b>${ok ? "Richtig! ✓" : "Leider falsch."}</b><br>${inline(item.explanation)}</div>
          <button class="btn block" id="next">${idx + 1 < qs.length ? "Weiter" : "Auswertung"}</button>`;
        $("#next").onclick = () => { idx++; q(); window.scrollTo(0, 0); };
        $("#next").scrollIntoView({ behavior: "smooth", block: "nearest" });
      });
    }
    q();
  }
  if (topicArg && TOPIC[topicArg]) start(false); else renderSetup();
});

// =====================================================================
// AUFGABEN
// =====================================================================
route(/^\/aufgaben$/, () => {
  setHeader("Programmieraufgaben", null, "aufgaben");
  const t = taskStats();
  Py.ensure();
  view.innerHTML = `
    <div class="card">
      <h2>Programmieraufgaben</h2>
      <p class="muted small" style="margin:0">${t.solved} von ${t.total} gelöst. Dein Code läuft direkt auf dem Gerät in echtem Python und wird automatisch geprüft. ★ = leicht, ★★★ = knifflig.</p>
      <div class="small muted" data-pyhint style="margin-top:8px"></div>
    </div>
    ${D.topics.map(tp => {
      const ts = D.tasks.filter(x => x.topic === tp.id);
      const s = taskStats(tp.id);
      return `<h3>${tp.icon} ${esc(tp.title)} · ${s.solved}/${s.total}</h3><div class="list">${ts.map(taskItem).join("")}</div>`;
    }).join("")}`;
  updatePyStatus();
});

route(/^\/aufgabe\/([\w]+)$/, (id) => {
  const task = TASK[id]; if (!task) return (location.hash = "#/aufgaben");
  setHeader(task.title, "#/aufgaben", "aufgaben");
  Py.ensure();
  const st = S.tasks[id] = S.tasks[id] || {};
  const runs = task.check.type === "output" ? task.check.runs : [];
  const needsInput = runs.some(r => r.inputs && r.inputs.length);
  const idx = D.tasks.indexOf(task);
  const next = D.tasks[idx + 1];
  let hintsShown = 0;

  view.innerHTML = `
    <div class="card">
      <div class="row" style="margin-bottom:6px">${stars(task.level)}
        <span class="muted small grow">${TOPIC[task.topic].icon} ${esc(TOPIC[task.topic].title)}</span>
        ${st.solved ? '<span class="badge done">✓ gelöst</span>' : ""}</div>
      ${md(task.text)}
      ${task.check.type === "function" ? `<p class="muted small" style="margin:8px 0 0">Die Funktion soll ihr Ergebnis mit <code>return</code> zurückgeben. Zum Ausprobieren kannst du unten z. B. <code>print(${esc(task.check.name)}(...))</code> ergänzen.</p>` : ""}
    </div>
    <div id="ed"></div>
    ${needsInput ? `<label class="small muted">Eingaben für <code>input()</code> beim Ausführen (eine pro Zeile):</label>
      <textarea class="stdin" id="stdin" rows="2" autocapitalize="off" autocorrect="off" spellcheck="false">${esc(runs[0].inputs.join("\n"))}</textarea><div style="height:10px"></div>` : ""}
    <div class="btnrow">
      <button class="btn secondary" id="run">▶ Ausführen</button>
      <button class="btn" id="check">✓ Prüfen</button>
    </div>
    <div class="small muted" data-pyhint style="margin:8px 2px"></div>
    <div style="height:10px"></div>
    <div id="resultBox"></div>
    <div class="console" id="console"></div>
    <div id="hints"></div>
    <div class="btnrow">
      <button class="btn secondary" id="hintBtn">💡 Tipp (${task.hints.length})</button>
      <button class="btn secondary" id="solBtn">👀 Lösung</button>
    </div>
    <div id="sol"></div>
    <div style="height:10px"></div>
    <div class="btnrow">
      <button class="btn secondary" id="resetBtn">↺ Startcode</button>
      ${next ? `<a class="btn secondary" href="#/aufgabe/${next.id}">Nächste ›</a>` : ""}
    </div>`;
  updatePyStatus();

  const ed = makeEditor($("#ed"), st.code != null ? st.code : task.starter, v => { st.code = v; save(); });
  renderConsole($("#console"), null);

  const busy = (on) => { ["run", "check"].forEach(b => $("#" + b).disabled = on); };

  $("#run").onclick = async () => {
    busy(true);
    $("#console").innerHTML = '<span class="info"><span class="spinner"></span> läuft…</span>';
    const inputs = needsInput ? $("#stdin").value.split("\n").filter((l, i, a) => l !== "" || i < a.length - 1) : [];
    try { renderConsole($("#console"), await Py.run(ed.value, inputs)); }
    catch (e) { $("#console").innerHTML = `<span class="err">${esc(e.message)}</span>`; }
    busy(false);
  };

  $("#check").onclick = async () => {
    busy(true);
    $("#resultBox").innerHTML = '<div class="banner"><span class="spinner"></span> Wird geprüft…</div>';
    let r;
    try { r = await Py.check(ed.value, task.check); }
    catch (e) { $("#resultBox").innerHTML = `<div class="banner bad">${esc(e.message)}</div>`; busy(false); return; }
    busy(false);
    showResult(r);
  };

  function showResult(r) {
    const box = $("#resultBox");
    if (r.timeout) { box.innerHTML = '<div class="banner bad">⏱ Zeitlimit überschritten – vermutlich eine Endlosschleife.</div>'; return; }
    if (r.internal) { box.innerHTML = `<div class="banner bad">Interner Fehler: ${esc(r.internal)}</div>`; return; }
    renderConsole($("#console"), { output: r.output, error: r.error });
    let h = "";
    if (r.passed) {
      const first = !st.solved;
      st.solved = true; save();
      h += `<div class="banner ok">🎉 Super, alle Tests bestanden!${first ? "" : " (schon zuvor gelöst)"}</div>`;
      if (next) h += `<a class="btn ok block" href="#/aufgabe/${next.id}" style="margin-bottom:12px">Nächste Aufgabe: ${esc(next.title)} ›</a>`;
    } else {
      const okCount = r.results.filter(x => x.ok).length;
      h += `<div class="banner bad">${r.error ? "Dein Code hat einen Fehler." : r.results.length ? `${okCount} von ${r.results.length} Tests bestanden.` : "Noch nicht ganz."}</div>`;
    }
    r.problems.forEach(p => h += `<div class="result bad">⚠️ ${esc(p)}</div>`);
    if (r.error && !r.results.length) h += `<div class="result bad">${errorHtml(r.error).replace(/\n/g, "<br>")}</div>`;
    r.results.forEach(x => {
      h += `<div class="result ${x.ok ? "ok" : "bad"}"><div class="lbl">${x.ok ? "✓" : "✗"} ${esc(x.label)}</div>`;
      if (!x.ok) h += `<div class="cmp"><span class="muted">erwartet:</span><pre>${esc(x.expected)}</pre><span class="muted">bekommen:</span><pre>${esc(x.got === "" ? "(nichts)" : x.got)}</pre></div>`;
      h += "</div>";
    });
    box.innerHTML = h;
    box.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  $("#hintBtn").onclick = () => {
    if (hintsShown >= task.hints.length) return;
    $("#hints").insertAdjacentHTML("beforeend", `<div class="hint"><span>💡</span><div>${md(task.hints[hintsShown])}</div></div>`);
    hintsShown++;
    $("#hintBtn").textContent = hintsShown >= task.hints.length ? "💡 Keine weiteren Tipps" : `💡 Noch ein Tipp (${task.hints.length - hintsShown})`;
  };
  $("#solBtn").onclick = () => {
    if ($("#sol").innerHTML) { $("#sol").innerHTML = ""; return; }
    if (!st.solved && !confirm("Lösung wirklich anzeigen? Versuch es ruhig erst noch mit einem Tipp 😉")) return;
    $("#sol").innerHTML = `<div style="height:10px"></div><div class="card"><b>Musterlösung</b> <span class="muted small">(es gibt oft mehrere richtige Wege)</span>
      <div style="height:8px"></div>${codeBlock(task.solution)}<button class="btn secondary block" id="useSol">In den Editor übernehmen</button></div>`;
    $("#useSol").onclick = () => { ed.value = task.solution; window.scrollTo({ top: 0, behavior: "smooth" }); };
  };
  $("#resetBtn").onclick = () => { if (confirm("Deinen Code durch den Startcode ersetzen?")) ed.value = task.starter; };
});

// =====================================================================
// SPIELWIESE
// =====================================================================
route(/^\/spielwiese$/, () => {
  setHeader("Spielwiese", null, "spielwiese");
  Py.ensure();
  view.innerHTML = `
    <div class="card"><h2 style="margin:0 0 4px">Freies Programmieren</h2>
      <p class="muted small" style="margin:0">Probier hier alles aus, was du willst. Der Code wird automatisch gespeichert.</p>
      <div class="small muted" data-pyhint style="margin-top:8px"></div></div>
    <div id="ed"></div>
    <label class="small muted">Eingaben für <code>input()</code> (eine pro Zeile, optional):</label>
    <textarea class="stdin" id="stdin" rows="2" autocapitalize="off" autocorrect="off" spellcheck="false"></textarea>
    <div style="height:10px"></div>
    <div class="btnrow"><button class="btn secondary" id="clear">Leeren</button><button class="btn" id="run">▶ Ausführen</button></div>
    <div style="height:12px"></div>
    <div class="console" id="console"></div>`;
  updatePyStatus();
  const sample = '# Willkommen auf der Spielwiese!\nname = "Pascal"\nfor i in range(3):\n    print(f"Hallo {name}, Runde {i + 1}")\n';
  const ed = makeEditor($("#ed"), S.play || sample, v => { S.play = v; save(); });
  renderConsole($("#console"), null);
  $("#run").onclick = async () => {
    $("#run").disabled = true;
    $("#console").innerHTML = '<span class="info"><span class="spinner"></span> läuft…</span>';
    const inputs = $("#stdin").value ? $("#stdin").value.split("\n") : [];
    try { renderConsole($("#console"), await Py.run(ed.value, inputs)); }
    catch (e) { $("#console").innerHTML = `<span class="err">${esc(e.message)}</span>`; }
    $("#run").disabled = false;
  };
  $("#clear").onclick = () => { if (confirm("Editor leeren?")) ed.value = ""; };
});

// =====================================================================
// INFO
// =====================================================================
route(/^\/info$/, () => {
  setHeader("Infos", "#/", "home");
  view.innerHTML = `
    <div class="card"><h2>📱 Auf den Home-Bildschirm</h2>
      <ol style="margin:0;padding-left:20px"><li>Seite in <b>Safari</b> öffnen</li><li>Unten auf <b>Teilen</b> (□↑) tippen</li><li><b>„Zum Home-Bildschirm“</b> wählen</li></ol>
      <p class="muted small" style="margin:10px 0 0">Danach startet die App wie eine normale App im Vollbild.</p></div>
    <div class="card"><h2>✈️ Offline nutzen</h2>
      <p class="small" style="margin:0 0 10px">Karten und Quiz funktionieren sofort offline. Für die Programmieraufgaben wird Python einmalig (ca. 10 MB) aus dem Internet geladen und danach auf dem Gerät gespeichert.</p>
      <button class="btn block" id="loadPy">🐍 Python jetzt laden</button>
      <div class="small muted" data-pyhint style="margin-top:8px"></div></div>
    <div class="card"><h2>🎯 Klausur-Tipps</h2>
      ${md(`- Unterschied **return** und **print** sicher beherrschen
- Code-Ausgaben „im Kopf“ ausführen: Variablen-Tabelle Zeile für Zeile mitschreiben
- \`range(a, b)\` endet bei **b-1**, Indizes beginnen bei **0**
- \`input()\` liefert immer einen **String**
- Fehlertypen erkennen: SyntaxError, NameError, TypeError, ValueError, IndexError, KeyError
- Typische Muster auswendig: Summe/Zähler in Schleife, Maximum suchen, Zählen mit Dict, Primzahltest`)}</div>
    <div class="card"><h2>🧹 Fortschritt</h2>
      <p class="small muted" style="margin:0 0 10px">Der Fortschritt wird nur auf diesem Gerät gespeichert.</p>
      <button class="btn bad block" id="reset">Gesamten Fortschritt löschen</button></div>
    <p class="center small muted">Inhalt: ${D.cards.length} Karteikarten · ${D.quiz.length} Quizfragen · ${D.tasks.length} Aufgaben</p>`;
  updatePyStatus();
  $("#loadPy").onclick = () => Py.whenReady().catch(() => {});
  $("#reset").onclick = () => {
    if (confirm("Wirklich ALLES zurücksetzen (Karten, Quiz, Aufgaben, Code)?")) {
      S = { cards: {}, quiz: {}, tasks: {}, play: "" }; save(); location.hash = "#/";
    }
  };
});

// =====================================================================
// Start
// =====================================================================
updatePyStatus();
go();
if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => navigator.serviceWorker.register("sw.js").catch(() => {}));
}
})();
