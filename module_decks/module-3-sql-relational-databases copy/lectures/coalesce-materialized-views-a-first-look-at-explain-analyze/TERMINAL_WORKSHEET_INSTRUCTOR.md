# COALESCE, Materialized Views & a First Look at EXPLAIN ANALYZE

**Module 3: SQL & Relational Databases**

**Learning Objectives:**
- Replace a NULL with a fallback value using COALESCE, and explain why `= NULL` never matches anything
- Create a materialized view, and use REFRESH when its stored rows go stale
- Run EXPLAIN ANALYZE on a real query and read what each line of the plan is telling you

> **You are not presenting this worksheet to students.** Use it as your own answer key while you run the same commands live, in front of the class.

## Scenario

Your manager liked yesterday's borough rankings enough to want a violation-totals dashboard that loads instantly. Two problems show up immediately. Some inspections have no score entered yet, so the totals have holes in them. And rebuilding those numbers from three tables every single time somebody opens the page is not free. Today you handle the holes honestly, store the answer instead of recomputing it, and ask Postgres to show you exactly what a query costs.

## Documentation

- New Columns Come Back **Empty on Every Old Row**: https://www.postgresql.org/docs/current/sql-altertable.html
- `= NULL` Never Matches - **Not Even a NULL**: https://www.postgresql.org/docs/current/functions-comparison.html
- COALESCE Picks the Fallback - **You Pick the Meaning**: https://www.postgresql.org/docs/current/functions-conditional.html
- One Command Turns a Query Into **Stored Rows**: https://www.postgresql.org/docs/current/sql-creatematerializedview.html
- New Data Lands. The View **Doesn't Move**.: https://www.postgresql.org/docs/current/sql-refreshmaterializedview.html
- Two Real Plans: **Five Lines, Then Three**: https://www.postgresql.org/docs/current/using-explain.html

## New Columns Come Back **Empty on Every Old Row**

*Context: In NYC's real inspection data a `score` is violation points, so a *lower* score is the cleaner restaurant, and `grade` is the A/B/C letter posted in the window. Inspections 3 and 4 are recent enough that neither has been entered yet.*

**Instructor notes:**

> [SCRIPT] `ALTER TABLE ... ADD COLUMN` is new, and it is exactly what it looks like: it adds a column to a table that already has rows in it. Every existing row gets the new column with no value in it, which is precisely the situation we want.
> 
> [SCRIPT] Run it, then read the output down the screen. Two rows have a score and a grade. Two rows have nothing in either column. Ask the room what "nothing" means there before you name it - a zero, a blank, or something else.
> 
> [MISCONCEPTIONS] Fellows often read the empty cell in `psql` output as an empty piece of text, because that is what it looks like. It is not. An empty piece of text is a real value you could match on; this is the absence of any value at all.
> 
> [MISCONCEPTIONS] If anyone re-runs this whole block they will get "column score of relation inspections already exists". That is the second `ALTER` failing, not a broken command. Say so and move on rather than debugging live.

```sql
\c nyc_restaurants
ALTER TABLE inspections ADD COLUMN score INT;
ALTER TABLE inspections ADD COLUMN grade TEXT;
UPDATE inspections SET score = 12, grade = 'B'
  WHERE inspection_id = 1;
UPDATE inspections SET score = 7, grade = 'A'
  WHERE inspection_id = 2;
SELECT inspection_id, score, grade FROM inspections
ORDER BY inspection_id;
```

## `= NULL` Never Matches - **Not Even a NULL**

*Context: `NULL` is not a value you compare against - it means "unknown," so `grade = NULL` is really asking "does this unknown thing equal that unknown thing," which Postgres answers with another unknown. A `WHERE` clause only keeps rows that are definitely true, so nothing survives.*

**Analogy:** Three people replied "0, can't make it" to the group chat. Two never replied at all. You can't count the silent two as zeros - you genuinely don't know their answer.

