# Instructor Lecture Notes: module-3-sql-relational-databases

---

**Lesson 1**

# Instructor Prep: Relational Thinking & Normalization
*Module 3: SQL & Relational Databases*

## Lecture Time Estimate
- Opening: ~8 min
- One Given Example: ~16 min
- Now, Build One From a Mess: ~36 min
- **Total: ~60 min**

## Prerequisites
- Terminal/command-line comfort (Modules 0-2) — psql starts next class
- General data literacy: What a row/column/dataset is (Module 0)

## Learning Objectives
- Explain what primary keys, foreign keys, and normalization mean, and why splitting data into related tables reduces redundancy compared to one flat spreadsheet
- Take a deliberately un-normalized table through 1NF, 2NF, and 3NF, live

## Project Connection
*Say this out loud at some point in the lecture - it's the answer to "why does this matter for my project?"*

Every one of the project's 7 given business questions depends on a schema that's actually normalized to at least 3NF, with real primary and foreign keys expressing the domain's real relationships — Objective 5 later grades independently spotting a schema that skips this. Today is where that judgment starts, on a table small enough to reason through by hand.

## Section Flow (Why Each Transition Is There)
- **Warmed Up → One Given Example**: You'll see a worked, already-correct schema first — then learn to build one yourself.
- **A Clean Example → But Why Bother?**: One flat spreadsheet feels simpler — until it has to grow.
- **You Can Recognize a Good Design → Now, Build One From a Mess**: A real dataset rarely arrives already normalized — you have to get it there.

