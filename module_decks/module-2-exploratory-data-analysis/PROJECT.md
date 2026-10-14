# Project — EDA: Choose Your Domain

*Stubbed by the `plan-module` skill from Module 2's Lecture & Lab Map (see
`INSTRUCTOR_MODULE_SUMMARY.md`). See "The project" in
`content_spec/SCHEMA.md`. This is the module's one graded deliverable —
not a lab; formative practice lives in `labs/`.*

## Follows

Day 14's "Recall & Practice" lecture (deck optional) — the calendar's
last content day before project days begin. There is no dedicated
project-launch lecture day this module (same precedent as Module 1) —
Sprint Day 1 (`project`, calendar Day 15) itself doubles as launch/
planning, per the project's own already-published `student/
CHECKLIST_TIMELINE.md`.

## Description

Students choose one of 4 real business domains (`SCENARIOS.md` — finance
& insurance, healthcare operations, public sector, or professional
services), each with a real stakeholder, a real business problem, and its
own data file (3 real government sources — FEMA NFIP, CMS, DataSF; 1
clearly-labeled synthetic — see `data/SOURCE.md`). Everyone works from
the same starter notebook and the same bar (`MVP.md`); the domain changes
what's being looked at, not what's required.

**Almost no code is given** — the starter notebook (`starter/
analysis.ipynb`) gives structure and asks questions; deciding which
pandas method, which chart type, and which visualization tool actually
fits each question is part of the assignment itself (round 2 of this
project's own redesign deliberately removed every given analysis call —
see `INSTRUCTOR_MODULE_SUMMARY.md`'s "A stale brief, redesigned twice").
Students inspect and clean the data themselves (a real reusable cleaning
function, a real justified imputation decision), profile 3+ numeric
variables with whichever chart type actually fits, explore a relationship
or segment with a chart type that fits (not a default), get an AI's read
on a chart they made themselves **and** critique an AI-suggested chart in
the other direction, answer their stakeholder's business problem with the
statistic that fits their data's actual skew, and close with a written
data-quality memo raising real, checkable concerns. Finally, they rewrite
`README.md` from scratch as their project's actual landing page — a real
stakeholder-facing deliverable, not just a passing notebook.

Runs as an explicit **1-week sprint**: 5 build/writing days, following
this module's 14-day content phase (see `student/CHECKLIST_TIMELINE.md`
for the exact day-by-day student-facing checklist — sprint planning,
daily check-ins, a real backlog via `ABOVE_AND_BEYOND.md`). A separate
**anonymous peer memo-review session** (`PROJECT_SHAREOUT_GUIDE.md`)
happens the class after the sprint ends — not part of the 5 days, and not
a grading mechanism (formative peer feedback only; grade against
`rubric.md`/`SOLUTION_NOTES.md`, not the peer session).

## Day-by-day milestones (5 project days: Sprint Day 1-5 / calendar Day 15-19)

**Labeled by the sprint's own Day 1-5 numbering (matching `student/
CHECKLIST_TIMELINE.md` exactly, since that's the real document students
read) — the absolute calendar day is cross-referenced in parens, same
exception Module 1's own `PROJECT.md` already established.**

| Sprint Day | Calendar Day | Goal |
|---|---|---|
| 1 | Day 15 | Setup, pick domain, start inspecting: repo created from the template (via "Use this template," not Fork), cloned; `LICENSE`'s placeholder name replaced and committed; an AI assistant that accepts image uploads confirmed working (needed by Day 4, don't discover it's missing then); all 4 domains in `SCENARIOS.md` read, one picked; `data/SOURCE.md`'s entry for the chosen file read before opening the notebook; "Your Scenario"/"Data Overview" framing started; Part 1 (shape, dtypes, missing-value counts) genuinely inspected, not assumed. |
| 2 | Day 16 | Clean it, then profile it: Part 2 — **at least one real cleaning function** written and used (not copy-pasted inline fixes; preempts common mistake #5); a real, justified imputation decision made for at least one column with real missing values (preempts common mistake #6). Part 3 — at least 3 numeric variables profiled, each with a five-number-summary-style computation and a real chart, chart type student's own choice. Exit criterion: 2+ real commits pushed by end of day. |
| 3 | Day 17 | Relationships and segments: Part 4 — a relationship or segment explored with a chart type that actually fits (not a histogram/bar chart by default — preempts common mistake #7), the choice justified in a sentence; one non-obvious finding stated, backed by the statistic (mean or median) that fits the key variable's actual skew (preempts common mistake #2, "the single most common mistake on record for this project"), built on a large-enough slice of the data to be reliable (preempts common mistake #3). |
| 4 | Day 18 | Two AI critiques, answer the problem, explain the spread: Part 5 — a real chart generated and saved as an actual image, uploaded to an AI assistant, its real verbatim response pasted and critiqued against the student's own numbers. Part 5b — the AI asked to generate/suggest its own visualization, critiqued in the reverse direction (right chart type? actually accurate?). Part 6 — the stakeholder's business problem answered directly, backed by the correct statistic, naming how cleaning/imputation decisions affect confidence in the answer. Part 7 — the standard-deviation/volatility question answered, tied to the student's own key variable. |
| 5 | Day 19 | The findings report, data-quality memo, final review: `starter/memo.md` written — domain/stakeholder named, answer restated for a non-technical reader, **at least 2 specific, checkable questions** about the dataset's origin/completeness/bias (preempts common mistake #4), a paragraph connecting at least one question to whether the stakeholder should trust the answer. Own `requirements.txt` written with real, exact versions. "Questions My Analysis Can Answer" section deleted. `README.md` rewritten as the project's real landing page — scenario, data overview, statistical summary, real embedded chart images (not described in words — preempts common mistake #8), takeaways. Clean notebook, no leftover debugging cells. Repo confirmed public, 4+ real commits. |

## Graded against (`competency_assessments`)

All 6 of the module's skills (2 unofficial, see `INSTRUCTOR_MODULE_
SUMMARY.md`'s "Two skill lines not yet official"): `statistical-
analysis`, `data-distributions-shape`, `data-mining`, `data-cleaning-
imputation`, `critical-thinking`, `stakeholder-communication`. See
`INSTRUCTOR_MODULE_SUMMARY.md`'s rubric distillation table for the
per-skill assessment method and ceiling, and `instructor/rubric.md`
(source repo) for the full 4-level-per-skill grading detail.

```yaml
competency_assessments:
  - statistical-analysis
  - data-distributions-shape
  - data-mining
  - data-cleaning-imputation
  - critical-thinking
  - stakeholder-communication
