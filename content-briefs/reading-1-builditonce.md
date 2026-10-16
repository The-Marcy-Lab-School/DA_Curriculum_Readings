# Content brief: Build It Once, Use It Again (Functions, Parameters & Return Values)

- **Quest / LiveLab(s):** Quest 1.2 "Build It Once, Use It Again" (Days 3-5). LiveLabs: Functions, Parameters & Return Values; Local vs. Global Variables & Scope; Recall & Practice. Never printed in the reading.
- **Skill tags (from taxonomy.json):** python-fundamentals
- **Skills (skills.json):** functions-modular-programming
- **Audience:** data + software engineering
- **Complexity flag:** complex (functions)
- **Estimated time:** 49 minutes (pill: ~48-52), unchanged by the 2026-10-16 revision

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
- **Data Challenge move:** predict a function's result by hand before running it → section 9 predictions on `energy_cost`.
- **Data Challenge move:** spot that a print-only function hands back None → section 10.
- **Project roadblock / common mistake defused:** code that runs without an error can still be wrong → section 16 (`return` indented inside a loop). One long script vs. functions → section 12.
- **Confirmed:** the reading works no Data Challenge step and solves no part of the project.

## Real-world scenario for this reading
- **Domain:** business ops / utilities
- **Scenario:** a small electric co-op bills each household monthly: kWh used times price per kWh, written once as `energy_cost(kwh_used, price_per_kwh)`.
- **Why it fits:** every Fellow has seen a utility bill; the math is one multiplication, so the function shape stays in front.
- Replaced on 2026-10-16: the community health clinic co-pay scenario (overlapped a project scenario).

## Vocabulary list
- function, define, call, parameter, argument, return value

## Activity rotation
- [x] flip cards
- [x] quiz (radio) with feedback on every choice
- [x] select-all-that-apply
- [x] drag-and-drop matching (print vs. return)
- [x] order-the-steps (what happens on a call)
- [x] fill-in-the-blank code
- [x] trace stepper
- [x] video reflection prompt

## Video pick
- **Title/channel/length:** Functions in Python are easy — Bro Code, 10:38 (638 s, verified 2026-10-16)
- **Link:** https://www.youtube.com/watch?v=89cGQjB5R4M
- **Why this one:** reputable channel, covers define vs. call, parameters and return.

## Interview relevance
- "Can you turn this into a function?"; "What does this return if the condition is never met?"; data roles: a function that takes a column and threshold.

## AI integration
- AI-brainstormed reflection prompt button in section 16.

## Additional resources
- Python docs: Defining Functions; W3Schools: Python Functions; Python Tutor.

## Critical thinking / summary questions
- Bakery order totals: one function that returns the total vs. printing vs. hardcoding.
- If you inherited an unfamiliar function, what would you check first to find its parameters and return value?
