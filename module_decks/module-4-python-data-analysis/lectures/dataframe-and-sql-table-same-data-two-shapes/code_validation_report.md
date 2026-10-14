# Code Validation Report

**Deck:** DataFrame and SQL Table: Same Data, Two Shapes
**Spec:** `modules/module-4-python-data-analysis/lectures/dataframe-and-sql-table-same-data-two-shapes/deck_spec.yaml`
**Module:** Module 4: Python Data Analysis — Lesson 1 (Day 1)
**Validated:** 2026-08-26 (re-run)

> **This report supersedes the earlier 2026-08-26 run.** The deck changed after that
> run in three ways: the dataset was deliberately reordered so its first five rows match
> slide 7's table, the `read_csv` path moved from `"data/nyc_311_sample.csv"` to
> `"../../data/nyc_311_sample.csv"`, and all three `starter_code` blocks were rewritten
> around SQL-to-pandas translation. Everything below was re-executed from scratch against
> the current files; nothing is carried over. **Finding 1 of the earlier report (slide 7's
> table not matching `df.head()`) is now resolved** — see Factual verification 2.

## Environment

| Item | Value |
| --- | --- |
| Interpreter | `.venv/bin/python` |
| Python | 3.13.3 |
| pandas | **2.2.3** |
| Dataset | **real** `modules/module-4-python-data-analysis/data/nyc_311_sample.csv` (no synthetic data used) |
| Dataset snapshot | md5 `f685bd075a5979001e96737e07835d13`, 1264 bytes, 15 rows, 7 columns |

**No SQL/Docker/PostgreSQL validation was required.** All three `code` slides are
`language: python`. The deck contains no SQL slides and no `bash` slides, so there is no
non-Python code path to exercise. No slide sets `expected_error`, and no slide sets
`skip_validation` — **nothing was skipped**.

**Slide numbering note:** slide numbers below are positions in the authored
`deck_spec.yaml` (28 slides). The rendered `.pptx` inserts answer-reveal slides and a
`blanked_code` reveal slide automatically, so rendered positions differ. Note these
positions shifted since the previous run (the code slides were 9/10/16, now 10/11/18).

---

## Relative-path verification — PASS

The critical item for this re-run. The deck's `read_csv` path is now
`"../../data/nyc_311_sample.csv"`, which claims to resolve from where a student's
notebook actually sits.

The real export layout was **reconstructed on disk**, not reasoned about:

```
code_along_export/student/module-4-python-data-analysis/
├── data/
│   └── nyc_311_sample.csv          <- copy of the real module dataset
└── lectures/
    └── dataframe-and-sql-table-same-data-two-shapes/
        └── (notebook + code run from here)
```

Both passes were executed with the working directory set to
`.../lectures/dataframe-and-sql-table-same-data-two-shapes/`.

**Verdict: `../../data/nyc_311_sample.csv` genuinely resolves.** Captured directly:

```
cwd: .../code_along_export/student/module-4-python-data-analysis/lectures/dataframe-and-sql-table-same-data-two-shapes
abs resolve of ../../data/nyc_311_sample.csv -> .../code_along_export/student/module-4-python-data-analysis/data/nyc_311_sample.csv
exists: True
```

The two `..` hops walk `<slug>` → `lectures/` → `<module-slug>/`, landing beside `data/`.
This is correct.

**Negative control also confirmed.** Slide 10's notes promise that anyone who types
`data/` alone gets a `FileNotFoundError`, and that this is the only path problem the day
should produce. Executed from the same directory:

```
FileNotFoundError as documented: [Errno 2] No such file or directory: 'data/nyc_311_sample.csv'
```

The scripted line is accurate.

---

## Summary

| Slide | Title | Pass A (isolated) | Pass B (shared session) |
| --- | --- | --- | --- |
| 10 | The Same Rows, Now **In Your Own Memory** | **PASS** | **PASS** |
| 11 | Every Column Has **One Type**, Just Like SQL | **PASS**\* | **PASS** |
| 18 | A `WHERE` Clause Is Just a **True/False Mask** | **PASS**\* | **PASS** |

\* Raises `NameError: name 'df' is not defined` when executed with no preceding context,
purely because the snippet continues a code-along begun on slide 10. This is expected,
by-design cross-cell continuity, **not a bug** — see the Pass A section.