**Backup analogies** (if the primary doesn't land):

- **Food:** An order ticket with "no onions" written on it is a real instruction. A ticket where the toppings line is blank is not the same thing - the kitchen has to ask, not assume.
- **Sports:** A player who scored 0 points played the game. A player with a blank stat line was never on the roster. Averaging them together gets you a wrong number.

**Instructor notes:**

> [ACTIVITY] Before you run the first query, ask the room to predict how many rows come back. In person: fingers up for 0, 1, or 2. Online: drop the number in chat. Most of the room will say 2. Then run it and let zero rows land on its own.
> 
> [SCRIPT] Say the rule plainly after the surprise: `NULL` means unknown, and unknown is not equal to anything, including another unknown. This is the single most common silent bug in SQL - the query runs, returns no error, and quietly answers a different question than the one you asked.
> 
> [SCRIPT] Introduce the group-chat comparison before the formal wording, not after. The point is that a stated zero and no answer at all are genuinely different facts, and only one of them is safe to add up.
> 
> [MISCONCEPTIONS] The most common wrong model is "NULL is basically zero." It is worth stating the opposite out loud: zero is a real, known measurement. `NULL` is the database refusing to guess. Postgres also applies the same rule to `!=`, so `WHERE grade != NULL` returns nothing either - and that catches people out even more often.
> 
> [MISCONCEPTIONS] Very occasionally a Fellow reports that `= NULL` "worked" somewhere. Postgres has an off-by-default setting that rewrites it into `IS NULL` for old applications, and the docs actively discourage relying on it. Do not teach it - just know why the story is not impossible.
> 
> [SOURCES] PostgreSQL documentation, "Comparison Functions and Operators": "Ordinary comparison operators yield null (signifying 'unknown'), not true or false, when either input is null. For example, 7 = NULL yields null, as does 7 <> NULL." And: "Do not write expression = NULL because NULL is not 'equal to' NULL." This is standard SQL three-valued logic, not a PostgreSQL quirk - it holds across databases.

```sql
-- Looks right. Comes back empty.
SELECT inspection_id FROM inspections
WHERE grade = NULL;

-- The real way to ask the question:
SELECT inspection_id FROM inspections
WHERE grade IS NULL;
```

## COALESCE Picks the Fallback - **You Pick the Meaning**

*Context: `COALESCE` takes a list of values and hands back the first one that is not `NULL`, checking left to right. Two arguments is the common case, but it accepts as many as you want.*

**Instructor notes:**

> [ACTIVITY] Before anyone hits enter, have the room predict what the two new columns will show for Corner Bistro's two unscored inspections. In person: call on two Fellows for the two columns. Online: both answers in chat at once, then run it.
> 
> [SCRIPT] Run it and read the four rows. Corner Bistro's two unscored inspections now show `0` in one column and `Not graded` in the other - the same missing value, presented two completely different ways.
> 
> [SCRIPT] Land the real point: `COALESCE` is a syntax tool with no opinion about meaning. It will happily put any fallback you name into the gap. The judgment about which fallback is honest is entirely yours, and the next question is about exactly that.
> 
> [MISCONCEPTIONS] Fellows often assume `COALESCE` changes the stored data. It does not - it only changes what this one query returns. The `NULL` is still sitting in the table afterwards.
> 
> [SOURCES] PostgreSQL documentation, "Conditional Expressions": COALESCE "returns the first of its arguments that is not null," and "Null is returned only if all arguments are null." Arguments are evaluated left to right and evaluation stops once a non-null argument is found.

```sql
SELECT dba, COALESCE(score, 0) AS as_zero,
  COALESCE(grade, 'Not graded') AS as_label
FROM restaurants
JOIN inspections USING (camis)
ORDER BY inspection_id;
```

### 🤔 Check for Understanding: Filling a Blank With Zero

*Mode: Poll*

A lower `score` means a cleaner restaurant. Two inspections have no score yet. What does `COALESCE(score, 0)` do to the average?

- Nothing - averages skip it either way
- Pulls it down, so the city looks cleaner
- Pushes it up, so the city looks worse

**Answer:** Pulls it down, so the city looks cleaner — The real average of the two scored inspections is 9.50. Fill the two blanks with 0 and it drops to 4.75 - the city's food-safety record looks about twice as good, purely because two inspections have not been typed in yet. `COALESCE` never warns you about this. Choosing a fallback is a claim about what the missing data means, and here `0` claims a perfect inspection nobody performed.

## One Command Turns a Query Into **Stored Rows**

*Context: `AS` here does the same job it does for a column alias: it names the thing, then gives the query that fills it. The stored rows are written to disk when this command runs, so `CREATE MATERIALIZED VIEW` on a large table can genuinely take a while.*

**Analogy:** A screenshot of a live leaderboard opens instantly, but it froze the moment you took it. The live page is always current - it just has to be rebuilt every time you open it.

**Backup analogies** (if the primary doesn't land):

- **Food:** Meal prep means dinner is ready in two minutes later in the week. It is also the food you cooked back then - if the plan changed, you cook again.
- **Travel:** A printed boarding pass is instant to show and completely unaware that your gate just changed. The airline app is slower to load and always right.

**Instructor notes:**

> [SCRIPT] Point at `SELECT 7` in the output first - Postgres tells you how many rows it stored. That number is the whole idea: seven real rows now exist on disk, and nothing has to be joined again to read them.
> 
> [SCRIPT] Run the second statement and note how ordinary it looks. Querying a materialized view is just querying a table. `WHERE`, `ORDER BY`, `GROUP BY` and joins all work on it exactly as they would anywhere else - which matters, because the project asks for two further queries run against the view rather than against the base tables.
> 
> [SCRIPT] Introduce the screenshot comparison before the word "stale" so the next slide's surprise has somewhere to land.
> 
> [MISCONCEPTIONS] Fellows often expect the view to be a shortcut that still reads the live tables. It does not read them at all after this moment. Everything it will ever report is already decided.
> 
> [MISCONCEPTIONS] Re-running this exact command gives "relation restaurant_totals already exists". Expected, not a bug - drop it first or move on.

```sql
CREATE MATERIALIZED VIEW restaurant_totals AS
  SELECT dba, boro, COUNT(violation_id) AS tv
  FROM restaurants
  LEFT JOIN inspections USING (camis)
  LEFT JOIN violations USING (inspection_id)
  GROUP BY dba, boro;
SELECT * FROM restaurant_totals ORDER BY tv DESC;
```

## New Data Lands. The View **Doesn't Move**.

*Context: `REFRESH MATERIALIZED VIEW` re-runs the stored query and replaces every stored row. It is not an incremental update - the whole thing is rebuilt, which is why a big view is usually refreshed on a schedule rather than after every change.*

**Instructor notes:**

> [SCRIPT] Run the block one statement at a time, not all at once. The whole teaching moment is the beat between the first `3` and the `4` after the refresh, and pasting the whole thing skips straight past it.
> 
> [SCRIPT] After the first `SELECT`, say it plainly: the base table and the view now disagree, and neither of them is going to tell you. This is the real cost of the trade the last slide named.
> 
> [SCRIPT] Then run the refresh and the second `SELECT`. Ask how long that took on seven rows, and name honestly that on a real table of millions it is a genuine wait - which is exactly why teams schedule refreshes overnight instead of after every insert.
> 
> [MISCONCEPTIONS] Fellows often expect `REFRESH` to only pick up the new row. It rebuilds the entire result from scratch. The rebuilt answer is correct either way, but the cost is proportional to the whole query, not to what changed.
> 
> [MISCONCEPTIONS] Somebody will ask whether Postgres can refresh automatically. Core PostgreSQL has no built-in auto-refresh at all - teams schedule it from outside, with cron, the `pg_cron` extension, or whatever orchestrator already runs their pipelines. Scope this claim to Postgres when you say it: Oracle can refresh on commit, BigQuery refreshes materialized views on its own, and SQL Server's indexed views are maintained by the engine automatically. An answer found online may genuinely be right about a different database.

```sql
INSERT INTO violations VALUES
  (5, 4, '06D', 'Food surface not clean');
-- Still says 3
SELECT dba, tv FROM restaurant_totals
WHERE dba = 'Corner Bistro';
REFRESH MATERIALIZED VIEW restaurant_totals;
-- Now says 4
SELECT dba, tv FROM restaurant_totals
WHERE dba = 'Corner Bistro';
```

### 🤔 Check for Understanding: How Stale Is Too Stale?

*Mode: Quick-Fire Game*

Quick-fire: Your dashboard's view refreshes nightly at 2am. A violation is logged at 9am. What does the 10am dashboard show?

- The new violation, immediately
- Last night's numbers, until tomorrow
- An error, because the view is out of date

**Answer:** Last night's numbers, until tomorrow — The view reports whatever it stored at its last refresh, and nothing in between changes that. So the 10am dashboard is showing a picture of the database as it looked at 2am - correct as of then, quietly wrong now. That gap is not a bug; it is the trade you agreed to when you chose a materialized view, and it is the thing to state plainly to whoever reads the dashboard.

## Two Real Plans: **Five Lines, Then Three**

*Context: Both plans come back as several lines of text above the usual result. Read them bottom-up when they get nested: the deepest line runs first, and the top line is the last thing that happens.*

**Instructor notes:**

> [SCRIPT] Run the first one and walk the five lines together, slowly. It says `Seq Scan on restaurants`, then a `Filter` line naming the condition, then `Rows Removed by Filter: 4`, then planning and execution time. That is a complete plan and it is genuinely readable.
> 
> [SCRIPT] Point at the two `rows=` numbers on the scan line. The first is the planner's guess before running, the second is what actually came back. Here it guessed 4 and got 3. On a small table nobody has collected statistics for, a gap like that is normal and harmless - on a big table a wide gap is the first thing a performance engineer looks at.
> 
> [SCRIPT] Then run the second one. Three lines total, one `Seq Scan`, no joins anywhere. That is the whole payoff of the last section made visible: the joins already happened once, at creation time, and reading the view never redoes them.
> 
> [SCRIPT] If there is a spare minute, paste the original totals query after `EXPLAIN ANALYZE` for the contrast. It comes back as sixteen lines with three separate `Seq Scan` steps and two joins stacked above them - the work the view is no longer doing.
> 
> [SCRIPT] Be honest about scale: on seven rows every one of these numbers is a fraction of a millisecond and none of the timings mean anything on their own. What transfers is the shape - three table scans and two joins versus one scan.
> 
> [MISCONCEPTIONS] Fellows expect the execution time to be reproducible. It is not - run the same query twice and the number moves, because caching and whatever else the machine is doing both affect it. Compare shapes and row counts, not one run's milliseconds.

```sql
-- Start small: one table, one filter
EXPLAIN ANALYZE
SELECT dba FROM restaurants
WHERE boro = 'Brooklyn';

-- Now the view we built a moment ago
EXPLAIN ANALYZE SELECT * FROM restaurant_totals;
```
