# Rubric — Lab: Running a Beta-Binomial Update, Batch by Batch

**Point scale**: Below Expectations = 1, Approaching = 2, Meets = 4, Exceeds = 5.
1 skill × 4 points = **4 points total at Meets**; more with any Exceeds
level earned.

Formative lab, not the graded project — use for real, specific feedback
during the shareout, not a gradebook entry. Real dataset: `palmer_penguins.csv`,
Adelie's per-year proportion (2007-2009).

---

## Technical Skills

### `inferential-statistics`

*Running a real Bayesian belief update in genuine chronological order,
then diagnosing why the same mechanic breaks when fed bad batches.*

| Level | Points | Criteria |
|---|---|---|
| **Exceeds** | 5 | Meets, plus: correctly names BOTH real problems with the fragmented run (batches too small, AND rows not randomly ordered/clustered by species) — not just one. |
| **Meets** | 4 | Runs the real chronological update (2007→2008→2009) from a flat Beta(1,1) prior; the credible interval genuinely narrows batch to batch (width 0.183→0.129→0.104); then runs the fragmented version and correctly diagnoses why the belief swings wildly instead of narrowing. |
| **Approaching** | 2 | Runs the correct chronological update, but the fragmented-run diagnosis stops at "smaller batches are noisier" without naming the real non-random-ordering cause. |
| **Below Expectations** | 1 | Update loop doesn't run in real chronological order, or no diagnosis of the fragmented run is attempted at all. |

---

## `common_project_mistakes` this rubric preempts

- Running a belief update on batches that aren't in real chronological
  order, or that aren't actually representative samples.
- Attributing an unstable result to "small sample size" alone when a
  second, real mechanism (non-random ordering) is also at fault.
