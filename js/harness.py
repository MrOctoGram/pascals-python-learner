# Prüf-Harness: führt Code aus, fängt Ausgaben ab und prüft Aufgaben.
# Wird im Browser (Pyodide) UND lokal von tools/build.py benutzt.
import sys, io, ast, json, copy, math, traceback

FILENAME = "<dein Code>"

ERKLAERUNG = {
    "SyntaxError": "Syntaxfehler – Python versteht die Schreibweise nicht (fehlt ein Doppelpunkt, eine Klammer oder ein Anführungszeichen?).",
    "IndentationError": "Einrückungsfehler – prüfe die Leerzeichen am Zeilenanfang (Blöcke nach : müssen eingerückt sein).",
    "TabError": "Tabs und Leerzeichen gemischt – nutze nur Leerzeichen (4 pro Ebene).",
    "NameError": "Ein Name ist unbekannt – Tippfehler, oder die Variable/Funktion wurde noch nicht definiert?",
    "TypeError": "Typfehler – eine Operation passt nicht zu diesem Datentyp (z. B. str + int, oder falsche Anzahl Argumente).",
    "ValueError": "Wertfehler – der Typ stimmt, aber der Wert passt nicht (z. B. int('abc')).",
    "IndexError": "Index außerhalb des gültigen Bereichs – denk dran: Zählung beginnt bei 0, der letzte Index ist len-1.",
    "KeyError": "Diesen Schlüssel gibt es im Dictionary nicht – prüfe mit 'in' oder nutze .get().",
    "ZeroDivisionError": "Division durch 0 ist nicht erlaubt.",
    "AttributeError": "Dieses Objekt hat das Attribut/die Methode nicht – Tippfehler oder falscher Datentyp?",
    "RecursionError": "Zu tiefe Rekursion – fehlt der Abbruchfall (Basisfall)?",
    "UnboundLocalError": "Lokale Variable wird benutzt, bevor sie einen Wert hat.",
    "EOFError": "input() wurde öfter aufgerufen als Eingaben vorhanden sind.",
    "FileNotFoundError": "Die Datei existiert nicht.",
    "ModuleNotFoundError": "Dieses Modul ist nicht verfügbar.",
    "AssertionError": "Eine assert-Bedingung war falsch.",
}


class _Tee(io.TextIOBase):
    def __init__(self, *targets):
        self.targets = targets

    def write(self, s):
        for t in self.targets:
            t.write(s)
        return len(s)


def _format_error(e):
    name = type(e).__name__
    line = None
    if isinstance(e, SyntaxError) and e.filename == FILENAME:
        line = e.lineno
    else:
        for fr in traceback.extract_tb(e.__traceback__):
            if fr.filename == FILENAME:
                line = fr.lineno
    msg = str(e)
    if isinstance(e, SyntaxError):
        msg = e.msg
    return {
        "type": name,
        "message": msg,
        "line": line,
        "hint": ERKLAERUNG.get(name, ""),
    }


def _exec(code, inputs=None, ns=None):
    """Führt Code aus. Liefert (anzeige, ausgabe_ohne_prompts, fehler, namespace)."""
    display = io.StringIO()
    clean = io.StringIO()
    feed = [str(x) for x in (inputs or [])]

    def fake_input(prompt=""):
        display.write(str(prompt))
        if not feed:
            raise EOFError("Keine weitere Eingabe vorhanden")
        v = feed.pop(0)
        display.write(v + "\n")
        return v

    if ns is None:
        ns = {"__name__": "__main__"}
    ns["input"] = fake_input
    old_out, old_err = sys.stdout, sys.stderr
    sys.stdout = _Tee(display, clean)
    sys.stderr = display
    err = None
    try:
        exec(compile(code, FILENAME, "exec"), ns)
    except SystemExit:
        pass
    except BaseException as e:  # noqa
        err = _format_error(e)
    finally:
        sys.stdout, sys.stderr = old_out, old_err
    return display.getvalue(), clean.getvalue(), err, ns


def _norm_text(s):
    lines = [l.rstrip() for l in str(s).replace("\r\n", "\n").split("\n")]
    while lines and lines[-1] == "":
        lines.pop()
    return "\n".join(lines)


def _norm_val(v):
    if isinstance(v, tuple):
        return [_norm_val(x) for x in v]
    if isinstance(v, list):
        return [_norm_val(x) for x in v]
    if isinstance(v, dict):
        return {k: _norm_val(x) for k, x in v.items()}
    return v


def _equal(a, b):
    a, b = _norm_val(a), _norm_val(b)
    if isinstance(a, bool) or isinstance(b, bool):
        return a is b or (type(a) == type(b) and a == b)
    if isinstance(a, (int, float)) and isinstance(b, (int, float)):
        return math.isclose(a, b, rel_tol=1e-6, abs_tol=1e-9)
    if isinstance(a, list) and isinstance(b, list):
        return len(a) == len(b) and all(_equal(x, y) for x, y in zip(a, b))
    if isinstance(a, dict) and isinstance(b, dict):
        return a.keys() == b.keys() and all(_equal(a[k], b[k]) for k in a)
    return a == b


