# Project — Data Literacy Field Notes

*Stubbed by the `plan-module` skill from Module 0's Lecture & Lab Map (see
`INSTRUCTOR_MODULE_SUMMARY.md`). See "The project" in
`content_spec/SCHEMA.md`. This is the module's one graded deliverable — not
a lab; formative practice lives in `labs/`.*

## Follows

The Day 8 "Data Literacy Field Notes — Project Launch" lecture
(`modules/module-0-foundations/lectures/data-literacy-field-notes-project-launch/`)
— the calendar's last content day before project days begin.

## Description

Set up a personal data-analytics dev environment (terminal, git, GitHub,
VS Code) and produce "Data Literacy Field Notes": inspect a small,
previously-unseen real dataset (OWID `co2-data`, CC BY 4.0) entirely from
the terminal — no code, no notebook — classify each column's data type and
whether the dataset is structured or unstructured, identify ≥2
collection-process concerns and turn the most checkable one into a
data-quality question, write a separate curiosity question, complete a
short AI-literacy reflection, keep a real terminal log, and push it all to
a new public GitHub repo with ≥2 well-messaged commits.

## Day-by-day milestones (2 project days: Day 9-10)

| Day | Goal |
|---|---|
| 9 | Environment sanity-check (terminal, git, GitHub, VS Code all working); `git init` a new local repo + create the matching public GitHub remote + first commit with a README; open the raw `co2-data` CSV in a plain text view *before* running any inspection command (preempts common mistake #1); begin the terminal setup log; hypothesize column meanings and run `head`/`cut`/`grep`/`sort` to test those hypotheses. |
| 10 | Finish classifying all 6 profiled columns (type + structured/unstructured, each with a real reason from the actual column-preview output — watch for an ID-like/ZIP-like column being misclassified as numeric, common mistake #3); identify ≥2 collection-process concerns and turn the most checkable one into a specific, answerable data-quality question (not "is this data good?" — common mistake #4); write the separate curiosity question; complete the AI-literacy reflection (≥2 concrete risks + a personal double-check rule); make ≥2 more well-messaged, incremental commits (never one final dump — common mistake #2) and push. |

Open-ended: add a Day 11+ row here if a real cohort needs more time — this
table is meant to be extended, not treated as a fixed 2-day ceiling.

## Graded against (`competency_assessments`)

All 7 of the module's `skills_tested`: `general-programming-coding`,
`data-literacy`, `git-version-control`, `ai-literacy`, `curiosity`,
`critical-thinking`, `terminal-command-line`. See
`INSTRUCTOR_MODULE_SUMMARY.md`'s rubric distillation table for the
per-skill assessment method and ceiling.

```yaml
competency_assessments:
  - general-programming-coding
  - data-literacy
  - git-version-control
  - ai-literacy
  - curiosity
  - critical-thinking
  - terminal-command-line
```

## Good vs. weak

**Good**: classifies ≥5/6 columns correctly; README states one specific,
checkable data-quality question; ≥2 descriptive commits. **Weak**: types
guessed without opening the data; a generic question; one dump commit with
no message.

## Common mistakes to preempt

Straight from `INSTRUCTOR_MODULE_SUMMARY.md` (sourced from the brief's
`common_project_mistakes`) — every one of these should already have been
rehearsed by a lab or lecture earlier in the calendar, at reduced stakes,
before the project asks for it unguided (see `labs/git-terminal-practice.md`
and `labs/column-typing-practice.md`):
1. Classifying columns by name only, without opening the raw file.
2. One giant "final" commit instead of incremental history.
3. Misclassifying an ID-like or ZIP-code-like column as numeric.
4. A vague, unanswerable data-quality question.
