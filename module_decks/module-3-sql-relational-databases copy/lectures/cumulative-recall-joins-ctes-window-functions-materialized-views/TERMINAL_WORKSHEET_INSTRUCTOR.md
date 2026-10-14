# Cumulative Recall: Joins, CTEs, Window Functions, Materialized Views

**Module 3: SQL & Relational Databases**

**Learning Objectives:**
- Rebuild a multi-table answer with the joins and aggregation the question actually needs, without a template
- Find what a query gets silently wrong when it runs clean and still returns rows
- Verify a result against a hand-built known answer before you trust it

> **You are not presenting this worksheet to students.** Use it as your own answer key while you run the same commands live, in front of the class.

## Scenario

Nothing new gets installed today and nothing new gets taught. The database you have been building all module is still running, and every tool you need is already in your hands. What changes is that the template is gone. You get a business question, you pick the tool, you write the query, and then you do the part that actually separates an analyst from a query: you prove the answer is right before you hand it to anybody. Every query in here runs clean. Not all of them are correct.

## Before You Start

A query runs with no error and returns a sensible-looking number. What would you have to do, concretely, to find out whether that number is actually true?

*Hint: Think about what you would need to already know before the query ran, and how small that known thing could be.*

## Documentation

- Only `LEFT JOIN` Finds What **Isn't There**: https://www.postgresql.org/docs/current/queries-table-expressions.html
- It Ran Clean. It's Also **Wrong**.: https://www.postgresql.org/docs/current/tutorial-agg.html
- `COALESCE` Doesn't Find a Value - **You Invent One**: https://www.postgresql.org/docs/current/functions-conditional.html
- A Stored View Keeps Answering From **Before**: https://www.postgresql.org/docs/current/sql-refreshmaterializedview.html
- One `COUNT(*)` Would Have **Caught It in Seconds**: https://www.postgresql.org/docs/current/functions-aggregate.html

## Only `LEFT JOIN` Finds What **Isn't There**

*Context: Open `psql` on the class database (`nyc_restaurants`) before the first query. `tv` is the alias for total violations, the same short name used throughout this module's queries on this database. `camis` is the restaurant id and `inspection_id` links an inspection to its violations. Nothing in this query changes data, so it is safe to re-run as many times as you like.*

**Instructor notes:**

> [ACTIVITY] Two blanks and a clause name. In person: three minutes at the keyboard, then call on somebody to read their line out. Online: three minutes, then paste your `JOIN` line in chat before anyone runs it. Ask for a predicted row count before enter gets pressed.
> 
> [SCRIPT] Five rows come back: Flatbush Fry, Bayside Grill, New Spot NYC, Harbor Grill and Sunset Diner. Then swap the `violations` join to `INNER` live and run it again. Zero rows. That contrast is the whole slide, and it lands far harder from a real empty result than from any explanation.
> 
> [SCRIPT] Say why `INNER` returns nothing, because the room will find it surprising: a restaurant with no violations has no matching violation row, so an inner join throws it away before `COUNT` ever sees it. The rows you are looking for are precisely the rows an inner join deletes.
> 
> [MISCONCEPTIONS] A common wrong answer for the third blank is `WHERE`. It reads naturally and it fails, because the count does not exist yet at that point. This is the warm-up question arriving in real syntax two minutes later, which is exactly why the warm-up came first.
> 
> [SOURCES] PostgreSQL documentation, "Table Expressions," on `LEFT OUTER JOIN`: for each row of the left-hand table, if no matching right-hand row exists, the joined row is still added "with null values in columns of T2." A `COUNT` of a nullable column ignores those nulls, which is why the count lands on zero rather than on one.

```sql
-- Which restaurants have no violations at all?
SELECT dba, COUNT(violation_id) AS tv
FROM restaurants
LEFT JOIN inspections USING (camis)
LEFT JOIN violations USING (inspection_id)
GROUP BY dba
HAVING COUNT(violation_id) = 0;
```

