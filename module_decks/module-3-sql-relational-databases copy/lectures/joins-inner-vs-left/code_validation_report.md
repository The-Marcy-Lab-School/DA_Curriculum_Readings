# Code Validation Report — Joins: INNER vs. LEFT

Validated for real against a live PostgreSQL 16 instance (throwaway
`postgres:16-alpine` Docker container, torn down after this run). Since
this deck continues Day 2's own database/tables rather than creating new
ones, validation first replayed Day 2's own 6 setup statements (skipping
its `expected_error` demo, which deliberately never persists) to recreate
the exact state a student's real, still-running database would already be
in, then ran all 5 of this deck's own code slides on top, in order.

## Results — all 5 PASS

| # | Slide | Result |
|---|---|---|
| 1 | Reconnecting to Yesterday's Database | PASS — `\c` succeeded, all 4 original rows confirmed present. |
| 2 | Finishing What Yesterday Left Unfinished | PASS — `INSERT 0 1`. Restaurant 1005 (the exact row Day 2's `NOT NULL` violation rejected) now inserted successfully. |
| 3 | INNER JOIN: Only Real Matches | PASS — returned exactly 3 rows (2 Corner Bistro inspections, 1 Green Leaf Cafe). Confirms the deck's own CFU answer (3) is correct. |
| 4 | LEFT JOIN: Every Restaurant, Match or Not | PASS — returned exactly 6 rows: the same 3 matched rows, plus Sunset Diner/New Spot NYC/Harbor Grill with real `NULL` inspection columns. Confirms the deck's own CFU answer (6) is correct, and that the row-count difference is genuinely real on this data, not just asserted. |
| 5 | Which Restaurants Have Never Been Inspected? | PASS — the anti-join (`LEFT JOIN` + `WHERE ... IS NULL`) returned exactly Sunset Diner, Harbor Grill, and New Spot NYC — precisely the 3 restaurants with zero inspections, confirming the pattern works as taught. |

## No FAILs.

The lesson's central claim — that INNER JOIN and LEFT JOIN return a
genuinely different row count on the same tables with the same `ON`
clause — is independently verified as real, not just a rule stated on a
slide.
