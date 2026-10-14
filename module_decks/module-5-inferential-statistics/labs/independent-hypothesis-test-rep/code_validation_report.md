# Code Execution Validation — Lab: Independent End-to-End Hypothesis Test Rep

**Lab:** `modules/module-5-inferential-statistics/labs/independent-hypothesis-test-rep.yaml`
**Module 5, Day 7 (follows Lesson 4, cumulative rep across Days 1-6)**
**Validated:** 2026-09-13
**Result: 5/5 code steps PASS, run in one continuous session. No bugs found.**

---

## Environment actually used

| Component | Real observed value |
|---|---|
| Data | `modules/module-5-inferential-statistics/data/hospital_general_information.csv` (real CMS Hospital General Information data, 5419 rows, 38 columns), via the real relative path the rendered worksheet uses (`../../data/hospital_general_information.csv`) |
| Interpreter | `.venv-content-validation/bin/python` |
| scipy | 1.18.1 |

Two steps (the hypothesis statement and the final conclusion) are `skip_validation: true` (open-ended written reflections, no checkable output) and were correctly not run.

---

## Per-step validation

### Step "Load the Data" — **PASS**
After coercing `Hospital overall rating` to numeric (`errors="coerce"`, since some hospitals print the literal text `"Not Available"`) and dropping non-numeric rows, `df.shape` → `(3174, 39)`, matching the instructor notes' stated expectation.

### Step "State Your Hypothesis" — **SKIPPED, intentional**
`skip_validation: true`, reason: open-ended written step, committing to a hypothesis before seeing any result.

### Step "Check the Assumption Before Choosing the Test" — **PASS**
Real output: for-profit (`Proprietary`) n=502, mean=2.791, std=1.062, skew=0.16; non-profit (`Voluntary non-profit - Private`) n=1619, mean=3.308, std=1.068, skew=-0.23. Matches the instructor answer key exactly — both groups large with low skew, genuinely defensible for a t-test.

### Step "Run the Real Test" — **PASS**
`stats.ttest_ind(nonprofit, forprofit)` → t=9.486, p≈6.2e-21, matching the instructor answer key exactly — far below 0.05, reject the null.

### Step "Compute the Effect Size and the 95% Confidence Interval" — **PASS**
Real output: 95% CI ≈ [0.410, 0.624] stars; Cohen's d ≈ 0.48 (pooled-std method), matching the instructor answer key exactly — a real, medium-sized effect by the standard convention (0.2 small, 0.5 medium, 0.8 large).

### Step "Write Your Conclusion" — **SKIPPED, intentional**
`skip_validation: true`, reason: open-ended written reflection, no single checkable output.

---

## `scaffolding_level` generator fix verified

This lab is the first to set `scaffolding_level: independent` (see `content_spec/SCHEMA.md`'s Labs section and `generator/build_lab_worksheet.py`'s `_lab_header_lines()`), fixing a real bug where the student worksheet unconditionally rendered a "work with your group" line even though this lab's own scenario is explicitly designed as independent, no-partner work ("No template, no partner this time"). After rebuilding with the fix applied, the rendered student worksheet correctly shows "*Work independently - no partner this time, though you can still ask for help - and push/commit your own copy of this lab.*" instead. The other three Module 5 labs (Days 3, 5, 6 — all collaborative, `scaffolding_level` unset) were rebuilt alongside this one and confirmed to still render the original collaborative line unaffected, since the new branch is additive and only triggers on the literal value `"independent"`.

## Summary

No bugs found in the lab's own code steps — all 5 real, checkable steps reproduce their instructor answer keys exactly using real CMS data. This lab reuses the same `hospital_general_information.csv` pairing (`Hospital overall rating` by `Hospital Ownership`) that this module's own dataset research (Day 5/6 planning) found to be a robust, non-confounded effect in CMS data — a result that was a dead end for Day 5/6's confounding-story need, but is exactly what this lab needs instead: a clean, real, defensible hypothesis test with a genuine medium effect size, uncomplicated by any lurking confounder.
