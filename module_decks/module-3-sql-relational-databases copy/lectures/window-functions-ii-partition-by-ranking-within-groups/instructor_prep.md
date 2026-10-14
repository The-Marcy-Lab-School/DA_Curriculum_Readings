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

## Additional Analogies / Use Cases
- One Flat Ranking Can't Answer a Per-Group Question (music): A national song chart ranks every track against every other one. A city-by-city chart restarts the count in each city - same songs, same plays, a different #1 in each place.
  - *Backup (sports):* A league-wide scoring leaderboard has exactly one leader. A per-division leaderboard hands every division its own leader, from the exact same stats.
  - *Backup (food):* One citywide 'best slice' list has one winner. A per-neighborhood list gives every neighborhood its own winner, from the same reviews.

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