**No Pass A vs. Pass B disagreement.** Every cell that passed in isolation also passed in
the shared session, and no cell depended on hidden state beyond the documented code-along
sequence.

**Overall: 3/3 PASS, 0 FAIL, 0 SKIPPED.**

One non-blocking content finding is recorded at the end of this report. It is not a
code-execution failure.

---

## Pass A — per-slide, isolated

Each slide's `code` field was run in its own fresh `python` process with a 60-second
timeout, from the reconstructed working directory. No run came near the timeout. The
`blanked_code` field was never executed (slide 18 has one), and neither was
`starter_code` (all three slides have one) — both are deliberately incomplete
student-facing variants.

### Slide 10 — The Same Rows, Now **In Your Own Memory** — PASS

```python
import pandas as pd

# The same 311 rows the SQL table just showed
df = pd.read_csv("../../data/nyc_311_sample.csv")

print(df.head())
```

Exit code 0, clean stderr. Captured stdout:

```
   unique_key created_date agency  ...        descriptor        borough  status
0    47002094   2020-07-27   NYPD  ...               NaN      MANHATTAN  Closed
1    59484263   2023-11-18    DEP  ...  Dirty Water (WE)  STATEN ISLAND  Closed
2    59484344   2023-11-18   NYPD  ...  Blocked Sidewalk  STATEN ISLAND  Closed
3    69530202   2026-06-29   NYPD  ...  Loud Music/Party         QUEENS  Closed
4    69530216   2026-06-29   NYPD  ...      Loud Talking          BRONX  Closed

[5 rows x 7 columns]
```

### Slide 11 — Every Column Has **One Type**, Just Like SQL — PASS

```python
print(df.dtypes)

# A date arrives as text until you actually parse it
dates = pd.to_datetime(df["created_date"])
print(dates.dtype)
```

Run with **no preceding context**, this raises:

```
Traceback (most recent call last):
  File "slide2.py", line 1, in <module>
    print(df.dtypes)
          ^^
NameError: name 'df' is not defined
```

**This is not a bug.** The slide is the second cell of a continuous code-along; `df` and
the `pd` import are established on slide 10, exactly as a real notebook session would.
Per-slide isolation is structurally unable to see that state, which is precisely why
Pass B exists — **Pass B is the authoritative check for this slide**, and it passes there
(exit 0, output below).

### Slide 18 — A `WHERE` Clause Is Just a **True/False Mask** — PASS

```python
bronx = df[df["borough"] == "BRONX"]

print(len(bronx), "Bronx requests")
print(bronx["complaint_type"].value_counts())
```

Same situation as slide 11 — in isolation it raises
`NameError: name 'df' is not defined` solely because `df` comes from slide 10. **Pass B
is the authoritative check for this slide**, and it passes there.

Note the deck **does not** re-declare `df` on slides 11 or 18, and it should not — the
notebook is one continuous session, and re-reading the CSV on every slide would
contradict the lesson's own "gone when you restart the kernel" framing.

---

## Pass B — whole instructor notebook, one continuous session

Source: `Module4_Lesson1_dataframe-and-sql-table-same-data-two-shapes_INSTRUCTOR.ipynb`
(regenerated; confirmed to carry the new `../../data/` path and no occurrence of the old
bare `data/` path).

Every `cell_type == "code"` cell was extracted in file order (plain JSON read of
`cells[*].source`; no `nbformat`/`nbclient` involved) and executed top to bottom in a
**single shared namespace**, from the reconstructed working directory — equivalent to a
real "Restart & Run All." No cell was skipped, and execution was configured never to stop
early on failure, so a cascading failure would be visible as exactly that.

The notebook contains **3 code cells**, matching the deck's 3 `code` slides one-for-one,
all carrying the real `code` (never `blanked_code`, never `starter_code`) — correct for
the instructor copy.

### Cell 1 — slide 10 — PASS

```
   unique_key created_date agency  ...        descriptor        borough  status
0    47002094   2020-07-27   NYPD  ...               NaN      MANHATTAN  Closed
1    59484263   2023-11-18    DEP  ...  Dirty Water (WE)  STATEN ISLAND  Closed
2    59484344   2023-11-18   NYPD  ...  Blocked Sidewalk  STATEN ISLAND  Closed
3    69530202   2026-06-29   NYPD  ...  Loud Music/Party         QUEENS  Closed
4    69530216   2026-06-29   NYPD  ...      Loud Talking          BRONX  Closed

[5 rows x 7 columns]
```

