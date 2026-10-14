# Joins: INNER vs. LEFT

**Module 3: SQL & Relational Databases**

**Learning Objectives:**
- Explain what a JOIN does and use INNER JOIN to combine matching rows from two related tables
- Use LEFT JOIN to include every row from one table regardless of a match, and explain why INNER and LEFT JOIN can return different row counts

> **You are not presenting this worksheet to students.** Use it as your own answer key while you run the same commands live, in front of the class.

## Scenario

Real syntax, day two: The same `nyc_restaurants` database from yesterday, now combined across both tables for the first time. You'll write a real INNER JOIN, a real LEFT JOIN, and verify — on real data, not just a definition — why they don't always return the same rows.

## Reconnecting to Yesterday's Database

*Context: A new terminal session always starts outside any database — `\c` is the first real step of any day you come back to work.*

**Instructor notes:**

> [SCRIPT] Run it and confirm all 4 rows print — Corner Bistro, Green Leaf Cafe, Sunset Diner, Harbor Grill. Nothing was lost between sessions — this is exactly the check every future class session should open with, before assuming anything about the data's state.

```sql
\c nyc_restaurants
SELECT * FROM restaurants;
```

## Finishing What Yesterday Left Unfinished

*Context: Same `camis` (1005) yesterday's NOT NULL violation rejected — this time `dba` is actually included, so it succeeds for real.*

**Instructor notes:**

> [SCRIPT] Name explicitly: this is the exact insert that failed yesterday, now complete. New Spot NYC just opened — real restaurants start with zero inspections, which is about to matter a lot in a few minutes.

```sql
INSERT INTO restaurants (camis, dba, boro) VALUES (1005, 'New Spot NYC', 'Manhattan');
```

## INNER JOIN: Only Real Matches

*Context: `r`/`i` are table aliases — shorthand so `r.dba` and `i.camis` don't require typing the full table name every time.*

**Instructor notes:**

> [SCRIPT] Run it and count the rows together before revealing the prediction question — this is worth a genuine pause.

```sql
SELECT r.dba, i.inspection_date, i.critical_flag
FROM restaurants r
INNER JOIN inspections i ON r.camis = i.camis;
```

### 🤔 Check for Understanding: Predicting an INNER JOIN Row Count

*Mode: Poll*

Predict it: How many rows does this `INNER JOIN` actually return?

- 3
- 5
- 6

**Answer:** 3 — Only Corner Bistro (2 inspections) and Green Leaf Cafe (1 inspection) have any real match — that's 3 total inspection rows. Sunset Diner, Harbor Grill, and New Spot NYC have zero inspections, so INNER JOIN drops them completely.

## LEFT JOIN: Every Restaurant, Match or Not

*Context: Only the JOIN keyword changed — same columns, same ON, same two tables.*

**Instructor notes:**

> [SCRIPT] Run it and let the NULL rows print in full — Sunset Diner, Harbor Grill, and New Spot NYC all appear, with `NULL` in both the `inspection_date` and `critical_flag` columns.

```sql
SELECT r.dba, i.inspection_date, i.critical_flag
FROM restaurants r
LEFT JOIN inspections i ON r.camis = i.camis;
```

### 🤔 Check for Understanding: Predicting a LEFT JOIN Row Count

*Mode: Poll*

Predict it: How many rows does this `LEFT JOIN` actually return?

- 6
- 3
- 5

**Answer:** 6 — The same 3 matched rows from INNER JOIN, plus 3 more — one per restaurant with zero inspections (Sunset Diner, Harbor Grill, New Spot NYC), each with NULL in the inspection columns. Same tables, same ON, a genuinely different row count.

## Which Restaurants Have Never Been Inspected?

*Context: This is an anti-join — a real, named pattern: LEFT JOIN plus a NULL check, used specifically to find rows with no match at all.*

**Instructor notes:**

> [SCRIPT] Run it: exactly Sunset Diner, Harbor Grill, and New Spot NYC print. Name explicitly: this is a genuinely useful real-world query, not just a teaching demo — "which restaurants are we missing inspection data for" is a real operational question.
> 
> [MISCONCEPTIONS] `WHERE i.inspection_id = NULL` looks reasonable but silently returns zero rows, always — `NULL` isn't a value comparisons can match against, so `=` never works on it. `IS NULL` is the only real way to check for a missing match, which is exactly why this specific query uses it.

```sql
SELECT r.dba
FROM restaurants r
LEFT JOIN inspections i ON r.camis = i.camis
WHERE i.inspection_id IS NULL;
```
