# Instructor Prep: Hypothesis Testing Foundations, Sample Size & Power
*Module 5: Inferential Statistics*

## Lecture Time Estimate
- Opening: ~8 min
- Let's Get the Logic Right, From the Start: ~18 min
- A Second, Separate Question: Is Your Sample Big Enough?: ~28 min
- **Total: ~53 min**

## Prerequisites
- Reading a histogram or five-number summary to describe a distribution's shape (Module 2)
- Comparing two groups' summary statistics side by side (Module 2)

## Learning Objectives
- Explain why observing a difference between two sample means or proportions doesn't by itself prove a real population-level difference, and define null hypothesis, alternative hypothesis, p-value, and confidence interval using a worked example
- With a peer, analyze a sample-size/power scenario and explain why a statistically significant result from a very large sample can still be practically meaningless

## Project Connection
*Say this out loud at some point in the lecture - it's the answer to "why does this matter for my project?"*

This lecture rehearses two of the project's most commonly graded pitfalls before they cost real points - stating your hypothesis before running any test (the project's own section 2, graded first), and correctly judging whether a 'significant' result is actually big enough to matter for a real decision (the project's final conclusion, section 10).

## Section Flow (Why Each Transition Is There)
- **A Confusing Real Result → Let's Get the Logic Right, From the Start**: Before judging whether any result matters, you need to know exactly what you're claiming, and what would count as evidence against it.
- **The Logic of One Test → A Second, Separate Question: Is Your Sample Big Enough?**: A test can be run perfectly and still mislead you, if the sample size doesn't match what you're actually trying to detect.

## Additional Analogies / Use Cases
- Null Hypothesis: Assume Nothing's Different, First (legal): A hypothesis test works like a courtroom. You start out assuming the defendant is innocent. That's the null hypothesis. The trial never tries to prove innocence. It only asks one thing: is the evidence strong enough to reject that assumption? A 'not guilty' verdict isn't proof of innocence. It just means the evidence wasn't strong enough. A hypothesis test works the same way.
  - *Backup (home):* It is like a smoke detector. The default assumption is 'no fire.' The detector doesn't wait for proof of fire - it flags when the smoke level makes 'no fire' hard to believe. A high reading is evidence against the default, not proof either way.
  - *Backup (weather):* It is like a forecaster saying an ordinary, storm-free day would rarely produce clouds like today's. That's a comment on how surprising today looks under the boring assumption, not a stated percentage chance that a storm is coming.
- 'Significant' Doesn't Mean 'Big Enough to Matter' (sports): A stopwatch precise enough to catch a tiny gap in a photo finish will report that gap every single race. That gap is real. No coach would ever restructure training around it, though. A large enough sample works the same way. It can reliably detect a real difference. That difference can still be too small to act on.
  - *Backup (food):* It is like a kitchen scale sensitive enough to detect the weight of a single fingerprint left on a cake. That reading is real and repeatable. No baker changes a recipe over it.
  - *Backup (music):* It is like a tuning app flagging a guitar string as off by a hundredth of a cent, a gap no human ear could ever hear. Technically real. Not a reason to retune.
- **Use case:** 'Significant.' **It Barely Helped Anyone.** (slide 4)
  - *Source:* [Frontiers in Pharmacology, 2020](https://pmc.ncbi.nlm.nih.gov/articles/PMC7047221/)
  - *Summary:* A 2020 review in Frontiers in Pharmacology examined 33 placebo-controlled and 18 head-to-head trials of antipsychotic drugs for dementia-related agitation and psychosis. Among trials with larger-than-required sample sizes, 72% reported a statistically significant effect - but researchers judged only 15% of those effects clinically meaningful. Smaller, underpowered trials that found an effect were judged clinically meaningful more often (57% of the time), and the larger trials' own "significant" effect sizes were consistently smaller than what the smaller trials found. Only 14 of 47 trials even reported a sample-size calculation up front.
  - *Hook question:* Would you recommend this drug to your own grandmother?
  - *Revisited/resolved in:* "So far, we've covered..."

## Misconceptions to Watch For
- Key Terms You'll Know by the End of Today: Most people have heard "p-value" before and assume they already know what it means. The single most common version of that assumed meaning is wrong - today directly corrects it.
- 'Significant.' **It Barely Helped Anyone.**: The easy takeaway is "so p-values are useless." That overcorrects. The actual lesson is narrower: a p-value answers one specific question, and "does this matter in real life" is a separate question it was never built to answer.
- Any Difference You See Has Two Possible Explanations: People assume "the sample shows a difference" and "there is a real difference" are the same claim. A hypothesis test exists specifically because they are not automatically the same claim.
- Null Hypothesis: Assume Nothing's Different, First: People say "we proved the null hypothesis" when a test finds no significant difference. Failing to reject the null is not the same claim as proving it - the same way a "not guilty" verdict is not a certificate of innocence.
- Two Ways a Verdict Can Go Wrong: People treat a Type II error as somehow less serious than a Type I error, "because at least nothing false got claimed." A real effect getting missed entirely is its own real cost, not a safer kind of wrong.
- For 'do Gentoo penguins actually weigh more than A: A common near-miss: "Gentoo and Adelie penguins weigh the same." That states the null as a fact about penguins, not as the assumption a test starts from and might reject.
- What a p-value Actually Measures: The American Statistical Association's own 2016 statement lists this exact confusion first, ahead of every other p-value misuse - it is common enough among working professionals that a national statistics body issued a formal correction.
- Confidence Intervals: A Range, Not a Single Number: People say "there's a 95% chance the true value is in this range," treating the true value as random and the interval as fixed. The interval is what's random here - it's the method that's right 95% of the time across many samples, not a 95% bet on this one already-computed range.
- 'Significant' Doesn't Mean 'Big Enough to Matter': People treat "the sample was huge, so it must be trustworthy" as settling the question. Sample size fixes precision, not relevance - a huge sample answers "is this exactly zero" more confidently, never "is this big enough to matter."
- One Sample-Size Trap Runs the Other Direction: "More data" gets treated as an automatic fix for any data-quality worry. More of a biased sample is not more true. It's the same bias, stated more precisely.
- How Big a Sample Do You Actually Need?: People treat "how big should my sample be" as answerable on its own. It's only answerable once you've named the smallest effect that would actually matter to you first.
- Would you rather have a small trial with an obviou: Someone will argue bigger is always safer. Bigger is more precise, not more meaningful - precision and importance are two different questions, and this whole lesson is about telling them apart.
- Key Terms — Recap: Watch for anyone still defining "p-value" as "the probability the null is true" at this recap point - that is the one definition worth correcting again, out loud, before moving on.

## Further Resources (Deck's "Keep Learning" Links)
- [P Values, Clearly Explained](https://www.youtube.com/watch?v=5Z9OIYA8He8) (video, ~6 min watch)
  - StatQuest's plain-language walkthrough
- [Understanding Statistical Power](https://rpsychologist.com/d3/nhst/) (practice, ~10-15 min)
  - An interactive sample-size and power visualizer
- [ASA Statement on P-Values](https://www.amstat.org/asa/files/pdfs/p-valuestatement.pdf) (documentation, ~10 min read)
  - The field's own official correction on misuse

## Top Engagement Strategies Used
- **Turn and Talk** — State the Null Hypothesis: Turn and talk: pairs discuss 1-2 minutes, then a few share out.
- **Quick-Fire Game** — What Does a p-value Actually Tell You?: Quick-fire, leaderboard-style prompt - keep the pace brisk; celebrate participation, not just correctness.
- **Quick-Fire Game** — Sample Size Versus the Effect You're Chasing: Quick-fire, leaderboard-style prompt - keep the pace brisk; celebrate participation, not just correctness.
- **Quick-Fire Game** — Big Sample, Tiny Difference: Quick-fire, leaderboard-style prompt - keep the pace brisk; celebrate participation, not just correctness.
- **Would You Rather** — Big and Obvious, or Huge and Barely-There?: Force a binary choice, then ask Fellows to justify it out loud - surfaces reasoning, not just the pick.
