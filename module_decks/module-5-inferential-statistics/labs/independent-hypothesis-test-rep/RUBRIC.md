# Rubric — Lab: Independent End-to-End Hypothesis Test Rep

**Point scale**: Below Expectations = 1, Approaching = 2, Meets = 4, Exceeds = 5.
2 skills × 4 points = **8 points total at Meets**; more with any Exceeds
levels earned.

Formative lab, not the graded project — use for real, specific feedback
during the shareout, not a gradebook entry. Real dataset: CMS
`hospital_general_information.csv` (3,174 hospitals after cleaning), brand
new to this module — for-profit vs. non-profit hospital ratings.

---

## Technical Skills

### `inferential-statistics`

*Running the full hypothesis-test pipeline solo, start to finish, with no
template: hypothesis, assumption check, test, effect size, CI.*

| Level | Points | Criteria |
|---|---|---|
| **Exceeds** | 5 | Meets, plus: independently states that the assumption check (large n, low skew in both groups) genuinely supports the t-test choice, not just running the check as a formality. |
| **Meets** | 4 | A real null hypothesis written before any test runs; assumption check shown (skew/spread per group); correct two-sample t-test run (t≈9.486, p≈6.2e-21); a real Cohen's d (≈0.48) and 95% CI (≈[0.410, 0.624]) computed and reported together. |
| **Approaching** | 2 | Runs a correct test, but skips writing the hypothesis first, or reports the p-value without the effect size/CI. |
| **Below Expectations** | 1 | No hypothesis stated, the wrong test chosen with no assumption check, or no effect size/CI computed at all. |

## Professional Skills

### `critical-thinking`

*Separating "statistically significant" from "big enough to matter," using
the real numbers, not just the p-value.*

| Level | Points | Criteria |
|---|---|---|
| **Exceeds** | 5 | Meets, plus: explicitly weighs who would actually use the finding (e.g. a patient choosing a hospital, a regulator) and what decision it would or wouldn't justify. |
| **Meets** | 4 | Conclusion states the p-value, effect size, and CI together, and explicitly separates "statistically significant" from "big enough to matter" using the real ≈0.48-star medium effect. |
| **Approaching** | 2 | Conclusion mentions the p-value and one other number, but doesn't explicitly separate statistical from practical significance. |
| **Below Expectations** | 1 | Conclusion stops at "p < 0.05, so it's significant" with no effect size or CI referenced. |

---

## `common_project_mistakes` this rubric preempts

- Running the test first and writing the hypothesis afterward to match
  whatever came out.
- Reporting a p-value with no confidence interval or real-world effect
  size.
- Treating any p < 0.05 result as automatically important without
  discussing real-world magnitude.
