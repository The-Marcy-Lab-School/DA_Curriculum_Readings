# Lab — Is My Test Defensible? Parametric vs. Non-Parametric

**Skills assessed:** Inferential Statistics, Data Distributions & Shape (see this lab's own `RUBRIC.md`)

**Estimated time:** ~85 minutes (10 min intro · 60 min collaborative work · 15 min shareout)

## Scenario

You're the analyst on call. A teammate is heads-down on a deadline and pings you three different variables, each with a test already picked out, and asks "can I actually trust this before I run it?" Nobody is handing you a checklist for each one - you and your partner have to look at the real shape of the data first, decide honestly whether the proposed test is defensible, and say what you'd run instead when it isn't. Some of these will look fine. At least one won't, and it won't be obvious until you actually look.

*Work with your group, but complete and push/commit your own copy of this lab — collaboration is encouraged, a shared submission isn't.*

## Your Objectives

- **Load the Same Dataset, Fresh**
  - *Same `palmer_penguins.csv` from Days 1-2, at `../../data/palmer_penguins.csv` from this lab's own folder. A fresh session starts with nothing in memory.*

- **Case 1 — Flipper Length, Adelie vs. Chinstrap: Proposed Test Is a t-test**
  - *Same shape-check habit from Day 2 - real spread and skew per group, not just a t-test run blind.*

- **Case 2 — Gentoo Flipper Length, 2007 vs. 2008: Proposed Test Is a t-test**
  - *A Shapiro-Wilk p-value below 0.05 means the data is unlikely to have come from a normal distribution - a real, checkable signal, not a judgment call from eyeballing a histogram alone.*
  - *Hint: scipy.stats has a real normality test - stats.shapiro() - that gives you a p-value for 'this looks normal,' not just a description you eyeball.*

- **Case 3 — Species by Island, 2008 Only: Proposed Test Is a Chi-Square Test**
  - *Same expected-cell-count rule from Day 2 - every cell needs to be at least 5 for the chi-square approximation to hold, and a smaller real subset is exactly where that rule actually gets tested.*

- **Write Your Real Call for Each Case, One Sentence Each**

## Share Out

Go around and ask each pair for their three calls: defensible, or not? Put them on the board next to each other - who agreed, who split. Then the real question: for the ones people got right, what was the actual tell? A specific number, a specific shape in the histogram, or just a gut feeling? Push on any pair that says "it looked roughly fine" without naming a specific reason - that's the exact gap this lab exists to close. Last, ask: which of the three scenarios would have been easy to miss if you were moving fast and skipped the check?
