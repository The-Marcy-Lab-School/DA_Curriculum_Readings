# Module 5 Calendar — Inferential Statistics & Experimental Design Foundations

Quick-reference for instructors: which lecture/lab happens on which day, in
order, whether a lab continues a previous day's work, and what it's
actually called. Full rationale/objectives/rubric live in
`module_sources/module-5-inferential-statistics/INSTRUCTOR_MODULE_SUMMARY.md`
— this file is just the flow, kept at the module root for fast lookup.
**Hand-reconciled alongside that file, not auto-regenerated** — update this
whenever a deck is built/renamed/resequenced.

| Day | Type | Name | Builds on | Status |
|---|---|---|---|---|
| 1 | Lecture (new) | Hypothesis Testing Foundations, Sample Size & Power | Module 2 (descriptive stats, distribution shape) | **Built** — `lectures/hypothesis-testing-foundations-sample-size-power/` |
| 2 | Lecture (new) | Running Statistical Tests in Python: t-test & Chi-Square | Day 1 | **Built** — `lectures/running-statistical-tests-in-python-t-test-chi-square/` |
| 3 | Lab | Is My Test Defensible? Parametric vs. Non-Parametric | Days 1-2 (not a continuation of a prior lab — this module's first lab) | **Built** — `labs/assumption-check-parametric-vs-nonparametric/` |
| 4 | Lecture (new) | Confounding & Bayesian Reasoning: Two Real-World Reasoning Gaps | Days 1-3 | **Built** — `lectures/confounding-bayesian-reasoning-two-real-world-reasoning-gaps/` |
| 5 | Lab | Naming a Real Confounder | Day 4's confounding half (not a continuation of Day 3's lab — a different skill rehearsal) | **Built** — `labs/naming-a-real-confounder/` |
| 6 | Lab | Running a Beta-Binomial Update, Batch by Batch | Day 4's Bayesian half (not a continuation of Day 5's lab — a different skill rehearsal) | **Built** — `labs/beta-binomial-belief-update/` |
| 7 | Lab | Independent End-to-End Hypothesis Test Rep | Days 1-6, cumulative (not a continuation of any single earlier lab — a synthesis rep pulling together all three, plus a ~10 min recall warm-up) | **Built** — `labs/independent-hypothesis-test-rep/` |
| 8 | Project | Project Day 1 — Setup + pick your comparison | `PROJECT.md` | See `PROJECT.md` |
| 9 | Project | Project Day 2 — Hypothesis statement | `PROJECT.md` | See `PROJECT.md` |
| 10 | Project | Project Day 3 — Assumption check | `PROJECT.md` | See `PROJECT.md` |
| 11 | Project | Project Day 4 — Run test, effect size, CI | `PROJECT.md` | See `PROJECT.md` |
| 12 | Project | Project Day 5 — Causal reasoning | `PROJECT.md` | See `PROJECT.md` |
| 13 | Project | Project Day 6 — Causal reasoning, cont'd | `PROJECT.md` | See `PROJECT.md` |
| 14 | Project | Project Day 7 — Bayesian belief update | `PROJECT.md` | See `PROJECT.md` |
| 15 | Project | Project Day 8 — Bayesian belief update, cont'd | `PROJECT.md` | See `PROJECT.md` |
| 16 | Project | Project Day 9 — Bayesian belief update, cont'd | `PROJECT.md` | See `PROJECT.md` |
| 17 | Project | Project Day 10 — Catch the AI's mistake | `PROJECT.md` | See `PROJECT.md` |
| 18 | Project | Project Day 11 — Final conclusion + submit | `PROJECT.md` | See `PROJECT.md` |
| (after 18) | Event, not a school day | Project Share-Out | Day 18 | Scheduled once every submission is in (60-75 min, pairs/trios) — see `instructor/PROJECT_SHAREOUT_GUIDE.md` in the source repo |

**No lab continues another lab this module** — Days 3, 5, 6, and 7 are four
single-day labs, each rehearsing a different piece of the project
(assumption check; confounding; Bayesian update; a full independent
end-to-end run), not a multi-day continuation of one scenario.

**Compressed from a 22-day draft to 18 days, 2026-09-09** — the module was
first drafted at 22 school days (11 content + 11 project); as part of a
cross-module rebalancing pass toward the fellowship's 38-week target, the
content phase was compressed from 11 days to 7 via three lecture combines
(Day 1 now covers hypothesis-testing foundations *and* sample-size/power;
Day 2 now covers both the t-test *and* the chi-square test; Day 4 now
covers both bridging-gap concepts — confounding *and* the Bayesian
update — in one lecture) plus dropping a standalone cumulative-recall day
in favor of a ~10-minute warm-up folded into Day 7's lab. **The four labs
were left full-length, unshrunk** — only lecture time was compressed. See
`INSTRUCTOR_MODULE_SUMMARY.md`'s "Compression history" for the full
reasoning, including a flagged real risk on Day 4 (two unrelated concepts
sharing one lecture slot, likely needing the full 75-minute ceiling).

**Two lectures don't map to a single upstream objective**: Day 4
(confounding + Bayesian reasoning) exists entirely because of the two
bridging gaps `instructor/overview.md` (source repo) names, not because of
any `_brief.json` objective — see `INSTRUCTOR_MODULE_SUMMARY.md` for why.
