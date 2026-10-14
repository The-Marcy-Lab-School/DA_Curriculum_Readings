# Joins: INNER vs. LEFT

**Module 3: SQL & Relational Databases**

**Learning Objectives:**
- Explain what a JOIN does and use INNER JOIN to combine matching rows from two related tables
- Use LEFT JOIN to include every row from one table regardless of a match, and explain why INNER and LEFT JOIN can return different row counts

## Scenario

Real syntax, day two: The same `nyc_restaurants` database from yesterday, now combined across both tables for the first time. You'll write a real INNER JOIN, a real LEFT JOIN, and verify — on real data, not just a definition — why they don't always return the same rows.

*Reminder: type the commands inside the shaded code blocks below into your own terminal.*

## Reconnecting to Yesterday's Database

*Context: A new terminal session always starts outside any database — `\c` is the first real step of any day you come back to work.*

*Complete the TODOs below as you work through this step.*

```sql
-- TODO: connect to nyc_restaurants (\c)


-- TODO: confirm your 4 restaurants are still there
```

## Finishing What Yesterday Left Unfinished

*Context: Same `camis` (1005) yesterday's NOT NULL violation rejected — this time `dba` is actually included, so it succeeds for real.*

*Complete the TODOs below as you work through this step.*

```sql
-- TODO: insert camis 1005, 'New Spot NYC', boro 'Manhattan'
```

## INNER JOIN: Only Real Matches

*Context: `r`/`i` are table aliases — shorthand so `r.dba` and `i.camis` don't require typing the full table name every time.*

*Complete the TODOs below as you work through this step.*

```sql
-- TODO: select dba, inspection_date, critical_flag
-- TODO: INNER JOIN restaurants (as r) and inspections (as i)
-- TODO: match ON r.camis = i.camis
```

## LEFT JOIN: Every Restaurant, Match or Not

*Context: Only the JOIN keyword changed — same columns, same ON, same two tables.*

*Complete the TODOs below as you work through this step.*

```sql
-- TODO: select dba, inspection_date, critical_flag
-- TODO: LEFT JOIN restaurants (as r) and inspections (as i)
-- TODO: match ON r.camis = i.camis
```

## Which Restaurants Have Never Been Inspected?

*Context: This is an anti-join — a real, named pattern: LEFT JOIN plus a NULL check, used specifically to find rows with no match at all.*

*Complete the TODOs below as you work through this step.*

```sql
-- TODO: select dba
-- TODO: LEFT JOIN restaurants (as r) and inspections (as i)
-- TODO: match ON r.camis = i.camis
-- TODO: keep only rows where i.inspection_id IS NULL
```
