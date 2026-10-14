# Code Execution Validation — Cumulative Recall (Module 3, Day 12)

Validated 2026-08-23 against real PostgreSQL 16 (`postgres:16-alpine` in a
throwaway Docker container, `m3_day12_validate`), **re-run after QA fixes
changed two code slides' actual SQL** (the materialized-view `INSERT` gained
an explicit column list; the `COALESCE` query was reformatted to one clause
per line) — this replaces the pre-fix validation report the original build
produced, which reflected an earlier version of this deck.

## Cumulative setup

This deck's queries assume the `nyc_restaurants` database the cohort has
been building since early in the module. Every prior lecture day's own
`code` slides (Days 2-10) were replayed first, in calendar order, skipping
each day's `expected_error` slides. Day 11's lab is correctly excluded — it
used a separate, standalone database and never touched `nyc_restaurants`.
Resulting baseline, confirmed by direct query: 7 restaurants, 4 inspections
(with `score`/`grade`), 5 violations, materialized view `restaurant_totals`
current.

## Pass A — per-slide, isolated — all 5 PASS

| # | Slide | Result |
|---|---|---|
| 1 | Only `LEFT JOIN` Finds What Isn't There | **PASS** — 5 rows, exactly Flatbush Fry, Bayside Grill, New Spot NYC, Harbor Grill, Sunset Diner, matching the deck's claimed list. |
| 2 | It Ran Clean. It's Also Wrong. | **PASS** — Corner Bistro `insp=4` (inflated by fan-out), Green Leaf Cafe `1`, five restaurants `0`. Sum = 5, matching the deck's "summed to five" claim; real `inspections` table total is 4. |
| 3 | `COALESCE` Doesn't Find a Value | **PASS (reformatted query re-verified)** — 4 rows: Corner Bistro `pts=12/rnk=1`, Green Leaf Cafe `pts=7/rnk=2`, and Corner Bistro's own two other, unscored inspections both `pts=0/rnk=3`. Confirms the deck's careful phrasing ("two never-scored **inspections**", not "restaurants") is accurate — both zero-score rows belong to Corner Bistro, not two different restaurants. |
| 4 | A Stored View Keeps Answering From Before | **PASS (reformatted `INSERT` re-verified)** — view reads `tv=1`, insert lands (now with an explicit column list), view still reads `tv=1` before refresh, `REFRESH` runs, view reads `tv=2`. |
| 5 | One `COUNT(*)` Would Have Caught It in Seconds | **PASS** — `truth=4`; corrected breakdown Corner Bistro `3`, Green Leaf Cafe `1`, rest `0` (3+1=4, reconciles against the real table total). |

## Pass B — whole assembled instructor worksheet, one continuous session

All 5 SQL blocks extracted from the regenerated
`TERMINAL_WORKSHEET_INSTRUCTOR.md` in file order and run top to bottom in one
shared `psql` session against a freshly replayed baseline. **Result: exit
code 0, byte-identical output to Pass A on all 5 blocks. No disagreement.**

## Additional claim verification (beyond the `code` fields)

Three claims asserted only in speaker notes or a `check_understanding`
were executed and confirmed, since an instructor is expected to run them
live:

1. **"Swap the `violations` join to `INNER` and it returns zero rows"**
   (slide 1's notes) — confirmed: `0 rows`.
2. **"Swap both joins to `INNER` and Corner Bistro still says 4"** (slide
   2's misconceptions note) — confirmed: Corner Bistro `4`, Green Leaf
   Cafe `1`.
3. **A `LEFT JOIN` on the COALESCE slide would swell the rank-3 tie from 2
   rows to 7** — this specific number was added during QA and independently
   verified for real before being written: the `LEFT JOIN` variant returns
   **9 total rows**, with **7 tied at `rnk=3`** (the 5 never-inspected
   restaurants plus Corner Bistro's own 2 unscored inspections). An earlier
   draft of this note claimed "five," which real execution disproved —
   corrected before shipping, not left as a latent inaccuracy.
4. **`WHERE grade <> 'A'` returns 1 row, not the naively-expected 3`** (the
   new evaluate-level check_understanding fact-check) — confirmed: exactly
   1 row (the single B-graded inspection); the two ungraded (`NULL`) rows
   are silently excluded by three-valued logic, exactly as the deck claims.

## No FAILs.

Every specific numeric claim in this deck — including two introduced or
corrected during this session's own QA pass, not just the original
content — was independently confirmed against real Postgres output.

## Teardown

`docker stop m3_day12_validate` — container removed (`--rm`); no state left
behind. `docker ps -a --filter name=m3_` confirmed clean afterward.
