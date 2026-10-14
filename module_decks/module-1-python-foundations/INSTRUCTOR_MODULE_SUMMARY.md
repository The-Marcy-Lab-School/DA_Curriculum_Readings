# Module Summary — Module 1: Programming Fundamentals

*Written via the `plan-module` skill, from
`DA_Projects_Curriculum_FALL26_INSTRUCTOR`'s `projects/Module1_ProgrammingFundamentals/`
(`_brief.json`, `instructor/overview.md`, `instructor/LECTURE_LAB_BRIEF.md`,
`instructor/rubric.md`). See "Module plan" in `content_spec/SCHEMA.md` for
how this file is used. Authored, not auto-regenerated — reconcile by hand as
this module's lessons get built.*

## Module identity

- **Title**: Programming Fundamentals
- **module_number**: 1
- **Schedule**: 24 school days total — **19 content days, then 5 project
  days** (the calendar's last 5 days, a fixed 1-week sprint per the
  project's own already-published `CHECKLIST_TIMELINE.md` — see "Timeline"
  below). Every day below is a real day in the calendar, not an abstract
  session count.
- **Deliberately expanded past the upstream brief's original 2.5-week
  content-phase estimate** (2.5 weeks → 3.8 weeks / 13 days → 19 days).
  This module is where students write real code for the first time and
  design a class from scratch for the first time — both are recurring
  struggle points for this cohort specifically, so the extra days buy real
  practice reps rather than compressing to the original estimate. If a
  later module needs to claw back time on the overall calendar, do it
  there, not by cutting this module's practice days back down.
- **`lesson_number` restarts at 1 for this module** — it does not continue
  from Module 0's own count (which ended at 6). `python-data-structures`
  (Day 7) is `lesson_number: 7` because 6 other lecture/recall slots (Days
  1-6) come before it in *this module's own* sequence, not because of any
  carryover from Module 0. `lecture_recall` days count toward
  `lesson_number` too (same precedent as Module 0's own recall-review
  deck, which is lesson 4, not skipped) — only `lab`/`project` days don't.

## Objectives table

The 8 objectives below are the upstream brief's own — each maps directly to
`competency_assessments`/the rubric. **4 additional topics were added on
top of these** (not in the upstream brief) specifically because this
cohort has repeatedly struggled with them — see "Supplementary content"
right after this table.

| # | Objective | Bloom's level | Scaffolding level | skill_id(s) |
|---|---|---|---|---|
| 1 | Trace short, already-written loop/conditional snippets and state their exact output without running them; define "iteration"/"conditional"/"loop body" | remember | modeled | `control-flow-loops` |
| 2 | Explain why a function's parameters/return value and local variable scope make code easier to test/reuse than one long block | understand | modeled | `functions-modular-programming` |
| 3 | Plain-language, code-free intuition for why a dict lookup stays fast as data grows while a linear scan slows down | understand | guided | `algorithmic-complexity-big-o` |
| 4 | Following a step-by-step template, write a function using a loop + conditional to validate a list of transaction-like strings | apply | guided | `control-flow-loops`, `functions-modular-programming` |
| 5 | Following a lighter template, write a second function summarizing that validated list | apply | guided | `control-flow-loops`, `functions-modular-programming` |
| 6 | With a partner, following a worked template, define an `Item`-style class (`__init__`, ≥2 attributes, one method), instantiate multiple objects, confirm independent attribute storage | apply | collaborative | `object-oriented-programming` |
| 7 | With a peer, compare a linear-scan function against a dict-keyed lookup over the same class's objects; determine each approach's Big-O and explain why the dict approach scales better | analyze | collaborative | `algorithmic-complexity-big-o`, `control-flow-loops` |
| 8 | Without a template, independently debug an AI-generated ~30-line script (functions + loop + class), locate/fix ≥3 planted logic errors, refactor one repeated block into a function | analyze | independent | `functions-modular-programming`, `object-oriented-programming`, `attention-to-detail` |