### Cell 2 — slide 11 — PASS

```
unique_key         int64
created_date      object
agency            object
complaint_type    object
descriptor        object
borough           object
status            object
dtype: object
datetime64[ns]
```

### Cell 3 — slide 18 — PASS

```
3 Bronx requests
complaint_type
Noise - Residential        2
Noise - Street/Sidewalk    1
Name: count, dtype: int64
```

**Result: 3/3 cells PASS.** A full "Restart & Run All" of the instructor notebook
completes cleanly with no exceptions and no warnings.

---

## Student notebook blanking check

Source: `Module4_Lesson1_dataframe-and-sql-table-same-data-two-shapes_STUDENT.ipynb`
**Not executed** — the rewritten starter code is deliberately incomplete and would raise
by design.

**Verdict: genuinely blanked. No answer leakage.** Re-checked against the rewritten
`starter_code` blocks.

All 3 code cells contain `# TODO:` markers (6 in total) and `...` placeholders in place of
the real answers:

| Cell | Slide | `# TODO:` present | `...` placeholder | Complete answer present |
| --- | --- | --- | --- | --- |
| nb code cell 1 | 10 | yes | yes | no |
| nb code cell 2 | 11 | yes | yes | no |
| nb code cell 3 | 18 | yes | yes | no |

Every load-bearing answer expression is absent from the student notebook's code cells
**and** from its markdown cells (grep count `0` for each, against a matching count in the
instructor copy):

| Token | STUDENT | INSTRUCTOR |
| --- | --- | --- |
| `df.head()` | 0 | 1 |
| `df.dtypes` | 0 | 2 |
| `pd.to_datetime` | 0 | 3 |
| `value_counts` | 0 | 1 |
| `len(bronx)` | 0 | — |
| `== "BRONX"` | 0 | — |

Instructor-only material is correctly omitted: **zero** occurrences of `[SCRIPT]`,
`[ACTIVITY]`, `[MISCONCEPTIONS]`, `[SOURCES]`, or `[TECHNIQUE]` anywhere in the student
copy (the instructor copy has 10 / 2 / 3 respectively). No answer-key banner appears.

The rewritten starter code is well-aimed at the lesson's SQL-to-pandas framing — each TODO
states the SQL it is asking the Fellow to translate (`SELECT * ... LIMIT 5`,
`WHERE borough = 'BRONX'`, `COUNT(*)`, `GROUP BY complaint_type`) without naming the pandas
method. The `pd.read_csv(...)` line is correctly left intact as given scaffolding, and
`print(dates.dtype)` is left as a scaffold on cell 2 while the assignment above it is blanked.

Slide 18 carries **both** `blanked_code` and `starter_code`. The student notebook correctly
used `starter_code`, matching the schema's documented priority order. The `____` blank form
does not appear in the student notebook, which is expected — the blank belongs to the
slide's rendered fill-in-the-blank moment, not the notebook.

Note the student cells use `...` (Python's real `Ellipsis`), so an eager Fellow who runs a
cell before filling it in gets a survivable no-op or a clear `TypeError` rather than a
confusing `SyntaxError`. One consequence worth knowing: cell 3's
`bronx = ...` followed by an unfilled `...` will not raise at all, so a Fellow who runs it
blank sees silence rather than an error nudging them to fill it in.

---

## Factual verification

All five claims were checked by executing code and reading the actual result, against the
real dataset on pandas 2.2.3.

### 1. `df` is 15 rows × 7 columns — CONFIRMED

`df.shape` → `(15, 7)`.

### 2. `df.head()`'s five `unique_key` values match slide 7's table exactly, in order — CONFIRMED

This is the deck's central "same rows, both shapes" claim, and it now holds.

```
df.head() unique_key list = [47002094, 59484263, 59484344, 69530202, 69530216]
matches expected: True
```

Cross-checked against slide 7's authored table rows:

| Position | Slide 7 table | `df.head()` actual | Match |
| --- | --- | --- | --- |
| 0 | `47002094` | `47002094` | yes |
| 1 | `59484263` | `59484263` | yes |
| 2 | `59484344` | `59484344` | yes |
| 3 | `69530202` | `69530202` | yes |
| 4 | `69530216` | `69530216` | yes |

The other three columns slide 7 displays (`created_date`, `complaint_type`, `borough`)
also match row-for-row. **The earlier run's Finding 1 is resolved** — the reorder did
exactly what it was meant to do, and slide 10's scripted line ("these are the same five
rows as the previous slide, in the same order") is now accurate as delivered.

### 3. `unique_key` is `int64`, the other six are `object`, and `created_date` parses to `datetime64[ns]` — CONFIRMED

```
unique_key         int64
created_date      object
agency            object
complaint_type    object
descriptor        object
borough           object
status            object
dtype: object
```

Programmatic assertions: `unique_key is int64: True`; `other six all object: True`;
`pd.to_datetime(df["created_date"]).dtype = datetime64[ns]`.

The slide's caution that this label is version-dependent (`object` on pandas 2.x, `str` on
pandas 3.0+) is correctly scoped and could not be exercised here — only 2.2.3 is installed.
Slide 8's table wisely says "Text" rather than a version-specific label.

