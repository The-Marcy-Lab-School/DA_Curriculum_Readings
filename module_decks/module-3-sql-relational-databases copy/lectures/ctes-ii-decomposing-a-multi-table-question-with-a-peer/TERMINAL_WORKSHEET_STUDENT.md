# CTEs II: Decomposing a Multi-Table Question, With a Peer

**Module 3: SQL & Relational Databases**

**Learning Objectives:**
- With a peer, decompose a multi-table business question into a decomposition plan spanning 3+ tables
- Chain multiple CTEs in one query, each building on the one before it

## Scenario

Real syntax, day five: A third table joins `nyc_restaurants` — `violations`, one level deeper than inspections. With a partner, you'll plan a real query spanning all 3 tables before writing a single line of SQL, then chain two CTEs together to answer it.

*Reminder: type the commands inside the shaded code blocks below into your own terminal.*

## A Third Table: Violations, Per Inspection

*Context: `inspection_id` is a real foreign key — same enforced pattern as `camis` in `inspections`, one level deeper.*

*Complete the TODOs below as you work through this step.*

```sql
-- TODO: create violations (id PK, inspection_id FK to inspections,
-- TODO:   code + description NOT NULL)
```

## Adding Real Violation Records

*Context: Inspection 1 (Corner Bistro's first) has 2 violations; inspection 4 (Corner Bistro's most recent) has none — a real, clean re-inspection.*

*Complete the TODOs below as you work through this step.*

```sql
-- TODO: insert all 4 violation rows shown on this slide
```

## Step 1: Violations Per Inspection

*Context: The first CTE alone, run by itself — this is exactly what a pair's own first planning step should compute.*

*Complete the TODOs below as you work through this step.*

```sql
-- TODO: WITH violation_counts AS (
-- TODO:   count violations per inspection (as nv)
-- TODO:   joining inspections + violations
-- TODO: )
-- TODO: SELECT * FROM violation_counts;
```

## Step 2: Chaining the Second CTE

*Context: `totals` references `violation_counts` by name, same CTE as the last slide — the whole reason a chained CTE exists.*

```sql
WITH violation_counts AS (
  SELECT inspection_id, camis, COUNT(violation_id) nv
  FROM inspections
  LEFT JOIN violations USING (inspection_id)
  GROUP BY inspection_id, camis
), totals AS (SELECT dba, COUNT(inspection_id) ni,
    COALESCE(SUM(nv), 0) tv
  FROM restaurants
  LEFT JOIN violation_counts USING (camis)
  GROUP BY dba)
SELECT * FROM totals ORDER BY tv DESC;
```
