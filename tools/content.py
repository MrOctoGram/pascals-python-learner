# -*- coding: utf-8 -*-
"""Alle Lerninhalte der App. Wird von tools/build.py geprüft und nach js/data.js exportiert.

Markup in Texten:  `inline code`,  **fett**,  ```\\ncode-block\\n```
"""

TOPICS = [
    ("grundlagen", "Grundlagen", "🧱", "print, Variablen, Datentypen, Operatoren"),
    ("strings", "Strings", "🔤", "Texte, Slicing, Methoden, f-Strings"),
    ("bedingungen", "Bedingungen", "🔀", "if / elif / else, logische Operatoren"),
    ("schleifen", "Schleifen", "🔁", "for, while, range, break, continue"),
    ("listen", "Listen", "📋", "Listen, Methoden, List Comprehension"),
    ("tupel_sets", "Tupel & Sets", "🧩", "Unveränderliche Folgen und Mengen"),
    ("dicts", "Dictionaries", "📖", "Schlüssel-Wert-Paare"),
    ("funktionen", "Funktionen", "⚙️", "def, return, Parameter, Scope, lambda, Rekursion"),
    ("fehler", "Fehler & try", "🚨", "Fehlertypen, try / except"),
    ("dateien", "Dateien & Module", "📁", "open, with, import, math"),
    ("oop", "Klassen (OOP)", "🏗️", "class, __init__, self, Vererbung"),
]

