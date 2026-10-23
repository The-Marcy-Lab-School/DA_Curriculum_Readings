# Content brief: When the Crowd Grows — Big-O Intuition

- **Quest / LiveLab(s):** Quest 1.3 When the Crowd Grows (Day 6). LiveLab: Big-O Intuition — Why Some Lookups Stay Fast. Data Challenge: Pick the Right Container (1/3).
- **Skill tags (from taxonomy.json):** data-structures
- **Skills (skills.json):** algorithmic-complexity-big-o
- **Audience:** data + software engineering
- **Complexity flag:** complex (data structures / algorithmic complexity)
- **Estimated time:** ~20-23 minutes (2026-10-23 content pass: was ~40-43; video now optional and excluded)

## Sources (see SKILL.md, "Source of truth")
- **Drive decks read:** "Big-O Intuition — Why Some Lookups Stay Fast" (slides + speaker notes), read 2026-10-16.
- **Labs repo:** local `.sources/` copy, 2026-10-16 (`CALENDAR.md`, `livelabs/big-o-intuition-why-some-lookups-stay-fast/instructor_prep.md`, `data-challenges/pick-the-right-container/`).
- **Projects repo:** local `.sources/` copy, 2026-10-16 (`instructor/overview.md`, `_brief.json`).
- **Deck vs. local deck_spec disagreements:** not checked; Drive deck used directly.

## Avoid (already used elsewhere in the module)
- **LiveLab deck:** phone contacts (type vs. scroll); library catalog backup; support agent / customer account ID; customer list with 10,000 lookups a day; `[15, 47, 92, 8]` scan; 500-item and 1,000/2,000-item worst-case numbers.
- **Code-along:** none for this LiveLab.
- **Data Challenge:** transit turnstile taps (station taps file); its comparison-count cases and nested-pass growth step.
- **Project / module-wide:** bookstore, restaurant kitchen, health clinic, sporting goods, inventory trackers; board-game and office-supply demo domains; grade tracking; bike stations, member directory, food-pantry donations, rec-center signups, city service requests, timesheets, volunteer shifts.
- **Replaced in this revision:** the old food-pantry roster scenario (overlapped the food-pantry Data Challenge dataset).

## Align
- **Deck definitions this reading agrees with:** Big-O (how an algorithm's work grows as the input grows); O(1) (constant: work stays roughly the same regardless of input size); O(n) (linear: work grows with the number of items); linear scan (checks items one at a time until the target is found); "O(n) is not slow, O(1) is not instant."
- **Deck scope note honored (2026-10-23 decision):** this reading teaches growth only. No dict syntax: the O(1) lookup is taught with list indexing and a coat-check analogy; dict syntax belongs to the containers and lookups readings.
- **Quest Vocabulary Mission terms:** Input Size, Algorithm, Linear Scan, Lookup, Big-O, Scale (all on flip cards; Input Size, Algorithm and Scale added in this revision).

## Prepare (what this reading rehearses, on its own examples)
- **Data Challenge move:** count the checks a scan makes (match first, item missing) → `count_checks.py` on a 4- and 8-booking list.
- **Data Challenge move:** reason about growth with numbers, not timings → doubling question; to-scale chart and slider (doubling steps); select-all "fast on 50 means fast on 5 million" (false).
- **Project roadblock defused:** confusing Big-O with "how fast is this right now" → misconception quiz, gold callout, select-all.
- **Confirmed:** the reading works no Data Challenge step and solves no part of the project. Nested-loop growth is only named as coming later, not worked.

## Real-world scenario for this reading
- **Domain:** airline bookings (business ops). "Kiosk" and "manifest" removed.
- **Scenario:** an airport check-in screen finds a booking by its six-letter code. Linear search with `in` grows with the bookings; a lookup by position or label stays flat. New-situation question: gate scanner, 100-seat to 400-seat planes.
- **Why it fits:** most Fellows have used a check-in kiosk or typed a confirmation code; the input size growing over years is easy to picture.

## Prereq recall
- `has_booking` early return (how many comparisons); when `return False` runs.

## Vocabulary list
- Key terms review at the end (flip cards): Algorithm, Linear scan (linear search), Worst case, Input size, Big-O, O(1) and O(n), Lookup, Scale. Each is bolded and defined at first use in the idea blocks.
- Syntax taught here (ledger): `in` on a list, `len()`, indexing from 0, each with a "New in this file" note.

## Activity rotation
- [x] flip cards (end review)  - [x] predict-then-run quizzes (run buttons gated)  - [x] typed fill-in (`in`)  - [x] select-all  - [x] to-scale size selector  - [x] reflection with steps + optional AI prompt

## Video pick
- **Title/channel/length:** Learn Big O notation in 6 minutes — Bro Code, 6:24 (384 s, verified 2026-10-16). Optional "Go further" embed, not scored, not in the time.
- **Link:** https://www.youtube.com/watch?v=XMUe3zFhM5c
- **Why this one:** short, reputable, builds O(1)/O(n) from concrete examples.

## Interview relevance
- One sentence in the wrap-up: name n, the worst case, and whether the work grows.

## AI integration
- Optional AI-brainstormed prompt button inside the reflection box.

## Additional resources
- Big-O Cheat Sheet; Python Wiki Time Complexity; Khan Academy Asymptotic Notation.

## Critical thinking / summary questions
- Gate scanner (same airline scenario): 100 to 400 seats, worst case grows 4x. Reflection: explain O(1) vs O(n) without code.
