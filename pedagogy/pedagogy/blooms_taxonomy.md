# Bloom's Taxonomy Reference (Revised)

Used when authoring `check_understanding` slides (`content_spec/SCHEMA.md`) and by
the instructional-quality subagent's "Question Quality & Bloom's Levels" bucket
(`qa/instructional_review_checklist.md`). The goal: a lesson's questions should climb
the taxonomy, not sit entirely at the bottom. **No more than ~40% of a deck's
`check_understanding` questions should be at the Remember level; include at least one
question at Apply, Analyze, or Evaluate/Create.**

Each `check_understanding` slide's `bloom_level` field should be one of the six
values below (lowercase, as shown).

## The six levels, with data-analytics-calibrated examples

### 1. `remember` — recall a fact or definition
- "Which of these four data structures is immutable?"
- "What method aggregates rows in pandas?"
Use sparingly — necessary for vocabulary, but a deck built entirely on this level
isn't assessing understanding, just memorization.

### 2. `understand` — explain an idea in your own words / why something works
- "Why can a tuple be used as a dict key but a list can't?"
- "In your own words, what does 'O(1) lookup' mean?"

### 3. `apply` — use a concept in a new, concrete situation
- "Given this messy CSV column, which cleaning step would you run first, and why?"
- "Write the one line of code that would deduplicate this list."

### 4. `analyze` — break a problem into parts, compare, find the pattern/bug
- "This query is returning duplicate rows — what's the most likely cause?"
- "Compare these two approaches: which one won't scale past 1M rows, and why?"

### 5. `evaluate` — judge/justify a choice among alternatives (great for interview-style
and critical-thinking prompts)
- "Would you rather use a list or a set here — defend your answer."
- "Is this a good use of a dict, or would something else fit better? Why?"

### 6. `create` — design or propose something new (heaviest lift; use for
final-project-linked moments)
- "Sketch the data structures you'd use for a mini contact-deduplication tool."
- "Propose a pipeline (in pseudocode) for today's use case using what we just learned."

This is also the natural home for **praxis** (Freire) — reflection paired with
real action, not reflection alone — when a lesson's content supports liberatory
framing (see `pedagogy/liberatory_pedagogy.md`). A `create`-level prompt tied to
a real community dataset or `final_project` stake *is* praxis; don't add a
separate mechanism for it.

## Question styles (tag with `question_style`, not rendered on the slide)

- `conceptual` — tests understanding of the material itself.
- `interview` — phrased the way a real interviewer would ask it (verify via web
  search that the topic is genuinely common in data-role interviews — see
  `content_spec/SCHEMA.md` and the research-subagent step in
  `.claude/skills/new-lesson-deck/SKILL.md`). For calibrated phrasing and a
  matching delivery-technique framework, see `pedagogy/interview_frameworks.md`
  and `check_understanding.technique?` in `content_spec/SCHEMA.md`.
