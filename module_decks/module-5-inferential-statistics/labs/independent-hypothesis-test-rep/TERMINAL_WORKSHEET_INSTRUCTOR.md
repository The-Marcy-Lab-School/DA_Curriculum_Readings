# Lab — Independent End-to-End Hypothesis Test Rep

> **You are not presenting this worksheet to students.** Use it as your own answer key while circulating during lab time.

**Skills assessed:** Inferential Statistics, Critical Thinking (see this lab's own `RUBRIC.md`)

**Estimated time:** ~105 minutes (10 min intro · 80 min collaborative work · 15 min shareout)

## Scenario

No template, no partner this time. A stakeholder hands you a real question and a real dataset and wants a real answer: is the difference you're seeing real, or could it be noise? Before you start: a 10-minute instructor-led recall warm-up across everything from hypothesis testing through the Bayesian update. After that, you have one class period to run the whole pipeline yourself, start to finish, the same way the project will ask you to next - hypothesis, assumption check, real test, effect size, confidence interval, and a real conclusion.

## Load the Data

*Context: A real, brand-new dataset this module hasn't used before - real CMS hospital-quality data, not Palmer Penguins. `Hospital overall rating` prints as the text 'Not Available' for some hospitals, so it needs a real numeric conversion before anything else works.*

**Instructor notes:**

> INSTRUCTOR ANSWER KEY: shape is (3174, 39) after dropping non-numeric ratings. Verified against the real file 2026-09-13.

```python
import pandas as pd
from scipy import stats

df = pd.read_csv("../../data/hospital_general_information.csv")
df["rating"] = pd.to_numeric(df["Hospital overall rating"], errors="coerce")
df = df.dropna(subset=["rating"])
df.shape
```

## State Your Hypothesis: Do For-Profit and Non-Profit Hospitals Rate Differently?

*⚠️ Not auto-validated: An open-ended written step - the point is committing to a real hypothesis before seeing any result, not a checkable output.*

**Instructor notes:**

> Confirm every Fellow has written a real null hypothesis ("no real difference in average rating between ownership types") before moving on - this is common project mistake #1, and the whole point of this step existing on its own.

```python
# NOTE: not auto-validated - An open-ended written step - the point is committing to a real hypothesis before seeing any result, not a checkable output.
# Null hypothesis and alternative hypothesis, in your own words,
# written down before running anything below.
print("Hypothesis written - see notes above.")
```

## Check the Assumption Before Choosing the Test

*Context: Same shape-check habit from every earlier class - real spread and skew per group, before picking a test.*

**Instructor notes:**

> INSTRUCTOR ANSWER KEY: for-profit n=502, mean=2.791, std=1.062, skew=0.16; non-profit n=1619, mean=3.308, std=1.068, skew=-0.23. Both groups are large with low skew - genuinely defensible for a t-test. Verified against the real file 2026-09-13.

```python
forprofit = df[df["Hospital Ownership"] == "Proprietary"]["rating"]
nonprofit = df[df["Hospital Ownership"] == "Voluntary non-profit - Private"]["rating"]

print("for-profit:", forprofit.count(), forprofit.mean(), forprofit.std(), forprofit.skew())
print("non-profit:", nonprofit.count(), nonprofit.mean(), nonprofit.std(), nonprofit.skew())
```

## Run the Real Test

**Instructor notes:**

> INSTRUCTOR ANSWER KEY: t=9.486, p≈6.2e-21 - far below 0.05, reject the null. Verified against the real file 2026-09-13.

```python
result = stats.ttest_ind(nonprofit, forprofit)
print("t-statistic:", result.statistic)
print("p-value:", result.pvalue)
```

## Compute the Effect Size and the 95% Confidence Interval

**Instructor notes:**

> INSTRUCTOR ANSWER KEY: 95% CI ≈ [0.410, 0.624] stars; Cohen's d ≈ 0.48 - a real, medium-sized effect by the standard convention (0.2 small, 0.5 medium, 0.8 large), not just a "significant" label with no sense of scale. Verified against the real file 2026-09-13.

```python
ci = result.confidence_interval(confidence_level=0.95)
print("95% CI:", ci)

n1, n2 = len(nonprofit), len(forprofit)
pooled_std = ((n1 - 1) * nonprofit.std()**2 + (n2 - 1) * forprofit.std()**2) / (n1 + n2 - 2)
pooled_std = pooled_std ** 0.5
cohens_d = (nonprofit.mean() - forprofit.mean()) / pooled_std
print("Cohen's d:", cohens_d)
```

## Write Your Conclusion: Statistical vs. Practical Significance

*⚠️ Not auto-validated: An open-ended written-reflection step - the point is a real, specific conclusion, not a single checkable output.*

**Instructor notes:**

> Watch specifically for a conclusion that stops at "p < 0.05, so it's significant" without ever using the effect size or CI - that's common project mistake #2 and #4 combined. A strong conclusion states all three numbers together and makes a real, defensible judgment call about whether a 0.48-star average difference (medium effect) is big enough to matter for whoever would actually use this finding.

```python
# NOTE: not auto-validated - An open-ended written-reflection step - the point is a real, specific conclusion, not a single checkable output.
# 3-5 sentences: state the p-value, effect size, and CI together.
# Explicitly separate "statistically significant" from "big enough
# to matter," and judge whether this finding would warrant a real
# decision (e.g., a patient choosing a hospital, a regulator setting
# policy) - not just "p < 0.05, done."
print("Conclusion written - see notes above.")
```

## Share Out

*Reconvene as a full class for the last stretch of lab time. Ask a few groups to share their approach before revealing any single "right" way — the point is comparing real approaches, not a recap.*

Go around and ask who got a "significant" result and who didn't - both are legitimate outcomes here. For each, ask how they interpreted it: did anyone initially treat "significant" as automatically important, before catching themselves? Last: what felt different about running the entire pipeline alone, with no partner and no template, versus Day 3's collaborative version?
