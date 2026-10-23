# Content brief: Who Can See This Variable? (Local vs. Global Scope)

- **Quest / LiveLab(s):** Quest 1.2 "Build It Once, Use It Again" (Days 3-5). LiveLabs: Functions, Parameters & Return Values; Local vs. Global Variables & Scope; Recall & Practice. Never printed in the reading.
- **Skill tags (from taxonomy.json):** python-fundamentals
- **Skills (skills.json):** functions-modular-programming
- **Audience:** data + software engineering
- **Complexity flag:** complex (functions / scope)
- **Estimated time:** 22 minutes (pill: ~20-23), cut from 42 in the 2026-10-23 content pass; the optional video is excluded

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
- **Data Challenge move:** read a traceback and state the scope rule behind UnboundLocalError: worked four-step rule with `show_count.py`, then predict `issue_ticket.py`, then the parameter fix.
- **Data Challenge move:** compare a function that reads an outside name with one that takes it as a parameter: `ticket_cap_global.py`, `late_fee.py`/`late_fee_fixed.py`, fill-in `ticket_cap_param.py`.
- **Project roadblock defused:** believing a variable defined inside a function is visible outside it: `ticket_outside.py` and the tow-cost question.
- **Confirmed:** the reading works no Data Challenge step and solves no part of the project.

## Structure (2026-10-23 content pass, from the learner audit)
1. Where a name can be used (hook, `ticket_price.py`, scope/local/global defined, diagram)
2. Recall: 2 questions (return; argument)
3. A local name is gone after return (call steps, predict `ticket_outside.py`, how to read a traceback)
4. Reading a global hides what a function needs (`min()` note, `ticket_cap_global.py`, `late_fee.py` + fix, fill-in)
5. Assigning makes a name local (worked rule, predict `issue_ticket.py`, fix question + fixed file)
6. Mixed check: drag sort on `ticket_cap_global.py` names (the old `tickets_issued` chip contradicted the UnboundLocalError section and was removed)
7. Wrap-up: 3 bullets, tow-cost question, one interview line, one next-idea line
8. Reflection; 9. Key terms review; 10. Go further (optional video)
- **Syntax taught here (ledger):** reading a traceback (last line first), `min()`.
- **Graded items:** 12 (was 19). Cut: vocab-first section, trace stepper, order-the-steps, select-all, interviews section, thinking ahead, typed regex predictions (now multiple choice), video reflection.

## Real-world scenario for this reading
- **Domain:** public sector
- **Scenario:** city parking tickets: `ticket_price` with local `ticket_cost`, a global `price_cap`, a ticket counter, a late fee, and a tow-cost question.
- 2026-10-23: renamed the `fine` variable to `ticket_cost` (the word also means "OK"), `daily_fine_cap` to `price_cap`; replaced the phone data overage question with a tow-cost question in the same scenario.

## Vocabulary list
- Key terms review cards at the end: Scope, Local Variable, Global Variable, plus NameError and UnboundLocalError

## Activity rotation
- [x] quiz (radio) with feedback on every choice, shuffled by the kit
- [x] fill-in-the-blank code (says which box is wrong)
- [x] drag-and-drop sort
- [x] flip cards (review)
- [x] reflection box

## Video pick
- **Placement:** optional "Go further" section, plain embed, not in the time estimate or the score.
- **Title/channel/length:** Python Parameters vs Global vs Local Variables (Visual Explanation) — Data with Baraa, 10:47 (647 s, verified 2026-10-16)
- **Link:** https://www.youtube.com/watch?v=3TxcPKu9ec4
- **Why this one:** visual, data-focused channel, matches the parameter/local/global split.

## Interview relevance
- One line in the wrap-up: why a copied function broke, fixed with a parameter.

## AI integration
- Optional AI-brainstormed prompt button inside the reflection box.

## Additional resources
- Python docs: Scopes and Namespaces; W3Schools: Global Variables; GeeksforGeeks: Global and Local Variables; Python Tutor.

## Critical thinking / summary questions
- Tow cost: printing a local variable after the call.
