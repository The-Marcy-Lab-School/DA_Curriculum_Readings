# Content brief: One Row Per Group

- **Quest / LiveLab(s):** Mod 2 Day 3, "Real Pandas Fundamentals II - Group & Create Columns". Never printed in the reading itself.
- **Skill tags (from taxonomy.json):** eda-statistics, python-data-tools
- **Skills (skills.json):** data-mining, pandas-dataframes (see the note in the Day 2 brief about pandas-dataframes' `modules` list)
- **Audience:** data-only
- **Complexity flag:** standard, 20-minute maximum
- **Estimated time:** ~18–20 minutes, video excluded. Honest count: flip cards 2 + 9 quiz-type items x 50 s (7.5; includes 1 typed prediction and a select-all) + reflection 2 + baseline 8 (four idea blocks) = 19.5 min.

## Sources
- Day 3 deck, code-along, Data Challenge Day 3 steps and project files, via the 2026-11-18 scratch context.

## Avoid
- **LiveLab deck / code-along:** Palmer Penguins, bill ratio, size class heavy/standard, species scientific-name lookup and its accent mismatch; average order value by region; coins in piles; revenue per customer / cost per unit; flagging transactions over a threshold; editing a printed spreadsheet; store/product/ZIP lookups; class roster vs. email list; NY vs New York, Acme case mismatches.
- **Data Challenge:** college majors, pay by field, pay spread, STEM lookup, `pay_band()`.
- **Project:** flood claims, ED wait times, building permits, consulting hours.

## Align
- groupby (split, apply, combine), aggregation, chained assignment (two-step set; pandas 3 never changes df; ChainedAssignmentError is a warning), merge (match on a shared key), lookup table, derived column. Also: `count` counts non-blank values; mean skips blanks silently; a filter gives you a copy; `.copy()` does not fix chained assignment; `.loc[rows, col] = value` in one step; `how="left"` keeps every row and unmatched rows get NaN; two after-merge checks (rows before/after, NaN count); keys match exactly.

## Prepare
- `groupby(...)[col].agg(["count","mean","median"]).round(1)` and reading count next to mean; a derived ratio column; a constant column then one-step `.loc` with a saved mask; a dict-of-lists lookup, left merge, and both checks. Project roadblock defused: changes that land on a copy instead of `df`.
- **Confirmed:** no Data Challenge step worked, no project part solved (no bool lookup column, no sorting of an agg table, no `.apply`/`.value_counts`).

## Real-world scenario
- **Domain:** nonprofit & social impact / healthcare. Blood drives at a library, a community center and a fire station (`drives.csv`, 8 rows x 4 columns, one blank `units`). "A unit is one bag of donated blood" is explained once. Lookup adds each site's neighborhood; "Firehouse" vs "Fire Station" is the key mismatch. Wrap-up: a new Rec Center site missing from the lookup.
- Kept from the previous version; examples changed to notebook cells and the missing deck content (Copy-on-Write, `.loc`, merge) added.

## Activity rotation
- [x] flip cards (6) - [x] predict-then-run on notebook cells - [x] typed prediction (count of "yes" after one-step `.loc`; was a fill-in for `loc`, changed in review because the "New in this cell" box and the warning text gave the name away) - [x] select-all - [x] reflection (Code Walkthrough frame: purpose, logic, output, edge case; optional AI prompt)

## Video pick
- **Title/channel/length:** "Group By and Aggregate Functions in Pandas", Alex The Analyst, 11:05 (verified; default captions en; embeddable).
- **Link:** https://www.youtube.com/watch?v=VRmXto2YA2I
- **Why:** beginner-paced groupby/agg walkthrough by a data-analyst channel.

## Interview relevance
- "What does .groupby() do, step by step?" answered with purpose, logic, output, edge case.

## Additional resources
- pandas intro tutorials: summary statistics, new columns, combining tables; Copy-on-Write user guide.