- `critical_thinking` — no single "textbook" answer; used to provoke discussion
  (typically paired with the `quote` layout or `check_understanding` in `discussion`/
  `would_you_rather` mode, which don't carry a definitive `answer` block).
- `fill_in_blank` — a short code/syntax snippet with one blank embedded
  directly in `prompt` (e.g. `` "What goes in the blank? `for i in ____(5): print(i)`" ``),
  answered as a quick recall/practice check — distinct from a `code` slide's
  own `blanked_code` (a full slide-level fill-in-the-blank exercise with its
  own reveal slide, meant for the one or two moments per lesson that earn a
  dedicated exercise; this is quieter and quicker, any `poll`/`game` moment).
- `debug` — a "why is this wrong?" critique prompt: a broken or subtly
  questionable snippet inline in `prompt` (backtick-formatted, per "Inline
  code formatting" in `content_spec/SCHEMA.md`), asking what's wrong or what
  it'll actually do. E.g. `` "Why won't this work? `my_dict['key'].append(x)` when `key` was never initialized as a list." ``
  Naturally sits at `analyze` or above — critiquing broken code is harder
  than recalling correct syntax. Also the right shape for "why would this
  code produce unexpected output" scenarios generally — a snippet plus a
  real (not hypothetical-sounding) surprising result, asking what caused it.
- `business_thinking` — a real-world business scenario the Fellow has to
  reason through, not recall — "a company wants to do X, what would they
  look at/do?" Naturally `apply` or `analyze`: there's rarely one memorized
  fact to retrieve, the question is whether the Fellow can connect a
  just-taught concept to a business situation that isn't a copy of the
  worked example. Distinct from `critical_thinking` in that a business
  scenario usually still has a defensible best answer (verifiable in
  `notes`, even if `options`/`answer` isn't set), where `critical_thinking`
  is more genuinely open.

These aren't a closed enum (same advisory-tag, not code-validated precedent
as `domain`) — pick whichever fits the question, and vary across a lesson. A
deck that's all `conceptual` polls, lesson after lesson, is the exact
flatness this doc's intro already warns against; `fill_in_blank`/`debug`/
`interview`/`business_thinking` give real formats to reach for instead of
another multiple-choice poll.

## A "review" lesson still needs to climb the taxonomy

**A lesson explicitly framed as retrieval practice/review is not an excuse
to stay at `remember` all day.** A real, already-shipped deck
(`recall-review-data-types-git`) had 11 `check_understanding` slides and
every single one sat at `remember` or `understand` — zero `apply`,
`analyze`, `evaluate`, or `create`, and zero `question_style: interview`
despite the deck's own `meta.scenario` explicitly framing the day as
practice for "the same way you'd need to explain them cold in an
interview." Retrieval practice on raw vocabulary ("What does `git init`
do?") is a legitimate, necessary **quick win** — a few per lesson, usually
front-loaded or used to close on a confident note, are fine and expected.
The failure mode is a review day that's made of *only* quick wins, never
asking a Fellow to actually use the material.

**Calibration set — generic (weak) recall vs. the higher-order version of
the same topic**, from real feedback on this finding:

- Weak (pure recall): *"What is `git status`?"* / *"What does `git init`
  do?"* / *"What is a p-value?"*
  Strong (same topic, applied): *"You just ran `git commit -m \"fix
  bug\"`, but `git status` still lists the file as modified — what almost
  certainly happened?"* (`analyze`, `debug` — applies 3 already-recalled
  commands together instead of re-asking one in isolation.)
- Strong (`analyze`, `debug`, general shape): *"Why would this code produce
  unexpected output?"* paired with a real scenario/snippet — never asked
  in the abstract; the scenario is what makes it `analyze` instead of
  `remember`.
- Strong (`apply`, `fill_in_blank`, general shape): *"Fill in the SQL
  clause you need to complete this query: `SELECT customer_id, ____(total)
  FROM orders GROUP BY customer_id;`"* — practicing syntax recall inside a
  real, runnable-looking context instead of naming a keyword in isolation.
- Strong (`understand`, `interview`): *"Explain why version control is
  important in building data projects and products."* A genuinely common
  interview question in real data/software roles (no fresh source-
  verification needed for a topic this well-established — see
  "Question styles" above for when a less-common interview topic *does*
  need web verification) — `mode: discussion`, no single `answer` block,
  since the value is in hearing several correct phrasings, not grading one.
- Strong (`apply`, `business_thinking`): *"A company wants to figure out
  how to price a new item. What data would they look at first, and would
  you expect it to be structured or unstructured?"* — applies a just-
  reviewed judgment call (structured vs. unstructured) to a genuinely novel
  business scenario instead of re-asking "X or Y, which is structured?" a
  second time with different nouns.
- Strong (`evaluate`/`create`, `critical_thinking` + `interview`): *"How
  would you approach an analysis in which you didn't have all the data you
  needed?"* — no single correct answer, asks for a real tradeoff/problem-
  solving stance, and is itself a common interview question, not just an
  interview-*flavored* one.

**The fix, in practice**: when a topic already appeared once at `remember`
earlier in the same review deck (see "Spaced repetition" below — this is
the same rule, just applied within a single review-day deck instead of
across a module), its second appearance should climb — apply it to a new
scenario, debug a broken instance, or ask for a judgment call, not restate
the same fact with different nouns. `recall-review-data-types-git` had
exactly this pattern: "structured or unstructured" asked twice, both times
at `understand`, both times the same X-or-Y shape — the fix was escalating
the second occurrence to the pricing scenario above, not asking it a third
time.

## Spaced repetition: escalate rigor on repeat

A topic revisited across a module (matching `skill_tags`/`topic` values on
2+ `check_understanding` slides, same deck or across different lessons)
should climb bloom_level as it recurs, not flatline at `remember` every
time. The first exposure to a topic legitimately earns a `remember`-level
check (retrieval practice on brand-new vocabulary); a *second* check on the
exact same topic, later, is the moment to ask more of — apply it to a new
example, critique a broken instance of it, defend a choice involving it —
not test the same recall a second time.

**The rule, deliberately simple**: a topic with 2+ `check_understanding`
occurrences that are **all** `bloom_level: remember` is a missed
escalation. A repeat at the same higher level (two `understand`-level
checks) isn't flagged — that can be legitimate reinforcement; only a topic
that's *never once* climbed past pure recall is the real gap. Checked two
ways: `qa/contrast_check.py`'s `_check_escalating_rigor` (within one deck)
and `qa/skill_coverage_check.py`'s `find_escalating_rigor_gaps` (across a
whole module's lesson timeline, via `curriculum_log.yaml`'s
`check_understanding_topics`) — both advisory, both exact-match-only, same
philosophy as every other log-derived check in this system.

In practice, a second-exposure check on the same topic is often a natural
fit for the newer archetypes above: the first exposure is `remember`
("what's a data structure?"), the second is `apply`/`analyze` via
`fill_in_blank` or `debug` ("here's a snippet that mixes up a data type and
a data structure — what's wrong?") rather than the identical multiple-choice
question repeated verbatim.

## Answer-reveal requirement

Any `check_understanding` slide with a definitive correct answer (`mode: poll`,
`game`, or `choose_path` with `options`) must carry an `answer` block: `{correct,
explanation, source}`. `source` should be a real, verifiable reference — a
textbook/docs page, a reputable article, or (for interview-style questions) evidence
the topic is commonly asked. The generator auto-inserts a visible answer-reveal
slide immediately after the question, with no transition slide in between (see
`content_spec/SCHEMA.md`) — a normal recap moment presented to students right
after the activity, not a hidden instructor-only slide.
