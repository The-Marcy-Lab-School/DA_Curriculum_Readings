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
- Some Questions **Collapse Rows**. Others Keep Them. (sports): A final score is one number for the whole roster. A box score keeps every player's line and still shows the team average beside it.
  - *Backup (gaming):* A leaderboard's top ten is a collapsed summary. A match-history screen keeps every game you played and shows your average next to each one.
  - *Backup (food):* The total at the bottom of a bill is one number. An itemised receipt keeps every dish and can still print the average per person.

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
