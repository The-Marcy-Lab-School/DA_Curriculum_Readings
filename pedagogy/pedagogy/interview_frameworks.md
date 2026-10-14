# Interview-Answer Frameworks Reference

Cached, cited reference used by the `new-lesson-deck` skill's step 3 (interview-
topic research) to pick a well-matched delivery framework for each
`interview_prep`/interview-style `check_understanding` question, and by the
instructional-quality subagent to confirm the notes actually coach that
framework rather than just stating a model answer.

**Source is internal, not external research.** Unlike `pedagogy/
engagement_techniques.md` or `pedagogy/liberatory_pedagogy.md` (grounded in
published pedagogy literature), this doc distills Marcy Lab School's own
"Ace the Interview" course — 8 real lecture decks in
`reference/interview_decks/` (Lectures 2-7, 9-10). Treat the frameworks below
as **exemplars for phrasing, structure, and delivery technique**, not a
literal question bank — a per-lesson `interview_prep` question should stay
tied to that lesson's own content/scenario, never copy-pasted wholesale from
these source decks.

**Known gap, don't fabricate**: PREP (Lecture 1) and KPI Tree (Lecture 8) are
both named throughout the other 8 decks' own cumulative "toolkit" recap
tables, but their dedicated lecture decks aren't in `reference/
interview_decks/` yet. PREP gets a partial entry below (its 4 steps are
quoted secondhand from other lectures' review sections); KPI Tree isn't
documented at all — don't guess at its structure. Fill both in properly once
their source PDFs are added.

## Quick reference: which framework fits this question?

| Question sounds like... | Framework | Steps |
|---|---|---|
| "Tell me about a time you..." | **STAR** | Situation → Task → Action → Result (→ Reflection) |
| You genuinely don't know the answer | **ARP** | Acknowledge → Reason → Pivot |
| The question is vague/underspecified ("How would you improve retention?") | **QAR** | Question → Assumption → Risk |
| "Explain X to a [non-technical stakeholder]" | **Teach-Back** | Audience → Simplify → Analogy → Check |
| "Why did X happen?" / "How would you investigate...?" | **Investigation Framework** | Observation → Hypothesis → Evidence → Recommendation |
| A live/whiteboard SQL question | **Query Walkthrough Method** | Understand → Plan → Write → Explain → Validate |
| "Users drop off between step A and step B" / conversion questions | **Funnel Framework** | Stage → Drop-off → Hypothesis → Action |
| "How do you know this data is trustworthy?" | **C.R.A.F.T.** | Complete → Reasonable → Accurate → Fresh → Traceable |
| Any answer needs a general opening structure | **PREP** *(partial — see gap note)* | Point → Reason → Example → Point |

Frameworks **combine** for compound questions — the source decks teach this
explicitly as an advanced move (see "Chaining frameworks" below). A single
`interview_prep` topic should still name only one *primary* `technique` (see
`content_spec/SCHEMA.md`) — mention a secondary chained framework in prose
within `notes` rather than as a second structured field.

## ARP — Acknowledge, Reason, Pivot

**When to use it**: A genuine knowledge gap — an unfamiliar tool, term, or
concept — where panic is the failure mode, not lack of skill.

- **Acknowledge**: be honest about the gap, without apologizing for it.
  *"Acknowledge does not mean apologize. Avoid: 'I have no idea' or 'I'm
  terrible at that.'"*
- **Reason**: show your thinking process — what clues/adjacent knowledge can
  you reason from?
- **Pivot**: connect to something you *do* know.

**Model shape**: *"I haven't worked directly with [X] yet, but [reasoning
from an adjacent concept], so I'd approach it by [pivot to known territory]."*

**Weak → strong**: "No." → "I haven't worked directly with Kafka yet." The
strong version stays honest, concise, and professional — it doesn't bluff
and doesn't over-apologize.

**Also works for live coding**: when a candidate forgets exact syntax, the
same shape applies verbally — outline the structure and narrate the approach
even without typing perfect syntax. Interviewers are often evaluating
problem decomposition and communication, not memorized syntax.

## QAR — Question, Assumption, Risk

**When to use it**: A question is intentionally incomplete — answering
immediately risks solving the wrong problem.

- **Question**: what information is missing?
- **Assumption**: what am I assuming in the absence of that information?
- **Risk**: what happens if that assumption is wrong?

**Model shape**: *"Before [X-ing], I'd want to clarify/understand
[missing information]."* — a single sentence-starter reused across every
QAR example in the source material (business questions, SQL questions,
dashboard requests alike).

**Weak → strong**: the failure mode isn't a bad *answer*, it's an *unstated*
assumption — "How would you improve retention?" answered immediately, with
no clarifying question, is the weak pattern. Strong: *"Before recommending
solutions, I'd want to understand how retention is being measured, which
customers are affected, and whether any recent business changes occurred."*

**Situation → first clarifying step** (a reusable mapping): case study →
clarify business context; SQL question → clarify requirements; dashboard
request → clarify audience; modeling question → clarify target variable;
system question → clarify constraints.

## STAR (+ Reflection) — Situation, Task, Action, Result, Reflection

**When to use it**: Behavioral "tell me about a time..." questions.

- **Situation**: what was happening?
- **Task**: what were you responsible for?
- **Action**: what did you do? *(gets the most airtime — see timing below)*
- **Result**: what happened?
- **Reflection**: what did you learn?

**Timing**: Situation 10-15 sec, Task 5-10 sec, **Action 30-45 sec**, Result
10-15 sec, Reflection 10-15 sec — roughly 60-90 seconds total. *"Give me a
movie trailer, not the whole movie."*

**Weak → strong, three separate skills**:
- Personalizing: "We fixed the pipeline." → "I reviewed the logs, identified
  the failed transformation step, updated the logic, and reran the
  pipeline."
- Quantifying impact: "The project went well." → "The fix improved dashboard
  accuracy for stakeholders." → (even stronger) "The fix removed duplicate
  records and eliminated weekly manual corrections."
- Reflecting: "I learned SQL." → "I learned to validate assumptions early
  and check the data grain before building joins."

**Pausing scripts** (buy yourself a moment before starting): *"I'd like to
take a moment to organize my thoughts."* / *"The first example that comes to
mind is..."*

**One story, many questions**: a single well-built narrative can answer
several different prompts (challenge, mistake, technical problem, handling
pressure, stakeholder communication, process improvement) — build 2-3 strong
stories, not one per possible question.

## Teach-Back — Audience, Simplify, Analogy, Check

**When to use it**: Explaining technical work to a non-technical
interviewer/stakeholder.

- **Audience**: who are you talking to? *"Should your explanation be the
  same for a Data Engineer, a Product Manager, a CEO, and a middle school
  student? No."*
- **Simplify**: remove unnecessary jargon (unless the interviewer directly
  asks for technical depth — jargon is fine when requested).
- **Analogy**: use a concrete comparison to help the listener visualize the
  idea.
- **Check**: confirm the explanation actually landed.

**Weak → strong, three separate skills**:
- Business framing over implementation detail: "I built a Tableau dashboard
  with calculated fields and filters." → "I built a dashboard that helped
  school leaders quickly identify attendance trends and decide where
  additional support was needed."
- Analogy: "A database is like a digital filing cabinet where information is
  organized so you can quickly find what you need."
- Why before how: "I removed duplicates." → "I cleaned the data because
  inaccurate data leads to misleading insights and poor business decisions."

**Checking understanding** — offer explicit clarity instead of a bare "Any
questions?": *"I'm happy to provide clarity on any piece of my project."* /
*"Would it be helpful if I explained that differently?"*

## Investigation Framework — Observation, Hypothesis, Evidence, Recommendation

**When to use it**: "Why did X happen?" / root-cause / methodology
questions — *"They're not asking for the answer. They're asking for your
investigation process."* Also applies to debugging questions asked verbally.

- **Observation**: what happened? Confirm the problem is real before
  theorizing.
- **Hypothesis**: state **multiple** possible explanations — don't jump to
  one conclusion.
- **Evidence**: what data would confirm or reject each hypothesis?
- **Recommendation** (also called "Next Step"): what action follows from the
  evidence?

**Model shape**: *"My first step would be to confirm that [the metric]
actually [changed] and understand which [definition] we're referring to. I'd
develop several possible explanations to test... figure out exactly what
data is needed... then prioritize the strongest hypothesis based on ease and
impact."*

**Also for debugging aloud**: "Fix cause instead of rewriting the query
blindly" — apply the same Observation → Hypothesis → Evidence shape to a
bug, not just a business metric.

## Query Walkthrough Method — Understand, Plan, Write, Explain, Validate

**When to use it**: A live/whiteboard SQL question. Opens with a QAR-style
clarifying question before any code gets written.

1. **Understand** the business question — clarify ambiguous terms first
   (*"I'd like to clarify whether 'top' means highest revenue, highest
   number of purchases, or lifetime value."*).
2. **Plan**: describe the approach before typing — *"My goal isn't just to
   return monthly sales — I need to compare each month's performance to the
   previous month. So my query will likely need to: aggregate sales by
   month, calculate total monthly sales, compare each month to the
   previous month."*
3. **Write** the query.
4. **Explain** each section as you go, clause by clause — *"I'm grouping by
   customer because the business question asks for customer-level
   summaries, not individual transactions."*
5. **Validate** the output — *"I'd compare the total revenue against a
   dashboard or report to ensure the results are reasonable and verify
   there aren't duplicate transactions inflating revenue."*

**The instinctive trap to name explicitly**: writing `SELECT * FROM sales;`
immediately, before breaking down the logic. **The fix**: narrate the plan
first, in plain business language, before a single line of SQL.

**Business-question → SQL-pattern mapping** (a reusable cheat sheet):
monthly totals → `GROUP BY`; month-over-month change → `LAG()`/window
function; top N → `ORDER BY` + `LIMIT`; running total → `SUM() OVER()`;
first purchase per customer → `ROW_NUMBER()`/`MIN()`; customers with no
orders → `LEFT JOIN` + `NULL` check; duplicate records → `GROUP BY` +
`HAVING`.

**Debugging aloud, weak → strong**: "I'll rewrite it." → "I'm seeing more
rows than expected, so my first suspicion is a one-to-many join. I'd compare
row counts before and after the join and inspect the join keys."

## Funnel Framework — Stage, Drop-off, Hypothesis, Action

**When to use it**: Conversion/customer-journey questions — *"At which
stage are we losing the most people?"*

- **Stage**: map the sequence of customer actions (e.g. Visit → Account
  Created → Email Verified → First Purchase → Repeat Customer).
- **Drop-off**: identify where the largest percentage loss happens.
- **Hypothesis**: propose possible reasons for that specific drop-off.
- **Action**: propose an investigation step or fix, tied to the hypothesis.

**Core heuristic**: *"Don't optimize the whole funnel — find the
bottleneck."* Interviewers care more about the reasoning than the funnel
diagram itself.

**Weak → strong**: "I'd redesign the checkout page." → "I'd identify exactly
where customers leave the funnel before proposing changes."

**Combines with other frameworks**: a full funnel answer often chains
QAR (clarify which stage/segment) → Investigation Framework (hypothesize
why) → Funnel Framework (name the stage) → KPI Tree (tie back to the
business metric that matters).

## C.R.A.F.T. — Complete, Reasonable, Accurate, Fresh, Traceable

**When to use it**: Data-quality/trustworthiness questions — *"A successful
pipeline does NOT guarantee trustworthy data."*

- **Complete**: do we have everything expected? (row counts, NULLs)
- **Reasonable**: do the values make sense? *"Just because a cell isn't
  empty doesn't mean the data represents reality."*
- **Accurate**: does the data correctly represent reality? *"Accuracy
  requires context — not just clean data."*
- **Fresh**: is the data current? *"The values may be accurate — they're
  just stale."*
- **Traceable**: can you explain where it came from and what happened to
  it? *"Traceability is the foundation of data trust." "Show, don't just
  tell."*

**The one hard rule to name explicitly**: *"NEVER say: 'I will check the
data.'"* That's the textbook weak answer — it doesn't show process. Strong:
name the specific checks (completeness, reasonableness, accuracy, freshness,
traceability) by name.

**Model shape for a numbers-conflict question** ("Your dashboard says $2.1M,
Finance says $2.4M — what would you do?"): *"I wouldn't immediately modify
the dashboard. Instead, I'd reconcile the results against the agreed source
of truth."* Don't rush to change a number before tracing why it differs.

## PREP — Point, Reason, Example, Point *(partial entry — see gap note above)*

**When to use it**: The default opening structure for any interview answer,
referenced as the baseline every other framework in this series builds on
or combines with.

- **Point**: state your answer/position up front.
- **Reason**: why.
- **Example**: a concrete instance that backs it up.
- **Point**: restate the point to close.

This entry is intentionally thin — Lecture 1's dedicated PREP deck isn't in
`reference/interview_decks/` yet. Expand this section properly once it's
added; don't invent additional detail meanwhile.

## Chaining frameworks

The source decks explicitly teach combining frameworks for compound/
ambiguous questions as an advanced move — *"Great analysts combine
frameworks."* The common pattern: a framework that **resolves ambiguity**
(QAR, or Investigation Framework's Observation step) runs first, then a
framework that **structures the substance** of the answer (PREP, or a
domain-specific one like Funnel/C.R.A.F.T.) takes over once the question is
actually well-defined. E.g. QAR's clarifying question ("What customer
segment are we discussing?") feeds directly into a PREP-style opener ("Based
on that segment, I would first identify where retention is declining...").

When a lesson's `interview_prep` question genuinely calls for this, name the
primary framework in `technique` and mention the chained second framework in
prose within `notes` — see "Speaker notes structure" in
`content_spec/SCHEMA.md`.
