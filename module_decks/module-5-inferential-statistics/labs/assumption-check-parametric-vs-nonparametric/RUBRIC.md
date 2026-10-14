# Rubric — Lab: Is My Test Defensible? Parametric vs. Non-Parametric

**Point scale**: Below Expectations = 1, Approaching = 2, Meets = 4, Exceeds = 5.
2 skills × 4 points = **8 points total at Meets**; more with any Exceeds
levels earned.

Formative lab, not the graded project — use for real, specific feedback
during the shareout, not a gradebook entry. Real dataset: `palmer_penguins.csv`
(344 rows), reused from Days 1-2.

---

## Technical Skills

### `inferential-statistics`

*Deciding, case by case, whether a proposed test is actually defensible —
and naming the real alternative when it isn't.*

| Level | Points | Criteria |
|---|---|---|
| **Exceeds** | 5 | Meets, plus: for both non-defensible cases, actually runs and reports the real numeric result of the correct alternative test (Mann-Whitney U or Fisher's exact), not just naming it. |
| **Meets** | 4 | All 3 cases get an explicit defensible/not-defensible sentence naming a real reason: Case 1 (Adelie vs. Chinstrap flipper length) called defensible; Case 2 (Gentoo 2007 vs. 2008) called not defensible, naming Mann-Whitney U as the alternative; Case 3 (species × island, 2008) called not defensible, naming Fisher's exact as the alternative. |
| **Approaching** | 2 | Real shape-check numbers are computed for each case, but the defensible/not-defensible call is wrong or unstated ("looks roughly fine") for at least one case. |
| **Below Expectations** | 1 | Proposed test is accepted or rejected without ever computing the real shape-check output for any case. |

### `data-distributions-shape`

*Reading skew, spread, and expected cell counts correctly enough to know
which case actually breaks a test's assumption.*

| Level | Points | Criteria |
|---|---|---|
| **Exceeds** | 5 | Meets, plus: correctly explains why Case 2's t-test and Mann-Whitney p-values (0.081 vs. 0.077) come out close here but aren't guaranteed to be close in general. |
| **Meets** | 4 | Correctly reads Case 1 as near-symmetric with comparable spread (skew ≈ 0.09/-0.01); Case 2 as right-skewed by two real 230mm outliers (skew 1.11, Shapiro-Wilk p=0.006); Case 3's expected-cell-count table as having one cell below 5 (2.53, Chinstrap × Torgersen). |
| **Approaching** | 2 | Computes the real numbers but misreads what they mean — e.g. calls Case 2 symmetric despite the visible skew and outliers. |
| **Below Expectations** | 1 | Doesn't compute or reference the real shape statistics (skew, Shapiro-Wilk, expected counts) at all. |

---

## `common_project_mistakes` this rubric preempts

- Skipping the assumption check before choosing the test — the project's
  own most commonly cited failure mode for this skill.
- Writing "looks roughly fine" instead of naming the specific number or
  shape that actually justified the call.
