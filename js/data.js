// AUTOMATISCH ERZEUGT von tools/build.py – nicht von Hand bearbeiten!
window.APP_DATA = {
 "topics": [
  {
   "id": "grundlagen",
   "title": "Grundlagen",
   "icon": "🧱",
   "desc": "print, Variablen, Datentypen, Operatoren"
  },
  {
   "id": "strings",
   "title": "Strings",
   "icon": "🔤",
   "desc": "Texte, Slicing, Methoden, f-Strings"
  },
  {
   "id": "bedingungen",
   "title": "Bedingungen",
   "icon": "🔀",
   "desc": "if / elif / else, logische Operatoren"
  },
  {
   "id": "schleifen",
   "title": "Schleifen",
   "icon": "🔁",
   "desc": "for, while, range, break, continue"
  },
  {
   "id": "listen",
   "title": "Listen",
   "icon": "📋",
   "desc": "Listen, Methoden, List Comprehension"
  },
  {
   "id": "tupel_sets",
   "title": "Tupel & Sets",
   "icon": "🧩",
   "desc": "Unveränderliche Folgen und Mengen"
  },
  {
   "id": "dicts",
   "title": "Dictionaries",
   "icon": "📖",
   "desc": "Schlüssel-Wert-Paare"
  },
  {
   "id": "funktionen",
   "title": "Funktionen",
   "icon": "⚙️",
   "desc": "def, return, Parameter, Scope, lambda, Rekursion"
  },
  {
   "id": "fehler",
   "title": "Fehler & try",
   "icon": "🚨",
   "desc": "Fehlertypen, try / except"
  },
  {
   "id": "dateien",
   "title": "Dateien & Module",
   "icon": "📁",
   "desc": "open, with, import, math"
  },
  {
   "id": "oop",
   "title": "Klassen (OOP)",
   "icon": "🏗️",
   "desc": "class, __init__, self, Vererbung"
  }
 ],
 "cards": [
  {
   "id": "c0",
   "topic": "grundlagen",
   "front": "Wie gibt man in Python etwas auf dem Bildschirm aus?",
   "back": "Mit `print()`:\n```\nprint(\"Hallo\")\nprint(\"Summe:\", 3 + 4)   # Summe: 7\n```\nMehrere Werte werden mit Leerzeichen getrennt. `sep=` ändert das Trennzeichen, `end=` das Zeilenende (Standard `\"\\n\"`)."
  },
  {
   "id": "c1",
   "topic": "grundlagen",
   "front": "Was macht `print(\"a\", \"b\", sep=\"-\", end=\"!\")`?",
   "back": "Gibt `a-b!` aus – **ohne** Zeilenumbruch am Ende.\n`sep` = Trenner zwischen den Werten, `end` = was am Ende angehängt wird."
  },
  {
   "id": "c2",
   "topic": "grundlagen",
   "front": "Wie schreibt man Kommentare?",
   "back": "Mit `#` – alles danach in der Zeile wird ignoriert.\n```\n# Das ist ein Kommentar\nx = 5  # auch hier\n```\nMehrzeilige Texte in `\"\"\" ... \"\"\"` werden oft als Docstring genutzt."
  },
  {
   "id": "c3",
   "topic": "grundlagen",
   "front": "Wie legt man eine Variable an?",
   "back": "Durch Zuweisung mit `=` – kein Typ nötig:\n```\nalter = 21\nname = \"Pascal\"\n```\nNamen: Buchstaben, Ziffern, `_`; nicht mit Ziffer beginnen; Groß-/Kleinschreibung zählt (`Alter` ≠ `alter`)."
  },
  {
   "id": "c4",
   "topic": "grundlagen",
   "front": "Die vier wichtigsten Grunddatentypen?",
   "back": "- `int` – ganze Zahl: `42`\n- `float` – Kommazahl: `3.14` (Punkt statt Komma!)\n- `str` – Text: `\"Hallo\"`\n- `bool` – Wahrheitswert: `True` / `False`\n\nDen Typ prüft man mit `type(x)`."
  },
  {
   "id": "c5",
   "topic": "grundlagen",
   "front": "Was ist der Unterschied zwischen `/`, `//` und `%`?",
   "back": "- `/` echte Division, Ergebnis immer `float`: `7 / 2` → `3.5`\n- `//` ganzzahlige Division (abgerundet): `7 // 2` → `3`\n- `%` Rest (Modulo): `7 % 2` → `1`\n\nTrick: `n % 2 == 0` prüft, ob `n` gerade ist."
  },
  {
   "id": "c6",
   "topic": "grundlagen",
   "front": "Wie berechnet man Potenzen?",
   "back": "Mit `**`:\n```\n2 ** 3    # 8\n9 ** 0.5  # 3.0 (Wurzel)\n```\nAchtung: `^` ist **nicht** Potenz (das ist bitweises XOR)."
  },
  {
   "id": "c7",
   "topic": "grundlagen",
   "front": "Was liefert `input()` zurück?",
   "back": "**Immer einen String!** Für Rechnungen muss umgewandelt werden:\n```\nzahl = int(input(\"Zahl: \"))\npreis = float(input(\"Preis: \"))\n```"
  },
  {
   "id": "c8",
   "topic": "grundlagen",
   "front": "Wie wandelt man Datentypen um?",
   "back": "```\nint(\"42\")     # 42\nfloat(\"3.5\")  # 3.5\nstr(10)       # \"10\"\nint(3.9)      # 3  (schneidet ab, rundet nicht!)\nbool(0)       # False\n```"
  },
  {
   "id": "c9",
   "topic": "grundlagen",
   "front": "Was ergibt `\"3\" + \"4\"` und was `3 + 4`?",
   "back": "`\"3\" + \"4\"` → `\"34\"` (Strings werden verkettet)\n`3 + 4` → `7`\n`\"3\" + 4` → **TypeError** (str und int nicht mischbar)."
  },
  {
   "id": "c10",
   "topic": "grundlagen",
   "front": "Was bedeuten `+=`, `-=`, `*=`?",
   "back": "Kurzschreibweisen:\n```\nx += 1   # x = x + 1\nx -= 2   # x = x - 2\nx *= 3   # x = x * 3\n```\n`x++` gibt es in Python **nicht**."
  },
  {
   "id": "c11",
   "topic": "grundlagen",
   "front": "Wie rundet man auf 2 Nachkommastellen?",
   "back": "`round(3.14159, 2)` → `3.14`\nFür die **Ausgabe** besser f-String: `f\"{wert:.2f}\"` (zeigt immer 2 Stellen, z. B. `2.50`)."
  },
  {
   "id": "c12",
   "topic": "grundlagen",
   "front": "Rangfolge der Operatoren (Punkt vor Strich)?",
   "back": "Von stark nach schwach:\n1. `**`\n2. `*  /  //  %`\n3. `+  -`\n4. Vergleiche `== != < > <= >=`\n5. `not` → `and` → `or`\n\n`2 + 3 * 4` → `14`; im Zweifel Klammern setzen."
  },
  {
   "id": "c13",
   "topic": "grundlagen",
   "front": "Warum ist Einrückung in Python so wichtig?",
   "back": "Einrückung **ist** die Blockstruktur (statt `{ }`). Nach einem `:` (if, for, def, …) folgt ein eingerückter Block, üblich sind **4 Leerzeichen**. Falsche Einrückung → `IndentationError` oder falsche Logik."
  },
  {
   "id": "c14",
   "topic": "strings",
   "front": "Wie greift man auf einzelne Zeichen eines Strings zu?",
   "back": "Per Index in `[]`, Zählung ab **0**:\n```\ns = \"Python\"\ns[0]    # 'P'\ns[-1]   # 'n'  (negativ = von hinten)\n```"
  },
  {
   "id": "c15",
   "topic": "strings",
   "front": "Wie funktioniert Slicing `s[start:stop:schritt]`?",
   "back": "`stop` ist **exklusiv**!\n```\ns = \"Python\"\ns[0:3]   # 'Pyt'\ns[2:]    # 'thon'\ns[:2]    # 'Py'\ns[::2]   # 'Pto'\ns[::-1]  # 'nohtyP' (umgedreht)\n```"
  },
  {
   "id": "c16",
   "topic": "strings",
   "front": "Wie bekommt man die Länge eines Strings?",
   "back": "`len(\"Hallo\")` → `5`. Funktioniert genauso bei Listen, Tupeln, Dicts, Sets."
  },
  {
   "id": "c17",
   "topic": "strings",
   "front": "Wichtige String-Methoden (Groß/Klein, Leerzeichen)?",
   "back": "```\n\"Hallo\".upper()      # 'HALLO'\n\"Hallo\".lower()      # 'hallo'\n\"  hi  \".strip()     # 'hi'\n\"max mustermann\".title()  # 'Max Mustermann'\n```\nMethoden geben einen **neuen** String zurück – das Original bleibt unverändert."
  },
  {
   "id": "c18",
   "topic": "strings",
   "front": "Was machen `split()` und `join()`?",
   "back": "```\n\"a,b,c\".split(\",\")      # ['a', 'b', 'c']\n\"Hallo Welt\".split()    # ['Hallo', 'Welt']\n\"-\".join([\"a\", \"b\"])    # 'a-b'\n```\n`split` macht aus Text eine Liste, `join` aus einer Liste von Strings Text."
  },
  {
   "id": "c19",
   "topic": "strings",
   "front": "Was machen `replace`, `find`, `count`?",
   "back": "```\n\"Haus\".replace(\"H\", \"M\")  # 'Maus'\n\"Banane\".find(\"n\")        # 2  (-1 wenn nicht da)\n\"Banane\".count(\"a\")       # 2\n```"
  },
  {
   "id": "c20",
   "topic": "strings",
   "front": "Wie prüft man, ob ein Teilstring vorkommt?",
   "back": "Mit `in`:\n```\n\"ell\" in \"Hallo\"   # False\n\"all\" in \"Hallo\"   # True\n\"Hallo\".startswith(\"Ha\")  # True\n\"datei.txt\".endswith(\".txt\")  # True\n```"
  },
  {
   "id": "c21",
   "topic": "strings",
   "front": "Was sind f-Strings?",
   "back": "Strings mit `f` davor; Ausdrücke in `{}` werden eingesetzt:\n```\nname = \"Pascal\"; n = 3\nprint(f\"{name} hat {n * 2} Punkte\")\nprint(f\"{3.14159:.2f}\")   # 3.14\nprint(f\"{7:3d}\")          # '  7' (Breite 3)\n```"
  },
  {
   "id": "c22",
   "topic": "strings",
   "front": "Kann man einen String verändern, z. B. `s[0] = \"X\"`?",
   "back": "**Nein** – Strings sind *unveränderlich* (immutable) → `TypeError`.\nStattdessen neuen String bauen: `s = \"X\" + s[1:]`"
  },
  {
   "id": "c23",
   "topic": "strings",
   "front": "Was bewirken `\\n` und `\\t`?",
   "back": "Escape-Sequenzen: `\\n` = Zeilenumbruch, `\\t` = Tabulator, `\\\\` = Backslash, `\\\"` = Anführungszeichen im String."
  },
  {
   "id": "c24",
   "topic": "strings",
   "front": "Was ergibt `\"ab\" * 3`?",
   "back": "`'ababab'` – Strings kann man mit einer ganzen Zahl wiederholen. Praktisch z. B. für `\"-\" * 20`."
  },
  {
   "id": "c25",
   "topic": "strings",
   "front": "Wie geht man jeden Buchstaben eines Strings durch?",
   "back": "```\nfor zeichen in \"Hallo\":\n    print(zeichen)\n```\nMit Index: `for i in range(len(s)):` bzw. besser `for i, z in enumerate(s):`"
  },
  {
   "id": "c26",
   "topic": "bedingungen",
   "front": "Aufbau einer if-elif-else-Abfrage?",
   "back": "```\nif temp > 30:\n    print(\"heiß\")\nelif temp > 15:\n    print(\"angenehm\")\nelse:\n    print(\"kalt\")\n```\nEs wird **nur der erste** zutreffende Zweig ausgeführt. `elif` und `else` sind optional."
  },
  {
   "id": "c27",
   "topic": "bedingungen",
   "front": "Vergleichsoperatoren?",
   "back": "`==` gleich, `!=` ungleich, `<`, `>`, `<=`, `>=`.\nAchtung: `=` ist Zuweisung, `==` ist Vergleich!"
  },
  {
   "id": "c28",
   "topic": "bedingungen",
   "front": "Logische Operatoren `and`, `or`, `not`?",
   "back": "- `a and b` – True, wenn **beide** True\n- `a or b` – True, wenn **mindestens einer** True\n- `not a` – kehrt um\n\n```\nif alter >= 18 and hat_ausweis:\n```"
  },
  {
   "id": "c29",
   "topic": "bedingungen",
   "front": "Was ist eine Vergleichskette wie `0 < x < 10`?",
   "back": "Python erlaubt verkettete Vergleiche: `0 < x < 10` bedeutet `0 < x and x < 10`."
  },
  {
   "id": "c30",
   "topic": "bedingungen",
   "front": "Welche Werte gelten als `False` (\"falsy\")?",
   "back": "`False`, `None`, `0`, `0.0`, `\"\"` (leerer String), `[]`, `{}`, `()`, `set()`.\nAlles andere ist „truthy“. Daher geht: `if liste:` (= Liste nicht leer)."
  },
  {
   "id": "c31",
   "topic": "bedingungen",
   "front": "Was ist der bedingte Ausdruck (Ternary)?",
   "back": "Einzeiliges if/else:\n```\nstatus = \"volljährig\" if alter >= 18 else \"minderjährig\"\n```"
  },
  {
   "id": "c32",
   "topic": "bedingungen",
   "front": "Wie prüft man, ob eine Zahl gerade ist?",
   "back": "`if n % 2 == 0:` – Rest bei Division durch 2 ist 0. Teilbar durch k allgemein: `n % k == 0`."
  },
  {
   "id": "c33",
   "topic": "bedingungen",
   "front": "Was ist `None` und wie prüft man darauf?",
   "back": "`None` steht für „kein Wert“ (z. B. Rückgabe einer Funktion ohne `return`).\nPrüfen mit `if x is None:` (statt `==`)."
  },
  {
   "id": "c34",
   "topic": "schleifen",
   "front": "Wie funktioniert eine for-Schleife?",
   "back": "Sie durchläuft jedes Element einer Folge:\n```\nfor name in [\"Ana\", \"Ben\"]:\n    print(name)\n```"
  },
  {
   "id": "c35",
   "topic": "schleifen",
   "front": "Was erzeugt `range()`?",
   "back": "Zahlenfolgen, `stop` **exklusiv**:\n```\nrange(5)         # 0,1,2,3,4\nrange(2, 6)      # 2,3,4,5\nrange(0, 10, 3)  # 0,3,6,9\nrange(5, 0, -1)  # 5,4,3,2,1\n```"
  },
  {
   "id": "c36",
   "topic": "schleifen",
   "front": "Wie funktioniert eine while-Schleife?",
   "back": "Läuft, **solange** die Bedingung True ist:\n```\ni = 1\nwhile i <= 3:\n    print(i)\n    i += 1     # sonst Endlosschleife!\n```"
  },
  {
   "id": "c37",
   "topic": "schleifen",
   "front": "Wann nimmt man for, wann while?",
   "back": "- **for**: Anzahl der Durchläufe ist bekannt / man geht eine Folge durch.\n- **while**: man wiederholt, bis eine Bedingung eintritt (z. B. bis Eingabe richtig ist)."
  },
  {
   "id": "c38",
   "topic": "schleifen",
   "front": "Was machen `break` und `continue`?",
   "back": "- `break` – Schleife **sofort beenden**\n- `continue` – Rest des aktuellen Durchlaufs überspringen, **nächster Durchlauf**\n\n```\nfor i in range(10):\n    if i == 5: break\n    if i % 2: continue\n    print(i)   # 0 2 4\n```"
  },
  {
   "id": "c39",
   "topic": "schleifen",
   "front": "Wofür ist `enumerate()`?",
   "back": "Liefert Index **und** Element:\n```\nfor i, frucht in enumerate([\"Apfel\", \"Birne\"]):\n    print(i, frucht)   # 0 Apfel / 1 Birne\n```\nStart ändern: `enumerate(liste, 1)`"
  },
  {
   "id": "c40",
   "topic": "schleifen",
   "front": "Wofür ist `zip()`?",
   "back": "Läuft mehrere Folgen parallel durch:\n```\nfor name, note in zip([\"Ana\", \"Ben\"], [1, 2]):\n    print(name, note)\n```"
  },
  {
   "id": "c41",
   "topic": "schleifen",
   "front": "Das Akkumulator-Muster (Summe in Schleife)?",
   "back": "```\nsumme = 0              # vor der Schleife!\nfor x in [3, 5, 7]:\n    summe += x\nprint(summe)           # 15\n```\nGleiches Prinzip für Zähler (`anzahl += 1`) oder Produkt (Start bei 1)."
  },
  {
   "id": "c42",
   "topic": "schleifen",
   "front": "Wie funktionieren verschachtelte Schleifen?",
   "back": "Die innere läuft bei **jedem** Durchlauf der äußeren komplett:\n```\nfor i in range(1, 3):\n    for j in range(1, 3):\n        print(i, j)   # 1 1, 1 2, 2 1, 2 2\n```"
  },
  {
   "id": "c43",
   "topic": "schleifen",
   "front": "Was macht ein `else` nach einer Schleife?",
   "back": "Der `else`-Block läuft, wenn die Schleife **ohne `break`** zu Ende gelaufen ist. Typisch bei der Suche:\n```\nfor x in liste:\n    if x == ziel: break\nelse:\n    print(\"nicht gefunden\")\n```"
  },
  {
   "id": "c44",
   "topic": "schleifen",
   "front": "Wie vermeidet man Endlosschleifen?",
   "back": "Bei `while` muss sich die Bedingung irgendwann ändern (Zähler erhöhen, Eingabe neu lesen …). `while True:` nur mit einem `break` darin verwenden."
  },
  {
   "id": "c45",
   "topic": "listen",
   "front": "Wie erstellt man eine Liste und greift zu?",
   "back": "```\nzahlen = [4, 8, 15]\nzahlen[0]    # 4\nzahlen[-1]   # 15\nleer = []\n```\nListen können gemischte Typen enthalten und sind **veränderlich**."
  },
  {
   "id": "c46",
   "topic": "listen",
   "front": "Elemente hinzufügen?",
   "back": "```\nl = [1, 2]\nl.append(3)       # [1, 2, 3]  ans Ende\nl.insert(0, 9)    # [9, 1, 2, 3] an Position\nl.extend([4, 5])  # mehrere anhängen\nl + [6]           # neue Liste\n```"
  },
  {
   "id": "c47",
   "topic": "listen",
   "front": "Elemente entfernen?",
   "back": "```\nl = [5, 7, 9, 7]\nl.remove(7)   # erstes 7 weg → [5, 9, 7]\nl.pop()       # letztes entfernen & zurückgeben → 7\nl.pop(0)      # Element an Index 0 → 5\ndel l[0]      # per Index löschen\n```"
  },
  {
   "id": "c48",
   "topic": "listen",
   "front": "Unterschied `liste.sort()` und `sorted(liste)`?",
   "back": "- `liste.sort()` sortiert **die Liste selbst** und gibt `None` zurück.\n- `sorted(liste)` gibt eine **neue** sortierte Liste zurück, Original bleibt.\n\nAbsteigend: `reverse=True`. Nach Kriterium: `key=len`."
  },
  {
   "id": "c49",
   "topic": "listen",
   "front": "Nützliche Funktionen für Zahlenlisten?",
   "back": "`len(l)`, `sum(l)`, `min(l)`, `max(l)`.\nDurchschnitt: `sum(l) / len(l)`.\nZählen/Suchen: `l.count(x)`, `l.index(x)`, `x in l`."
  },
  {
   "id": "c50",
   "topic": "listen",
   "front": "Was ist eine List Comprehension?",
   "back": "Kurzschreibweise zum Erzeugen von Listen:\n```\nquadrate = [x**2 for x in range(5)]       # [0,1,4,9,16]\ngerade = [x for x in zahlen if x % 2 == 0]\n```\nAufbau: `[ausdruck for element in folge if bedingung]`"
  },
  {
   "id": "c51",
   "topic": "listen",
   "front": "Achtung Referenz: Was passiert bei `b = a` mit Listen?",
   "back": "`b` zeigt auf **dieselbe** Liste! Änderungen an `b` ändern auch `a`.\n```\na = [1, 2]; b = a; b.append(3)\nprint(a)   # [1, 2, 3]\n```\nKopie: `b = a.copy()` oder `b = a[:]`"
  },
  {
   "id": "c52",
   "topic": "listen",
   "front": "Wie arbeitet man mit 2D-Listen (Matrix)?",
   "back": "Liste von Listen:\n```\nm = [[1, 2, 3],\n     [4, 5, 6]]\nm[1][2]        # 6  (Zeile 1, Spalte 2)\nfor zeile in m:\n    for wert in zeile:\n        ...\n```"
  },
  {
   "id": "c53",
   "topic": "listen",
   "front": "Wie dreht man eine Liste um?",
   "back": "`l.reverse()` (in-place), `l[::-1]` (neue Liste) oder `list(reversed(l))`."
  },
  {
   "id": "c54",
   "topic": "listen",
   "front": "Wie wandelt man etwas in eine Liste um?",
   "back": "Mit `list()`:\n```\nlist(\"abc\")       # ['a', 'b', 'c']\nlist(range(4))    # [0, 1, 2, 3]\n```"
  },
  {
   "id": "c55",
   "topic": "tupel_sets",
   "front": "Was ist ein Tupel?",
   "back": "Eine **unveränderliche** Folge in runden Klammern:\n```\npunkt = (3, 4)\npunkt[0]     # 3\npunkt[0] = 1 # TypeError!\n```\nEin-Element-Tupel braucht ein Komma: `(5,)`"
  },
  {
   "id": "c56",
   "topic": "tupel_sets",
   "front": "Was ist Tuple-Unpacking?",
   "back": "Werte direkt auf Variablen verteilen:\n```\nx, y = (3, 4)\na, b = b, a        # Werte tauschen!\nfor name, alter in [(\"Ana\", 20), (\"Ben\", 22)]:\n```"
  },
  {
   "id": "c57",
   "topic": "tupel_sets",
   "front": "Liste oder Tupel – wann was?",
   "back": "- **Liste**: Sammlung, die sich ändert (hinzufügen, löschen).\n- **Tupel**: feste Gruppe zusammengehöriger Werte (Koordinate, Rückgabe mehrerer Werte), kann Dict-Schlüssel sein."
  },
  {
   "id": "c58",
   "topic": "tupel_sets",
   "front": "Was ist ein Set?",
   "back": "Eine **ungeordnete Menge ohne Duplikate**:\n```\ns = {1, 2, 2, 3}   # {1, 2, 3}\nleer = set()       # NICHT {} – das ist ein Dict!\ns.add(4); s.remove(1)\n```\nKein Index-Zugriff!"
  },
  {
   "id": "c59",
   "topic": "tupel_sets",
   "front": "Mengenoperationen mit Sets?",
   "back": "```\na = {1, 2, 3}; b = {2, 3, 4}\na | b   # {1,2,3,4} Vereinigung\na & b   # {2,3}     Schnittmenge\na - b   # {1}       Differenz\n```"
  },
  {
   "id": "c60",
   "topic": "tupel_sets",
   "front": "Wie entfernt man Duplikate aus einer Liste?",
   "back": "`list(set(liste))` – aber die Reihenfolge geht verloren!\nMit Reihenfolge: Schleife + Hilfsliste, oder `list(dict.fromkeys(liste))`."
  },
  {
   "id": "c61",
   "topic": "dicts",
   "front": "Was ist ein Dictionary?",
   "back": "Sammlung von **Schlüssel → Wert**-Paaren:\n```\npreise = {\"Apfel\": 0.5, \"Brot\": 2.2}\npreise[\"Apfel\"]       # 0.5\npreise[\"Milch\"] = 1.1 # hinzufügen/ändern\n```\nSchlüssel sind eindeutig."
  },
  {
   "id": "c62",
   "topic": "dicts",
   "front": "Was passiert bei einem fehlenden Schlüssel und wie vermeidet man es?",
   "back": "`d[\"x\"]` → **KeyError**, wenn `\"x\"` fehlt.\nSicher: `d.get(\"x\")` → `None` bzw. `d.get(\"x\", 0)` → Standardwert.\nPrüfen: `if \"x\" in d:`"
  },
  {
   "id": "c63",
   "topic": "dicts",
   "front": "Wie geht man ein Dictionary in einer Schleife durch?",
   "back": "```\nfor k in d:              # Schlüssel\nfor v in d.values():     # Werte\nfor k, v in d.items():   # beides\n    print(k, v)\n```"
  },
  {
   "id": "c64",
   "topic": "dicts",
   "front": "Wie entfernt man einen Eintrag?",
   "back": "`del d[\"Apfel\"]` oder `d.pop(\"Apfel\")` (gibt den Wert zurück)."
  },
  {
   "id": "c65",
   "topic": "dicts",
   "front": "Das Zähl-Muster mit Dictionaries?",
   "back": "```\nzaehler = {}\nfor wort in woerter:\n    zaehler[wort] = zaehler.get(wort, 0) + 1\n```\nSehr klausurrelevant!"
  },
  {
   "id": "c66",
   "topic": "dicts",
   "front": "Was sind `keys()`, `values()`, `items()`?",
   "back": "Ansichten auf Schlüssel, Werte bzw. (Schlüssel, Wert)-Paare. `len(d)` = Anzahl Einträge. Für eine Liste: `list(d.keys())`."
  },
  {
   "id": "c67",
   "topic": "dicts",
   "front": "Verschachtelte Dictionaries?",
   "back": "```\nstudis = {\"Ana\": {\"alter\": 21, \"note\": 1.7}}\nstudis[\"Ana\"][\"note\"]   # 1.7\n```"
  },
  {
   "id": "c68",
   "topic": "dicts",
   "front": "Wie sortiert man ein Dict nach Werten?",
   "back": "```\nsorted(d.items(), key=lambda p: p[1])          # aufsteigend\nsorted(d, key=d.get, reverse=True)             # Schlüssel nach Wert absteigend\n```"
  },
  {
   "id": "c69",
   "topic": "funktionen",
   "front": "Wie definiert man eine Funktion?",
   "back": "```\ndef begruesse(name):\n    return \"Hallo \" + name\n\ntext = begruesse(\"Pascal\")\n```\n`def`, Name, Parameter in Klammern, Doppelpunkt, eingerückter Körper."
  },
  {
   "id": "c70",
   "topic": "funktionen",
   "front": "Unterschied zwischen `return` und `print`?",
   "back": "- `print` **zeigt** etwas an – der Wert ist danach weg.\n- `return` **gibt** einen Wert an den Aufrufer **zurück**, der damit weiterrechnen kann, und beendet die Funktion.\n\nOhne `return` gibt eine Funktion `None` zurück. Klassischer Klausurfehler!"
  },
  {
   "id": "c71",
   "topic": "funktionen",
   "front": "Parameter vs. Argument?",
   "back": "**Parameter** = Platzhalter in der Definition (`def f(x):`)\n**Argument** = konkreter Wert beim Aufruf (`f(5)`)"
  },
  {
   "id": "c72",
   "topic": "funktionen",
   "front": "Was sind Default-Parameter?",
   "back": "Parameter mit Standardwert:\n```\ndef brutto(netto, mwst=19):\n    return netto * (1 + mwst / 100)\nbrutto(100)      # 119.0\nbrutto(100, 7)   # 107.0\n```\nParameter mit Default stehen **hinten**."
  },
  {
   "id": "c73",
   "topic": "funktionen",
   "front": "Was sind Keyword-Argumente?",
   "back": "Argumente mit Namen übergeben, Reihenfolge egal:\n`brutto(mwst=7, netto=100)`"
  },
  {
   "id": "c74",
   "topic": "funktionen",
   "front": "Wie gibt man mehrere Werte zurück?",
   "back": "Als Tupel:\n```\ndef min_max(l):\n    return min(l), max(l)\nkl, gr = min_max([3, 1, 4])\n```"
  },
  {
   "id": "c75",
   "topic": "funktionen",
   "front": "Lokale und globale Variablen (Scope)?",
   "back": "Variablen, die **in** einer Funktion angelegt werden, sind **lokal** – außerhalb unbekannt. Globale Variablen kann man lesen; zum Ändern bräuchte man `global x` (schlechter Stil – lieber Parameter und `return`)."
  },
  {
   "id": "c76",
   "topic": "funktionen",
   "front": "Was ist eine lambda-Funktion?",
   "back": "Eine kleine anonyme Funktion in einer Zeile:\n```\nquadrat = lambda x: x ** 2\nsorted(woerter, key=lambda w: len(w))\n```"
  },
  {
   "id": "c77",
   "topic": "funktionen",
   "front": "Was ist Rekursion?",
   "back": "Eine Funktion ruft sich selbst auf. Braucht einen **Basisfall** zum Abbruch:\n```\ndef fak(n):\n    if n <= 1:          # Basisfall\n        return 1\n    return n * fak(n - 1)\n```"
  },
  {
   "id": "c78",
   "topic": "funktionen",
   "front": "Was ist ein Docstring?",
   "back": "Ein String direkt unter `def`, der die Funktion beschreibt:\n```\ndef flaeche(r):\n    \"\"\"Berechnet die Kreisfläche.\"\"\"\n```\nAnzeigen mit `help(flaeche)`."
  },
  {
   "id": "c79",
   "topic": "funktionen",
   "front": "Was machen `map()` und `filter()`?",
   "back": "```\nlist(map(str, [1, 2]))                 # ['1', '2']\nlist(filter(lambda x: x > 0, [-1, 2])) # [2]\n```\nOft ist eine List Comprehension lesbarer."
  },
  {
   "id": "c80",
   "topic": "funktionen",
   "front": "Was ist `*args`?",
   "back": "Beliebig viele Positionsargumente, als Tupel:\n```\ndef summe(*zahlen):\n    return sum(zahlen)\nsumme(1, 2, 3)   # 6\n```"
  },
  {
   "id": "c81",
   "topic": "fehler",
   "front": "Was ist ein SyntaxError?",
   "back": "Der Code ist **falsch geschrieben** und wird gar nicht erst ausgeführt: fehlender `:`, fehlende Klammer, fehlendes Anführungszeichen, `=` statt `==` in einer Bedingung …"
  },
  {
   "id": "c82",
   "topic": "fehler",
   "front": "NameError vs. TypeError vs. ValueError?",
   "back": "- **NameError**: Name unbekannt (Tippfehler, nicht definiert)\n- **TypeError**: falscher Typ (`\"3\" + 4`, `len(5)`)\n- **ValueError**: richtiger Typ, falscher Wert (`int(\"abc\")`)"
  },
  {
   "id": "c83",
   "topic": "fehler",
   "front": "IndexError vs. KeyError?",
   "back": "- **IndexError**: Listenindex existiert nicht (`[1,2][5]`)\n- **KeyError**: Dict-Schlüssel existiert nicht (`{}[\"x\"]`)"
  },
  {
   "id": "c84",
   "topic": "fehler",
   "front": "Weitere typische Fehler?",
   "back": "- **ZeroDivisionError**: Division durch 0\n- **IndentationError**: Einrückung falsch\n- **AttributeError**: Methode existiert für den Typ nicht (`[1].upper()`)\n- **FileNotFoundError**: Datei fehlt"
  },
  {
   "id": "c85",
   "topic": "fehler",
   "front": "Wie fängt man Fehler ab?",
   "back": "```\ntry:\n    zahl = int(eingabe)\nexcept ValueError:\n    print(\"Keine Zahl!\")\n```\nCode im `try` wird versucht; tritt der Fehler auf, springt Python in den passenden `except`-Block."
  },
  {
   "id": "c86",
   "topic": "fehler",
   "front": "Wozu `else` und `finally` bei try?",
   "back": "```\ntry:\n    ...\nexcept ZeroDivisionError:\n    ...      # nur bei diesem Fehler\nelse:\n    ...      # nur wenn KEIN Fehler\nfinally:\n    ...      # IMMER (z. B. aufräumen)\n```"
  },
  {
   "id": "c87",
   "topic": "fehler",
   "front": "Wie löst man selbst einen Fehler aus?",
   "back": "Mit `raise`:\n```\nif betrag < 0:\n    raise ValueError(\"Betrag darf nicht negativ sein\")\n```"
  },
  {
   "id": "c88",
   "topic": "fehler",
   "front": "Wie kommt man an die Fehlermeldung?",
   "back": "```\nexcept ValueError as e:\n    print(\"Fehler:\", e)\n```\n`except Exception:` fängt fast alles – sparsam verwenden."
  },
  {
   "id": "c89",
   "topic": "dateien",
   "front": "Wie öffnet man eine Datei richtig?",
   "back": "Mit `with` – die Datei wird automatisch geschlossen:\n```\nwith open(\"daten.txt\", \"r\", encoding=\"utf-8\") as f:\n    inhalt = f.read()\n```"
  },
  {
   "id": "c90",
   "topic": "dateien",
   "front": "Die Dateimodi `r`, `w`, `a`?",
   "back": "- `\"r\"` lesen (Standard), Fehler wenn Datei fehlt\n- `\"w\"` schreiben – **überschreibt** alles / legt neu an\n- `\"a\"` anhängen ans Ende"
  },
  {
   "id": "c91",
   "topic": "dateien",
   "front": "Wie liest man eine Datei zeilenweise?",
   "back": "```\nwith open(\"daten.txt\") as f:\n    for zeile in f:\n        print(zeile.strip())   # strip entfernt \\n\n```\nAlternativ: `f.readlines()` (Liste) oder `f.read()` (ein String)."
  },
  {
   "id": "c92",
   "topic": "dateien",
   "front": "Wie schreibt man in eine Datei?",
   "back": "```\nwith open(\"out.txt\", \"w\") as f:\n    f.write(\"Zeile 1\\n\")    # \\n selbst anhängen!\n    print(\"Zeile 2\", file=f)\n```\n`write` erwartet einen String."
  },
  {
   "id": "c93",
   "topic": "dateien",
   "front": "Wie importiert man Module?",
   "back": "```\nimport math\nmath.sqrt(16)        # 4.0\nfrom math import pi, sqrt\nimport random as rd  # Alias\n```"
  },
  {
   "id": "c94",
   "topic": "dateien",
   "front": "Wichtige Funktionen aus `math`?",
   "back": "`math.sqrt(x)`, `math.pi`, `math.e`, `math.floor(x)`, `math.ceil(x)`, `math.log(x)`, `math.log10(x)`, `math.sin(x)`, `math.factorial(n)`"
  },
  {
   "id": "c95",
   "topic": "dateien",
   "front": "Wichtige Funktionen aus `random`?",
   "back": "```\nimport random\nrandom.randint(1, 6)       # 1..6 inklusive!\nrandom.random()            # 0.0 ≤ x < 1.0\nrandom.choice(liste)       # zufälliges Element\nrandom.shuffle(liste)      # mischt in-place\n```"
  },
  {
   "id": "c96",
   "topic": "dateien",
   "front": "Was bedeutet `if __name__ == \"__main__\":`?",
   "back": "Der Block läuft nur, wenn die Datei **direkt gestartet** wird – nicht, wenn sie als Modul importiert wird."
  },
  {
   "id": "c97",
   "topic": "dateien",
   "front": "Wie liest man eine CSV-artige Zeile aus?",
   "back": "```\nzeile = \"Ana;21;1.7\"\nname, alter, note = zeile.strip().split(\";\")\nalter = int(alter); note = float(note)\n```"
  },
  {
   "id": "c98",
   "topic": "oop",
   "front": "Was sind Klasse und Objekt?",
   "back": "- **Klasse** = Bauplan (z. B. `Auto`)\n- **Objekt/Instanz** = konkretes Ding nach dem Bauplan (`mein_auto = Auto()`)\n\nObjekte haben **Attribute** (Daten) und **Methoden** (Funktionen)."
  },
  {
   "id": "c99",
   "topic": "oop",
   "front": "Wie definiert man eine Klasse mit Konstruktor?",
   "back": "```\nclass Hund:\n    def __init__(self, name):\n        self.name = name\n\n    def bellen(self):\n        return self.name + \" sagt Wuff\"\n\nh = Hund(\"Bello\")\nh.bellen()\n```"
  },
  {
   "id": "c100",
   "topic": "oop",
   "front": "Was ist `self`?",
   "back": "Der erste Parameter jeder Methode – verweist auf **das Objekt selbst**. Über `self.attribut` speichert/liest man Daten des Objekts. Beim Aufruf übergibt man `self` nicht: `h.bellen()`."
  },
  {
   "id": "c101",
   "topic": "oop",
   "front": "Was macht `__init__`?",
   "back": "Der **Konstruktor** – wird automatisch beim Erzeugen eines Objekts aufgerufen und setzt die Startwerte der Attribute."
  },
  {
   "id": "c102",
   "topic": "oop",
   "front": "Was macht `__str__`?",
   "back": "Legt fest, was `print(objekt)` bzw. `str(objekt)` anzeigt:\n```\ndef __str__(self):\n    return f\"Hund {self.name}\"\n```"
  },
  {
   "id": "c103",
   "topic": "oop",
   "front": "Was ist Vererbung?",
   "back": "Eine Klasse übernimmt alles von einer anderen und kann es erweitern/überschreiben:\n```\nclass Tier:\n    def __init__(self, name): self.name = name\nclass Katze(Tier):\n    def sprich(self): return \"Miau\"\n```\n`super().__init__(...)` ruft den Konstruktor der Elternklasse auf."
  },
  {
   "id": "c104",
   "topic": "oop",
   "front": "Klassenattribut vs. Instanzattribut?",
   "back": "- **Klassenattribut**: direkt in der Klasse, für alle Objekte gleich (`class K: anzahl = 0`)\n- **Instanzattribut**: mit `self.x = …` in `__init__`, pro Objekt eigen"
  }
 ],
 "quiz": [
  {
   "id": "q0",
   "topic": "grundlagen",
   "question": "Was gibt der Code aus?",
   "code": "print(7 // 2, 7 % 2)",
   "options": [
    "3 1",
    "3.5 1",
    "3 0.5",
    "4 1"
   ],
   "explanation": "`//` ist ganzzahlige Division (abgerundet), `%` der Rest."
  },
  {
   "id": "q1",
   "topic": "grundlagen",
   "question": "Was gibt der Code aus?",
   "code": "print(2 ** 3 + 1)",
   "options": [
    "9",
    "7",
    "16",
    "10"
   ],
   "explanation": "`**` bindet stärker als `+`: 8 + 1."
  },
  {
   "id": "q2",
   "topic": "grundlagen",
   "question": "Was gibt der Code aus?",
   "code": "x = \"5\"\nprint(x * 2)",
   "options": [
    "55",
    "10",
    "TypeError",
    "5 5"
   ],
   "explanation": "Ein String mal int wiederholt den String."
  },
  {
   "id": "q3",
   "topic": "grundlagen",
   "question": "Was gibt der Code aus?",
   "code": "print(type(7 / 7))",
   "options": [
    "<class 'float'>",
    "<class 'int'>",
    "1",
    "<class 'number'>"
   ],
   "explanation": "`/` liefert immer einen float, auch bei glatten Ergebnissen."
  },
  {
   "id": "q4",
   "topic": "grundlagen",
   "question": "Was gibt der Code aus?",
   "code": "print(int(3.99))",
   "options": [
    "3",
    "4",
    "3.99",
    "ValueError"
   ],
   "explanation": "`int()` schneidet die Nachkommastellen ab, es rundet nicht."
  },
  {
   "id": "q5",
   "topic": "grundlagen",
   "question": "Was gibt der Code aus?",
   "code": "a = 3\na += 2\na *= 2\nprint(a)",
   "options": [
    "10",
    "8",
    "7",
    "12"
   ],
   "explanation": "(3 + 2) * 2 = 10."
  },
  {
   "id": "q6",
   "topic": "grundlagen",
   "question": "Was gibt der Code aus?",
   "code": "print(\"a\", \"b\", sep=\"\")",
   "options": [
    "ab",
    "a b",
    "a\nb",
    "a,b"
   ],
   "explanation": "`sep=\"\"` entfernt das Leerzeichen zwischen den Werten."
  },
  {
   "id": "q7",
   "topic": "grundlagen",
   "question": "Welcher Datentyp hat `input()`?",
   "code": null,
   "options": [
    "immer str",
    "int, wenn man eine Zahl eingibt",
    "float",
    "je nach Eingabe automatisch"
   ],
   "explanation": "input() liefert immer einen String – umwandeln mit int()/float()."
  },
  {
   "id": "q8",
   "topic": "strings",
   "question": "Was gibt der Code aus?",
   "code": "s = \"Python\"\nprint(s[1:4])",
   "options": [
    "yth",
    "Pyt",
    "ytho",
    "ython"
   ],
   "explanation": "Slicing: Start 1 inklusive, Stop 4 exklusiv."
  },
  {
   "id": "q9",
   "topic": "strings",
   "question": "Was gibt der Code aus?",
   "code": "print(\"Hallo\"[-2])",
   "options": [
    "l",
    "o",
    "a",
    "IndexError"
   ],
   "explanation": "-1 ist das letzte, -2 das vorletzte Zeichen."
  },
  {
   "id": "q10",
   "topic": "strings",
   "question": "Was gibt der Code aus?",
   "code": "print(\"a-b-c\".split(\"-\"))",
   "options": [
    "['a', 'b', 'c']",
    "abc",
    "['a-b-c']",
    "('a', 'b', 'c')"
   ],
   "explanation": "split() liefert eine Liste."
  },
  {
   "id": "q11",
   "topic": "strings",
   "question": "Was gibt der Code aus?",
   "code": "print(len(\"Hi Du\"))",
   "options": [
    "5",
    "4",
    "2",
    "6"
   ],
   "explanation": "Das Leerzeichen zählt mit."
  },
  {
   "id": "q12",
   "topic": "strings",
   "question": "Was gibt der Code aus?",
   "code": "print(\"abc\"[::-1].upper())",
   "options": [
    "CBA",
    "ABC",
    "cba",
    "C"
   ],
   "explanation": "Erst umdrehen, dann groß."
  },
  {
   "id": "q13",
   "topic": "strings",
   "question": "Was gibt der Code aus?",
   "code": "p = 4.5\nprint(f\"{p:.2f} €\")",
   "options": [
    "4.50 €",
    "4.5 €",
    "4,50 €",
    "{p:.2f} €"
   ],
   "explanation": "`:.2f` zeigt genau 2 Nachkommastellen."
  },
  {
   "id": "q14",
   "topic": "strings",
   "question": "Was gibt der Code aus?",
   "code": "print(\"Banane\".count(\"an\"))",
   "options": [
    "2",
    "1",
    "3",
    "0"
   ],
   "explanation": "'an' kommt in B-an-an-e zweimal vor."
  },
  {
   "id": "q15",
   "topic": "bedingungen",
   "question": "Was gibt der Code aus?",
   "code": "x = 15\nif x > 10:\n    print(\"A\")\nelif x > 5:\n    print(\"B\")\nelse:\n    print(\"C\")",
   "options": [
    "A",
    "A\nB",
    "B",
    "C"
   ],
   "explanation": "Nur der erste zutreffende Zweig wird ausgeführt."
  },
  {
   "id": "q16",
   "topic": "bedingungen",
   "question": "Was gibt der Code aus?",
   "code": "print(True and not False or False)",
   "options": [
    "True",
    "False",
    "None",
    "SyntaxError"
   ],
   "explanation": "not zuerst → True and True → True; True or False → True."
  },
  {
   "id": "q17",
   "topic": "bedingungen",
   "question": "Was gibt der Code aus?",
   "code": "x = 0\nif x:\n    print(\"ja\")\nelse:\n    print(\"nein\")",
   "options": [
    "nein",
    "ja",
    "0",
    "Fehler"
   ],
   "explanation": "0 ist falsy."
  },
  {
   "id": "q18",
   "topic": "bedingungen",
   "question": "Was gibt der Code aus?",
   "code": "a = 5\nprint(1 < a < 10)",
   "options": [
    "True",
    "False",
    "TypeError",
    "1"
   ],
   "explanation": "Vergleichskette: 1 < 5 und 5 < 10."
  },
  {
   "id": "q19",
   "topic": "bedingungen",
   "question": "Was gibt der Code aus?",
   "code": "n = 7\nprint(\"gerade\" if n % 2 == 0 else \"ungerade\")",
   "options": [
    "ungerade",
    "gerade",
    "1",
    "True"
   ],
   "explanation": "7 % 2 ist 1, also else-Zweig."
  },
  {
   "id": "q20",
   "topic": "schleifen",
   "question": "Was gibt der Code aus?",
   "code": "print(list(range(2, 10, 3)))",
   "options": [
    "[2, 5, 8]",
    "[2, 5, 8, 11]",
    "[3, 6, 9]",
    "[2, 3, 4]"
   ],
   "explanation": "Start 2, Schritt 3, Stop 10 exklusiv."
  },
  {
   "id": "q21",
   "topic": "schleifen",
   "question": "Was gibt der Code aus?",
   "code": "s = 0\nfor i in range(4):\n    s += i\nprint(s)",
   "options": [
    "6",
    "10",
    "4",
    "3"
   ],
   "explanation": "0+1+2+3 = 6 (range(4) endet bei 3)."
  },
  {
   "id": "q22",
   "topic": "schleifen",
   "question": "Was gibt der Code aus?",
   "code": "for i in range(5):\n    if i == 3:\n        break\n    print(i, end=\" \")",
   "options": [
    "0 1 2",
    "0 1 2 3",
    "3",
    "0 1 2 4"
   ],
   "explanation": "Bei 3 wird die Schleife abgebrochen, bevor gedruckt wird."
  },
  {
   "id": "q23",
   "topic": "schleifen",
   "question": "Was gibt der Code aus?",
   "code": "for i in range(5):\n    if i % 2 == 0:\n        continue\n    print(i, end=\" \")",
   "options": [
    "1 3",
    "0 2 4",
    "1 3 5",
    "0 1 2 3 4"
   ],
   "explanation": "Gerade Zahlen werden mit continue übersprungen."
  },
  {
   "id": "q24",
   "topic": "schleifen",
   "question": "Was gibt der Code aus?",
   "code": "i = 10\nwhile i > 0:\n    i -= 3\nprint(i)",
   "options": [
    "-2",
    "1",
    "0",
    "-3"
   ],
   "explanation": "10 → 7 → 4 → 1 → -2, dann ist die Bedingung falsch."
  },
  {
   "id": "q25",
   "topic": "schleifen",
   "question": "Was gibt der Code aus?",
   "code": "n = 0\nfor i in range(3):\n    for j in range(4):\n        n += 1\nprint(n)",
   "options": [
    "12",
    "7",
    "3",
    "4"
   ],
   "explanation": "Innere Schleife läuft 3-mal komplett: 3 · 4 = 12."
  },
  {
   "id": "q26",
   "topic": "schleifen",
   "question": "Was gibt der Code aus?",
   "code": "for i, c in enumerate(\"ab\"):\n    print(i, c)",
   "options": [
    "0 a\n1 b",
    "1 a\n2 b",
    "a 0\nb 1",
    "0 1"
   ],
   "explanation": "enumerate liefert (Index, Element), Start bei 0."
  },
  {
   "id": "q27",
   "topic": "listen",
   "question": "Was gibt der Code aus?",
   "code": "l = [3, 1, 2]\nl.append(5)\nprint(len(l), l[-1])",
   "options": [
    "4 5",
    "3 2",
    "4 2",
    "5 4"
   ],
   "explanation": "append hängt ans Ende an."
  },
  {
   "id": "q28",
   "topic": "listen",
   "question": "Was gibt der Code aus?",
   "code": "l = [3, 1, 2]\nx = l.sort()\nprint(x)",
   "options": [
    "None",
    "[1, 2, 3]",
    "[3, 1, 2]",
    "Fehler"
   ],
   "explanation": "sort() sortiert in-place und gibt None zurück!"
  },
  {
   "id": "q29",
   "topic": "listen",
   "question": "Was gibt der Code aus?",
   "code": "a = [1, 2]\nb = a\nb.append(3)\nprint(a)",
   "options": [
    "[1, 2, 3]",
    "[1, 2]",
    "[3]",
    "None"
   ],
   "explanation": "b und a zeigen auf dieselbe Liste."
  },
  {
   "id": "q30",
   "topic": "listen",
   "question": "Was gibt der Code aus?",
   "code": "print([x * 2 for x in range(4) if x > 1])",
   "options": [
    "[4, 6]",
    "[0, 2, 4, 6]",
    "[2, 3]",
    "[4, 6, 8]"
   ],
   "explanation": "Nur x = 2 und 3, jeweils verdoppelt."
  },
  {
   "id": "q31",
   "topic": "listen",
   "question": "Was gibt der Code aus?",
   "code": "l = [10, 20, 30, 40]\nprint(l[1:3])",
   "options": [
    "[20, 30]",
    "[10, 20, 30]",
    "[20, 30, 40]",
    "[10, 20]"
   ],
   "explanation": "Index 1 bis ausschließlich 3."
  },
  {
   "id": "q32",
   "topic": "listen",
   "question": "Was gibt der Code aus?",
   "code": "m = [[1, 2], [3, 4]]\nprint(m[1][0])",
   "options": [
    "3",
    "2",
    "1",
    "4"
   ],
   "explanation": "Zeile 1 = [3, 4], davon Index 0."
  },
  {
   "id": "q33",
   "topic": "listen",
   "question": "Was gibt der Code aus?",
   "code": "l = [5, 3, 5, 1]\nl.remove(5)\nprint(l)",
   "options": [
    "[3, 5, 1]",
    "[3, 1]",
    "[5, 3, 1]",
    "[5, 3, 5]"
   ],
   "explanation": "remove entfernt nur das erste Vorkommen."
  },
  {
   "id": "q34",
   "topic": "tupel_sets",
   "question": "Was gibt der Code aus?",
   "code": "print(len({1, 2, 2, 3, 3, 3}))",
   "options": [
    "3",
    "6",
    "4",
    "1"
   ],
   "explanation": "Sets enthalten keine Duplikate."
  },
  {
   "id": "q35",
   "topic": "tupel_sets",
   "question": "Was gibt der Code aus?",
   "code": "a, b = 1, 2\na, b = b, a\nprint(a, b)",
   "options": [
    "2 1",
    "1 2",
    "2 2",
    "1 1"
   ],
   "explanation": "Tuple-Unpacking tauscht die Werte."
  },
  {
   "id": "q36",
   "topic": "tupel_sets",
   "question": "Was gibt der Code aus?",
   "code": "print({1, 2, 3} & {2, 3, 4})",
   "options": [
    "{2, 3}",
    "{1, 2, 3, 4}",
    "{1, 4}",
    "{1}"
   ],
   "explanation": "& ist die Schnittmenge."
  },
  {
   "id": "q37",
   "topic": "tupel_sets",
   "question": "Was passiert bei `t = (1, 2); t[0] = 5`?",
   "code": null,
   "options": [
    "TypeError – Tupel sind unveränderlich",
    "t wird (5, 2)",
    "IndexError",
    "t wird [5, 2]"
   ],
   "explanation": "Tupel können nach dem Erstellen nicht geändert werden."
  },
  {
   "id": "q38",
   "topic": "tupel_sets",
   "question": "Was erzeugt `x = {}`?",
   "code": null,
   "options": [
    "ein leeres Dictionary",
    "ein leeres Set",
    "ein leeres Tupel",
    "einen Fehler"
   ],
   "explanation": "Leeres Set nur mit set()."
  },
  {
   "id": "q39",
   "topic": "dicts",
   "question": "Was gibt der Code aus?",
   "code": "d = {\"a\": 1, \"b\": 2}\nd[\"a\"] = 5\nprint(d)",
   "options": [
    "{'a': 5, 'b': 2}",
    "{'a': 1, 'b': 2, 'a': 5}",
    "{'a': 6, 'b': 2}",
    "KeyError"
   ],
   "explanation": "Gleicher Schlüssel → Wert wird überschrieben."
  },
  {
   "id": "q40",
   "topic": "dicts",
   "question": "Was gibt der Code aus?",
   "code": "d = {\"x\": 1}\nprint(d.get(\"y\", 0))",
   "options": [
    "0",
    "None",
    "KeyError",
    "1"
   ],
   "explanation": "get liefert den Standardwert, wenn der Schlüssel fehlt."
  },
  {
   "id": "q41",
   "topic": "dicts",
   "question": "Was gibt der Code aus?",
   "code": "d = {\"a\": 1, \"b\": 2}\nprint(len(d), \"b\" in d, 2 in d)",
   "options": [
    "2 True False",
    "2 True True",
    "4 True False",
    "2 False True"
   ],
   "explanation": "`in` prüft bei Dicts die Schlüssel, nicht die Werte."
  },
  {
   "id": "q42",
   "topic": "dicts",
   "question": "Was gibt der Code aus?",
   "code": "z = {}\nfor c in \"abca\":\n    z[c] = z.get(c, 0) + 1\nprint(z[\"a\"])",
   "options": [
    "2",
    "1",
    "3",
    "KeyError"
   ],
   "explanation": "Das Zähl-Muster: 'a' kommt zweimal vor."
  },
  {
   "id": "q43",
   "topic": "dicts",
   "question": "Was gibt der Code aus?",
   "code": "d = {\"a\": 3, \"b\": 1}\nfor k, v in d.items():\n    print(k, v)",
   "options": [
    "a 3\nb 1",
    "a\nb",
    "3\n1",
    "('a', 3)\n('b', 1)"
   ],
   "explanation": "items() liefert Paare, die entpackt werden."
  },
  {
   "id": "q44",
   "topic": "funktionen",
   "question": "Was gibt der Code aus?",
   "code": "def f(x):\n    x * 2\nprint(f(3))",
   "options": [
    "None",
    "6",
    "3",
    "Fehler"
   ],
   "explanation": "Ohne return gibt die Funktion None zurück."
  },
  {
   "id": "q45",
   "topic": "funktionen",
   "question": "Was gibt der Code aus?",
   "code": "def f(a, b=10):\n    return a + b\nprint(f(1), f(1, 2))",
   "options": [
    "11 3",
    "11 12",
    "1 3",
    "Fehler"
   ],
   "explanation": "b hat den Standardwert 10, wenn nichts übergeben wird."
  },
  {
   "id": "q46",
   "topic": "funktionen",
   "question": "Was gibt der Code aus?",
   "code": "def f():\n    return 1\n    print(\"x\")\nprint(f())",
   "options": [
    "1",
    "x\n1",
    "1\nx",
    "None"
   ],
   "explanation": "Nach return wird die Funktion verlassen – print wird nie erreicht."
  },
  {
   "id": "q47",
   "topic": "funktionen",
   "question": "Was gibt der Code aus?",
   "code": "x = 5\ndef f():\n    x = 1\n    return x\nf()\nprint(x)",
   "options": [
    "5",
    "1",
    "None",
    "Fehler"
   ],
   "explanation": "x in f ist lokal; das globale x bleibt 5."
  },
  {
   "id": "q48",
   "topic": "funktionen",
   "question": "Was gibt der Code aus?",
   "code": "def fak(n):\n    if n <= 1:\n        return 1\n    return n * fak(n - 1)\nprint(fak(4))",
   "options": [
    "24",
    "10",
    "4",
    "RecursionError"
   ],
   "explanation": "4 · 3 · 2 · 1 = 24."
  },
  {
   "id": "q49",
   "topic": "funktionen",
   "question": "Was gibt der Code aus?",
   "code": "print(sorted([\"ccc\", \"a\", \"bb\"], key=len))",
   "options": [
    "['a', 'bb', 'ccc']",
    "['ccc', 'bb', 'a']",
    "['a', 'bb', 'ccc', 3]",
    "[1, 2, 3]"
   ],
   "explanation": "key=len sortiert nach der Länge."
  },
  {
   "id": "q50",
   "topic": "funktionen",
   "question": "Was gibt der Code aus?",
   "code": "def mm(l):\n    return min(l), max(l)\na, b = mm([4, 9, 2])\nprint(b - a)",
   "options": [
    "7",
    "5",
    "2",
    "Fehler"
   ],
   "explanation": "Rückgabe als Tupel (2, 9), entpackt: 9 - 2."
  },
  {
   "id": "q51",
   "topic": "fehler",
   "question": "Welcher Fehler entsteht?",
   "code": "print(int(\"zwölf\"))",
   "options": [
    "ValueError",
    "TypeError",
    "NameError",
    "SyntaxError"
   ],
   "explanation": "Richtiger Typ (str), aber der Wert lässt sich nicht umwandeln."
  },
  {
   "id": "q52",
   "topic": "fehler",
   "question": "Welcher Fehler entsteht bei `\"Alter: \" + 21`?",
   "code": null,
   "options": [
    "TypeError",
    "ValueError",
    "SyntaxError",
    "NameError"
   ],
   "explanation": "str und int lassen sich nicht mit + verbinden → str(21) verwenden."
  },
  {
   "id": "q53",
   "topic": "fehler",
   "question": "Was gibt der Code aus?",
   "code": "try:\n    x = 1 / 0\nexcept ZeroDivisionError:\n    print(\"Fehler\")\nelse:\n    print(\"ok\")\nfinally:\n    print(\"Ende\")",
   "options": [
    "Fehler\nEnde",
    "ok\nEnde",
    "Fehler",
    "Fehler\nok\nEnde"
   ],
   "explanation": "except greift, else nicht, finally immer."
  },
  {
   "id": "q54",
   "topic": "fehler",
   "question": "Was gibt der Code aus?",
   "code": "l = [1, 2, 3]\ntry:\n    print(l[3])\nexcept IndexError:\n    print(\"weg\")",
   "options": [
    "weg",
    "3",
    "None",
    "IndexError"
   ],
   "explanation": "Index 3 existiert nicht (nur 0–2)."
  },
  {
   "id": "q55",
   "topic": "fehler",
   "question": "Welcher Fehler entsteht bei `if x = 5:`?",
   "code": null,
   "options": [
    "SyntaxError",
    "NameError",
    "ValueError",
    "keiner"
   ],
   "explanation": "In Bedingungen braucht man ==, = ist Zuweisung."
  },
  {
   "id": "q56",
   "topic": "dateien",
   "question": "Was passiert bei `open(\"liste.txt\", \"w\")`, wenn die Datei existiert?",
   "code": null,
   "options": [
    "Der Inhalt wird überschrieben",
    "Es wird angehängt",
    "FileExistsError",
    "Sie wird nur gelesen"
   ],
   "explanation": "\"w\" leert die Datei. Zum Anhängen \"a\" verwenden."
  },
  {
   "id": "q57",
   "topic": "dateien",
   "question": "Was gibt der Code aus?",
   "code": "import math\nprint(math.sqrt(16) + math.floor(2.7))",
   "options": [
    "6.0",
    "6",
    "7.0",
    "6.7"
   ],
   "explanation": "sqrt liefert float 4.0, floor(2.7) = 2."
  },
  {
   "id": "q58",
   "topic": "dateien",
   "question": "Warum `with open(...) as f:`?",
   "code": null,
   "options": [
    "Die Datei wird automatisch geschlossen",
    "Es ist schneller",
    "Nur so kann man schreiben",
    "Es verhindert alle Fehler"
   ],
   "explanation": "with schließt die Datei auch bei Fehlern zuverlässig."
  },
  {
   "id": "q59",
   "topic": "dateien",
   "question": "Was gibt der Code aus?",
   "code": "zeile = \"Ana;21\\n\"\nname, alter = zeile.strip().split(\";\")\nprint(int(alter) + 1)",
   "options": [
    "22",
    "211",
    "Ana",
    "TypeError"
   ],
   "explanation": "Nach strip und split wird alter in int umgewandelt."
  },
  {
   "id": "q60",
   "topic": "dateien",
   "question": "Welche Werte kann `random.randint(1, 6)` liefern?",
   "code": null,
   "options": [
    "1 bis 6 (beide inklusive)",
    "1 bis 5",
    "0 bis 6",
    "0 bis 5"
   ],
   "explanation": "Anders als range ist bei randint die Obergrenze inklusive."
  },
  {
   "id": "q61",
   "topic": "oop",
   "question": "Was gibt der Code aus?",
   "code": "class A:\n    def __init__(self, x):\n        self.x = x\na = A(3)\nb = A(4)\nprint(a.x + b.x)",
   "options": [
    "7",
    "3",
    "4",
    "Fehler"
   ],
   "explanation": "Jedes Objekt hat sein eigenes Attribut x."
  },
  {
   "id": "q62",
   "topic": "oop",
   "question": "Was gibt der Code aus?",
   "code": "class Tier:\n    def sprich(self):\n        return \"...\"\nclass Hund(Tier):\n    def sprich(self):\n        return \"Wuff\"\nprint(Hund().sprich())",
   "options": [
    "Wuff",
    "...",
    "...Wuff",
    "Fehler"
   ],
   "explanation": "Hund überschreibt die Methode der Elternklasse."
  },
  {
   "id": "q63",
   "topic": "oop",
   "question": "Was gibt der Code aus?",
   "code": "class P:\n    def __init__(self, n):\n        self.n = n\n    def __str__(self):\n        return \"P:\" + self.n\nprint(P(\"x\"))",
   "options": [
    "P:x",
    "<__main__.P object>",
    "x",
    "P"
   ],
   "explanation": "__str__ bestimmt die Ausgabe von print."
  },
  {
   "id": "q64",
   "topic": "oop",
   "question": "Wofür steht `self` in einer Methode?",
   "code": null,
   "options": [
    "Für das aktuelle Objekt",
    "Für die Klasse selbst",
    "Für die Elternklasse",
    "Für das Modul"
   ],
   "explanation": "self ist die Instanz, auf der die Methode aufgerufen wurde."
  }
 ],
 "tasks": [
  {
   "id": "g1",
   "topic": "grundlagen",
   "level": 1,
   "title": "Hallo, Welt!",
   "text": "Gib den Text `Hallo, Welt!` aus.",
   "starter": "# Schreibe hier deinen Code\n",
   "check": {
    "type": "output",
    "runs": [
     {
      "inputs": [],
      "expected": "Hallo, Welt!"
     }
    ]
   },
   "hints": [
    "Nutze die Funktion `print()`.",
    "Text muss in Anführungszeichen stehen: `print(\"...\")`"
   ],
   "solution": "print(\"Hallo, Welt!\")"
  },
  {
   "id": "g2",
   "topic": "grundlagen",
   "level": 1,
   "title": "Grundrechenarten",
   "text": "Gegeben sind `a = 17` und `b = 5`. Gib jeweils in einer eigenen Zeile aus: Summe, Differenz, Produkt, Quotient (`/`), ganzzahlige Division und Rest.",
   "starter": "a = 17\nb = 5\n",
   "check": {
    "type": "output",
    "runs": [
     {
      "inputs": [],
      "expected": "22\n12\n85\n3.4\n3\n2"
     }
    ]
   },
   "hints": [
    "Sechs `print()`-Aufrufe.",
    "Operatoren: `+ - * / // %`"
   ],
   "solution": "a = 17\nb = 5\nprint(a + b)\nprint(a - b)\nprint(a * b)\nprint(a / b)\nprint(a // b)\nprint(a % b)"
  },
  {
   "id": "g3",
   "topic": "grundlagen",
   "level": 1,
   "title": "Celsius → Fahrenheit",
   "text": "Lies mit `input()` eine Temperatur in °C ein und gib sie in °F mit **einer** Nachkommastelle aus (nur die Zahl).\n\nFormel: `F = C * 1.8 + 32`\n\nBeispiel: Eingabe `25` → Ausgabe `77.0`",
   "starter": "c = input(\"Temperatur in °C: \")\n",
   "check": {
    "type": "output",
    "runs": [
     {
      "inputs": [
       "25"
      ],
      "expected": "77.0"
     },
     {
      "inputs": [
       "-40"
      ],
      "expected": "-40.0"
     },
     {
      "inputs": [
       "36.6"
      ],
      "expected": "97.9"
     }
    ]
   },
   "hints": [
    "`input()` liefert einen String – wandle ihn mit `float()` um.",
    "Ausgabe mit einer Nachkommastelle: `print(f\"{f:.1f}\")`"
   ],
   "solution": "c = float(input(\"Temperatur in °C: \"))\nf = c * 1.8 + 32\nprint(f\"{f:.1f}\")"
  },
  {
   "id": "g4",
   "topic": "grundlagen",
   "level": 1,
   "title": "Molare Masse von Wasser",
   "text": "Berechne die molare Masse von H₂O (2 × H + 1 × O) und gib sie mit **3** Nachkommastellen aus.\n\nH = 1.008 g/mol, O = 15.999 g/mol",
   "starter": "H = 1.008\nO = 15.999\n",
   "check": {
    "type": "output",
    "runs": [
     {
      "inputs": [],
      "expected": "18.015"
     }
    ]
   },
   "hints": [
    "`m = 2 * H + O`",
    "`print(f\"{m:.3f}\")`"
   ],
   "solution": "H = 1.008\nO = 15.999\nm = 2 * H + O\nprint(f\"{m:.3f}\")"
  },
  {
   "id": "g5",
   "topic": "grundlagen",
   "level": 1,
   "title": "Sekunden umrechnen",
   "text": "Lies eine Anzahl Sekunden ein (ganze Zahl) und gib aus, wie viele Stunden, Minuten und Sekunden das sind – im Format `h:m:s`, ohne führende Nullen.\n\nBeispiel: `3725` → `1:2:5`",
   "starter": "s = int(input(\"Sekunden: \"))\n",
   "check": {
    "type": "output",
    "runs": [
     {
      "inputs": [
       "3725"
      ],
      "expected": "1:2:5"
     },
     {
      "inputs": [
       "60"
      ],
      "expected": "0:1:0"
     },
     {
      "inputs": [
       "100000"
      ],
      "expected": "27:46:40"
     }
    ]
   },
   "hints": [
    "Stunden: `s // 3600`",
    "Restliche Sekunden: `s % 3600`, davon Minuten mit `// 60`",
    "Ausgabe z. B. mit `print(h, m, sek, sep=\":\")`"
   ],
   "solution": "s = int(input(\"Sekunden: \"))\nh = s // 3600\nm = (s % 3600) // 60\nsek = s % 60\nprint(h, m, sek, sep=\":\")"
  },
  {
   "id": "s1",
   "topic": "strings",
   "level": 1,
   "title": "String umdrehen",
   "text": "Schreibe eine Funktion `umdrehen(s)`, die den String `s` rückwärts **zurückgibt**.\n\n`umdrehen(\"Python\")` → `\"nohtyP\"`",
   "starter": "def umdrehen(s):\n    pass\n",
   "check": {
    "type": "function",
    "name": "umdrehen",
    "cases": [
     [
      [
       "Python"
      ],
      "nohtyP"
     ],
     [
      [
       "a"
      ],
      "a"
     ],
     [
      [
       ""
      ],
      ""
     ],
     [
      [
       "Lagerregal"
      ],
      "lagerregaL"
     ]
    ]
   },
   "hints": [
    "Slicing mit negativer Schrittweite.",
    "`s[::-1]`"
   ],
   "solution": "def umdrehen(s):\n    return s[::-1]"
  },
  {
   "id": "s2",
   "topic": "strings",
   "level": 2,
   "title": "Palindrom-Check",
   "text": "Schreibe `ist_palindrom(s)`, die `True` zurückgibt, wenn `s` vorwärts wie rückwärts gleich ist – **Groß-/Kleinschreibung und Leerzeichen ignorieren**.\n\n`ist_palindrom(\"Reliefpfeiler\")` → `True`\n`ist_palindrom(\"Ein Esel\")` → `False`",
   "starter": "def ist_palindrom(s):\n    pass\n",
   "check": {
    "type": "function",
    "name": "ist_palindrom",
    "cases": [
     [
      [
       "Reliefpfeiler"
      ],
      true
     ],
     [
      [
       "Anna"
      ],
      true
     ],
     [
      [
       "Ein Esel"
      ],
      false
     ],
     [
      [
       "Trug Tim eine so helle Hose nie mit Gurt"
      ],
      true
     ],
     [
      [
       "Python"
      ],
      false
     ]
    ]
   },
   "hints": [
    "Erst vereinfachen: `t = s.lower().replace(\" \", \"\")`",
    "Dann vergleichen: `t == t[::-1]`"
   ],
   "solution": "def ist_palindrom(s):\n    t = s.lower().replace(\" \", \"\")\n    return t == t[::-1]"
  },
  {
   "id": "s3",
   "topic": "strings",
   "level": 1,
   "title": "Vokale zählen",
   "text": "Schreibe `vokale_zaehlen(text)`, die zurückgibt, wie viele Vokale (a, e, i, o, u – groß oder klein) im Text vorkommen.",
   "starter": "def vokale_zaehlen(text):\n    pass\n",
   "check": {
    "type": "function",
    "name": "vokale_zaehlen",
    "cases": [
     [
      [
       "Hallo Welt"
      ],
      3
     ],
     [
      [
       "AEIOU"
      ],
      5
     ],
     [
      [
       "xyz"
      ],
      0
     ],
     [
      [
       "Chemiekaufmann"
      ],
      6
     ]
    ]
   },
   "hints": [
    "Zähler bei 0 starten und mit `for zeichen in text.lower():` durchgehen.",
    "`if zeichen in \"aeiou\":`"
   ],
   "solution": "def vokale_zaehlen(text):\n    anzahl = 0\n    for z in text.lower():\n        if z in \"aeiou\":\n            anzahl += 1\n    return anzahl"
  },
  {
   "id": "s4",
   "topic": "strings",
   "level": 2,
   "title": "Initialen",
   "text": "Schreibe `initialen(name)`, die aus einem vollständigen Namen die Initialen mit Punkt bildet (immer groß).\n\n`initialen(\"max mustermann\")` → `\"M.M.\"`\n`initialen(\"Anna Lena Schmidt\")` → `\"A.L.S.\"`",
   "starter": "def initialen(name):\n    pass\n",
   "check": {
    "type": "function",
    "name": "initialen",
    "cases": [
     [
      [
       "max mustermann"
      ],
      "M.M."
     ],
     [
      [
       "Anna Lena Schmidt"
      ],
      "A.L.S."
     ],
     [
      [
       "Pascal"
      ],
      "P."
     ]
    ]
   },
   "hints": [
    "`name.split()` liefert die einzelnen Wörter.",
    "Von jedem Wort `wort[0].upper() + \".\"` anhängen."
   ],
   "solution": "def initialen(name):\n    ergebnis = \"\"\n    for wort in name.split():\n        ergebnis += wort[0].upper() + \".\"\n    return ergebnis"
  },
  {
   "id": "s5",
   "topic": "strings",
   "level": 2,
   "title": "Preis deutsch formatieren",
   "text": "Schreibe `preis_format(betrag)`, die einen Betrag als String mit 2 Nachkommastellen, **Komma** als Dezimaltrenner und ` €` zurückgibt.\n\n`preis_format(12.5)` → `\"12,50 €\"`",
   "starter": "def preis_format(betrag):\n    pass\n",
   "check": {
    "type": "function",
    "name": "preis_format",
    "cases": [
     [
      [
       12.5
      ],
      "12,50 €"
     ],
     [
      [
       3
      ],
      "3,00 €"
     ],
     [
      [
       0.199
      ],
      "0,20 €"
     ],
     [
      [
       1234.567
      ],
      "1234,57 €"
     ]
    ]
   },
   "hints": [
    "Zuerst `f\"{betrag:.2f}\"` – das liefert z. B. `\"12.50\"`.",
    "Dann `.replace(\".\", \",\")` und `\" €\"` anhängen."
   ],
   "solution": "def preis_format(betrag):\n    return f\"{betrag:.2f}\".replace(\".\", \",\") + \" €\""
  },
  {
   "id": "s6",
   "topic": "strings",
   "level": 2,
   "title": "Längstes Wort",
   "text": "Schreibe `laengstes_wort(satz)`, die das längste Wort im Satz zurückgibt. Bei Gleichstand das **erste**.",
   "starter": "def laengstes_wort(satz):\n    pass\n",
   "check": {
    "type": "function",
    "name": "laengstes_wort",
    "cases": [
     [
      [
       "Ich lerne gerade Python"
      ],
      "gerade"
     ],
     [
      [
       "a bb cc"
      ],
      "bb"
     ],
     [
      [
       "Destillation"
      ],
      "Destillation"
     ]
    ]
   },
   "hints": [
    "Satz mit `split()` zerlegen.",
    "Merke dir das bisher längste Wort und vergleiche mit `len()` – nur bei **echt** größer ersetzen."
   ],
   "solution": "def laengstes_wort(satz):\n    bestes = \"\"\n    for w in satz.split():\n        if len(w) > len(bestes):\n            bestes = w\n    return bestes"
  },
  {
   "id": "b1",
   "topic": "bedingungen",
   "level": 1,
   "title": "pH-Wert bewerten",
   "text": "Schreibe `ph_bewertung(ph)`, die `\"sauer\"` (< 7), `\"neutral\"` (= 7) oder `\"basisch\"` (> 7) zurückgibt.",
   "starter": "def ph_bewertung(ph):\n    pass\n",
   "check": {
    "type": "function",
    "name": "ph_bewertung",
    "cases": [
     [
      [
       3.5
      ],
      "sauer"
     ],
     [
      [
       7
      ],
      "neutral"
     ],
     [
      [
       7.0
      ],
      "neutral"
     ],
     [
      [
       12
      ],
      "basisch"
     ],
     [
      [
       6.99
      ],
      "sauer"
     ]
    ],
    "requires": [
     "If"
    ]
   },
   "hints": [
    "`if ph < 7: ... elif ph == 7: ... else: ...`"
   ],
   "solution": "def ph_bewertung(ph):\n    if ph < 7:\n        return \"sauer\"\n    elif ph == 7:\n        return \"neutral\"\n    else:\n        return \"basisch\""
  },
  {
   "id": "b2",
   "topic": "bedingungen",
   "level": 1,
   "title": "Notenrechner",
   "text": "Schreibe `note(punkte)` für eine Klausur mit 100 Punkten:\n- ab 90 → `\"sehr gut\"`\n- ab 75 → `\"gut\"`\n- ab 60 → `\"befriedigend\"`\n- ab 50 → `\"ausreichend\"`\n- sonst → `\"nicht bestanden\"`",
   "starter": "def note(punkte):\n    pass\n",
   "check": {
    "type": "function",
    "name": "note",
    "cases": [
     [
      [
       95
      ],
      "sehr gut"
     ],
     [
      [
       90
      ],
      "sehr gut"
     ],
     [
      [
       89
      ],
      "gut"
     ],
     [
      [
       75
      ],
      "gut"
     ],
     [
      [
       60
      ],
      "befriedigend"
     ],
     [
      [
       50
      ],
      "ausreichend"
     ],
     [
      [
       49.5
      ],
      "nicht bestanden"
     ],
     [
      [
       0
      ],
      "nicht bestanden"
     ]
    ]
   },
   "hints": [
    "Von oben nach unten prüfen – `elif` sorgt dafür, dass nur ein Zweig greift.",
    "`if punkte >= 90: ... elif punkte >= 75: ...`"
   ],
   "solution": "def note(punkte):\n    if punkte >= 90:\n        return \"sehr gut\"\n    elif punkte >= 75:\n        return \"gut\"\n    elif punkte >= 60:\n        return \"befriedigend\"\n    elif punkte >= 50:\n        return \"ausreichend\"\n    else:\n        return \"nicht bestanden\""
  },
  {
   "id": "b3",
   "topic": "bedingungen",
   "level": 2,
   "title": "Schaltjahr",
   "text": "Schreibe `ist_schaltjahr(jahr)` → `True`/`False`.\n\nRegel: durch 4 teilbar, **außer** durch 100 teilbar – **es sei denn** durch 400 teilbar.\n(2024 ja, 1900 nein, 2000 ja)",
   "starter": "def ist_schaltjahr(jahr):\n    pass\n",
   "check": {
    "type": "function",
    "name": "ist_schaltjahr",
    "cases": [
     [
      [
       2024
      ],
      true
     ],
     [
      [
       2023
      ],
      false
     ],
     [
      [
       1900
      ],
      false
     ],
     [
      [
       2000
      ],
      true
     ],
     [
      [
       2100
      ],
      false
     ]
    ]
   },
   "hints": [
    "Teilbarkeit: `jahr % 4 == 0`",
    "Kompakt: `(jahr % 4 == 0 and jahr % 100 != 0) or jahr % 400 == 0`"
   ],
   "solution": "def ist_schaltjahr(jahr):\n    return (jahr % 4 == 0 and jahr % 100 != 0) or jahr % 400 == 0"
  },
  {
   "id": "b4",
   "topic": "bedingungen",
   "level": 1,
   "title": "Maximum von drei Zahlen",
   "text": "Schreibe `max_von_drei(a, b, c)`, die die größte Zahl zurückgibt – **ohne** `max()` zu benutzen.",
   "starter": "def max_von_drei(a, b, c):\n    pass\n",
   "check": {
    "type": "function",
    "name": "max_von_drei",
    "cases": [
     [
      [
       1,
       2,
       3
      ],
      3
     ],
     [
      [
       9,
       2,
       3
      ],
      9
     ],
     [
      [
       1,
       8,
       3
      ],
      8
     ],
     [
      [
       -1,
       -5,
       -3
      ],
      -1
     ],
     [
      [
       4,
       4,
       2
      ],
      4
     ]
    ],
    "requires": [
     "If"
    ],
    "forbid": [
     "max"
    ]
   },
   "hints": [
    "Nimm an, `a` ist am größten, und vergleiche dann mit `b` und `c`.",
    "```\ngroesste = a\nif b > groesste:\n    groesste = b\n```"
   ],
   "solution": "def max_von_drei(a, b, c):\n    groesste = a\n    if b > groesste:\n        groesste = b\n    if c > groesste:\n        groesste = c\n    return groesste"
  },
  {
   "id": "b5",
   "topic": "bedingungen",
   "level": 2,
   "title": "Versandkosten",
   "text": "Schreibe `versandkosten(warenwert, express)`:\n- Standard: 4.90 €, ab 50 € Warenwert kostenlos (0)\n- Wenn `express` `True` ist, kommen immer **zusätzlich** 9.90 € dazu.\n\nGib die Versandkosten zurück.",
   "starter": "def versandkosten(warenwert, express):\n    pass\n",
   "check": {
    "type": "function",
    "name": "versandkosten",
    "cases": [
     [
      [
       20,
       false
      ],
      4.9
     ],
     [
      [
       50,
       false
      ],
      0
     ],
     [
      [
       80,
       true
      ],
      9.9
     ],
     [
      [
       10,
       true
      ],
      14.8
     ]
    ]
   },
   "hints": [
    "Erst Grundkosten bestimmen (if/else), dann `if express: kosten += 9.90`."
   ],
   "solution": "def versandkosten(warenwert, express):\n    if warenwert >= 50:\n        kosten = 0\n    else:\n        kosten = 4.90\n    if express:\n        kosten += 9.90\n    return kosten"
  },
  {
   "id": "l1",
   "topic": "schleifen",
   "level": 1,
   "title": "Zählen von 1 bis 10",
   "text": "Gib mit einer **for-Schleife** die Zahlen 1 bis 10 aus, jede in einer eigenen Zeile.",
   "starter": "",
   "check": {
    "type": "output",
    "runs": [
     {
      "inputs": [],
      "expected": "1\n2\n3\n4\n5\n6\n7\n8\n9\n10"
     }
    ],
    "requires": [
     "For"
    ]
   },
   "hints": [
    "`range(1, 11)` – die Obergrenze ist exklusiv!"
   ],
   "solution": "for i in range(1, 11):\n    print(i)"
  },
  {
   "id": "l2",
   "topic": "schleifen",
   "level": 1,
   "title": "Summe 1 bis 100",
   "text": "Berechne mit einer Schleife die Summe aller Zahlen von 1 bis 100 und gib sie aus.",
   "starter": "summe = 0\n",
   "check": {
    "type": "output",
    "runs": [
     {
      "inputs": [],
      "expected": "5050"
     }
    ],
    "requires_any": [
     "For",
     "While"
    ]
   },
   "hints": [
    "Akkumulator-Muster: `summe += i` in der Schleife.",
    "Ausgabe erst **nach** der Schleife (nicht eingerückt)."
   ],
   "solution": "summe = 0\nfor i in range(1, 101):\n    summe += i\nprint(summe)"
  },
  {
   "id": "l3",
   "topic": "schleifen",
   "level": 1,
   "title": "Einmaleins-Reihe",
   "text": "Gib die 7er-Reihe im Format `7 x 1 = 7` bis `7 x 10 = 70` aus.",
   "starter": "",
   "check": {
    "type": "output",
    "runs": [
     {
      "inputs": [],
      "expected": "7 x 1 = 7\n7 x 2 = 14\n7 x 3 = 21\n7 x 4 = 28\n7 x 5 = 35\n7 x 6 = 42\n7 x 7 = 49\n7 x 8 = 56\n7 x 9 = 63\n7 x 10 = 70"
     }
    ],
    "requires_any": [
     "For",
     "While"
    ]
   },
   "hints": [
    "`print(f\"7 x {i} = {7 * i}\")`"
   ],
   "solution": "for i in range(1, 11):\n    print(f\"7 x {i} = {7 * i}\")"
  },
  {
   "id": "l4",
   "topic": "schleifen",
   "level": 2,
   "title": "Die ersten 20 Primzahlen",
   "text": "Gib die **ersten 20 Primzahlen** aus, jede in einer eigenen Zeile.\n\nEine Primzahl ist größer als 1 und nur durch 1 und sich selbst teilbar.",
   "starter": "",
   "check": {
    "type": "output",
    "runs": [
     {
      "inputs": [],
      "expected": "2\n3\n5\n7\n11\n13\n17\n19\n23\n29\n31\n37\n41\n43\n47\n53\n59\n61\n67\n71"
     }
    ],
    "requires_any": [
     "For",
     "While"
    ]
   },
   "hints": [
    "Du brauchst einen Zähler `gefunden` und eine Kandidatenzahl `n`, die du hochzählst: `while gefunden < 20:`",
    "Für jedes `n` prüfst du mit einer inneren Schleife, ob irgendein `t` von 2 bis n-1 es teilt (`n % t == 0`).",
    "Eine Merk-Variable `ist_prim = True` hilft; bei einem Teiler auf `False` setzen und `break`."
   ],
   "solution": "gefunden = 0\nn = 2\nwhile gefunden < 20:\n    ist_prim = True\n    for t in range(2, n):\n        if n % t == 0:\n            ist_prim = False\n            break\n    if ist_prim:\n        print(n)\n        gefunden += 1\n    n += 1"
  },
  {
   "id": "l5",
   "topic": "schleifen",
   "level": 2,
   "title": "FizzBuzz",
   "text": "Gib die Zahlen von 1 bis 30 aus. Aber:\n- durch 3 **und** 5 teilbar → `FizzBuzz`\n- nur durch 3 → `Fizz`\n- nur durch 5 → `Buzz`",
   "starter": "",
   "check": {
    "type": "output",
    "runs": [
     {
      "inputs": [],
      "expected": "1\n2\nFizz\n4\nBuzz\nFizz\n7\n8\nFizz\nBuzz\n11\nFizz\n13\n14\nFizzBuzz\n16\n17\nFizz\n19\nBuzz\nFizz\n22\n23\nFizz\nBuzz\n26\nFizz\n28\n29\nFizzBuzz"
     }
    ],
    "requires_any": [
     "For",
     "While"
    ]
   },
   "hints": [
    "Die Reihenfolge der Prüfungen ist entscheidend: **zuerst** auf 3 und 5 prüfen!",
    "`if i % 3 == 0 and i % 5 == 0:`"
   ],
   "solution": "for i in range(1, 31):\n    if i % 3 == 0 and i % 5 == 0:\n        print(\"FizzBuzz\")\n    elif i % 3 == 0:\n        print(\"Fizz\")\n    elif i % 5 == 0:\n        print(\"Buzz\")\n    else:\n        print(i)"
  },
  {
   "id": "l6",
   "topic": "schleifen",
   "level": 1,
   "title": "Fakultät",
   "text": "Schreibe `fakultaet(n)`, die n! = 1 · 2 · … · n mit einer **Schleife** berechnet. Es gilt 0! = 1.",
   "starter": "def fakultaet(n):\n    pass\n",
   "check": {
    "type": "function",
    "name": "fakultaet",
    "cases": [
     [
      [
       0
      ],
      1
     ],
     [
      [
       1
      ],
      1
     ],
     [
      [
       5
      ],
      120
     ],
     [
      [
       10
      ],
      3628800
     ]
    ],
    "requires_any": [
     "For",
     "While"
    ],
    "forbid": [
     "factorial"
    ]
   },
   "hints": [
    "Beim Produkt startet der Akkumulator bei **1**, nicht bei 0.",
    "`for i in range(1, n + 1): ergebnis *= i`"
   ],
   "solution": "def fakultaet(n):\n    ergebnis = 1\n    for i in range(1, n + 1):\n        ergebnis *= i\n    return ergebnis"
  },
  {
   "id": "l7",
   "topic": "schleifen",
   "level": 1,
   "title": "Countdown",
   "text": "Gib mit einer **while-Schleife** einen Countdown von 10 bis 1 aus (je Zeile) und danach `Start!`.",
   "starter": "",
   "check": {
    "type": "output",
    "runs": [
     {
      "inputs": [],
      "expected": "10\n9\n8\n7\n6\n5\n4\n3\n2\n1\nStart!"
     }
    ],
    "requires": [
     "While"
    ]
   },
   "hints": [
    "`i = 10`, `while i > 0:`, und in der Schleife `i -= 1` nicht vergessen."
   ],
   "solution": "i = 10\nwhile i > 0:\n    print(i)\n    i -= 1\nprint(\"Start!\")"
  },
  {
   "id": "l8",
   "topic": "schleifen",
   "level": 2,
   "title": "Fibonacci-Folge",
   "text": "Schreibe `fibonacci(n)`, die eine **Liste** mit den ersten `n` Fibonacci-Zahlen zurückgibt. Die Folge beginnt mit 0, 1 und jede weitere Zahl ist die Summe der beiden vorherigen.\n\n`fibonacci(7)` → `[0, 1, 1, 2, 3, 5, 8]`",
   "starter": "def fibonacci(n):\n    pass\n",
   "check": {
    "type": "function",
    "name": "fibonacci",
    "cases": [
     [
      [
       7
      ],
      [
       0,
       1,
       1,
       2,
       3,
       5,
       8
      ]
     ],
     [
      [
       1
      ],
      [
       0
      ]
     ],
     [
      [
       0
      ],
      []
     ],
     [
      [
       12
      ],
      [
       0,
       1,
       1,
       2,
       3,
       5,
       8,
       13,
       21,
       34,
       55,
       89
      ]
     ]
    ]
   },
   "hints": [
    "Zwei Variablen `a, b = 0, 1` merken sich die letzten beiden Zahlen.",
    "In jedem Schritt: `liste.append(a)` und dann `a, b = b, a + b`"
   ],
   "solution": "def fibonacci(n):\n    liste = []\n    a, b = 0, 1\n    for _ in range(n):\n        liste.append(a)\n        a, b = b, a + b\n    return liste"
  },
  {
   "id": "l9",
   "topic": "schleifen",
   "level": 1,
   "title": "Sternen-Dreieck",
   "text": "Lies eine Zahl `n` ein und gib ein Dreieck aus Sternen aus. Für `n = 4`:\n```\n*\n**\n***\n****\n```",
   "starter": "n = int(input(\"Höhe: \"))\n",
   "check": {
    "type": "output",
    "runs": [
     {
      "inputs": [
       "4"
      ],
      "expected": "*\n**\n***\n****"
     },
     {
      "inputs": [
       "1"
      ],
      "expected": "*"
     },
     {
      "inputs": [
       "6"
      ],
      "expected": "*\n**\n***\n****\n*****\n******"
     }
    ],
    "requires_any": [
     "For",
     "While"
    ]
   },
   "hints": [
    "`\"*\" * 3` ergibt `\"***\"`.",
    "`for i in range(1, n + 1): print(\"*\" * i)`"
   ],
   "solution": "n = int(input(\"Höhe: \"))\nfor i in range(1, n + 1):\n    print(\"*\" * i)"
  },
  {
   "id": "l10",
   "topic": "schleifen",
   "level": 2,
   "title": "Zahlenraten",
   "text": "Die geheime Zahl ist `42`. Lies so lange Zahlen mit `input()` ein, bis sie erraten wurde. Gib nach jedem falschen Tipp `zu klein` oder `zu groß` aus. Bei Erfolg: `Richtig! Versuche: X`.\n\nDie Tests spielen verschiedene Eingabefolgen durch.",
   "starter": "geheim = 42\n",
   "check": {
    "type": "output",
    "runs": [
     {
      "inputs": [
       "10",
       "50",
       "42"
      ],
      "expected": "zu klein\nzu groß\nRichtig! Versuche: 3"
     },
     {
      "inputs": [
       "42"
      ],
      "expected": "Richtig! Versuche: 1"
     },
     {
      "inputs": [
       "99",
       "60",
       "41",
       "42"
      ],
      "expected": "zu groß\nzu groß\nzu klein\nRichtig! Versuche: 4"
     }
    ],
    "requires": [
     "While"
    ]
   },
   "hints": [
    "`while True:` mit `break` bei richtiger Zahl – oder `while tipp != geheim:`.",
    "Einen Zähler `versuche` bei jedem Tipp um 1 erhöhen.",
    "`tipp = int(input(\"Tipp: \"))`"
   ],
   "solution": "geheim = 42\nversuche = 0\nwhile True:\n    tipp = int(input(\"Tipp: \"))\n    versuche += 1\n    if tipp < geheim:\n        print(\"zu klein\")\n    elif tipp > geheim:\n        print(\"zu groß\")\n    else:\n        print(\"Richtig! Versuche:\", versuche)\n        break"
  },
  {
   "id": "l11",
   "topic": "schleifen",
   "level": 2,
   "title": "Quersumme",
   "text": "Schreibe `quersumme(n)` für eine nicht-negative ganze Zahl, **ohne** sie in einen String umzuwandeln.\n\n`quersumme(1234)` → `10`",
   "starter": "def quersumme(n):\n    pass\n",
   "check": {
    "type": "function",
    "name": "quersumme",
    "cases": [
     [
      [
       1234
      ],
      10
     ],
     [
      [
       0
      ],
      0
     ],
     [
      [
       9
      ],
      9
     ],
     [
      [
       99999
      ],
      45
     ]
    ],
    "requires": [
     "While"
    ],
    "forbid": [
     "str"
    ]
   },
   "hints": [
    "`n % 10` ist die letzte Ziffer, `n // 10` entfernt sie.",
    "`while n > 0:` …"
   ],
   "solution": "def quersumme(n):\n    s = 0\n    while n > 0:\n        s += n % 10\n        n //= 10\n    return s"
  },
  {
   "id": "l12",
   "topic": "schleifen",
   "level": 3,
   "title": "Zinsen: Wann verdoppelt?",
   "text": "Schreibe `jahre_bis_verdopplung(zins)`: Ein Kapital wächst jährlich um `zins` Prozent. Nach wie vielen **vollen Jahren** hat es sich mindestens verdoppelt?\n\n`jahre_bis_verdopplung(7)` → `11`",
   "starter": "def jahre_bis_verdopplung(zins):\n    pass\n",
   "check": {
    "type": "function",
    "name": "jahre_bis_verdopplung",
    "cases": [
     [
      [
       7
      ],
      11
     ],
     [
      [
       10
      ],
      8
     ],
     [
      [
       100
      ],
      1
     ],
     [
      [
       1
      ],
      70
     ]
    ],
    "requires": [
     "While"
    ]
   },
   "hints": [
    "Starte mit `kapital = 1.0` und `jahre = 0`.",
    "`while kapital < 2:` → `kapital *= 1 + zins / 100` und `jahre += 1`"
   ],
   "solution": "def jahre_bis_verdopplung(zins):\n    kapital = 1.0\n    jahre = 0\n    while kapital < 2:\n        kapital *= 1 + zins / 100\n        jahre += 1\n    return jahre"
  },
  {
   "id": "li1",
   "topic": "listen",
   "level": 1,
   "title": "Durchschnitt",
   "text": "Schreibe `durchschnitt(zahlen)`, die den Mittelwert einer (nicht leeren) Liste zurückgibt.",
   "starter": "def durchschnitt(zahlen):\n    pass\n",
   "check": {
    "type": "function",
    "name": "durchschnitt",
    "cases": [
     [
      [
       [
        1,
        2,
        3,
        4
       ]
      ],
      2.5
     ],
     [
      [
       [
        10
       ]
      ],
      10
     ],
     [
      [
       [
        1.7,
        2.3,
        1.0
       ]
      ],
      1.6666666666666667
     ]
    ]
   },
   "hints": [
    "`sum(zahlen) / len(zahlen)`"
   ],
   "solution": "def durchschnitt(zahlen):\n    return sum(zahlen) / len(zahlen)"
  },
  {
   "id": "li2",
   "topic": "listen",
   "level": 1,
   "title": "Nur gerade Zahlen",
   "text": "Schreibe `nur_gerade(zahlen)`, die eine **neue** Liste mit allen geraden Zahlen (in gleicher Reihenfolge) zurückgibt.",
   "starter": "def nur_gerade(zahlen):\n    pass\n",
   "check": {
    "type": "function",
    "name": "nur_gerade",
    "cases": [
     [
      [
       [
        1,
        2,
        3,
        4,
        5,
        6
       ]
      ],
      [
       2,
       4,
       6
      ]
     ],
     [
      [
       [
        1,
        3
       ]
      ],
      []
     ],
     [
      [
       [
        0,
        -2,
        7
       ]
      ],
      [
       0,
       -2
      ]
     ]
    ]
   },
   "hints": [
    "Leere Liste anlegen, durchgehen, mit `append` befüllen.",
    "Oder: `[x for x in zahlen if x % 2 == 0]`"
   ],
   "solution": "def nur_gerade(zahlen):\n    return [x for x in zahlen if x % 2 == 0]"
  },
  {
   "id": "li3",
   "topic": "listen",
   "level": 1,
   "title": "Quadratzahlen (List Comprehension)",
   "text": "Schreibe `quadrate(n)`, die `[1, 4, 9, …, n²]` zurückgibt – mit einer **List Comprehension**.",
   "starter": "def quadrate(n):\n    pass\n",
   "check": {
    "type": "function",
    "name": "quadrate",
    "cases": [
     [
      [
       5
      ],
      [
       1,
       4,
       9,
       16,
       25
      ]
     ],
     [
      [
       1
      ],
      [
       1
      ]
     ],
     [
      [
       0
      ],
      []
     ]
    ],
    "requires": [
     "ListComp"
    ]
   },
   "hints": [
    "`[ausdruck for i in range(...)]`",
    "`[i ** 2 for i in range(1, n + 1)]`"
   ],
   "solution": "def quadrate(n):\n    return [i ** 2 for i in range(1, n + 1)]"
  },
  {
   "id": "li4",
   "topic": "listen",
   "level": 2,
   "title": "Eigenes Maximum",
   "text": "Schreibe `mein_max(zahlen)`, die die größte Zahl einer nicht-leeren Liste zurückgibt – **ohne** `max()` oder `sorted()`/`sort()`.",
   "starter": "def mein_max(zahlen):\n    pass\n",
   "check": {
    "type": "function",
    "name": "mein_max",
    "cases": [
     [
      [
       [
        3,
        9,
        2
       ]
      ],
      9
     ],
     [
      [
       [
        -5,
        -1,
        -9
       ]
      ],
      -1
     ],
     [
      [
       [
        7
       ]
      ],
      7
     ]
    ],
    "requires_any": [
     "For",
     "While"
    ],
    "forbid": [
     "max",
     "sorted",
     "sort"
    ]
   },
   "hints": [
    "Starte mit `groesste = zahlen[0]`.",
    "Durchlaufe die Liste und ersetze, wenn du etwas Größeres findest."
   ],
   "solution": "def mein_max(zahlen):\n    groesste = zahlen[0]\n    for z in zahlen:\n        if z > groesste:\n            groesste = z\n    return groesste"
  },
  {
   "id": "li5",
   "topic": "listen",
   "level": 2,
   "title": "Duplikate entfernen",
   "text": "Schreibe `ohne_duplikate(liste)`, die eine neue Liste ohne doppelte Einträge zurückgibt – die **Reihenfolge des ersten Auftretens** bleibt erhalten.\n\n`ohne_duplikate([3, 1, 3, 2, 1])` → `[3, 1, 2]`",
   "starter": "def ohne_duplikate(liste):\n    pass\n",
   "check": {
    "type": "function",
    "name": "ohne_duplikate",
    "cases": [
     [
      [
       [
        3,
        1,
        3,
        2,
        1
       ]
      ],
      [
       3,
       1,
       2
      ]
     ],
     [
      [
       [
        "a",
        "b",
        "a"
       ]
      ],
      [
       "a",
       "b"
      ]
     ],
     [
      [
       []
      ],
      []
     ]
    ]
   },
   "hints": [
    "`set()` verliert die Reihenfolge – also lieber selbst prüfen.",
    "`if x not in ergebnis: ergebnis.append(x)`"
   ],
   "solution": "def ohne_duplikate(liste):\n    ergebnis = []\n    for x in liste:\n        if x not in ergebnis:\n            ergebnis.append(x)\n    return ergebnis"
  },
  {
   "id": "li6",
   "topic": "listen",
   "level": 2,
   "title": "Zweitgrößte Zahl",
   "text": "Schreibe `zweitgroesste(zahlen)`, die die zweitgrößte **verschiedene** Zahl zurückgibt.\n\n`zweitgroesste([4, 9, 9, 2])` → `4`",
   "starter": "def zweitgroesste(zahlen):\n    pass\n",
   "check": {
    "type": "function",
    "name": "zweitgroesste",
    "cases": [
     [
      [
       [
        4,
        9,
        9,
        2
       ]
      ],
      4
     ],
     [
      [
       [
        1,
        2
       ]
      ],
      1
     ],
     [
      [
       [
        5,
        3,
        8,
        8,
        7
       ]
      ],
      7
     ]
    ]
   },
   "hints": [
    "Duplikate entfernen mit `set()`, dann sortieren.",
    "`sorted(set(zahlen))[-2]`"
   ],
   "solution": "def zweitgroesste(zahlen):\n    return sorted(set(zahlen))[-2]"
  },
  {
   "id": "li7",
   "topic": "listen",
   "level": 2,
   "title": "Matrix-Summe",
   "text": "Schreibe `matrix_summe(m)`, die die Summe aller Zahlen einer 2D-Liste zurückgibt.\n\n`matrix_summe([[1, 2], [3, 4]])` → `10`",
   "starter": "def matrix_summe(m):\n    pass\n",
   "check": {
    "type": "function",
    "name": "matrix_summe",
    "cases": [
     [
      [
       [
        [
         1,
         2
        ],
        [
         3,
         4
        ]
       ]
      ],
      10
     ],
     [
      [
       [
        [
         5
        ]
       ]
      ],
      5
     ],
     [
      [
       [
        [
         1,
         2,
         3
        ],
        [
         4,
         5,
         6
        ],
        [
         7,
         8,
         9
        ]
       ]
      ],
      45
     ]
    ]
   },
   "hints": [
    "Zwei verschachtelte for-Schleifen: `for zeile in m:` / `for wert in zeile:`"
   ],
   "solution": "def matrix_summe(m):\n    s = 0\n    for zeile in m:\n        for wert in zeile:\n            s += wert\n    return s"
  },
  {
   "id": "li8",
   "topic": "listen",
   "level": 3,
   "title": "Bubble Sort",
   "text": "Schreibe `bubble_sort(liste)`, die die Liste aufsteigend sortiert **zurückgibt** – ohne `sorted()` oder `.sort()`.\n\nIdee: Laufe wiederholt durch die Liste und tausche benachbarte Elemente, wenn sie in falscher Reihenfolge sind.",
   "starter": "def bubble_sort(liste):\n    pass\n",
   "check": {
    "type": "function",
    "name": "bubble_sort",
    "cases": [
     [
      [
       [
        5,
        2,
        9,
        1
       ]
      ],
      [
       1,
       2,
       5,
       9
      ]
     ],
     [
      [
       [
        1
       ]
      ],
      [
       1
      ]
     ],
     [
      [
       [
        3,
        3,
        1
       ]
      ],
      [
       1,
       3,
       3
      ]
     ],
     [
      [
       []
      ],
      []
     ],
     [
      [
       [
        9,
        8,
        7,
        6,
        5,
        4
       ]
      ],
      [
       4,
       5,
       6,
       7,
       8,
       9
      ]
     ]
    ],
    "forbid": [
     "sorted",
     "sort"
    ]
   },
   "hints": [
    "Äußere Schleife: `for i in range(len(l)):` – innere: `for j in range(len(l) - 1 - i):`",
    "Tauschen: `l[j], l[j + 1] = l[j + 1], l[j]`"
   ],
   "solution": "def bubble_sort(liste):\n    l = liste[:]\n    for i in range(len(l)):\n        for j in range(len(l) - 1 - i):\n            if l[j] > l[j + 1]:\n                l[j], l[j + 1] = l[j + 1], l[j]\n    return l"
  },
  {
   "id": "li9",
   "topic": "listen",
   "level": 2,
   "title": "Messwerte filtern",
   "text": "Schreibe `gueltige_messwerte(werte, min_w, max_w)`, die nur Werte im Bereich `min_w` bis `max_w` (inklusive) zurückgibt, **auf 1 Nachkommastelle gerundet**.\n\n`gueltige_messwerte([2.34, -1, 5.06, 11], 0, 10)` → `[2.3, 5.1]`",
   "starter": "def gueltige_messwerte(werte, min_w, max_w):\n    pass\n",
   "check": {
    "type": "function",
    "name": "gueltige_messwerte",
    "cases": [
     [
      [
       [
        2.34,
        -1,
        5.06,
        11
       ],
       0,
       10
      ],
      [
       2.3,
       5.1
      ]
     ],
     [
      [
       [
        1,
        2,
        3
       ],
       2,
       2
      ],
      [
       2
      ]
     ],
     [
      [
       [],
       0,
       1
      ],
      []
     ]
    ]
   },
   "hints": [
    "`[round(w, 1) for w in werte if min_w <= w <= max_w]`"
   ],
   "solution": "def gueltige_messwerte(werte, min_w, max_w):\n    return [round(w, 1) for w in werte if min_w <= w <= max_w]"
  },
  {
   "id": "t1",
   "topic": "tupel_sets",
   "level": 1,
   "title": "Minimum und Maximum",
   "text": "Schreibe `min_max(zahlen)`, die ein **Tupel** `(kleinste, größte)` zurückgibt.",
   "starter": "def min_max(zahlen):\n    pass\n",
   "check": {
    "type": "function",
    "name": "min_max",
    "cases": [
     [
      [
       [
        3,
        1,
        4,
        1,
        5
       ]
      ],
      [
       1,
       5
      ]
     ],
     [
      [
       [
        7
       ]
      ],
      [
       7,
       7
      ]
     ]
    ]
   },
   "hints": [
    "`return min(zahlen), max(zahlen)` – das Komma macht ein Tupel."
   ],
   "solution": "def min_max(zahlen):\n    return min(zahlen), max(zahlen)"
  },
  {
   "id": "t2",
   "topic": "tupel_sets",
   "level": 2,
   "title": "Gemeinsame Elemente",
   "text": "Schreibe `gemeinsam(a, b)`, die eine **sortierte Liste** aller Elemente zurückgibt, die in beiden Listen vorkommen (ohne Duplikate). Nutze Sets!",
   "starter": "def gemeinsam(a, b):\n    pass\n",
   "check": {
    "type": "function",
    "name": "gemeinsam",
    "cases": [
     [
      [
       [
        1,
        2,
        3,
        4
       ],
       [
        3,
        4,
        5
       ]
      ],
      [
       3,
       4
      ]
     ],
     [
      [
       [
        1,
        1,
        2
       ],
       [
        1
       ]
      ],
      [
       1
      ]
     ],
     [
      [
       [
        1
       ],
       [
        2
       ]
      ],
      []
     ]
    ]
   },
   "hints": [
    "Schnittmenge: `set(a) & set(b)`",
    "Zum Schluss `sorted(...)` – liefert eine Liste."
   ],
   "solution": "def gemeinsam(a, b):\n    return sorted(set(a) & set(b))"
  },
  {
   "id": "t3",
   "topic": "tupel_sets",
   "level": 2,
   "title": "Bester Student",
   "text": "Gegeben ist eine Liste von Tupeln `(name, note)`. Schreibe `bester(studis)`, die den **Namen** mit der besten (= kleinsten) Note zurückgibt.\n\n`bester([(\"Ana\", 2.3), (\"Ben\", 1.7)])` → `\"Ben\"`",
   "starter": "def bester(studis):\n    pass\n",
   "check": {
    "type": "function",
    "name": "bester",
    "cases": [
     [
      [
       [
        [
         "Ana",
         2.3
        ],
        [
         "Ben",
         1.7
        ],
        [
         "Cem",
         3.0
        ]
       ]
      ],
      "Ben"
     ],
     [
      [
       [
        [
         "Ana",
         1.0
        ]
       ]
      ],
      "Ana"
     ]
    ]
   },
   "hints": [
    "Durchgehen mit Unpacking: `for name, note in studis:`",
    "Oder: `min(studis, key=lambda s: s[1])[0]`"
   ],
   "solution": "def bester(studis):\n    best_name, best_note = studis[0]\n    for name, note in studis:\n        if note < best_note:\n            best_name, best_note = name, note\n    return best_name"
  },
  {
   "id": "d1",
   "topic": "dicts",
   "level": 2,
   "title": "Wörter zählen",
   "text": "Schreibe `woerter_zaehlen(text)`, die ein Dictionary `{wort: anzahl}` zurückgibt. Wörter werden klein geschrieben gezählt.\n\n`woerter_zaehlen(\"Der Hund und der Ball\")` → `{\"der\": 2, \"hund\": 1, \"und\": 1, \"ball\": 1}`",
   "starter": "def woerter_zaehlen(text):\n    pass\n",
   "check": {
    "type": "function",
    "name": "woerter_zaehlen",
    "cases": [
     [
      [
       "Der Hund und der Ball"
      ],
      {
       "der": 2,
       "hund": 1,
       "und": 1,
       "ball": 1
      }
     ],
     [
      [
       "a a a"
      ],
      {
       "a": 3
      }
     ],
     [
      [
       ""
      ],
      {}
     ]
    ]
   },
   "hints": [
    "`for wort in text.lower().split():`",
    "Zähl-Muster: `d[wort] = d.get(wort, 0) + 1`"
   ],
   "solution": "def woerter_zaehlen(text):\n    d = {}\n    for wort in text.lower().split():\n        d[wort] = d.get(wort, 0) + 1\n    return d"
  },
  {
   "id": "d2",
   "topic": "dicts",
   "level": 1,
   "title": "Telefonbuch",
   "text": "Schreibe `nummer(buch, name)`, die die Nummer aus dem Dictionary `buch` zurückgibt – oder `\"unbekannt\"`, wenn der Name fehlt.",
   "starter": "def nummer(buch, name):\n    pass\n",
   "check": {
    "type": "function",
    "name": "nummer",
    "cases": [
     [
      [
       {
        "Ana": "0151-1",
        "Ben": "0170-2"
       },
       "Ben"
      ],
      "0170-2"
     ],
     [
      [
       {
        "Ana": "0151-1"
       },
       "Cem"
      ],
      "unbekannt"
     ],
     [
      [
       {},
       "Ana"
      ],
      "unbekannt"
     ]
    ]
   },
   "hints": [
    "`buch.get(name, \"unbekannt\")`"
   ],
   "solution": "def nummer(buch, name):\n    return buch.get(name, \"unbekannt\")"
  },
  {
   "id": "d3",
   "topic": "dicts",
   "level": 2,
   "title": "Lagerwert",
   "text": "Ein Lager ist ein Dictionary `{artikel: [menge, stückpreis]}`. Schreibe `lagerwert(lager)`, die den Gesamtwert auf 2 Stellen gerundet zurückgibt.\n\n`lagerwert({\"Schraube\": [100, 0.05], \"Mutter\": [50, 0.1]})` → `10.0`",
   "starter": "def lagerwert(lager):\n    pass\n",
   "check": {
    "type": "function",
    "name": "lagerwert",
    "cases": [
     [
      [
       {
        "Schraube": [
         100,
         0.05
        ],
        "Mutter": [
         50,
         0.1
        ]
       }
      ],
      10.0
     ],
     [
      [
       {}
      ],
      0
     ],
     [
      [
       {
        "Kolben": [
         3,
         12.99
        ],
        "Pipette": [
         20,
         1.25
        ]
       }
      ],
      63.97
     ]
    ]
   },
   "hints": [
    "`for artikel, (menge, preis) in lager.items():` – oder `werte = lager[artikel]`",
    "`summe += menge * preis`, am Ende `round(summe, 2)`"
   ],
   "solution": "def lagerwert(lager):\n    summe = 0\n    for menge, preis in lager.values():\n        summe += menge * preis\n    return round(summe, 2)"
  },
  {
   "id": "d4",
   "topic": "dicts",
   "level": 2,
   "title": "Molare Masse berechnen",
   "text": "Schreibe `molmasse(formel)`. `formel` ist ein Dictionary `{element: anzahl}`, z. B. H₂O = `{\"H\": 2, \"O\": 1}`. Nutze die Tabelle `MASSEN` und gib die Molmasse auf 3 Stellen gerundet zurück.",
   "starter": "MASSEN = {\"H\": 1.008, \"C\": 12.011, \"N\": 14.007, \"O\": 15.999, \"Na\": 22.990, \"Cl\": 35.45}\n\ndef molmasse(formel):\n    pass\n",
   "check": {
    "type": "function",
    "name": "molmasse",
    "cases": [
     [
      [
       {
        "H": 2,
        "O": 1
       }
      ],
      18.015
     ],
     [
      [
       {
        "C": 6,
        "H": 12,
        "O": 6
       }
      ],
      180.156
     ],
     [
      [
       {
        "Na": 1,
        "Cl": 1
       }
      ],
      58.44
     ],
     [
      [
       {
        "C": 1,
        "O": 2
       }
      ],
      44.009
     ]
    ]
   },
   "hints": [
    "`for element, anzahl in formel.items():`",
    "`summe += MASSEN[element] * anzahl`"
   ],
   "solution": "MASSEN = {\"H\": 1.008, \"C\": 12.011, \"N\": 14.007, \"O\": 15.999, \"Na\": 22.990, \"Cl\": 35.45}\n\ndef molmasse(formel):\n    summe = 0\n    for element, anzahl in formel.items():\n        summe += MASSEN[element] * anzahl\n    return round(summe, 3)"
  },
  {
   "id": "d5",
   "topic": "dicts",
   "level": 2,
   "title": "Notenspiegel",
   "text": "Schreibe `durchschnitte(noten)`. `noten` ist `{name: [note1, note2, …]}`. Gib ein neues Dict `{name: durchschnitt}` zurück, auf 2 Stellen gerundet.",
   "starter": "def durchschnitte(noten):\n    pass\n",
   "check": {
    "type": "function",
    "name": "durchschnitte",
    "cases": [
     [
      [
       {
        "Ana": [
         1.0,
         2.0
        ],
        "Ben": [
         3.0,
         2.7,
         2.0
        ]
       }
      ],
      {
       "Ana": 1.5,
       "Ben": 2.57
      }
     ],
     [
      [
       {}
      ],
      {}
     ]
    ]
   },
   "hints": [
    "Neues leeres Dict anlegen, mit `for name, liste in noten.items():` befüllen.",
    "`ergebnis[name] = round(sum(liste) / len(liste), 2)`"
   ],
   "solution": "def durchschnitte(noten):\n    ergebnis = {}\n    for name, liste in noten.items():\n        ergebnis[name] = round(sum(liste) / len(liste), 2)\n    return ergebnis"
  },
  {
   "id": "d6",
   "topic": "dicts",
   "level": 3,
   "title": "Häufigster Buchstabe",
   "text": "Schreibe `haeufigster(text)`, die den häufigsten **Buchstaben** (klein, nur `isalpha()`-Zeichen) zurückgibt. Bei Gleichstand den, der **zuerst** im Text vorkommt.",
   "starter": "def haeufigster(text):\n    pass\n",
   "check": {
    "type": "function",
    "name": "haeufigster",
    "cases": [
     [
      [
       "Hallo Welt"
      ],
      "l"
     ],
     [
      [
       "aabb"
      ],
      "a"
     ],
     [
      [
       "Python 3!"
      ],
      "p"
     ],
     [
      [
       "Mississippi"
      ],
      "i"
     ]
    ]
   },
   "hints": [
    "Erst zählen (Dict), nur Zeichen mit `z.isalpha()` berücksichtigen.",
    "Dicts behalten die Einfügereihenfolge – beim Suchen des Maximums nur bei **echt** größer ersetzen."
   ],
   "solution": "def haeufigster(text):\n    z = {}\n    for c in text.lower():\n        if c.isalpha():\n            z[c] = z.get(c, 0) + 1\n    bester = None\n    for c in z:\n        if bester is None or z[c] > z[bester]:\n            bester = c\n    return bester"
  },
  {
   "id": "f1",
   "topic": "funktionen",
   "level": 1,
   "title": "Kreisfläche",
   "text": "Schreibe `kreisflaeche(r)`, die die Fläche π·r² auf 2 Stellen gerundet zurückgibt. Nutze `math.pi`.",
   "starter": "import math\n\ndef kreisflaeche(r):\n    pass\n",
   "check": {
    "type": "function",
    "name": "kreisflaeche",
    "cases": [
     [
      [
       1
      ],
      3.14
     ],
     [
      [
       2.5
      ],
      19.63
     ],
     [
      [
       0
      ],
      0
     ]
    ]
   },
   "hints": [
    "`round(math.pi * r ** 2, 2)`"
   ],
   "solution": "import math\n\ndef kreisflaeche(r):\n    return round(math.pi * r ** 2, 2)"
  },
  {
   "id": "f2",
   "topic": "funktionen",
   "level": 1,
   "title": "Bruttopreis mit Default",
   "text": "Schreibe `brutto(netto, mwst=19)`, die den Bruttopreis auf 2 Stellen gerundet zurückgibt. `mwst` ist ein Prozentwert mit Standardwert 19.\n\n`brutto(100)` → `119.0`, `brutto(100, 7)` → `107.0`",
   "starter": "def brutto(netto, mwst=19):\n    pass\n",
   "check": {
    "type": "function",
    "name": "brutto",
    "cases": [
     [
      [
       100
      ],
      119.0
     ],
     [
      [
       100,
       7
      ],
      107.0
     ],
     [
      [
       9.99
      ],
      11.89
     ],
     [
      [
       50,
       0
      ],
      50.0
     ]
    ]
   },
   "hints": [
    "`netto * (1 + mwst / 100)`"
   ],
   "solution": "def brutto(netto, mwst=19):\n    return round(netto * (1 + mwst / 100), 2)"
  },
  {
   "id": "f3",
   "topic": "funktionen",
   "level": 2,
   "title": "Primzahltest",
   "text": "Schreibe `ist_prim(n)` → `True`, wenn `n` eine Primzahl ist, sonst `False`. (0 und 1 sind keine Primzahlen.)",
   "starter": "def ist_prim(n):\n    pass\n",
   "check": {
    "type": "function",
    "name": "ist_prim",
    "cases": [
     [
      [
       2
      ],
      true
     ],
     [
      [
       17
      ],
      true
     ],
     [
      [
       1
      ],
      false
     ],
     [
      [
       0
      ],
      false
     ],
     [
      [
       21
      ],
      false
     ],
     [
      [
       97
      ],
      true
     ],
     [
      [
       100
      ],
      false
     ]
    ]
   },
   "hints": [
    "Erst `if n < 2: return False`.",
    "Dann alle Teiler von 2 bis n-1 testen; bei einem Treffer sofort `return False`.",
    "Nach der Schleife `return True`."
   ],
   "solution": "def ist_prim(n):\n    if n < 2:\n        return False\n    for t in range(2, n):\n        if n % t == 0:\n            return False\n    return True"
  },
  {
   "id": "f4",
   "topic": "funktionen",
   "level": 2,
   "title": "Größter gemeinsamer Teiler",
   "text": "Schreibe `ggt(a, b)` mit dem **euklidischen Algorithmus**: Solange `b` nicht 0 ist, ersetze `(a, b)` durch `(b, a % b)`. Am Ende ist `a` der ggT.",
   "starter": "def ggt(a, b):\n    pass\n",
   "check": {
    "type": "function",
    "name": "ggt",
    "cases": [
     [
      [
       12,
       18
      ],
      6
     ],
     [
      [
       17,
       5
      ],
      1
     ],
     [
      [
       100,
       75
      ],
      25
     ],
     [
      [
       7,
       0
      ],
      7
     ]
    ],
    "forbid": [
     "gcd"
    ]
   },
   "hints": [
    "`while b != 0: a, b = b, a % b`"
   ],
   "solution": "def ggt(a, b):\n    while b != 0:\n        a, b = b, a % b\n    return a"
  },
  {
   "id": "f5",
   "topic": "funktionen",
   "level": 2,
   "title": "Zinseszins",
   "text": "Schreibe `endkapital(kapital, zins, jahre)`, die das Kapital nach `jahre` Jahren mit `zins` Prozent Zinseszins zurückgibt, auf 2 Stellen gerundet.\n\nFormel: K · (1 + p/100)ⁿ",
   "starter": "def endkapital(kapital, zins, jahre):\n    pass\n",
   "check": {
    "type": "function",
    "name": "endkapital",
    "cases": [
     [
      [
       1000,
       5,
       10
      ],
      1628.89
     ],
     [
      [
       500,
       0,
       3
      ],
      500.0
     ],
     [
      [
       2000,
       3.5,
       1
      ],
      2070.0
     ]
    ]
   },
   "hints": [
    "`kapital * (1 + zins / 100) ** jahre`"
   ],
   "solution": "def endkapital(kapital, zins, jahre):\n    return round(kapital * (1 + zins / 100) ** jahre, 2)"
  },
  {
   "id": "f6",
   "topic": "funktionen",
   "level": 2,
   "title": "Rekursive Potenz",
   "text": "Schreibe `potenz(basis, exp)` **rekursiv** (ohne `**` und ohne Schleife) für `exp ≥ 0`.\n\nIdee: `basis^0 = 1`, `basis^exp = basis · basis^(exp-1)`",
   "starter": "def potenz(basis, exp):\n    pass\n",
   "check": {
    "type": "function",
    "name": "potenz",
    "cases": [
     [
      [
       2,
       10
      ],
      1024
     ],
     [
      [
       5,
       0
      ],
      1
     ],
     [
      [
       3,
       3
      ],
      27
     ],
     [
      [
       7,
       1
      ],
      7
     ]
    ],
    "forbid": [
     "pow"
    ]
   },
   "hints": [
    "Basisfall: `if exp == 0: return 1`",
    "Rekursionsfall: `return basis * potenz(basis, exp - 1)`"
   ],
   "solution": "def potenz(basis, exp):\n    if exp == 0:\n        return 1\n    return basis * potenz(basis, exp - 1)"
  },
  {
   "id": "f7",
   "topic": "funktionen",
   "level": 2,
   "title": "Sortieren mit lambda",
   "text": "Schreibe `nach_preis(artikel)`. `artikel` ist eine Liste von `[name, preis]`. Gib die **Namen** nach Preis **absteigend** sortiert zurück.",
   "starter": "def nach_preis(artikel):\n    pass\n",
   "check": {
    "type": "function",
    "name": "nach_preis",
    "cases": [
     [
      [
       [
        [
         "Brot",
         2.5
        ],
        [
         "Käse",
         4.2
        ],
        [
         "Milch",
         1.1
        ]
       ]
      ],
      [
       "Käse",
       "Brot",
       "Milch"
      ]
     ],
     [
      [
       []
      ],
      []
     ]
    ],
    "requires": [
     "Lambda"
    ]
   },
   "hints": [
    "`sorted(artikel, key=lambda a: a[1], reverse=True)`",
    "Danach nur die Namen: `[a[0] for a in ...]`"
   ],
   "solution": "def nach_preis(artikel):\n    sortiert = sorted(artikel, key=lambda a: a[1], reverse=True)\n    return [a[0] for a in sortiert]"
  },
  {
   "id": "f8",
   "topic": "funktionen",
   "level": 1,
   "title": "return statt print",
   "text": "Diese Funktion **druckt** das Ergebnis, statt es zurückzugeben – deshalb kann man nicht damit weiterrechnen. Repariere sie!",
   "starter": "def verdoppeln(x):\n    print(x * 2)\n",
   "check": {
    "type": "function",
    "name": "verdoppeln",
    "cases": [
     [
      [
       4
      ],
      8
     ],
     [
      [
       0
      ],
      0
     ],
     [
      [
       -3
      ],
      -6
     ],
     [
      [
       2.5
      ],
      5.0
     ]
    ]
   },
   "hints": [
    "Ersetze `print(...)` durch `return ...`"
   ],
   "solution": "def verdoppeln(x):\n    return x * 2"
  },
  {
   "id": "e1",
   "topic": "fehler",
   "level": 1,
   "title": "Sichere Division",
   "text": "Schreibe `teile(a, b)`, die `a / b` zurückgibt. Bei Division durch 0 soll **kein Absturz** passieren, sondern `None` zurückgegeben werden. Nutze `try`/`except`.",
   "starter": "def teile(a, b):\n    pass\n",
   "check": {
    "type": "function",
    "name": "teile",
    "cases": [
     [
      [
       10,
       4
      ],
      2.5
     ],
     [
      [
       1,
       0
      ],
      null
     ],
     [
      [
       0,
       5
      ],
      0.0
     ]
    ],
    "requires": [
     "Try"
    ]
   },
   "hints": [
    "```\ntry:\n    return a / b\nexcept ZeroDivisionError:\n    return None\n```"
   ],
   "solution": "def teile(a, b):\n    try:\n        return a / b\n    except ZeroDivisionError:\n        return None"
  },
  {
   "id": "e2",
   "topic": "fehler",
   "level": 2,
   "title": "Eingabe als Zahl",
   "text": "Schreibe `zu_zahl(text)`, die den Text in eine ganze Zahl umwandelt. Ist das nicht möglich, gib `0` zurück.",
   "starter": "def zu_zahl(text):\n    pass\n",
   "check": {
    "type": "function",
    "name": "zu_zahl",
    "cases": [
     [
      [
       "42"
      ],
      42
     ],
     [
      [
       "abc"
      ],
      0
     ],
     [
      [
       "-7"
      ],
      -7
     ],
     [
      [
       "3.5"
      ],
      0
     ],
     [
      [
       ""
      ],
      0
     ]
    ],
    "requires": [
     "Try"
    ]
   },
   "hints": [
    "`int(\"abc\")` wirft einen `ValueError`."
   ],
   "solution": "def zu_zahl(text):\n    try:\n        return int(text)\n    except ValueError:\n        return 0"
  },
  {
   "id": "e3",
   "topic": "fehler",
   "level": 1,
   "title": "Finde die Fehler",
   "text": "Das Programm soll die Summe der Zahlen 1 bis 5 berechnen und `Summe: 15` ausgeben. Es enthält aber **drei Fehler**. Finde und behebe sie!",
   "starter": "summe = 0\nfor i in range(1, 5)\n    summe += i\nprint(\"Summe: \" + summe)\n",
   "check": {
    "type": "output",
    "runs": [
     {
      "inputs": [],
      "expected": "Summe: 15"
     }
    ]
   },
   "hints": [
    "Nach `for ...` fehlt etwas.",
    "`range(1, 5)` endet bei 4.",
    "Text und Zahl lassen sich nicht mit `+` verbinden – `str()` oder Komma."
   ],
   "solution": "summe = 0\nfor i in range(1, 6):\n    summe += i\nprint(\"Summe: \" + str(summe))"
  },
  {
   "id": "e4",
   "topic": "fehler",
   "level": 2,
   "title": "Fehler selbst auslösen",
   "text": "Schreibe `abheben(kontostand, betrag)`, die den neuen Kontostand zurückgibt. Ist `betrag` negativ oder größer als der Kontostand, löse einen `ValueError` aus.\n\nDie Tests prüfen das über eine Hilfsfunktion.",
   "starter": "def abheben(kontostand, betrag):\n    pass\n",
   "check": {
    "type": "asserts",
    "cases": [
     {
      "expr": "abheben(100, 30)",
      "expected": 70
     },
     {
      "setup": "def versuch(k, b):\n    try:\n        abheben(k, b)\n        return 'kein Fehler'\n    except ValueError:\n        return 'ValueError'",
      "expr": "versuch(100, 150)",
      "expected": "ValueError"
     },
     {
      "setup": "def versuch(k, b):\n    try:\n        abheben(k, b)\n        return 'kein Fehler'\n    except ValueError:\n        return 'ValueError'",
      "expr": "versuch(100, -5)",
      "expected": "ValueError"
     },
     {
      "expr": "abheben(50, 50)",
      "expected": 0
     }
    ]
   },
   "hints": [
    "`if betrag < 0 or betrag > kontostand: raise ValueError(\"ungültig\")`"
   ],
   "solution": "def abheben(kontostand, betrag):\n    if betrag < 0 or betrag > kontostand:\n        raise ValueError(\"Ungültiger Betrag\")\n    return kontostand - betrag"
  },
  {
   "id": "m1",
   "topic": "dateien",
   "level": 2,
   "title": "Datei schreiben und lesen",
   "text": "1. Schreibe die Zahlen 1 bis 5 (je eine Zeile) in die Datei `zahlen.txt`.\n2. Lies die Datei danach wieder ein und gib die **Summe** aus.\n\nNutze `with open(...)`. (Die Datei liegt in einem virtuellen Dateisystem im Browser.)",
   "starter": "",
   "check": {
    "type": "output",
    "runs": [
     {
      "inputs": [],
      "expected": "15"
     }
    ],
    "requires": [
     "With"
    ]
   },
   "hints": [
    "Schreiben: `with open(\"zahlen.txt\", \"w\") as f:` und `f.write(str(i) + \"\\n\")`",
    "Lesen: `for zeile in f: summe += int(zeile)`"
   ],
   "solution": "with open(\"zahlen.txt\", \"w\") as f:\n    for i in range(1, 6):\n        f.write(str(i) + \"\\n\")\n\nsumme = 0\nwith open(\"zahlen.txt\") as f:\n    for zeile in f:\n        summe += int(zeile)\nprint(summe)"
  },
  {
   "id": "m2",
   "topic": "dateien",
   "level": 2,
   "title": "CSV auswerten",
   "text": "Die Datei `messung.csv` wird im Startcode angelegt (Format `probe;wert`). Lies sie ein und gib den **Durchschnitt** der Werte mit 2 Nachkommastellen aus.",
   "starter": "with open(\"messung.csv\", \"w\") as f:\n    f.write(\"A;7.2\\nB;6.8\\nC;7.9\\nD;6.5\\n\")\n\n# Ab hier dein Code\n",
   "check": {
    "type": "output",
    "runs": [
     {
      "inputs": [],
      "expected": "7.10"
     }
    ]
   },
   "hints": [
    "Zeilen mit `zeile.strip().split(\";\")` zerlegen.",
    "Werte als `float` in einer Liste sammeln, dann `sum / len`.",
    "`print(f\"{d:.2f}\")`"
   ],
   "solution": "with open(\"messung.csv\", \"w\") as f:\n    f.write(\"A;7.2\\nB;6.8\\nC;7.9\\nD;6.5\\n\")\n\nwerte = []\nwith open(\"messung.csv\") as f:\n    for zeile in f:\n        probe, wert = zeile.strip().split(\";\")\n        werte.append(float(wert))\nd = sum(werte) / len(werte)\nprint(f\"{d:.2f}\")"
  },
  {
   "id": "m3",
   "topic": "dateien",
   "level": 1,
   "title": "Hypotenuse mit math",
   "text": "Schreibe `hypotenuse(a, b)` mit `math.sqrt`, Ergebnis auf 2 Stellen gerundet. (Satz des Pythagoras: c = √(a² + b²))",
   "starter": "import math\n\ndef hypotenuse(a, b):\n    pass\n",
   "check": {
    "type": "function",
    "name": "hypotenuse",
    "cases": [
     [
      [
       3,
       4
      ],
      5.0
     ],
     [
      [
       1,
       1
      ],
      1.41
     ],
     [
      [
       6,
       8
      ],
      10.0
     ]
    ]
   },
   "hints": [
    "`round(math.sqrt(a ** 2 + b ** 2), 2)`"
   ],
   "solution": "import math\n\ndef hypotenuse(a, b):\n    return round(math.sqrt(a ** 2 + b ** 2), 2)"
  },
  {
   "id": "o1",
   "topic": "oop",
   "level": 2,
   "title": "Klasse Konto",
   "text": "Schreibe eine Klasse `Konto`:\n- `Konto(inhaber, stand=0)` speichert `self.inhaber` und `self.stand`\n- `einzahlen(betrag)` erhöht den Stand\n- `abheben(betrag)` verringert den Stand und gibt `True` zurück – ist nicht genug Geld da, bleibt der Stand gleich und es wird `False` zurückgegeben.",
   "starter": "class Konto:\n    def __init__(self, inhaber, stand=0):\n        pass\n",
   "check": {
    "type": "asserts",
    "requires": [
     "ClassDef"
    ],
    "cases": [
     {
      "setup": "k = Konto('Ana')",
      "expr": "k.stand",
      "expected": 0
     },
     {
      "setup": "k = Konto('Ana', 100)\nk.einzahlen(50)",
      "expr": "k.stand",
      "expected": 150
     },
     {
      "setup": "k = Konto('Ana', 100)",
      "expr": "k.abheben(30)",
      "expected": true
     },
     {
      "setup": "k = Konto('Ana', 100)\nk.abheben(30)",
      "expr": "k.stand",
      "expected": 70
     },
     {
      "setup": "k = Konto('Ana', 100)",
      "expr": "k.abheben(500)",
      "expected": false
     },
     {
      "setup": "k = Konto('Ana', 100)\nk.abheben(500)",
      "expr": "k.stand",
      "expected": 100
     },
     {
      "setup": "k = Konto('Ben')",
      "expr": "k.inhaber",
      "expected": "Ben"
     }
    ]
   },
   "hints": [
    "In `__init__`: `self.inhaber = inhaber` und `self.stand = stand`",
    "Methoden haben immer `self` als ersten Parameter: `def einzahlen(self, betrag):`",
    "In `abheben`: `if betrag > self.stand: return False`"
   ],
   "solution": "class Konto:\n    def __init__(self, inhaber, stand=0):\n        self.inhaber = inhaber\n        self.stand = stand\n\n    def einzahlen(self, betrag):\n        self.stand += betrag\n\n    def abheben(self, betrag):\n        if betrag > self.stand:\n            return False\n        self.stand -= betrag\n        return True"
  },
  {
   "id": "o2",
   "topic": "oop",
   "level": 2,
   "title": "Klasse Rechteck",
   "text": "Schreibe eine Klasse `Rechteck` mit `breite` und `hoehe`, den Methoden `flaeche()` und `umfang()` sowie `__str__`, das z. B. `Rechteck 3x4` liefert.",
   "starter": "class Rechteck:\n    pass\n",
   "check": {
    "type": "asserts",
    "requires": [
     "ClassDef"
    ],
    "cases": [
     {
      "setup": "r = Rechteck(3, 4)",
      "expr": "r.flaeche()",
      "expected": 12
     },
     {
      "setup": "r = Rechteck(3, 4)",
      "expr": "r.umfang()",
      "expected": 14
     },
     {
      "setup": "r = Rechteck(3, 4)",
      "expr": "str(r)",
      "expected": "Rechteck 3x4"
     },
     {
      "setup": "r = Rechteck(2.5, 2)",
      "expr": "r.flaeche()",
      "expected": 5.0
     }
    ]
   },
   "hints": [
    "`def __init__(self, breite, hoehe):`",
    "`def __str__(self): return f\"Rechteck {self.breite}x{self.hoehe}\"`"
   ],
   "solution": "class Rechteck:\n    def __init__(self, breite, hoehe):\n        self.breite = breite\n        self.hoehe = hoehe\n\n    def flaeche(self):\n        return self.breite * self.hoehe\n\n    def umfang(self):\n        return 2 * (self.breite + self.hoehe)\n\n    def __str__(self):\n        return f\"Rechteck {self.breite}x{self.hoehe}\""
  },
  {
   "id": "o3",
   "topic": "oop",
   "level": 3,
   "title": "Vererbung: Stoffe",
   "text": "Schreibe eine Klasse `Stoff` mit `name` und `molmasse` und der Methode `stoffmenge(masse)`, die `masse / molmasse` auf 3 Stellen gerundet zurückgibt.\n\nSchreibe dann `Saeure(Stoff)` mit zusätzlichem Attribut `ph` und der Methode `ist_stark()` → `True`, wenn `ph < 3`. Nutze `super().__init__(...)`.",
   "starter": "class Stoff:\n    pass\n\n\nclass Saeure(Stoff):\n    pass\n",
   "check": {
    "type": "asserts",
    "requires": [
     "ClassDef"
    ],
    "cases": [
     {
      "setup": "w = Stoff('Wasser', 18.015)",
      "expr": "w.stoffmenge(36.03)",
      "expected": 2.0
     },
     {
      "setup": "s = Saeure('Salzsäure', 36.46, 1)",
      "expr": "s.ist_stark()",
      "expected": true
     },
     {
      "setup": "s = Saeure('Essigsäure', 60.05, 4.8)",
      "expr": "s.ist_stark()",
      "expected": false
     },
     {
      "setup": "s = Saeure('Essigsäure', 60.05, 4.8)",
      "expr": "s.stoffmenge(120.1)",
      "expected": 2.0
     },
     {
      "setup": "s = Saeure('Essigsäure', 60.05, 4.8)",
      "expr": "s.name",
      "expected": "Essigsäure"
     },
     {
      "expr": "issubclass(Saeure, Stoff)",
      "expected": true
     }
    ]
   },
   "hints": [
    "`class Saeure(Stoff):` erbt alle Methoden von `Stoff`.",
    "In `Saeure.__init__(self, name, molmasse, ph)`: zuerst `super().__init__(name, molmasse)`, dann `self.ph = ph`."
   ],
   "solution": "class Stoff:\n    def __init__(self, name, molmasse):\n        self.name = name\n        self.molmasse = molmasse\n\n    def stoffmenge(self, masse):\n        return round(masse / self.molmasse, 3)\n\n\nclass Saeure(Stoff):\n    def __init__(self, name, molmasse, ph):\n        super().__init__(name, molmasse)\n        self.ph = ph\n\n    def ist_stark(self):\n        return self.ph < 3"
  }
 ]
};
