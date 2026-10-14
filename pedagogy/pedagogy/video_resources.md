# Video Resources Reference — Tough-Concept Video Bank

Cached, verified reference used by the `new-lesson-deck` skill's step 3
(research/verification) to fill a `video_resource` field for a slide covering
one of these recurring hard concepts — **check here first**, before spending
a fresh per-lesson search (see "Video resources" in `content_spec/
SCHEMA.md`). Modeled on `pedagogy/interview_frameworks.md`'s shape: cached
findings from real search, not invented, reused across lessons instead of
re-derived every time.

**Source**: three parallel research passes (WebSearch + YouTube oEmbed/
noembed metadata lookups, cross-referenced against secondary sources — never
asserted from memory), run 2026-08-12 for 9 tough concepts named by an
instructor (OOP, Functions, Decorators, Hypothesis Testing, Probability, Data
Leakage, How AI Models Work, Git Branching, MCP). **Every entry keeps the
original confidence label the research reported** — `verified` (title,
channel, and runtime all independently confirmed), `likely-good-but-
unconfirmed-runtime` (title/channel confirmed, runtime taken from the title's
own claim or a secondary mention, not confirmed frame-by-frame), or
`uncertain` (something about the candidate — channel reputation, runtime, or
topical fit — is genuinely unverified). **Do not silently upgrade a
confidence label when reusing an entry** — an author picking a `likely-good-
but-unconfirmed-runtime` or `uncertain` candidate should do the same 10-
second manual runtime check the research recommended before finalizing it in
a `deck_spec.yaml`, not treat "it's in this file" as equivalent to
"verified."

Target length is **~12 minutes or less**, per `content_spec/SCHEMA.md`'s
"Video resources" guidance (raised from an earlier ~6-minute target — see
below for entries researched under that earlier, tighter cap; their
recorded runtimes/gaps are still accurate history, just no longer the
active target for new searches) — several topics below have no candidate
that cleanly clears 6 minutes with a confirmed runtime; that's recorded
honestly as a gap, not forced.

## Quick reference