# ---------------------------------------------------------------------------
# KARTEIKARTEN  (topic, vorderseite, rückseite)
# ---------------------------------------------------------------------------
CARDS = [
# ---------- Grundlagen
("grundlagen", "Wie gibt man in Python etwas auf dem Bildschirm aus?",
 """Mit `print()`:
```
print("Hallo")
print("Summe:", 3 + 4)   # Summe: 7
```
Mehrere Werte werden mit Leerzeichen getrennt. `sep=` ändert das Trennzeichen, `end=` das Zeilenende (Standard `"\\n"`)."""),
("grundlagen", "Was macht `print(\"a\", \"b\", sep=\"-\", end=\"!\")`?",
 """Gibt `a-b!` aus – **ohne** Zeilenumbruch am Ende.
`sep` = Trenner zwischen den Werten, `end` = was am Ende angehängt wird."""),
("grundlagen", "Wie schreibt man Kommentare?",
 """Mit `#` – alles danach in der Zeile wird ignoriert.
```
# Das ist ein Kommentar
x = 5  # auch hier
```
Mehrzeilige Texte in `\"\"\" ... \"\"\"` werden oft als Docstring genutzt."""),
("grundlagen", "Wie legt man eine Variable an?",
 """Durch Zuweisung mit `=` – kein Typ nötig:
```
alter = 21
name = "Pascal"
```
Namen: Buchstaben, Ziffern, `_`; nicht mit Ziffer beginnen; Groß-/Kleinschreibung zählt (`Alter` ≠ `alter`)."""),
("grundlagen", "Die vier wichtigsten Grunddatentypen?",
 """- `int` – ganze Zahl: `42`
- `float` – Kommazahl: `3.14` (Punkt statt Komma!)
- `str` – Text: `"Hallo"`
- `bool` – Wahrheitswert: `True` / `False`

Den Typ prüft man mit `type(x)`."""),
("grundlagen", "Was ist der Unterschied zwischen `/`, `//` und `%`?",
 """- `/` echte Division, Ergebnis immer `float`: `7 / 2` → `3.5`
- `//` ganzzahlige Division (abgerundet): `7 // 2` → `3`
- `%` Rest (Modulo): `7 % 2` → `1`

Trick: `n % 2 == 0` prüft, ob `n` gerade ist."""),
("grundlagen", "Wie berechnet man Potenzen?",
 """Mit `**`:
```
2 ** 3    # 8
9 ** 0.5  # 3.0 (Wurzel)
```
Achtung: `^` ist **nicht** Potenz (das ist bitweises XOR)."""),
("grundlagen", "Was liefert `input()` zurück?",
 """**Immer einen String!** Für Rechnungen muss umgewandelt werden:
```
zahl = int(input("Zahl: "))
preis = float(input("Preis: "))
```"""),
("grundlagen", "Wie wandelt man Datentypen um?",
 """```
int("42")     # 42
float("3.5")  # 3.5
str(10)       # "10"
int(3.9)      # 3  (schneidet ab, rundet nicht!)
bool(0)       # False
```"""),
("grundlagen", "Was ergibt `\"3\" + \"4\"` und was `3 + 4`?",
 """`"3" + "4"` → `"34"` (Strings werden verkettet)
`3 + 4` → `7`
`"3" + 4` → **TypeError** (str und int nicht mischbar)."""),
("grundlagen", "Was bedeuten `+=`, `-=`, `*=`?",
 """Kurzschreibweisen:
```
x += 1   # x = x + 1
x -= 2   # x = x - 2
x *= 3   # x = x * 3
```
`x++` gibt es in Python **nicht**."""),
("grundlagen", "Wie rundet man auf 2 Nachkommastellen?",
 """`round(3.14159, 2)` → `3.14`
Für die **Ausgabe** besser f-String: `f"{wert:.2f}"` (zeigt immer 2 Stellen, z. B. `2.50`)."""),
("grundlagen", "Rangfolge der Operatoren (Punkt vor Strich)?",
 """Von stark nach schwach:
1. `**`
2. `*  /  //  %`
3. `+  -`
4. Vergleiche `== != < > <= >=`
5. `not` → `and` → `or`

`2 + 3 * 4` → `14`; im Zweifel Klammern setzen."""),
("grundlagen", "Warum ist Einrückung in Python so wichtig?",
 """Einrückung **ist** die Blockstruktur (statt `{ }`). Nach einem `:` (if, for, def, …) folgt ein eingerückter Block, üblich sind **4 Leerzeichen**. Falsche Einrückung → `IndentationError` oder falsche Logik."""),

# ---------- Strings
("strings", "Wie greift man auf einzelne Zeichen eines Strings zu?",
 """Per Index in `[]`, Zählung ab **0**:
```
s = "Python"
s[0]    # 'P'
s[-1]   # 'n'  (negativ = von hinten)
```"""),
("strings", "Wie funktioniert Slicing `s[start:stop:schritt]`?",
 """`stop` ist **exklusiv**!
```
s = "Python"
s[0:3]   # 'Pyt'
s[2:]    # 'thon'
s[:2]    # 'Py'
s[::2]   # 'Pto'
s[::-1]  # 'nohtyP' (umgedreht)
```"""),
("strings", "Wie bekommt man die Länge eines Strings?",
 """`len("Hallo")` → `5`. Funktioniert genauso bei Listen, Tupeln, Dicts, Sets."""),
("strings", "Wichtige String-Methoden (Groß/Klein, Leerzeichen)?",
 """```
"Hallo".upper()      # 'HALLO'
"Hallo".lower()      # 'hallo'
"  hi  ".strip()     # 'hi'
"max mustermann".title()  # 'Max Mustermann'
```
Methoden geben einen **neuen** String zurück – das Original bleibt unverändert."""),
("strings", "Was machen `split()` und `join()`?",
 """```
"a,b,c".split(",")      # ['a', 'b', 'c']
"Hallo Welt".split()    # ['Hallo', 'Welt']
"-".join(["a", "b"])    # 'a-b'
```
`split` macht aus Text eine Liste, `join` aus einer Liste von Strings Text."""),
("strings", "Was machen `replace`, `find`, `count`?",
 """```
"Haus".replace("H", "M")  # 'Maus'
"Banane".find("n")        # 2  (-1 wenn nicht da)
"Banane".count("a")       # 2
```"""),
("strings", "Wie prüft man, ob ein Teilstring vorkommt?",
 """Mit `in`:
```
"ell" in "Hallo"   # False
"all" in "Hallo"   # True
"Hallo".startswith("Ha")  # True
"datei.txt".endswith(".txt")  # True
```"""),
("strings", "Was sind f-Strings?",
 """Strings mit `f` davor; Ausdrücke in `{}` werden eingesetzt:
```
name = "Pascal"; n = 3
print(f"{name} hat {n * 2} Punkte")
print(f"{3.14159:.2f}")   # 3.14
print(f"{7:3d}")          # '  7' (Breite 3)
```"""),
("strings", "Kann man einen String verändern, z. B. `s[0] = \"X\"`?",
 """**Nein** – Strings sind *unveränderlich* (immutable) → `TypeError`.
Stattdessen neuen String bauen: `s = "X" + s[1:]`"""),
("strings", "Was bewirken `\\n` und `\\t`?",
 """Escape-Sequenzen: `\\n` = Zeilenumbruch, `\\t` = Tabulator, `\\\\` = Backslash, `\\"` = Anführungszeichen im String."""),
("strings", "Was ergibt `\"ab\" * 3`?",
 """`'ababab'` – Strings kann man mit einer ganzen Zahl wiederholen. Praktisch z. B. für `"-" * 20`."""),
("strings", "Wie geht man jeden Buchstaben eines Strings durch?",
 """```
for zeichen in "Hallo":
    print(zeichen)
```
Mit Index: `for i in range(len(s)):` bzw. besser `for i, z in enumerate(s):`"""),

# ---------- Bedingungen
("bedingungen", "Aufbau einer if-elif-else-Abfrage?",
 """```
if temp > 30:
    print("heiß")
elif temp > 15:
    print("angenehm")
else:
    print("kalt")
```
Es wird **nur der erste** zutreffende Zweig ausgeführt. `elif` und `else` sind optional."""),
("bedingungen", "Vergleichsoperatoren?",
 """`==` gleich, `!=` ungleich, `<`, `>`, `<=`, `>=`.
Achtung: `=` ist Zuweisung, `==` ist Vergleich!"""),
("bedingungen", "Logische Operatoren `and`, `or`, `not`?",
 """- `a and b` – True, wenn **beide** True
- `a or b` – True, wenn **mindestens einer** True
- `not a` – kehrt um

```
if alter >= 18 and hat_ausweis:
```"""),
("bedingungen", "Was ist eine Vergleichskette wie `0 < x < 10`?",
 """Python erlaubt verkettete Vergleiche: `0 < x < 10` bedeutet `0 < x and x < 10`."""),
("bedingungen", "Welche Werte gelten als `False` (\"falsy\")?",
 """`False`, `None`, `0`, `0.0`, `""` (leerer String), `[]`, `{}`, `()`, `set()`.
Alles andere ist „truthy“. Daher geht: `if liste:` (= Liste nicht leer)."""),
("bedingungen", "Was ist der bedingte Ausdruck (Ternary)?",
 """Einzeiliges if/else:
```
status = "volljährig" if alter >= 18 else "minderjährig"
```"""),
("bedingungen", "Wie prüft man, ob eine Zahl gerade ist?",
 """`if n % 2 == 0:` – Rest bei Division durch 2 ist 0. Teilbar durch k allgemein: `n % k == 0`."""),
("bedingungen", "Was ist `None` und wie prüft man darauf?",
 """`None` steht für „kein Wert“ (z. B. Rückgabe einer Funktion ohne `return`).
Prüfen mit `if x is None:` (statt `==`)."""),

# ---------- Schleifen
("schleifen", "Wie funktioniert eine for-Schleife?",
 """Sie durchläuft jedes Element einer Folge:
```
for name in ["Ana", "Ben"]:
    print(name)
```"""),
("schleifen", "Was erzeugt `range()`?",
 """Zahlenfolgen, `stop` **exklusiv**:
```
range(5)         # 0,1,2,3,4
range(2, 6)      # 2,3,4,5
range(0, 10, 3)  # 0,3,6,9
range(5, 0, -1)  # 5,4,3,2,1
```"""),
("schleifen", "Wie funktioniert eine while-Schleife?",
 """Läuft, **solange** die Bedingung True ist:
```
i = 1
while i <= 3:
    print(i)
    i += 1     # sonst Endlosschleife!
```"""),
("schleifen", "Wann nimmt man for, wann while?",
 """- **for**: Anzahl der Durchläufe ist bekannt / man geht eine Folge durch.
- **while**: man wiederholt, bis eine Bedingung eintritt (z. B. bis Eingabe richtig ist)."""),
("schleifen", "Was machen `break` und `continue`?",
 """- `break` – Schleife **sofort beenden**
- `continue` – Rest des aktuellen Durchlaufs überspringen, **nächster Durchlauf**

```
for i in range(10):
    if i == 5: break
    if i % 2: continue
    print(i)   # 0 2 4
```"""),
("schleifen", "Wofür ist `enumerate()`?",
 """Liefert Index **und** Element:
```
for i, frucht in enumerate(["Apfel", "Birne"]):
    print(i, frucht)   # 0 Apfel / 1 Birne
```
Start ändern: `enumerate(liste, 1)`"""),
("schleifen", "Wofür ist `zip()`?",
 """Läuft mehrere Folgen parallel durch:
```
for name, note in zip(["Ana", "Ben"], [1, 2]):
    print(name, note)
```"""),
("schleifen", "Das Akkumulator-Muster (Summe in Schleife)?",
 """```
summe = 0              # vor der Schleife!
for x in [3, 5, 7]:
    summe += x
print(summe)           # 15
```
Gleiches Prinzip für Zähler (`anzahl += 1`) oder Produkt (Start bei 1)."""),
("schleifen", "Wie funktionieren verschachtelte Schleifen?",
 """Die innere läuft bei **jedem** Durchlauf der äußeren komplett:
```
for i in range(1, 3):
    for j in range(1, 3):
        print(i, j)   # 1 1, 1 2, 2 1, 2 2
```"""),
("schleifen", "Was macht ein `else` nach einer Schleife?",
 """Der `else`-Block läuft, wenn die Schleife **ohne `break`** zu Ende gelaufen ist. Typisch bei der Suche:
```
for x in liste:
    if x == ziel: break
else:
    print("nicht gefunden")
```"""),
("schleifen", "Wie vermeidet man Endlosschleifen?",
 """Bei `while` muss sich die Bedingung irgendwann ändern (Zähler erhöhen, Eingabe neu lesen …). `while True:` nur mit einem `break` darin verwenden."""),

# ---------- Listen
("listen", "Wie erstellt man eine Liste und greift zu?",
 """```
zahlen = [4, 8, 15]
zahlen[0]    # 4
zahlen[-1]   # 15
leer = []
```
Listen können gemischte Typen enthalten und sind **veränderlich**."""),
("listen", "Elemente hinzufügen?",
 """```
l = [1, 2]
l.append(3)       # [1, 2, 3]  ans Ende
l.insert(0, 9)    # [9, 1, 2, 3] an Position
l.extend([4, 5])  # mehrere anhängen
l + [6]           # neue Liste
```"""),
("listen", "Elemente entfernen?",
 """```
l = [5, 7, 9, 7]
l.remove(7)   # erstes 7 weg → [5, 9, 7]
l.pop()       # letztes entfernen & zurückgeben → 7
l.pop(0)      # Element an Index 0 → 5
del l[0]      # per Index löschen
```"""),
("listen", "Unterschied `liste.sort()` und `sorted(liste)`?",
 """- `liste.sort()` sortiert **die Liste selbst** und gibt `None` zurück.
- `sorted(liste)` gibt eine **neue** sortierte Liste zurück, Original bleibt.

Absteigend: `reverse=True`. Nach Kriterium: `key=len`."""),
("listen", "Nützliche Funktionen für Zahlenlisten?",
 """`len(l)`, `sum(l)`, `min(l)`, `max(l)`.
Durchschnitt: `sum(l) / len(l)`.
Zählen/Suchen: `l.count(x)`, `l.index(x)`, `x in l`."""),
("listen", "Was ist eine List Comprehension?",
 """Kurzschreibweise zum Erzeugen von Listen:
```
quadrate = [x**2 for x in range(5)]       # [0,1,4,9,16]
gerade = [x for x in zahlen if x % 2 == 0]
```
Aufbau: `[ausdruck for element in folge if bedingung]`"""),
("listen", "Achtung Referenz: Was passiert bei `b = a` mit Listen?",
 """`b` zeigt auf **dieselbe** Liste! Änderungen an `b` ändern auch `a`.
```
a = [1, 2]; b = a; b.append(3)
print(a)   # [1, 2, 3]
```
Kopie: `b = a.copy()` oder `b = a[:]`"""),
("listen", "Wie arbeitet man mit 2D-Listen (Matrix)?",
 """Liste von Listen:
```
m = [[1, 2, 3],
     [4, 5, 6]]
m[1][2]        # 6  (Zeile 1, Spalte 2)
for zeile in m:
    for wert in zeile:
        ...
```"""),
("listen", "Wie dreht man eine Liste um?",
 """`l.reverse()` (in-place), `l[::-1]` (neue Liste) oder `list(reversed(l))`."""),
("listen", "Wie wandelt man etwas in eine Liste um?",
 """Mit `list()`:
```
list("abc")       # ['a', 'b', 'c']
list(range(4))    # [0, 1, 2, 3]
```"""),

# ---------- Tupel & Sets
("tupel_sets", "Was ist ein Tupel?",
 """Eine **unveränderliche** Folge in runden Klammern:
```
punkt = (3, 4)
punkt[0]     # 3
punkt[0] = 1 # TypeError!
```
Ein-Element-Tupel braucht ein Komma: `(5,)`"""),
("tupel_sets", "Was ist Tuple-Unpacking?",
 """Werte direkt auf Variablen verteilen:
```
x, y = (3, 4)
a, b = b, a        # Werte tauschen!
for name, alter in [("Ana", 20), ("Ben", 22)]:
```"""),
("tupel_sets", "Liste oder Tupel – wann was?",
 """- **Liste**: Sammlung, die sich ändert (hinzufügen, löschen).
- **Tupel**: feste Gruppe zusammengehöriger Werte (Koordinate, Rückgabe mehrerer Werte), kann Dict-Schlüssel sein."""),
("tupel_sets", "Was ist ein Set?",
 """Eine **ungeordnete Menge ohne Duplikate**:
```
s = {1, 2, 2, 3}   # {1, 2, 3}
leer = set()       # NICHT {} – das ist ein Dict!
s.add(4); s.remove(1)
```
Kein Index-Zugriff!"""),
("tupel_sets", "Mengenoperationen mit Sets?",
 """```
a = {1, 2, 3}; b = {2, 3, 4}
a | b   # {1,2,3,4} Vereinigung
a & b   # {2,3}     Schnittmenge
a - b   # {1}       Differenz
```"""),
("tupel_sets", "Wie entfernt man Duplikate aus einer Liste?",
 """`list(set(liste))` – aber die Reihenfolge geht verloren!
Mit Reihenfolge: Schleife + Hilfsliste, oder `list(dict.fromkeys(liste))`."""),

# ---------- Dicts
("dicts", "Was ist ein Dictionary?",
 """Sammlung von **Schlüssel → Wert**-Paaren:
```
preise = {"Apfel": 0.5, "Brot": 2.2}
preise["Apfel"]       # 0.5
preise["Milch"] = 1.1 # hinzufügen/ändern
```
Schlüssel sind eindeutig."""),
("dicts", "Was passiert bei einem fehlenden Schlüssel und wie vermeidet man es?",
 """`d["x"]` → **KeyError**, wenn `"x"` fehlt.
Sicher: `d.get("x")` → `None` bzw. `d.get("x", 0)` → Standardwert.
Prüfen: `if "x" in d:`"""),
("dicts", "Wie geht man ein Dictionary in einer Schleife durch?",
 """```
for k in d:              # Schlüssel
for v in d.values():     # Werte
for k, v in d.items():   # beides
    print(k, v)
```"""),
("dicts", "Wie entfernt man einen Eintrag?",
 """`del d["Apfel"]` oder `d.pop("Apfel")` (gibt den Wert zurück)."""),
("dicts", "Das Zähl-Muster mit Dictionaries?",
 """```
zaehler = {}
for wort in woerter:
    zaehler[wort] = zaehler.get(wort, 0) + 1
```
Sehr klausurrelevant!"""),
("dicts", "Was sind `keys()`, `values()`, `items()`?",
 """Ansichten auf Schlüssel, Werte bzw. (Schlüssel, Wert)-Paare. `len(d)` = Anzahl Einträge. Für eine Liste: `list(d.keys())`."""),
("dicts", "Verschachtelte Dictionaries?",
 """```
studis = {"Ana": {"alter": 21, "note": 1.7}}
studis["Ana"]["note"]   # 1.7
```"""),
("dicts", "Wie sortiert man ein Dict nach Werten?",
 """```
sorted(d.items(), key=lambda p: p[1])          # aufsteigend
sorted(d, key=d.get, reverse=True)             # Schlüssel nach Wert absteigend
```"""),

# ---------- Funktionen
("funktionen", "Wie definiert man eine Funktion?",
 """```
def begruesse(name):
    return "Hallo " + name

text = begruesse("Pascal")
```
`def`, Name, Parameter in Klammern, Doppelpunkt, eingerückter Körper."""),
("funktionen", "Unterschied zwischen `return` und `print`?",
 """- `print` **zeigt** etwas an – der Wert ist danach weg.
- `return` **gibt** einen Wert an den Aufrufer **zurück**, der damit weiterrechnen kann, und beendet die Funktion.

Ohne `return` gibt eine Funktion `None` zurück. Klassischer Klausurfehler!"""),
("funktionen", "Parameter vs. Argument?",
 """**Parameter** = Platzhalter in der Definition (`def f(x):`)
**Argument** = konkreter Wert beim Aufruf (`f(5)`)"""),
("funktionen", "Was sind Default-Parameter?",
 """Parameter mit Standardwert:
```
def brutto(netto, mwst=19):
    return netto * (1 + mwst / 100)
brutto(100)      # 119.0
brutto(100, 7)   # 107.0
```
Parameter mit Default stehen **hinten**."""),
("funktionen", "Was sind Keyword-Argumente?",
 """Argumente mit Namen übergeben, Reihenfolge egal:
`brutto(mwst=7, netto=100)`"""),
("funktionen", "Wie gibt man mehrere Werte zurück?",
 """Als Tupel:
```
def min_max(l):
    return min(l), max(l)
kl, gr = min_max([3, 1, 4])
```"""),
("funktionen", "Lokale und globale Variablen (Scope)?",
 """Variablen, die **in** einer Funktion angelegt werden, sind **lokal** – außerhalb unbekannt. Globale Variablen kann man lesen; zum Ändern bräuchte man `global x` (schlechter Stil – lieber Parameter und `return`)."""),
("funktionen", "Was ist eine lambda-Funktion?",
 """Eine kleine anonyme Funktion in einer Zeile:
```
quadrat = lambda x: x ** 2
sorted(woerter, key=lambda w: len(w))
```"""),
("funktionen", "Was ist Rekursion?",
 """Eine Funktion ruft sich selbst auf. Braucht einen **Basisfall** zum Abbruch:
```
def fak(n):
    if n <= 1:          # Basisfall
        return 1
    return n * fak(n - 1)
```"""),
("funktionen", "Was ist ein Docstring?",
 """Ein String direkt unter `def`, der die Funktion beschreibt:
```
def flaeche(r):
    \"\"\"Berechnet die Kreisfläche.\"\"\"
```
Anzeigen mit `help(flaeche)`."""),
("funktionen", "Was machen `map()` und `filter()`?",
 """```
list(map(str, [1, 2]))                 # ['1', '2']
list(filter(lambda x: x > 0, [-1, 2])) # [2]
```
Oft ist eine List Comprehension lesbarer."""),
("funktionen", "Was ist `*args`?",
 """Beliebig viele Positionsargumente, als Tupel:
```
def summe(*zahlen):
    return sum(zahlen)
summe(1, 2, 3)   # 6
```"""),

# ---------- Fehler
("fehler", "Was ist ein SyntaxError?",
 """Der Code ist **falsch geschrieben** und wird gar nicht erst ausgeführt: fehlender `:`, fehlende Klammer, fehlendes Anführungszeichen, `=` statt `==` in einer Bedingung …"""),
("fehler", "NameError vs. TypeError vs. ValueError?",
 """- **NameError**: Name unbekannt (Tippfehler, nicht definiert)
- **TypeError**: falscher Typ (`"3" + 4`, `len(5)`)
- **ValueError**: richtiger Typ, falscher Wert (`int("abc")`)"""),
("fehler", "IndexError vs. KeyError?",
 """- **IndexError**: Listenindex existiert nicht (`[1,2][5]`)
- **KeyError**: Dict-Schlüssel existiert nicht (`{}["x"]`)"""),
("fehler", "Weitere typische Fehler?",
 """- **ZeroDivisionError**: Division durch 0
- **IndentationError**: Einrückung falsch
- **AttributeError**: Methode existiert für den Typ nicht (`[1].upper()`)
- **FileNotFoundError**: Datei fehlt"""),
("fehler", "Wie fängt man Fehler ab?",
 """```
try:
    zahl = int(eingabe)
except ValueError:
    print("Keine Zahl!")
```
Code im `try` wird versucht; tritt der Fehler auf, springt Python in den passenden `except`-Block."""),
("fehler", "Wozu `else` und `finally` bei try?",
 """```
try:
    ...
except ZeroDivisionError:
    ...      # nur bei diesem Fehler
else:
    ...      # nur wenn KEIN Fehler
finally:
    ...      # IMMER (z. B. aufräumen)
```"""),
("fehler", "Wie löst man selbst einen Fehler aus?",
 """Mit `raise`:
```
if betrag < 0:
    raise ValueError("Betrag darf nicht negativ sein")
```"""),
("fehler", "Wie kommt man an die Fehlermeldung?",
 """```
except ValueError as e:
    print("Fehler:", e)
```
`except Exception:` fängt fast alles – sparsam verwenden."""),

# ---------- Dateien & Module
("dateien", "Wie öffnet man eine Datei richtig?",
 """Mit `with` – die Datei wird automatisch geschlossen:
```
with open("daten.txt", "r", encoding="utf-8") as f:
    inhalt = f.read()
```"""),
("dateien", "Die Dateimodi `r`, `w`, `a`?",
 """- `"r"` lesen (Standard), Fehler wenn Datei fehlt
- `"w"` schreiben – **überschreibt** alles / legt neu an
- `"a"` anhängen ans Ende"""),
("dateien", "Wie liest man eine Datei zeilenweise?",
 """```
with open("daten.txt") as f:
    for zeile in f:
        print(zeile.strip())   # strip entfernt \\n
```
Alternativ: `f.readlines()` (Liste) oder `f.read()` (ein String)."""),
("dateien", "Wie schreibt man in eine Datei?",
 """```
with open("out.txt", "w") as f:
    f.write("Zeile 1\\n")    # \\n selbst anhängen!
    print("Zeile 2", file=f)
```
`write` erwartet einen String."""),
("dateien", "Wie importiert man Module?",
 """```
import math
math.sqrt(16)        # 4.0
from math import pi, sqrt
import random as rd  # Alias
```"""),
("dateien", "Wichtige Funktionen aus `math`?",
 """`math.sqrt(x)`, `math.pi`, `math.e`, `math.floor(x)`, `math.ceil(x)`, `math.log(x)`, `math.log10(x)`, `math.sin(x)`, `math.factorial(n)`"""),
("dateien", "Wichtige Funktionen aus `random`?",
 """```
import random
random.randint(1, 6)       # 1..6 inklusive!
random.random()            # 0.0 ≤ x < 1.0
random.choice(liste)       # zufälliges Element
random.shuffle(liste)      # mischt in-place
```"""),
("dateien", "Was bedeutet `if __name__ == \"__main__\":`?",
 """Der Block läuft nur, wenn die Datei **direkt gestartet** wird – nicht, wenn sie als Modul importiert wird."""),
("dateien", "Wie liest man eine CSV-artige Zeile aus?",
 """```
zeile = "Ana;21;1.7"
name, alter, note = zeile.strip().split(";")
alter = int(alter); note = float(note)
```"""),

# ---------- OOP
("oop", "Was sind Klasse und Objekt?",
 """- **Klasse** = Bauplan (z. B. `Auto`)
- **Objekt/Instanz** = konkretes Ding nach dem Bauplan (`mein_auto = Auto()`)

Objekte haben **Attribute** (Daten) und **Methoden** (Funktionen)."""),
("oop", "Wie definiert man eine Klasse mit Konstruktor?",
 """```
class Hund:
    def __init__(self, name):
        self.name = name

    def bellen(self):
        return self.name + " sagt Wuff"

h = Hund("Bello")
h.bellen()
```"""),
("oop", "Was ist `self`?",
 """Der erste Parameter jeder Methode – verweist auf **das Objekt selbst**. Über `self.attribut` speichert/liest man Daten des Objekts. Beim Aufruf übergibt man `self` nicht: `h.bellen()`."""),
("oop", "Was macht `__init__`?",
 """Der **Konstruktor** – wird automatisch beim Erzeugen eines Objekts aufgerufen und setzt die Startwerte der Attribute."""),
("oop", "Was macht `__str__`?",
 """Legt fest, was `print(objekt)` bzw. `str(objekt)` anzeigt:
```
def __str__(self):
    return f"Hund {self.name}"
```"""),
("oop", "Was ist Vererbung?",
 """Eine Klasse übernimmt alles von einer anderen und kann es erweitern/überschreiben:
```
class Tier:
    def __init__(self, name): self.name = name
class Katze(Tier):
    def sprich(self): return "Miau"
```
`super().__init__(...)` ruft den Konstruktor der Elternklasse auf."""),
("oop", "Klassenattribut vs. Instanzattribut?",
 """- **Klassenattribut**: direkt in der Klasse, für alle Objekte gleich (`class K: anzahl = 0`)
- **Instanzattribut**: mit `self.x = …` in `__init__`, pro Objekt eigen"""),
]

