# Content brief: Beneath the Total — Finding a Pattern You Can Trust

- **Quest / LiveLab(s):** Day 9 LiveLab "Mining a Pattern, With a Peer" (Mod 2 quest list not yet populated). Never printed in the reading.
- **Skill tags (from taxonomy.json):** eda-statistics
- **Skills (skills.json):** data-mining
- **Audience:** data-only
- **Complexity flag:** standard (20-minute max)
- **Estimated time:** ~18–20 minutes (video excluded)

## Sources (see SKILL.md, "Source of truth")
- **Drive decks read:** via the Mod 2 source digest compiled 2026-11-18 from the live Drive deck, labs copy and projects copy in `.sources/`.
- **Labs / projects commit:** not recorded (`_sources` baselines null).
- **Deck vs. deck_spec:** none that affect this reading.

## Avoid
- **LiveLab deck:** penguins (species x sex gap, island-vs-species confound); neighborhood athletes analogy; weekday vs weekend sales; region/product segmenting; a store that looks better because of its product mix; the "$95 tip" example; cleaning-function warm-up.
- **Data Challenge:** airline safety data, travel-booking label, size-adjusted rates; two pizza shops toolkit example.
- **Solo lab:** films and box office (the old cinema scenario was dropped for this reason).
- **Project:** flood claims, ER wait times, building permits, consulting hours.

## Align
- **Deck definitions:** non-obvious pattern; segment (split by two columns, every combination); confound/proxy (the shop stands in for repair type); mix; std as spread. Rules: split before trusting an average; a pattern that holds in every group is not a fluke; count the mix with `.size()`; compare the same subgroup across suspect groups; choose mean vs median from the evidence (close + small std means the mean is honest; "always median" is its own reflex).

## Prepare (on its own examples)
- Single-column groupby, then two-column groupby with `.size()` for the mix check.
- Same-subgroup comparison across groups; name a group too small to trust (count 1).
- `.agg(["count", "mean", "median", "std"]).round(1)` in a parenthesized chain; pick the statistic.
- Sort statements into report / check first / not news.
- **Confirmed:** works no Data Challenge step; solves no part of the project.

## Real-world scenario
- **Domain:** small business ops / services.
- **Scenario:** FixIt phone repair shop, two locations (Downtown, Eastside), 12 repairs: shop, repair (screen/battery), phone_age (old/new), minutes. Downtown looks 15 minutes slower only because it does mostly screen repairs; old phones take longer in both repair types.
- **Why it fits:** a cracked screen or a dying battery is familiar; no jargon.
- **Judgment call:** Part D proposed keeping Starlight Cinema; replaced because the caller asked to keep Day 9 away from films, and the shelter fallback would echo Day 7's dogs.

## Vocabulary list
Segment, mix, confound, non-obvious pattern, standard deviation (std).

## Activities (10 graded items)
flip cards; 2 recall quizzes; fill-in (`size`); 2 predict-before-run quizzes; statistic-choice quiz; drag sort (Report it / Check it first / Not news, 6 chips, specific hints); new-situation quiz; reflection box.

## Syntax taught early ("New in this cell")
`groupby([a, b])`, `.size()`, `.agg([... "std"])` in a parenthesized chain. All Day 9 deck syntax. No `.plot.bar` (cut for time).

## Video pick
- **How statistics can be misleading — TED-Ed (Mark Liddell), 4:19** (259 s verified with curl; QA default-caption check English; oEmbed 200).
- https://www.youtube.com/watch?v=sxYrzzy3cq8
- **Why:** short, plain-language version of the mix check. It names Simpson's paradox; the page says so in one line and keeps the deck's "confound/mix" wording.

## Time (honest count)
Prose ~800 words + tables ≈ 6.5 min; flip 2; 7 quiz-style items ≈ 6; drag sort 2; reflection 2 → ~18.5 min.

## Additional resources
- pandas docs: Group by (user guide); pandas docs: DataFrameGroupBy.size.