| Topic | Pick | Channel | Runtime | Confidence |
|---|---|---|---|---|
| OOP basics | "Object-oriented Programming in 7 minutes" | Programming with Mosh | 7:34 (confirmed) | **verified** |
| Python functions | *no strong pick — see entry* | — | — | gap |
| Python decorators | "Learn Python DECORATORS in 7 minutes!" | Bro Code | ~7 min (title claim) | likely-good-but-unconfirmed-runtime |
| Hypothesis testing | "Hypothesis Testing Made EASY in 5 Minutes!" | Newton School Data Science & AI | ~5 min (title claim) | likely-good-but-unconfirmed-runtime |
| Probability | "Learn everything about probability in 3 mins!" | EasiAsPi | ~3 min (title claim) | likely-good-but-unconfirmed-runtime |
| Data leakage | "Data Leakage Explained Visually" | Schovia | unconfirmed | uncertain |
| How AI/LLM models work | "How Large Language Models Work" | IBM Technology (Martin Keen) | ~5 min (secondary source) | likely-good-but-unconfirmed-runtime |
| What git branching is | "How Git Works: Explained in 4 Minutes" | ByteByteGo | ~4 min (title + corroborated) | likely-good-but-unconfirmed-runtime |
| MCP (Model Context Protocol) | "Claude's Model Context Protocol is here... Let's test it" | Fireship | unconfirmed (typically 3-5 min for this channel/format) | likely-good-but-unconfirmed-runtime |
| SQL window functions / `PARTITION BY` | "SQL Window Functions \| Clearly Explained \| PARTITION BY, ORDER BY, ROW_NUMBER, RANK, DENSE_RANK" | Maven Analytics | 7:52 (confirmed) | **verified** |
| Reading a Postgres query plan / `EXPLAIN ANALYZE` | "Postgres Explain Explained - How Databases Prepare Optimal Query Plans to Execute SQL" | Hussein Nasser | 10:17 (confirmed) | **verified** |
| Choosing between a subquery, a CTE, a view, and a temp table | "SQL Subquery vs CTE vs Views vs CTAS vs TEMP \| #SQL Course 32" | Data with Baraa | 9:43 (confirmed) | **verified** |
| Join fan-out / a query that runs clean but returns a wrong number | *no strong pick — see entry* | — | — | gap |
| The `uv` Python package/project manager (what it is, why it's fast) | "Why Python Developers Are Switching to UV" | Dave Ebbelaar | 9:22 (confirmed) | **verified** |
| Translating SQL to pandas / "what is a DataFrame, for a SQL person" | *no strong pick — see entry* | — | — | gap |

## 1. Object-Oriented Programming (OOP) basics

**Primary — verified**
- **Title:** "Object-oriented Programming in 7 minutes"
- **URL:** https://www.youtube.com/watch?v=pTB0EiLXUC8
- **Channel:** Programming with Mosh
- **Runtime:** 7:34 — confirmed via a third-party lesson-mirror site listing
  "00:07:34" for this exact video, cross-checked rather than guessed.
- **Fit:** Covers the four pillars (encapsulation, abstraction, inheritance,
  polymorphism) with plain-language analogies, no CS-jargon assumed —
  approachable for adult career-changers with no CS background.
- **Confidence:** verified.

**Secondary — uncertain, not the default pick**
- **Title:** "Object-Oriented Programming - OOP - in 5 Minutes"
- **URL:** https://www.youtube.com/watch?v=_C4hVHwCcfk
- **Channel:** Daily Tuition (not one of the reputable channels named in the
  original research request — treat Mosh's video as primary)
- **Runtime:** title claims ~5 minutes, not independently confirmed.
- **Confidence:** uncertain.

## 2. Python functions (what they are / why they exist)

**Gap — no strong verified candidate under the length cap.** Corey
Schafer's well-known "Python Tutorial for Beginners 8: Functions"
(https://www.youtube.com/watch?v=9Os0o3wzS_I) is confirmed to run **22
minutes** — well over the ceiling, excluded rather than stretched in. Two
unconfirmed-runtime candidates exist but need a manual check before use:

- **"Python Functions Made Simple (Visual Explanation) | #Python Course
  39"** — https://www.youtube.com/watch?v=FSYoWPXfJxc — Data with Baraa.
  Hand-drawn visual explanation of *why* functions exist (reuse,
  organization), not just syntax — potentially a good fit, but this is one
  segment of a 13-hour masterclass and its standalone runtime is
  unconfirmed. Confidence: uncertain.
- **"Functions in Python are easy 📞"** —
  https://www.youtube.com/watch?v=89cGQjB5R4M — Bro Code (large,
  well-regarded beginner channel). Reportedly covers functions, arguments,
  and return statements with a light tone; runtime unconfirmed. Confidence:
  uncertain.

**Before using either**, manually open the link and confirm actual runtime —
neither was verifiable through available research tools.

## 3. Python decorators

- **Title:** "Learn Python DECORATORS in 7 minutes! 🎊"
- **URL:** https://www.youtube.com/watch?v=U-G-mSd4KAE
- **Channel:** Bro Code
- **Runtime:** title claims 7 minutes, not independently confirmed beyond
  that.
- **Fit:** Frames decorators simply ("a function that extends another
  function's behavior without modifying it") — a good plain-language entry
  point before a denser treatment (e.g. Real Python's primer).
- **Confidence:** likely-good-but-unconfirmed-runtime.

No shorter, fully-verified alternative was found from the channels
originally named for this search — ArjanCodes' and mCoding's decorator
content runs longer/more advanced; Tech With Tim's "5 Essential Python
Decorators" is ~20 minutes and more intermediate in scope (covers
`@property`/`@staticmethod`/`@classmethod`/`@functools.cache`/`@dataclass`),
excluded rather than stretched in.

## 4. Hypothesis testing (basics)

**Primary**
- **Title:** "Hypothesis Testing Made EASY in 5 Minutes! | Newton Machine
  Learning Tutorials"
- **URL:** https://www.youtube.com/watch?v=GPBhj-66KZ0
- **Channel:** Newton School Data Science & AI
- **Runtime:** title claims 5 minutes, not independently confirmed (duration
  metadata unavailable via the lookup tools used).
- **Fit:** A quick practical primer rather than formula-heavy — good for
  adult learners who need the intuition first, not the derivation.
- **Confidence:** likely-good-but-unconfirmed-runtime.

**Named alternative, too long for the cap (recorded per instructions to name
the best long option too, not as a pick):** StatQuest's "Hypothesis Testing
and The Null Hypothesis, Clearly Explained!!!"
(https://www.youtube.com/watch?v=0oc49DyA3hU) — a third-party AI-summary
tool estimated ~14 minutes (not independently verified, but consistent with
StatQuest's typical episode length) — well over the 8-minute ceiling despite
the channel's strong pedagogical reputation. If a lesson can afford a longer
supplementary/optional watch (e.g. linked in `further_resources` rather than
embedded as a `video_resource`), this is the stronger pedagogical choice;
it's excluded here only on length.

## 5. Probability (basics / intuition)

**Primary**
- **Title:** "Learn everything about probability in 3 mins!"
- **URL:** https://www.youtube.com/watch?v=bBx09dkIjdg
- **Channel:** EasiAsPi
- **Runtime:** title claims 3 minutes, not independently confirmed.
- **Fit:** Extremely fast, plain-language overview — good as a warm-up
  refresher, though likely too compressed to build real intuition for a
  from-scratch career-changer audience on its own.
- **Confidence:** likely-good-but-unconfirmed-runtime.

**Second candidate — runtime verified, but flag before use**
- **Title:** "Intuitive Approach to Understanding Probability"
- **URL:** https://www.youtube.com/watch?v=FnEOTzG03Hw
- **Channel:** Zara Dar
- **Runtime:** ~4:50 — confirmed via search-indexed metadata.
- **Fit:** Explicitly intuition-first rather than formula-first, which
  matches career-changer needs well, and the runtime itself is the most
  solidly confirmed of any candidate across all 9 topics.
- **Confidence:** verified (runtime only).
- **Reputational flag — human judgment call required before use.** Search
  results surfaced press coverage (404 Media, Latin Times) indicating this
  creator also distributes similar STEM-explainer content via an alternate
  OnlyFans/Pornhub channel. The YouTube video itself reads as standard
  educational content, and nothing about the video's own content is in
  question — but linking a school-curriculum resource to a creator with
  that dual-channel public profile is a reputational consideration a human
  should weigh, not something to silently link in a `video_resource` field
  without knowing about it. **This flag is deliberately preserved here, not
  resolved one way or the other** — the original research explicitly
  surfaced it as needing a human call.

## 6. Data leakage (ML / data science)

**Primary**
- **Title:** "Data Leakage Explained Visually | How Models Cheat Without You
  Realizing"
- **URL:** https://www.youtube.com/watch?v=xzCXqYlV2HE
- **Channel:** Schovia (focuses on practical, jargon-light AI/ML/data-systems
  education for upskilling professionals — a good tonal match for this
  program's audience)
- **Runtime:** not confirmed despite multiple lookup attempts.
- **Fit:** The "visually"/"models cheat" framing suits non-math-major
  learners who need an intuitive mental model of the concept.
- **Confidence:** uncertain (runtime).

**Secondary, lower confidence**
- **Title:** "What is Data Leakage In Machine Learning?"
- **URL:** https://www.youtube.com/watch?v=n9jz7G68pVg
- **Channel:** Krish Naik (a well-known, reputable data science educator)
- **Runtime:** not confirmed; Krish Naik's tutorials typically run
  considerably longer than 6-8 minutes, so this is likely too long.
- **Confidence:** uncertain (both length-fit and runtime).

No topic-3 candidate had a confirmed runtime — manually check length on
YouTube before committing either to a `deck_spec.yaml`.

## 7. How AI/LLM models work (general audience)

- **Title:** "How Large Language Models Work"
- **URL:** https://www.youtube.com/watch?v=5sLYAQS9sWQ
- **Channel:** IBM Technology (presenter Martin Keen) — confirmed via oEmbed
  metadata.
- **Runtime:** not directly confirmable from YouTube's own page; a secondary
  source (a tech newsletter's summary of the same video) states "~5
  minutes." Treat as approximate.
- **Fit:** Explicitly separates "LLM," "GPT," and "foundation model" as
  related-but-distinct terms, explains next-token prediction/transformers in
  plain language, and frames LLMs as one application of AI rather than a
  synonym for it — directly useful for the same overclaim-avoidance
  discipline as "Factual Accuracy & Claim Scope" in `qa/
  instructional_review_checklist.md` (see also the AI-predicts-next-word
  entry in `qa/deck_review_exemplar.md`).
- **Confidence:** likely-good-but-unconfirmed-runtime.

IBM's broader "AI vs. Machine Learning vs. Deep Learning vs. Generative AI"
video covers the same distinction more thoroughly but runs ~10 minutes
(confirmed via search snippet) — over the cap, not recommended as the
primary pick, but worth knowing about for a lesson that can afford a longer
optional watch.

## 8. What git branching is

**Primary — better paced for a true beginner**
- **Title:** "How Git Works: Explained in 4 Minutes"
- **URL:** https://www.youtube.com/watch?v=e9lnsKot_SQ
- **Channel:** ByteByteGo (a well-established system-design/software-
  education channel, not on the originally-named channel list but
  reputable)
- **Runtime:** 4 minutes per the title itself, corroborated by multiple
  independent secondary mentions (LinkedIn shares, dev.to posts) — not
  verified against YouTube's own player directly.
- **Fit:** Slower-paced than the Fireship alternative below, better suited
  to a career-changer seeing branching for the first time.
- **Confidence:** likely-good-but-unconfirmed-runtime.

**Alternative — faster, broader scope**
- **Title:** "Git Explained in 100 Seconds"
- **URL:** https://www.youtube.com/watch?v=hwP7WQkmECE
- **Channel:** Fireship
- **Runtime:** implied by the title/series format (~1:40), not
  independently confirmed frame-by-frame.
- **Fit:** Covers the full git workflow (init, stage, commit, branch,
  merge) at high speed — branching is one part of a broader clip, a good
  primer but may move too fast to absorb branching specifically on one
  viewing.
- **Confidence:** likely-good-but-unconfirmed-runtime.

freeCodeCamp's "Git Branches Tutorial"
(https://www.youtube.com/watch?v=e2IbNHi4uCI) is real and well-regarded but
runs 33 minutes per search results — excluded on length.

## 9. MCP (Model Context Protocol)

**This was the hardest topic to pin down under 6 minutes with confidence —
no candidate's exact runtime was independently verifiable.** Both options
need a manual runtime check before committing to a `deck_spec.yaml`.

- **Title:** "Claude's Model Context Protocol is here... Let's test it"
  (also indexed under an earlier title, "I gave Claude root access to my
  server... Model Context Protocol explained")
- **URL:** https://www.youtube.com/watch?v=HyzlYwjoXOQ
- **Channel:** Fireship
- **Runtime:** not directly confirmed; Fireship's videos in this format
  typically run 3-5 minutes, but this specific one's length wasn't
  verified.
- **Fit:** Practical, hands-on framing (MCP as a "USB-C port" for AI-tool
  connections), more accessible than a standards-document read, but assumes
  some coding-adjacent context already.
- **Confidence:** likely-good-but-unconfirmed-runtime.

**Also found, likely too long — "origin story," not a basics explainer:**
"Why we built—and donated—the Model Context Protocol (MCP)"
(https://www.youtube.com/watch?v=PLyCki2K0Lg), Anthropic's official
channel — confirmed authentic via both oEmbed and noembed metadata, but it's
a conversational interview format (Stuart Ritchie with co-creator David
Soria Parra) that typically runs well past 6 minutes; exact length
unconfirmed. Confidence: uncertain — useful context for an instructor's own
background reading, not recommended as an embedded `video_resource`.

## 10. SQL window functions / `PARTITION BY`

*Added 2026-08-21 via a fresh search during Module 3's Day 8 lecture build
(`PARTITION BY` and ranking within groups) — the bank had no SQL entry at
all before this.*

**Pick:** "SQL Window Functions | Clearly Explained | PARTITION BY, ORDER BY,
ROW_NUMBER, RANK, DENSE_RANK" (https://www.youtube.com/watch?v=rIcB4zMYMas),
Maven Analytics.

- **Runtime:** 7:52. **Confirmed**, and not from the title or a blog — read
  directly off the video page's own metadata (`lengthSeconds: 472`,
  `publishDate: 2024-06-05`, `viewCount: 349,435`, `isPrivate: false`), with
  title and channel independently cross-checked via YouTube's oEmbed
  endpoint.
- **Fit:** Covers the `OVER` clause, `PARTITION BY`, and all three ranking
  functions in one pass — i.e. exactly the combined scope of a two-day
  window-functions split, which makes it a good optional recap on the second
  day rather than a mid-lesson interruption on the first. Free, public, no
  account.
- **Confidence:** verified.

**Runner-up, also verified:** "SQL Window Functions in 10 Minutes"
(https://www.youtube.com/watch?v=y1KCM8vbYe4), Colt Steele — confirmed
`lengthSeconds: 613` (10:13, so the title rounds down slightly). Also free
and public. A broader survey; prefer the Maven pick when the lesson is
specifically about ranking and partitions.

## 11. Reading a PostgreSQL query plan / `EXPLAIN ANALYZE`

*Added 2026-08-22 via a fresh search during Module 3's Day 9 lecture build
(COALESCE, materialized views, and a first look at `EXPLAIN ANALYZE`).*

**Pick:** "Postgres Explain Explained - How Databases Prepare Optimal Query
Plans to Execute SQL" (https://www.youtube.com/watch?v=P7EUFtjeAmI), Hussein
Nasser.

- **Runtime:** 10:17. **Confirmed** — read directly off the video page's own
  metadata (`lengthSeconds: 617`, `publishDate: 2021-03-17`, `viewCount:
  29,912`, `isPrivate: false`, `isUnlisted: false`), with title and channel
  independently cross-checked via YouTube's oEmbed endpoint. Channel size also
  read off the page (513 thousand subscribers) rather than assumed.
- **Fit:** Walks through what `EXPLAIN` actually reports and how the planner
  chooses a plan, at a pace a first-timer can follow. Free, public, no
  account. **Caveat worth knowing:** the video leans toward `EXPLAIN`
  (planning/estimates) more than `EXPLAIN ANALYZE` (measured actuals), and its
  framing is backend-engineer-flavored rather than analyst-flavored — good as
  an optional after-class watch, weaker as an in-lesson embed for a
  career-changer analyst audience.
- **Length note:** 10:17 clears the file's current ~12-minute target but is
  just over the "under ~10 minutes" bar a stricter search might set. Recorded
  honestly rather than rounded down.
- **Confidence:** verified.

**Secondary — exactly on-topic, but a reputation caveat**
- **Title:** "Understanding Explain and Explain Analyze in PostgreSQL"
- **URL:** https://www.youtube.com/watch?v=GmX8tjT7UcQ
- **Channel:** InterviewBuddies
- **Runtime:** 8:11 — **confirmed** (`lengthSeconds: 491`, `publishDate:
  2025-10-02`).
- **Fit:** Topically the better match of the two — it explicitly contrasts
  `EXPLAIN` ("how are you *planning* to run this query?", estimated cost, does
  not run) against `EXPLAIN ANALYZE` (runs the query, real execution times and
  row counts), which is exactly the distinction a Day-9 lesson needs.
- **Confidence:** verified (runtime), but **not** "well-regarded" — the
  channel has 266 subscribers and the video 2,519 views, so there is no
  independent signal of quality beyond its own description. A human should
  watch it before embedding it.

**Rejected on length:** "Understand PostgreSQL query plan in 10 minutes"
(https://www.youtube.com/watch?v=Mll5SqR4RYk), Lift And Shift Dev — confirmed
`lengthSeconds: 778`, i.e. **12:58**, so the title's own "10 minutes" claim is
wrong. A useful reminder that title-claimed runtimes are not evidence.

**Still a gap:** no search has been run yet for a short video specifically on
**materialized views** or on **`COALESCE`/NULL handling**. Recorded as
unexplored, not as "nothing good exists."

## 12. Choosing between a subquery, a CTE, a view, and a temp table

*Added 2026-08-23 via a fresh search during Module 3's Day 10 lecture build
("Subquery vs. CTE vs. Window Function: Choosing the Right Tool") — the bank
had entries for window functions (#10) and query plans (#11) but nothing on
the CTE-vs-subquery *choice* itself.*

**Pick:** "SQL Subquery vs CTE vs Views vs CTAS vs TEMP | #SQL Course 32"
(https://www.youtube.com/watch?v=6RU6T8HKgYA), Data with Baraa.

- **Runtime:** 9:43. **Confirmed** — read directly off the video page's own
  metadata (`lengthSeconds: 583`, `publishDate: 2024-10-09`, `viewCount:
  26,366`, `isPrivate: false`, `isUnlisted: false`), with title and channel
  independently cross-checked via YouTube's oEmbed endpoint. Channel size also
  read off the page (464 thousand subscribers) rather than assumed.
- **Fit:** This is a *decision* video, not a syntax video — it lines up five
  ways to hold an intermediate result (subquery, CTE, view, CTAS, temp table)
  side by side and walks the tradeoffs with real use cases, which is exactly
  the "which tool fits this job" frame a synthesis/judgment lesson needs.
  Free, public, no account.
- **Caveat worth knowing:** its scope is *storage/structure* choices — it does
  **not** cover window functions, so it only answers two-thirds of a
  "subquery vs. CTE vs. window function" lesson. Pair it with the Maven
  Analytics window-functions pick in #10 above, or use it as an optional
  after-class watch for the CTE-vs-subquery half only. It is also
  engine-agnostic rather than PostgreSQL-specific, so it does not address
  PostgreSQL 12+ CTE inlining / `MATERIALIZED`.
- **Confidence:** verified.

**Runner-up — on-topic and tighter in scope, but a much smaller channel**
- **Title:** "SQL | Subquery or CTE - Which one to choose? Difference between
  Subquery and CTE"
- **URL:** https://www.youtube.com/watch?v=UblBNXXojoc
- **Channel:** Learn at Knowstar
- **Runtime:** 11:00 — **confirmed** (`lengthSeconds: 660`, `publishDate:
  2023-05-02`, `viewCount: 10,659`).
- **Fit:** Narrower and better matched to the exact question ("which one to
  choose?") than the Baraa pick, but at 10,659 views there is no independent
  signal of quality beyond its own description, and it sits right at the
  ~12-minute cap. A human should watch it before embedding it.
- **Confidence:** verified (runtime), **not** "well-regarded."

## 13. Join fan-out / sanity-checking a query that runs clean but is wrong

*Searched 2026-08-23 during Module 3's Day 12 cumulative-recall build (throughline:
"a query can run clean, return rows, and still be wrong"). Recorded as a **gap**,
not a pick.*

**Gap — no free, well-regarded, short video found.** Multiple search angles
("join fan out", "fan trap", "why does my SQL join return duplicate rows",
"how to sanity check a SQL query result") returned almost entirely **written**
material — the good explanations of this concept live in blog posts and vendor
docs, not video. The two on-topic videos that did surface both come from
channels with no independent quality signal, so neither was promoted to a pick:

- **"Understanding Join Multiplication in SQL"** —
  https://www.youtube.com/watch?v=iq0nDbJAa78 — channel "SQL Answers".
  Runtime **3:29** — confirmed off the video page's own metadata
  (`lengthSeconds: 209`, `publishDate: 2024-04-02`, `isPrivate: false`,
  `isUnlisted: false`). Topically an exact match and pleasantly short, but the
  channel has **847 subscribers** and the video **262 views** — read off the
  page, not estimated. Confidence: verified (runtime), **not** "well-regarded."
- **"SQL Joins Interview Questions | NULLs, Duplicates & Row Count Traps"** —
  https://www.youtube.com/watch?v=iD94KIgPq_Q — channel "BigData Factory".
  Runtime **8:18** — confirmed (`lengthSeconds: 498`, `publishDate:
  2026-04-27`), **152 views**. Same problem, and its framing is
  data-engineer-flavored rather than analyst-flavored. Confidence: verified
  (runtime), **not** "well-regarded."

**Use written material instead** until a better video appears. The strongest
free, no-account written explainer found was Metabase Learn's "Debugging
duplicated data in SQL query results"
(https://www.metabase.com/learn/sql/debugging-sql/sql-logic-duplicated-data),
which walks the one-to-many join → duplicated rows → inflated aggregate chain
directly.

## 14. The `uv` Python package/project manager

*Added 2026-08-25 via a fresh search during Module 4's Day 1 lecture build
(`uv` is briefly introduced there — what/why/who, not a deep dive). The bank
had no packaging/environment-tooling entry of any kind before this.*

**Pick:** "Why Python Developers Are Switching to UV"
(https://www.youtube.com/watch?v=5rTwOt9Qgik), Dave Ebbelaar.

- **Runtime:** 9:22. **Confirmed** — read directly off the video page's own
  metadata (`lengthSeconds: 562`, `publishDate: 2025-08-07`, `viewCount:
  59,125`, `isPrivate: false`, `isUnlisted: false`), with title and channel
  independently cross-checked via YouTube's oEmbed endpoint.
- **Fit:** Framed as *why* rather than *how*, which matches a Day-1 "what is
  this tool and who makes it" beat far better than a full tutorial. Free,
  public, no account. Its 2025 publication date matters more than usual here:
  `uv`'s CLI has moved fast (0.12.x as of this writing), so an older video
  risks showing retired commands.
- **Confidence:** verified.

**Runner-up, also verified:** "uv for EVERYTHING: How to use uv for Python,
venv, and project management" (https://www.youtube.com/watch?v=zgSQr0d5EVg),
Matt Palmer — confirmed `lengthSeconds: 528` (8:48), `publishDate:
2024-11-14`, `viewCount: 46,115`, public. Slightly shorter and more hands-on
(venv + project management walkthrough); prefer it when the lesson actually
asks students to *run* `uv`, and the Ebbelaar pick when the lesson only needs
the "what/why/who."

**Rejected on length, worth knowing they exist:** Corey Schafer's "Python
Tutorial: UV — A Faster, All-in-One Package Manager to Replace Pip and Venv"
(`lengthSeconds: 1621`, 27:01) is the most thorough free treatment from a
well-known channel — too long for a slide-embedded resource, good as an
instructor's own prep. Tech With Tim's "Stop Using Pip - This New Tool is
100x Faster (UV Tutorial)" is 17:59. Charlie Marsh's own conference talk
"uv: An Extremely Fast Python Package Manager" is 40:34 — the authoritative
first-party source, far past the cap.

## 15. Translating SQL to pandas / "what is a DataFrame" for a SQL person

*Searched 2026-08-25 during Module 4's Day 1 lecture build. Recorded as a
**gap**, not a pick.*

**Gap — no free, well-regarded, short video found.** The good material on
this exact correspondence is **written**, not video: the pandas docs'
"Comparison with SQL" page
(https://pandas.pydata.org/docs/getting_started/comparison/comparison_with_sql.html)
covers SELECT/WHERE/GROUP BY/JOIN/UNION/LIMIT mappings in one page and has no
video equal. What surfaced on YouTube split into two useless piles:

- **On-topic but from channels with no independent quality signal** — e.g.
  "Pandas vs SQL - What's The Difference?"
  (https://www.youtube.com/watch?v=4GhcNuOXJLU), 4:47, channel "The
  Comparison Channel"; several near-identical "How to convert SQL query into
  pandas" clips from "Intelligence For Business" (6-9 min each).
- **Well-regarded but too long, or off-target** — Rob Mulla's "SQL Databases
  with Pandas and Python" (16:59) and Abhishek Mishra's "How to Use SQL with
  Pandas" (14:02) both clear the ~12-minute cap; NeuralNine's "SQL Queries
  For Pandas DataFrames" (8:29) fits the cap but teaches `pandasql`
  (running SQL *against* a DataFrame), which is a different idea than the
  DataFrame↔table correspondence. Greg Reda's "Translating SQL to pandas.
  And back." (https://www.youtube.com/watch?v=1uVWjdAbgBg, PyData) is the
  authoritative treatment at **1:12:16** — far past the cap, but the right
  pointer for a curious student.

**Use written/interactive material instead**: the pandas "Comparison with
SQL" doc above, plus **Pandas Tutor** (https://pandastutor.com/, Sam Lau &
Philip Guo, UC San Diego) — a free in-browser visualizer that shows how each
pandas operation transforms a DataFrame step by step, which does the
"see the shape change" job a video would have done.

## Adding a new entry

When a fresh per-lesson search (a topic not yet listed above, or a better
candidate for one already here) turns up a verified or likely-good
candidate, add it here in the same shape — title, URL, channel, runtime (with
its actual confidence level, never silently upgraded), fit, and confidence —
so the next lesson touching the same concept doesn't repeat the search. Keep
an honest gap note (like Python functions above) rather than forcing a weak
fit just to fill a row.
