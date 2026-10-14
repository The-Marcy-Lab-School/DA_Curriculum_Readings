# Instructor Prep: psycopg2 vs SQLAlchemy, Real Tradeoffs
*Module 4: Python Data Analysis*

## Lecture Time Estimate
- Opening: ~11 min
- First, Find Out Which Layer Holds It: ~8 min
- Now Price It: What the Layer Actually Costs: ~22 min
  - Code-along: ~13 min
- Now Turn It Into a Recommendation: ~16 min
- **Total: ~58 min**
- **Total code-along time: ~13 min**

## Code-Along Map (Where to Open the Notebook)
- Slide 13: **Every Trip Through the Loop Opens a **New Connection**** — code-along, have Fellows open their notebook
- Slide 14: **One `engine`, and the **Same Connection** Comes Back** — code-along, have Fellows open their notebook
- Slide 17: **The Same Query, a **Different Database**** — code-along, have Fellows open their notebook

## Prerequisites
- Opening a real `psycopg2` connection and a SQLAlchemy `engine`, and loading both into pandas (the lesson before this one)
- Keeping a credential in an environment variable and releasing a connection in a `finally` block (the lesson before this one)
- A pandas DataFrame's rows, columns, and `dtype`, and how they map onto a SQL table
- SQL `SELECT`, `COUNT`, and `GROUP BY`, and a real PostgreSQL database you built yourself (the SQL module)
- Python `for` loops and reading a small function (Modules 0-1)

## Learning Objectives
- Explain what SQLAlchemy's abstraction layer sits on top of, and what that layer actually buys you
- Compare `psycopg2` and SQLAlchemy on pooling, portability, error messages, and learning curve, using running code as the evidence
- Recommend one library for a given script scenario and defend the choice in writing

## Project Connection
*Say this out loud at some point in the lecture - it's the answer to "why does this matter for my project?"*

The project's connect-and-compare sprint day asks for a real `tradeoff_comparison.md`, reasoned from what you actually saw running both libraries rather than copied from a definition. Today's three cells are where that evidence gets generated, and today's four framework questions are the outline you write it from. The project grades whether the comparison is genuinely yours, so the numbers you print today are the ones worth keeping.

## Section Flow (Why Each Transition Is There)
- **A Setting Nobody Wrote by Hand → First, Find Out Which Layer Holds It**: That fifteen-minute rule lived inside a library, not in anyone's script. Choosing between today's two libraries starts with knowing which one holds which decisions.
- **You Can Draw the Stack → Now Price It: What the Layer Actually Costs**: A layer you cannot see still has a bill. The next twenty minutes measure that bill with real output instead of arguing about it.
- **You Know What a Pool Is → Code Along: Make the Difference Print Itself**: Two cells, one number each. Postgres will tell you directly how many separate connections you actually opened.
- **Pooling Is Priced → Code Along: Point the Same Code at Another Database**: The second thing a layer buys is a translator. One line changes, and the code above it never finds out which database answered.
- **You Have the Evidence → Now Turn It Into a Recommendation**: An interviewer will not accept a list of differences. They want a pick, and four questions are enough to get you to one.

## Additional Analogies / Use Cases
- An Abstraction **Hides Work** — and Hides Control (gaming): Auto-aim wins most fights faster, and blocks the one shot you wanted to place yourself.
  - *Backup (sports):* A pitching machine gives perfect reps, and cannot throw the weird curveball you asked for.
  - *Backup (fashion):* Off the rack fits most people fast. Tailoring is slower and fits exactly one.
- A Pool **Lends** Connections Instead of Making New Ones (sports): A gym's loaner rackets. Grab one, play, rack it back. The club buys them once.
  - *Backup (music):* A rehearsal room's house amps. Plug in, play, leave them for the next band.
  - *Backup (community):* A neighborhood tool library. Borrow the drill, return it, nobody buys twelve drills.
