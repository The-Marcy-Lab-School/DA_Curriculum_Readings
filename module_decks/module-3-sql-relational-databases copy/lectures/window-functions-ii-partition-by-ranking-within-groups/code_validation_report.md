# Code Execution Validation — Window Functions II: PARTITION BY & Ranking Within Groups

**Result: 4 of 4 `code` slides PASS in Pass A. 4 of 4 cells PASS in Pass B. Zero
failures, zero skips, zero Pass A/Pass B disagreements.**

## Environment

Real PostgreSQL, not a simulation: a throwaway `postgres:16-alpine` Docker
container (`m3_day8_validate`, host port 55438), torn down after the run. Every
`code` slide is `language: sql`, executed through `psql` with
`-v ON_ERROR_STOP=1`.

## Cumulative state setup (this module's decks build one database across days)

A slide's SQL here is only meaningful against the database this module has been
building since its `psql` lesson, so validation began by replaying **every prior
lecture's own `code` slides in lesson order** (Days 2 through 7), skipping each
day's deliberate `expected_error` slides (Day 2's `NotNullViolation` demo and
Day 4's `GroupingError` demo — those are validated by their own decks, and
replaying them would abort the setup).

Replay exit code 0. Resulting baseline state, confirmed by query before any
Day 8 code ran:

```
5 restaurants, 4 inspections, 4 violations
```

which matches the documented cumulative state exactly (camis 1001-1005;
Corner Bistro 3 inspections / 3 violations, Green Leaf Cafe 1 / 1, Sunset
Diner + Harbor Grill + New Spot NYC 0 / 0).

## Pass A — per-slide, isolated

Each slide's `code` field (never `blanked_code`) was written to its own file
and run in **its own separate `psql` session** against the shared database, in
slide order.

| Slide | Title | `expected_error` | Exit | Result |
|---|---|---|---|---|
| 8 | Two More Restaurants, So Every Borough Has a Group | — | 0 | **PASS** (`INSERT 0 2`) |
| 9 | Yesterday's Ranking, Now With Boroughs Showing | — | 0 | **PASS** (7 rows) |
| 12 | Ranking Restarts in Each Borough | — | 0 | **PASS** (7 rows) |
| 17 | Top-N Per Group Needs a CTE Wrapper | — | 0 | **PASS** (4 rows) |

No slide sets `skip_validation`, so nothing was skipped.

## Pass B — whole assembled instructor deliverable, one continuous session

The database was dropped and rebuilt from the Days 2-7 replay, then every
`sql` fenced block was extracted from the generated
`TERMINAL_WORKSHEET_INSTRUCTOR.md` **in file order** and run top to bottom in a
**single continuous `psql` session** (the terminal-worksheet equivalent of a
notebook's "Restart & Run All").

4 blocks extracted, 4 executed, session exit code 0. Every cell produced
byte-identical output to its Pass A run. **No Pass A / Pass B disagreement** —
no cell depends on hidden state that per-slide validation would have missed.

## Verified output (the numbers the slides and speaker notes actually claim)

**Slide 9 — one flat ranking over all 7 rows:**

```
 Green Leaf Cafe | Brooklyn  |  1 |   2
 Harbor Grill    | Brooklyn  |  0 |   3
 Flatbush Fry    | Brooklyn  |  0 |   3
 Corner Bistro   | Manhattan |  3 |   1
 New Spot NYC    | Manhattan |  0 |   3
 Sunset Diner    | Queens    |  0 |   3
 Bayside Grill   | Queens    |  0 |   3
```

Confirms the slide-10 check-for-understanding answer: **5 rows share `rnk = 3`.**

**Slide 12 — the same query with `PARTITION BY boro`:**

```
 Green Leaf Cafe | Brooklyn  |  1 |   1
 Harbor Grill    | Brooklyn  |  0 |   2
 Flatbush Fry    | Brooklyn  |  0 |   2
 Corner Bistro   | Manhattan |  3 |   1
 New Spot NYC    | Manhattan |  0 |   2
 Sunset Diner    | Queens    |  0 |   1
 Bayside Grill   | Queens    |  0 |   1
```

Confirms all three claims the speaker notes make out loud: Brooklyn ranks
1/2/2, Manhattan 1/2, Queens 1/1; **7 rows in, 7 rows out** (`PARTITION BY`
never changes the row count); and the tie rule still applies *inside* a
partition. Confirms the slide-13 quick-fire answer: **4 rows have `rnk = 1`,
not 3** — because Queens ties at the top.

**Slide 17 — the CTE wrapper filtering to each borough's winner:**

```
 Green Leaf Cafe | Brooklyn  |  1 |   1
 Corner Bistro   | Manhattan |  3 |   1
 Sunset Diner    | Queens    |  0 |   1
 Bayside Grill   | Queens    |  0 |   1
```

Exactly the 4 rows the notes narrate.

## Additional claim checks (narration/notes accuracy, run separately)

Every non-obvious behavioral claim this deck asserts was executed for real
rather than asserted from memory:

| Claim (where it appears) | Real result | Verdict |
|---|---|---|
| `WHERE rnk = 1` in the same SELECT that computes `rnk` fails (slide 17 notes) | `ERROR: column "rnk" does not exist` | **Confirmed**, and the error text matches the notes verbatim |
| `HAVING` on a window function fails the same way (slides 15 and 17 notes) | `ERROR: window functions are not allowed in HAVING` | **Confirmed** |
| `ORDER BY` before `PARTITION BY` is a syntax error, not a style preference (slide 12 `domain_note`) | `ERROR: syntax error at or near "PARTITION"` | **Confirmed** — the wording "required, not a style preference" is accurate |
| `GROUP BY boro` collapses the table to 3 rows (slide 14 compare_contrast, left panel) | 3 rows: Brooklyn 3, Manhattan 2, Queens 2 | **Confirmed** |

## Re-validation after QA findings were applied

Every `code` slide was re-run — Pass A and Pass B both, on a freshly rebuilt
database — **after** the QA subagents' findings were applied (explicit `AS tv` /
`AS rnk` aliases plus a naming comment added for accessibility, and slide 17
rewrapped to `SELECT *, RANK() OVER (PARTITION BY boro` so its line break
matches slide 12's identical construct). All 4 slides still PASS in both passes,
with byte-identical output to the pre-fix run — the rewrites are cosmetic to the
result set, not to the semantics.

## Teardown

`docker stop` / `docker rm` on `m3_day8_validate`. No leftover container, and
no other running container was touched.