## Additional Analogies / Use Cases
- **Use case:** A Spreadsheet Row Limit Quietly Dropped 16,000 COVID Cases (slide 11)
  - *Source:* [The Register, October 2020](https://www.theregister.com/2020/10/05/excel_england_coronavirus_contact_error/)
  - *Summary:* In September-October 2020, Public Health England's automated process for compiling COVID-19 test results used an outdated .xls file format capped at 65,536 rows. Because each test result generated several rows and the process split data across templates capped near 1,400 cases each, any case past that per-file limit was silently dropped rather than flagged. Over an 8-day window, 15,841 positive cases were left off the file that fed England's contact-tracing system, delaying or preventing contact tracing for an estimated 48,000 close contacts. The fix was switching to a modern file format without the row cap.
  - *Key takeaway:* One growing flat file has real, hard limits — a relational database is built specifically so structure, not luck, is what keeps data from silently breaking as it grows.

## Misconceptions to Watch For
- A Primary Key Uniquely Identifies a Row: A common early mix-up: assuming the primary key has to be the *first* column, or has to be a number. Neither is true — what matters is uniqueness, not position or type.
- A Worked Schema: Customers, Orders, Menu Items: Fellows sometimes expect every table to link to every other table. Here, `orders` links to `customers`, but nothing links directly to `menu_items` yet — that gap is deliberate, and today's normalization walkthrough resolves it for real.
- 1NF: Every Cell Holds One Value: Fellows often think 1NF is the finish line once every cell has one value. It's necessary, not sufficient — the next slide is the pivot to why.
- Rule 2: No Partial Dependencies: "Partial dependency" sounds abstract until it's framed concretely: it just means a column that only cares about *part* of what uniquely identifies the row, not the whole thing.
- 3NF: The Final, Normalized Schema: Fellows sometimes confuse this with 2NF's partial dependency. The distinction: 2NF is about a *composite* key's parts; 3NF is about one non-key column depending on *another* non-key column instead of the key itself.

## Further Resources (Deck's "Keep Learning" Links)
- [Database Normalization – Normal Forms, 1NF, 2NF, 3NF, With Table Examples](https://www.freecodecamp.org/news/database-normalization-1nf-2nf-3nf-table-examples/) (reading, ~10 min read)
  - The same restaurant walkthrough, written out again
- [SQLZoo](https://sqlzoo.net/wiki/SQL_Zoo) (practice, ~20 min hands-on)
  - Free SQL tutorials — useful once psql starts
- [The SQL Murder Mystery](https://mystery.knightlab.com/) (game, ~30-45 min)
  - A free detective game, really SQL practice

## Top Engagement Strategies Used
- **Turn and Talk** — Warm-Up: Terminal Comfort: Turn and talk: pairs discuss 1-2 minutes, then a few share out.
- **Quick-Fire Game** — Spotting a Foreign Key: Quick-fire, leaderboard-style prompt - keep the pace brisk; celebrate participation, not just correctness.
- **Poll** — Spotting a 1NF Violation: Quick multiple-choice check - reveal results live before moving on.
- **Turn and Talk** — Naming the Repetition: Turn and talk: pairs discuss 1-2 minutes, then a few share out.
- **Quick-Fire Game** — Spotting a Partial Dependency: Quick-fire, leaderboard-style prompt - keep the pace brisk; celebrate participation, not just correctness.
- **Quick-Fire Game** — The Payoff: Update Once, Not Everywhere: Quick-fire, leaderboard-style prompt - keep the pace brisk; celebrate participation, not just correctness.


---

**Lesson 2**

# Instructor Prep: Your First Database: psql, Tables & Constraints
*Module 3: SQL & Relational Databases*

## Lecture Time Estimate
- Opening: ~5 min
- One Quick Check: ~31 min
  - Code-along: ~20 min
- Code Along: Reading It Back: ~25 min
  - Code-along: ~4 min
- **Total: ~61 min**
- **Total code-along time: ~24 min**

## Code-Along Map (Where to Open the Notebook)
- Slide 9: **One Command Creates a Real Database** — code-along, have Fellows open their notebook
- Slide 10: **Your First Table, With Real Constraints** — code-along, have Fellows open their notebook
- Slide 11: **One INSERT, Four Rows At Once** — code-along, have Fellows open their notebook
- Slide 13: **A Second Table: Foreign Key + CHECK** — code-along, have Fellows open their notebook
- Slide 14: **The Same INSERT Pattern, a Second Table** — code-along, have Fellows open their notebook
- Slide 17: **Reading It Back: SELECT, WHERE, ORDER BY** — code-along, have Fellows open their notebook
- Slide 20: **Constraints Actually Protect You** — watch-only demo, not a code-along

## Prerequisites
- Yesterday: Primary keys, foreign keys, normalization (1NF, 2NF, 3NF)
- Terminal/command-line comfort (Modules 0-2)

## Learning Objectives
- Create a PostgreSQL database and a table with correct column types and constraints (NOT NULL, PRIMARY KEY, FOREIGN KEY) via psql, following a step-by-step template
- Write basic SELECT, WHERE, and ORDER BY queries against a real table

## Project Connection
*Say this out loud at some point in the lecture - it's the answer to "why does this matter for my project?"*

Early in the project's own sprint, you'll confirm psql is running and actually connecting, on your own machine, before anything else. Shortly after, you'll write your own schema.sql with real constraints. Today is the first real, typed rep of both, on a dataset you'll never touch again once the project starts.

## Section Flow (Why Each Transition Is There)
- **Yesterday's Design → One Quick Check**: A fast recall check on yesterday's vocabulary, before today's real syntax starts.
- **Still Solid → Meet psql**: Everything yesterday was on paper — today it becomes a real, running database.
- **Tool, Introduced → Code Along: Creating Your Database**: The first real command of the module.
- **One Table, Built → Code Along: A Second Table, With a Foreign Key**: Yesterday's FK definition, as real syntax for the first time.
- **Two Tables, Built → Code Along: Reading It Back**: SELECT, WHERE, and ORDER BY — the first real queries of the module.
- **Reading, Solid → Code Along: Constraints Actually Protect You**: The payoff — watching a constraint reject bad data in real time.

## Additional Analogies / Use Cases
- A Second Table: Foreign Key + CHECK (nightlife & venues): A CHECK constraint is like a bouncer with a strict guest list — even if your app already validated the value, the database checks it again before letting the row in.

## Misconceptions to Watch For
- Your First Table, With Real Constraints: A common assumption: constraints are optional "best practice," skippable under time pressure. They're the opposite — an active enforcement mechanism, not documentation.

## Further Resources (Deck's "Keep Learning" Links)
- [PostgreSQL Tutorial: CREATE TABLE](https://www.postgresql.org/docs/current/sql-createtable.html) (documentation, ~10 min read)
  - The official, authoritative reference for every constraint type
- [SQLBolt](https://sqlbolt.com/) (practice, ~20 min hands-on)
  - Free, bite-sized interactive SQL lessons and exercises

## Top Engagement Strategies Used
- **Turn and Talk** — Warm-Up: PK vs. FK: Turn and talk: pairs discuss 1-2 minutes, then a few share out.
- **Quick-Fire Game** — Foreign Key, as Real Syntax: Quick-fire, leaderboard-style prompt - keep the pace brisk; celebrate participation, not just correctness.
- **Poll** — Predicting a WHERE Result: Quick multiple-choice check - reveal results live before moving on.
- **Would You Rather** — Where Should Validation Actually Live?: Force a binary choice, then ask Fellows to justify it out loud - surfaces reasoning, not just the pick.


---

**Lesson 3**

# Instructor Prep: Joins: INNER vs. LEFT
*Module 3: SQL & Relational Databases*

## Lecture Time Estimate
- Opening: ~5 min
- One Quick Check: ~23 min
  - Code-along: ~12 min
- Now, LEFT JOIN: ~32 min
  - Code-along: ~8 min
- **Total: ~60 min**
- **Total code-along time: ~20 min**

## Code-Along Map (Where to Open the Notebook)
- Slide 7: **Reconnecting to Yesterday's Database** — code-along, have Fellows open their notebook
- Slide 8: **Finishing What Yesterday Left Unfinished** — code-along, have Fellows open their notebook
- Slide 12: **INNER JOIN: Only Real Matches** — code-along, have Fellows open their notebook
- Slide 17: **LEFT JOIN: Every Restaurant, Match or Not** — code-along, have Fellows open their notebook
- Slide 22: **Which Restaurants Have Never Been Inspected?** — code-along, have Fellows open their notebook

## Prerequisites
- Yesterday: Creating tables with constraints, SELECT/WHERE/ORDER BY
- Earlier this module: Primary keys, foreign keys, why related tables exist at all

## Learning Objectives
- Explain what a JOIN does and use INNER JOIN to combine matching rows from two related tables
- Use LEFT JOIN to include every row from one table regardless of a match, and explain why INNER and LEFT JOIN can return different row counts

## Project Connection
*Say this out loud at some point in the lecture - it's the answer to "why does this matter for my project?"*

Every domain's first two given business questions are literally a join (Q1) and a left join (Q2) — the exact two query shapes built today, against a schema you'll design yourself instead of one already given.

## Section Flow (Why Each Transition Is There)
- **Yesterday's Two Tables → One Quick Check**: A fast recall check before today's tables start talking to each other.
- **Still Solid → Code Along: Picking Up Where Yesterday Left Off**: Same database, same two tables — a fresh terminal session, not a fresh start.
- **Five Restaurants Now → What a JOIN Actually Does**: Two tables, one query — combining rows on a matching key.
- **The Concept → Code Along: INNER JOIN**: The default join — only rows with a real match on both sides.
- **Only Matches, Confirmed → Now, LEFT JOIN**: Every restaurant, whether or not it's ever been inspected.
- **The Concept → Code Along: LEFT JOIN**: One word changes — everything else stays the same.
- **The Real Risk, Named → Code Along: Finding What's Missing**: Using LEFT JOIN on purpose, to find exactly what INNER JOIN hides.

## Misconceptions to Watch For
- A JOIN Combines Rows That Share a Key: A common assumption: a JOIN needs the column names to match exactly. They don't — `ON restaurants.camis = inspections.camis` would work identically even if the column were named `restaurant_id` in one table and `camis` in the other.
- "Looks Complete" Is Not the Same as Complete: Believing INNER JOIN and LEFT JOIN return the same rows whenever the data "looks complete" — the difference only shows up the moment a row genuinely has no match, which is exactly what makes it easy to miss until it's a real problem.
- Which Restaurants Have Never Been Inspected?: `WHERE i.inspection_id = NULL` looks reasonable but silently returns zero rows, always — `NULL` isn't a value comparisons can match against, so `=` never works on it. `IS NULL` is the only real way to check for a missing match, which is exactly why this specific query uses it.

## Further Resources (Deck's "Keep Learning" Links)
- [PostgreSQL Tutorial: JOIN](https://www.postgresql.org/docs/current/tutorial-join.html) (documentation, ~8 min read)
  - The official reference, straight from the source
- [SQL Joins Explained](https://www.w3schools.com/sql/sql_join.asp) (reading, ~10 min read)
  - Clear breakdown of every join type, with real examples
- [SQLBolt](https://sqlbolt.com/) (practice, ~15 min hands-on)
  - The same free interactive lessons from yesterday

## Top Engagement Strategies Used
- **Turn and Talk** — Warm-Up: What a Foreign Key Enforces: Turn and talk: pairs discuss 1-2 minutes, then a few share out.
- **Poll** — Predicting an INNER JOIN Row Count: Quick multiple-choice check - reveal results live before moving on.
- **Poll** — Predicting a LEFT JOIN Row Count: Quick multiple-choice check - reveal results live before moving on.
- **Would You Rather** — Which Join Should Be the Default?: Force a binary choice, then ask Fellows to justify it out loud - surfaces reasoning, not just the pick.


---

**Lesson 4**

# Instructor Prep: Aggregating with GROUP BY + HAVING
*Module 3: SQL & Relational Databases*

## Lecture Time Estimate
- Opening: ~5 min
- One Quick Check: ~26 min
  - Code-along: ~12 min
- Now, Filtering the Aggregate: ~30 min
  - Code-along: ~4 min
- **Total: ~60 min**
- **Total code-along time: ~16 min**

## Code-Along Map (Where to Open the Notebook)
- Slide 7: **Reconnecting, Then Adding One More Inspection** — code-along, have Fellows open their notebook
- Slide 9: **How Many Restaurants Is That, Really?** — code-along, have Fellows open their notebook
- Slide 13: **GROUP BY: One Row Per Restaurant, For Real** — code-along, have Fellows open their notebook
- Slide 18: **WHERE Can't Filter an Aggregate — Watch It Fail** — watch-only demo, not a code-along
- Slide 20: **HAVING: The Same Filter, In the Right Place** — code-along, have Fellows open their notebook

## Prerequisites
- Yesterday: INNER JOIN and LEFT JOIN, and why they can return different row counts
- Earlier this module: Creating tables, constraints, SELECT/WHERE/ORDER BY

## Learning Objectives
- Use GROUP BY to aggregate rows per real-world entity, instead of miscounting a joined result's raw rows
- Use HAVING to filter on an aggregated value, and explain why WHERE can't do the same thing

## Project Connection
*Say this out loud at some point in the lecture - it's the answer to "why does this matter for my project?"*

Every domain's third given business question is a GROUP BY + HAVING query — today's exact two-step pattern, on a schema you'll design yourself. The overcounting trap this lesson opens with is also a named risk in the rubric: a join that silently inflates a count is graded as a real sql-skill failure, not a style nitpick.

## Section Flow (Why Each Transition Is There)
- **Yesterday's Two Join Types → One Quick Check**: A fast recall check before today's rows get grouped instead of just joined.
- **Still Solid → Code Along: One More Real Inspection**: Picking up the same database, with one more real inspection added on purpose.
- **One More Row Added → Code Along: How Many Restaurants Is That, Really?**: A naive count, on the exact join from yesterday.
- **The Real Problem, Named → Code Along: GROUP BY, Fixing the Count**: Collapsing rows back to one per restaurant, before counting.
- **Correctly Counted → Now, Filtering the Aggregate**: Which restaurants actually have 2 or more inspections?
- **The Real Order → Code Along: Breaking It on Purpose**: Watching WHERE fail on an aggregate, for real.
- **The Error, Confirmed → Code Along: Fixing It With HAVING**: The exact same condition, moved to the one clause that's allowed to use it.

## Misconceptions to Watch For
- COUNT(*) Counts Rows, Not Real-World Things: Fellows often assume a JOIN "duplicates data" as a bug. It doesn't — every one of those 3 rows is a real, correct inspection record. The mistake isn't the join, it's counting its raw rows as if they were counting restaurants.
- WHERE Runs Before Grouping, HAVING Runs After: Believing WHERE can filter on an aggregated value like `COUNT(*)` — that's exactly what HAVING is for, and it's about to raise a real error to prove the point.

## Further Resources (Deck's "Keep Learning" Links)
- [PostgreSQL Tutorial: Aggregate Functions](https://www.postgresql.org/docs/current/tutorial-agg.html) (documentation, ~8 min read)
  - The official reference on GROUP BY and HAVING
- [SQL HAVING Clause Explained](https://www.w3schools.com/sql/sql_having.asp) (reading, ~6 min read)
  - Short, example-driven WHERE-vs-HAVING breakdown
- [SQLBolt](https://sqlbolt.com/) (practice, ~15 min hands-on)
  - The same free interactive lessons from earlier

## Top Engagement Strategies Used
- **Turn and Talk** — Warm-Up: Why LEFT JOIN Returned More Rows: Turn and talk: pairs discuss 1-2 minutes, then a few share out.
- **Turn and Talk** — The Overcounting Trap: Turn and talk: pairs discuss 1-2 minutes, then a few share out.
- **Poll** — Predicting a GROUP BY Result: Quick multiple-choice check - reveal results live before moving on.
- **Poll** — Predicting a HAVING Result: Quick multiple-choice check - reveal results live before moving on.
- **Turn and Talk** — Is HAVING Always Required?: Turn and talk: pairs discuss 1-2 minutes, then a few share out.


---

**Lesson 5**

# Instructor Prep: CTEs I: Syntax & Rewriting a Subquery
*Module 3: SQL & Relational Databases*

## Lecture Time Estimate
- Opening: ~5 min
- One Quick Check: ~25 min
  - Code-along: ~8 min
- Code Along: The Same Query, Named: ~22 min
  - Code-along: ~4 min
- **Total: ~52 min**
- **Total code-along time: ~12 min**

## Code-Along Map (Where to Open the Notebook)
- Slide 7: **Which Restaurants Beat the Average — The Hard Way** — code-along, have Fellows open their notebook
- Slide 13: **A CTE, By Itself First** — code-along, have Fellows open their notebook
- Slide 16: **The Same Query, Rewritten as a CTE** — code-along, have Fellows open their notebook

## Prerequisites
- Yesterday: GROUP BY and HAVING, and why WHERE can't filter an aggregate
- Earlier this module: INNER JOIN and LEFT JOIN

## Learning Objectives
- Explain what a CTE is and write one using a WITH clause
- Rewrite a nested subquery as a CTE, and explain why it's more readable

## Project Connection
*Say this out loud at some point in the lecture - it's the answer to "why does this matter for my project?"*

The project's rubric doesn't just ask for any CTE — it specifically grades whether the CTE "genuinely improves readability" over the equivalent nested subquery. Today's side-by-side rewrite is exactly that judgment call, made concrete on a query small enough to compare both versions at a glance.

## Section Flow (Why Each Transition Is There)
- **Yesterday's Aggregates → One Quick Check**: A fast recall check before today's rewrite starts.
- **Still Solid → Code Along: A Genuinely Hard Query**: The exact same question yesterday's GROUP BY answered — now nested inside a subquery.
- **The Shape → Code Along: A CTE, By Itself First**: One small, real CTE — no rewrite yet, just the bare syntax.
- **The Bare Syntax, Solid → Code Along: The Same Query, Named**: Same question, same answer, read top-to-bottom this time.

## Misconceptions to Watch For
- Which Restaurants Beat the Average — The Hard Way: Fellows often assume "correct" and "readable" are the same thing. This query is completely correct — it's also genuinely hard to trust at a glance, which is a real, separate problem.
- A CTE Names a Result Set, Up Front: Fellows sometimes assume a CTE is faster than a subquery. It isn't, reliably. The real win here is readability, not performance.

## Further Resources (Deck's "Keep Learning" Links)
- [PostgreSQL Tutorial: WITH Queries (CTEs)](https://www.postgresql.org/docs/current/queries-with.html) (documentation, ~10 min read)
  - The official, authoritative reference on CTEs
- [CTE in SQL](https://www.geeksforgeeks.org/sql/cte-in-sql/) (reading, ~8 min read)
  - A real CTE-vs-subquery comparison, with more examples
- [SQLBolt](https://sqlbolt.com/) (practice, ~15 min hands-on)
  - The same free interactive lessons from earlier

## Top Engagement Strategies Used
- **Turn and Talk** — Warm-Up: Why WHERE Failed on COUNT: Turn and talk: pairs discuss 1-2 minutes, then a few share out.
- **Turn and Talk** — Correct vs. Readable: Turn and talk: pairs discuss 1-2 minutes, then a few share out.
- **Poll** — Predicting a Simple CTE's Row Count: Quick multiple-choice check - reveal results live before moving on.
- **Poll** — Confirming the Rewrite Matches: Quick multiple-choice check - reveal results live before moving on.
- **Would You Rather** — When Does a CTE Actually Earn Its Place?: Force a binary choice, then ask Fellows to justify it out loud - surfaces reasoning, not just the pick.


---

**Lesson 6**

# Instructor Prep: CTEs II: Decomposing a Multi-Table Question, With a Peer
*Module 3: SQL & Relational Databases*

## Lecture Time Estimate
- Opening: ~5 min
- One Quick Check: ~19 min
  - Code-along: ~8 min
- Code Along: The Real, Chained Solution: ~28 min
  - Code-along: ~4 min
- **Total: ~52 min**
- **Total code-along time: ~12 min**

## Code-Along Map (Where to Open the Notebook)
- Slide 7: **A Third Table: Violations, Per Inspection** — code-along, have Fellows open their notebook
- Slide 8: **Adding Real Violation Records** — code-along, have Fellows open their notebook
- Slide 13: **Step 1: Violations Per Inspection** — code-along, have Fellows open their notebook
- Slide 14: **Step 2: Chaining the Second CTE** — watch-only demo, not a code-along

## Prerequisites
- Yesterday: WITH syntax, and rewriting a subquery as a single CTE
- Earlier this module: INNER JOIN, LEFT JOIN, GROUP BY, HAVING

## Learning Objectives
- With a peer, decompose a multi-table business question into a decomposition plan spanning 3+ tables
- Chain multiple CTEs in one query, each building on the one before it

## Project Connection
*Say this out loud at some point in the lecture - it's the answer to "why does this matter for my project?"*

The project's rubric grades whether a CTE "genuinely improves readability" — the real test of that isn't a single-table rewrite, it's exactly today's kind of question: one that touches 3+ tables and would be genuinely unreadable as one dense, nested statement.

## Section Flow (Why Each Transition Is There)
- **Yesterday's One CTE → One Quick Check**: A fast recall check before today's question needs two.
- **Still Solid → Code Along: A Third Table Joins the Database**: One level deeper than inspections — real violations, per inspection.
- **The Plan → Code Along: The Real, Chained Solution**: Compare this to what your pair sketched.

## Misconceptions to Watch For
- For Each Restaurant: Inspections AND Violations: Fellows sometimes assume more tables just means more JOINs bolted onto one query. The real skill here is deciding what to compute *first*, before deciding how to join it to everything else.
- With a partner: Sketch a decomposition plan (a pla: A pair that reaches for a single CTE joining all 3 tables at once will likely hit the same overcounting trap from earlier this module — violations and inspections both multiplying the row count if grouped together carelessly. Let them discover this, don't preempt it.

## Further Resources (Deck's "Keep Learning" Links)
- [PostgreSQL Tutorial: WITH Queries (CTEs)](https://www.postgresql.org/docs/current/queries-with.html) (documentation, ~10 min read)
  - The same official reference from yesterday
- [CTE in SQL](https://www.geeksforgeeks.org/sql/cte-in-sql/) (reading, ~8 min read)
  - Includes real multi-CTE, chained examples
- [SQLBolt](https://sqlbolt.com/) (practice, ~15 min hands-on)
  - The same free interactive lessons from earlier

## Top Engagement Strategies Used
- **Turn and Talk** — Warm-Up: Subquery vs. CTE: Turn and talk: pairs discuss 1-2 minutes, then a few share out.
- **Whiteboard / Collaborative Board** — Planning a 3-Table Decomposition: Collaborative board (Padlet/Jamboard/physical) - everyone posts at once, then scan together for patterns.
- **Poll** — Predicting the Chained Result: Quick multiple-choice check - reveal results live before moving on.
- **Turn and Talk** — Was Chaining Actually Necessary?: Turn and talk: pairs discuss 1-2 minutes, then a few share out.


---

**Lesson 7**

# Instructor Prep: Window Functions I: Syntax
*Module 3: SQL & Relational Databases*

## Lecture Time Estimate
- Opening: ~5 min
- Why Window Functions Exist: ~6 min
- Code Along: Writing RANK() and ROW_NUMBER(): ~41 min
  - Code-along: ~8 min
- **Total: ~52 min**
- **Total code-along time: ~8 min**

## Code-Along Map (Where to Open the Notebook)
- Slide 8: **Sorted, But Not Numbered** — code-along, have Fellows open their notebook
- Slide 9: **Same Query, Now With RANK() and ROW_NUMBER()** — code-along, have Fellows open their notebook

## Prerequisites
- Yesterday: Chaining multiple CTEs together in one WITH clause
- Earlier this module: ORDER BY, and GROUP BY aggregation

## Learning Objectives
- Explain how a window function differs from GROUP BY - every row stays, and a computed value is added beside it
- Write a window function using RANK() or ROW_NUMBER() with an OVER (ORDER BY ...) clause

## Project Connection
*Say this out loud at some point in the lecture - it's the answer to "why does this matter for my project?"*

The project's own window-function question needs a real RANK()/ROW_NUMBER() ranking query, spot-checked against known values - exactly today's syntax, applied to the schema you design yourself.

## Section Flow (Why Each Transition Is There)
- **Yesterday's Chained CTEs → Why Window Functions Exist**: ORDER BY sorts rows - it never actually labels each one's place.
- **The Idea → Code Along: Writing RANK() and ROW_NUMBER()**: Same totals as yesterday's chain, now with a real rank attached.

## Misconceptions to Watch For
- GROUP BY Collapses Rows - a Window Function Doesn't: Fellows often assume a window function must "shrink" the result the way GROUP BY does. The whole point is that it doesn't - the row count going in equals the row count coming out.
- Sorted, But Not Numbered: Fellows sometimes assume the row's position on screen already counts as its rank. That position isn't real data - it's just how the terminal happens to print the result.
- Same Query, Now With RANK() and ROW_NUMBER(): A common assumption: RANK() and ROW_NUMBER() always return the same numbers. They only diverge the moment a real tie shows up - which is exactly why this query's data was built to have one.

## Further Resources (Deck's "Keep Learning" Links)
- [PostgreSQL Tutorial: Window Functions](https://www.postgresql.org/docs/current/tutorial-window.html) (documentation, ~10 min read)
  - The official reference, straight from the source
- [SQL Ranking Window Functions With Examples](https://datalemur.com/sql-tutorial/sql-rank-dense_rank-row_number-window-function) (reading, ~10 min read)
  - RANK/DENSE_RANK/ROW_NUMBER, tied to real interview questions
- [SQL Window Functions Tutorial](https://www.thoughtspot.com/sql-tutorial/sql-window-functions) (practice, ~15 min hands-on)
  - A live in-browser editor - write real ranking queries

## Top Engagement Strategies Used
- **Poll** — Warm-Up: What ORDER BY Actually Does: Quick multiple-choice check - reveal results live before moving on.
- **Poll** — Predicting a Real Tie: Quick multiple-choice check - reveal results live before moving on.
- **Poll** — The Gap RANK() Leaves After a Tie: Quick multiple-choice check - reveal results live before moving on.
- **Quick-Fire Game** — Quick-Fire: Guaranteed Unique Numbers: Quick-fire, leaderboard-style prompt - keep the pace brisk; celebrate participation, not just correctness.
- **Would You Rather** — Choosing the Right One Under a Tie: Force a binary choice, then ask Fellows to justify it out loud - surfaces reasoning, not just the pick.
- **Turn and Talk** — Window Function vs. GROUP BY, in Your Own Words: Turn and talk: pairs discuss 1-2 minutes, then a few share out.


---

**Lesson 8**

# Instructor Prep: Window Functions II: PARTITION BY & Ranking Within Groups
*Module 3: SQL & Relational Databases*

## Lecture Time Estimate
- Opening: ~5 min
- Why One Ranking Can Hide the Real Answer: ~32 min
  - Code-along: ~13 min
- Code Along: Returning Only the Winners: ~22 min
  - Code-along: ~4 min
- **Total: ~59 min**
- **Total code-along time: ~17 min**

## Code-Along Map (Where to Open the Notebook)
- Slide 8: **Two More Restaurants, So Every Borough Has a Group** — code-along, have Fellows open their notebook
- Slide 9: **Yesterday's Ranking, Now With Boroughs Showing** — code-along, have Fellows open their notebook
- Slide 12: **Ranking Restarts in Each Borough** — code-along, have Fellows open their notebook
- Slide 17: **Top-N Per Group Needs a CTE Wrapper** — code-along, have Fellows open their notebook

## Prerequisites
- Yesterday: RANK() and ROW_NUMBER() with an OVER (ORDER BY ...) clause
- Earlier this module: Chaining multiple CTEs in one WITH clause, and GROUP BY aggregation

## Learning Objectives
- Add PARTITION BY to an OVER clause so a ranking restarts inside each group
- Return just each group's top row by wrapping a ranked query in a CTE

## Project Connection
*Say this out loud at some point in the lecture - it's the answer to "why does this matter for my project?"*

The project's window-function question asks for a ranking that means something per group, not one flat list. PARTITION BY plus a CTE wrapper is how you get each group's real winner out of your own schema.

## Section Flow (Why Each Transition Is There)
- **One Ranking Over Everything → Why One Ranking Can Hide the Real Answer**: A restaurant can be middling citywide and still be the worst on its own block.
- **The Chart Analogy → Code Along: Setting Up Real Groups to Rank**: Two more restaurants, so every borough has a real group to rank inside.
- **One Big Tie → Code Along: Adding PARTITION BY**: One keyword decides which rows a rank is measured against.
- **The Order Clauses Actually Run → Code Along: Returning Only the Winners**: A rank you can see is not yet a rank you can filter on.

## Misconceptions to Watch For
- Quick recall: Last class three restaurants tied on: Some Fellows expect a tie to raise an error or get broken automatically. It does neither - the database reports the tie honestly and leaves the tie-breaking decision to you.
- One Flat Ranking Can't Answer a Per-Group Question: Fellows often assume a per-group ranking must need a separate query per group, or a `WHERE boro = 'Queens'` run three times. One query does all of it at once - that is exactly what `PARTITION BY` buys you.
- Two More Restaurants, So Every Borough Has a Group: If anyone runs this twice they get "duplicate key value violates unique constraint restaurants_pkey". That is the primary key from this module's own table-creation lesson doing its job, not a broken command. Say so out loud and move on rather than debugging it live.
- Yesterday's Ranking, Now With Boroughs Showing: Fellows sometimes read the `ORDER BY boro` in the final line as if it grouped the ranking. It did not - sorting output and defining a ranking's comparison group are two different jobs.
- Ranking Restarts in Each Borough: The most common wrong guess here is `GROUP BY boro`. That collapses the table to three rows, one per borough, and the restaurant names disappear entirely. Same word "group," opposite effect on your row count.
- Quick-fire: There are three boroughs in the table.: "One row per partition" is the assumption to break here. `PARTITION BY` decides the comparison group; it never promises a unique winner inside it.
- Same Word 'Group,' Opposite Effect on Your Rows: These are not opposites and not mutually exclusive - a single query can legitimately use both, since window functions run after the grouping is already done. Do not leave the room believing you must pick one.
- WHERE Runs Long Before Your Rank Exists: The order you *write* a query in is not the order it *runs* in. `SELECT` is written first and runs almost last. That gap is the whole reason the next slide needs a wrapper.
- Top-N Per Group Needs a CTE Wrapper: Fellows who learned `HAVING` as "the `WHERE` for aggregates" will try `HAVING rnk = 1` next. That fails for the same reason, and it is worth saying out loud before someone loses ten minutes to it.
- Sketch it: A report must name exactly one worst re: Some Fellows will treat `ROW_NUMBER()` as simply the safer choice. It is only safer for the row count - it quietly hides a real tie, which is sometimes exactly the wrong thing for a report to do.

## Optional Videos (If Time Allows)
- [SQL Window Functions, Clearly Explained](https://www.youtube.com/watch?v=rIcB4zMYMas) (~8 min)
  - Covers OVER, PARTITION BY, and all three ranking functions in one pass

## Further Resources (Deck's "Keep Learning" Links)
- [How Window Functions Work, With Animated GIFs](https://dataschool.com/how-to-teach-people-sql/how-window-functions-work/) (reading, ~7 min read)
  - Animated GIFs show a partition forming, group by group
- [PostgreSQL Docs: Window Function Reference](https://www.postgresql.org/docs/current/functions-window.html) (documentation, ~10 min skim)
  - Exact definitions of every ranking function
- [How SQL OVER PARTITION BY Works, With Practice](https://www.practicewindowfunctions.com/learn/how_window_functions_work) (practice, ~20 min)
  - Browser problems, including real top-N-per-group

## Top Engagement Strategies Used
- **Poll** — What RANK() Did With a Tie: Quick multiple-choice check - reveal results live before moving on.
- **Poll** — How Big the Tie Got: Quick multiple-choice check - reveal results live before moving on.
- **Quick-Fire Game** — Counting the Winners: Quick-fire, leaderboard-style prompt - keep the pace brisk; celebrate participation, not just correctness.
- **Whiteboard / Collaborative Board** — Choosing a Ranking Function for a Real Report: Collaborative board (Padlet/Jamboard/physical) - everyone posts at once, then scan together for patterns.
- **Turn and Talk** — Top-N Per Group, Out Loud: Turn and talk: pairs discuss 1-2 minutes, then a few share out.


---

**Lesson 9**

# Instructor Prep: COALESCE, Materialized Views & a First Look at EXPLAIN ANALYZE
*Module 3: SQL & Relational Databases*

## Lecture Time Estimate
- Opening: ~9 min
- Code Along: What That Empty Cell Really Is: ~16 min
  - Code-along: ~12 min
- Storing an Answer Instead of Recomputing It: ~15 min
  - Code-along: ~8 min
- Asking Postgres What a Query Actually Costs: ~19 min
  - Code-along: ~4 min
- **Total: ~60 min**
- **Total code-along time: ~24 min**

## Code-Along Map (Where to Open the Notebook)
- Slide 6: **New Columns Come Back **Empty on Every Old Row**** — code-along, have Fellows open their notebook
- Slide 7: **`= NULL` Never Matches - **Not Even a NULL**** — code-along, have Fellows open their notebook
- Slide 8: **COALESCE Picks the Fallback - **You Pick the Meaning**** — code-along, have Fellows open their notebook
- Slide 13: **One Command Turns a Query Into **Stored Rows**** — code-along, have Fellows open their notebook
- Slide 14: **New Data Lands. The View **Doesn't Move**.** — code-along, have Fellows open their notebook
- Slide 19: **Two Real Plans: **Five Lines, Then Three**** — code-along, have Fellows open their notebook

## Prerequisites
- Recently: Counting across a `LEFT JOIN` with `GROUP BY` - the query today's view stores
- Earlier this module: `LEFT JOIN` keeping rows that have no match on the other side

## Learning Objectives
- Replace a NULL with a fallback value using COALESCE, and explain why `= NULL` never matches anything
- Create a materialized view, and use REFRESH when its stored rows go stale
- Run EXPLAIN ANALYZE on a real query and read what each line of the plan is telling you

## Project Connection
*Say this out loud at some point in the lecture - it's the answer to "why does this matter for my project?"*

Today rehearses three separate graded requirements of your project - a `COALESCE` query on a genuinely nullable column, a real `CREATE MATERIALIZED VIEW` plus the two follow-up queries run against it, and a real `EXPLAIN ANALYZE` run written up in `query_performance.md`.

## Section Flow (Why Each Transition Is There)
- **Rows That Came Back Empty → Code Along: What That Empty Cell Really Is**: An empty cell is a value with its own rules - and the obvious way to test for it silently fails.
- **Filling In What's Missing → Storing an Answer Instead of Recomputing It**: Three tables joined and grouped on every page load is real work - unless you save the result.
- **Two Kinds of Saved Query → Code Along: Building the Materialized One**: The query we are about to store is one you have already written three times - only where its answer lives changes.
- **Storing the Answer → Asking Postgres What a Query Actually Costs**: We just traded freshness for speed - without ever measuring the speed we were buying.
- **What a Plan Shows You → Code Along: Reading Two Real Plans**: Start with a query small enough that its whole plan fits on one screen, then look at what the view changed.

## Additional Analogies / Use Cases
- `= NULL` Never Matches - **Not Even a NULL** (community): Three people replied "0, can't make it" to the group chat. Two never replied at all. You can't count the silent two as zeros - you genuinely don't know their answer.
  - *Backup (food):* An order ticket with "no onions" written on it is a real instruction. A ticket where the toppings line is blank is not the same thing - the kitchen has to ask, not assume.
  - *Backup (sports):* A player who scored 0 points played the game. A player with a blank stat line was never on the roster. Averaging them together gets you a wrong number.
- One Command Turns a Query Into **Stored Rows** (social media): A screenshot of a live leaderboard opens instantly, but it froze the moment you took it. The live page is always current - it just has to be rebuilt every time you open it.
  - *Backup (food):* Meal prep means dinner is ready in two minutes later in the week. It is also the food you cooked back then - if the plan changed, you cook again.
  - *Backup (travel):* A printed boarding pass is instant to show and completely unaware that your gate just changed. The airline app is slower to load and always right.

## Misconceptions to Watch For
- Key Terms You'll Know by the End of Today: "Materialized" is the word that trips people. It just means "made real" - the rows genuinely exist on disk instead of being recalculated. Say that once now so it is not a mystery word later.
- Quick recall: Bayside Grill has never been inspect: Some Fellows will say `INNER JOIN` "works too, it just shows nothing." It does not show the restaurant at all, which is a different outcome from showing it with empty columns. That difference is the whole reason the join lesson happened.
- New Columns Come Back **Empty on Every Old Row**: Fellows often read the empty cell in `psql` output as an empty piece of text, because that is what it looks like. It is not. An empty piece of text is a real value you could match on; this is the absence of any value at all.
- `= NULL` Never Matches - **Not Even a NULL**: The most common wrong model is "NULL is basically zero." It is worth stating the opposite out loud: zero is a real, known measurement. `NULL` is the database refusing to guess. Postgres also applies the same rule to `!=`, so `WHERE grade != NULL` returns nothing either - and that catches people out even more often.
- COALESCE Picks the Fallback - **You Pick the Meaning**: Fellows often assume `COALESCE` changes the stored data. It does not - it only changes what this one query returns. The `NULL` is still sitting in the table afterwards.
- A lower `score` means a cleaner restaurant. Two in: Several Fellows will pick A, because `AVG` genuinely does skip `NULL` on its own. That is true - and it is exactly why wrapping the column in `COALESCE` changes the answer: it hands `AVG` a real zero that it can no longer skip.
- A View Re-Runs; a **Materialized** View Remembers: Fellows sometimes hear "materialized view" as "faster view." It is not faster at the same job - it is doing a different job. It trades freshness for speed, and somebody has to decide that trade is acceptable.
- One Command Turns a Query Into **Stored Rows**: Fellows often expect the view to be a shortcut that still reads the live tables. It does not read them at all after this moment. Everything it will ever report is already decided.
- New Data Lands. The View **Doesn't Move**.: Fellows often expect `REFRESH` to only pick up the new row. It rebuilds the entire result from scratch. The rebuilt answer is correct either way, but the cost is proportional to the whole query, not to what changed.
- Quick-fire: Your dashboard's view refreshes nightl: Option C keeps coming back because Fellows expect a database to warn them. It will not. Stale data returns confident, wrong numbers with a clean exit code, which is exactly why it is dangerous.
- A Query Plan Is Postgres **Showing Its Work**: The "cost" numbers are not seconds or milliseconds. They are made-up units the planner uses only to compare its own options against each other. The line that reports real time is `Execution Time`.
- Two Real Plans: **Five Lines, Then Three**: Fellows expect the execution time to be reproducible. It is not - run the same query twice and the number moves, because caching and whatever else the machine is doing both affect it. Compare shapes and row counts, not one run's milliseconds.
- Every Plan Line **Answers One Question**: "Rows Removed by Filter" confuses people because it sounds like an error. It is not - it is a count of work that did not contribute to the answer, which is why it is a useful thing to notice.
- Interview-style: A dashboard query that used to ta: The most common weak answer is a confident single cause in the first sentence. Listen for whether a Fellow confirms the problem is real before theorizing about it - a query that is slow once is not the same as a query that got slower.
- (untitled): Fellows sometimes state "materialized views need a manual refresh" as though it were true of every database. In core PostgreSQL it is. Oracle, BigQuery and SQL Server's indexed views can all refresh themselves, so the safe phrasing in an interview is to name which database you mean.
- So Far, We've Covered...: Fellows sometimes read that rule as "pandas is banned." It is not. The line is about where the analysis happens, not which tools are allowed on the machine.

## Optional Videos (If Time Allows)
- [Postgres Explain Explained](https://www.youtube.com/watch?v=P7EUFtjeAmI) (~10 min)
  - Walks how the planner decides on a plan before you ever read one

## Further Resources (Deck's "Keep Learning" Links)
- [Using EXPLAIN](https://www.postgresql.org/docs/current/using-explain.html) (documentation, ~12 min skim)
  - Worked examples behind every plan line you read
- [Postgres Plan Visualizer](https://explain.dalibo.com/) (practice, ~10 min hands-on)
  - Paste a plan, see it drawn as a tree
- [How to Use COALESCE() in SQL](https://learnsql.com/blog/coalesce-function-sql/) (reading, ~7 min read)
  - Five real patterns for replacing NULLs usefully

## Top Engagement Strategies Used
- **Poll** — Warm-Up: The Join That Keeps Everyone: Quick multiple-choice check - reveal results live before moving on.
- **Poll** — Filling a Blank With Zero: Quick multiple-choice check - reveal results live before moving on.
- **Quick-Fire Game** — How Stale Is Too Stale?: Quick-fire, leaderboard-style prompt - keep the pace brisk; celebrate participation, not just correctness.
- **Turn and Talk** — Investigating a Slow Query: Turn and talk: pairs discuss 1-2 minutes, then a few share out.


---

**Lesson 10**

# Instructor Prep: Subquery vs. CTE vs. Window Function: Choosing the Right Tool
*Module 3: SQL & Relational Databases*

## Lecture Time Estimate
- Opening: ~9 min
- Code Along: The Same Answer, Two Ways: ~13 min
  - Code-along: ~8 min
- When Collapsing Rows Is the Wrong Answer: ~15 min
  - Code-along: ~8 min
- Choosing One, and Saying Why: ~19 min
- **Total: ~56 min**
- **Total code-along time: ~16 min**

## Code-Along Map (Where to Open the Notebook)
- Slide 6: **Written Once, the Work Gets Done **Twice**** — code-along, have Fellows open their notebook
- Slide 7: **Name the Step Once, Then **Use It Twice**** — code-along, have Fellows open their notebook
- Slide 13: **Right Answer, Asked **Once Per Row**** — code-along, have Fellows open their notebook
- Slide 14: **One Line Replaces the **Whole Repeated Question**** — code-along, have Fellows open their notebook

## Prerequisites
- Recently: `RANK()` and `ROW_NUMBER()` with `OVER (PARTITION BY ...)` - every row kept, a number added beside it
- Earlier this module: Rewriting a nested subquery as a `WITH` clause, and chaining CTEs together

## Learning Objectives
- Answer one business question as a nested subquery and as a CTE, and name what each version actually costs you
- Recognize when a question needs every row kept, and reach for a window function instead of `GROUP BY`
- Run a four-check decision routine on a new business scenario with a peer, and justify your pick in one written sentence

## Project Connection
*Say this out loud at some point in the lecture - it's the answer to "why does this matter for my project?"*

Your project's given questions each demand a specific technique - one needs a CTE, one needs a window function - and `business_questions_and_schema.md` asks you to map every question against your own schema in writing before you write any SQL. Today is the rehearsal for making that call and defending it.

## Section Flow (Why Each Transition Is There)
- **One Business Question → Code Along: The Same Answer, Two Ways**: Both queries return the identical two rows - what changes is how much the next person has to hold in their head.
- **Same Rows, Different Readability → When Collapsing Rows Is the Wrong Answer**: Readability was the only thing separating those two - now the question itself changes shape.
- **Collapse or Keep → Code Along: Two Ways to Keep Every Row**: A correlated subquery gets there honestly - it just re-asks the same question once for every single row.
- **Three Tools That All Work → Choosing One, and Saying Why**: Every version today returned correct rows - so correctness is not actually what the choice is about.

## Additional Analogies / Use Cases
- Name the Step Once, Then **Use It Twice** (music): A labelled loop in a beat can be soloed and listened to on its own. Bake the same sound straight into every bar and there is nothing left to solo.
  - *Backup (food):* A recipe that says "make the sauce, set it aside" lets you taste it before you commit. One that says "make the sauce again" mid-step gives you no such moment.
  - *Backup (community):* Giving the group chat's plan a name means everyone can point at it. Retyping the whole plan in every message means nobody is sure which copy is current.

## Misconceptions to Watch For
- Key Terms You'll Know by the End of Today: The word "correlated" is the one that sounds statistical and is not. It just means the inner query refers to a column from the outer one, so its answer changes depending on which row you are looking at. Say that once now so the term is not a mystery when it arrives.
- Quick recall: `GROUP BY` hands back one row per gr: A few will answer A because both `GROUP BY` and a window function use aggregate-looking words like `AVG` and `COUNT`. The word is the same; what it does to the result set is opposite. Name that trap directly.
- Written Once, the Work Gets Done **Twice**: Some will assume the repetition means the database really does the work twice, and that the query is therefore slow. That is not a safe claim - the planner is free to reorganise this, and on seven rows nothing is measurable either way. Keep the argument where it actually holds: this is about what a human has to maintain, not about speed.
- Name the Step Once, Then **Use It Twice**: The most repeated stale claim about CTEs is that they are always computed and stored separately, and therefore always slower. In PostgreSQL that was true through version 11 and changed in version 12: a CTE that is non-recursive, side-effect-free and referenced only once is now folded into the surrounding query by default. `MATERIALIZED` and `NOT MATERIALIZED` are the keywords that override the decision either way. Worth being precise about today's own example: `totals` is referenced twice, so PostgreSQL still calculates it separately here - the version-12 change is about the single-reference case, not a blanket reversal.
- You've Already Written **Two of These Three**: "Derived table" sounds like something stored in the database. It is not - it exists only for the length of that one query, the same way a CTE does. The difference between the two is that a derived table is anonymous until you alias it and can only be used where it sits, while a CTE is named at the top and usable anywhere below.
- Would you rather inherit the nested version or the: Expect somebody to argue the CTE is "more efficient." Push back gently: efficiency is not what was demonstrated. What was demonstrated is that one version can be checked a step at a time and the other cannot. Making a claim the evidence does not support is exactly what gets picked apart in a code review.
- Some Questions **Collapse Rows**. Others Keep Them.: Fellows often assume a window function is an advanced or fancier `GROUP BY`, so it must be the better tool. It is not better or worse. It answers a differently shaped question, and using it where the answer really should collapse produces a result with repeated values that somebody then has to deduplicate by hand.
- Right Answer, Asked **Once Per Row**: Do not let the room conclude the database literally runs it seven times. "Once per row" describes what the query *means*, not a measured cost - modern planners routinely rewrite a correlated subquery into a join instead. If somebody insists it must be slower, that is the perfect moment to reach for the tool from the previous lesson and settle it with evidence rather than opinion: put `EXPLAIN ANALYZE` in front of both versions and read the two plans. Being careful about the difference between what a query means and what it costs is itself the lesson.
- One Line Replaces the **Whole Repeated Question**: `PARTITION BY` reads like `GROUP BY` and does not behave like it. `GROUP BY boro` would have returned three rows. `PARTITION BY boro` returned all seven. Say both numbers out loud with both queries visible.
- Quick-fire: You try to keep only the rows above th: Option B keeps coming back because the room remembers a query that ran and returned nothing. That was a comparison against an unknown value. This one is different: it never runs at all, and the error names the rule directly.
- Each Tool Answers a **Different Shape** of Question: Fellows read a table like this as mutually exclusive. It is not. Today's own window-function query sat inside a CTE, and filtering it would need a second one. The table names what each tool is *for*, not which other tools it forbids.
- Four Checks **Before You Pick a Tool**: A first pass often treats check 01 as the only one that matters, because it has the crispest answer. It is the strongest single signal, but two of today's queries kept every row and only one of them was a good idea - the other three checks are what separated them.
- With your partner: Your manager wants only the thr: Some pairs will argue for a window function because "top three" sounds like ranking. Ranking what, though? The boroughs, which do not exist as rows until something collapses the restaurants first. That ordering is the insight.
- Interview-style: Your product manager asks why you: The most common weak answer defines a CTE. That is answering a different question - the manager did not ask what a CTE is, they asked why time was spent on something that already worked.
- (untitled): Fellows sometimes answer with a performance claim - "CTEs are slower" or "subqueries are faster." Coach them off it. If performance genuinely comes up, the strong move is to name the engine and the version, and to say you would check the plan rather than assert a rule.
- So far, we've covered...: Some will leave with "CTEs are the right answer" as the takeaway, because the CTE won two comparisons out of three today. Say plainly that it lost one - a scalar subquery used exactly once needs no wrapper - and that the checks, not the winner, are what transfers.

## Optional Videos (If Time Allows)
- [Subquery vs CTE vs View vs Temp Table](https://www.youtube.com/watch?v=6RU6T8HKgYA) (~10 min)
  - Five ways to hold an intermediate result, compared side by side

## Further Resources (Deck's "Keep Learning" Links)
- [WITH Queries (Common Table Expressions)](https://www.postgresql.org/docs/current/queries-with.html) (documentation, ~10 min read)
  - The real rules on CTE inlining and `MATERIALIZED`
- [CTE vs. Subquery](https://datalemur.com/sql-tutorial/sql-cte-subquery) (reading, ~7 min read)
  - Decision guidance plus a worked ranking example
- [PostgreSQL Exercises: Aggregates](https://pgexercises.com/questions/aggregates/) (practice, ~25 min hands-on)
  - Browser-run drills mixing grouping and window functions

## Top Engagement Strategies Used
- **Poll** — Warm-Up: What a Window Function Keeps: Quick multiple-choice check - reveal results live before moving on.
- **Would You Rather** — Inheriting Somebody Else's Query: Force a binary choice, then ask Fellows to justify it out loud - surfaces reasoning, not just the pick.
- **Quick-Fire Game** — Filtering on a Window Value: Quick-fire, leaderboard-style prompt - keep the pace brisk; celebrate participation, not just correctness.
- **Whiteboard / Collaborative Board** — Peer Check: Judging a New Scenario: Collaborative board (Padlet/Jamboard/physical) - everyone posts at once, then scan together for patterns.
- **Turn and Talk** — Explaining a Rewrite to a Manager: Turn and talk: pairs discuss 1-2 minutes, then a few share out.


---

**Lesson 12**

# Instructor Prep: Cumulative Recall: Joins, CTEs, Window Functions, Materialized Views
*Module 3: SQL & Relational Databases*

## Lecture Time Estimate
- Opening: ~13 min
- Code Along: Rebuild It Without a Template: ~4 min
  - Code-along: ~4 min
- Code Along: A Query That Runs and Lies: ~24 min
  - Code-along: ~12 min
- Code Along: The Check That Catches It: ~18 min
  - Code-along: ~4 min
- **Total: ~60 min**
- **Total code-along time: ~20 min**

## Code-Along Map (Where to Open the Notebook)
- Slide 7: **Only `LEFT JOIN` Finds What **Isn't There**** — code-along, have Fellows open their notebook
- Slide 9: **It Ran Clean. It's Also **Wrong**.** — code-along, have Fellows open their notebook
- Slide 12: **`COALESCE` Doesn't Find a Value - **You Invent One**** — code-along, have Fellows open their notebook
- Slide 16: **A Stored View Keeps Answering From **Before**** — code-along, have Fellows open their notebook
- Slide 18: **One `COUNT(*)` Would Have **Caught It in Seconds**** — code-along, have Fellows open their notebook

## Prerequisites
- Every query tool this module has taught: `INNER`/`LEFT JOIN`, `GROUP BY` with `HAVING`, CTEs, `RANK()` with `OVER`, `COALESCE`, and materialized views
- Reading a real result set in `psql` and saying whether the row count makes sense
- Working independently against your own running class database, without a step-by-step template

## Learning Objectives
- Rebuild a multi-table answer with the joins and aggregation the question actually needs, without a template
- Find what a query gets silently wrong when it runs clean and still returns rows
- Verify a result against a hand-built known answer before you trust it

## Project Connection
*Say this out loud at some point in the lecture - it's the answer to "why does this matter for my project?"*

The project hands you seven fixed business questions, each engineered to demand one specific technique, and grades whether every answer was spot-checked against known values rather than trusted because it looked right. Today is the last rehearsal for both halves of that: reaching for the right tool without a template, and proving the result before anyone else sees it.

## Section Flow (Why Each Transition Is There)
- **Vocabulary Recall → Code Along: Rebuild It Without a Template**: Naming the right tool is the easy half - now type it with nobody reading the answer out first.
- **A Query That Works → Code Along: A Query That Runs and Lies**: Everything so far failed loudly when it was wrong - the next one succeeds quietly while being wrong.
- **Wrong for a Different Reason → Code Along: A Number You Invented, Not Found**: Fan-out is a query that ran clean and lied. This next one runs clean and asks you to pick a lie on purpose.
- **Queries That Lie Once → Code Along: The Answer That Goes Stale**: Those queries were wrong the moment they ran - a stored answer starts out right and rots quietly afterwards.
- **A Confident Wrong Answer → Code Along: The Check That Catches It**: Nobody caught that by staring harder at the query - it took a number worked out somewhere else first.

## Additional Analogies / Use Cases
- It Ran Clean. It's Also **Wrong**. (family): Counting who is coming to the cookout from group-chat replies. One cousin who answers in two different chats gets counted twice, and you buy for a crowd that never shows up.
  - *Backup (music):* Counting how many songs you own by counting playlist entries. A track sitting in four playlists looks like four songs.
  - *Backup (travel):* Counting travellers by counting boarding passes. Anyone with a connecting flight gets counted twice, and the van you booked is too big.
- A Stored View Keeps Answering From **Before** (media): A printed newspaper is fast to read and correct as of press time - a new event doesn't rewrite it. A live news site is slower to load and always current, because it re-checks its sources every time.
  - *Backup (sports):* A printed program lists the lineup as it stood at kickoff. A trade the next day doesn't change the program - only a new one would.

## Misconceptions to Watch For
- Key Terms You'll Know by the End of Today: The phrase "silent bug" confuses people who expect a bug to announce itself. Say it plainly once: a SQL error message is the easy case, because the database tells you. The dangerous case is the query that runs, returns rows, and is wrong, because nothing at all will tell you.
- Quick-fire: One clause filters raw column values,: The answer people reach for under time pressure is C, because both clauses "filter" and the words feel interchangeable. They are not interchangeable and they are not preferences. Each one is legal at exactly one point in the query's order of operations.
- Two asks land. Ask 1: "Top 3 boroughs by average s: A lot of hands go up for "both," because "average" sounds like it must mean the same tool every time. Push back with the row-count test rather than with the definition: ask how many rows Ask 1's answer has, and how many rows Ask 2's answer has. Three versus seven settles it faster than any explanation.
- Only `LEFT JOIN` Finds What **Isn't There**: A common wrong answer for the third blank is `WHERE`. It reads naturally and it fails, because the count does not exist yet at that point. This is the warm-up question arriving in real syntax two minutes later, which is exactly why the warm-up came first.
- Your per-restaurant counts add up to 5, but the wh: Option A gets picked by people who remember that `LEFT JOIN` and `INNER JOIN` return different row counts and reach for the most recent join-related fact they hold. Name the distinction: that difference is about rows being dropped. This is about rows being multiplied, which is the opposite direction and a different mechanism. Prove it live if anyone doubts it: swap both joins to `INNER` and run it again - Corner Bistro still says 4, because the bug is joining a table you are not counting, not which join type was used.
- `COALESCE` Doesn't Find a Value - **You Invent One**: This slide's own `JOIN` is a deliberate `INNER JOIN`, the only one in today's deck - every other query uses `LEFT JOIN`. A `LEFT JOIN` here would pull in the five never-inspected restaurants too, coalescing all of them to 0 and swelling the rank-3 tie from 2 rows to 7 - exactly the dishonesty this slide is warning against.
- You want every inspection that isn't grade A, so y: Option B is picked more often than it should be, because an empty result feels like evidence that the rows are gone. Emphasise the distinction: an empty result set is not proof of absence. It is proof that nothing matched the condition you actually wrote.
- Your dashboard says one number and a stakeholder's: The weak answer opens with a single confident cause. Listen for whether a Fellow confirms the disagreement is real and understands what both numbers measure before theorising about which one is wrong.
- A Stored View Keeps Answering From **Before**: Fellows regularly expect a materialized view to behave like an ordinary view and update itself. An ordinary view really does re-run its query every time. The word "materialized" is the entire difference, and it means the rows were made real and written down.
- One `COUNT(*)` Would Have **Caught It in Seconds**: Fellows sometimes conclude that the lesson is "never join three tables." That is not it - the fan-out demo earlier today joined all three correctly, right up until it counted a column from the wrong side of that join. The rule is narrower and more useful: know what one row represents after every join you add, and check the totals when you are counting.
- With your partner: Design the smallest test that w: Several pairs will propose checking the query against another query. Push on that gently: if both queries share the same wrong join, they will agree with each other and both be wrong. The check has to come from outside the query, which usually means a human, a source file, or a row count.
- Four Steps Between a Query and **Trusting It**: Fellows read step one as "test on a small table" and pick a slice at random. Random is not the same as known. The slice has to be one where you can state the expected answer with confidence before running anything.
- (untitled): The weakest version of this answer is "I double-check my work." It sounds responsible and says nothing. Coach Fellows off it by asking the follow-up an interviewer will ask anyway: check it against what, exactly?
- So far, we've covered...: Some Fellows will leave thinking today was about being careful, as a personality trait. Say plainly that it is not about temperament. It is about running one extra query before you report a number, which is a mechanical habit anybody can build.

## Further Resources (Deck's "Keep Learning" Links)
- [Debugging Duplicated Data in SQL Query Results](https://www.metabase.com/learn/sql/debugging-sql/sql-logic-duplicated-data) (reading, ~10 min read)
  - Traces duplicate rows back to a wrong join assumption
- [PostgreSQL Docs: Materialized Views](https://www.postgresql.org/docs/current/rules-materializedviews.html) (documentation, ~7 min read)
  - Why stored view data goes stale until refreshed
- [8 Week SQL Challenge: Danny's Diner](https://8weeksqlchallenge.com/case-study-1/) (practice, ~60-90 min hands-on)
  - Ten business questions on one messy relational schema

## Top Engagement Strategies Used
- **Quick-Fire Game** — Warm-Up: WHERE vs. HAVING: Quick-fire, leaderboard-style prompt - keep the pace brisk; celebrate participation, not just correctness.
- **Poll** — Which Shape Forces a Window Function: Quick multiple-choice check - reveal results live before moving on.
- **Poll** — Diagnosing an Inflated Count: Quick multiple-choice check - reveal results live before moving on.
- **Quick-Fire Game** — Why `<> 'A'` Loses the Ungraded Rows: Quick-fire, leaderboard-style prompt - keep the pace brisk; celebrate participation, not just correctness.
- **Turn and Talk** — Two Numbers, One Question: Turn and talk: pairs discuss 1-2 minutes, then a few share out.
- **Whiteboard / Collaborative Board** — Designing Your Own Spot-Check: Collaborative board (Padlet/Jamboard/physical) - everyone posts at once, then scan together for patterns.

