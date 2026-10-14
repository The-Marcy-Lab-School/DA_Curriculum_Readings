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

## Additional Analogies / Use Cases
- Chaining CTEs: One WITH, Two Names (travel): Like planning a trip in stages — book the flight first, then the hotel that depends on your arrival date. Each stage can lean on the one before it, instead of solving the whole trip in one tangled step.
  - *Backup (music):* Like building a song in layers — lay down the drum track first, then a bassline that follows it. Each layer builds on the one before, instead of recording everything live in one take.

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
