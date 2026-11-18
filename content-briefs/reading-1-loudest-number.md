# Content brief: The Loudest Number in the Room

- **Quest / LiveLab(s):** Mod 2 Day 1, "Descriptive Statistics & Reading Distributions" (no Mod 2 quest pages exist yet; the reading owes the deck glossary). Never printed in the reading itself.
- **Skill tags (from taxonomy.json):** eda-statistics
- **Skills (skills.json):** statistical-analysis, data-distributions-shape
- **Audience:** data-only
- **Complexity flag:** standard, held to the 20-minute maximum (2026-11-18)
- **Estimated time:** ~18–20 minutes, video excluded. Honest count: flip cards 2 + 8 quiz-type items x 50 s (6.7) + drag sort 2 + reflection 2 + prose/code/2 SVGs baseline 7 = 19.7 min.

## Sources (see SKILL.md, "Source of truth")
- **Drive decks read:** Day 1 deck (via the 2026-11-18 scratch context built from the live deck + speaker notes).
- **Labs repo / projects repo:** read through the same scratch context (labs copy has no Day 1 notebook; the NumPy code-along is only in the local AI_DeckGeneration livelab folder).
- **Deck vs. local deck_spec disagreements:** none that affect this reading.

## Avoid (already used elsewhere in the module)
- **LiveLab deck:** restaurant tips (5-night and 10-shift versions, one big-party night), food-order prep times, team scoring, commutes, viral post views, low test scores, two servers with the same median, "our average is up" claim, the deck's AI chart-description quote (the reading uses its own wording on its own data).
- **Code-along:** the tips array and its NumPy sequence.
- **Data Challenge:** college majors starting pay (FiveThirtyEight), advising-office flyer, five made-up salaries AI prompt.
- **Project:** flood claims, ED wait times, building permits, consulting hours.

## Align
- mean, median, mode, standard deviation (typical distance from the mean, same units), quartile (three cut points, four equal groups), five-number summary, skew (lean; tail pulls mean from median). Plus outlier.
- Deck rules echoed: every term answers "what's typical?" or "how spread out?"; neither mean nor median is wrong, context decides; keep a real outlier and mention it separately; a big std is not bad by itself; NumPy interpolates quartiles, neither method is wrong; check an AI's chart claim against the mean-median gap.

## Prepare
- Data Challenge move: mean/median gap and which is honest for a headline number, then std, then a five-number summary and naming the value that flags something unusual → the reading does the same on 11 invented dinner gifts with NumPy (`np.mean/median/std(ddof=1)/percentile`, `.round(2)`, `[:-1]`), and mentions the `statistics` module in one line.
- Project mistakes defused: mean on skewed data; calling a shape symmetric without looking; trusting a fluent AI description; explaining std in plain words (reflection).
- **Confirmed:** works no Data Challenge step, solves no part of the project.

## Real-world scenario
- **Domain:** nonprofit & social impact.
- **Scenario:** a neighborhood youth orchestra's fundraising dinner; ten guests give $40–$75 and a local company gives $5,000; the organizer wants a typical gift for next year's goal. Wrap-up reuses it with next year's nine gifts and one $1,500 gift.
- **Why it fits:** everyday, no jargon, and the one-big-gift structure makes skew visible. Beneficiary changed from the old kids' reading program so it no longer echoes the Day 4 tutoring reading.

## Activity rotation
- [x] flip cards (8)  - [x] predict-then-run on every .py file (data-after gates)  - [x] typed prediction (median of ten gifts)  - [x] drag sort (typical vs. spread)  - [x] AI-claim check quiz  - [x] reflection (Teach-Back starter, optional AI prompt)

## Video pick
- **Title/channel/length:** "Mean and standard deviation versus median and IQR", Khan Academy, 7:58 (verified with curl; default caption track en; embeddable).
- **Link:** https://www.youtube.com/watch?v=qNKOi08NxHs
- **Why:** reputable, short, and makes the same "which pair to trust with an outlier" point. Replaces the old 13:24 Grad Coach pick, which was over the 12-minute guide.

## Interview relevance
- Evidence Ladder frame for "our average is up" style questions: observation, statistic, interpretation, caveat.

## Additional resources
- NumPy docs: median, std, percentile; Python docs: statistics module.
