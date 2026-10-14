# Lab — Running a Beta-Binomial Update, Batch by Batch

*Stubbed by the `plan-module` skill from Module 5's Lecture & Lab Map (see
`module_sources/module-5-inferential-statistics/INSTRUCTOR_MODULE_SUMMARY.md`).
See "Labs" in `content_spec/SCHEMA.md` — this is formative practice, not
the graded project
(`module_sources/module-5-inferential-statistics/PROJECT.md`).*

## Scenario

A live dashboard somewhere is updating a "probability variant B is
better" estimate as new visitors arrive, in real time. With a partner,
you're going to build the same mechanic by hand: starting from a flat
prior, feed in real batches of data in real chronological order, and watch
your belief about a true proportion actually sharpen as more data lands.

## Time budget

**~90-100 minutes, one day** (the most coding-heavy of the four labs) —
~10 min instructor framing/primer recap, ~65-75 min collaborative
hands-on coding, ~15 min full-class shareout.

## Follows

Day 4's "Confounding & Bayesian Reasoning" lecture (Bayesian half) — this
lab is the collaborative rehearsal of that concept, applying the given
`bayesian_updating_primer.md` mechanics to real lecture data for the first
time.

## Why this lab exists

This is the module's own rehearsal for the Bayesian-update bridging gap
(`INSTRUCTOR_MODULE_SUMMARY.md`): the given primer covers the mechanics
(`alpha += k, beta += n - k`) but Day 4 is where the *concept*
(prior/posterior, why the update rule is valid) gets taught first. This
lab is where students actually run it end-to-end on real data for the
first time, batch by batch, before the project (§8) asks them to do the
same thing independently on their own domain data with its own real
batching complications (see `SCENARIOS.md` in the source repo for each
domain's recommended batching, including `public_sector`'s honest
row-order workaround).

## Scaffolding level

`collaborative` — working with a peer; still lecture/lab data, not yet
the fully independent project version.

## Dataset / use case

`data.cms.gov` facility data (see `DATASET.md` in
`module_sources/module-5-inferential-statistics/`) — a real proportion-
type outcome (e.g., a facility quality metric), batched by whatever real
reporting periods the actual pulled data supports. **Confirm a genuine
multi-period spread exists in the real pulled data before committing to
this as the lab's dataset** — if it turns out too sparse or irregular for
clean batching, fall back to a synthetic-but-honestly-labeled batching
scheme, same spirit as `SCENARIOS.md`'s own `public_sector` workaround
(batch by row order instead of real time, and say so explicitly). Never
the project's own domain datasets.

## Day-by-day milestones (1 day: Day 6)

| Day | Goal |
|---|---|
| 6 | With a partner, starting from a flat `Beta(1, 1)` prior, run the real beta-binomial update batch by batch on real lecture data in genuine chronological order; print the posterior mean and 95% credible interval after each batch; state explicitly whether the interval narrowed as expected, and if not, diagnose whether batches are too small/few. |

## Skills / rubric criteria this lab exercises

`inferential-statistics` — see `INSTRUCTOR_MODULE_SUMMARY.md`'s rubric
distillation table. Specifically rehearses `PROJECT.md`'s Project Days
7-9 (§8, Bayesian belief update) "Meets" bar — the update run on a real
proportion outcome, batched chronologically, with the credible interval
shown genuinely narrowing across real batches (not "the update runs but
the interval isn't shown narrowing," which `instructor/rubric.md`, source
repo, marks as only Approaching).

## Shareout

The last 15 minutes reconvene as a full class: whose credible interval
narrowed cleanly vs. stayed noisy, and why (batch size/count is almost
always the answer); what the posterior mean converged toward; and how
this connects to the real-world framing in `bayesian_updating_primer.md`
(a live A/B test dashboard; an insurer updating a payout-rate estimate as
claims arrive).

## Common mistakes to preempt

- Batching into too many tiny chunks (e.g. batches of `n=1` or `n=2`),
  which barely moves the posterior and produces a credible interval that
  looks like it isn't narrowing — the fix is grouping into a handful of
  larger chronological chunks, not concluding the method doesn't work.
- Shuffling or reordering batches instead of processing them in genuine
  chronological order — the whole point is watching belief update as
  time/data actually passes; the credible-interval-narrowing pattern
  depends on real chronological order.
- Reporting only the final posterior mean/interval instead of showing the
  narrowing across every batch — the project's own §8 explicitly requires
  showing the interval after *each* batch, not just the end state.
