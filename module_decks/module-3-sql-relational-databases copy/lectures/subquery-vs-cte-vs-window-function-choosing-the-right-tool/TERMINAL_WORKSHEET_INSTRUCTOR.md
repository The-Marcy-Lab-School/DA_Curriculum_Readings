# Subquery vs. CTE vs. Window Function: Choosing the Right Tool

**Module 3: SQL & Relational Databases**

**Learning Objectives:**
- Answer one business question as a nested subquery and as a CTE, and name what each version actually costs you
- Recognize when a question needs every row kept, and reach for a window function instead of `GROUP BY`
- Run a four-check decision routine on a new business scenario with a peer, and justify your pick in one written sentence

> **You are not presenting this worksheet to students.** Use it as your own answer key while you run the same commands live, in front of the class.

## Scenario

The violations dashboard is live, and two follow-up questions land the same morning. One asks which restaurants sit above the citywide average. The other asks for every restaurant listed next to its own borough's average. Every tool you need is already in your toolkit - nothing new gets installed today. What changes is that you now have to choose between three tools that all return correct answers, and say out loud why you picked the one you picked. The next person to open your query might not be you.

## Before You Start

Two queries return the exact same rows, and one of them is four lines shorter. What else would you want to know before calling either one better?

*Hint: Think about who opens this file six months from now, and what they would need to be able to check on their own.*

## Documentation

- Written Once, the Work Gets Done **Twice**: https://www.postgresql.org/docs/current/functions-subquery.html
- Name the Step Once, Then **Use It Twice**: https://www.postgresql.org/docs/current/queries-with.html
- Right Answer, Asked **Once Per Row**: https://www.postgresql.org/docs/current/sql-expressions.html
- One Line Replaces the **Whole Repeated Question**: https://www.postgresql.org/docs/current/tutorial-window.html

## Written Once, the Work Gets Done **Twice**

*Context: Open `psql` on the class database (`nyc_restaurants`) before the first query - nothing today creates or changes data, so every statement in this worksheet is safe to re-run. `tv` is the alias for total violations, the same short name used in earlier lessons on this database. `sub` is the name given to the inner result so the outer query can average it.*

**Instructor notes:**

> [ACTIVITY] Before running it, ask the room to predict the row count. In person: fingers up. Online: a number in chat. Two rows come back - Corner Bistro with 4 and Green Leaf Cafe with 1, because the citywide average across all seven restaurants is about 0.71.
> 
> [SCRIPT] This query is correct. Say that clearly and early, because the instinct in the room will be that something is wrong with it. Nothing is. It returns the right answer and it is the version a lot of working SQL actually looks like.
> 
> [SCRIPT] Then make the cost visible rather than asserting it. Ask somebody to count how many times the three-table join appears. Twice, character for character. Ask what happens the day a fourth table joins the picture: you now have two places to edit, and one of them is buried five lines deep inside a `HAVING`.
> 
> [MISCONCEPTIONS] Some will assume the repetition means the database really does the work twice, and that the query is therefore slow. That is not a safe claim - the planner is free to reorganise this, and on seven rows nothing is measurable either way. Keep the argument where it actually holds: this is about what a human has to maintain, not about speed.

```sql
SELECT dba, COUNT(violation_id) tv
FROM restaurants
  LEFT JOIN inspections USING (camis)
  LEFT JOIN violations USING (inspection_id)
GROUP BY dba
HAVING COUNT(violation_id) > (SELECT AVG(tv) FROM (
  SELECT COUNT(violation_id) tv FROM restaurants
    LEFT JOIN inspections USING (camis)
    LEFT JOIN violations USING (inspection_id)
  GROUP BY dba) sub);
```

## Name the Step Once, Then **Use It Twice**

*Context: The `WITH` clause names a step and makes it available to the rest of the query, including more than once. For a read-only `SELECT` like this one, the result is identical to the nested version - the same two rows, in the same order.*

