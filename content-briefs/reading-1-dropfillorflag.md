# Content brief: Drop, Fill, or Flag — Handling Missing Data in pandas

- **Quest / LiveLab(s):** Day 7 LiveLab "Missing Data: Drop, Fill, or Flag" (Mod 2 quest list not yet populated). Never printed in the reading.
- **Skill tags (from taxonomy.json):** eda-statistics
- **Skills (skills.json):** data-cleaning-imputation
- **Audience:** data-only
- **Complexity flag:** standard (20-minute max)
- **Estimated time:** ~18–20 minutes (video excluded). Honest count: 7 quiz-type items × 50 s (5.8, incl. 1 typed prediction) + flip cards 2 + drag sort 2 + reflection 2 + baseline 7 (8 cells, two tables, SVG) ≈ 18.8 min.

## Sources (see SKILL.md, "Source of truth")
- **Drive decks read:** via the Mod 2 source digest compiled 2026-11-18 from the live Drive deck (slides + notes), the labs copy and the projects copy in `.sources/`.
- **Labs / projects commit:** not recorded (`_sources` baselines still null in `curriculum/mod2-quests.json`).
- **Deck vs. local deck_spec disagreements:** title slide names the flag `sex_missing`, code-along `sex_unknown`; no effect here.

## Avoid (already used elsewhere in the module)
- **LiveLab deck:** penguins dataset; the hand-built daily attendance Series; restaurant bills; quiz scores; survey/customer-file examples; daily temperatures.
- **Code-along:** penguins `sex_unknown` flag and `bill_length_mm` drop.
- **Data Challenge:** museum artists, two exports, year placeholders; the ten-ages AI toolkit example.
- **Project:** flood claims, ER wait times, building permits, consulting hours.

## Align
- **Deck definitions:** drop = remove a row with nothing to work with; fill = computed stand-in (mean, median, mode, last known value); flag = leave missing and mark with a True/False column; forward-fill = most recent prior value in a sequence. Best-fit table: mean = balanced/no outliers, median = skewed/outliers, mode = categories, forward-fill = ordered data.
- **Fixed from the old reading:** mean/median best-fit was reversed; `dropna(how="all")` replaced by `subset=`; `fillna("unknown")` removed (flag now leaves NaN in place).

## Prepare (on its own examples)
- Count blanks first, ask why/where they are missing (QAR in plain words) → section 2.
- `dropna(subset=)` with shape before/after, vs bare `dropna()` → section 3.
- Flag column with `.isna()` and its sum (`np.int64`) → section 4.
- Mean pulled by an outlier; median vs. mean side by side as two filled columns, then forward-fill; fill + flag together → section 5. Mode is shown on `dog_size` in section 4, where it turns out to be a guess (2 of 4), which motivates the flag.
- Placeholder warning: `.isna()` misses a 0 or "unknown" (stated, not worked).
- "I dropped the nulls" is not a reason → section 3 + reflection.
- **Confirmed:** works no Data Challenge step; solves no part of the project.

## Real-world scenario
- **Domain:** business ops (small app service).
- **Scenario:** Paws & Go dog-walking app log (walkers Sam, Lee, Kai, Ana; no pronouns). Crashed rows, phone bookings with no dog size, and Lee's 8 days of walks with 2 blanks (lost signal) and one 95-minute hike.
- **Review change (2026-11-18):** the fill example no longer copies the class attendance example (one 7-value Series, one gap, four labeled prints). It is now a `lee` DataFrame from a dict with two gaps; `.fillna` is introduced in a "New in this cell" note and used to build `by_mean` and `by_median` columns; `.ffill()` makes `by_previous`. The old `fillna` method-name fill-in is now a typed prediction of day 7's forward-fill value (44).
- **Why it fits:** everyday, no jargon, gaps have obvious real-world causes.

## Vocabulary list
NaN, drop, fill, flag, mode, forward-fill.

## Activities (10 graded items)
flip cards; 2 recall quizzes; 3 predict-before-run quizzes; typed prediction (day 7 forward-fill = 44); drag sort into Drop/Fill/Flag (6 chips, specific hint per chip); new-situation quiz; reflection box (optional AI prompt).

## Syntax taught early ("New in this cell")
`dropna(subset=)`, `pd.DataFrame({...})` (Day 3) with None, `.fillna(value)` into new columns, `.mode()[0]`, `.ffill()`. All are Day 7 deck syntax or earlier.

## Video pick
- **Drop rows with missing values with pandas dropna (subset, axis, thresh) — Kimberly Fessel, 10:41** (641 s verified with curl; default caption track English; oEmbed 200).
- https://www.youtube.com/watch?v=hfA6R2TWGfE
- **Why:** focused on `dropna` and `subset=`, the reading's main new syntax; optional, not timed.

## Time (honest count)
Prose ~1,000 words + code ≈ 7 min; flip 2; 7 quiz-style items × 50 s ≈ 6; drag sort 2; reflection 2 → ~19 min.

## Additional resources
- pandas docs: Working with missing data
- W3Schools: Pandas Cleaning Empty Cells
