# Module 1 Dataset — Programming Fundamentals

Shared demo data for this module's lectures and labs. **Reversed
convention from Module 0**: `data-literacy` isn't in scope this module —
the "data" here is scenario flavor for teaching loops/functions/classes,
not a skill being assessed, so hand-built/synthetic example data is the
primary choice (the reverse of Module 0's "primarily real" default,
correctly reversed because the skill in scope is different, not because
the underlying principle changed — see `LECTURE_LAB_BRIEF.md`'s own
"Data/scenario sources" section).

**Never the project's own 4 scenarios** — bookstore, restaurant, healthcare
supplies, or athletic wear (`PROJECT.md` / `student/SCENARIOS.md`). A demo
built on any of them would either spoil that scenario's novelty for
whichever students pick it, or hand students a ready-made template for
their own class design — exactly the design decision the project
deliberately makes independent.

## Primary: two hand-built demo domains

- **Board-game collection tracker.** `BoardGame` class: `title`,
  `players_available`, `category`. Good for demoing the class-design
  pattern and a simple validation loop without mapping onto any project
  scenario. Use for Days 9, 13-15 (validation functions, class definition,
  solo design rep).
- **Office-supply tracker.** `SupplyItem` class: `name`, `count`,
  `department`. A second option, deliberately distinct from the project's
  own healthcare-supplies scenario, so lecture/lab content isn't locked to
  one running example across the whole module. Use for Days 6-8, 16
  (Big-O intuition/practice, data serialization).

For both: pick a batch of 5-10 hand-built sample transactions per demo,
matching the deliberate-edge-case pattern the project's own data files use
(a blank line, a malformed entry, an operation on something that was never
added) — so students see that pattern modeled before they have to find it
themselves in the real 430-row project file.

## Reference only, never copied directly into a demo

`student/data/SOURCE.md` (in the projects repo) documents how the actual
project's 4 batch files were synthetically generated (430 rows each, 14
planted edge-case types) — useful background for understanding what
"real" edge-case density looks like when hand-building the smaller demo
batches above, but the generation method/edge-case list itself shouldn't
be described to students before the project (would spoil the exercise).

## Existing local sample data

`python-data-structures` (Day 7) already uses its own small, self-contained
code examples (no external file) for list/tuple/dict/set demos — no change
needed there; it predates this module plan and doesn't touch the project's
scenarios either.
