"""Prüft alle Inhalte und erzeugt js/data.js.

    python3 tools/build.py

- jede Musterlösung muss ihre Tests bestehen
- jeder Startcode muss die Tests NICHT bestehen
- jede Quiz-Code-Antwort muss der echten Ausgabe entsprechen
"""
import json, os, sys

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
sys.path.insert(0, os.path.join(ROOT, "js"))
sys.path.insert(0, os.path.join(ROOT, "tools"))
import harness  # noqa: E402
import content  # noqa: E402

errors = []
topic_ids = {t[0] for t in content.TOPICS}

# --- Aufgaben
ids = set()
for t in content.TASKS:
    if t["id"] in ids:
        errors.append(f"doppelte ID {t['id']}")
    ids.add(t["id"])
    if t["topic"] not in topic_ids:
        errors.append(f"{t['id']}: unbekanntes Thema")
    r = json.loads(harness.check(t["solution"], t["check"]))
    if not r["passed"]:
        errors.append(f"{t['id']}: Musterlösung besteht nicht: {r}")
    r2 = json.loads(harness.check(t["starter"], t["check"]))
    if r2["passed"]:
        errors.append(f"{t['id']}: Startcode besteht bereits!")

# --- Quiz
for i, q in enumerate(content.QUIZ):
    topic, frage, code, opts, expl = q
    if topic not in topic_ids:
        errors.append(f"Quiz {i}: unbekanntes Thema")
    if len(set(opts)) != len(opts):
        errors.append(f"Quiz {i}: doppelte Optionen")
    if code:
        display, clean, err, _ = harness._exec(code)
        got = err["type"] if err else clean.strip()
        if got != opts[0].strip():
            errors.append(f"Quiz {i}: erwartet {opts[0]!r}, echt {got!r}\n{code}")

for i, c in enumerate(content.CARDS):
    if c[0] not in topic_ids:
        errors.append(f"Karte {i}: unbekanntes Thema")

if errors:
    print("FEHLER:\n" + "\n".join(errors))
    sys.exit(1)

data = {
    "topics": [{"id": a, "title": b, "icon": c, "desc": d} for a, b, c, d in content.TOPICS],
    "cards": [{"id": f"c{i}", "topic": c[0], "front": c[1], "back": c[2]} for i, c in enumerate(content.CARDS)],
    "quiz": [{"id": f"q{i}", "topic": q[0], "question": q[1], "code": q[2], "options": q[3], "explanation": q[4]} for i, q in enumerate(content.QUIZ)],
    "tasks": content.TASKS,
}
with open(os.path.join(ROOT, "js", "data.js"), "w", encoding="utf-8") as f:
    f.write("// AUTOMATISCH ERZEUGT von tools/build.py – nicht von Hand bearbeiten!\n")
    f.write("window.APP_DATA = ")
    json.dump(data, f, ensure_ascii=False, indent=1)
    f.write(";\n")
print(f"OK: {len(data['cards'])} Karten, {len(data['quiz'])} Quizfragen, {len(data['tasks'])} Aufgaben geprüft → js/data.js")
