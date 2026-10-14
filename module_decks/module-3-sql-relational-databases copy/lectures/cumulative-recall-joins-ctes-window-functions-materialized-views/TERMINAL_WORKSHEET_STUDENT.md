# Cumulative Recall: Joins, CTEs, Window Functions, Materialized Views

**Module 3: SQL & Relational Databases**

**Learning Objectives:**
- Rebuild a multi-table answer with the joins and aggregation the question actually needs, without a template
- Find what a query gets silently wrong when it runs clean and still returns rows
- Verify a result against a hand-built known answer before you trust it

## Scenario

Nothing new gets installed today and nothing new gets taught. The database you have been building all module is still running, and every tool you need is already in your hands. What changes is that the template is gone. You get a business question, you pick the tool, you write the query, and then you do the part that actually separates an analyst from a query: you prove the answer is right before you hand it to anybody. Every query in here runs clean. Not all of them are correct.

## Before You Start

A query runs with no error and returns a sensible-looking number. What would you have to do, concretely, to find out whether that number is actually true?

*Hint: Think about what you would need to already know before the query ran, and how small that known thing could be.*

*Reminder: type the commands inside the shaded code blocks below into your own terminal.*

## Documentation

- Only `LEFT JOIN` Finds What **Isn't There**: https://www.postgresql.org/docs/current/queries-table-expressions.html
- It Ran Clean. It's Also **Wrong**.: https://www.postgresql.org/docs/current/tutorial-agg.html
- `COALESCE` Doesn't Find a Value - **You Invent One**: https://www.postgresql.org/docs/current/functions-conditional.html
- A Stored View Keeps Answering From **Before**: https://www.postgresql.org/docs/current/sql-refreshmaterializedview.html
- One `COUNT(*)` Would Have **Caught It in Seconds**: https://www.postgresql.org/docs/current/functions-aggregate.html

## Only `LEFT JOIN` Finds What **Isn't There**

*Context: Open `psql` on the class database (`nyc_restaurants`) before the first query. `tv` is the alias for total violations, the same short name used throughout this module's queries on this database. `camis` is the restaurant id and `inspection_id` links an inspection to its violations. Nothing in this query changes data, so it is safe to re-run as many times as you like.*

*Complete the TODOs below as you work through this step.*

```sql
-- TODO: count violations per restaurant so that
-- TODO:   restaurants with none still appear


-- TODO: keep only the restaurants whose count
-- TODO:   came back as zero - remember which
-- TODO:   clause is allowed to filter a COUNT
```

## It Ran Clean. It's Also **Wrong**.

*Context: `insp` is the alias for the inspection count. The `violations` table holds one row per violation found during an inspection, so a single inspection can have several violation rows attached to it.*

*Complete the TODOs below as you work through this step.*

```sql
-- TODO: count inspections per restaurant, joining
-- TODO:   restaurants, inspections AND violations
-- TODO:   (yes, all three - that is the point)


-- TODO: order by the count, highest first, then
-- TODO:   write down the number you get for
-- TODO:   Corner Bistro before reading on
```

## `COALESCE` Doesn't Find a Value - **You Invent One**

*Context: A New York City inspection `score` counts violation points, so a higher number is a worse result. `pts` is the score after the fallback is applied and `rnk` is the ranking. Two inspections in this database were never scored at all.*

*Complete the TODOs below as you work through this step.*

```sql
-- TODO: name a CTE that pairs each inspected
-- TODO:   restaurant with its score, substituting 0
-- TODO:   wherever the score is missing


-- TODO: read from that CTE and add a ranking
-- TODO:   column, worst score first


-- TODO: look at the two rows that tie, and decide
-- TODO:   whether 0 was an honest choice here
```

## A Stored View Keeps Answering From **Before**

*Context: `restaurant_totals` is the materialized view this module built earlier, holding one row per restaurant with its total violation count. This is the one code-along today that writes data - before class, run `SELECT max(violation_id) FROM violations;` and use the next free id. This only affects results that join `violations` directly: the earlier fan-out demo ("It Ran Clean") will no longer reproduce its exact numbers if re-run after this cell - don't re-run it against the board numbers.*

*Complete the TODOs below as you work through this step.*

```sql
-- TODO: show that this stored view can hand back a
-- TODO:   stale answer, then bring it current -
-- TODO:   write down the number before and after
```

## One `COUNT(*)` Would Have **Caught It in Seconds**

*Context: `truth` is just an alias naming what this number is for: the total that every per-restaurant breakdown has to add back up to - the same tasting-one-spoonful habit the next diagram names formally. Neither query changes data, so both are safe to re-run.*

*Complete the TODOs below as you work through this step.*

```sql
-- TODO: get the total row count of inspections
-- TODO:   this is the number you will check against


-- TODO: rewrite the per-restaurant count, this
-- TODO:   time joining only the tables you are
-- TODO:   actually counting


-- TODO: add up your per-restaurant counts by hand
-- TODO:   and confirm they match the total above
```
