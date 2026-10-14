# Lab — Is My Test Defensible? Parametric vs. Non-Parametric

*Stubbed by the `plan-module` skill from Module 5's Lecture & Lab Map (see
`module_sources/module-5-inferential-statistics/INSTRUCTOR_MODULE_SUMMARY.md`).
See "Labs" in `content_spec/SCHEMA.md` — this is formative practice, not
the graded project
(`module_sources/module-5-inferential-statistics/PROJECT.md`).*

## Scenario

You're the analyst on call. A teammate hands you a handful of different
outcome variables, each with a proposed test already picked out, and asks
"can I actually trust this?" before they run anything. Your job, with a
partner, is to look at each variable's real shape first and give a
genuine defensible/not-defensible call — not rubber-stamp whatever test
was proposed.

## Time budget

**~75-90 minutes, one day** — ~10 min instructor framing, ~55-65 min
collaborative group work across several short scenarios (mixing
continuous and categorical outcomes), ~10-15 min full-class shareout.

## Follows

Days 1-2 ("Hypothesis Testing Foundations, Sample Size & Power" and
"Running Statistical Tests in Python: t-test & Chi-Square") — this lab is
the collaborative escalation of both, rehearsing the assumption-check step
those lectures introduced at guided level.

## Why this lab exists

This is the module's own rehearsal for Objective 3
(`INSTRUCTOR_MODULE_SUMMARY.md`): "with a peer, check the chosen test's
key assumption... and decide whether the parametric test is defensible or
a non-parametric alternative is more appropriate." Days 1-2 teach the
mechanics (five-number-summary/histogram for continuous data, expected
cell counts for categorical) at guided level on one running example each;
this lab gives a genuine collaborative rep across *multiple* short
scenarios in one sitting, so students practice the actual judgment call
(not just the mechanical check) more than once before the project asks
for it unguided. It also directly preempts `common_project_mistakes` #3
("skipping the assumption check before choosing the test") at reduced,
formative stakes.

## Scaffolding level

`collaborative` — working with a peer, per Objective 3's own framing;
still lecture-derived scenarios and lecture data, not yet the fully
independent, no-template version (that's Day 7's lab).

## Dataset / use case

Palmer Penguins (CC0) subsets — several different variable pairings
pulled from the same dataset Days 1-2 already used, each engineered to
land differently (one genuinely fine for a t-test; one visibly skewed
enough to need a non-parametric alternative; one categorical pairing with
a thin expected-cell-count problem). See `DATASET.md` in
`module_sources/module-5-inferential-statistics/`. Never the project's own
domain datasets (`finance_insurance`, `healthcare_operations`,
`public_sector`, `professional_services`) — students need those to still
feel genuinely unfamiliar-in-scope when the project asks them to run this
same judgment call independently.

## Day-by-day milestones (1 day: Day 3)

| Day | Goal |
|---|---|
| 3 | With a partner, work through several short scenarios: for each, produce the real five-number-summary/histogram (or `value_counts`/expected-cell-count check), then state explicitly — "this is defensible because..." or "this isn't defensible because..., so I'd use [alternative] instead." Reconvene as a class to compare which scenarios split opinion and why. |

## Skills / rubric criteria this lab exercises

`inferential-statistics` and `data-distributions-shape` — see
`INSTRUCTOR_MODULE_SUMMARY.md`'s objectives table (Objective 3) and rubric
distillation. Specifically rehearses `PROJECT.md`'s Project Day 3
(§3, assumption check) "Meets" bar — a real, shown assumption check with
an explicit defensible/not-defensible call, not an assumed given.

## Shareout

The last 10-15 minutes reconvene as a full class: which scenario(s) each
pair found genuinely ambiguous, whether groups agreed on the
parametric-vs-non-parametric call for the trickiest scenario, and what
made one scenario's skew obvious vs. subtle. Compare approaches before
naming a single "right" answer where the source data genuinely admits
more than one reasonable call.

## Common mistakes to preempt

From `module_sources/module-5-inferential-statistics/PROJECT.md`'s
common-mistakes list:

1. Skipping the assumption check before choosing the test — the exact
   failure mode this lab exists to rehearse against, at low stakes,
   before the project asks for the same judgment independently.

Also worth watching for here specifically: a pair that runs the
five-number-summary/histogram correctly but then defaults to "looks
roughly fine" without actually stating *why* — the lab's exit bar is a
real, explicit defensible/not-defensible sentence for each scenario, not
just a correctly-computed chart with no stated conclusion.
