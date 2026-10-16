# Content brief: Meet the Objects — Defining a Class From Scratch

- **Quest / LiveLab(s):** Quest 1.8 Meet the Objects (Days 13–15). Day 13 LiveLab "OOP: Building a Class With a Partner"; Day 15 solo class-design lab. Never printed in the reading itself.
- **Skill tags (from taxonomy.json):** oop-design
- **Audience:** data + software engineering
- **Complexity flag:** complex (OOP)
- **Estimated time:** 46 minutes (pill ~44–47). Revised from 48 when the video changed from 12:17 to 10:04.

## Sources (see SKILL.md, "Source of truth")
- **Drive decks read:** "OOP: Building a Class With a Partner" (slides + speaker notes), read 2026-10-16.
- **Labs repo commit:** 09f39c9a65 (`module-1-python-foundations/`)
- **Projects repo commit:** cb69b4fe2a (`projects/Module1_ProgrammingFundamentals/`)
- **Deck vs. local deck_spec disagreements:** not checked; the Drive deck was available and used.

## Avoid (already used elsewhere in the module)
- **LiveLab deck:** board-game class; analogies: house blueprint, cookie cutter, new-hire form, warehouse reorder light, shopping carts, name tag.
- **Code-along:** board-game class, low-stock check method.
- **Data Challenge:** bike-share stations; parallel-list station report.
- **Solo lab:** tool-lending library.
- **Project:** inventory trackers (bookstore, restaurant kitchen, health clinic, athletic wear); office-supply demo domain.

## Align
- **Deck definitions this reading must agree with:** class = the pattern every object is built from; object = instance; `__init__` = setup that runs once at creation; attribute = stored data; `self` = the specific object the method was called on; arguments fill parameters in order, after `self`; reading an attribute later does not re-run `__init__`.
- **Quest Vocabulary Mission terms this reading owes:** OOP, Class, Object, Instance, Attribute, Method, `self`, `__init__` (`__str__`/`__repr__` are carried by the other Quest 1.8 reading).

## Prepare (what this reading rehearses, on its own examples)
- **Data Challenge move:** an independence check that starts from two objects that agree → interview question (section 14) on choosing two parking tickets with the same fine.
- **Project roadblock / common mistake defused:** parallel lists falling out of sync (common mistake #3) → section 15 quiz on a three-goal list pair; `__init__` running only once (roadblock) → section 9; tying attributes to a stated need → section 6 framing and section 14 callout.
- **Confirmed:** the reading works no Data Challenge step and solves no part of the project. It designs no inventory class and no class for any lab scenario.

## Real-world scenario for this reading
- **Domain:** personal finance
- **Scenario:** a budgeting app tracking several savings goals per user (`SavingsGoal`, `BudgetCategory`).
- **Why it fits:** most Fellows have saved toward something, and the separate-goals problem shows why objects store their own data.

## Prereq recall
- Function parameters, dict lookup, grouping values as one unit.

## Vocabulary list
- OOP, class, object/instance, attribute, method, `__init__`, `self`.

## Activity rotation
- [x] flip cards
- [x] quiz (radio) with feedback on every choice
- [x] select-all-that-apply
- [x] drag-and-drop matching
- [x] order-the-steps
- [x] fill-in-the-blank code
- [x] video reflection prompt

## Video pick
- **Title/channel/length:** Python Object Oriented Programming in 10 minutes — Bro Code, 10:04 (verified; English caption track; embeddable)
- **Link:** https://www.youtube.com/watch?v=q2SGW2VgwAM
- **Why this one:** replaces 1XE-_s4ZBT8, which failed QA (auto-dubbed, first caption track Arabic). Covers `__init__`, `self`, methods and two objects from one class.

## Interview relevance
- "Design a class for X": tie each attribute to the stated need, and prove two objects don't affect each other.

## AI integration
- Random AI-brainstormed reflection prompt in section 15.

## Additional resources
- Python docs Classes, W3Schools Classes/Objects, GeeksforGeeks, Python Tutor (unchanged).

## Critical thinking / summary questions
- `Package` delivered-flag question; free response on why two objects can hold different values.

## Thinking ahead
- Printing objects readably; finding one object among thousands.
