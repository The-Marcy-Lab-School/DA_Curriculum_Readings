# Content brief: Look Before You Filter

- **Quest / LiveLab(s):** Mod 2 Day 2, "Real Pandas Fundamentals I - Inspect & Filter". Never printed in the reading itself.
- **Skill tags (from taxonomy.json):** eda-statistics, python-data-tools
- **Skills (skills.json):** pandas-dataframes (its `modules` list names module 4 only; the definition fits this reading exactly, so it is used here. Add module 2 to that entry if you agree.)
- **Audience:** data-only
- **Complexity flag:** standard, 20-minute maximum
- **Estimated time:** ~18–20 minutes, video excluded. Honest count: flip cards 2 + 10 quiz-type items x 50 s (8.3; includes 2 typed fill-ins and a select-all) + reflection 2 + baseline 7 = 19.3 min.

## Sources
- Day 2 deck, code-along, Data Challenge Day 2 steps and project files, via the 2026-11-18 scratch context.

## Avoid
- **LiveLab deck / code-along:** Palmer Penguins; tips recall; team roster, cooking show, weekly report, 10,000 vs 9,212 orders, price column with $/n/a, phone "call me" field, party guest list RSVP, duplicated sale/forms twice, bouncer, Brooklyn clients, healthcare clients over $10k, apartment search, top customers / slowest routes.
- **Data Challenge:** college majors starting pay and its columns, flyer, low-unemployment filter, top-ten pay.
- **Project:** flood claims, ED wait times, building permits, consulting hours.

## Align
- DataFrame, dtype (`str`/`float64`/`int64`; pandas 3 shows `str`, `object` is the old label), kernel, boolean filter, cell, Restart & Run All; NaN is a float so one blank makes a number column float64; `np.int64(1)` is just 1; `.shape` is rows then columns; run order not page order; `&` with parentheses and the TypeError without them; `&` narrows, `|` widens; zero problems is still a finding; notebooks explore, .py files ship (said in plain words).

## Prepare
- Four inspect checks and reading each output in words; two-condition filter with `&` and parentheses; `len()` of a filter; sort descending + double-bracket columns + `.head(3)`; a specific, checkable data-quality question (reflection, QAR frame).
- **Confirmed:** no Data Challenge step worked, no project part solved. The `df[df["col"].isna()]` hint pattern from the challenge is deliberately not shown.

## Real-world scenario
- **Domain:** nonprofit & social impact. A food bank's donation intake log (`intake.csv`, 8 rows x 4 columns) with one blank weight and one donation logged twice. The manager asks how much produce came into Eastside. Wrap-up: the Westside site sends next month's file.
- Kept from the previous version; frame changed from .py files to notebook cells.

## Activity rotation
- [x] flip cards (6) - [x] predict-then-run on notebook cells (data-after gates) - [x] typed prediction (duplicate count) - [x] typed prediction (rows kept by the `&` filter; was a fill-in for `&`, changed in review because the prose above it gave the symbol away) - [x] error prediction (NameError, TypeError) - [x] select-all - [x] reflection (QAR starter, optional AI prompt)

## Video pick
- **Title/channel/length:** "Boolean indexing in Pandas made simple", Reuven Lerner, 8:23 (verified; default captions en; embeddable).
- **Link:** https://www.youtube.com/watch?v=v5pJfu-yn-0
- **Why:** focused on the two-step mask-then-filter idea. The page warns it may show `object` for text.

## Interview relevance
- "How do you filter a DataFrame on multiple conditions?" Answer names `&`, the parentheses and why.

## Additional resources
- pandas: select a subset of a DataFrame; the pandas 3 string dtype migration page; Jupyter docs getting started.
