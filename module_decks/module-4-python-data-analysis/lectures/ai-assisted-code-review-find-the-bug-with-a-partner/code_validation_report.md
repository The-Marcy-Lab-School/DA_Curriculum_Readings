# Code Execution Validation — AI-Assisted Code Review: Find the Bug, With a Partner

**Deck:** `modules/module-4-python-data-analysis/lectures/ai-assisted-code-review-find-the-bug-with-a-partner/deck_spec.yaml`
**Module 4, Lesson 4 (Day 4)**
**Validated:** 2026-09-10
**Result: 1/1 validated slide PASS (Pass A), 1 slide skipped intentionally; 1/1 notebook cell PASS (Pass B). No bugs found.**

---

## Environment actually used

| Component | Real observed value |
|---|---|
| Database | PostgreSQL 16 (Docker `postgres:16-alpine`) |
| Container | Docker `m4d3pg` — **reused as-is** from the Day 3 deck's own validation run (already running, holding the identical `service_requests` table loaded from the same `modules/module-4-python-data-analysis/data/nyc_311_sample.csv`); only read (`SELECT`) queries were run against it, nothing was modified |
| Connection URL | `DATABASE_URL="postgresql://fellow:fellowpass@localhost:55433/nyc311"` |
| Table | `service_requests`, 15 rows |
| Interpreter | `.venv-content-validation/bin/python` |
| psycopg2 | psycopg2-binary (already installed in `.venv-content-validation`) |

`.venv` (the deck-generator tool's own environment) was never used.

Deck spec contains **2 `code` slides**, both `language: python`, both `code_along: false`
(this lesson is a partner code-review/discussion exercise, not a typing exercise — see
`qa_report.md`'s note on the "No hands-on activity" lint finding). One (`skip_validation: true`)
is intentionally not run for real.

---

## Pass A — per-slide, isolated

### Slide "The AI's Draft: `get_requests_by_borough()`" — **SKIPPED, intentional**

`skip_validation: true`, reason given on the slide: an intentionally insecure
demonstration snippet (hardcoded credentials, unreleased connection, string-built SQL
vulnerable to injection) meant to be read/traced with a partner, never executed. Its
hardcoded connection string (`postgresql://user:pass@localhost/nyc311`, no port) also
doesn't match any real reachable database.

**Still independently verified as a factual claim**, since the deck's poll slide
("Predict it: `borough` is set to `Queens' OR '1'='1`. What does the AI's original
function return?") asserts a specific behavior. Ran the exact vulnerable
f-string-built query above (safely, against the disposable `m4d3pg` container, not
executed as the slide's own runnable "code") and confirmed it actually returns **all
15 rows** in the table — matching option C, "Every single row in the whole table," the
slide's own answer. Confirms the poll's answer is factually correct, not just
plausible.

### Slide "The Fix: Same Function, Three Real Changes" — **PASS**

- **Names injected:** none beyond the standard `os`/`psycopg2` imports already shown
  earlier in the deck's own code slides — fully self-contained otherwise.
- **Real output** (called with `borough="QUEENS"`):
  ```
  3 rows returned
  (69530202, datetime.datetime(2026, 6, 29, 0, 0), 'NYPD', 'Noise - Residential', 'Loud Music/Party', 'QUEENS', 'Closed')
  (69530206, datetime.datetime(2026, 6, 30, 0, 0), 'NYPD', 'Noise - Residential', 'Loud Music/Party', 'QUEENS', 'Closed')
  (69530208, datetime.datetime(2026, 6, 29, 0, 0), 'NYPD', 'Noise - Residential', 'Loud Music/Party', 'QUEENS', 'Closed')
  ```
- Confirmed the `try`/`finally: conn.close()` genuinely releases the connection (a
  fresh `psycopg2.connect()` immediately afterward succeeds without exhausting any
  connection limit).
- No `expected_error` set; ran clean.

---

## Pass B — whole assembled instructor deliverable, one continuous session

Extracted both code cells from `Module4_Lesson4_ai-assisted-code-review-find-the-bug-with-a-partner_INSTRUCTOR.ipynb`
in file order (cell 5 = the draft, cell 9 = the fix). Per the skill's own Pass B rule,
cell 5 was **skipped entirely** (its slide had `skip_validation: true`) — only cell 9
was run, in the same session/namespace a real "Restart & Run All" would use.

- **Cell 9 — PASS.** Ran clean with `borough="BRONX"` → 3 rows returned. No dependency
  on cell 5's (skipped) state — the fix's code is fully self-contained.

No disagreement between Pass A and Pass B for the one validated cell.

---

## Summary

No bugs found. The one intentionally-skipped slide's factual claim (what the
injection actually returns) was independently verified anyway, since it's asserted on
a graded-adjacent poll slide. The fix's connection-handling and parameterized-query
changes both behave exactly as the deck's own line-by-line `compare_contrast` slide
describes.
