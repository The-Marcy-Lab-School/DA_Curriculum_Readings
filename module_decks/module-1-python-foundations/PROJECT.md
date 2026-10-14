# Project — Inventory Tracker Sprint

*Stubbed by the `plan-module` skill from Module 1's Lecture & Lab Map (see
`INSTRUCTOR_MODULE_SUMMARY.md`). See "The project" in
`content_spec/SCHEMA.md`. This is the module's one graded deliverable — not
a lab; formative practice lives in `labs/`.*

## Follows

Day 19's "Final Practice Gauntlet" lecture (deck optional) —
the calendar's last content day before project days begin. There is no
dedicated project-launch lecture day this module (unlike Module 0) — Sprint
Day 1 (`project`, calendar Day 20) itself doubles as launch/planning, per
the project's own already-published `student/CHECKLIST_TIMELINE.md`.

## Description

Students choose one of 4 stakeholder scenarios (`SCENARIOS.md` — bookstore,
restaurant, healthcare supplies, or athletic wear inventory), design their
own class (no prescribed attributes — a real design decision tied to their
chosen stakeholder's stated need), and write standalone functions to read/
validate a 430-row batch file of ADD/REMOVE/SEARCH transactions (14 planted
edge-case types; at least 3 distinct ones required), including a real
`try`/`except` for type validation. They export their results to JSON for
use with a given interactive search tool (`tools/search.html`), write a
reflection (including how they'd use AI to find *more* edge cases than they
caught by hand and how they'd verify what it suggests), and present a
6-slide-max deck with a live demo. **First project of the program where
students write real code** — Module 0 was terminal-only. Plain Python only
— no pandas, no SQL.

Runs as an explicit **1-week sprint**: 4 build days + a demo day, following
this module's 18-day content phase (see
`student/CHECKLIST_TIMELINE.md` for the exact day-by-day student-facing
checklist — sprint planning, daily check-ins, a real backlog via
`ABOVE_AND_BEYOND.md`).

## Day-by-day milestones (5 project days: Sprint Day 1-5 / calendar Day 20-24)

**Labeled by the sprint's own Day 1-5 numbering (matching
`student/CHECKLIST_TIMELINE.md` exactly, since that's the real document
students read) — the absolute calendar day is cross-referenced in
parens for the Lecture & Lab Map. See the exception noted in "The
project" in `content_spec/SCHEMA.md`.**

| Sprint Day | Calendar Day | Goal |
|---|---|---|
| 1 | Day 20 | Sprint planning (not code): repo created from the template, cloned; scenario chosen from `SCENARIOS.md`, other 3 data files deleted; `starter/REFLECTION.md` read before writing any code; class attributes sketched from the stakeholder's actual stated need (preempts common mistake #3 — no parallel-list fallback); first 2-3 lines of the chosen data file traced by hand. |
| 2 | Day 21 | Core build: `Item`-equivalent class defined (`__init__`, ≥2 attributes, a low-stock-style check method); 2+ instances confirmed to store attributes independently; a real docstring on the class and every method; `read_batch_file` reads the real file; `validate_line` distinguishes valid from invalid ADD/REMOVE/SEARCH lines against a tiny sample first; at least one real `try`/`except` for a type-conversion edge case. |
| 3 | Day 22 | Integration: `process_transactions` loops over the real, full data file building a running item collection; **≥3 distinct planted edge cases** handled with a specific printed message, never a crash (preempts common mistake #2 and #4 — no happy-path-only testing); ≥2 real commits pushed by end of day. |
| 4 | Day 23 | Polish: `find_item` implemented as a genuine linear scan or dict lookup (not both, not neither); `print_summary` prints a formatted inventory + low-stock alert list; `export_to_json` implemented and called; `tools/search.html` used to interactively confirm the 3+ edge cases; `REFLECTION.md` filled in (edge cases, function-scope explanation, Big-O comparison tied to the student's own `find_item`, AI-assisted edge-case reflection with a real verification step); no leftover debug `print()`s. |
| 5 | Day 24 | Sprint review: 6-slide-max deck built (scenario/stakeholder, class design reasoning, batch-processing approach, an actual demonstration of the 3+ edge cases handled) and presented as a live demo, not a status report; `README.md` accurate; repo confirmed public. |

## Graded against (`competency_assessments`)

All 5 of the module's `skills_tested`: `control-flow-loops`,
`functions-modular-programming`, `object-oriented-programming`,
`algorithmic-complexity-big-o`, `attention-to-detail`. See
`INSTRUCTOR_MODULE_SUMMARY.md`'s rubric distillation table for the
per-skill assessment method and ceiling, and `instructor/rubric.md`
(source repo) for the full 4-level-per-skill grading detail.

```yaml
competency_assessments:
  - control-flow-loops
  - functions-modular-programming
  - object-oriented-programming
  - algorithmic-complexity-big-o
  - attention-to-detail
```

## Good vs. weak

**Good**: the `Item` class is used consistently throughout (not partially
bypassed by holding raw dicts elsewhere); malformed lines produce a
specific, informative error message and never crash the program; the Big-O
reflection accurately labels linear-search vs. dict-lookup complexity and
ties the reasoning to the student's own search implementation. **Weak**:
all logic lives in one long unstructured script with no functions or
class; a malformed input line crashes the program with an unhandled
traceback; the Big-O reflection recites textbook definitions without
connecting them to the student's own code.

**Note on grading**: students each chose their own scenario and designed
their own class — there is no single correct attribute list to grade
against. Grade whether the chosen attributes genuinely fit *that*
stakeholder's stated need and are used consistently, not whether they
match any particular field list.

## Common mistakes to preempt

Straight from `INSTRUCTOR_MODULE_SUMMARY.md` (sourced from the brief's
`common_project_mistakes`) — every one of these should already have been
rehearsed by a lecture or lab earlier in the calendar, at reduced stakes,
before the project asks for it unguided:
1. Writing one long function that does everything instead of splitting
   validation, reading, and summarizing into separate functions (Days 1, 9,
   11).
2. Letting one malformed transaction line crash the whole script instead of
   catching and reporting it (Day 10's try/except lecture).
3. Holding item data in loose parallel lists instead of actually using the
   `Item` class consistently throughout (Days 13-15).
4. Only testing the happy path — never trying an empty file or a REMOVE for
   an item that doesn't exist (Day 17's stress-test lab, Day 19's practice
   gauntlet).

## Above & Beyond (backlog, not required)

Detailed in `student/ABOVE_AND_BEYOND.md`: a second search approach timed
empirically against the first (this is the exact same empirical-timing
move Day 17's `labs/stress-test-timing-practice.md` already rehearses at
MVP-lecture stakes — Above & Beyond just asks for it again, independently,
on the student's own real project code); the standalone
`debug_challenge.py` (no template, 3 planted bugs — this is objective 8's
true independent/analyze bar, a full step above the rest of the project);
a 4th distinct edge case; extending `tools/search.html`; a preview
comparison against `above_and_beyond/preview_pandas.py` (Module 2 preview).
