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

## Additional Analogies / Use Cases
- A CTE Names a Result Set, Up Front (gaming): A CTE is like saving a loadout in a game — set it up once, under a name, then just call that name every time you need it, instead of reconfiguring everything from scratch.
  - *Backup (cooking):* Like prepping a sauce once and calling it "the sauce" for the rest of the recipe, instead of re-listing every ingredient each time a step needs it.

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
