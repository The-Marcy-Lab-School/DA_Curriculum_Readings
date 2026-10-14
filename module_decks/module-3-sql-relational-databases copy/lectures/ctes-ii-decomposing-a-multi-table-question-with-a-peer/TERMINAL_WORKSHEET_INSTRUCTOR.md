# CTEs II: Decomposing a Multi-Table Question, With a Peer

**Module 3: SQL & Relational Databases**

**Learning Objectives:**
- With a peer, decompose a multi-table business question into a decomposition plan spanning 3+ tables
- Chain multiple CTEs in one query, each building on the one before it

> **You are not presenting this worksheet to students.** Use it as your own answer key while you run the same commands live, in front of the class.

## Scenario

Real syntax, day five: A third table joins `nyc_restaurants` — `violations`, one level deeper than inspections. With a partner, you'll plan a real query spanning all 3 tables before writing a single line of SQL, then chain two CTEs together to answer it.

## A Third Table: Violations, Per Inspection

*Context: `inspection_id` is a real foreign key — same enforced pattern as `camis` in `inspections`, one level deeper.*

**Instructor notes:**

> [SCRIPT] Name explicitly: this is the exact same 3-table shape the real NYC dataset actually has — restaurants, their inspections, and each inspection's own recorded violations.

```sql
CREATE TABLE violations (
  violation_id INT PRIMARY KEY,
  inspection_id INT REFERENCES inspections(inspection_id),
  violation_code TEXT NOT NULL,
  violation_description TEXT NOT NULL
);
```

## Adding Real Violation Records

*Context: Inspection 1 (Corner Bistro's first) has 2 violations; inspection 4 (Corner Bistro's most recent) has none — a real, clean re-inspection.*

**Instructor notes:**

> [SCRIPT] Run it and confirm `INSERT 0 4`. Don't total anything up yet — that's the actual question coming next.

```sql
INSERT INTO violations (violation_id, inspection_id, violation_code, violation_description) VALUES
  (1, 1, '04L', 'Evidence of mice'),
  (2, 1, '02G', 'Cold food held above 41F'),
  (3, 2, '08A', 'Facility not vermin proof'),
  (4, 3, '10F', 'Non-food surface improperly built');
```

### 🤔 Check for Understanding: Planning a 3-Table Decomposition

*Mode: Whiteboard / Collaborative Board*

With a partner: Sketch a decomposition plan (a plain-language, step-by-step approach, decided before writing any SQL) for "each restaurant's total inspections and total violations." Name each CTE you'd use and what it computes.

## Step 1: Violations Per Inspection

*Context: The first CTE alone, run by itself — this is exactly what a pair's own first planning step should compute.*

**Instructor notes:**

> [SCRIPT] Run it: 4 rows, one per inspection, each with its own violation count. Name explicitly: this alone is real, valid SQL — the next slide references it by name instead of retyping it.
> 
> [SCRIPT] Two syntax notes worth naming out loud. First: it's `COUNT(violation_id)`, not `COUNT(*)`. Under a LEFT JOIN, `COUNT(*)` would count 1 even for an inspection with zero violations, since the join still produces a row. Second: `USING (inspection_id)` is shorthand for `ON i.inspection_id = v.inspection_id`, and it works whenever both tables share the same column name.

```sql
WITH violation_counts AS (
  SELECT i.inspection_id, i.camis,
    COUNT(v.violation_id) AS nv
  FROM inspections i
  LEFT JOIN violations v USING (inspection_id)
  GROUP BY i.inspection_id, i.camis
)
SELECT * FROM violation_counts;
```

## Step 2: Chaining the Second CTE

*Context: `totals` references `violation_counts` by name, same CTE as the last slide — the whole reason a chained CTE exists.*

**Instructor notes:**

> [SCRIPT] Walk it top to bottom, matching each CTE to what a pair likely sketched: `violation_counts` answers "how many violations per inspection," `totals` answers the real question by rolling that up per restaurant. Run it and let the real numbers print — Corner Bistro leads with 3 violations across 3 inspections.
> 
> [SCRIPT] Two more syntax notes. `COALESCE(SUM(nv), 0)` just means "if this would be NULL, use 0 instead." Without it, a restaurant with zero inspections would show a blank total instead of 0. [SCOPE] `COALESCE` gets its own proper treatment later this module; treat this as a preview. Also, `AS` before an alias is optional in Postgres, so `COUNT(...) ni` and `COUNT(...) AS ni` do the same thing.

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
