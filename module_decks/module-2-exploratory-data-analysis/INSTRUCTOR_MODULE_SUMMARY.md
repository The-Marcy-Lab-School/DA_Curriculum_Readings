# Module Summary — Module 2: Exploratory Data Analysis & Descriptive Statistics

*Written via the `plan-module` skill, from `DA_Projects_Curriculum_
FALL26_INSTRUCTOR`'s `projects/Module2_ExploratoryData/` (`_brief.json`,
`instructor/overview.md`, `instructor/LECTURE_LAB_BRIEF.md`,
`instructor/rubric.md`, `instructor/SOLUTION_NOTES.md`,
`instructor/PROJECT_SHAREOUT_GUIDE.md`) plus the monorepo-root
`CURRICULUM_CHANGES.md` — pasted directly into `project_assets/
module-2-exploratory-data-analysis/` (the latter added slightly after
the rest) rather than fetched via `gh`, since the instructor repo is
private and this environment has no GitHub auth configured. See "Module
plan" in `content_spec/SCHEMA.md` for how this file is used. Authored,
not auto-regenerated — reconcile by hand as this module's lessons get
built.*

## Module identity

- **Title**: Exploratory Data Analysis & Descriptive Statistics
- **module_number**: 2
- **Schedule**: 19 school days total — **14 content days, then 5 project
  days** (the calendar's last 5 days, a fixed 1-week sprint per the
  project's own already-published `student/CHECKLIST_TIMELINE.md`), plus
  one **peer memo-review session held the class after Day 19** (not a
  calendar day itself — see `instructor/PROJECT_SHAREOUT_GUIDE.md` and
  "Lecture & Lab Map" below).
- **Deliberately 1 day past the upstream brief's own `content_weeks: 2.5`
  estimate** (2.5 weeks / ~13 days → 14 days). The brief's own objectives
  describe a much lighter, since-superseded version of this project (a
  single given `.describe()` call, one given histogram, no cleaning or
  imputation at all — see "A stale brief, redesigned twice" below); the
  actual current project requires real hands-on pandas, a real
  chart-type decision, and a real justified missing-value strategy, none
  of which the brief's own content-phase estimate was ever budgeted for.
  One extra day buys real practice reps on pandas fundamentals — this
  module's own instructor materials call that "the single biggest gap" —
  without cutting any of the 5 official objectives' own scaffolding down.
- **`lesson_number` restarts at 1 for this module** — same convention
  Module 1 established: it does not continue from Module 1's own count.
  `lecture_recall` days count toward `lesson_number` too; `lab`/`project`
  days don't (same precedent as Module 0's recall deck and Module 1's own
  numbering rule).

## A stale brief, redesigned twice

`_brief.json`'s own `learning_objectives`/`tools` fields describe an
earlier, much simpler draft of this project than what's actually taught
and graded — flag this explicitly before treating the brief as current.
Per `instructor/overview.md`, the project went through **two full
redesign rounds**:

- **Round 1** replaced a single-dataset, 4-persona, pandas-vs-Polars-
  comparison design with the curriculum's own real `domain_variants`
  (finance & insurance, healthcare operations, public sector,
  professional services) — closer to what ships now, but still fully
  scaffolded.
