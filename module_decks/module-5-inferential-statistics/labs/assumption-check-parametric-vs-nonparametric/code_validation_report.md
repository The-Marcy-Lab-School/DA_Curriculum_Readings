# Code Execution Validation — Lab: Is My Test Defensible? Parametric vs. Non-Parametric

**Lab:** `modules/module-5-inferential-statistics/labs/assumption-check-parametric-vs-nonparametric.yaml`
**Module 5, Day 3 (follows Lesson 2)**
**Validated:** 2026-09-11
**Result: 4/4 code steps PASS, run in one continuous session. No bugs found.**

---

## Environment actually used

| Component | Real observed value |
|---|---|
| Data | `modules/module-5-inferential-statistics/data/palmer_penguins.csv` (344 rows), accessed via the real relative path the rendered worksheet uses (`../../data/palmer_penguins.csv` from `labs/assumption-check-parametric-vs-nonparametric/`) |
| Interpreter | `.venv-content-validation/bin/python` |
| scipy | 1.18.1 |

`.venv` (the deck-generator tool's own environment) was never used. One step (the written-reflection step) is `skip_validation: true` (open-ended, no checkable output) and was correctly not run.

---

## Per-step validation

### Step "Load the Same Dataset, Fresh" — **PASS**
`df.shape` → `(344, 8)`, matching the instructor notes' stated expectation exactly.

### Step "Case 1 — Flipper Length, Adelie vs. Chinstrap" — **PASS**
Real output: Adelie n=151, mean=190.0, std=6.5, skew=0.09; Chinstrap n=68, mean=195.8, std=7.1, skew=-0.01. Matches the instructor answer key's claim exactly — both groups large, near-symmetric, comparable spread; **defensible as a t-test** is the correct, independently-confirmed call.

### Step "Case 2 — Gentoo Flipper Length, 2007 vs. 2008" — **PASS**
Real output: 2007 n=34 (skew=1.11, driven by two real 230mm outliers against a 207-222mm cluster), Shapiro-Wilk p=0.0062 (2007) and p=0.0459 (2008); Mann-Whitney U=600.0, p=0.0765. All match the instructor answer key exactly. **Not defensible as a standard t-test** is independently confirmed correct, and the recommended Mann-Whitney alternative runs cleanly.

### Step "Case 3 — Species by Island, 2008 Only" — **PASS**
Real output: one expected cell (Chinstrap × Torgersen) = 2.53, confirmed below 5 (`(expected >= 5).all()` → `False`). Matches the instructor answer key exactly. Fisher's exact test (this scipy version's own R×C generalization) runs cleanly: p=0.0001. **Not defensible as a standard chi-square test** is independently confirmed correct.

### Step "Write Your Real Call for Each Case" — **SKIPPED, intentional**
`skip_validation: true`, reason: open-ended written reflection, no single checkable output.

---

## Summary

No bugs found. All three "defensible / not defensible" calls the instructor answer key asserts are independently confirmed against real, unmodified (only filtered) Palmer Penguins data — none of the three cases were fabricated or invented; each is a genuine real-data subset engineered only by filtering (by species, by year), never by altering values.
