# Subquery vs. CTE vs. Window Function: Choosing the Right Tool

**Module 3: SQL & Relational Databases**

**Learning Objectives:**
- Answer one business question as a nested subquery and as a CTE, and name what each version actually costs you
- Recognize when a question needs every row kept, and reach for a window function instead of `GROUP BY`
- Run a four-check decision routine on a new business scenario with a peer, and justify your pick in one written sentence

## Scenario

The violations dashboard is live, and two follow-up questions land the same morning. One asks which restaurants sit above the citywide average. The other asks for every restaurant listed next to its own borough's average. Every tool you need is already in your toolkit - nothing new gets installed today. What changes is that you now have to choose between three tools that all return correct answers, and say out loud why you picked the one you picked. The next person to open your query might not be you.

## Before You Start

Two queries return the exact same rows, and one of them is four lines shorter. What else would you want to know before calling either one better?

*Hint: Think about who opens this file six months from now, and what they would need to be able to check on their own.*

*Reminder: type the commands inside the shaded code blocks below into your own terminal.*

## Documentation

- Written Once, the Work Gets Done **Twice**: https://www.postgresql.org/docs/current/functions-subquery.html
- Name the Step Once, Then **Use It Twice**: https://www.postgresql.org/docs/current/queries-with.html
- Right Answer, Asked **Once Per Row**: https://www.postgresql.org/docs/current/sql-expressions.html
- One Line Replaces the **Whole Repeated Question**: https://www.postgresql.org/docs/current/tutorial-window.html

## Written Once, the Work Gets Done **Twice**

*Context: Open `psql` on the class database (`nyc_restaurants`) before the first query - nothing today creates or changes data, so every statement in this worksheet is safe to re-run. `tv` is the alias for total violations, the same short name used in earlier lessons on this database. `sub` is the name given to the inner result so the outer query can average it.*

*Complete the TODOs below as you work through this step.*

```sql
-- TODO: count violations per restaurant, keeping
-- TODO:   restaurants that have none


-- TODO: keep only the ones above the average of
-- TODO:   those same counts - which means writing
-- TODO:   the counting query a second time, inside
-- TODO:   the HAVING clause
```

## Name the Step Once, Then **Use It Twice**

*Context: The `WITH` clause names a step and makes it available to the rest of the query, including more than once. For a read-only `SELECT` like this one, the result is identical to the nested version - the same two rows, in the same order.*

*Complete the TODOs below as you work through this step.*

```sql
-- TODO: name the counting step totals


-- TODO: read from totals, keeping only rows above
-- TODO:   the average of totals - referring to the
-- TODO:   named step instead of rewriting it
```

## Right Answer, Asked **Once Per Row**

*Context: `b_avg` is the borough's average violation count. `t2` is a second name for the same `totals` step, which is what lets the inner query compare against the row the outer query is currently on.*

*Complete the TODOs below as you work through this step.*

```sql
-- TODO: name the per-restaurant counting step totals,
-- TODO:   keeping boro this time


-- TODO: select each restaurant, its boro and its count


-- TODO: add a fourth column that reads totals a second
-- TODO:   time, filtered to this row's own boro, and
-- TODO:   averages it - call the column b_avg
```

## One Line Replaces the **Whole Repeated Question**

*Context: `AVG` here is the same function as always. `OVER (PARTITION BY boro)` is what turns it into a window function: instead of collapsing the boroughs into three rows, it computes each borough's average and writes it beside every row in that borough.*

*Complete the TODOs below as you work through this step.*

```sql
-- TODO: reuse the same totals step as before


-- TODO: select each restaurant, its boro and its count


-- TODO: add b_avg again, this time as a window function
```