def _r(v):
    s = repr(v)
    return s if len(s) < 300 else s[:300] + " …"


def _static_checks(code, spec):
    """requires: Liste von AST-Knotentypen (alle nötig);
    requires_any: Liste (mind. einer nötig); forbid: verbotene Namen/Methoden."""
    problems = []
    try:
        tree = ast.parse(code)
    except SyntaxError:
        return problems  # Fehler kommt beim Ausführen
    kinds = {type(n).__name__ for n in ast.walk(tree)}
    names = set()
    for n in ast.walk(tree):
        if isinstance(n, ast.Name):
            names.add(n.id)
        elif isinstance(n, ast.Attribute):
            names.add(n.attr)
    labels = {
        "For": "eine for-Schleife", "While": "eine while-Schleife",
        "If": "eine if-Abfrage", "FunctionDef": "eine eigene Funktion (def)",
        "ListComp": "eine List Comprehension", "Try": "try/except",
        "With": "with open(...)", "ClassDef": "eine Klasse (class)",
        "DictComp": "eine Dict Comprehension", "Lambda": "eine lambda-Funktion",
    }
    for k in spec.get("requires", []):
        if k not in kinds:
            problems.append("Bitte verwende " + labels.get(k, k) + ".")
    ra = spec.get("requires_any", [])
    if ra and not (kinds & set(ra)):
        problems.append("Bitte verwende " + " oder ".join(labels.get(k, k) for k in ra) + ".")
    for f in spec.get("forbid", []):
        if f in names:
            problems.append("'" + f + "' ist bei dieser Aufgabe nicht erlaubt – programmiere es selbst!")
    return problems


def run(code, inputs=None):
    display, _, err, _ = _exec(code, inputs)
    return json.dumps({"output": display, "error": err})


def check(code, spec):
    if isinstance(spec, str):
        spec = json.loads(spec)
    results = []
    output_shown = ""
    error = None
    kind = spec["type"]

    if kind == "output":
        for i, t in enumerate(spec["runs"]):
            display, clean, err, _ = _exec(code, t.get("inputs"))
            if i == 0:
                output_shown = display
            if err:
                error = err
                output_shown = display
                results.append({"ok": False, "label": _label_inputs(t), "expected": t["expected"], "got": clean, "error": err["type"]})
                break
            ok = _norm_text(clean) == _norm_text(t["expected"])
            results.append({"ok": ok, "label": _label_inputs(t), "expected": t["expected"], "got": clean})

    elif kind == "function":
        display, _, err, ns = _exec(code)
        output_shown = display
        if err:
            error = err
        else:
            fn = ns.get(spec["name"])
            if not callable(fn):
                error = {"type": "Fehlt", "message": "Die Funktion '" + spec["name"] + "' wurde nicht gefunden.", "line": None,
                         "hint": "Definiere sie genau mit diesem Namen: def " + spec["name"] + "(...):"}
            else:
                for args, expected in spec["cases"]:
                    call = spec["name"] + "(" + ", ".join(_r(a) for a in args) + ")"
                    buf = io.StringIO()
                    old = sys.stdout
                    sys.stdout = buf
                    try:
                        got = fn(*copy.deepcopy(args))
                        ok = _equal(got, expected)
                        results.append({"ok": ok, "label": call, "expected": _r(expected), "got": _r(got)})
                    except BaseException as e:  # noqa
                        fe = _format_error(e)
                        results.append({"ok": False, "label": call, "expected": _r(expected), "got": fe["type"] + ": " + fe["message"], "error": fe["type"]})
                    finally:
                        sys.stdout = old

    elif kind == "asserts":
        display, _, err, ns = _exec(code)
        output_shown = display
        if err:
            error = err
        else:
            for case in spec["cases"]:
                local = dict(ns)
                buf = io.StringIO()
                old = sys.stdout
                sys.stdout = buf
                try:
                    if case.get("setup"):
                        exec(case["setup"], local)
                    got = eval(case["expr"], local)
                    ok = _equal(got, case["expected"])
                    results.append({"ok": ok, "label": (case.get("setup", "") + "\n" + case["expr"]).strip(), "expected": _r(case["expected"]), "got": _r(got)})
                except BaseException as e:  # noqa
                    results.append({"ok": False, "label": (case.get("setup", "") + "\n" + case["expr"]).strip(), "expected": _r(case["expected"]), "got": type(e).__name__ + ": " + str(e), "error": type(e).__name__})
                finally:
                    sys.stdout = old

    problems = _static_checks(code, spec)
    passed = (error is None) and results and all(r["ok"] for r in results) and not problems
    return json.dumps({"passed": bool(passed), "results": results, "error": error,
                       "output": output_shown, "problems": problems, "kind": kind})


def _label_inputs(t):
    if t.get("inputs"):
        return "Eingaben: " + ", ".join(str(x) for x in t["inputs"])
    return "Programmausgabe"
