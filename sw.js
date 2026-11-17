// Service Worker: macht die App offline-fähig.
// Eigene Dateien: Netzwerk zuerst (damit Updates ankommen), sonst Cache.
// Python (Pyodide vom CDN): Cache zuerst – wird nach dem ersten Laden nie wieder heruntergeladen.
const VERSION = "ppl-v1";
const APP_CACHE = VERSION + "-app";
const PY_CACHE = "ppl-pyodide-v0.26.4";
const APP_FILES = [
  "./", "index.html", "css/style.css", "js/app.js", "js/data.js", "js/py-worker.js", "js/harness.py",
  "manifest.webmanifest", "icons/icon-192.png", "icons/icon-512.png", "icons/apple-touch-icon.png",
];

self.addEventListener("install", (e) => {
  e.waitUntil(caches.open(APP_CACHE).then(c => c.addAll(APP_FILES)).then(() => self.skipWaiting()));
});

self.addEventListener("activate", (e) => {
  e.waitUntil(
    caches.keys().then(keys => Promise.all(keys.filter(k => k !== APP_CACHE && k !== PY_CACHE).map(k => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener("fetch", (e) => {
  const req = e.request;
  if (req.method !== "GET") return;
  const url = new URL(req.url);

  if (url.hostname === "cdn.jsdelivr.net") {
    e.respondWith(
      caches.open(PY_CACHE).then(async cache => {
        const hit = await cache.match(req);
        if (hit) return hit;
        const res = await fetch(req);
        if (res.ok) cache.put(req, res.clone());
        return res;
      })
    );
    return;
  }

  if (url.origin === self.location.origin) {
    e.respondWith(
      fetch(req).then(res => {
        if (res.ok) { const copy = res.clone(); caches.open(APP_CACHE).then(c => c.put(req, copy)); }
        return res;
      }).catch(() => caches.match(req, { ignoreSearch: true }).then(r => r || caches.match("index.html")))
    );
  }
});
