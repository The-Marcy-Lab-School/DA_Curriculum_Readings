# Instructor Prep: Running Statistical Tests in Python — t-test & Chi-Square
*Module 5: Inferential Statistics*

## Lecture Time Estimate
- Opening: ~5 min
- Code Along: Run It For Real: ~58 min
  - Code-along: ~25 min
- **Total: ~64 min**
- **Total code-along time: ~25 min**

## Code-Along Map (Where to Open the Notebook)
- Slide 5: **Load the Real Data** — code-along, have Fellows open their notebook
- Slide 8: **The Shape Check, in Code** — code-along, have Fellows open their notebook
- Slide 11: **Run the t-test** — code-along, have Fellows open their notebook
- Slide 14: **Compute Cohen's d** — code-along, have Fellows open their notebook
- Slide 18: **Run the Chi-Square Test** — code-along, have Fellows open their notebook
- Slide 21: **Compute Cramér's V** — code-along, have Fellows open their notebook

## Prerequisites
- Null hypothesis, alternative hypothesis, p-value, and confidence interval (last class)
- Reading a five-number summary or histogram to describe a distribution's shape (Module 2)

## Learning Objectives
- Following a step-by-step template, run a two-sample t-test or a chi-square test (as appropriate to the data type) in Python via scipy.stats, correctly stating the null hypothesis, computing the p-value, and reading off the 95% confidence interval

## Project Connection
*Say this out loud at some point in the lecture - it's the answer to "why does this matter for my project?"*

This lecture is the direct rehearsal for the project's own graded test-running section: A real scipy.stats test, a real p-value, a real effect size, and a real 95% confidence interval, computed on your own data a few weeks from now.

## Section Flow (Why Each Transition Is There)
- **Yesterday's Homework → Code Along: Run It For Real**: You already stated the null and alternative hypothesis. Today's whole job is finding out which one the data actually supports.
- **The Shape Check, Explained → Code Along: See the Real Spread**: Same Module 2 skill, a new place to apply it - one line of pandas per group.
- **Hypothesis Restated → Code Along: Run the Real Test**: Stop predicting. Run it.
- **p-value Says 'Probably Not Zero' → Code Along: How Big, Really?**: A p-value never answers how big a difference actually is. Cohen's d does - the project's own next graded step.
- **One Test, Run for Real → A Second Kind of Question: Are Two Categories Related?**: Body mass by species was a continuous outcome. Species by island is a completely different shape of question.
- **Prediction Made → Code Along: See What the Data Says**: Time to find out if the real crosstab agrees with your guess.
- **Chi-Square Says 'They're Related' → Code Along: How Strongly Related?**: chi-square only says a real pattern likely exists. Cramér's V says how strong it is.

## Misconceptions to Watch For
- Load the Real Data: Someone will ask why not just drop every row with any missing value anywhere. That would throw away real, usable rows whose only gap is in a column you're not even testing today.
- Before You Test: A Quick Shape Check: People treat this check as optional busywork before "the real test." Skipping it is common project mistake #3 on this module's own rubric - checking the assumption is part of running the test correctly, not a separate extra step.
- The Shape Check, in Code: People expect "roughly similar shape" to mean the three `std` values match almost exactly. It means no group's spread is wildly larger than the others - real groups never match exactly, and demanding that they do would fail almost any real dataset.
- Run the t-test: A tiny p-value gets read as "an even more true" result than a p-value of 0.04. Both simply clear the same threshold - how far past it a p-value sits doesn't scale to "more real."
- Reading the t-test Output: "Reject the null" gets treated as the finish line. The project's own final write-up still asks a separate question this result doesn't answer on its own: is the size of this difference actually big enough to matter for a real decision.
- Code Along: How Big, Really?: People treat the p-value as already answering "how big." It only ever answers "probably not zero" - effect size is a genuinely separate number, not a restatement of the same one.
- Run the Chi-Square Test: People assume a chi-square test can use raw counts directly. It needs a contingency table first - counts cross-tabbed between the two categorical variables, not a flat list of category labels.
- Reading the Chi-Square Output: "Species and island are associated" gets restated as "the island determines the species," or the reverse. Association alone never tells you a direction or a cause - a point worth sitting with, since a future lesson comes back to exactly this dataset to ask whether island might be confounding a different comparison.
- Which Test, When?: People pick a test by habit or by whichever one they remember better, rather than by checking the outcome's actual data type first. The data type decides the test - not the other way around.
- Would you rather skip the assumption check to save: Someone will argue that with a big, obviously clean dataset like today's, the check is a formality. The check is what tells you the dataset is actually clean in the first place - skipping it just means finding out the hard way, after the test result is already in hand.

## Further Resources (Deck's "Keep Learning" Links)
- [A Practical Guide to t-tests & Chi-Square in Python](https://www.statology.org/python-practical-introduction-to-statistical-inference-t-tests-anova-chi-square/) (reading, ~12-15 min)
  - A hands-on, code-forward walkthrough of both tests
- [scipy.stats.ttest_ind documentation](https://docs.scipy.org/doc/scipy/reference/generated/scipy.stats.ttest_ind.html) (documentation, ~5-8 min)
  - The official reference for today's first test
- [scipy.stats.chi2_contingency documentation](https://docs.scipy.org/doc/scipy/reference/generated/scipy.stats.chi2_contingency.html) (documentation, ~5-8 min)
  - The official reference for today's second test

## Top Engagement Strategies Used
- **Turn and Talk** — Restate the Null, Right Before Testing: Turn and talk: pairs discuss 1-2 minutes, then a few share out.
- **Poll** — Predict It First: Species and Island: Quick multiple-choice check - reveal results live before moving on.
- **Quick-Fire Game** — A Chi-Square Result That Isn't Small: Quick-fire, leaderboard-style prompt - keep the pace brisk; celebrate participation, not just correctness.
- **Would You Rather** — Skip the Check, or Always Run It?: Force a binary choice, then ask Fellows to justify it out loud - surfaces reasoning, not just the pick.
