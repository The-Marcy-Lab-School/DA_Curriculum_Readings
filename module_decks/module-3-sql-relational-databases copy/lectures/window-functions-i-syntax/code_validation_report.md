# Code Validation Report — Window Functions I: Syntax

Validated for real against a live PostgreSQL 16 instance (throwaway
`postgres:16-alpine` Docker container, torn down after). Replayed Day 2's
6 statements, Day 3's 5, Day 4's 4, Day 5's 3, and Day 6's 4 first (skipping
each day's own `expected_error` slide, which is deliberately not meant to
succeed), to recreate the exact state a real, continuously-used student
database would be in, then ran both of this deck's own code slides on top,
in order. Every slide in this deck is SQL — there is no `.ipynb` — so
Pass B replays the actual generated `TERMINAL_WORKSHEET_INSTRUCTOR.md`
instead of a notebook.

## Replay confirmation

After replaying Days 2–6, the cumulative database matched the expected
state exactly:

| Table | Expected | Actual |
|---|---|---|
| `restaurants` | 5 rows (camis 1001–1005) | 5 |
| `inspections` | 4 rows (inspection_id 1–4) | 4 |
| `violations` | 4 rows (violation_id 1–4) | 4 |

## Pass A — Results — both PASS

| # | Slide | Result |
|---|---|---|
| 1 | Sorted, But Not Numbered | PASS — runs clean, no window function. Returns 5 rows sorted by `tv DESC`: **Corner Bistro tv=3**, **Green Leaf Cafe tv=1**, then Sunset Diner, Harbor Grill, and New Spot NYC all at **tv=0**. |
| 2 | Same Query, Now With RANK() and ROW_NUMBER() | PASS — Corner Bistro `rnk=1, rn=1`; Green Leaf Cafe `rnk=2, rn=2`; the 3-way tie (New Spot NYC, Harbor Grill, Sunset Diner, all `tv=0`) all share **`rnk=3`** under RANK(), but get three different, sequential values — **`rn=3, 4, 5`** — under ROW_NUMBER(). The deck's central teaching point is confirmed as real Postgres behavior, not just asserted. |

## RANK()-skip-to-6 check (`check_understanding`: "what rank would a lower-total restaurant get?")

Verified via a synthetic, non-destructive `VALUES` row appended to the same
ordering (no `INSERT` — the shared validation database was never touched by
this check, confirmed by re-running the row-count query afterward: still
5/4/4). Query:

```sql
SELECT dba, tv, RANK() OVER (ORDER BY tv DESC) AS rnk
FROM (VALUES
  ('Corner Bistro', 3), ('Green Leaf Cafe', 1),
  ('New Spot NYC', 0), ('Harbor Grill', 0), ('Sunset Diner', 0),
  ('Hypothetical Lower Restaurant', -1)
) AS t(dba, tv)
ORDER BY tv DESC;
```

Real result: the 3-way tie still gets `rnk=3`, and the new, strictly-lower
6th row gets **`rnk=6`** — confirming RANK() skips ahead by the number of
tied rows (3 tied → next distinct value jumps to 6, skipping 4 and 5). The
deck's stated correct answer of "6" is confirmed as real Postgres behavior.

## Pass B — TERMINAL_WORKSHEET_INSTRUCTOR.md — PASS

Both of the worksheet's SQL code blocks were extracted and run top-to-bottom
in a single continuous `psql` session against the same replayed database
state (no reconnect, no re-seeding). Output matched Pass A exactly, row for
row: the unranked sorted list, then the RANK()/ROW_NUMBER() query with the
identical tie behavior (`rnk=3` for all three tied restaurants; `rn=3,4,5`).
The full instructor deliverable runs clean, start to finish.

## No FAILs.

Every numeric claim in this deck's slide notes and `check_understanding`
answers is independently confirmed against real query output, not assumed:
- Corner Bistro has exactly 3 total violations (rank 1); Green Leaf Cafe has
  exactly 1 (rank 2).
- Sunset Diner, Harbor Grill, and New Spot NYC form a genuine 3-way tie at 0
  violations — RANK() gives all three `rnk=3`; ROW_NUMBER() gives them
  `rn=3, 4, 5`, three distinct sequential values for three identical totals.
- RANK()'s "skip ahead by the tie size" rule is real, verified Postgres
  behavior, not a rule-of-thumb: a 3-way tie at rank 3 causes the next
  distinct value to land at rank 6, matching the deck's stated answer.
