# Code Execution Validation — Connecting Two Ways, psycopg2 and SQLAlchemy to pandas

**Deck:** `modules/module-4-python-data-analysis/lectures/connecting-two-ways-psycopg2-and-sqlalchemy-to-pandas/deck_spec.yaml`
**Module 4, Lesson 2 (Day 2)**
**Validated:** 2026-08-28
**Result: 4/4 slides PASS (Pass A), 4/4 notebook cells PASS (Pass B), 3/3 speaker-note claims CONFIRMED. No bugs found.**

---

## Environment actually used

| Component | Real observed value |
|---|---|
| Database | PostgreSQL **16.15** on aarch64-unknown-linux-musl, compiled by gcc (Alpine 15.2.0) 15.2.0, 64-bit |
| Container | Docker `m4d2pg`, image `postgres:16-alpine`, host port `55432` → container `5432` (throwaway; not modified by this validation) |
| Connection URL | `DATABASE_URL="postgresql://fellow:fellowpass@localhost:55432/nyc311"` (set on every run, exactly as every `code` slide expects) |
| Table | `service_requests`, **15 rows**, loaded from `modules/module-4-python-data-analysis/data/nyc_311_sample.csv` |
| Declared column types | `unique_key integer`, `created_date timestamp without time zone`, `agency`/`complaint_type`/`descriptor`/`borough`/`status` `character varying` |
| Interpreter | `.venv-content-validation/bin/python` — **Python 3.13.3** |
| pandas | **3.0.5** |
| psycopg2 | **2.9.12** (`dt dec pq3 ext lo64`) — psycopg2-binary |
| SQLAlchemy | **2.0.52** |

`.venv` (the deck-generator tool's own environment) was never used, and nothing was
`pip install`ed anywhere during validation.

Deck spec contains **4 `code` slides**, all `language: python`. None carry
`expected_error`; none carry `skip_validation`. The `blanked_code` on slide 4 and the
`starter_code` on all four slides were deliberately **not** validated, per the
methodology — only the real `code` field was run.

---

## Pass A — per-slide, isolated (fresh Python process per slide)

Each slide's own `code` was run in its own process, with only the minimum
earlier-slide state prepended to make it runnable. **The injected names are themselves
a finding**: this deck is a genuine sequential code-along, and three of its four slides
cannot run standalone.

### Slide 1 — "One Connection, One Cursor, **Real Rows**" — **PASS**

- **Names injected:** *none.* Fully self-contained.
- **Real output:**
  ```
  (47002094, datetime.datetime(2020, 7, 27, 0, 0), 'NYPD', 'Homeless Street Condition', None, 'MANHATTAN', 'Closed')
  ```
- Matches the slide's `[SCRIPT]` note exactly: a plain Python tuple, no column names
  anywhere. Note the `None` in the `descriptor` position, which is what a SQL `NULL`
  looks like here before it becomes `NaN` in the DataFrame on the next slide.

### Slide 2 — "Tuples In, a **Real DataFrame** Out" — **PASS**

- **Names injected:** `os`, `psycopg2`, `conn`, `cur`, `sql`, `rows` — supplied by
  re-running slide 1's code verbatim (the cursor must be the *same live cursor* that
  ran the query, since `cur.description` only describes the most recent query).
- **Real output:**
  ```
     unique_key created_date agency  ...        descriptor        borough  status
  0    47002094   2020-07-27   NYPD  ...               NaN      MANHATTAN  Closed
  1    59484263   2023-11-18    DEP  ...  Dirty Water (WE)  STATEN ISLAND  Closed
  2    59484344   2023-11-18   NYPD  ...  Blocked Sidewalk  STATEN ISLAND  Closed

  [3 rows x 7 columns]
  datetime64[us]
  ```
- The printed dtype is `datetime64[us]`, exactly what the slide's `[SOURCES]` note
  claims. See Claim 1 below.

### Slide 3 — "The Same Question, in **One Line of pandas**" — **PASS**

- **Names injected:** `os`, `pd`, `sql`, and `df` — supplied by re-running slides 1 and
  2 (slide 3's final line compares against slide 2's `df`, so slide 2's whole result is
  a hard prerequisite, not just an import).
- **Real output:**
  ```
     unique_key created_date agency  ...        descriptor        borough  status
  0    47002094   2020-07-27   NYPD  ...               NaN      MANHATTAN  Closed
  1    59484263   2023-11-18    DEP  ...  Dirty Water (WE)  STATEN ISLAND  Closed
  2    59484344   2023-11-18   NYPD  ...  Blocked Sidewalk  STATEN ISLAND  Closed

  [3 rows x 7 columns]
  Same as psycopg2? True
  ```
- Printed `True`, which is what the slide's `[ACTIVITY]` note tells the instructor to
  expect from the whole room. See Claim 2 below.

### Slide 4 — "Open It in a `try`, and **Always** Close It" — **PASS**

- **Names injected:** `os`, `psycopg2`, and `sql` (the query string defined back on
  slide 1). This slide re-opens its own `conn` and its own `cur`, so it needs no live
  connection state.
