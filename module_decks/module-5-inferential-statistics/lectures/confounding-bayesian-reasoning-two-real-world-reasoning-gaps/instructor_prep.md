# Instructor Prep: Confounding & Bayesian Reasoning: Two Real-World Reasoning Gaps
*Module 5: Inferential Statistics*

## Lecture Time Estimate
- Opening: ~5 min
- A Suspiciously Simple Finding: ~24 min
  - Code-along: ~8 min
- A Second Kind of Reasoning: Updating Belief as Data Arrives: ~28 min
  - Code-along: ~4 min
- **Total: ~58 min**
- **Total code-along time: ~12 min**

## Code-Along Map (Where to Open the Notebook)
- Slide 8: **The Naive Comparison, in Code** — code-along, have Fellows open their notebook
- Slide 11: **The Controlled Comparison, in Code** — code-along, have Fellows open their notebook
- Slide 19: **Run the Real Update** — code-along, have Fellows open their notebook

## Prerequisites
- Comparing group summary statistics with pandas .groupby() (last two classes)
- Reading a chi-square test's contingency table for association (two classes ago)

## Learning Objectives
- With a worked example, define what a confounding variable is, and identify a real confounder hiding inside a group comparison
- Explain what a prior and posterior represent, and run a real beta-binomial update on real sequential data

## Project Connection
*Say this out loud at some point in the lecture - it's the answer to "why does this matter for my project?"*

This lecture rehearses two of the project's own graded sections, at reduced stakes: Naming a real confounder for your own comparison (section 7), and running a real belief update on your own sequential data (section 8).

## Section Flow (Why Each Transition Is There)
- **Two Reasoning Gaps, Today → A Suspiciously Simple Finding**: Real Palmer Penguins data, one honest question: Are islands really different, or is something else going on?
- **A Guess, on the Table → Code Along: Check the Naive Number**: Same pandas skill from the last two classes, one new question.
- **A Real Candidate Explanation → Code Along: Control for Species**: Compare islands again, but only within one species this time.
- **One Reasoning Gap, Closed → A Second Kind of Reasoning: Updating Belief as Data Arrives**: Confounding was about a hidden variable. This is about how a real belief should change as more real data comes in.
- **The Rule, Named → Code Along: Update Belief, Batch by Batch**: Real Palmer Penguins data, one real year at a time, in real chronological order.

## Additional Analogies / Use Cases
- Confounding Variable: The Formal Name (family): Across a group of kids, shoe size and reading ability are genuinely correlated - bigger shoes really do line up with better reading scores. Buying bigger shoes doesn't improve reading, and better reading doesn't grow feet. Age drives both at once: older kids have bigger feet and have had more years of practice reading. Age is the real confounder hiding behind a correlation that looks, at a glance, like one thing causing the other.
  - *Backup (business_operations):* Ice cream sales and drowning deaths rise and fall together across the year. Ice cream doesn't cause drowning. Summer heat drives both - more swimming, more ice cream, at the same time of year.
- Before Any Data: What Do You Believe? (food): Tasting a big pot of soup for saltiness works the same way. Before the first taste, your best guess is a flat, wide-open one - could be bland, could be salty. Each spoonful is a real batch of evidence. After each one, you update your belief about the true saltiness, and you get more confident - a narrower range of guesses - the more spoonfuls you taste.
  - *Backup (gaming):* It is like guessing an opponent's hand in a card game. Your first guess is wide open. Each card they play is a new piece of evidence, and your guess about their hand narrows with every one - you rarely get it exactly right after one card, but you get closer with each.

## Misconceptions to Watch For
- Confounding Variable: The Formal Name: People hear this and conclude island truly has zero effect on anything. The actual finding is narrower: for body mass specifically, once species is held constant, island's own effect is small - not that island could never matter for anything else.
- Before Any Data: What Do You Believe?: People treat the prior as a guess you're stuck with. The whole point is that it changes, batch by batch, as real evidence arrives - a prior is a starting point, not a commitment.
- One Word, Two Different Meanings: Nearly everyone says "95% chance the true value is in this interval" about a confidence interval. That sentence is only actually true for a credible interval - confusing the two is one of the most common real misstatements in applied statistics.
- Would you rather report a confidence interval or a: Someone will argue confidence intervals are just as good "close enough." The two are answering genuinely different questions, not two phrasings of the same one - this is exactly the kind of imprecision that leads someone to misquote their own result.

## Further Resources (Deck's "Keep Learning" Links)
- [Bayesian Inference (Interactive)](https://seeing-theory.brown.edu/bayesian-inference/index.html) (practice, ~10-15 min)
  - Drag sliders and watch a posterior form
- [Confounding Variables 101](https://www.nngroup.com/videos/confounding-variables-1/) (video, ~3 min)
  - A short, plain-language confounding explainer
- [Conjugate Priors: Beta and Normal](https://ocw.mit.edu/courses/18-05-introduction-to-probability-and-statistics-spring-2022/mit18_05_s22_class15-prep.pdf) (documentation, ~20-30 min)
  - The real math behind today's update rule

## Top Engagement Strategies Used
- **Turn and Talk** — Before You Trust It, Ask Why: Turn and talk: pairs discuss 1-2 minutes, then a few share out.
- **Quick-Fire Game** — Firefighters and Fire Damage: Quick-fire, leaderboard-style prompt - keep the pace brisk; celebrate participation, not just correctness.
- **Turn and Talk** — Stopping Early, on Purpose: Turn and talk: pairs discuss 1-2 minutes, then a few share out.
- **Would You Rather** — Which Interval Actually Answers the Question?: Force a binary choice, then ask Fellows to justify it out loud - surfaces reasoning, not just the pick.
