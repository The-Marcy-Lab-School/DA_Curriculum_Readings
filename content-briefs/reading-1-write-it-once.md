# Content brief: Write It Once — A Cleaning Function in pandas

- **Quest / LiveLab(s):** Day 8 LiveLab "Writing a Real Cleaning Function" (Mod 2 quest list not yet populated). Never printed in the reading.
- **Skill tags (from taxonomy.json):** eda-statistics
- **Skills (skills.json):** data-cleaning-imputation
- **Audience:** data-only
- **Complexity flag:** standard (functions content, held to the 20-minute max)
- **Estimated time:** ~18–20 minutes (video excluded)

## Sources (see SKILL.md, "Source of truth")
- **Drive decks read:** via the Mod 2 source digest compiled 2026-11-18 from the live Drive deck, labs copy and projects copy in `.sources/`.
- **Labs / projects commit:** not recorded (`_sources` baselines null).
- **Deck vs. deck_spec:** slide SAY simplifies Copy-on-Write; the reading uses the precise version (rebinding first line protects the caller).

## Avoid
- **LiveLab deck:** earthquake feed and its numbers; hand-made magnitude Series with "n/a"/"unknown"; a state label spelled three ways; penguin islands; recipe-card analogy; sign-up sheets matched by email; survey ages; "NY"/"ny" pivot; report-rows-vs-source interview line. Function/variable names from the deck (`clean_number`, `clean_label`, `clean_event_date`, `export_a`, `stacked`, `newest`, `raw_mags`).
- **Data Challenge:** museum artists, two exports, ID vs name key, year placeholders and "n.d.", nationality spellings; ten-ages toolkit example.
- **Project:** flood claims, ER wait times, building permits, consulting hours.

## Align
- **Deck definitions:** duplicate row; key column; coerce (`errors="coerce"` turns unconvertible values into NaN); reusable function (called 2+ times on different inputs).
- Dedupe on the key, not the whole row (a re-sent record can carry a changed field). Coerce creates new missing data to count. `.mean()` skips NaN silently. Strip and lower fix different problems. A function whose first line makes a new table leaves the caller's table alone; without it, column assignment changes the caller's table even in pandas 3.

## Prepare (on its own examples)
- Stack two overlapping lists with a fresh index; row counts before/after.
- Notice a column loaded as `str` because of one text value; find it; coerce; count NaN.
- Whole-row vs key duplicate counts disagree (0 vs 2) and why.
- `value_counts()` before/after `.str.strip().str.lower()`.
- One-job helpers plus a whole-table function, called on two inputs, with an `assert`; prove the input is unchanged (dtype check).
- **Confirmed:** works no Data Challenge step; solves no part of the project.

## Real-world scenario
- **Domain:** small business ops.
- **Scenario:** Terra Bean coffee shop's monthly bean-delivery lists (May and June) from farms; June repeats two deliveries, spells Kenya three ways, says "TBD" for one count. Deliveries, not daily cafe sales.
- **Why it fits:** monthly lists that drift is a familiar small-business chore.

## Vocabulary list
Duplicate row, key column, coerce, reusable function.

## Activities (10 graded items)
flip cards; 2 recall quizzes (`.strip().lower()`, flag); 3 predict-before-run quizzes; fill-in (`strip`); select-all (5 statements, specific hints); new-situation quiz; reflection box.

## Syntax taught early ("New in this cell")
`pd.concat(..., ignore_index=True)`, `.str` methods; `assert` (Mod 1 recall, one line). `value_counts` explained in one sentence (first deck use is Day 8). All Day 8 or earlier.

## Video pick
- **How do I find and remove duplicate rows in pandas? — Data School, 9:48** (588 s verified with curl; default caption track English; oEmbed 200).
- https://www.youtube.com/watch?v=ht5buXUMqkQ
- **Why:** reputable channel; covers `duplicated`, `drop_duplicates`, `subset=` and `keep=`.

## Time (honest count)
Prose ~950 words + more code ≈ 7.5 min; flip 2; 7 quiz-style items ≈ 6; fill-in ≈ 1; reflection 2 → ~18.5 min.

## Additional resources
- pandas docs: DataFrame.drop_duplicates; pandas docs: to_numeric; W3Schools: Pandas Removing Duplicates.