```

## Good vs. weak

**Good**: the five-number summary and the histogram description agree
with each other (no verbal claim of symmetry when the histogram is
visibly skewed); the mined pattern is supported by the statistic that
actually fits the variable's skew, not a reflexive mean; the data-quality
memo's clarifying questions are specific and checkable; the `README.md`
reads as something a real stakeholder — not just a grader — would find
genuinely useful. **Weak**: a distribution is called "normal" without
ever looking at the histogram; a pattern is supported using a mean on a
heavily skewed variable with no acknowledgment of the mismatch; the memo's
questions are generic filler that could apply to any dataset; `README.md`
still reads as the given setup instructions.

**Note on grading**: students each chose their own domain and dataset —
there is no single correct finding to grade against. Grade whether the
chosen chart types/statistics genuinely fit *that* variable's actual
shape, and whether the cleaning/imputation reasoning is tied to what that
specific column means — not whether it matches any particular answer key
(per `SOLUTION_NOTES.md`'s own explicit calibration note: "grade the
critiques... not whether the AI said something similar to this
solution").

## Common mistakes to preempt

Straight from `INSTRUCTOR_MODULE_SUMMARY.md` (sourced from `rubric.md`'s
full common-mistakes list) — every one of these should already have been
rehearsed by a lecture or lab earlier in the calendar, at reduced stakes,
before the project asks for it unguided:
1. Reporting a distribution as "symmetric"/"normal" without ever looking
   at a chart (Day 1's distribution-shape lecture, Day 6's recall).
2. Using the mean by default on a visibly skewed variable without
   acknowledging the mismatch — "the single most common mistake on
   record for this project" (Day 1, reinforced constantly through Day 9's
   pattern-mining and Day 14's recall).
3. Treating a pattern found in a very small sample as a reliable finding
   (Day 9's collaborative pattern-mining, Day 13's solo lab).
4. Writing data-quality questions too generic to actually be checkable
   (Day 10's clarifying-questions lecture).
5. Copy-pasting the same cleaning fix inline 2-3 times instead of one
   real function (Day 8's cleaning-function lecture).
6. An imputation choice with no stated reasoning (Day 7's missing-data
   lecture).
7. Defaulting to a histogram or bar chart regardless of what's actually
   being explored (Day 4's chart-type decision framework, Day 5's chart
   best practices).
8. Leaving `README.md` as the given setup instructions, or describing a
   visualization in words instead of embedding the real image (Day 12's
   stakeholder-communication lecture).

## Above & Beyond (backlog, not required)

Detailed in `student/ABOVE_AND_BEYOND.md`: a second non-obvious pattern
from a different slice of the data than the one the business problem
already led to; a second domain's business problem answered briefly
using its own data file; one memo question actually verified for real (a
real search, not a guess) — the same "verify before trusting" habit
Module 1's own Day 18 rehearsed, now applied to the student's own claim
instead of an AI's; and the given-code `above_and_beyond/
pandas_preview.py` (a more advanced `.assign()`+`lambda`+`pd.cut()`+
multi-level `.groupby().unstack()` chain) — this is the light lambda
preview Day 14's recall day models live; here it's the student's own
first hands-on look at it, compared against their own findings.
