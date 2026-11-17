// Web Worker: lädt Python (Pyodide) und führt Code aus.
// Läuft getrennt vom UI, damit Endlosschleifen per terminate() gestoppt werden können.
const PYODIDE_URL = "https://cdn.jsdelivr.net/pyodide/v0.26.4/full/";
let py = null;

const ready = (async () => {
  try {
    importScripts(PYODIDE_URL + "pyodide.js");
    py = await loadPyodide({ indexURL: PYODIDE_URL });
    const src = await (await fetch("harness.py", { cache: "no-cache" })).text();
    py.FS.writeFile("/home/pyodide/harness.py", src);
    py.runPython("import sys, json\nsys.path.insert(0, '/home/pyodide')\nimport harness");
    postMessage({ type: "ready" });
  } catch (e) {
    postMessage({ type: "loaderror", message: String(e && e.message || e) });
    throw e;
  }
})();

self.onmessage = async (ev) => {
  const msg = ev.data;
  try {
    await ready;
  } catch (e) {
    return;
  }
  try {
    py.globals.set("_code", msg.code);
    py.globals.set("_arg", JSON.stringify(msg.arg ?? null));
    let res;
    if (msg.type === "run") {
      res = py.runPython("harness.run(_code, json.loads(_arg))");
    } else if (msg.type === "check") {
      res = py.runPython("harness.check(_code, json.loads(_arg))");
    }
    postMessage({ type: "result", id: msg.id, data: JSON.parse(res) });
  } catch (e) {
    postMessage({ type: "result", id: msg.id, data: { internal: String(e && e.message || e) } });
  }
};