### 4. The BRONX filter gives exactly 3 rows, `Noise - Residential` = 2 and `Noise - Street/Sidewalk` = 1 — CONFIRMED

```
3 Bronx requests
complaint_type
Noise - Residential        2
Noise - Street/Sidewalk    1
Name: count, dtype: int64
```

Exactly 3 rows, exactly two complaint types, with the stated counts and nothing else. This
matches slide 18's note verbatim ("three Bronx rows, and a count per complaint type").

### 5. First row's `descriptor` — **NOT CONFIRMED AS STATED.** pandas converts `N/A` to `NaN`

The claim under test was that `descriptor` on the first `df.head()` row is the **literal
string** `N/A`. It is not. Exactly what was captured:

```
repr  = nan
type  = float
isna  = True
== 'N/A' : False
raw text in file, first data line descriptor field:  N/A
'N/A' in pandas default NA values: True
descriptor column NaN count: 2
rows whose descriptor is NaN (unique_key): [47002094, 47005213]
with keep_default_na=False -> repr: 'N/A'
```

The CSV on disk genuinely contains the three characters `N/A`, but `N/A` is a member of
pandas' default `STR_NA_VALUES` set, so `read_csv` converts it to a float `NaN` during
parsing. The value the Fellow sees printed is a bare `NaN`, and `v == "N/A"` is `False`.
Two of the fifteen rows are affected (`47002094` and `47005213`), and the first of those is
row 0 of `df.head()` — so this is on screen in the very first code-along output of the day.

Passing `keep_default_na=False` would preserve the literal `'N/A'`, confirming the
conversion is pandas' doing and not a defect in the file.

**Action for the author:** the deck currently says nothing about this either way — a grep
for `N/A` and `NaN` across `deck_spec.yaml` returns no match outside the slide-7 table data.
See the non-blocking finding below. No code change is needed; only the instructor notes.

---

## Non-blocking finding (content, not code)

Not an execution failure; reported for the author's judgment and **not** fixed here.
`deck_spec.yaml` was not modified.

### The first code-along output prints a bare `NaN` that no note explains

As verified above, the very first line of the very first code-along output shows `NaN`
under `descriptor` for row `47002094`. Slide 10's notes walk the room through that output
in detail — "point at the output and say it plainly" — but never mention the `NaN`, and
slide 11's notes do not either.

This is worth a sentence for two reasons. First, it will draw a question: it is the only
visually odd thing in an output the instructor is explicitly directing everyone to stare
at. Second, it is genuinely on-topic for this deck's thesis — the CSV holds the characters
`N/A`, the database held whatever it held, and pandas made a *guess* on the way in and
turned it into a float `NaN`. That is the same "the type information is not in the file"
point slide 11 is already built around, arriving one slide early and for free.

A suggested addition to slide 10's notes, if wanted: note that `N/A` in the file becomes
`NaN` in the DataFrame because pandas treats `N/A` as a missing-value marker by default,
and that this is another thing the CSV hop cost us — the database knew whether that field
was NULL or the literal text "N/A", and the CSV no longer does.

One thing checked and found *not* to be a problem: slide 10's note claims `.head()` "shows
all seven columns." In a plain 80-column terminal pandas elides `complaint_type` behind
`...`, but in a Jupyter notebook (`display.max_columns = 20`) all seven do print, wrapped
across two blocks. Since Fellows run this in a notebook, the note is accurate as written.