- **Round 2** (current) removed the brief's own given `.describe()` call
  and given histogram entirely, dropped the pandas/Polars comparison,
  and added: real data cleaning + a justified imputation decision,
  multi-chart-type profiling (student's own tool/type choice), a second
  AI-critique direction (critiquing an AI's *own suggested* chart, not
  just its read of the student's chart), and a full `README.md` rewrite
  as a real stakeholder-facing deliverable (the new, unofficial
  `stakeholder-communication` skill — see "Two skill lines not yet
  official" below).

**Use `_brief.json` for**: objective Bloom's/scaffolding levels, skill
IDs, `mastery_checkpoints`, `good_vs_bad_criteria`, `common_project_
mistakes` — these still describe the real underlying judgment calls even
though the *mechanism* (a given call vs. real authored code) changed.
**Use `overview.md`/`rubric.md`/`LECTURE_LAB_BRIEF.md` for**: actual
current scope, the real rubric detail, and what a lecture/lab still needs
to teach that the brief never anticipated.

`CURRICULUM_CHANGES.md` (the canonical log of every brief-vs-actual
deviation, since obtained and read directly — no longer a secondhand
reconstruction) confirms every finding above, plus one precision
correction: `stakeholder-communication` is not an invented skill id —
it "already exists as a general Professional Skills category elsewhere
in this curriculum's vocabulary," reused here for the first time under
`module-2`, not coined for this module. `data-cleaning-imputation` is
the genuinely new one (round 1 had proposed a different id,
`dataframe-manipulation`, for a pandas/Polars comparison that round 2
then dropped entirely — that id is explicitly superseded, not in use).
`CURRICULUM_CHANGES.md` also independently confirms the Module 4
continuity gap flagged below ("This module's own `CURRICULUM_
CHANGES.md` entry predicted this exact gap in advance") — see
"This module sets up" further down.

## Objectives table

The 5 objectives below are `_brief.json`'s own, verbatim in substance —
each maps to `competency_assessments`/the rubric, though see "A stale
brief" above for how the *mechanism* each one describes has since grown
well past a "fill in one given call" exercise.

| # | Objective | Bloom's level | Scaffolding level | skill_id(s) |
|---|---|---|---|---|
| 1 | Given a worked business example, define descriptive-statistics measures (mean, median, mode, standard deviation, quartiles) and explain when each applies; extend by reading a histogram and five-number summary to describe a distribution's shape and skew | understand | modeled | `statistical-analysis`, `data-distributions-shape` |
| 2 | Run and correctly interpret real pandas output (originally a given `.describe()` + one given histogram call — now, per the redesign, genuinely authored) against the descriptive-statistics vocabulary from Objective 1 | apply | guided | `statistical-analysis`, `data-distributions-shape` |
| 3 | With a peer, mine a provided dataset for at least one non-obvious pattern or segment, compute the statistics needed to support it, and use the distribution's shape to judge whether mean or median more honestly represents it | analyze | collaborative | `data-mining`, `statistical-analysis`, `data-distributions-shape` |
| 4 | Using a peer-review checklist, evaluate a dataset's collection process and pose at least two clarifying questions about its origin, completeness, or possible bias before trusting any pattern found in Objective 3 | evaluate | collaborative | `critical-thinking` |
| 5 | Without a template, independently mine a previously unseen dataset for at least one non-obvious pattern or segment, and produce a written summary tying the finding to the statistic that best supports it | create | independent | `data-mining` |

**Two skill lines not yet in this module's `skills_tested`** (per
`rubric.md`/`CURRICULUM_CHANGES.md`, not yet in `_brief.json`): `data-
cleaning-imputation` — a genuinely **new** skill id, real and graded
("recognizing real problems in raw data and fixing them deliberately...
choosing a missing-value strategy based on what the column actually
means, not a default habit") — and `stakeholder-communication`
("presenting a finished analysis so someone who never opens the
notebook can still understand it"), which **reuses an id that already
exists elsewhere in the curriculum's own Professional Skills
vocabulary**, applied under `module-2` for the first time, not coined
for it. Both added by the round-2 redesign, both exercised constantly
below even though neither has a corresponding `_brief.json` objective
of its own.

**One bridging gap, explicit in the source `LECTURE_LAB_BRIEF.md` —
content must close this before the project, not leave it for the
project to test cold:**
- **Real pandas fundamentals.** None of the 5 objectives above teach
  filtering, grouping, sorting, creating a new column, or checking
  dtypes/nulls — Objective 2 originally only asked students to *read* a
  given `.describe()` call. With round 2 removing all given analysis
  code, "students can't lean on a worked example anymore" — called "the
  single biggest gap" in the source brief. Needs real, hands-on
  authored-pandas teaching before Day 9's collaborative pattern-mining
  asks for it unguided.

## Supplementary content (instructor-added, not in the upstream brief)

Five more instruction-must-produce items, straight from
`LECTURE_LAB_BRIEF.md`, plus three additional gaps this instructor
identified independently (verified against every instructor doc before
being added — see each item's own note on what's already covered vs.
genuinely missing):

- **A chart-type decision framework, taught explicitly and modeled
  live** (Day 4) — what are you actually comparing: one variable's
  distribution, a trend over time, a relationship between two numeric
  variables, or a category breakdown? `LECTURE_LAB_BRIEF.md`: "Model
  this decision live, not just a gallery of chart examples." Nothing
  upstream teaches this at all — the project assumes it.
- **Missing-value handling, taught for the first time anywhere in this
  curriculum** (Day 7) — drop vs. fill vs. flag, and how the *reason*
  data is missing should drive the choice, not a default habit. Real,
  graded (`data-cleaning-imputation`), never taught before this module.
- **A solo rep of pattern-mining** (Day 13's lab) — Objective 3's
  collaborative exercise alone doesn't reach Objective 5's independent
  bar; needs its own dedicated rep, same bridging-gap shape as Module
  1's Day 15 solo-design lab.
- **A modeled AI-critique walkthrough, both directions** (Day 11) — a
  real chart + a real AI's interpretation + critique against actual
  numbers, **and the reverse**: ask an AI to suggest/generate a chart and
  model catching a real flaw (mismatched chart type, mean-on-skewed-data
  suggestion). `overview.md` calls these "two directions of the same
  'evaluate the AI's output' skill" — model both live, once each, before
  the project's own Part 5/5b ask for it independently.
- **How to embed a real image in a markdown README** — nothing upstream
  covers `![alt](path.png)` syntax; a 2-minute demo folded into Day 12's
  stakeholder-communication lecture, not its own day.
- **Imputation technique taxonomy** (Day 7, extending the bridging gap
  above) — checked against every instructor doc: the project teaches the
  drop/fill/flag *decision framework* extensively (`rubric.md`,
  `LECTURE_LAB_BRIEF.md`, `student/CHECKLIST_TIMELINE.md` all cover it),
  but never names specific numeric techniques anywhere — the reference
  solution's own imputation is a single justified `.fillna(0)` call, not
  a survey of methods. Mean/median/mode fill and forward-fill, named and
  practiced, is a genuine addition on top of what's already covered, not
  a duplication of it.
- **Chart best practices** (Day 5) — checked against every instructor
  doc: zero hits anywhere upstream. Labeling, avoiding chart junk,
  avoiding misleading axes, accessibility (colorblind-safe palettes,
  matching this whole codebase's own brand-accessibility ethos — see
  `BRAND_GUIDELINES.md`). A natural, non-duplicative extension of the
  chart-type decision framework above, not a repeat of it.
- **Exploratory vs. explanatory charts, named explicitly** (Day 4) —
  checked against every instructor doc: zero hits anywhere, despite the
  project's own structure *implicitly* living this exact split the whole
  time (the notebook is exploratory work for yourself; the rewritten
  `README.md`/`memo.md` are explanatory work for a stakeholder). Naming
  this distinction explicitly, early, gives every later part of the
  module a shared vocabulary for "which mode am I in right now" — a real
  gap, not a re-teach.

**A distinction worth being precise about: "plotly" means two different
things here.** `CURRICULUM_CHANGES.md` confirms seaborn *and* plotly
were both deliberately added as available (not required) **static
charting libraries** — real, in-scope tool choices for Days 2-5's chart-
type/chart-best-practices content and the project itself, alongside
matplotlib and pandas' own `.plot()`. That's a completely different use
of "plotly" from **Plotly Dash**, the interactive-dashboard framework —
which, along with Flask, is the thing kept to a light preview only (see
next paragraph). Don't let "plotly is permitted" bleed into "dashboards
are in scope" — they're unrelated uses of the same library name.

**Two topics deliberately kept to a light preview only, per explicit
instructor decision** (not full lecture-level coverage): dashboards
(Dash/Plotly Dash/Flask) and deeper lambda/method-chaining. Checked
against every instructor doc first: dashboards are explicitly captioned
as **Module 6** territory (`student/PROJECT_OVERVIEW.md`: "statistical
reasoning becomes a practical, recurring concern starting in Module 6
(dashboards)"; `_brief.json`'s own `skills_reused_by_later_modules` names
Module 6 as "Data Visualization & Dashboarding: Tableau Public & Power
BI"); the project's own Above & Beyond `pandas_preview.py` is the
*only* lambda usage anywhere in the whole file tree, explicitly captioned
"a taste of what fuller fluency looks like... deepens in Module 4."
Building either at real depth here would run ahead of, and likely
duplicate, what those modules already own — so both get one brief,
explicitly-labeled "here's what's coming" exposure folded into Day 14's
recall day (same shape as Module 1's `*args`/`**kwargs` bonus topic),
never their own lecture.

## Project & rubric distillation

See `PROJECT.md` for the full deliverable/timeline. Rubric skills (6
total, 2 unofficial — see "Two skill lines not yet official" above):

| Skill | Rubric ceiling this module | Assessment method |
|---|---|---|
| `statistical-analysis` | Meets (interpreting mean/median/std against a real business metric) | Part 7's std/volatility explanation, tied to the student's own numbers |
| `data-distributions-shape` | Meets (3+ variables, chart-matched shape/outlier calls) | Part 3's multi-variable profiling |
| `data-mining` | Meets (a genuinely non-obvious, adequately-sized finding) | Part 4's relationship/segment exploration |
| `data-cleaning-imputation` | Meets (a real reusable function + a justified missing-value decision) | Part 2 |
| `critical-thinking` | Meets (both AI critiques done for real + 2 specific memo questions) | Parts 5/5b + `memo.md` |
| `stakeholder-communication` | Meets (`README.md` fully rewritten, all 5 sections, a real embedded chart image) | The rewritten `README.md` |

**Common project mistakes (preempt these in lecture/lab, not just
penalize in the rubric after)** — straight from `rubric.md`'s full
grading-checklist list:
1. Reporting a distribution as "symmetric" or "normal" without ever
   actually looking at a chart.
2. Using the mean by default on a visibly skewed variable without
   acknowledging the mismatch — "the single most common mistake on
   record for this project."
3. Treating a pattern found in a very small sample as a reliable
   finding.
4. Writing data-quality questions too generic to actually be checkable
   ("is this data accurate?").
5. Copy-pasting the same cleaning fix inline 2-3 times instead of
   writing one real function.
6. An imputation choice with no stated reasoning ("I filled nulls with
   the mean" isn't wrong by itself, but with no justification it reads
   as a reflex, not a decision).
7. Defaulting to a histogram or bar chart regardless of what's actually
   being explored.
8. Leaving `README.md` as the given setup instructions, or describing a
   visualization in words instead of embedding the real image.

**Good vs. weak (from `rubric.md`'s "Good"/"Weak" framing)**: Good — the
five-number summary and the histogram description agree with each other;
the mined pattern is supported by the statistic that actually fits the
variable's skew, not a reflexive mean; the data-quality memo's
clarifying questions are specific and checkable. Weak — a distribution
is called "normal" without ever looking at the histogram; a pattern is
supported using a mean on a heavily skewed variable with no
acknowledgment of the mismatch; the memo's questions are generic filler
that could apply to any dataset.

## AI integration touchpoints (throughout, not just one day)

This module extends Module 1's own ai-output-validation preview (its own
Day 18 debugging flagship) into chart and summary-statistic
interpretation — per `_brief.json`'s `ai_integration_notes`: students are
given an AI's generated interpretation of a chart that deliberately
contains a subtle error (e.g. calling a visibly right-skewed distribution
roughly symmetric, or asserting the mean is "the" correct summary despite
obvious skew), and are graded on catching and correcting that misreading
before it lands in their own EDA write-up — the same "verify, don't just
trust" thread should show up before Day 11, not appear out of nowhere:

- **Day 1**: brief framing note — the same "don't trust a confident-
  sounding answer without checking" habit from Module 1's own Day 18
  applies to a chart description or a statistics summary just as much as
  to code.
- **Day 4-5 (charts)**: worth naming that an AI can describe a chart
  fluently while still getting its shape or skew wrong — the exact
  misreading Day 11 formally tests.
- **Day 9-10 (pattern-mining, clarifying questions)**: if a student asks
  an AI to help spot a pattern, the same clarifying-questions discipline
  from Day 10 applies to the AI's own suggested pattern, not just the
  dataset itself.
- **Day 11**: the flagship exercise itself, both directions — critique an
  AI's read of your own chart, and critique an AI's own suggested chart
  — per the upstream brief.
- **Day 14 (recall)**: include at least one AI-output-verification-style
  prompt in the mixed review, not just stats/pandas recall — same
  requirement Module 1's own Day 19 held itself to.

## Interview-prep bank

None supplied in the upstream brief for this module (no `interview_prep`
key in `_brief.json`) — same gap as Modules 0 and 1. Any
`check_understanding` with `question_style: interview` still needs to be
written and verified per-lesson (see `content_spec/SCHEMA.md`'s
"Question styles"), using `reference/interview_decks/`/`pedagogy/
interview_frameworks.md` for phrasing/technique calibration.

## Video resources

`pedagogy/video_resources.md` has no entries yet for descriptive
statistics, pandas fundamentals, distribution shape/skew, or chart-type
selection — none of this module's topics overlap Module 0/1's existing
bank. `new-lesson-deck` step 3 should search fresh for verified,
~6-minute-or-less videos on these topics and add findings back to the
bank per its own "check first, add what's missing" discipline.

## Prerequisite skills

`explicit_prerequisites`: `data-literacy`, `critical-thinking` (both
Module 0). `cumulative_from_earlier_modules` additionally lists every
Module 1 skill: `general-programming-coding`, `git-version-control`,
`ai-literacy`, `curiosity`, `terminal-command-line`, `control-flow-
loops`, `functions-modular-programming`, `object-oriented-programming`,
`algorithmic-complexity-big-o`, `attention-to-detail`.

**Explicit prereq-recall requirement (not just framing prose)**: per "A
lesson with `meta.dependent_skills` needs an explicit, active recall
moment, not just a passive mention" in `content_spec/SCHEMA.md`, **Day
1's deck must include a real early `check_understanding` that actually
exercises Module 1 vocabulary** — e.g. a quick function/class trace, not
just a `notes` line saying "you already know Python." Same discipline
Module 1's own Day 1 held itself to for Module 0.

**How Module 1 relates to this module**: Module 1 taught real Python
from scratch — functions, classes, Big-O. This module is where that
fluency gets pointed at real, messy data for the first time: pandas
(brand new), real charts (brand new), and a real missing-value decision
(brand new) all sit on top of control flow/functions/OOP that should
need no re-teaching, only application in a new context.

**This module sets up** — per `_brief.json`'s own (mechanically
incomplete, same caveat Module 1's summary flagged) `skills_after`:
immediate next module is **Module 3** (SQL & Relational Databases);
`statistical-analysis` is reused by **Modules 6, 11, 12**;
`data-distributions-shape` is reused by **Module 11**;
`critical-thinking` is a prerequisite for **Module 5**. **A real
continuity-computation gap, flagged upstream in `overview.md` and
independently confirmed in both this module's own `CURRICULUM_
CHANGES.md` entry and Module 4's own entry there**: Module 4 (Python
for Data Analysis / real pandas fluency) doesn't appear in
`skills_after.explicit_dependent_modules` at all, despite this module's
own `tools` notes saying full pandas fluency "is formally taught in
Module 4." Module 4's own `CURRICULUM_CHANGES.md` entry already flips
its `pandas.is_new` field from `true` to `false` because of this exact
module's round-2 redesign — worth remembering that Module 4's own
opening content should assume students arrive with real, if rough,
self-taught pandas exposure
from here, not a cold start.

## Skill coverage check

`qa/skill_coverage_check.py` needs real built decks/`curriculum_log.yaml`
entries to run against — **run it (and `check-module-alignment` for a
full `ALIGNMENT_REPORT.md`) once this module's 13 lecture/recall decks
and 1 lab worksheet exist.** By-hand check against the calendar as
planned, in the meantime: every one of the 6 `competency_assessments`
skills recurs across multiple days, not just once — `statistical-
analysis` (Days 1, 2, 6, 9, 14), `data-distributions-shape` (Days 1, 2,
4, 5, 6, 9), `data-mining` (Days 9, 13, 14), `data-cleaning-imputation`
(Days 7, 8, 14), `critical-thinking` (Days 10, 11, 14), `stakeholder-
communication` (Days 12, 14 — Day 14's recall spans Days 7-12, so its
own recall content should include a real stakeholder-communication
retrieval moment, not just cleaning/AI-critique). No skill is
single-exposure-only as planned.

## Lecture & Lab Map

A real, relative-`Day N`-numbered calendar — never a real weekday name.
See `modules/module-2-exploratory-data-analysis/CALENDAR.md` for the
condensed flow view; this table carries the fuller "builds on"/status
detail.

| Day | Type | Name | Builds on | Scaffolding | Status |
|---|---|---|---|---|---|
| 1 | `lecture_new` | Descriptive Statistics & Reading Distributions | Module 1 (real Python fluency) | modeled | **Built** — `lectures/descriptive-statistics-reading-distributions/` (lesson 1) |
| 2 | `lecture_new` | Real Pandas Fundamentals I: Inspect & Filter | 1 (new library, new syntax) | guided | **Built** — `lectures/real-pandas-fundamentals-i-inspect-filter/` (lesson 2) |
| 3 | `lecture_new` | Real Pandas Fundamentals II: Group & Create Columns | 2 | guided | **Built** — `lectures/real-pandas-fundamentals-ii-group-create-columns/` (lesson 3) |
| 4 | `lecture_new` | Exploratory vs. Explanatory: Two Kinds of Charts | 1-3 (new framing + decision framework) | guided | **Built** — `lectures/exploratory-vs-explanatory-two-kinds-of-charts/` (lesson 4) |
| 5 | `lecture_new` | Chart Best Practices | 4 | guided | **Built** — `lectures/chart-best-practices/` (lesson 5) |
| 6 | `lecture_recall` | Recall & Practice: Stats, Pandas, Charts | 1-5 (retrieval + HackerRank-style practice) | independent | **Built** — `lectures/recall-practice-stats-pandas-charts/` (lesson 6) |
| 7 | `lecture_new` | Missing Data: Drop, Fill, or Flag — and the Real Techniques | 2-3 (pandas fundamentals) | guided | **Built** — `lectures/missing-data-drop-fill-or-flag/` (lesson 7) |
| 8 | `lecture_new` | Writing a Real Cleaning Function | Module 1 (functions) + 7 | guided | **Built** — `lectures/writing-a-real-cleaning-function/` (lesson 8) |
| 9 | `lecture_new` | Mining a Pattern, With a Peer | 1-8 (objective 3, collaborative) | collaborative | **Built** — `lectures/mining-a-pattern-with-a-peer/` (lesson 9) |
| 10 | `lecture_new` | Interrogating Your Data: Clarifying Questions | 9 (objective 4, collaborative) | collaborative | **Built** — `lectures/interrogating-your-data-clarifying-questions/` (lesson 10) |
| 11 | `lecture_new` | Evaluating AI on Charts, Both Directions | 4-5, 9 | guided | **Built** — `lectures/evaluating-ai-on-charts-both-directions/` (lesson 11) |
| 12 | `lecture_new` | Communicating to a Stakeholder: README & Memo | 9-11 (new skill: stakeholder-communication) | guided | **Built** — `lectures/communicating-to-a-stakeholder-readme-memo/` (lesson 12) |
| 13 | `lab` | Solo Pattern-Mining Rep | 9-10 (rehearsed, independent) | collaborative→independent | **Built** — `labs/solo-pattern-mining-rep.md`/`.yaml`, worksheet pair in `labs/solo-pattern-mining-rep/` |
| 14 | `lecture_recall` | Final Practice Gauntlet: Everything, Plus Previews: Lambda & Plotly | 1-13, cumulative (retrieval + HackerRank-style practice) + light previews | independent | **Built** — `lectures/final-practice-gauntlet-everything-plus-previews-lambda-plotly/` (lesson 14) |
| 15 | `project` | Sprint Day 1 — Planning: choose domain, read, inspect (not code) | — | independent | See `PROJECT.md` |
| 16 | `project` | Sprint Day 2 — Clean & profile | — | independent | See `PROJECT.md` |
| 17 | `project` | Sprint Day 3 — Relationships & segments | — | independent | See `PROJECT.md` |
| 18 | `project` | Sprint Day 4 — AI critiques, answer the problem | — | independent | See `PROJECT.md` |
| 19 | `project` | Sprint Day 5 — Memo, README rewrite, final review | — | independent | See `PROJECT.md` |
| (after 19) | Event, not a school day | Peer memo review (`PROJECT_SHAREOUT_GUIDE.md`) | 19 | independent | Scheduled once every `memo.md` is submitted, not part of the sprint itself |

**No lab continues another lab this module** — unlike Module 1's Day 17
(which explicitly continued Day 15's own class), Module 2 has exactly one
lab (Day 13), a single independent rep of pattern-mining with no earlier
lab to build on. Nothing to reconcile there.

**One lecture explicitly doesn't map to a single upstream objective**:
Day 12 (stakeholder communication) exists entirely because of the
unofficial `stakeholder-communication` skill line, not because of any
`_brief.json` objective — flag this the same way Module 1 flagged its own
"Objective 6 vs. Objective 8" narrative-field bug, so a future reconciler
doesn't go looking for a matching objective number that doesn't exist.
