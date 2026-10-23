# Content brief: Build It Once, Use It Again (Functions, Parameters & Return Values)

- **Quest / LiveLab(s):** Quest 1.2 "Build It Once, Use It Again" (Days 3-5). LiveLabs: Functions, Parameters & Return Values; Local vs. Global Variables & Scope; Recall & Practice. Never printed in the reading.
- **Skill tags (from taxonomy.json):** python-fundamentals
- **Skills (skills.json):** functions-modular-programming
- **Audience:** data + software engineering
- **Complexity flag:** complex (functions)
- **Estimated time:** 21 minutes (pill: ~20-23), cut from 49 in the 2026-10-23 content pass; the optional video is excluded

## Sources (see SKILL.md, "Source of truth")
- **Drive decks read (2026-10-16):** Functions, Parameters & Return Values; Local vs. Global Variables & Scope; Recall & Practice: Loops, Conditionals, Functions (slides and speaker notes).
- **Labs repo:** local `.sources/` copy as of 2026-10-16 (`module-1-python-foundations/`)
- **Projects repo:** local `.sources/` copy as of 2026-10-16 (`projects/Module1_ProgrammingFundamentals/`)
- **Deck vs. local deck_spec disagreements:** not checked; the Drive decks were read directly.

## Avoid (already used elsewhere in the module)
- **LiveLab decks:** recipe / banana bread, coffee machine; greet() welcome; double(n); sales-report macro; sign-up form field; mail-merge email; announcing a total vs. typing it in a spreadsheet; area(3, 4); count_passing scores with threshold 70; free shipping at $70; average() accumulator; evens(range(6))
- **Code-along:** greet, greet(name), double
- **Data Challenge:** rec center class sign-ups, sessions, long-booking cutoff, per-member totals, name-case edge case
- **Project:** bookstore, restaurant kitchen, community health clinic / medical supplies, sporting goods; inventory batch files; low-stock cutoff; board-game and office-supply demo domains

## Align
- **Deck definitions:** function = named reusable job; parameter = input placeholder named in the def line; argument = real value passed in at a call; return value = result sent back to the caller. print shows a value; return hands it back; a print-only function returns None. Defining is not calling. Call order: call, parameter gets its value, body runs.
- **Quest Vocabulary Mission terms this reading owes:** Function, Parameter, Argument, Return Value (Local Variable, Global Variable, Scope are carried by the scope reading).

## Prepare
- **Data Challenge move:** predict a function's result by hand before running it: typed predictions on `predict_cost.py`.
- **Data Challenge move:** spot that a print-only function hands back None: `show_cost.py`.
- **Project roadblock defused:** code that runs without an error can still be wrong: `return` indented inside a loop (`week_loads.py`, then the fixed file).
- **Confirmed:** the reading works no Data Challenge step and solves no part of the project.

## Structure (2026-10-23 content pass, from the learner audit)
1. The same math in many places (hook, intro diagram, how the examples run)
2. Recall: 2 predict questions (update a variable; if/elif/else)
3. Define it once, call it many times (`wash_cost.py`, predict `closing_notice.py`)
4. Parameters, arguments, return value (`machine_label.py`, fill-in `visit_total.py`, typed predict `predict_cost.py`)
5. return vs. print (`show_cost.py`, `return_cost.py`, `week_loads.py`)
6. Mixed check (select-all)
7. Wrap-up: 3 bullets, dryer question, one interview line, one next-idea line
8. Reflection (one box, starter, optional AI prompt)
9. Key terms review (flip cards)
10. Go further: optional video, not timed or scored
- **Syntax taught here (ledger):** `+` joining strings, `str()`, f-strings, `+=`, each with a "New in this file" note.
- **Graded items:** 12 (was 22). Cut: separate vocab-first section, order-the-steps, print/return drag, why-split quiz, interviews section, thinking ahead, trace stepper, three extra text boxes.

## Real-world scenario for this reading
- **Domain:** small business
- **Scenario:** a laundromat: loads times price per load, written once as `wash_cost(loads, price_per_load)`; washer labels; closing notice; weekly load total; dryer totals in the new-situation question.
- **Why it fits:** familiar, 6th-grade words, one multiplication keeps the function shape in front.
- Replaced on 2026-10-23: the electric co-op / kWh scenario (unfamiliar words flagged in the learner audit). Earlier, 2026-10-16: the clinic co-pay scenario (project overlap).

## Vocabulary list
- Key terms review cards at the end: Function, Parameter, Argument, Return Value, plus define and call

## Activity rotation
- [x] quiz (radio) with feedback on every choice, shuffled by the kit
- [x] select-all-that-apply
- [x] fill-in-the-blank code (says which blank is wrong)
- [x] typed predictions
- [x] flip cards (review)
- [x] reflection box

## Video pick
- **Placement:** optional "Go further" section, plain embed, not in the time estimate or the score.
- **Title/channel/length:** Functions in Python are easy — Bro Code, 10:38 (638 s, verified 2026-10-16)
- **Link:** https://www.youtube.com/watch?v=89cGQjB5R4M
- **Why this one:** reputable channel, covers define vs. call, parameters and return.

## Interview relevance
- One line in the wrap-up: turn repeated lines into a function that returns its answer.

## AI integration
- Optional AI-brainstormed prompt button inside the reflection box.

## Additional resources
- Python docs: Defining Functions; W3Schools: Python Functions; Python Tutor.

## Critical thinking / summary questions
- Dryer totals: one function that returns the total vs. printing vs. copying the math.