## It Ran Clean. It's Also **Wrong**.

*Context: `insp` is the alias for the inspection count. The `violations` table holds one row per violation found during an inspection, so a single inspection can have several violation rows attached to it.*

**Analogy:** Counting who is coming to the cookout from group-chat replies. One cousin who answers in two different chats gets counted twice, and you buy for a crowd that never shows up.

**Backup analogies** (if the primary doesn't land):

- **Music:** Counting how many songs you own by counting playlist entries. A track sitting in four playlists looks like four songs.
- **Travel:** Counting travellers by counting boarding passes. Anyone with a connecting flight gets counted twice, and the van you booked is too big.

**Instructor notes:**

> [ACTIVITY] Before pressing enter, have everyone write down what they expect for Corner Bistro. In person: hold the number up on fingers. Online: numbers in chat at once. Then run it. Corner Bistro comes back as 4.
> 
> [SCRIPT] Now ask the room to add every restaurant's count up out loud. They come to five - but the whole `inspections` table only holds four rows, across every restaurant in the database. The query threw no error, returned every restaurant, sorted nicely, and is wrong. Do not name the cause yet - the next slide asks the room to find it.
> 
> [SCRIPT] Introduce the cookout comparison as a hint, not a reveal: counting who is coming to a cookout from group-chat replies, where one cousin who answers in two different chats gets counted twice. Let the room sit with that parallel rather than explaining it - the next slide is where the mechanism gets named.
> 
> [SCRIPT] Say out loud that the fix is not a clever function. It is noticing at all. A wrong number that arrives quietly is only ever caught by somebody who was already checking. Do not explain why yet - hold the rest for after the next slide's reveal.

```sql
-- How many inspections has each restaurant had?
SELECT dba, COUNT(inspection_id) AS insp
FROM restaurants
LEFT JOIN inspections USING (camis)
LEFT JOIN violations USING (inspection_id)
GROUP BY dba
ORDER BY insp DESC;
```

### 🤔 Check for Understanding: Diagnosing an Inflated Count

*Mode: Poll*

Your per-restaurant counts add up to 5, but the whole `inspections` table only holds 4 rows. What caused the inflated number?

- The `LEFT JOIN` dropped rows it should have kept
- Joining `violations` duplicated each inspection row
- `COUNT` can't be used on a joined column

**Answer:** Joining `violations` duplicated each inspection row — Joining `violations` in duplicates each inspection row once per violation attached to it, and `COUNT` faithfully counts the duplicates - the join did exactly what it was told, nobody told it the right thing. One inspection with two violations produces two joined rows, and `COUNT(inspection_id)` counts both of them. Corner Bistro genuinely had three inspections, and one of those carried two violations, so the count landed on four. Notice it was only wrong for that one restaurant: every other count in the result was correct, which is exactly why glancing at the output catches nothing. The rule worth carrying into the project: every extra table you join can multiply your rows, so counting anything after a join means asking what one row now represents.

## `COALESCE` Doesn't Find a Value - **You Invent One**

*Context: A New York City inspection `score` counts violation points, so a higher number is a worse result. `pts` is the score after the fallback is applied and `rnk` is the ranking. Two inspections in this database were never scored at all.*

**Instructor notes:**

> [ACTIVITY] Have Fellows write it before you show it, since every piece is already familiar. Three minutes. Then ask a harder question than the syntax one: is zero an honest fallback here? In person, turn and talk for sixty seconds. Online, one line in chat each.
> 
> [SCRIPT] Four rows come back. Corner Bistro scores 12 and ranks first, Green Leaf Cafe scores 7 and ranks second, and two never-scored inspections both come back as 0 and tie at rank 3. The tie is worth pausing on, because `RANK` sharing a number for equal values is exactly the behaviour that surprised the room when ranking was first taught.
> 
> [SCRIPT] Now the real point of the slide. `COALESCE` did not discover anything. It replaced an unknown with a number that a human chose, and here that choice quietly claims two inspections that were never scored had a perfect result. Nothing in the output flags that. It is a silent bug of a different kind: correct SQL, dishonest meaning.
> 
> [MISCONCEPTIONS] This slide's own `JOIN` is a deliberate `INNER JOIN`, the only one in today's deck - every other query uses `LEFT JOIN`. A `LEFT JOIN` here would pull in the five never-inspected restaurants too, coalescing all of them to 0 and swelling the rank-3 tie from 2 rows to 7 - exactly the dishonesty this slide is warning against.
> 
> [SCRIPT] Ask what a better fallback would be and let the room argue briefly. There is no single right answer, which is the lesson. Leaving the null in place and filtering those rows out is often the honest move. The project asks for a `COALESCE` query on a genuinely nullable column, so this decision is coming for everyone.
> 
> [MISCONCEPTIONS] The most common reading is that `COALESCE` "fixes" missing data. It does not fix anything. It hides the gap behind a value you picked, and whether that is helpful or misleading depends entirely on what the column means.
> 
> [SOURCES] PostgreSQL documentation, "Conditional Expressions": `COALESCE` "returns the first of its arguments that is not null," and is described as "often used to substitute a default value for null values when data is retrieved for display." Substituting for display is the documented purpose. Substituting before an average or a ranking is a modelling decision the documentation makes no claim about.

```sql
WITH graded AS (
  SELECT dba, COALESCE(score, 0) AS pts
  FROM restaurants
  JOIN inspections USING (camis)
)
SELECT dba, pts,
  RANK() OVER (ORDER BY pts DESC) AS rnk
FROM graded
ORDER BY rnk;
```

### 🤔 Check for Understanding: Why `<> 'A'` Loses the Ungraded Rows

*Mode: Quick-Fire Game*

You want every inspection that isn't grade A, so you filter on `WHERE grade <> 'A'`. It returns 1 row, not 3. Where did the other two go?

- Comparing `NULL` to anything, even with `<>`, is never true
- The two ungraded rows were filtered out earlier
- `<>` doesn't work on a text column

**Answer:** Comparing `NULL` to anything, even with `<>`, is never true — `NULL` means unknown, so asking whether an unknown grade is not-equal to 'A' gives back unknown rather than true, and `WHERE` only keeps rows where the condition is genuinely true. The two ungraded inspections quietly vanish, even though "ungraded" is intuitively not "A". The correct clause adds `OR grade IS NULL` explicitly - `<>` and `=` both treat `NULL` the same way. This is the sharpest example of a silent bug in the whole module, because the query runs, the syntax is legal, and the smaller-than-expected result looks like a real finding, not a bug.

### 🤔 Check for Understanding: Two Numbers, One Question

*Mode: Turn and Talk*

Your dashboard says one number and a stakeholder's own report says another. Walk me through what you'd do first.

## A Stored View Keeps Answering From **Before**

*Context: `restaurant_totals` is the materialized view this module built earlier, holding one row per restaurant with its total violation count. This is the one code-along today that writes data - before class, run `SELECT max(violation_id) FROM violations;` and use the next free id. This only affects results that join `violations` directly: the earlier fan-out demo ("It Ran Clean") will no longer reproduce its exact numbers if re-run after this cell - don't re-run it against the board numbers.*

**Analogy:** A printed newspaper is fast to read and correct as of press time - a new event doesn't rewrite it. A live news site is slower to load and always current, because it re-checks its sources every time.

**Backup analogies** (if the primary doesn't land):

- **Sports:** A printed program lists the lineup as it stood at kickoff. A trade the next day doesn't change the program - only a new one would.

**Instructor notes:**

> [ACTIVITY] Run the first `SELECT` and the `INSERT`, then stop before the refresh. Ask the room to predict what the view says now. In person: hands up for "1" or "2". Online: the number in chat. Most of the room says 2. It says 1.
> 
> [SCRIPT] Name the column list on the `INSERT` before running it: naming columns explicitly instead of relying on their physical order is the same habit as everything else today - don't trust something you never checked.
> 
> [SCRIPT] That gap is the whole slide. A materialized view stores rows, not a live question, so new data underneath it changes nothing at all until somebody runs `REFRESH`. Then run the refresh and read it again: 2.
> 
> [SCRIPT] Connect it to the honest version of the tradeoff rather than making the view sound broken. It is fast precisely because the answer is already computed. Speed and freshness are the two ends of that trade, and choosing a view means choosing to manage the freshness yourself.
> 
> [SCRIPT] Name where this bites in the project. The final questions have to be answered against the view rather than recomputed from the base tables, which means the refresh has to have happened after the data was loaded. A stale view produces a confidently wrong answer with no error message.
> 
> [MISCONCEPTIONS] Fellows regularly expect a materialized view to behave like an ordinary view and update itself. An ordinary view really does re-run its query every time. The word "materialized" is the entire difference, and it means the rows were made real and written down.
> 
> [SOURCES] PostgreSQL documentation, "CREATE MATERIALIZED VIEW": the query "is executed and used to populate the view at the time the command is issued... and may be refreshed later using REFRESH MATERIALIZED VIEW." "REFRESH MATERIALIZED VIEW" adds that it "completely replaces the contents of a materialized view" and that "the old contents are discarded." The clearest statement of the tradeoff is in the "Materialized Views" chapter itself: "While access to the data stored in a materialized view is often much faster than accessing the underlying tables directly or through a view, the data is not always current."

```sql
-- The stored view still says 1
SELECT tv FROM restaurant_totals
WHERE dba = 'Green Leaf Cafe';
INSERT INTO violations
  (violation_id, inspection_id, violation_code, violation_description)
VALUES (6, 2, '02B', 'Hot food held below 140F');
REFRESH MATERIALIZED VIEW restaurant_totals;
-- Now it says 2
SELECT tv FROM restaurant_totals
WHERE dba = 'Green Leaf Cafe';
```

## One `COUNT(*)` Would Have **Caught It in Seconds**

*Context: `truth` is just an alias naming what this number is for: the total that every per-restaurant breakdown has to add back up to - the same tasting-one-spoonful habit the next diagram names formally. Neither query changes data, so both are safe to re-run.*

**Instructor notes:**

> [ACTIVITY] Run the first query, write the number on the board or pin it in chat, and leave it visible. Then have Fellows write the second query themselves before you show it. Two minutes. Ask them to add their own result column up out loud before anyone declares victory.
> 
> [SCRIPT] The total is 4. The corrected breakdown gives Corner Bistro 3, Green Leaf Cafe 1, and zero for everyone else. Three plus one is four, so the breakdown reconciles against the total. The earlier version summed to five, which is the number that should have set off an alarm.
> 
> [SCRIPT] Name the habit and give it the name from the key-terms slide. This is a row count check: add the breakdown back up and confirm it matches the source table's own total. It costs one query and about ten seconds, and it catches the single most common silent bug in this whole module.
> 
> [SCRIPT] Point at the fix itself, since it is smaller than people expect. The only change is that `violations` is no longer joined. If you are not counting a table, do not bring it into the join.
> 
> [MISCONCEPTIONS] Fellows sometimes conclude that the lesson is "never join three tables." That is not it - the fan-out demo earlier today joined all three correctly, right up until it counted a column from the wrong side of that join. The rule is narrower and more useful: know what one row represents after every join you add, and check the totals when you are counting.

```sql
-- The check: how many inspections exist at all?
SELECT COUNT(*) AS truth FROM inspections;

-- The fix: don't join what you aren't counting
SELECT dba, COUNT(inspection_id) AS insp
FROM restaurants
LEFT JOIN inspections USING (camis)
GROUP BY dba
ORDER BY insp DESC;
```