**Two bridging gaps, flagged explicitly in the source `LECTURE_LAB_BRIEF.md`
— content must close these before the project, not leave them for the
project to test cold:**
- **Solo OOP design rep.** Objective 6 only reaches collaborative/
  template-filling (a partner, attributes already decided). The project
  requires *independently* designing a class's attributes from a stated
  stakeholder need — materially harder, and the project's starter code
  gives no class signature to lean on. Needs a solo design rep first (Day
  15's lab), on a scenario distinct from all 4 the project offers.
- **`try`/`except` error handling.** Genuinely new — not in any of the 8
  objectives above. They cover conditional validation
  (`.isdigit()`-style), not exception handling. The project requires a
  real `try`/`except` for type-validating a quantity field. Needs an
  explicit, live-modeled example before the project (Day 10).

## Supplementary content (instructor-added, not in the upstream brief)

Added because this cohort has repeatedly struggled with classes/functions
built from scratch, and because a few genuinely necessary supporting
concepts weren't covered by the 8 objectives above despite the project
needing them:

- **Nested loops & conditionals** (Day 2) — the batch-file validation logic
  the project needs (check operation type, then check field validity) is
  naturally nested; objective 1/4 don't explicitly call this out but the
  project assumes it.
- **Local vs. global variables** (Day 4) — objective 2 covers local scope
  only ("doesn't leak out"); explicitly teaching the global side too
  preempts a common failure mode (reaching for a global instead of
  passing/returning a value).
- **Data serialization — why JSON/CSV/TXT exist** (Day 8) — the project
  requires `export_to_json` and reads a `.txt` batch file, but no objective
  actually teaches *why* serialization matters, only that it's used. Needs
  its own conceptual treatment (with real analogies), not just syntax
  encountered in passing during the project.
- **Magic methods** (Day 14) — `__init__` is covered (objective 6), but
  `__str__`/`__repr__`/other dunder methods aren't, despite being standard
  OOP vocabulary a Fellow will meet immediately in any real codebase or
  interview.
- **A second, stress-testing lab** (Day 17) — builds directly on Day 15's
  solo-designed class (labs building on one another, not one-off
  exercises): students populate their own class with many objects and
  empirically time a linear-scan lookup against a dict-keyed lookup,
  turning objective 7's Big-O comparison from "explain" into "prove," at
  MVP-lecture stakes before the project's own Above & Beyond backlog asks
  for the same move independently. See "A note on labs building on each
  other" below.
- **HackerRank-style practice reps**, woven into Days 2, 5, 9, 12, and 19
  rather than a single day — short, timed, applied coding prompts (trace
  the output / write the function / spot the bug), both for genuine skill
  reps and because this format is exactly what technical interview
  screens use.
- **`range()`** (Day 1) — genuinely necessary before any loop-trace question
  can use it, but not named in any of the 8 objectives. A real gap found via
  review: an earlier draft of Day 1 tested `range()` in a trace question
  immediately after a code-along that never used it, untaught vocabulary
  tested cold. Fixed by adding a short, explicit `range()` code-along
  directly before that question.
- **`enumerate()`** (planned for Day 9) — not yet taught anywhere in this
  module as of this writing. Deliberately held for Day 9 ("Writing Your
  First Validation Function") rather than introduced early in isolation —
  it has genuine payoff there: reporting *which* line of the batch file
  failed validation (`"Line 42: invalid quantity"`) needs the index
  `enumerate()` provides while looping, so it lands with real motivation
  instead of being taught as an abstract extra. **Don't forget this when
  building Day 9** — add it there, not before.
- **`*args`/`**kwargs`** (taught on Day 12) — not in the upstream brief's
  8 objectives, and the project's own functions (`read_batch_file`,
  `validate_line`, etc.) all have fixed, simple parameter signatures that
  never actually need it — added by explicit instructor request, not
  project necessity. Deliberately held for Day 12 ("Recall & Practice:
  Functions, Validation, try/except, Serialization") rather than Day 3 —
  Day 3 is the first exposure to functions at all and shouldn't be
  overloaded with a flexibility feature before the basics are solid; Day 12
  is already a consolidation/practice day for the functions arc (Days 3, 9,
  10, 11), so this lands as a genuine "leveling up" moment once students
  are comfortable, not an abstract extra bolted onto day one. Now taught,
  on Day 12 as planned, via a `total(*numbers)`/`describe_game(title,
  **details)` pair distinct from the project's own scenarios.

## A note on labs building on each other

Day 15 (solo class design) and Day 17 (stress-test timing) are
**deliberately the same class, same student, two days apart** — Day 17
doesn't invent a new scenario, it reuses whatever class a student designed
on Day 15 and asks them to stress-test it. This mirrors what the project
itself later asks for (build a class, then reason about its performance)
and gives a real, low-stakes rehearsal of "extend your own prior work," not
just "extend a template." See `labs/solo-class-design-practice.md` and
`labs/stress-test-timing-practice.md`.

## Project & rubric distillation

**Real-world project**: Students choose one of 4 stakeholder scenarios
(bookstore, restaurant, healthcare supplies, athletic wear inventory —
`SCENARIOS.md`), design their own class (no prescribed attributes — a real
design decision tied to their stakeholder's stated need), and write
standalone functions to read/validate a 430-row batch file of ADD/REMOVE/
SEARCH transactions (14 planted edge-case types, ≥3 distinct required),
including a real `try`/`except` for type validation. They export results to
JSON for use with a given interactive search tool, write a reflection
(including an AI-assisted edge-case-discovery piece), and present a
6-slide-max deck with a live demo. **First project of the program where
students write real code** — Module 0 was terminal-only. Full detail:
`module_sources/module-1-python-foundations/PROJECT.md`.

**Do not reuse any of the project's own 4 scenarios in a lecture/lab demo**
— a demo built on one would either spoil that scenario's novelty or hand
students a ready-made template for their own class design, undermining the
whole point of the redesign. Demo domains instead: a board-game collection
tracker (`BoardGame`: `title`, `players_available`, `category`) or an
office-supply tracker (`SupplyItem`: `name`, `count`, `department`) — see
`DATASET.md`.

**Timeline**: runs as an explicit 1-week sprint (4 build days + a demo day,
`student/CHECKLIST_TIMELINE.md`) — a genuine pacing override from the
brief's own generated 1.5-week estimate, already decided upstream and kept
as-is here. `ABOVE_AND_BEYOND.md` is the sprint's backlog (real, legitimate
work deliberately out of scope), not overflow. **`PROJECT.md`'s milestone
table labels these 5 days as "Sprint Day 1-5" (matching
`CHECKLIST_TIMELINE.md`'s own numbering), with the absolute calendar Day
20-24 cross-referenced alongside** — see the exception in "The project" in
`content_spec/SCHEMA.md`.

| Skill | Rubric ceiling this module | Assessment method |
|---|---|---|
| `control-flow-loops` | analyze (via Big-O comparison) | guided coding exercise + trace review |
| `functions-modular-programming` | analyze (via independent debugging) | graded code submission |
| `object-oriented-programming` | analyze (via independent debugging) | graded code submission + explanation |
| `algorithmic-complexity-big-o` | analyze | written comparison exercise, tied to the student's own project code |
| `attention-to-detail` | analyze, independent | independent debugging exercise |

**Common project mistakes (preempt these in lecture/lab, not just penalize
in the rubric after):**
1. Writing one long function that does everything instead of splitting
   validation, reading, and summarizing into separate functions.
2. Letting one malformed transaction line crash the whole script instead of
   catching and reporting it.
3. Holding item data in loose parallel lists instead of actually using the
   `Item` class consistently throughout.
4. Only testing the happy path — never trying an empty file or a REMOVE for
   an item that doesn't exist.

**Good vs. weak (from the brief's `good_vs_bad_criteria`)**: Good — the
`Item` class is used consistently throughout (not partially bypassed by raw
dicts elsewhere); malformed lines produce a specific, informative error
message and never crash the program; the Big-O reflection accurately labels
linear-search vs. dict-lookup complexity and ties the reasoning to the
student's own search implementation. Weak — all logic lives in one long
unstructured script with no functions or class; a malformed input line
crashes the program with an unhandled traceback; the Big-O reflection
recites textbook definitions without connecting them to the student's own
code.

**A narrative-field bug in the upstream brief, don't propagate it**:
`ai_integration_notes`/`professional_skill_spotlight` both cite "Objective
6" for the planted-bug/debugging exercise. The actual `learning_objectives`
list has the debugging exercise at **objective 8** (analyze/independent) —
objective 6 is the collaborative `Item`-class exercise. Same class of bug
already caught once for Module 0's own brief.

## AI integration touchpoints (throughout, not just Day 18)

The upstream brief's `ai_integration_notes` frames this module as
extending Module 0's `ai-literacy` foundation into a code-specific preview
of `ai-output-validation` (formally assessed later, in the Generative AI &
Agentic AI Tooling module) — Day 18's debugging exercise is the flagship
moment (an AI-generated script with planted errors, students verify by
tracing execution rather than trusting fluent-looking code), but the same
"verify, don't just trust" thread should show up earlier too, not appear
out of nowhere on Day 18:

- **Day 1**: brief framing note — the same AI-literacy habit from Module 0
  (don't trust a confident-sounding answer without checking) applies to
  code too: if you ask an AI to explain what a snippet does, trace it
  yourself before believing the explanation.
- **Day 8 (Data Serialization)**: AI tools constantly read/write JSON —
  worth naming explicitly that understanding the format yourself is what
  lets you spot when an AI-suggested data structure is actually wrong.
- **Day 9 / Day 11 (writing functions from scratch)**: if a student asks
  an AI to help draft a function, the verification step is the same
  tracing skill from Day 1 — model this explicitly once, don't leave it
  implicit.
- **Day 13 / Day 14 (OOP + magic methods)**: AI tools are very good at
  generating a plausible-looking class fast — a good moment to name that
  *generating* a class isn't the hard part, *deciding whether its
  attributes actually fit your stakeholder's need* is (directly sets up
  Day 15's solo design bridging gap, which is precisely about not
  accepting a generic AI-shaped class unexamined).
- **Day 17 (stress-test lab)**: a natural moment to ask an AI for an
  optimization suggestion, then verify the claim empirically by timing it
  — "trust, but verify with real data" applied to a performance claim, not
  just a correctness one.
- **Day 18 (debugging)**: the flagship exercise itself, per the upstream
  brief.
- **Day 19 (practice gauntlet)**: include at least one AI-output-
  verification-style prompt in the mixed review, not just syntax/Big-O
  recall.

## Interview-prep bank

None supplied in the upstream brief for this module (no `interview_prep`
key in `_brief.json`) — same gap as Module 0. Any `check_understanding`
with `question_style: interview` still needs to be written and verified
per-lesson (see `content_spec/SCHEMA.md`'s "Question styles"), using
`reference/interview_decks/`/`pedagogy/interview_frameworks.md` for
phrasing/technique calibration — that mechanism applies regardless of
whether this bank has entries.

## Video resources

`pedagogy/video_resources.md` already has a **verified** entry for Day
13's OOP lecture ("Object-oriented Programming in 7 minutes," Programming
with Mosh, 7:34, confirmed runtime) — use it directly, no fresh search
needed. No entry yet for magic methods, data serialization, or Big-O
specifically applied to dict-vs-list (the existing probability/hypothesis-
testing/etc. entries don't cover this module's topics) — `new-lesson-deck`
step 3 should search fresh for those and add verified findings back to the
bank per its own "check first, add what's missing" discipline.

## Prerequisite skills

`explicit_prerequisites`: `general-programming-coding`, `data-literacy`,
`git-version-control` — all Module 0, no new upstream instruction to hold
accountable there. `cumulative_from_earlier_modules` additionally lists
`ai-literacy`, `curiosity`, `critical-thinking`, `terminal-command-line`.

**Explicit prereq-recall requirement (not just framing prose)**: per "A
lesson with `meta.dependent_skills` needs an explicit, active recall
moment, not just a passive mention" in `content_spec/SCHEMA.md`, **Day 1's
deck must include a real early `check_understanding` (poll or discussion)
that actually exercises Module 0 vocabulary** — e.g. classify a few
example values by data type, or recall what `git status`/`git add`/`git
commit` each do — not just a `notes` line saying "you already know
variables and lists." A passive mention is a real, previously-caught gap
class in this codebase (see `qa/deck_review_exemplar.md`'s "explicit
recall moment" entries) and this module explicitly needs the same
discipline applied to Module 0's material specifically.

**How Module 0's variables/data structures relate to this module**: Module
0 taught *what* a variable/data type/data structure is, entirely from the
terminal, with no code authorship at all. This module is where that
vocabulary becomes something students actually *write* — declaring real
Python variables, and (Day 7) choosing a real data structure (list/tuple/
dict/set) for a given problem, building directly on Module 0's
type-classification judgment rather than re-teaching it from zero.

**This module sets up** — the mechanical `skills_after` table is empty and
misleading for this module (computed field is blind to the fact that
downstream modules cite the generic `python`/`general-programming-coding`
id, not this module's granular skill ids). Real impact, by hand:
- **Real Python fluency** assumed without re-teaching from **Module 3**
  onward, through **4, 8, 9, 11, 12, 13, 15** — the entire back half.
- **`algorithmic-complexity-big-o`** returns as a practical concern in
  **Module 6** and **Module 9**.
- **`attention-to-detail`** reappears formally in **Module 14**.
- **`project-management`** (not tested this module, but given a first real
  rep via the sprint/backlog/stand-up framing) becomes formally assessed by
  **Module 15**.
- **Immediate next module: Module 2** (Exploratory Data Analysis &
  Descriptive Statistics), which introduces `pandas` for the first time —
  `above_and_beyond/preview_pandas.py` previews this.

## Skill coverage check

`qa/skill_coverage_check.py` needs real built decks/`curriculum_log.yaml`
entries to run against, so it can't be run for real until more of this
module is built — **run it (and `check-module-alignment` for a full
`ALIGNMENT_REPORT.md`) once the remaining 16 lecture/recall decks and 2 lab
worksheets exist.** By-hand check against the calendar as planned, in the
meantime: every one of the 5 `competency_assessments` skills recurs at
increasing scaffolding across multiple days, not just once —
`control-flow-loops` (Days 1, 2, 5, 7, 9, 11, 12, 16), `functions-modular-
programming` (Days 3, 5, 9, 11, 12, 13, 14, 18), `object-oriented-
programming` (Days 13, 14, 15, 16, 17, 18), `algorithmic-complexity-big-o`
(Days 6, 7, 16, 17), `attention-to-detail` (Days 17, 18, 19). No skill is
single-exposure-only, so the spacing/escalation check this codebase's own
`_check_escalating_rigor`/`find_escalating_rigor_gaps` look for should have
real material to find once decks exist.

## Lecture & Lab Map

A real calendar: 16 `lecture_new` days, 3 `lecture_recall` (retrieval/
gamified review) days, 2 `lab` days, then 5 `project` days. **Expanded past
the upstream brief's own estimate on purpose** — see "Module identity"
above.

| Day | Session type | Title/topic | Objective(s) | Scaffolding level | Artifact |
|---|---|---|---|---|---|
| 1 | `lecture_new` | Control Flow & Conditionals: Tracing Code by Hand | 1 (remember, modeled) | modeled | deck: not yet built (lesson 1) — **must include a real Module 0 prereq-recall check**, see "Prerequisite skills" above |
| 2 | `lecture_new` | Nested Loops & Conditionals: When One Isn't Enough | supplementary, groundwork for 4 | modeled | deck: not yet built (lesson 2) |
| 3 | `lecture_new` | Functions, Parameters & Return Values | 2, first half (understand, modeled) | modeled | deck: not yet built (lesson 3) |
| 4 | `lecture_new` | Local vs. Global Variables & Scope | 2, second half + supplementary | modeled | deck: not yet built (lesson 4) |
| 5 | `lecture_recall` | Recall & Practice: Loops, Conditionals, Functions | 1, 2 (retrieval + HackerRank-style practice) | guided | deck: not yet built (lesson 5) |
| 6 | `lecture_new` | Big-O Intuition — Why Some Lookups Stay Fast | 3 (understand, guided) | guided | deck: not yet built (lesson 6) |
| 7 | `lecture_new` | Python Data Structures | reinforces 3 with real syntax | guided | deck: **built** — `lectures/python-data-structures/` (lesson 7, reconciled from lesson 4) |
| 8 | `lecture_new` | Data Serialization — Why JSON, CSV, and TXT Exist | supplementary, feeds project's `export_to_json` | guided | deck: not yet built (lesson 8) |
| 9 | `lecture_new` | Writing Your First Validation Function, From Scratch | 4 (apply, guided) | guided | deck: not yet built (lesson 9) |
| 10 | `lecture_new` | Error Handling (try/except) | bridging gap (apply, guided) | guided | deck: **built** — `lectures/error-handling/` (lesson 10) |
| 11 | `lecture_new` | Summarizing Data With a Second Function | 5 (apply, guided) | guided | deck: **built** — `lectures/summarizing-data-with-a-second-function/` (lesson 11) |
| 12 | `lecture_recall` | Recall & Practice: Functions, Validation, try/except, Serialization | 4, 5 (retrieval + HackerRank-style practice) | guided | deck: **built** — `lectures/recall-practice-functions-validation-try-except-serialization/` (lesson 12) |
| 13 | `lecture_new` | OOP: Building a Class With a Partner | 6 (apply, collaborative) | collaborative | deck: **built** — `lectures/oop-building-a-class-with-a-partner/` (lesson 13) |
| 14 | `lecture_new` | Magic Methods — What `__init__`/`__str__`/`__repr__` Actually Mean | supplementary, extends 6 | collaborative | deck: **built** — `lectures/magic-methods-what-init-str-repr-actually-mean/` (lesson 14) |
| 15 | `lab` | Solo Class Design Rep | bridging gap (rehearsed, independent) | collaborative→independent | **built** — `labs/solo-class-design-practice.md`/`.yaml`, worksheet pair in `labs/solo-class-design-practice/` |
| 16 | `lecture_new` | Big-O in Practice: Linear Scan vs. Dict Lookup, With a Partner | 7 (analyze, collaborative) | collaborative | deck: **built** — `lectures/big-o-in-practice-linear-scan-vs-dict-lookup-with-a-partner/` (lesson 15) |
| 17 | `lab` | Stress-Test Your Code: Timing & Efficiency | 7 continued, builds on Day 15's class (rehearsed, independent) | collaborative→independent | **built** — `labs/stress-test-timing-practice.md`/`.yaml`, worksheet pair in `labs/stress-test-timing-practice/` |
| 18 | `lecture_new` | Debugging Like a Pro: Finding Planted Bugs Independently | 8 (analyze, independent) | independent | deck: **built** — `lectures/debugging-like-a-pro-finding-planted-bugs-independently/` (lesson 16) |
| 19 | `lecture_recall` | Final Practice Gauntlet — Mixed HackerRank-Style Review | all (cumulative retrieval) | independent | deck: **built** — `lectures/final-practice-gauntlet-mixed-hackerrank-style-review/` (lesson 17) |
| 20 | `project` | Sprint Day 1 — Planning: choose scenario, read, design (not code) | — | independent | `PROJECT.md` |
| 21 | `project` | Sprint Day 2 — Core build: class + validation | — | independent | `PROJECT.md` |
| 22 | `project` | Sprint Day 3 — Integration: real file, real edge cases | — | independent | `PROJECT.md` |
| 23 | `project` | Sprint Day 4 — Polish: output, export, reflection | — | independent | `PROJECT.md` |
| 24 | `project` | Sprint Day 5 — Sprint review: deck + live demo | — | independent | `PROJECT.md` |

**Common misconceptions to preempt (from the upstream brief's
`LECTURE_LAB_BRIEF.md`), each placed at its natural day**: a variable
defined inside a function being visible outside it (Day 4, model with
Python Tutor); code that runs without an error being assumed correct (Day
18); `__init__` running every time an object is used rather than once at
creation (Day 13/14); confusing Big-O with current speed rather than how
runtime scales (Day 6); writing one long do-everything function (Day 1/9);
letting one malformed line crash the whole script (Day 10/11).
