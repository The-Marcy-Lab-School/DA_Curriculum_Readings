# Content brief: Choose, Repeat, Trace

- **Quest / LiveLab(s):** Quest 1.1 Trace the Path (Days 1-2), Part 1. LiveLab: Control Flow & Conditionals (Day 1). Never printed in the reading itself.
- **Skill tags (from taxonomy.json):** python-fundamentals
- **Audience:** data + software engineering
- **Complexity flag:** standard
- **Estimated time:** 22 minutes (2026-10-23 content pass: was 44; video now optional and excluded)

## Sources (see SKILL.md, "Source of truth")
- **Drive decks read:** Control Flow & Conditionals (slides + speaker notes), read 2026-10-16 after that day's edits. Nested Loops & Conditionals read too, for the quest-wide avoid-list.
- **Labs repo commit:** 09f39c9a65 (`module-1-python-foundations/`)
- **Projects repo commit:** cb69b4fe2a (`projects/Module1_ProgrammingFundamentals/`)
- **Deck vs. local deck_spec disagreements:** not checked; the Drive connectors worked, so deck_spec was not used.

## Avoid (already used elsewhere in the module)
- **LiveLab deck(s):** traffic light, referee call, dish stack, song on repeat, temperature check, scores list with a 90 cutoff, cashier scan, upload retry, stock-level labels, shelf restock, expense-report flagging, count-to-3 while loop
- **Code-along:** temperature, scores, range(5), count while loop
- **Data Challenge:** community-center volunteer shift log
- **Project:** inventory transaction validation (four store scenarios), earmarked demo domains (board games, office supplies), grade tracking

## Align
- **Deck definitions this reading must agree with:** conditional (one decision; exactly one branch of an if/elif/else runs, never zero with an else); loop (for repeats once per item, while repeats until False); iteration (one pass); loop body (code that repeats); range() (starts at 0, stops before n); off-by-one (boundary miscount, Python raises nothing). Reading now adds a range() flip card, and notes that a chain with no else can run no branch.
- **Quest Vocabulary Mission terms this reading owes:** Conditional, Iteration, Loop, Loop Body, Off-by-One Error (Nested Loop is carried by the Part 2 reading).

## Prepare (what this reading rehearses, on its own examples)
- **Data Challenge move:** predict a count where one value sits exactly on the threshold → the `runtimes.py` question includes 150 against `> 150`.
- **Data Challenge move:** catch a silent off-by-one → `screen_check` section: trace first/last iteration, and compare the printed count with the expected count.
- **Data Challenge move:** follow one variable through every pass → `countdown.py` while trace, with `minutes = minutes - 10` explained.
- **Project roadblock / common mistake defused:** "code that runs without an error must be correct" → off-by-one section and the debug-by-tracing question.
- **Confirmed:** the reading works no Data Challenge step and solves no part of the project.

## Real-world scenario for this reading
- **Domain:** business ops (movie theater showtimes)
- **Scenario:** one theater throughout: the slot script (`runtimes.py`), lobby screen, showtimes, seven-screen check, lobby countdown; the new-situation question is a sold-out check in the same theater.
- **Why it fits:** everyday, 6th-grade words, nowhere in the deck, Data Challenge or project.

## Prereq recall
- Replaced by a "Reading Python" primer (first Python a Fellow reads): `name = value`, `print(x)` / `print(a, b)`, numbers vs strings, comparison operators give True/False, lists, `#` comments, `:` + indentation owns a block, what running a file means. One file (`theater_notes.py`) and two questions (string vs number; `print(runtime > 150)`).

## Vocabulary list
- Bolded at first use in the text: variable, list, tracing, conditional, branch, loop, iteration, loop body, off-by-one error
- Key-terms review flip cards at the end: Conditional, Branch, Loop, Iteration, Loop body, range(), Off-by-one error

## Activity rotation
- [x] flip cards (key-terms review, at the end)
- [x] quiz (radio) with feedback on every choice, predict-then-run on every file
- [x] select-all-that-apply (mixed check)
- [ ] drag-and-drop matching (cut 2026-10-23)
- [ ] order-the-steps (cut 2026-10-23)
- [x] fill-in-the-blank code (one typed answer: the `screen_check.py` stop number, numbered steps above the box)
- [ ] code/terminal simulator
- [ ] pseudocode-from-a-scenario
- [ ] video reflection prompt (cut; video is optional "Go further")
- Graded items: 12 (the optional video is a plain embed, unscored)

## Video pick
- **Title/channel/length:** Python Tutorial for Beginners 7: Loops and Iterations - For/While Loops — Corey Schafer, 10:14 (verified 2026-10-16)
- **Link:** https://www.youtube.com/watch?v=6iF8Xb7Z3wQ
- **Placement:** optional "Go further" section at the end; not in the time estimate.

## Interview relevance
- One sentence in the wrap-up: "trace this and say what prints" as a common first question.

## AI integration
- Optional AI-brainstormed question button inside the reflection box.

## Additional resources (not counted in the time estimate)
- Python Tutor; W3Schools If...Else, For Loops, While Loops

## Critical thinking / summary questions
- New situation (same theater): a sold-out check over every showing needs a loop + a conditional.
- One reflection: your tracing habit (sentence starter given).

## Thinking ahead
- One sentence in the wrap-up: nested loops, then a reusable pattern.
