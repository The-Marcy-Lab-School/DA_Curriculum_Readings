# Lab — Naming a Real Confounder

*Stubbed by the `plan-module` skill from Module 5's Lecture & Lab Map (see
`module_sources/module-5-inferential-statistics/INSTRUCTOR_MODULE_SUMMARY.md`).
See "Labs" in `content_spec/SCHEMA.md` — this is formative practice, not
the graded project
(`module_sources/module-5-inferential-statistics/PROJECT.md`).*

## Scenario

You've just found a "significant" difference in a comparison you care
about. Before you tell anyone it's real, your manager asks the one
question every stakeholder eventually asks: "could something else explain
this?" With a partner, you're handed a real comparison on unfamiliar data
and asked to name one genuine, specific alternative explanation — not a
generic "correlation isn't causation" gesture — and say what a real
controlled design would need to actually rule it out.

## Time budget

**~75-90 minutes, one day** — ~10 min instructor framing (recap Day 4's
worked confounding example), ~55-65 min collaborative group work, ~10-15
min full-class shareout.

## Follows

Day 4's "Confounding & Bayesian Reasoning" lecture (confounding half) —
this lab is the collaborative rehearsal of that concept, on data the
lecture's own worked example didn't already use.

## Why this lab exists

This is the module's own rehearsal for the confounding bridging gap
(`INSTRUCTOR_MODULE_SUMMARY.md`): "no module before this one defines what
a confounder is." Day 4 introduces the concept with one worked example
(Palmer Penguins' `island` confounding a species/body-mass comparison);
this lab gives students a genuine collaborative rep of *finding* a
confounder themselves, on a comparison the lecture didn't already solve
for them, before the project (§7) asks them to do this independently on
their own domain data. It directly preempts the most common
`critical-thinking` failure mode named in `instructor/rubric.md`
(source repo): naming a confounder "in the abstract... rather than a
specific one grounded in the... actual data."

## Scaffolding level

`collaborative` — working with a peer; still lecture/lab data, not yet
the fully independent project version.

## Dataset / use case

`data.cms.gov` hospital-quality/Medicare facility data (see `DATASET.md`
in `module_sources/module-5-inferential-statistics/`) — deliberately a
*different* dataset than Day 4's own Palmer Penguins worked example, so
this is a genuine rep, not a repeat of the same solved case. If
`data.cms.gov` access proves unreliable in practice, Palmer Penguins with
a *different* variable pairing than Day 4 used is an acceptable fallback —
confirm which before building this lab's worksheet. Never the project's
own domain datasets.

## Day-by-day milestones (1 day: Day 5)

| Day | Goal |
|---|---|
| 5 | With a partner, given a real comparison and its result, name one specific, plausible confounder grounded in the actual data (not a generic gesture); explain concretely why the comparison alone doesn't establish causation; describe what a real controlled design would need to look like to actually support a causal claim. |

## Skills / rubric criteria this lab exercises

`critical-thinking` — see `INSTRUCTOR_MODULE_SUMMARY.md`'s rubric
distillation table. Specifically rehearses `PROJECT.md`'s Project Days 5-6
(§7, causal reasoning) "Meets" bar — a real, specific confounder for the
actual comparison at hand, plus a concrete description of what a
controlled design would need.

## Shareout

The last 10-15 minutes reconvene as a full class: which confounder each
pair landed on and why, whether any pair's first instinct was too generic
before they refined it, and what made a confounder "specific enough" vs.
not. Compare approaches — more than one real confounder can be defensible
for the same comparison.

## Common mistakes to preempt

Watch for the specific failure `PROJECT_SHAREOUT_GUIDE.md` (source repo)
flags as the cheapest moment to catch: a write-up that names a confounder
"in the abstract" ("there could be other factors") rather than one
grounded in the specific data at hand. A pair that produces a generic
gesture instead of a real, checkable alternative explanation has not met
this lab's bar, even if the writing sounds confident.
