# Lab — Independent End-to-End Hypothesis Test Rep

*Stubbed by the `plan-module` skill from Module 5's Lecture & Lab Map (see
`module_sources/module-5-inferential-statistics/INSTRUCTOR_MODULE_SUMMARY.md`).
See "Labs" in `content_spec/SCHEMA.md` — this is formative practice, not
the graded project
(`module_sources/module-5-inferential-statistics/PROJECT.md`).*

## Scenario

No template, no partner this time — a stakeholder hands you a real
question and a real dataset and wants a real answer: is the difference
you're seeing real, or could it be noise? You have one class period to
run the whole pipeline yourself, start to finish, the same way the
project will ask you to next.

## Time budget

**~100-110 minutes, one day**: ~10 min cumulative recall warm-up
(Days 1-6, see below) + ~75-85 min independent hands-on work + ~15 min
full-class shareout. Stays under the 120-minute single-day lab ceiling;
if real classroom timing finds this runs long in practice, the natural
split point is after the recall warm-up (making the independent work its
own full day), same precedent Module 3's schema-critique lab used when
its own timing didn't fit one day.

## Follows

Days 1-6, cumulatively — this lab is the last content day before the
project and includes its own ~10-minute recall warm-up (a quick recap
across hypothesis testing, running a test, the assumption check,
confounding, and the Bayesian update) instead of a separate standalone
`lecture_recall` day, per the 2026-09-09 compression (see
`INSTRUCTOR_MODULE_SUMMARY.md`'s "Compression history").

## Why this lab exists

This is the module's own rehearsal for Objective 5
(`INSTRUCTOR_MODULE_SUMMARY.md`): "without a template, independently run a
hypothesis test end-to-end... and write a plain-language conclusion that
evaluates and explicitly distinguishes statistical significance from
practical/business significance." Nothing earlier in the calendar asks
students to do the *entire* pipeline (hypothesis → assumption check → test
→ effect size → CI → brief conclusion) alone, without a template or a
partner — Days 1-2 are guided, Days 3/5/6 are collaborative. This is the
single most direct rehearsal for what the project's own Project Days 1-4
(calendar Days 8-11) ask for immediately afterward, at reduced (formative,
ungraded) stakes and on a smaller, simpler dataset than the project's own
real domain data. It deliberately does **not** include causal reasoning or
the Bayesian update — those already got their own dedicated rehearsal labs
(Days 5 and 6) — keeping this lab's scope to exactly what Objective 5
itself asks for.

## Scaffolding level

`independent` — no template, no partner during the actual work itself,
matching `PROJECT.md`'s own Project Day 1-4 ask at reduced (formative)
stakes. The 10-minute recall warm-up at the start is instructor-led, not
independent — only the hands-on work that follows it is.

## Dataset / use case

A smaller, simpler dataset than the full project scope — Palmer Penguins
or `data.cms.gov` (whichever a student didn't just use in Days 5-6, for
genuine independent novelty; see `DATASET.md` in
`module_sources/module-5-inferential-statistics/`). Kept intentionally
small/clean so the full pipeline is realistically completable solo within
the time budget above. Never the project's own domain datasets — students
need those to still feel genuinely unfamiliar-in-scope when the actual
project begins two days later.

## Day-by-day milestones (1 day: Day 7)

| Day | Goal |
|---|---|
| 7 | 10-minute cumulative recall warm-up (Days 1-6), then independently — no template, no partner — write a hypothesis, run the real assumption check, run the appropriate `scipy.stats` test, compute the effect size and 95% CI, and write a brief conclusion that separates statistical from practical significance and judges whether the result would warrant a real-world action. |

## Skills / rubric criteria this lab exercises

`inferential-statistics` and `critical-thinking` — see
`INSTRUCTOR_MODULE_SUMMARY.md`'s objectives table (Objective 5) and rubric
distillation. Specifically rehearses `PROJECT.md`'s Project Days 1-4 and
Day 11 (§2-6 and §10) "Meets" bars, at reduced stakes and reduced scope
(no causal reasoning, no Bayesian update — those are Days 5-6's own
labs).

## Shareout

The last 15 minutes reconvene as a full class: who got a significant vs.
non-significant result and how each interpreted it; whether anyone's
conclusion initially conflated statistical with practical significance
before catching it themselves; and what felt different about doing the
full pipeline alone vs. with a partner in Day 3's lab.

## Common mistakes to preempt

From `module_sources/module-5-inferential-statistics/PROJECT.md`'s
common-mistakes list — this lab is the last, lowest-stakes chance to catch
these before the project grades them:

1. Running the test first and writing the hypothesis afterward to match
   whatever came out.
2. Reporting a p-value with no confidence interval or real-world effect
   size.
3. Skipping the assumption check before choosing the test.
4. Treating any p < 0.05 result as automatically important without
   discussing real-world magnitude.