# ---------------------------------------------------------------------------
# QUIZ: (topic, frage, code oder None, [richtige Antwort, falsch, falsch, falsch], erklärung)
# Bei Code-Fragen ist die Antwort die exakte Ausgabe – das wird automatisch geprüft.
# ---------------------------------------------------------------------------
QUIZ = [
("grundlagen", "Was gibt der Code aus?", "print(7 // 2, 7 % 2)", ["3 1", "3.5 1", "3 0.5", "4 1"], "`//` ist ganzzahlige Division (abgerundet), `%` der Rest."),
("grundlagen", "Was gibt der Code aus?", "print(2 ** 3 + 1)", ["9", "7", "16", "10"], "`**` bindet stärker als `+`: 8 + 1."),
("grundlagen", "Was gibt der Code aus?", "x = \"5\"\nprint(x * 2)", ["55", "10", "TypeError", "5 5"], "Ein String mal int wiederholt den String."),
("grundlagen", "Was gibt der Code aus?", "print(type(7 / 7))", ["<class 'float'>", "<class 'int'>", "1", "<class 'number'>"], "`/` liefert immer einen float, auch bei glatten Ergebnissen."),
("grundlagen", "Was gibt der Code aus?", "print(int(3.99))", ["3", "4", "3.99", "ValueError"], "`int()` schneidet die Nachkommastellen ab, es rundet nicht."),
("grundlagen", "Was gibt der Code aus?", "a = 3\na += 2\na *= 2\nprint(a)", ["10", "8", "7", "12"], "(3 + 2) * 2 = 10."),
("grundlagen", "Was gibt der Code aus?", "print(\"a\", \"b\", sep=\"\")", ["ab", "a b", "a\nb", "a,b"], "`sep=\"\"` entfernt das Leerzeichen zwischen den Werten."),
("grundlagen", "Welcher Datentyp hat `input()`?", None, ["immer str", "int, wenn man eine Zahl eingibt", "float", "je nach Eingabe automatisch"], "input() liefert immer einen String – umwandeln mit int()/float()."),

("strings", "Was gibt der Code aus?", "s = \"Python\"\nprint(s[1:4])", ["yth", "Pyt", "ytho", "ython"], "Slicing: Start 1 inklusive, Stop 4 exklusiv."),
("strings", "Was gibt der Code aus?", "print(\"Hallo\"[-2])", ["l", "o", "a", "IndexError"], "-1 ist das letzte, -2 das vorletzte Zeichen."),
("strings", "Was gibt der Code aus?", "print(\"a-b-c\".split(\"-\"))", ["['a', 'b', 'c']", "abc", "['a-b-c']", "('a', 'b', 'c')"], "split() liefert eine Liste."),
("strings", "Was gibt der Code aus?", "print(len(\"Hi Du\"))", ["5", "4", "2", "6"], "Das Leerzeichen zählt mit."),
("strings", "Was gibt der Code aus?", "print(\"abc\"[::-1].upper())", ["CBA", "ABC", "cba", "C"], "Erst umdrehen, dann groß."),
("strings", "Was gibt der Code aus?", "p = 4.5\nprint(f\"{p:.2f} €\")", ["4.50 €", "4.5 €", "4,50 €", "{p:.2f} €"], "`:.2f` zeigt genau 2 Nachkommastellen."),
("strings", "Was gibt der Code aus?", "print(\"Banane\".count(\"an\"))", ["2", "1", "3", "0"], "'an' kommt in B-an-an-e zweimal vor."),

("bedingungen", "Was gibt der Code aus?", "x = 15\nif x > 10:\n    print(\"A\")\nelif x > 5:\n    print(\"B\")\nelse:\n    print(\"C\")", ["A", "A\nB", "B", "C"], "Nur der erste zutreffende Zweig wird ausgeführt."),
("bedingungen", "Was gibt der Code aus?", "print(True and not False or False)", ["True", "False", "None", "SyntaxError"], "not zuerst → True and True → True; True or False → True."),
("bedingungen", "Was gibt der Code aus?", "x = 0\nif x:\n    print(\"ja\")\nelse:\n    print(\"nein\")", ["nein", "ja", "0", "Fehler"], "0 ist falsy."),
("bedingungen", "Was gibt der Code aus?", "a = 5\nprint(1 < a < 10)", ["True", "False", "TypeError", "1"], "Vergleichskette: 1 < 5 und 5 < 10."),
("bedingungen", "Was gibt der Code aus?", "n = 7\nprint(\"gerade\" if n % 2 == 0 else \"ungerade\")", ["ungerade", "gerade", "1", "True"], "7 % 2 ist 1, also else-Zweig."),

("schleifen", "Was gibt der Code aus?", "print(list(range(2, 10, 3)))", ["[2, 5, 8]", "[2, 5, 8, 11]", "[3, 6, 9]", "[2, 3, 4]"], "Start 2, Schritt 3, Stop 10 exklusiv."),
("schleifen", "Was gibt der Code aus?", "s = 0\nfor i in range(4):\n    s += i\nprint(s)", ["6", "10", "4", "3"], "0+1+2+3 = 6 (range(4) endet bei 3)."),
("schleifen", "Was gibt der Code aus?", "for i in range(5):\n    if i == 3:\n        break\n    print(i, end=\" \")", ["0 1 2", "0 1 2 3", "3", "0 1 2 4"], "Bei 3 wird die Schleife abgebrochen, bevor gedruckt wird."),
("schleifen", "Was gibt der Code aus?", "for i in range(5):\n    if i % 2 == 0:\n        continue\n    print(i, end=\" \")", ["1 3", "0 2 4", "1 3 5", "0 1 2 3 4"], "Gerade Zahlen werden mit continue übersprungen."),
("schleifen", "Was gibt der Code aus?", "i = 10\nwhile i > 0:\n    i -= 3\nprint(i)", ["-2", "1", "0", "-3"], "10 → 7 → 4 → 1 → -2, dann ist die Bedingung falsch."),
("schleifen", "Was gibt der Code aus?", "n = 0\nfor i in range(3):\n    for j in range(4):\n        n += 1\nprint(n)", ["12", "7", "3", "4"], "Innere Schleife läuft 3-mal komplett: 3 · 4 = 12."),
("schleifen", "Was gibt der Code aus?", "for i, c in enumerate(\"ab\"):\n    print(i, c)", ["0 a\n1 b", "1 a\n2 b", "a 0\nb 1", "0 1"], "enumerate liefert (Index, Element), Start bei 0."),

("listen", "Was gibt der Code aus?", "l = [3, 1, 2]\nl.append(5)\nprint(len(l), l[-1])", ["4 5", "3 2", "4 2", "5 4"], "append hängt ans Ende an."),
("listen", "Was gibt der Code aus?", "l = [3, 1, 2]\nx = l.sort()\nprint(x)", ["None", "[1, 2, 3]", "[3, 1, 2]", "Fehler"], "sort() sortiert in-place und gibt None zurück!"),
("listen", "Was gibt der Code aus?", "a = [1, 2]\nb = a\nb.append(3)\nprint(a)", ["[1, 2, 3]", "[1, 2]", "[3]", "None"], "b und a zeigen auf dieselbe Liste."),
("listen", "Was gibt der Code aus?", "print([x * 2 for x in range(4) if x > 1])", ["[4, 6]", "[0, 2, 4, 6]", "[2, 3]", "[4, 6, 8]"], "Nur x = 2 und 3, jeweils verdoppelt."),
("listen", "Was gibt der Code aus?", "l = [10, 20, 30, 40]\nprint(l[1:3])", ["[20, 30]", "[10, 20, 30]", "[20, 30, 40]", "[10, 20]"], "Index 1 bis ausschließlich 3."),
("listen", "Was gibt der Code aus?", "m = [[1, 2], [3, 4]]\nprint(m[1][0])", ["3", "2", "1", "4"], "Zeile 1 = [3, 4], davon Index 0."),
("listen", "Was gibt der Code aus?", "l = [5, 3, 5, 1]\nl.remove(5)\nprint(l)", ["[3, 5, 1]", "[3, 1]", "[5, 3, 1]", "[5, 3, 5]"], "remove entfernt nur das erste Vorkommen."),

("tupel_sets", "Was gibt der Code aus?", "print(len({1, 2, 2, 3, 3, 3}))", ["3", "6", "4", "1"], "Sets enthalten keine Duplikate."),
("tupel_sets", "Was gibt der Code aus?", "a, b = 1, 2\na, b = b, a\nprint(a, b)", ["2 1", "1 2", "2 2", "1 1"], "Tuple-Unpacking tauscht die Werte."),
("tupel_sets", "Was gibt der Code aus?", "print({1, 2, 3} & {2, 3, 4})", ["{2, 3}", "{1, 2, 3, 4}", "{1, 4}", "{1}"], "& ist die Schnittmenge."),
("tupel_sets", "Was passiert bei `t = (1, 2); t[0] = 5`?", None, ["TypeError – Tupel sind unveränderlich", "t wird (5, 2)", "IndexError", "t wird [5, 2]"], "Tupel können nach dem Erstellen nicht geändert werden."),
("tupel_sets", "Was erzeugt `x = {}`?", None, ["ein leeres Dictionary", "ein leeres Set", "ein leeres Tupel", "einen Fehler"], "Leeres Set nur mit set()."),

("dicts", "Was gibt der Code aus?", "d = {\"a\": 1, \"b\": 2}\nd[\"a\"] = 5\nprint(d)", ["{'a': 5, 'b': 2}", "{'a': 1, 'b': 2, 'a': 5}", "{'a': 6, 'b': 2}", "KeyError"], "Gleicher Schlüssel → Wert wird überschrieben."),
("dicts", "Was gibt der Code aus?", "d = {\"x\": 1}\nprint(d.get(\"y\", 0))", ["0", "None", "KeyError", "1"], "get liefert den Standardwert, wenn der Schlüssel fehlt."),
("dicts", "Was gibt der Code aus?", "d = {\"a\": 1, \"b\": 2}\nprint(len(d), \"b\" in d, 2 in d)", ["2 True False", "2 True True", "4 True False", "2 False True"], "`in` prüft bei Dicts die Schlüssel, nicht die Werte."),
("dicts", "Was gibt der Code aus?", "z = {}\nfor c in \"abca\":\n    z[c] = z.get(c, 0) + 1\nprint(z[\"a\"])", ["2", "1", "3", "KeyError"], "Das Zähl-Muster: 'a' kommt zweimal vor."),
("dicts", "Was gibt der Code aus?", "d = {\"a\": 3, \"b\": 1}\nfor k, v in d.items():\n    print(k, v)", ["a 3\nb 1", "a\nb", "3\n1", "('a', 3)\n('b', 1)"], "items() liefert Paare, die entpackt werden."),

("funktionen", "Was gibt der Code aus?", "def f(x):\n    x * 2\nprint(f(3))", ["None", "6", "3", "Fehler"], "Ohne return gibt die Funktion None zurück."),
("funktionen", "Was gibt der Code aus?", "def f(a, b=10):\n    return a + b\nprint(f(1), f(1, 2))", ["11 3", "11 12", "1 3", "Fehler"], "b hat den Standardwert 10, wenn nichts übergeben wird."),
("funktionen", "Was gibt der Code aus?", "def f():\n    return 1\n    print(\"x\")\nprint(f())", ["1", "x\n1", "1\nx", "None"], "Nach return wird die Funktion verlassen – print wird nie erreicht."),
("funktionen", "Was gibt der Code aus?", "x = 5\ndef f():\n    x = 1\n    return x\nf()\nprint(x)", ["5", "1", "None", "Fehler"], "x in f ist lokal; das globale x bleibt 5."),
("funktionen", "Was gibt der Code aus?", "def fak(n):\n    if n <= 1:\n        return 1\n    return n * fak(n - 1)\nprint(fak(4))", ["24", "10", "4", "RecursionError"], "4 · 3 · 2 · 1 = 24."),
("funktionen", "Was gibt der Code aus?", "print(sorted([\"ccc\", \"a\", \"bb\"], key=len))", ["['a', 'bb', 'ccc']", "['ccc', 'bb', 'a']", "['a', 'bb', 'ccc', 3]", "[1, 2, 3]"], "key=len sortiert nach der Länge."),
("funktionen", "Was gibt der Code aus?", "def mm(l):\n    return min(l), max(l)\na, b = mm([4, 9, 2])\nprint(b - a)", ["7", "5", "2", "Fehler"], "Rückgabe als Tupel (2, 9), entpackt: 9 - 2."),

("fehler", "Welcher Fehler entsteht?", "print(int(\"zwölf\"))", ["ValueError", "TypeError", "NameError", "SyntaxError"], "Richtiger Typ (str), aber der Wert lässt sich nicht umwandeln."),
("fehler", "Welcher Fehler entsteht bei `\"Alter: \" + 21`?", None, ["TypeError", "ValueError", "SyntaxError", "NameError"], "str und int lassen sich nicht mit + verbinden → str(21) verwenden."),
("fehler", "Was gibt der Code aus?", "try:\n    x = 1 / 0\nexcept ZeroDivisionError:\n    print(\"Fehler\")\nelse:\n    print(\"ok\")\nfinally:\n    print(\"Ende\")", ["Fehler\nEnde", "ok\nEnde", "Fehler", "Fehler\nok\nEnde"], "except greift, else nicht, finally immer."),
("fehler", "Was gibt der Code aus?", "l = [1, 2, 3]\ntry:\n    print(l[3])\nexcept IndexError:\n    print(\"weg\")", ["weg", "3", "None", "IndexError"], "Index 3 existiert nicht (nur 0–2)."),
("fehler", "Welcher Fehler entsteht bei `if x = 5:`?", None, ["SyntaxError", "NameError", "ValueError", "keiner"], "In Bedingungen braucht man ==, = ist Zuweisung."),

("dateien", "Was passiert bei `open(\"liste.txt\", \"w\")`, wenn die Datei existiert?", None, ["Der Inhalt wird überschrieben", "Es wird angehängt", "FileExistsError", "Sie wird nur gelesen"], "\"w\" leert die Datei. Zum Anhängen \"a\" verwenden."),
("dateien", "Was gibt der Code aus?", "import math\nprint(math.sqrt(16) + math.floor(2.7))", ["6.0", "6", "7.0", "6.7"], "sqrt liefert float 4.0, floor(2.7) = 2."),
("dateien", "Warum `with open(...) as f:`?", None, ["Die Datei wird automatisch geschlossen", "Es ist schneller", "Nur so kann man schreiben", "Es verhindert alle Fehler"], "with schließt die Datei auch bei Fehlern zuverlässig."),
("dateien", "Was gibt der Code aus?", "zeile = \"Ana;21\\n\"\nname, alter = zeile.strip().split(\";\")\nprint(int(alter) + 1)", ["22", "211", "Ana", "TypeError"], "Nach strip und split wird alter in int umgewandelt."),
("dateien", "Welche Werte kann `random.randint(1, 6)` liefern?", None, ["1 bis 6 (beide inklusive)", "1 bis 5", "0 bis 6", "0 bis 5"], "Anders als range ist bei randint die Obergrenze inklusive."),

("oop", "Was gibt der Code aus?", "class A:\n    def __init__(self, x):\n        self.x = x\na = A(3)\nb = A(4)\nprint(a.x + b.x)", ["7", "3", "4", "Fehler"], "Jedes Objekt hat sein eigenes Attribut x."),
("oop", "Was gibt der Code aus?", "class Tier:\n    def sprich(self):\n        return \"...\"\nclass Hund(Tier):\n    def sprich(self):\n        return \"Wuff\"\nprint(Hund().sprich())", ["Wuff", "...", "...Wuff", "Fehler"], "Hund überschreibt die Methode der Elternklasse."),
("oop", "Was gibt der Code aus?", "class P:\n    def __init__(self, n):\n        self.n = n\n    def __str__(self):\n        return \"P:\" + self.n\nprint(P(\"x\"))", ["P:x", "<__main__.P object>", "x", "P"], "__str__ bestimmt die Ausgabe von print."),
("oop", "Wofür steht `self` in einer Methode?", None, ["Für das aktuelle Objekt", "Für die Klasse selbst", "Für die Elternklasse", "Für das Modul"], "self ist die Instanz, auf der die Methode aufgerufen wurde."),
]

