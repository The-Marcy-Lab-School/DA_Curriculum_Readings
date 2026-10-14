# COALESCE, Materialized Views & a First Look at EXPLAIN ANALYZE

**Module 3: SQL & Relational Databases**

**Learning Objectives:**
- Replace a NULL with a fallback value using COALESCE, and explain why `= NULL` never matches anything
- Create a materialized view, and use REFRESH when its stored rows go stale
- Run EXPLAIN ANALYZE on a real query and read what each line of the plan is telling you

## Scenario

Your manager liked yesterday's borough rankings enough to want a violation-totals dashboard that loads instantly. Two problems show up immediately. Some inspections have no score entered yet, so the totals have holes in them. And rebuilding those numbers from three tables every single time somebody opens the page is not free. Today you handle the holes honestly, store the answer instead of recomputing it, and ask Postgres to show you exactly what a query costs.

*Reminder: type the commands inside the shaded code blocks below into your own terminal.*

## Documentation

- New Columns Come Back **Empty on Every Old Row**: https://www.postgresql.org/docs/current/sql-altertable.html
- `= NULL` Never Matches - **Not Even a NULL**: https://www.postgresql.org/docs/current/functions-comparison.html
- COALESCE Picks the Fallback - **You Pick the Meaning**: https://www.postgresql.org/docs/current/functions-conditional.html
- One Command Turns a Query Into **Stored Rows**: https://www.postgresql.org/docs/current/sql-creatematerializedview.html
- New Data Lands. The View **Doesn't Move**.: https://www.postgresql.org/docs/current/sql-refreshmaterializedview.html
- Two Real Plans: **Five Lines, Then Three**: https://www.postgresql.org/docs/current/using-explain.html

## New Columns Come Back **Empty on Every Old Row**

*Context: In NYC's real inspection data a `score` is violation points, so a *lower* score is the cleaner restaurant, and `grade` is the A/B/C letter posted in the window. Inspections 3 and 4 are recent enough that neither has been entered yet.*

*Complete the TODOs below as you work through this step.*

```sql
-- TODO: reconnect


-- TODO: add two new columns to inspections:
-- TODO:   score (whole number) and grade (text)


-- TODO: set inspection 1 to score 12, grade B
-- TODO: set inspection 2 to score 7, grade A


-- TODO: read back id, score and grade, in id order
```

## `= NULL` Never Matches - **Not Even a NULL**

*Context: `NULL` is not a value you compare against - it means "unknown," so `grade = NULL` is really asking "does this unknown thing equal that unknown thing," which Postgres answers with another unknown. A `WHERE` clause only keeps rows that are definitely true, so nothing survives.*

*Complete the TODOs below as you work through this step.*

```sql
-- TODO: ask for the ungraded inspections the way
-- TODO:   you would ask for any other value


-- TODO: now ask again, using the keyword that tests
-- TODO:   for absence instead of comparing to a value
```

## COALESCE Picks the Fallback - **You Pick the Meaning**

*Context: `COALESCE` takes a list of values and hands back the first one that is not `NULL`, checking left to right. Two arguments is the common case, but it accepts as many as you want.*

*Complete the TODOs below as you work through this step.*

```sql
-- TODO: select the restaurant name, then two more
-- TODO:   columns, each swapping a missing value for
-- TODO:   a fallback you choose: 0 for the number,
-- TODO:   'Not graded' for the letter


-- TODO: join restaurants to inspections on camis
-- TODO: order by inspection_id
```

## One Command Turns a Query Into **Stored Rows**

*Context: `AS` here does the same job it does for a column alias: it names the thing, then gives the query that fills it. The stored rows are written to disk when this command runs, so `CREATE MATERIALIZED VIEW` on a large table can genuinely take a while.*

*Complete the TODOs below as you work through this step.*

```sql
-- TODO: create a stored version of the totals query,
-- TODO:   named restaurant_totals


-- TODO: the query itself is the same three-table
-- TODO:   LEFT JOIN and GROUP BY you already know


-- TODO: then read the stored rows back, worst first
```

## New Data Lands. The View **Doesn't Move**.

*Context: `REFRESH MATERIALIZED VIEW` re-runs the stored query and replaces every stored row. It is not an incremental update - the whole thing is rebuilt, which is why a big view is usually refreshed on a schedule rather than after every change.*

*Complete the TODOs below as you work through this step.*

```sql
-- TODO: insert violation 5 for inspection 4:
-- TODO:   code '06D', 'Food surface not clean'


-- TODO: ask the view for Corner Bistro's total


-- TODO: tell the view to rebuild itself


-- TODO: ask the view for the same total again
```

## Two Real Plans: **Five Lines, Then Three**

*Context: Both plans come back as several lines of text above the usual result. Read them bottom-up when they get nested: the deepest line runs first, and the top line is the last thing that happens.*

*Complete the TODOs below as you work through this step.*

```sql
-- TODO: ask Postgres to run and time a query that
-- TODO:   selects Brooklyn restaurants by name


-- TODO: do the same for a plain read of the
-- TODO:   materialized view, then compare the two plans
```