**Analogy:** A labelled loop in a beat can be soloed and listened to on its own. Bake the same sound straight into every bar and there is nothing left to solo.

**Backup analogies** (if the primary doesn't land):

- **Food:** A recipe that says "make the sauce, set it aside" lets you taste it before you commit. One that says "make the sauce again" mid-step gives you no such moment.
- **Community:** Giving the group chat's plan a name means everyone can point at it. Retyping the whole plan in every message means nobody is sure which copy is current.

**Instructor notes:**

> [ACTIVITY] Run it, then put both queries side by side on screen if you can. Ask the room for one sentence describing what actually changed. In person: call on two. Online: chat, then read two out loud.
> 
> [SCRIPT] Introduce the labelled-loop comparison before the formal wording. The point is not that the CTE is shorter - it is that the counting step now has a name, so it can be pointed at, checked on its own, and reused without being retyped.
> 
> [SCRIPT] Demonstrate the checking part live, because it is the strongest argument and it takes ten seconds. Replace the final `SELECT` with `SELECT * FROM totals;` and run it. The middle step is now inspectable. There is no equivalent move on the nested version without surgery on the query.
> 
> [SCRIPT] Tie it to the project's own spot-check requirement out loud. Every query handed in has to be checked against known values. A query whose middle step can be run by itself is a query that is genuinely checkable.
> 
> [MISCONCEPTIONS] The most repeated stale claim about CTEs is that they are always computed and stored separately, and therefore always slower. In PostgreSQL that was true through version 11 and changed in version 12: a CTE that is non-recursive, side-effect-free and referenced only once is now folded into the surrounding query by default. `MATERIALIZED` and `NOT MATERIALIZED` are the keywords that override the decision either way. Worth being precise about today's own example: `totals` is referenced twice, so PostgreSQL still calculates it separately here - the version-12 change is about the single-reference case, not a blanket reversal.
> 
> [MISCONCEPTIONS] Scope that claim to a named engine, always. It is not a fact about SQL. SQL Server never materialises a CTE at all and re-runs the defined query on every reference, and MySQL 8 merges them by default. "CTEs are slow" is the kind of confident, unscoped claim that falls apart in an interview the moment somebody asks which database.
> 
> [SOURCES] PostgreSQL 12 release notes: "Allow common table expressions (CTEs) to be inlined into the outer query... Previously, CTEs were never inlined and were always evaluated before the rest of the query." PostgreSQL "WITH Queries" documentation: a side-effect-free non-recursive `WITH` query "can be folded into the parent query," and "by default, this happens if the parent query references the `WITH` query just once, but not if it references the `WITH` query more than once." Microsoft Learn, "WITH common_table_expression": "Query results from common table expressions aren't materialized. Each outer reference to the named result set requires the defined query to be re-executed." MySQL 8.4 manual: the optimizer "avoids unnecessary materialization whenever possible."

```sql
WITH totals AS (
  SELECT dba, COUNT(violation_id) tv
  FROM restaurants
  LEFT JOIN inspections USING (camis)
  LEFT JOIN violations USING (inspection_id)
  GROUP BY dba)
SELECT dba, tv FROM totals
WHERE tv > (SELECT AVG(tv) FROM totals);
```

### 🤔 Check for Understanding: Inheriting Somebody Else's Query

*Mode: Would You Rather*

Would you rather inherit the nested version or the CTE version from a teammate who has just left the company?

- The nested subquery
- The CTE

## Right Answer, Asked **Once Per Row**

*Context: `b_avg` is the borough's average violation count. `t2` is a second name for the same `totals` step, which is what lets the inner query compare against the row the outer query is currently on.*

**Instructor notes:**

> [SCRIPT] Run it and read the seven rows. Every restaurant is still listed, and each one now carries its borough's average: Brooklyn 0.33, Manhattan 2.00, Queens 0.00. The rows survived, which is what the question asked for.
> 
> [SCRIPT] Now point at what makes this the correlated kind, since it is the whole reason the term exists. The inner query mentions `totals.boro` - a column belonging to the outer query. It cannot be run on its own; paste it into `psql` by itself and it fails, because there is no outer row to point at. That dependency is the definition.
> 
> [SCRIPT] Describe what that means in plain language rather than in performance terms: this is written as "for each row, go and work out that row's borough average." Conceptually it is one question asked seven times.
> 
> [MISCONCEPTIONS] Do not let the room conclude the database literally runs it seven times. "Once per row" describes what the query *means*, not a measured cost - modern planners routinely rewrite a correlated subquery into a join instead. If somebody insists it must be slower, that is the perfect moment to reach for the tool from the previous lesson and settle it with evidence rather than opinion: put `EXPLAIN ANALYZE` in front of both versions and read the two plans. Being careful about the difference between what a query means and what it costs is itself the lesson.
> 
> [SOURCES] PostgreSQL documentation, "Value Expressions," on scalar subqueries: the subquery "can refer to variables from the surrounding query, which will act as constants during any one evaluation of the subquery." Note what that does and does not say - it defines the per-evaluation semantics without promising a fixed number of evaluations. "Correlated subquery" is standard SQL terminology defined by other vendors' documentation; PostgreSQL's own docs describe the behaviour without using that label.

```sql
WITH totals AS (
  SELECT dba, boro, COUNT(violation_id) tv
  FROM restaurants
  LEFT JOIN inspections USING (camis)
  LEFT JOIN violations USING (inspection_id)
  GROUP BY dba, boro
)
SELECT dba, boro, tv,
  (SELECT ROUND(AVG(t2.tv), 2) FROM totals t2
   WHERE t2.boro = totals.boro) AS b_avg
FROM totals ORDER BY boro, tv DESC;
```

## One Line Replaces the **Whole Repeated Question**

*Context: `AVG` here is the same function as always. `OVER (PARTITION BY boro)` is what turns it into a window function: instead of collapsing the boroughs into three rows, it computes each borough's average and writes it beside every row in that borough.*

**Instructor notes:**

> [ACTIVITY] Before hitting enter, have the room predict `b_avg` for Manhattan's two rows specifically - Corner Bistro has 4 violations and New Spot NYC has 0. In person: call on two people, one per row. Online: both answers in chat at once. The answer is 2.00 on both, and the surprise that the same number repeats is the point.
> 
> [SCRIPT] Run it and put it next to the previous output. Identical seven rows, identical numbers. The two-line correlated subquery collapsed into a single expression, and the second read of `totals` disappeared entirely.
> 
> [SCRIPT] Say why the number repeats, because it looks like a bug the first time. The average belongs to the partition, not to the row - every Manhattan row shows Manhattan's average. Nothing has been duplicated; the value is just shared.
> 
> [SCRIPT] Land the decision rule while both outputs are on screen: when the answer needs every row kept *and* a group-level number sitting beside it, the window function is not a fancier option, it is the one built for the shape.
> 
> [MISCONCEPTIONS] `PARTITION BY` reads like `GROUP BY` and does not behave like it. `GROUP BY boro` would have returned three rows. `PARTITION BY boro` returned all seven. Say both numbers out loud with both queries visible.
> 
> [SOURCES] PostgreSQL documentation, "Window Functions": "window functions do not cause rows to become grouped into a single output row like non-window aggregate calls would. Instead, the rows retain their separate identities." This is standard SQL semantics, not a PostgreSQL-specific behaviour, so it is safe to state generally.

```sql
WITH totals AS (
  SELECT dba, boro, COUNT(violation_id) tv
  FROM restaurants
  LEFT JOIN inspections USING (camis)
  LEFT JOIN violations USING (inspection_id)
  GROUP BY dba, boro
)
SELECT dba, boro, tv,
  ROUND(AVG(tv) OVER (PARTITION BY boro), 2) AS b_avg
FROM totals ORDER BY boro, tv DESC;
```