# ---------------------------------------------------------------------------
# PROGRAMMIERAUFGABEN
# Prüfarten:
#   {"type": "output", "runs": [{"inputs": [...], "expected": "..."}]}
#   {"type": "function", "name": "f", "cases": [[[args], erwartet], ...]}
#   {"type": "asserts", "cases": [{"setup": "...", "expr": "...", "expected": ...}]}
# Optional: requires / requires_any / forbid
# ---------------------------------------------------------------------------
def out(expected, inputs=None):
    return {"inputs": inputs or [], "expected": expected}


TASKS = [
# ---------------- Grundlagen
dict(id="g1", topic="grundlagen", level=1, title="Hallo, Welt!",
     text="Gib den Text `Hallo, Welt!` aus.",
     starter="# Schreibe hier deinen Code\n",
     check={"type": "output", "runs": [out("Hallo, Welt!")]},
     hints=["Nutze die Funktion `print()`.", "Text muss in Anführungszeichen stehen: `print(\"...\")`"],
     solution='print("Hallo, Welt!")'),
dict(id="g2", topic="grundlagen", level=1, title="Grundrechenarten",
     text="Gegeben sind `a = 17` und `b = 5`. Gib jeweils in einer eigenen Zeile aus: Summe, Differenz, Produkt, Quotient (`/`), ganzzahlige Division und Rest.",
     starter="a = 17\nb = 5\n",
     check={"type": "output", "runs": [out("22\n12\n85\n3.4\n3\n2")]},
     hints=["Sechs `print()`-Aufrufe.", "Operatoren: `+ - * / // %`"],
     solution="a = 17\nb = 5\nprint(a + b)\nprint(a - b)\nprint(a * b)\nprint(a / b)\nprint(a // b)\nprint(a % b)"),
dict(id="g3", topic="grundlagen", level=1, title="Celsius → Fahrenheit",
     text="Lies mit `input()` eine Temperatur in °C ein und gib sie in °F mit **einer** Nachkommastelle aus (nur die Zahl).\n\nFormel: `F = C * 1.8 + 32`\n\nBeispiel: Eingabe `25` → Ausgabe `77.0`",
     starter='c = input("Temperatur in °C: ")\n',
     check={"type": "output", "runs": [out("77.0", ["25"]), out("-40.0", ["-40"]), out("97.9", ["36.6"])]},
     hints=["`input()` liefert einen String – wandle ihn mit `float()` um.", "Ausgabe mit einer Nachkommastelle: `print(f\"{f:.1f}\")`"],
     solution='c = float(input("Temperatur in °C: "))\nf = c * 1.8 + 32\nprint(f"{f:.1f}")'),
dict(id="g4", topic="grundlagen", level=1, title="Molare Masse von Wasser",
     text="Berechne die molare Masse von H₂O (2 × H + 1 × O) und gib sie mit **3** Nachkommastellen aus.\n\nH = 1.008 g/mol, O = 15.999 g/mol",
     starter="H = 1.008\nO = 15.999\n",
     check={"type": "output", "runs": [out("18.015")]},
     hints=["`m = 2 * H + O`", "`print(f\"{m:.3f}\")`"],
     solution='H = 1.008\nO = 15.999\nm = 2 * H + O\nprint(f"{m:.3f}")'),
dict(id="g5", topic="grundlagen", level=1, title="Sekunden umrechnen",
     text="Lies eine Anzahl Sekunden ein (ganze Zahl) und gib aus, wie viele Stunden, Minuten und Sekunden das sind – im Format `h:m:s`, ohne führende Nullen.\n\nBeispiel: `3725` → `1:2:5`",
     starter='s = int(input("Sekunden: "))\n',
     check={"type": "output", "runs": [out("1:2:5", ["3725"]), out("0:1:0", ["60"]), out("27:46:40", ["100000"])]},
     hints=["Stunden: `s // 3600`", "Restliche Sekunden: `s % 3600`, davon Minuten mit `// 60`", "Ausgabe z. B. mit `print(h, m, sek, sep=\":\")`"],
     solution='s = int(input("Sekunden: "))\nh = s // 3600\nm = (s % 3600) // 60\nsek = s % 60\nprint(h, m, sek, sep=":")'),

# ---------------- Strings
dict(id="s1", topic="strings", level=1, title="String umdrehen",
     text="Schreibe eine Funktion `umdrehen(s)`, die den String `s` rückwärts **zurückgibt**.\n\n`umdrehen(\"Python\")` → `\"nohtyP\"`",
     starter="def umdrehen(s):\n    pass\n",
     check={"type": "function", "name": "umdrehen", "cases": [[["Python"], "nohtyP"], [["a"], "a"], [[""], ""], [["Lagerregal"], "lagerregaL"]]},
     hints=["Slicing mit negativer Schrittweite.", "`s[::-1]`"],
     solution="def umdrehen(s):\n    return s[::-1]"),
dict(id="s2", topic="strings", level=2, title="Palindrom-Check",
     text="Schreibe `ist_palindrom(s)`, die `True` zurückgibt, wenn `s` vorwärts wie rückwärts gleich ist – **Groß-/Kleinschreibung und Leerzeichen ignorieren**.\n\n`ist_palindrom(\"Reliefpfeiler\")` → `True`\n`ist_palindrom(\"Ein Esel\")` → `False`",
     starter="def ist_palindrom(s):\n    pass\n",
     check={"type": "function", "name": "ist_palindrom", "cases": [[["Reliefpfeiler"], True], [["Anna"], True], [["Ein Esel"], False], [["Trug Tim eine so helle Hose nie mit Gurt"], True], [["Python"], False]]},
     hints=["Erst vereinfachen: `t = s.lower().replace(\" \", \"\")`", "Dann vergleichen: `t == t[::-1]`"],
     solution='def ist_palindrom(s):\n    t = s.lower().replace(" ", "")\n    return t == t[::-1]'),
dict(id="s3", topic="strings", level=1, title="Vokale zählen",
     text="Schreibe `vokale_zaehlen(text)`, die zurückgibt, wie viele Vokale (a, e, i, o, u – groß oder klein) im Text vorkommen.",
     starter="def vokale_zaehlen(text):\n    pass\n",
     check={"type": "function", "name": "vokale_zaehlen", "cases": [[["Hallo Welt"], 3], [["AEIOU"], 5], [["xyz"], 0], [["Chemiekaufmann"], 6]]},
     hints=["Zähler bei 0 starten und mit `for zeichen in text.lower():` durchgehen.", "`if zeichen in \"aeiou\":`"],
     solution='def vokale_zaehlen(text):\n    anzahl = 0\n    for z in text.lower():\n        if z in "aeiou":\n            anzahl += 1\n    return anzahl'),
dict(id="s4", topic="strings", level=2, title="Initialen",
     text="Schreibe `initialen(name)`, die aus einem vollständigen Namen die Initialen mit Punkt bildet (immer groß).\n\n`initialen(\"max mustermann\")` → `\"M.M.\"`\n`initialen(\"Anna Lena Schmidt\")` → `\"A.L.S.\"`",
     starter="def initialen(name):\n    pass\n",
     check={"type": "function", "name": "initialen", "cases": [[["max mustermann"], "M.M."], [["Anna Lena Schmidt"], "A.L.S."], [["Pascal"], "P."]]},
     hints=["`name.split()` liefert die einzelnen Wörter.", "Von jedem Wort `wort[0].upper() + \".\"` anhängen."],
     solution='def initialen(name):\n    ergebnis = ""\n    for wort in name.split():\n        ergebnis += wort[0].upper() + "."\n    return ergebnis'),
dict(id="s5", topic="strings", level=2, title="Preis deutsch formatieren",
     text="Schreibe `preis_format(betrag)`, die einen Betrag als String mit 2 Nachkommastellen, **Komma** als Dezimaltrenner und ` €` zurückgibt.\n\n`preis_format(12.5)` → `\"12,50 €\"`",
     starter="def preis_format(betrag):\n    pass\n",
     check={"type": "function", "name": "preis_format", "cases": [[[12.5], "12,50 €"], [[3], "3,00 €"], [[0.199], "0,20 €"], [[1234.567], "1234,57 €"]]},
     hints=["Zuerst `f\"{betrag:.2f}\"` – das liefert z. B. `\"12.50\"`.", "Dann `.replace(\".\", \",\")` und `\" €\"` anhängen."],
     solution='def preis_format(betrag):\n    return f"{betrag:.2f}".replace(".", ",") + " €"'),
dict(id="s6", topic="strings", level=2, title="Längstes Wort",
     text="Schreibe `laengstes_wort(satz)`, die das längste Wort im Satz zurückgibt. Bei Gleichstand das **erste**.",
     starter="def laengstes_wort(satz):\n    pass\n",
     check={"type": "function", "name": "laengstes_wort", "cases": [[["Ich lerne gerade Python"], "gerade"], [["a bb cc"], "bb"], [["Destillation"], "Destillation"]]},
     hints=["Satz mit `split()` zerlegen.", "Merke dir das bisher längste Wort und vergleiche mit `len()` – nur bei **echt** größer ersetzen."],
     solution='def laengstes_wort(satz):\n    bestes = ""\n    for w in satz.split():\n        if len(w) > len(bestes):\n            bestes = w\n    return bestes'),

# ---------------- Bedingungen
dict(id="b1", topic="bedingungen", level=1, title="pH-Wert bewerten",
     text="Schreibe `ph_bewertung(ph)`, die `\"sauer\"` (< 7), `\"neutral\"` (= 7) oder `\"basisch\"` (> 7) zurückgibt.",
     starter="def ph_bewertung(ph):\n    pass\n",
     check={"type": "function", "name": "ph_bewertung", "cases": [[[3.5], "sauer"], [[7], "neutral"], [[7.0], "neutral"], [[12], "basisch"], [[6.99], "sauer"]], "requires": ["If"]},
     hints=["`if ph < 7: ... elif ph == 7: ... else: ...`"],
     solution='def ph_bewertung(ph):\n    if ph < 7:\n        return "sauer"\n    elif ph == 7:\n        return "neutral"\n    else:\n        return "basisch"'),
dict(id="b2", topic="bedingungen", level=1, title="Notenrechner",
     text="Schreibe `note(punkte)` für eine Klausur mit 100 Punkten:\n- ab 90 → `\"sehr gut\"`\n- ab 75 → `\"gut\"`\n- ab 60 → `\"befriedigend\"`\n- ab 50 → `\"ausreichend\"`\n- sonst → `\"nicht bestanden\"`",
     starter="def note(punkte):\n    pass\n",
     check={"type": "function", "name": "note", "cases": [[[95], "sehr gut"], [[90], "sehr gut"], [[89], "gut"], [[75], "gut"], [[60], "befriedigend"], [[50], "ausreichend"], [[49.5], "nicht bestanden"], [[0], "nicht bestanden"]]},
     hints=["Von oben nach unten prüfen – `elif` sorgt dafür, dass nur ein Zweig greift.", "`if punkte >= 90: ... elif punkte >= 75: ...`"],
     solution='def note(punkte):\n    if punkte >= 90:\n        return "sehr gut"\n    elif punkte >= 75:\n        return "gut"\n    elif punkte >= 60:\n        return "befriedigend"\n    elif punkte >= 50:\n        return "ausreichend"\n    else:\n        return "nicht bestanden"'),
dict(id="b3", topic="bedingungen", level=2, title="Schaltjahr",
     text="Schreibe `ist_schaltjahr(jahr)` → `True`/`False`.\n\nRegel: durch 4 teilbar, **außer** durch 100 teilbar – **es sei denn** durch 400 teilbar.\n(2024 ja, 1900 nein, 2000 ja)",
     starter="def ist_schaltjahr(jahr):\n    pass\n",
     check={"type": "function", "name": "ist_schaltjahr", "cases": [[[2024], True], [[2023], False], [[1900], False], [[2000], True], [[2100], False]]},
     hints=["Teilbarkeit: `jahr % 4 == 0`", "Kompakt: `(jahr % 4 == 0 and jahr % 100 != 0) or jahr % 400 == 0`"],
     solution="def ist_schaltjahr(jahr):\n    return (jahr % 4 == 0 and jahr % 100 != 0) or jahr % 400 == 0"),
dict(id="b4", topic="bedingungen", level=1, title="Maximum von drei Zahlen",
     text="Schreibe `max_von_drei(a, b, c)`, die die größte Zahl zurückgibt – **ohne** `max()` zu benutzen.",
     starter="def max_von_drei(a, b, c):\n    pass\n",
     check={"type": "function", "name": "max_von_drei", "cases": [[[1, 2, 3], 3], [[9, 2, 3], 9], [[1, 8, 3], 8], [[-1, -5, -3], -1], [[4, 4, 2], 4]], "requires": ["If"], "forbid": ["max"]},
     hints=["Nimm an, `a` ist am größten, und vergleiche dann mit `b` und `c`.", "```\ngroesste = a\nif b > groesste:\n    groesste = b\n```"],
     solution="def max_von_drei(a, b, c):\n    groesste = a\n    if b > groesste:\n        groesste = b\n    if c > groesste:\n        groesste = c\n    return groesste"),
dict(id="b5", topic="bedingungen", level=2, title="Versandkosten",
     text="Schreibe `versandkosten(warenwert, express)`:\n- Standard: 4.90 €, ab 50 € Warenwert kostenlos (0)\n- Wenn `express` `True` ist, kommen immer **zusätzlich** 9.90 € dazu.\n\nGib die Versandkosten zurück.",
     starter="def versandkosten(warenwert, express):\n    pass\n",
     check={"type": "function", "name": "versandkosten", "cases": [[[20, False], 4.9], [[50, False], 0], [[80, True], 9.9], [[10, True], 14.8]]},
     hints=["Erst Grundkosten bestimmen (if/else), dann `if express: kosten += 9.90`."],
     solution="def versandkosten(warenwert, express):\n    if warenwert >= 50:\n        kosten = 0\n    else:\n        kosten = 4.90\n    if express:\n        kosten += 9.90\n    return kosten"),

# ---------------- Schleifen
dict(id="l1", topic="schleifen", level=1, title="Zählen von 1 bis 10",
     text="Gib mit einer **for-Schleife** die Zahlen 1 bis 10 aus, jede in einer eigenen Zeile.",
     starter="",
     check={"type": "output", "runs": [out("\n".join(str(i) for i in range(1, 11)))], "requires": ["For"]},
     hints=["`range(1, 11)` – die Obergrenze ist exklusiv!"],
     solution="for i in range(1, 11):\n    print(i)"),
dict(id="l2", topic="schleifen", level=1, title="Summe 1 bis 100",
     text="Berechne mit einer Schleife die Summe aller Zahlen von 1 bis 100 und gib sie aus.",
     starter="summe = 0\n",
     check={"type": "output", "runs": [out("5050")], "requires_any": ["For", "While"]},
     hints=["Akkumulator-Muster: `summe += i` in der Schleife.", "Ausgabe erst **nach** der Schleife (nicht eingerückt)."],
     solution="summe = 0\nfor i in range(1, 101):\n    summe += i\nprint(summe)"),
dict(id="l3", topic="schleifen", level=1, title="Einmaleins-Reihe",
     text="Gib die 7er-Reihe im Format `7 x 1 = 7` bis `7 x 10 = 70` aus.",
     starter="",
     check={"type": "output", "runs": [out("\n".join(f"7 x {i} = {7*i}" for i in range(1, 11)))], "requires_any": ["For", "While"]},
     hints=["`print(f\"7 x {i} = {7 * i}\")`"],
     solution='for i in range(1, 11):\n    print(f"7 x {i} = {7 * i}")'),
dict(id="l4", topic="schleifen", level=2, title="Die ersten 20 Primzahlen",
     text="Gib die **ersten 20 Primzahlen** aus, jede in einer eigenen Zeile.\n\nEine Primzahl ist größer als 1 und nur durch 1 und sich selbst teilbar.",
     starter="",
     check={"type": "output", "runs": [out("\n".join(str(p) for p in [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71]))], "requires_any": ["For", "While"]},
     hints=["Du brauchst einen Zähler `gefunden` und eine Kandidatenzahl `n`, die du hochzählst: `while gefunden < 20:`", "Für jedes `n` prüfst du mit einer inneren Schleife, ob irgendein `t` von 2 bis n-1 es teilt (`n % t == 0`).", "Eine Merk-Variable `ist_prim = True` hilft; bei einem Teiler auf `False` setzen und `break`."],
     solution="gefunden = 0\nn = 2\nwhile gefunden < 20:\n    ist_prim = True\n    for t in range(2, n):\n        if n % t == 0:\n            ist_prim = False\n            break\n    if ist_prim:\n        print(n)\n        gefunden += 1\n    n += 1"),
dict(id="l5", topic="schleifen", level=2, title="FizzBuzz",
     text="Gib die Zahlen von 1 bis 30 aus. Aber:\n- durch 3 **und** 5 teilbar → `FizzBuzz`\n- nur durch 3 → `Fizz`\n- nur durch 5 → `Buzz`",
     starter="",
     check={"type": "output", "runs": [out("\n".join("FizzBuzz" if i % 15 == 0 else "Fizz" if i % 3 == 0 else "Buzz" if i % 5 == 0 else str(i) for i in range(1, 31)))], "requires_any": ["For", "While"]},
     hints=["Die Reihenfolge der Prüfungen ist entscheidend: **zuerst** auf 3 und 5 prüfen!", "`if i % 3 == 0 and i % 5 == 0:`"],
     solution='for i in range(1, 31):\n    if i % 3 == 0 and i % 5 == 0:\n        print("FizzBuzz")\n    elif i % 3 == 0:\n        print("Fizz")\n    elif i % 5 == 0:\n        print("Buzz")\n    else:\n        print(i)'),
dict(id="l6", topic="schleifen", level=1, title="Fakultät",
     text="Schreibe `fakultaet(n)`, die n! = 1 · 2 · … · n mit einer **Schleife** berechnet. Es gilt 0! = 1.",
     starter="def fakultaet(n):\n    pass\n",
     check={"type": "function", "name": "fakultaet", "cases": [[[0], 1], [[1], 1], [[5], 120], [[10], 3628800]], "requires_any": ["For", "While"], "forbid": ["factorial"]},
     hints=["Beim Produkt startet der Akkumulator bei **1**, nicht bei 0.", "`for i in range(1, n + 1): ergebnis *= i`"],
     solution="def fakultaet(n):\n    ergebnis = 1\n    for i in range(1, n + 1):\n        ergebnis *= i\n    return ergebnis"),
dict(id="l7", topic="schleifen", level=1, title="Countdown",
     text="Gib mit einer **while-Schleife** einen Countdown von 10 bis 1 aus (je Zeile) und danach `Start!`.",
     starter="",
     check={"type": "output", "runs": [out("\n".join(str(i) for i in range(10, 0, -1)) + "\nStart!")], "requires": ["While"]},
     hints=["`i = 10`, `while i > 0:`, und in der Schleife `i -= 1` nicht vergessen."],
     solution='i = 10\nwhile i > 0:\n    print(i)\n    i -= 1\nprint("Start!")'),
dict(id="l8", topic="schleifen", level=2, title="Fibonacci-Folge",
     text="Schreibe `fibonacci(n)`, die eine **Liste** mit den ersten `n` Fibonacci-Zahlen zurückgibt. Die Folge beginnt mit 0, 1 und jede weitere Zahl ist die Summe der beiden vorherigen.\n\n`fibonacci(7)` → `[0, 1, 1, 2, 3, 5, 8]`",
     starter="def fibonacci(n):\n    pass\n",
     check={"type": "function", "name": "fibonacci", "cases": [[[7], [0, 1, 1, 2, 3, 5, 8]], [[1], [0]], [[0], []], [[12], [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89]]]},
     hints=["Zwei Variablen `a, b = 0, 1` merken sich die letzten beiden Zahlen.", "In jedem Schritt: `liste.append(a)` und dann `a, b = b, a + b`"],
     solution="def fibonacci(n):\n    liste = []\n    a, b = 0, 1\n    for _ in range(n):\n        liste.append(a)\n        a, b = b, a + b\n    return liste"),
dict(id="l9", topic="schleifen", level=1, title="Sternen-Dreieck",
     text="Lies eine Zahl `n` ein und gib ein Dreieck aus Sternen aus. Für `n = 4`:\n```\n*\n**\n***\n****\n```",
     starter='n = int(input("Höhe: "))\n',
     check={"type": "output", "runs": [out("*\n**\n***\n****", ["4"]), out("*", ["1"]), out("*\n**\n***\n****\n*****\n******", ["6"])], "requires_any": ["For", "While"]},
     hints=["`\"*\" * 3` ergibt `\"***\"`.", "`for i in range(1, n + 1): print(\"*\" * i)`"],
     solution='n = int(input("Höhe: "))\nfor i in range(1, n + 1):\n    print("*" * i)'),
dict(id="l10", topic="schleifen", level=2, title="Zahlenraten",
     text="Die geheime Zahl ist `42`. Lies so lange Zahlen mit `input()` ein, bis sie erraten wurde. Gib nach jedem falschen Tipp `zu klein` oder `zu groß` aus. Bei Erfolg: `Richtig! Versuche: X`.\n\nDie Tests spielen verschiedene Eingabefolgen durch.",
     starter='geheim = 42\n',
     check={"type": "output", "runs": [out("zu klein\nzu groß\nRichtig! Versuche: 3", ["10", "50", "42"]), out("Richtig! Versuche: 1", ["42"]), out("zu groß\nzu groß\nzu klein\nRichtig! Versuche: 4", ["99", "60", "41", "42"])], "requires": ["While"]},
     hints=["`while True:` mit `break` bei richtiger Zahl – oder `while tipp != geheim:`.", "Einen Zähler `versuche` bei jedem Tipp um 1 erhöhen.", "`tipp = int(input(\"Tipp: \"))`"],
     solution='geheim = 42\nversuche = 0\nwhile True:\n    tipp = int(input("Tipp: "))\n    versuche += 1\n    if tipp < geheim:\n        print("zu klein")\n    elif tipp > geheim:\n        print("zu groß")\n    else:\n        print("Richtig! Versuche:", versuche)\n        break'),
dict(id="l11", topic="schleifen", level=2, title="Quersumme",
     text="Schreibe `quersumme(n)` für eine nicht-negative ganze Zahl, **ohne** sie in einen String umzuwandeln.\n\n`quersumme(1234)` → `10`",
     starter="def quersumme(n):\n    pass\n",
     check={"type": "function", "name": "quersumme", "cases": [[[1234], 10], [[0], 0], [[9], 9], [[99999], 45]], "requires": ["While"], "forbid": ["str"]},
     hints=["`n % 10` ist die letzte Ziffer, `n // 10` entfernt sie.", "`while n > 0:` …"],
     solution="def quersumme(n):\n    s = 0\n    while n > 0:\n        s += n % 10\n        n //= 10\n    return s"),
dict(id="l12", topic="schleifen", level=3, title="Zinsen: Wann verdoppelt?",
     text="Schreibe `jahre_bis_verdopplung(zins)`: Ein Kapital wächst jährlich um `zins` Prozent. Nach wie vielen **vollen Jahren** hat es sich mindestens verdoppelt?\n\n`jahre_bis_verdopplung(7)` → `11`",
     starter="def jahre_bis_verdopplung(zins):\n    pass\n",
     check={"type": "function", "name": "jahre_bis_verdopplung", "cases": [[[7], 11], [[10], 8], [[100], 1], [[1], 70]], "requires": ["While"]},
     hints=["Starte mit `kapital = 1.0` und `jahre = 0`.", "`while kapital < 2:` → `kapital *= 1 + zins / 100` und `jahre += 1`"],
     solution="def jahre_bis_verdopplung(zins):\n    kapital = 1.0\n    jahre = 0\n    while kapital < 2:\n        kapital *= 1 + zins / 100\n        jahre += 1\n    return jahre"),

# ---------------- Listen
dict(id="li1", topic="listen", level=1, title="Durchschnitt",
     text="Schreibe `durchschnitt(zahlen)`, die den Mittelwert einer (nicht leeren) Liste zurückgibt.",
     starter="def durchschnitt(zahlen):\n    pass\n",
     check={"type": "function", "name": "durchschnitt", "cases": [[[[1, 2, 3, 4]], 2.5], [[[10]], 10], [[[1.7, 2.3, 1.0]], 5.0 / 3]]},
     hints=["`sum(zahlen) / len(zahlen)`"],
     solution="def durchschnitt(zahlen):\n    return sum(zahlen) / len(zahlen)"),
dict(id="li2", topic="listen", level=1, title="Nur gerade Zahlen",
     text="Schreibe `nur_gerade(zahlen)`, die eine **neue** Liste mit allen geraden Zahlen (in gleicher Reihenfolge) zurückgibt.",
     starter="def nur_gerade(zahlen):\n    pass\n",
     check={"type": "function", "name": "nur_gerade", "cases": [[[[1, 2, 3, 4, 5, 6]], [2, 4, 6]], [[[1, 3]], []], [[[0, -2, 7]], [0, -2]]]},
     hints=["Leere Liste anlegen, durchgehen, mit `append` befüllen.", "Oder: `[x for x in zahlen if x % 2 == 0]`"],
     solution="def nur_gerade(zahlen):\n    return [x for x in zahlen if x % 2 == 0]"),
dict(id="li3", topic="listen", level=1, title="Quadratzahlen (List Comprehension)",
     text="Schreibe `quadrate(n)`, die `[1, 4, 9, …, n²]` zurückgibt – mit einer **List Comprehension**.",
     starter="def quadrate(n):\n    pass\n",
     check={"type": "function", "name": "quadrate", "cases": [[[5], [1, 4, 9, 16, 25]], [[1], [1]], [[0], []]], "requires": ["ListComp"]},
     hints=["`[ausdruck for i in range(...)]`", "`[i ** 2 for i in range(1, n + 1)]`"],
     solution="def quadrate(n):\n    return [i ** 2 for i in range(1, n + 1)]"),
dict(id="li4", topic="listen", level=2, title="Eigenes Maximum",
     text="Schreibe `mein_max(zahlen)`, die die größte Zahl einer nicht-leeren Liste zurückgibt – **ohne** `max()` oder `sorted()`/`sort()`.",
     starter="def mein_max(zahlen):\n    pass\n",
     check={"type": "function", "name": "mein_max", "cases": [[[[3, 9, 2]], 9], [[[-5, -1, -9]], -1], [[[7]], 7]], "requires_any": ["For", "While"], "forbid": ["max", "sorted", "sort"]},
     hints=["Starte mit `groesste = zahlen[0]`.", "Durchlaufe die Liste und ersetze, wenn du etwas Größeres findest."],
     solution="def mein_max(zahlen):\n    groesste = zahlen[0]\n    for z in zahlen:\n        if z > groesste:\n            groesste = z\n    return groesste"),
dict(id="li5", topic="listen", level=2, title="Duplikate entfernen",
     text="Schreibe `ohne_duplikate(liste)`, die eine neue Liste ohne doppelte Einträge zurückgibt – die **Reihenfolge des ersten Auftretens** bleibt erhalten.\n\n`ohne_duplikate([3, 1, 3, 2, 1])` → `[3, 1, 2]`",
     starter="def ohne_duplikate(liste):\n    pass\n",
     check={"type": "function", "name": "ohne_duplikate", "cases": [[[[3, 1, 3, 2, 1]], [3, 1, 2]], [[["a", "b", "a"]], ["a", "b"]], [[[]], []]]},
     hints=["`set()` verliert die Reihenfolge – also lieber selbst prüfen.", "`if x not in ergebnis: ergebnis.append(x)`"],
     solution="def ohne_duplikate(liste):\n    ergebnis = []\n    for x in liste:\n        if x not in ergebnis:\n            ergebnis.append(x)\n    return ergebnis"),
dict(id="li6", topic="listen", level=2, title="Zweitgrößte Zahl",
     text="Schreibe `zweitgroesste(zahlen)`, die die zweitgrößte **verschiedene** Zahl zurückgibt.\n\n`zweitgroesste([4, 9, 9, 2])` → `4`",
     starter="def zweitgroesste(zahlen):\n    pass\n",
     check={"type": "function", "name": "zweitgroesste", "cases": [[[[4, 9, 9, 2]], 4], [[[1, 2]], 1], [[[5, 3, 8, 8, 7]], 7]]},
     hints=["Duplikate entfernen mit `set()`, dann sortieren.", "`sorted(set(zahlen))[-2]`"],
     solution="def zweitgroesste(zahlen):\n    return sorted(set(zahlen))[-2]"),
dict(id="li7", topic="listen", level=2, title="Matrix-Summe",
     text="Schreibe `matrix_summe(m)`, die die Summe aller Zahlen einer 2D-Liste zurückgibt.\n\n`matrix_summe([[1, 2], [3, 4]])` → `10`",
     starter="def matrix_summe(m):\n    pass\n",
     check={"type": "function", "name": "matrix_summe", "cases": [[[[[1, 2], [3, 4]]], 10], [[[[5]]], 5], [[[[1, 2, 3], [4, 5, 6], [7, 8, 9]]], 45]]},
     hints=["Zwei verschachtelte for-Schleifen: `for zeile in m:` / `for wert in zeile:`"],
     solution="def matrix_summe(m):\n    s = 0\n    for zeile in m:\n        for wert in zeile:\n            s += wert\n    return s"),
dict(id="li8", topic="listen", level=3, title="Bubble Sort",
     text="Schreibe `bubble_sort(liste)`, die die Liste aufsteigend sortiert **zurückgibt** – ohne `sorted()` oder `.sort()`.\n\nIdee: Laufe wiederholt durch die Liste und tausche benachbarte Elemente, wenn sie in falscher Reihenfolge sind.",
     starter="def bubble_sort(liste):\n    pass\n",
     check={"type": "function", "name": "bubble_sort", "cases": [[[[5, 2, 9, 1]], [1, 2, 5, 9]], [[[1]], [1]], [[[3, 3, 1]], [1, 3, 3]], [[[]], []], [[[9, 8, 7, 6, 5, 4]], [4, 5, 6, 7, 8, 9]]], "forbid": ["sorted", "sort"]},
     hints=["Äußere Schleife: `for i in range(len(l)):` – innere: `for j in range(len(l) - 1 - i):`", "Tauschen: `l[j], l[j + 1] = l[j + 1], l[j]`"],
     solution="def bubble_sort(liste):\n    l = liste[:]\n    for i in range(len(l)):\n        for j in range(len(l) - 1 - i):\n            if l[j] > l[j + 1]:\n                l[j], l[j + 1] = l[j + 1], l[j]\n    return l"),
dict(id="li9", topic="listen", level=2, title="Messwerte filtern",
     text="Schreibe `gueltige_messwerte(werte, min_w, max_w)`, die nur Werte im Bereich `min_w` bis `max_w` (inklusive) zurückgibt, **auf 1 Nachkommastelle gerundet**.\n\n`gueltige_messwerte([2.34, -1, 5.06, 11], 0, 10)` → `[2.3, 5.1]`",
     starter="def gueltige_messwerte(werte, min_w, max_w):\n    pass\n",
     check={"type": "function", "name": "gueltige_messwerte", "cases": [[[[2.34, -1, 5.06, 11], 0, 10], [2.3, 5.1]], [[[1, 2, 3], 2, 2], [2]], [[[], 0, 1], []]]},
     hints=["`[round(w, 1) for w in werte if min_w <= w <= max_w]`"],
     solution="def gueltige_messwerte(werte, min_w, max_w):\n    return [round(w, 1) for w in werte if min_w <= w <= max_w]"),

# ---------------- Tupel & Sets
dict(id="t1", topic="tupel_sets", level=1, title="Minimum und Maximum",
     text="Schreibe `min_max(zahlen)`, die ein **Tupel** `(kleinste, größte)` zurückgibt.",
     starter="def min_max(zahlen):\n    pass\n",
     check={"type": "function", "name": "min_max", "cases": [[[[3, 1, 4, 1, 5]], (1, 5)], [[[7]], (7, 7)]]},
     hints=["`return min(zahlen), max(zahlen)` – das Komma macht ein Tupel."],
     solution="def min_max(zahlen):\n    return min(zahlen), max(zahlen)"),
dict(id="t2", topic="tupel_sets", level=2, title="Gemeinsame Elemente",
     text="Schreibe `gemeinsam(a, b)`, die eine **sortierte Liste** aller Elemente zurückgibt, die in beiden Listen vorkommen (ohne Duplikate). Nutze Sets!",
     starter="def gemeinsam(a, b):\n    pass\n",
     check={"type": "function", "name": "gemeinsam", "cases": [[[[1, 2, 3, 4], [3, 4, 5]], [3, 4]], [[[1, 1, 2], [1]], [1]], [[[1], [2]], []]]},
     hints=["Schnittmenge: `set(a) & set(b)`", "Zum Schluss `sorted(...)` – liefert eine Liste."],
     solution="def gemeinsam(a, b):\n    return sorted(set(a) & set(b))"),
dict(id="t3", topic="tupel_sets", level=2, title="Bester Student",
     text="Gegeben ist eine Liste von Tupeln `(name, note)`. Schreibe `bester(studis)`, die den **Namen** mit der besten (= kleinsten) Note zurückgibt.\n\n`bester([(\"Ana\", 2.3), (\"Ben\", 1.7)])` → `\"Ben\"`",
     starter="def bester(studis):\n    pass\n",
     check={"type": "function", "name": "bester", "cases": [[[[["Ana", 2.3], ["Ben", 1.7], ["Cem", 3.0]]], "Ben"], [[[["Ana", 1.0]]], "Ana"]]},
     hints=["Durchgehen mit Unpacking: `for name, note in studis:`", "Oder: `min(studis, key=lambda s: s[1])[0]`"],
     solution="def bester(studis):\n    best_name, best_note = studis[0]\n    for name, note in studis:\n        if note < best_note:\n            best_name, best_note = name, note\n    return best_name"),

# ---------------- Dicts
dict(id="d1", topic="dicts", level=2, title="Wörter zählen",
     text="Schreibe `woerter_zaehlen(text)`, die ein Dictionary `{wort: anzahl}` zurückgibt. Wörter werden klein geschrieben gezählt.\n\n`woerter_zaehlen(\"Der Hund und der Ball\")` → `{\"der\": 2, \"hund\": 1, \"und\": 1, \"ball\": 1}`",
     starter="def woerter_zaehlen(text):\n    pass\n",
     check={"type": "function", "name": "woerter_zaehlen", "cases": [[["Der Hund und der Ball"], {"der": 2, "hund": 1, "und": 1, "ball": 1}], [["a a a"], {"a": 3}], [[""], {}]]},
     hints=["`for wort in text.lower().split():`", "Zähl-Muster: `d[wort] = d.get(wort, 0) + 1`"],
     solution="def woerter_zaehlen(text):\n    d = {}\n    for wort in text.lower().split():\n        d[wort] = d.get(wort, 0) + 1\n    return d"),
dict(id="d2", topic="dicts", level=1, title="Telefonbuch",
     text="Schreibe `nummer(buch, name)`, die die Nummer aus dem Dictionary `buch` zurückgibt – oder `\"unbekannt\"`, wenn der Name fehlt.",
     starter="def nummer(buch, name):\n    pass\n",
     check={"type": "function", "name": "nummer", "cases": [[[{"Ana": "0151-1", "Ben": "0170-2"}, "Ben"], "0170-2"], [[{"Ana": "0151-1"}, "Cem"], "unbekannt"], [[{}, "Ana"], "unbekannt"]]},
     hints=["`buch.get(name, \"unbekannt\")`"],
     solution='def nummer(buch, name):\n    return buch.get(name, "unbekannt")'),
dict(id="d3", topic="dicts", level=2, title="Lagerwert",
     text="Ein Lager ist ein Dictionary `{artikel: [menge, stückpreis]}`. Schreibe `lagerwert(lager)`, die den Gesamtwert auf 2 Stellen gerundet zurückgibt.\n\n`lagerwert({\"Schraube\": [100, 0.05], \"Mutter\": [50, 0.1]})` → `10.0`",
     starter="def lagerwert(lager):\n    pass\n",
     check={"type": "function", "name": "lagerwert", "cases": [[[{"Schraube": [100, 0.05], "Mutter": [50, 0.1]}], 10.0], [[{}], 0], [[{"Kolben": [3, 12.99], "Pipette": [20, 1.25]}], 63.97]]},
     hints=["`for artikel, (menge, preis) in lager.items():` – oder `werte = lager[artikel]`", "`summe += menge * preis`, am Ende `round(summe, 2)`"],
     solution="def lagerwert(lager):\n    summe = 0\n    for menge, preis in lager.values():\n        summe += menge * preis\n    return round(summe, 2)"),
dict(id="d4", topic="dicts", level=2, title="Molare Masse berechnen",
     text="Schreibe `molmasse(formel)`. `formel` ist ein Dictionary `{element: anzahl}`, z. B. H₂O = `{\"H\": 2, \"O\": 1}`. Nutze die Tabelle `MASSEN` und gib die Molmasse auf 3 Stellen gerundet zurück.",
     starter='MASSEN = {"H": 1.008, "C": 12.011, "N": 14.007, "O": 15.999, "Na": 22.990, "Cl": 35.45}\n\ndef molmasse(formel):\n    pass\n',
     check={"type": "function", "name": "molmasse", "cases": [[[{"H": 2, "O": 1}], 18.015], [[{"C": 6, "H": 12, "O": 6}], 180.156], [[{"Na": 1, "Cl": 1}], 58.44], [[{"C": 1, "O": 2}], 44.009]]},
     hints=["`for element, anzahl in formel.items():`", "`summe += MASSEN[element] * anzahl`"],
     solution='MASSEN = {"H": 1.008, "C": 12.011, "N": 14.007, "O": 15.999, "Na": 22.990, "Cl": 35.45}\n\ndef molmasse(formel):\n    summe = 0\n    for element, anzahl in formel.items():\n        summe += MASSEN[element] * anzahl\n    return round(summe, 3)'),
dict(id="d5", topic="dicts", level=2, title="Notenspiegel",
     text="Schreibe `durchschnitte(noten)`. `noten` ist `{name: [note1, note2, …]}`. Gib ein neues Dict `{name: durchschnitt}` zurück, auf 2 Stellen gerundet.",
     starter="def durchschnitte(noten):\n    pass\n",
     check={"type": "function", "name": "durchschnitte", "cases": [[[{"Ana": [1.0, 2.0], "Ben": [3.0, 2.7, 2.0]}], {"Ana": 1.5, "Ben": 2.57}], [[{}], {}]]},
     hints=["Neues leeres Dict anlegen, mit `for name, liste in noten.items():` befüllen.", "`ergebnis[name] = round(sum(liste) / len(liste), 2)`"],
     solution="def durchschnitte(noten):\n    ergebnis = {}\n    for name, liste in noten.items():\n        ergebnis[name] = round(sum(liste) / len(liste), 2)\n    return ergebnis"),
dict(id="d6", topic="dicts", level=3, title="Häufigster Buchstabe",
     text="Schreibe `haeufigster(text)`, die den häufigsten **Buchstaben** (klein, nur `isalpha()`-Zeichen) zurückgibt. Bei Gleichstand den, der **zuerst** im Text vorkommt.",
     starter="def haeufigster(text):\n    pass\n",
     check={"type": "function", "name": "haeufigster", "cases": [[["Hallo Welt"], "l"], [["aabb"], "a"], [["Python 3!"], "p"], [["Mississippi"], "i"]]},
     hints=["Erst zählen (Dict), nur Zeichen mit `z.isalpha()` berücksichtigen.", "Dicts behalten die Einfügereihenfolge – beim Suchen des Maximums nur bei **echt** größer ersetzen."],
     solution="def haeufigster(text):\n    z = {}\n    for c in text.lower():\n        if c.isalpha():\n            z[c] = z.get(c, 0) + 1\n    bester = None\n    for c in z:\n        if bester is None or z[c] > z[bester]:\n            bester = c\n    return bester"),

# ---------------- Funktionen
dict(id="f1", topic="funktionen", level=1, title="Kreisfläche",
     text="Schreibe `kreisflaeche(r)`, die die Fläche π·r² auf 2 Stellen gerundet zurückgibt. Nutze `math.pi`.",
     starter="import math\n\ndef kreisflaeche(r):\n    pass\n",
     check={"type": "function", "name": "kreisflaeche", "cases": [[[1], 3.14], [[2.5], 19.63], [[0], 0]]},
     hints=["`round(math.pi * r ** 2, 2)`"],
     solution="import math\n\ndef kreisflaeche(r):\n    return round(math.pi * r ** 2, 2)"),
dict(id="f2", topic="funktionen", level=1, title="Bruttopreis mit Default",
     text="Schreibe `brutto(netto, mwst=19)`, die den Bruttopreis auf 2 Stellen gerundet zurückgibt. `mwst` ist ein Prozentwert mit Standardwert 19.\n\n`brutto(100)` → `119.0`, `brutto(100, 7)` → `107.0`",
     starter="def brutto(netto, mwst=19):\n    pass\n",
     check={"type": "function", "name": "brutto", "cases": [[[100], 119.0], [[100, 7], 107.0], [[9.99], 11.89], [[50, 0], 50.0]]},
     hints=["`netto * (1 + mwst / 100)`"],
     solution="def brutto(netto, mwst=19):\n    return round(netto * (1 + mwst / 100), 2)"),
dict(id="f3", topic="funktionen", level=2, title="Primzahltest",
     text="Schreibe `ist_prim(n)` → `True`, wenn `n` eine Primzahl ist, sonst `False`. (0 und 1 sind keine Primzahlen.)",
     starter="def ist_prim(n):\n    pass\n",
     check={"type": "function", "name": "ist_prim", "cases": [[[2], True], [[17], True], [[1], False], [[0], False], [[21], False], [[97], True], [[100], False]]},
     hints=["Erst `if n < 2: return False`.", "Dann alle Teiler von 2 bis n-1 testen; bei einem Treffer sofort `return False`.", "Nach der Schleife `return True`."],
     solution="def ist_prim(n):\n    if n < 2:\n        return False\n    for t in range(2, n):\n        if n % t == 0:\n            return False\n    return True"),
dict(id="f4", topic="funktionen", level=2, title="Größter gemeinsamer Teiler",
     text="Schreibe `ggt(a, b)` mit dem **euklidischen Algorithmus**: Solange `b` nicht 0 ist, ersetze `(a, b)` durch `(b, a % b)`. Am Ende ist `a` der ggT.",
     starter="def ggt(a, b):\n    pass\n",
     check={"type": "function", "name": "ggt", "cases": [[[12, 18], 6], [[17, 5], 1], [[100, 75], 25], [[7, 0], 7]], "forbid": ["gcd"]},
     hints=["`while b != 0: a, b = b, a % b`"],
     solution="def ggt(a, b):\n    while b != 0:\n        a, b = b, a % b\n    return a"),
dict(id="f5", topic="funktionen", level=2, title="Zinseszins",
     text="Schreibe `endkapital(kapital, zins, jahre)`, die das Kapital nach `jahre` Jahren mit `zins` Prozent Zinseszins zurückgibt, auf 2 Stellen gerundet.\n\nFormel: K · (1 + p/100)ⁿ",
     starter="def endkapital(kapital, zins, jahre):\n    pass\n",
     check={"type": "function", "name": "endkapital", "cases": [[[1000, 5, 10], 1628.89], [[500, 0, 3], 500.0], [[2000, 3.5, 1], 2070.0]]},
     hints=["`kapital * (1 + zins / 100) ** jahre`"],
     solution="def endkapital(kapital, zins, jahre):\n    return round(kapital * (1 + zins / 100) ** jahre, 2)"),
dict(id="f6", topic="funktionen", level=2, title="Rekursive Potenz",
     text="Schreibe `potenz(basis, exp)` **rekursiv** (ohne `**` und ohne Schleife) für `exp ≥ 0`.\n\nIdee: `basis^0 = 1`, `basis^exp = basis · basis^(exp-1)`",
     starter="def potenz(basis, exp):\n    pass\n",
     check={"type": "function", "name": "potenz", "cases": [[[2, 10], 1024], [[5, 0], 1], [[3, 3], 27], [[7, 1], 7]], "forbid": ["pow"]},
     hints=["Basisfall: `if exp == 0: return 1`", "Rekursionsfall: `return basis * potenz(basis, exp - 1)`"],
     solution="def potenz(basis, exp):\n    if exp == 0:\n        return 1\n    return basis * potenz(basis, exp - 1)"),
dict(id="f7", topic="funktionen", level=2, title="Sortieren mit lambda",
     text="Schreibe `nach_preis(artikel)`. `artikel` ist eine Liste von `[name, preis]`. Gib die **Namen** nach Preis **absteigend** sortiert zurück.",
     starter="def nach_preis(artikel):\n    pass\n",
     check={"type": "function", "name": "nach_preis", "cases": [[[[["Brot", 2.5], ["Käse", 4.2], ["Milch", 1.1]]], ["Käse", "Brot", "Milch"]], [[[]], []]], "requires": ["Lambda"]},
     hints=["`sorted(artikel, key=lambda a: a[1], reverse=True)`", "Danach nur die Namen: `[a[0] for a in ...]`"],
     solution="def nach_preis(artikel):\n    sortiert = sorted(artikel, key=lambda a: a[1], reverse=True)\n    return [a[0] for a in sortiert]"),
dict(id="f8", topic="funktionen", level=1, title="return statt print",
     text="Diese Funktion **druckt** das Ergebnis, statt es zurückzugeben – deshalb kann man nicht damit weiterrechnen. Repariere sie!",
     starter="def verdoppeln(x):\n    print(x * 2)\n",
     check={"type": "function", "name": "verdoppeln", "cases": [[[4], 8], [[0], 0], [[-3], -6], [[2.5], 5.0]]},
     hints=["Ersetze `print(...)` durch `return ...`"],
     solution="def verdoppeln(x):\n    return x * 2"),

# ---------------- Fehler
dict(id="e1", topic="fehler", level=1, title="Sichere Division",
     text="Schreibe `teile(a, b)`, die `a / b` zurückgibt. Bei Division durch 0 soll **kein Absturz** passieren, sondern `None` zurückgegeben werden. Nutze `try`/`except`.",
     starter="def teile(a, b):\n    pass\n",
     check={"type": "function", "name": "teile", "cases": [[[10, 4], 2.5], [[1, 0], None], [[0, 5], 0.0]], "requires": ["Try"]},
     hints=["```\ntry:\n    return a / b\nexcept ZeroDivisionError:\n    return None\n```"],
     solution="def teile(a, b):\n    try:\n        return a / b\n    except ZeroDivisionError:\n        return None"),
dict(id="e2", topic="fehler", level=2, title="Eingabe als Zahl",
     text="Schreibe `zu_zahl(text)`, die den Text in eine ganze Zahl umwandelt. Ist das nicht möglich, gib `0` zurück.",
     starter="def zu_zahl(text):\n    pass\n",
     check={"type": "function", "name": "zu_zahl", "cases": [[["42"], 42], [["abc"], 0], [["-7"], -7], [["3.5"], 0], [[""], 0]], "requires": ["Try"]},
     hints=["`int(\"abc\")` wirft einen `ValueError`."],
     solution="def zu_zahl(text):\n    try:\n        return int(text)\n    except ValueError:\n        return 0"),
dict(id="e3", topic="fehler", level=1, title="Finde die Fehler",
     text="Das Programm soll die Summe der Zahlen 1 bis 5 berechnen und `Summe: 15` ausgeben. Es enthält aber **drei Fehler**. Finde und behebe sie!",
     starter='summe = 0\nfor i in range(1, 5)\n    summe += i\nprint("Summe: " + summe)\n',
     check={"type": "output", "runs": [out("Summe: 15")]},
     hints=["Nach `for ...` fehlt etwas.", "`range(1, 5)` endet bei 4.", "Text und Zahl lassen sich nicht mit `+` verbinden – `str()` oder Komma."],
     solution='summe = 0\nfor i in range(1, 6):\n    summe += i\nprint("Summe: " + str(summe))'),
dict(id="e4", topic="fehler", level=2, title="Fehler selbst auslösen",
     text="Schreibe `abheben(kontostand, betrag)`, die den neuen Kontostand zurückgibt. Ist `betrag` negativ oder größer als der Kontostand, löse einen `ValueError` aus.\n\nDie Tests prüfen das über eine Hilfsfunktion.",
     starter="def abheben(kontostand, betrag):\n    pass\n",
     check={"type": "asserts", "cases": [
         {"expr": "abheben(100, 30)", "expected": 70},
         {"setup": "def versuch(k, b):\n    try:\n        abheben(k, b)\n        return 'kein Fehler'\n    except ValueError:\n        return 'ValueError'", "expr": "versuch(100, 150)", "expected": "ValueError"},
         {"setup": "def versuch(k, b):\n    try:\n        abheben(k, b)\n        return 'kein Fehler'\n    except ValueError:\n        return 'ValueError'", "expr": "versuch(100, -5)", "expected": "ValueError"},
         {"expr": "abheben(50, 50)", "expected": 0}]},
     hints=["`if betrag < 0 or betrag > kontostand: raise ValueError(\"ungültig\")`"],
     solution='def abheben(kontostand, betrag):\n    if betrag < 0 or betrag > kontostand:\n        raise ValueError("Ungültiger Betrag")\n    return kontostand - betrag'),

# ---------------- Dateien & Module
dict(id="m1", topic="dateien", level=2, title="Datei schreiben und lesen",
     text="1. Schreibe die Zahlen 1 bis 5 (je eine Zeile) in die Datei `zahlen.txt`.\n2. Lies die Datei danach wieder ein und gib die **Summe** aus.\n\nNutze `with open(...)`. (Die Datei liegt in einem virtuellen Dateisystem im Browser.)",
     starter="",
     check={"type": "output", "runs": [out("15")], "requires": ["With"]},
     hints=["Schreiben: `with open(\"zahlen.txt\", \"w\") as f:` und `f.write(str(i) + \"\\n\")`", "Lesen: `for zeile in f: summe += int(zeile)`"],
     solution='with open("zahlen.txt", "w") as f:\n    for i in range(1, 6):\n        f.write(str(i) + "\\n")\n\nsumme = 0\nwith open("zahlen.txt") as f:\n    for zeile in f:\n        summe += int(zeile)\nprint(summe)'),
dict(id="m2", topic="dateien", level=2, title="CSV auswerten",
     text="Die Datei `messung.csv` wird im Startcode angelegt (Format `probe;wert`). Lies sie ein und gib den **Durchschnitt** der Werte mit 2 Nachkommastellen aus.",
     starter='with open("messung.csv", "w") as f:\n    f.write("A;7.2\\nB;6.8\\nC;7.9\\nD;6.5\\n")\n\n# Ab hier dein Code\n',
     check={"type": "output", "runs": [out("7.10")]},
     hints=["Zeilen mit `zeile.strip().split(\";\")` zerlegen.", "Werte als `float` in einer Liste sammeln, dann `sum / len`.", "`print(f\"{d:.2f}\")`"],
     solution='with open("messung.csv", "w") as f:\n    f.write("A;7.2\\nB;6.8\\nC;7.9\\nD;6.5\\n")\n\nwerte = []\nwith open("messung.csv") as f:\n    for zeile in f:\n        probe, wert = zeile.strip().split(";")\n        werte.append(float(wert))\nd = sum(werte) / len(werte)\nprint(f"{d:.2f}")'),
dict(id="m3", topic="dateien", level=1, title="Hypotenuse mit math",
     text="Schreibe `hypotenuse(a, b)` mit `math.sqrt`, Ergebnis auf 2 Stellen gerundet. (Satz des Pythagoras: c = √(a² + b²))",
     starter="import math\n\ndef hypotenuse(a, b):\n    pass\n",
     check={"type": "function", "name": "hypotenuse", "cases": [[[3, 4], 5.0], [[1, 1], 1.41], [[6, 8], 10.0]]},
     hints=["`round(math.sqrt(a ** 2 + b ** 2), 2)`"],
     solution="import math\n\ndef hypotenuse(a, b):\n    return round(math.sqrt(a ** 2 + b ** 2), 2)"),

# ---------------- OOP
dict(id="o1", topic="oop", level=2, title="Klasse Konto",
     text="Schreibe eine Klasse `Konto`:\n- `Konto(inhaber, stand=0)` speichert `self.inhaber` und `self.stand`\n- `einzahlen(betrag)` erhöht den Stand\n- `abheben(betrag)` verringert den Stand und gibt `True` zurück – ist nicht genug Geld da, bleibt der Stand gleich und es wird `False` zurückgegeben.",
     starter="class Konto:\n    def __init__(self, inhaber, stand=0):\n        pass\n",
     check={"type": "asserts", "requires": ["ClassDef"], "cases": [
         {"setup": "k = Konto('Ana')", "expr": "k.stand", "expected": 0},
         {"setup": "k = Konto('Ana', 100)\nk.einzahlen(50)", "expr": "k.stand", "expected": 150},
         {"setup": "k = Konto('Ana', 100)", "expr": "k.abheben(30)", "expected": True},
         {"setup": "k = Konto('Ana', 100)\nk.abheben(30)", "expr": "k.stand", "expected": 70},
         {"setup": "k = Konto('Ana', 100)", "expr": "k.abheben(500)", "expected": False},
         {"setup": "k = Konto('Ana', 100)\nk.abheben(500)", "expr": "k.stand", "expected": 100},
         {"setup": "k = Konto('Ben')", "expr": "k.inhaber", "expected": "Ben"}]},
     hints=["In `__init__`: `self.inhaber = inhaber` und `self.stand = stand`", "Methoden haben immer `self` als ersten Parameter: `def einzahlen(self, betrag):`", "In `abheben`: `if betrag > self.stand: return False`"],
     solution="class Konto:\n    def __init__(self, inhaber, stand=0):\n        self.inhaber = inhaber\n        self.stand = stand\n\n    def einzahlen(self, betrag):\n        self.stand += betrag\n\n    def abheben(self, betrag):\n        if betrag > self.stand:\n            return False\n        self.stand -= betrag\n        return True"),
dict(id="o2", topic="oop", level=2, title="Klasse Rechteck",
     text="Schreibe eine Klasse `Rechteck` mit `breite` und `hoehe`, den Methoden `flaeche()` und `umfang()` sowie `__str__`, das z. B. `Rechteck 3x4` liefert.",
     starter="class Rechteck:\n    pass\n",
     check={"type": "asserts", "requires": ["ClassDef"], "cases": [
         {"setup": "r = Rechteck(3, 4)", "expr": "r.flaeche()", "expected": 12},
         {"setup": "r = Rechteck(3, 4)", "expr": "r.umfang()", "expected": 14},
         {"setup": "r = Rechteck(3, 4)", "expr": "str(r)", "expected": "Rechteck 3x4"},
         {"setup": "r = Rechteck(2.5, 2)", "expr": "r.flaeche()", "expected": 5.0}]},
     hints=["`def __init__(self, breite, hoehe):`", "`def __str__(self): return f\"Rechteck {self.breite}x{self.hoehe}\"`"],
     solution='class Rechteck:\n    def __init__(self, breite, hoehe):\n        self.breite = breite\n        self.hoehe = hoehe\n\n    def flaeche(self):\n        return self.breite * self.hoehe\n\n    def umfang(self):\n        return 2 * (self.breite + self.hoehe)\n\n    def __str__(self):\n        return f"Rechteck {self.breite}x{self.hoehe}"'),
dict(id="o3", topic="oop", level=3, title="Vererbung: Stoffe",
     text="Schreibe eine Klasse `Stoff` mit `name` und `molmasse` und der Methode `stoffmenge(masse)`, die `masse / molmasse` auf 3 Stellen gerundet zurückgibt.\n\nSchreibe dann `Saeure(Stoff)` mit zusätzlichem Attribut `ph` und der Methode `ist_stark()` → `True`, wenn `ph < 3`. Nutze `super().__init__(...)`.",
     starter="class Stoff:\n    pass\n\n\nclass Saeure(Stoff):\n    pass\n",
     check={"type": "asserts", "requires": ["ClassDef"], "cases": [
         {"setup": "w = Stoff('Wasser', 18.015)", "expr": "w.stoffmenge(36.03)", "expected": 2.0},
         {"setup": "s = Saeure('Salzsäure', 36.46, 1)", "expr": "s.ist_stark()", "expected": True},
         {"setup": "s = Saeure('Essigsäure', 60.05, 4.8)", "expr": "s.ist_stark()", "expected": False},
         {"setup": "s = Saeure('Essigsäure', 60.05, 4.8)", "expr": "s.stoffmenge(120.1)", "expected": 2.0},
         {"setup": "s = Saeure('Essigsäure', 60.05, 4.8)", "expr": "s.name", "expected": "Essigsäure"},
         {"expr": "issubclass(Saeure, Stoff)", "expected": True}]},
     hints=["`class Saeure(Stoff):` erbt alle Methoden von `Stoff`.", "In `Saeure.__init__(self, name, molmasse, ph)`: zuerst `super().__init__(name, molmasse)`, dann `self.ph = ph`."],
     solution="class Stoff:\n    def __init__(self, name, molmasse):\n        self.name = name\n        self.molmasse = molmasse\n\n    def stoffmenge(self, masse):\n        return round(masse / self.molmasse, 3)\n\n\nclass Saeure(Stoff):\n    def __init__(self, name, molmasse, ph):\n        super().__init__(name, molmasse)\n        self.ph = ph\n\n    def ist_stark(self):\n        return self.ph < 3"),
]
