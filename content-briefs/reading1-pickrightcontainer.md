# Content brief: Pick the Right Container — Python Data Structures

- **Quest / LiveLab(s):** Quest 1.4 Pick the Right Container (Day 7). LiveLab: Python Data Structures. Data Challenge: Pick the Right Container (2/3).
- **Skill tags (from taxonomy.json):** data-structures
- **Skills (skills.json):** algorithmic-complexity-big-o
- **Audience:** data + software engineering
- **Complexity flag:** complex (data structures)
- **Estimated time:** ~21-24 minutes (2026-10-23 content pass: was ~40-42; video now optional and excluded)

## Sources (see SKILL.md, "Source of truth")
- **Drive decks read:** "Python Data Structures" (slides + speaker notes), read 2026-10-16.
- **Labs repo:** local `.sources/` copy, 2026-10-16 (`livelabs/python-data-structures/` instructor prep + student notebook, `data-challenges/pick-the-right-container/`).
- **Projects repo:** local `.sources/` copy, 2026-10-16 (`instructor/overview.md`, `_brief.json`).
- **Deck vs. local deck_spec disagreements:** not checked; Drive deck used directly.

## Avoid (already used elsewhere in the module)
- **LiveLab deck:** playlist (list), flight + hotel itinerary (tuple), restaurant menu (dict), Close Friends list (set); support-ticket queue, audit log, store manager SKU bin, event check-in desk; Discord read-states story; `point = (3, 4)` and "coordinates"; list/tuple/dict/set board values; mini data pipeline.
- **Code-along:** pending order IDs list, log-entry tuple, product stock dict, seen IDs set, 2-million-item timing.
- **Data Challenge:** transit turnstile taps; per-card counting with parallel lists vs. a dictionary; set of stations.
- **Project / module-wide:** same list as the Big-O brief.
- **Replaced in this revision:** the old city 311 service-request scenario (overlapped the city service requests dataset), the help-desk ticket queue and the (latitude, longitude) / `point = (4, 9)` tuple (overlapped deck examples).

## Align
- **Deck definitions this reading agrees with:** data structure; list (ordered + mutable); tuple (ordered + locked); dict (key/value pairs); set (unique values, unordered); `{}` is an empty dict. Hashing internals cut (2026-10-23); one sentence says dict keys and set items must be things that can't change.
- **Quest Vocabulary Mission terms:** Data Structure, List, Tuple, Dictionary, Set, Key, Value, Mutable, Immutable (all on flip cards; Data Structure, Dictionary, Key/Value and Immutable added in this revision).

## Prepare (what this reading rehearses, on its own examples)
- **Data Challenge move:** pick a set for uniqueness and a dictionary for keyed lookup → `coupons.py` duplicate add, container drag-sort.
- **Project common mistake #3 (loose parallel lists):** one paragraph in the dictionary block states the general risk. No counting, no Data Challenge step.
- **Confirmed:** the reading works no Data Challenge step and solves no part of the project.

## Real-world scenario for this reading
- **Domain:** food delivery app (business ops). "Courier" became "driver"; refunds replaced with a first-order coupon. New-situation question stays in the app (menu prices, kitchen order line).
- **Scenario:** a driver's stops (list), finished orders (tuple), order code to driver (dict), customers who used a coupon (set).
- **Why it fits:** familiar app; each container's rule has a clear stake (a refund paid twice, a delivery record edited by accident).

## Prereq recall
- List indexing from 0 (`stops[1]`); `in` on a list is a linear search.

## Vocabulary list
- Key terms review at the end (flip cards): Data structure, List, Tuple, Dictionary (dict), Key and value, Set, Mutable, Immutable. Hashable card cut.
- Syntax taught here (ledger): `.append`, tuples, unpacking in a `for` loop, `d[key]`, `d[key] = value`, sets, `set()`, `.add`, `type()`, each with a "New in this file" note.

## Activity rotation
- [x] flip cards (end review)  - [x] predict-then-run quizzes (run buttons gated)  - [x] typed fill-in (`set`)  - [x] drag-sort container matcher  - [x] reflection with steps + optional AI prompt

## Video pick
- **Title/channel/length:** Python Data Structures: When to Use List, Tuple, Set, Dict — Data with Baraa, 3:54 (234 s, verified 2026-10-16). Optional "Go further" embed, not scored, not in the time.
- **Link:** https://www.youtube.com/watch?v=h-zcj4DmqHk

## Interview relevance
- One sentence in the wrap-up: name the rule that decides it (order, change, lookup by key, no repeats).

## AI integration
- Optional AI-brainstormed prompt button inside the reflection box.

## Additional resources
- Python docs Data Structures; W3Schools dictionaries and sets; Python Tutor.

## Critical thinking / summary questions
- Delivery-app menu: dict for dish to price, list for the kitchen order line. Reflection: a decision rule for the four containers.