- **Use case:** One Setting Broke Sign-Ins for **Four Days** (slide 5)
  - *Source:* [Clerk engineering postmortem, September 2025](https://clerk.com/blog/2025-09-18-database-incident-postmortem)
  - *Summary:* Clerk's cloud provider automatically applied a minor PostgreSQL version upgrade on 14 September 2025, which removed an internal inefficiency in how Postgres granted new connections. That inefficiency had been accidentally acting as a rate limiter, spacing out how quickly new connections could be created. Clerk's connection pooler was configured to close and replace every connection after exactly 15 minutes, so with the brake gone, hundreds of Cloud Run containers recreated their connections at the same moment, producing a synchronized surge every 15 minutes. Customers saw intermittent request failures, latency spikes, and windows where sign-up and sign-in failed, from 15 to 18 September. The fix was to stagger connection recycling randomly rather than on a fixed timer, which dropped database load below where it had been before the incident.
  - *Hook question:* Last class you opened one connection and closed it. Now picture five hundred copies of that script. What if they all did it at the same second?
  - *Revisited/resolved in:* "So far, we've covered..."

## Misconceptions to Watch For
- Key Terms You'll Know by the End of Today: Two of these get blurred together constantly. An abstraction layer is the general idea of hiding detail behind a simpler surface. An ORM is one specific, optional example of that idea. Flag now that using SQLAlchemy does not mean using an ORM, because a lot of people arrive assuming those are the same decision.
- Last class both libraries handed back the same Dat: Someone will say one is "faster" or "better." Do not settle it now. Write it on the board as an open claim and promise the room it gets tested with real output before the hour is up.
- One Setting Broke Sign-Ins for **Four Days**: The obvious read is "so managing connections yourself is safer." That is the wrong lesson and it will come up. The company had a sophisticated setup. The point is not that the fancier option failed, it is that a layer making decisions for you is still a decision, and one somebody has to understand.
- An Abstraction **Hides Work** — and Hides Control: People hear "abstraction" as a synonym for "advanced" or "professional," so choosing the higher layer feels like the grown-up answer. Push back directly: plenty of working analysts deliberately use the lower layer, and being able to say why is what makes the choice look senior, not the choice itself.
- SQLAlchemy Doesn't Replace `psycopg2` — It **Sits On It**: The dominant wrong picture is side by side: two separate roads, pick a lane. Correct it explicitly by pointing at the diagram. They are stacked, not parallel, and someone who says "we replaced psycopg2 with SQLAlchemy" in an interview has just told the interviewer they do not know what a driver is.
- A Pool **Lends** Connections Instead of Making New Ones: "Pool" sounds like a cache, so people expect it to store query results. It does not store any data at all. It stores the open connections themselves, and every query still goes to the database.
- Every Trip Through the Loop Opens a **New Connection**: Some people will read a different number as a bug or as something they typed wrong. It is not. Different is the expected, correct output here, and the point of the cell.
- One `engine`, and the **Same Connection** Comes Back: People assume the pool is something you configure before it works. On a normal engine you do not: `create_engine` gives a Postgres connection a pooling engine by default, and the default class is `QueuePool`.
- Would you rather open a fresh connection for each: Most of the room will pick pooled and stop thinking, because the last cell made pooling look free. Push whoever picks it to name one real cost, and do not accept "none."
- The Same Query, a **Different Database**: Someone will conclude they should always use SQLAlchemy "in case we switch databases." Most teams never switch. The real everyday version of this benefit is smaller and more useful: running the same code against a throwaway local database for testing and against the real one in production.
- Neither One Is the **Better** One: The belief this whole slide exists to break is that one of these columns is the professional choice and the other is the beginner choice. Say it plainly: working teams ship both, and an interviewer asking this question is listening for whether you know what each column costs, not which one you like.
- Four Questions Before You **Pick a Library**: People will want a scoring rule, like "three out of four means SQLAlchemy." Refuse it. Two of these can point in opposite directions for the same script, and saying which one you weighted most and why is the actual answer an interviewer is listening for.
- A nightly script runs one query, prints one number: Some will read option A as "psycopg2 is better for small things," which is a rule rather than reasoning. Correct it to the version that survives an interview: nothing about the size is the point, only that one query cannot reuse a connection there is no second question for.
- Key Terms — Recap: Watch for anyone defining an ORM as "SQLAlchemy." An ORM is one optional part of SQLAlchemy, and every cell run today used SQLAlchemy without touching it.

## Further Resources (Deck's "Keep Learning" Links)
- [Connection Pooling](https://docs.sqlalchemy.org/en/20/core/pooling.html) (documentation, ~15 min skim)
  - What an engine pools by default, from SQLAlchemy itself
- [Understanding Connections and Pools](https://sudhir.io/understanding-connections-pools) (reading, ~20 min read)
  - Plain-language tour of what a connection really costs
- [Connection Pooling in PostgreSQL (Performance Numbers)](https://www.youtube.com/watch?v=GTeCtIoV2Tw) (video, ~12 min video)
  - Pooling's speedup measured live, not just asserted

## Top Engagement Strategies Used
- **Turn and Talk** — Warm-Up: What Actually Differed: Turn and talk: pairs discuss 1-2 minutes, then a few share out.
- **Poll** — What Skipping a Layer Costs: Quick multiple-choice check - reveal results live before moving on.
- **Would You Rather** — Fresh Connections or a Held Pool: Force a binary choice, then ask Fellows to justify it out loud - surfaces reasoning, not just the pick.
- **Quick-Fire Game** — Recommending for One Script: Quick-fire, leaderboard-style prompt - keep the pace brisk; celebrate participation, not just correctness.
