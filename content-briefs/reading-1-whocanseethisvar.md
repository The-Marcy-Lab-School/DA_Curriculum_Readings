# Content brief: Who Can See This Variable? (Local vs. Global Scope)

- **Quest / LiveLab(s):** Quest 1.2 "Build It Once, Use It Again" (Days 3-5). LiveLabs: Functions, Parameters & Return Values; Local vs. Global Variables & Scope; Recall & Practice. Never printed in the reading.
- **Skill tags (from taxonomy.json):** python-fundamentals
- **Skills (skills.json):** functions-modular-programming
- **Audience:** data + software engineering
- **Complexity flag:** complex (functions / scope)
- **Estimated time:** 42 minutes (pill: ~40-44), unchanged by the 2026-10-16 revision

## Sources (see SKILL.md, "Source of truth")
- **Drive decks read (2026-10-16):** Functions, Parameters & Return Values; Local vs. Global Variables & Scope; Recall & Practice: Loops, Conditionals, Functions (slides and speaker notes).
- **Labs repo:** local `.sources/` copy as of 2026-10-16 (`module-1-python-foundations/`)
- **Projects repo:** local `.sources/` copy as of 2026-10-16 (`projects/Module1_ProgrammingFundamentals/`)
- **Deck vs. local deck_spec disagreements:** not checked; the Drive decks were read directly.

## Avoid (already used elsewhere in the module)
- **LiveLab decks:** sticky note on a desk, mixing bowl; classroom whiteboard, scoreboard; make_total / set_x / set_total; price_with_tax with tax_rate; stores in two states; scratch spreadsheet; formula pointing at another tab; count/add counter; double(n)
- **Code-along:** make_total, price_with_tax / tax_rate
- **Data Challenge:** rec center sign-ups, sessions cutoff, log_signup counter, name-case edge case; food-pantry donations dataset
- **Project:** bookstore, restaurant kitchen, community health clinic / medical supplies, sporting goods; inventory batch files

## Align
- **Deck definitions:** scope = where a variable is visible and usable; local variable = created when its function runs, visible only inside it, gone when it ends; global variable = created outside any function, readable inside functions, exists for the whole program. return sends back a value, not the variable. Globals hide dependencies; parameters show them. Assigning to a name inside a function makes it local for the whole function (UnboundLocalError, a kind of NameError).
- **Quest Vocabulary Mission terms this reading owes:** Local Variable, Global Variable, Scope (Function, Parameter, Argument, Return Value are carried by the functions reading).

## Prepare
- **Data Challenge move:** read a traceback and state the scope rule behind UnboundLocalError → section 7 prediction on `issue_ticket`, section 8 fix without `global`.
- **Data Challenge move:** compare a function that reads an outside name with one that takes it as a parameter → sections 6 and 9 (`daily_fine_cap` becomes a `fine_cap` parameter).
- **Project roadblock defused:** believing a variable defined inside a function is visible outside it → sections 4, 5 and the summary question.
- **Confirmed:** the reading works no Data Challenge step and solves no part of the project.

## Real-world scenario for this reading
- **Domain:** public sector
- **Scenario:** a city parking office's `calculate_fine` function, a daily fine cap, and a ticket counter.
- **Why it fits:** parking tickets are familiar, and the cap gives a natural global to refactor into a parameter.
- Kept on 2026-10-16 (no overlap). Replaced: food-pantry summary question (Data Challenge dataset) with a phone data-plan overage; `double(number)` recall with `hours_parked(minutes)`; the `global`-keyword fill-in with a global-to-parameter fill-in; the "works in my file, breaks in yours" interview question (deck quick-challenge) with a "which global is safe to read" question.

## Vocabulary list
- scope, local variable, global variable, NameError, UnboundLocalError, global keyword

## Activity rotation
- [x] flip cards
- [x] quiz (radio) with feedback on every choice
- [x] select-all-that-apply
- [x] drag-and-drop matching (sort by scope)
- [x] order-the-steps (scope lifecycle)
- [x] fill-in-the-blank code
- [x] trace stepper
- [x] typed predictions
- [x] video reflection prompt

## Video pick
- **Title/channel/length:** Python Parameters vs Global vs Local Variables (Visual Explanation) — Data with Baraa, 10:47 (647 s, verified 2026-10-16)
- **Link:** https://www.youtube.com/watch?v=3TxcPKu9ec4
- **Why this one:** visual, data-focused channel, matches the parameter/local/global split.

## Interview relevance
- Why a function breaks after being moved; how to fix it with a parameter; data roles: notebook functions that read another cell's variables.

## AI integration
- AI-brainstormed reflection prompt button in section 15.

## Additional resources
- Python docs: Scopes and Namespaces; W3Schools: Global Variables; GeeksforGeeks: Global and Local Variables; Python Tutor.

## Critical thinking / summary questions
- Phone data overage: printing a local variable after the call.
- How to tell whether an unfamiliar name in a function is a parameter, local, or global.
