# Content brief: Two Ways to Introduce an Object

- **Quest / LiveLab(s):** Quest 1.8 Meet the Objects (Days 13–15). Day 14 LiveLab "Magic Methods — What __init__/__str__/__repr__ Actually Mean". Never printed in the reading itself.
- **Skill tags (from taxonomy.json):** oop-design
- **Audience:** data + software engineering
- **Complexity flag:** complex (OOP)
- **Estimated time:** 22 minutes (pill ~21–24), excluding the optional 13:50 video. Cut from 48 in the 2026-10-23 content pass (learner audit). Read SECOND in Quest 1.8, after Meet the Objects.

## Sources (see SKILL.md, "Source of truth")
- **Drive decks read:** "Magic Methods — What __init__/__str__/__repr__ Actually Mean" (slides + speaker notes), read 2026-10-16.
- **Labs repo commit:** 09f39c9a65 (`module-1-python-foundations/`)
- **Projects repo commit:** cb69b4fe2a (`projects/Module1_ProgrammingFundamentals/`)
- **Deck vs. local deck_spec disagreements:** not checked; the Drive deck was available and used.

## Avoid (already used elsewhere in the module)
- **LiveLab deck:** board-game class; analogies: nickname vs. ID name, storefront sign vs. legal name, support-dashboard customer record, inventory report.
- **Code-along:** board-game `__str__`/`__repr__`, list-of-objects print.
- **Data Challenge:** bike-share stations; other Mod 1 datasets incl. food-pantry donations and volunteer shifts.
- **Solo lab:** tool-lending library, volunteer coordinator.
- **Project:** inventory trackers (bookstore, restaurant kitchen, health clinic, athletic wear); office-supply demo domain.

## Align
- **Deck definitions this reading must agree with:** magic method = special Python method; `__str__` = friendly display for a person, used by `print()`/`str()`; `__repr__` = precise representation for debugging, used by `repr()`, inside lists, and as the fallback when `__str__` is missing.
- **Quest Vocabulary Mission terms this reading owes:** `__str__`, `__repr__` (the rest are carried by the other Quest 1.8 reading).

## Prepare (what this reading rehearses, on its own examples)
- **Data Challenge move:** predict each display path before running it (print, `repr()`, list, fallback) → sections 3–5, each a predict-then-run file.
- **Project roadblock defused:** testing only the happy path → the list case and the fallback case.
- **Confirmed:** the reading works no Data Challenge step and solves no part of the project.

## Real-world scenario for this reading
- **Domain:** pet-sitting app (everyday services). Changed from a vet clinic, which sat too close to the off-limits clinic project domain.
- **Scenario:** a pet-sitting app prints `Pet` objects for owners (friendly) and for programmers (exact). Fill-in uses a `Visit` class. New-situation question stays in the scenario: a list of `Sitter` objects.
- **Why it fits:** two real audiences for one object, without leaning on any lab domain.

## Prereq recall
- Attribute access (`pet_check.py`), f-strings (`feed_note.py`). `__init__` is assumed from the first Quest 1.8 reading, never named.

## Structure (content pass, 2026-10-23)
1. Hook + one object, two readers + SVG (default representation, magic method bolded)
2. Recall (2)
3. `__str__`: `pet_default.py` (live output, address varies) then `pet_str.py` predict/run
4. `__repr__`: quotes-inside-f-string note, `pet_repr.py` predict/run, fill-in `visit.py` with numbered steps; checker requires the quotes and names the wrong piece
5. Which one runs: rule grid, `pet_list.py` and `pet_fallback.py` predict/run
6. Mixed check: drag match (5 chips, incl. fallback)
7. Wrap-up: 3 bullets, `sitters.py` new situation, one interview line, one next-idea line (`__eq__`)
8. Reflection + optional AI prompt
9. Key terms review flip cards (magic method, `__str__`, `__repr__`, default representation). REPL card dropped.
- Optional video, resources, score/submit block (unchanged).
- Graded items: 11 (was 20). Cut: `__init__` and "why two" recall, default-predict quiz, select-all, order-steps, simulator, interview section, REPL debug question, video reflection, thinking ahead.

## Vocabulary list
- magic method (dunder), `__str__`, `__repr__`, default representation (bolded at first use; flip cards at the end for review).

## Video pick
- **Title/channel/length:** Python OOP Tutorial 5: Special (Magic/Dunder) Methods — Corey Schafer, 13:50 (verified; English; embeddable)
- **Link:** https://www.youtube.com/watch?v=3ohzBxoFHAY
- **Why this one:** reputable, directly on topic. Over the 12-minute guide (QA warns); kept as a deliberate pick.
- **Placement:** optional \"Go further\" section at the end; not scored, not in the time estimate. Open question: still 13:50, over the ~12-minute guide.

## Interview relevance
- One sentence in the wrap-up: who reads each method, the fallback rule, and "write `__repr__` if only one".

## AI integration
- Optional AI-brainstormed prompt button inside the reflection box.

## Additional resources
- Python data model docs, GeeksforGeeks `__repr__`, W3Schools string formatting.
