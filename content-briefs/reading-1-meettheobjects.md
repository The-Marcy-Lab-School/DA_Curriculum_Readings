# Content brief: Meet the Objects — Defining a Class From Scratch

- **Quest / LiveLab(s):** Quest 1.8 Meet the Objects (Days 13–15). Day 13 LiveLab "OOP: Building a Class With a Partner"; Day 15 solo class-design lab. Never printed in the reading itself.
- **Skill tags (from taxonomy.json):** oop-design
- **Audience:** data + software engineering
- **Complexity flag:** complex (OOP)
- **Estimated time:** 21 minutes (pill ~20–23), excluding the optional video. Cut from 46 in the 2026-10-23 content pass (learner audit). Read FIRST in Quest 1.8.

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
- **Data Challenge move:** an independence check (change one object, show the other kept its value) → `goal_change.py`.
- **Project roadblock defused:** `__init__` runs only once → section 6 text and select-all; tying attributes to a stated need → section 4 framing. The parallel-list bug section was cut in the content pass.
- **Confirmed:** the reading works no Data Challenge step and solves no part of the project.

## Real-world scenario for this reading
- **Domain:** personal finance
- **Scenario:** a budgeting app tracking savings goals (`SavingsGoal`: Bike Fund, Trip Fund, Phone Fund) and spending categories (`BudgetCategory`). New-situation question stays in the scenario (`add_money` method).
- **Why it fits:** most Fellows have saved toward something, and the separate-goals problem shows why objects store their own data.

## Prereq recall
- Function with a parameter (`greet.py`), dict lookup (`goal_dict.py`). Each shows its output after answering.

## Structure (content pass, 2026-10-23)
1. Hook + problem + SVG (class, object, instance, OOP bolded at first use)
2. Recall (2)
3. `__init__`, `self`, attribute + the four creation steps → `savings_goal.py` predict/run
4. Fill-in `__init__` (`budget_category.py`), numbered steps, run unlocks when solved
5. Methods and `self` → `two_goals.py` predict/run, self panels shown after answering
6. Independence → `goal_change.py` predict/run
7. Mixed check (select-all, 5 statements)
8. Wrap-up: 3 bullets, `add_money.py` new situation, one interview line, one next-idea line
9. Reflection + optional AI prompt
10. Key terms review flip cards (end)
- Optional video, resources, score/submit block (unchanged).
- Graded items: 10 (was 19). Cut: order-steps (moved into section 3 as a list), drag sort, method/attribute quiz, `__init__` misconception quiz, interview section, parallel-list debug section, video reflection, thinking ahead.

## Vocabulary list
- OOP, class, object/instance, attribute, method, `__init__`, `self` (bolded at first use; flip cards at the end for review).

## Video pick
- **Title/channel/length:** Python Object Oriented Programming in 10 minutes — Bro Code, 10:04 (verified; English caption track; embeddable)
- **Link:** https://www.youtube.com/watch?v=q2SGW2VgwAM
- **Why this one:** replaces 1XE-_s4ZBT8, which failed QA (auto-dubbed, first caption track Arabic). Covers `__init__`, `self`, methods and two objects from one class.
- **Placement:** optional \"Go further\" section at the end; not scored, not in the time estimate.

## Interview relevance
- One sentence in the wrap-up: choose attributes and methods, then show two objects don't affect each other.

## AI integration
- Optional AI-brainstormed prompt button inside the reflection box.

## Additional resources
- Python docs Classes, W3Schools Classes/Objects, Python Tutor.
