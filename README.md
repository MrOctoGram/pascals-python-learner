# 🐍 Pascals Python-Lerner

Eine Lern-App für die Python-Klausur. Läuft komplett im Browser, auch auf dem iPhone und iPad.

- **🗂️ Karteikarten** (105) mit Lernkartei-System. Wer eine Karte weiß, sieht sie nach 1, 3, 7 und 16 Tagen wieder.
- **❓ Quiz** (65): „Was gibt dieser Code aus?“
- **💻 Programmieraufgaben** (64): Dein Code läuft in echtem Python (Pyodide/WebAssembly) direkt auf dem Gerät und wird automatisch getestet. Zu jeder Aufgabe gibt es Tipps und eine Musterlösung.
- **🧪 Spielwiese** zum freien Ausprobieren, auch mit `input()`

Themen: Grundlagen, Strings, Bedingungen, Schleifen, Listen, Tupel & Sets, Dictionaries, Funktionen, Fehlerbehandlung, Dateien & Module, Klassen (OOP).

## Installation auf dem iPhone/iPad
1. Die GitHub-Pages-Adresse in **Safari** öffnen
2. **Teilen** → **„Zum Home-Bildschirm“**
3. Einmal online die Aufgaben öffnen (oder unter *Infos* auf „Python jetzt laden“ tippen). Danach funktioniert alles auch offline.

Der Fortschritt bleibt lokal auf dem Gerät gespeichert.

## Inhalte bearbeiten
Alle Inhalte stehen in `tools/content.py`. Danach ausführen:

```
python3 tools/build.py
```

Das Skript prüft automatisch, dass
- jede Musterlösung ihre Tests besteht,
- kein Startcode die Tests schon besteht,
- jede Quiz-Antwort der echten Python-Ausgabe entspricht.

Danach schreibt es `js/data.js`. Nach Änderungen an App-Dateien in `sw.js` die `VERSION` hochzählen, damit installierte Apps das Update laden.