- **Real output:**
  ```
  5 rows, connection closed
  ```

**Pass A summary: 4 PASS / 0 FAIL / 0 skipped.** No warnings emitted on any slide.

---

## Pass B — whole assembled instructor notebook, one continuous session

Source: `Module4_Lesson2_connecting-two-ways-psycopg2-and-sqlalchemy-to-pandas_INSTRUCTOR.ipynb`
Every code cell's `source` was extracted in file order by plain JSON parsing, then
`exec`'d top to bottom in **one shared namespace** — a real "Restart & Run All."
The runner was written to never stop early on a failure; every cell would have been
attempted regardless. Warnings were captured with `warnings.simplefilter("always")`.

The notebook contains **exactly 4 code cells**, one per `code` slide, in lesson order,
each matching that slide's `code` field verbatim.

| Cell | Corresponding slide | Result | Output |
|---|---|---|---|
| 1 | One Connection, One Cursor, **Real Rows** | **PASS** | `(47002094, datetime.datetime(2020, 7, 27, 0, 0), 'NYPD', 'Homeless Street Condition', None, 'MANHATTAN', 'Closed')` |
| 2 | Tuples In, a **Real DataFrame** Out | **PASS** | 3-row `head()` table, then `datetime64[us]` |
| 3 | The Same Question, in **One Line of pandas** | **PASS** | 3-row `head()` table, then `Same as psycopg2? True` |
| 4 | Open It in a `try`, and **Always** Close It | **PASS** | `5 rows, connection closed` |

**Pass B summary: 4 PASS / 0 FAIL.** No warnings emitted in the shared session.

**Pass A vs. Pass B disagreement: none.** Every cell that passed in isolation also
passed in the continuous session, and vice versa. Two cross-cell dependencies were
specifically exercised and held up in the real session:

- Cell 2 closes both `cur` and `conn`, and cell 3 still runs afterwards — it builds its
  own SQLAlchemy engine and never touches the dead psycopg2 objects. The deck's own
  `transition` note before cell 3 ("Nobody restarts anything: the `sql` string and the
  `df` from the first half are still needed") is accurate: `sql` and `df` survive, the
  closed connection is irrelevant.
- Cell 4 rebinds `conn`, `cur`, and `rows` on top of the closed/exhausted names from
  cells 1-2 and runs clean.

---

## The three speaker-note claims, checked against real values

All three were probed with a dedicated script against the live container, not inferred.

### Claim 1 — `df["created_date"].dtype` really comes back as a real datetime, not text — **CONFIRMED**

Observed over the live psycopg2 connection:

```
unique_key                 int64
created_date      datetime64[us]
agency                       str
complaint_type               str
descriptor                   str
borough                      str
status                       str
```

- `df["created_date"].dtype` → `dtype('<M8[us]')`, printing as `datetime64[us]`
- `pd.api.types.is_datetime64_any_dtype(...)` → `True`
- first value's Python type → `pandas.Timestamp` (not `str`)

This exactly matches the slide-2 `[SOURCES]` note's claim (`created_date` as
`datetime64[us]`, `unique_key` as `int64`). The lesson's whole pedagogical payoff — the
type survives a connection where it did not survive a CSV — is real and observed.

One accurate side note: slide 2's `[MISCONCEPTIONS]` note says older pandas labels text
columns `object` and newer pandas labels them `str`. On pandas 3.0.5 they print as
`str`, so that note is correct and correctly hedged for whichever pandas a Fellow has.

### Claim 2 — `df.equals(df2)` really prints `True` — **CONFIRMED**

- `df.equals(df2)` → **`True`**
- shapes: `(5, 7)` and `(5, 7)`
- dtype lists identical: `True`
- `df2["created_date"].dtype` → `dtype('<M8[us]')`, same as `df`

The psycopg2-built DataFrame and the `pd.read_sql`/SQLAlchemy DataFrame are genuinely
identical, including the real datetime column — which is what the slide's `[SCRIPT]`
note asserts `equals` is actually checking (shape, column names, every column's type).

### Claim 3 — `with conn:` does NOT close a psycopg2 connection — **CONFIRMED**

Probed with a standalone script:

```
conn.closed before with block : 0
conn.closed after  with block : 0
conn.closed after conn.close(): 1
```

The `with conn:` block completed normally (a `SELECT 1` inside it), and `conn.closed`
was still `0` afterwards. Only the explicit `conn.close()` moved it to `1`. This is
exactly the live demonstration slide 4's `[MISCONCEPTIONS]` note tells the instructor to
run ("print `conn.closed` and watch it print zero") — it works as written on psycopg2
2.9.12.

### Bonus check — the `pd.read_sql`-with-a-raw-psycopg2-connection warning

Not requested, but slide 3's `[MISCONCEPTIONS]` and `[SOURCES]` notes assert a specific
runtime behavior, so it was verified too. Passing a bare psycopg2 connection to
`pd.read_sql` on pandas 3.0.5 **does** succeed and **does** emit exactly the documented
warning:

```
UserWarning: pandas only supports SQLAlchemy connectable (engine/connection) or
database string URI or sqlite3 DBAPI2 connection. Other DBAPI2 objects are not tested.
Please consider using SQLAlchemy.
```

It returned a `(5, 7)` DataFrame with `created_date` still `datetime64[us]`. The note's
framing is accurate: "it ran and only warned" is precisely what a Fellow will see, which
is why the note tells the instructor to demonstrate it. (The note's further claim about
pandas internally falling back to its SQLite code path was not instrumented — only the
user-visible warning and the successful return were observed.)

---

## Student notebook check (read, not run)

Source: `Module4_Lesson2_connecting-two-ways-psycopg2-and-sqlalchemy-to-pandas_STUDENT.ipynb`
12 cells total: 8 markdown, 4 code.

**No answer leakage. All four code cells are genuinely blanked.**

| Student code cell | Slide | `# TODO` markers | `...` placeholders | Static state |
|---|---|---|---|---|
| 1 | One Connection, One Cursor | 2 | 3 | Parses; incomplete |
| 2 | Tuples In, a Real DataFrame Out | 3 | 4 | Parses; incomplete |
| 3 | The Same Question, in One Line of pandas | 2 | 2 | Parses; incomplete |
| 4 | Open It in a `try` | 2 | 1 | `SyntaxError: expected 'except' or 'finally' block` — see note |

Verified mechanically:

- **Zero** student code cells are byte-identical to their instructor counterpart.
- The instructor answers are absent from the student file: it does **not** contain
  `pd.DataFrame(rows`, `d[0] for d in cur.description`, `create_engine(os.environ`,
  `pd.read_sql(sql`, `finally:`, or `conn.close()`.
- **No instructor notes leak through.** The file contains none of `[SCRIPT]`,
  `[MISCONCEPTIONS]`, `[SOURCES]`, `[ACTIVITY]`, or the word "Instructor".
- Every code cell is the slide's `starter_code`, not its `code` — confirming
  `build_notebook.py` picked the blanked variant on all four.
- The markdown scaffolding a student legitimately needs is present and correct:
  objectives, the `scenario`, the `notebook_warmup` prompt + hint, and the four
  `doc_url` links.

**One instructor heads-up, not a bug:** student code cell 4 is not merely incomplete but
syntactically invalid on its own (a `try:` with no `except`/`finally`), so a Fellow who
runs it before filling it in gets `SyntaxError: expected 'except' or 'finally' block`
rather than a `NameError`. That is the correct and unavoidable consequence of blanking
out a `finally:` block, and the error message names the missing piece almost verbatim —
arguably a helpful hint. Worth knowing only so nobody mistakes it for a broken notebook.
The other three cells parse cleanly and would fail at runtime on `Ellipsis`, as intended.

---

## Summary

- **Pass A: 4/4 PASS.** Every `code` slide runs clean against a real PostgreSQL 16.15
  database once its inputs exist. Zero failures, zero skips, zero warnings.
- **Pass B: 4/4 PASS.** The full instructor notebook survives a Restart & Run All in one
  continuous session with no failures and no warnings. No Pass A / Pass B disagreement,
  so no hidden cross-cell-state bug.
- **Sequential dependency is real and correctly ordered.** Slides 2, 3, and 4 each need
  names from earlier slides (`cur`/`rows`/`sql`/`df`/`pd`/`os`/`psycopg2`), and the deck
  presents them in an order where that always works. Only slide 1 is standalone. The
  instructor must run the cells in order and must not restart the kernel mid-lesson —
  which the deck's own transition note before slide 3 already says out loud.
- **All three factual claims in the speaker notes are true as written**, with the real
  observed values recorded above. The `[SOURCES]` notes on slides 2, 3, and 4 that say
  "verified by running this" are accurate — this validation independently reproduced
  each one.
- **The student notebook is clean**: no answers, no instructor notes, all four cells
  genuinely blanked.
- **No bugs found. No fixes required.**

---

## Addendum — re-verified after QA findings were applied (2026-08-29)

Two QA-driven edits landed after the validation above: slide 9 was retitled
(*"One Connection, One Cursor, Real Rows"* → *"A Cursor Is What You Send SQL
Through"*, so the term `cursor` is visibly defined at first use rather than
only named), and slide 20's `starter_code` was removed so the student
notebook shows the same `____` blanks the slide shows. Neither edit touches
any `code` field, so Pass A stands unchanged.

**Pass B was re-run against the regenerated instructor notebook anyway**,
since that file is rebuilt on every `build_deck.py` run: all 4 code cells
extracted in file order and executed top to bottom in one shared namespace
against the same live `m4d2pg` container. **Exit code 0, no exceptions, no
warnings.** The two load-bearing assertions printed exactly as before —
`Same as psycopg2? True` and `5 rows, connection closed`. Also re-confirmed
that the student notebook's slide-20 cell now renders the literal `____:` /
`conn.____()` blanks rather than a separate TODO exercise.
