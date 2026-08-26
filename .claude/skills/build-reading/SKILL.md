---
name: build-reading
description: Build a standalone interactive HTML pre-lecture reading for the Marcy Lab Data Analytics Fellowship, hosted on GitHub Pages. Use when asked to create, refactor, or QA a Curriculum_Readings reading.
---

# Build an interactive reading

This skill produces one (rarely two, at most three) self-contained
`index.html` readings that a Fellow works through **standalone** before the
matching hands-on lecture. It is the authoritative spec for this repo — the
constraints below are non-negotiable; the pipeline is the recommended order
of work, not a rigid script.

## Inputs to gather before starting

- Topic/concept for the reading.
- The lecture it precedes (used ONLY to check for duplicate analogies/examples — never named in the reading itself).
- Audience: data-only, or data + software engineering (Python/OOP/SQL topics usually serve both).
- Complexity flag: standard (aim under ~20 min total) vs. genuinely complex — data structures, OOP, functions, recursion, statistical tests/distributions, linear algebra, ACID, design patterns, gradient descent (no strict time cap for these).

## Hard constraints (do not skip any of these)

1. **No module numbers, no "before lecture" language, anywhere in the reading's own text.** Folder paths can stay module-numbered for now (that's just current repo organization, checked by `qa/reading_qa.py`), but the page content must read as fully standalone — a reading may get moved between modules later.
2. **Never reuse the lecture's analogies/examples/scenarios.** Read the target lecture's `module_decks/module-N-*/INSTRUCTOR_LECTURE_NOTES.md` (+ `PROJECT.md`/`DATASET.md`) first and pick something else — rotate real-world scenarios across finance / healthcare / public sector / nonprofit & social impact / business ops / professional services (see `pedagogy/pedagogy/PEDAGOGY_SUMMARY.md` §5).
3. **Required sections**: Concept Overview (scenario-based — open inside a concrete situation, never "a loop is X, a conditional is Y" style dry definitions), Technical Vocabulary, Interactive Practice, "How This Shows Up in Interviews" (data-focused; +SWE angle for Python/OOP/SQL), Overall Summary/Critical Thinking Questions, Additional Resources. Optional but encouraged when genuinely relevant: a prereq-recall section (1-4 questions, mixing types — recall, coding-based/trace, scenario-based, critical-thinking — covering the *actual* prerequisite skills the reading leans on later, not just the one most obvious one; e.g. a nested-loops reading that later unpacks tuples needs a tuple-unpacking prereq question too, not just `range()`), and a "thinking ahead" section on where the concept resurfaces later.
4. **Activity variety** — rotate at least 4-6 types across a reading (flip cards, quiz with feedback, select-all, drag-drop, order-the-steps, fill-in-the-blank code, terminal/code simulator, pseudocode-from-scenario, video reflection). Every answer choice, right or wrong, gets specific feedback text. Hints are allowed; solutions are not handed over outright.
5. **Diagrams only when the relationship between parts is genuinely hard** to hold in your head otherwise — per the "seductive details" research in `pedagogy/pedagogy/PEDAGOGY_SUMMARY.md` §2, a decorative diagram can actively hurt retention.
6. **AI integration required wherever it fits** — even something lightweight (an AI-generated brainstorm/reflection prompt).
7. **Brand**: load `assets/brand-tokens.css` + `assets/reading-kit.css` — do not hand-roll colors. Only Tabler-icon-equivalent simplicity, no emoji/typed-arrow standing in for a real icon or connector.
8. **Accessibility (WCAG AA)**: exactly one `<h1>`, no skipped heading levels, no text under 14px, alt text on every image, never convey meaning by color alone, visible focus states (the kit provides these by default).
9. **Copyright footer** on every reading, exact HTML (Marcy links to `https://marcylabschool.org`, Angelica links to her LinkedIn):
   ```html
   <footer class="mlrk-footer">This reading is the property of <a href="https://marcylabschool.org" target="_blank" rel="noopener">The Marcy Lab School</a> and <a href="https://www.linkedin.com/in/angelicaspratley/" target="_blank" rel="noopener">Angelica Spratley</a>. Contact the owners before republishing, reusing, or monetizing this content elsewhere.</footer>
   ```
10. **All links must resolve** — verified by `qa/reading_qa.py` before shipping.

## Points & gamification (build in via `assets/reading-kit.js`, do not reinvent)

- Quiz question correct on 1st attempt = 1.0 pt; correct on 2nd attempt = 0.5 pt; still wrong after 2 attempts = 0 pt, and the kit auto-reveals the answer with an encouraging note — never punitive framing.
- Video watched to completion (YouTube IFrame API `ENDED` state) = 1.0 pt flat, once.
- Each interactive activity completed (flip-set, drag-drop, order-the-steps, simulator run) = 1.0 pt flat, for participation, not correctness.
- Each free-response filled with real effort (word-count floor, not content-graded) = 1.0 pt.
- `ReadingKit.Scoring.total()` gives `{earned, possible, pct}` — the leaderboard ranks by `pct`, never raw totals, so a longer reading doesn't mechanically outrank a shorter one.
- No time-on-page scoring — deliberately dropped (too easy to game either direction; students revisit readings and leave tabs open).

## Video handling

Embed the chosen video directly (`youtube.com/embed/<id>` via `ReadingKit.video(...)`), and always show a "Watch on YouTube: `<link>`" line underneath regardless of embed status. Prefer <10 min, reputable channel (freeCodeCamp, Corey Schafer, Programming with Mosh, Tech With Tim, official docs orgs, etc.), Python-flavored unless the reading is SQL/data-viz-specific. Record the pick + one-line reasoning in the reading's content brief (`content-briefs/`) so it's fast to review and swap later — do not gate on approval before publishing, just make the pick reviewable.

## Submission / "send to GitHub"

Two tiers, both from `assets/reading-kit.js`:
- **Always**: download the response file (md/json/txt) + an on-page git cheat-sheet (`git add`/`commit`/`push`) for the student's own personal portfolio repo — no token, real commit, real streak credit.
- **Submit for credit**: `ReadingKit.buildSubmitURL(readingId, title)` opens a pre-filled GitHub Issue in `The-Marcy-Lab-School/DA-Reading_Submissions` — no token needed, and opening the issue counts on the student's real public contribution graph. A GitHub Action there parses/scores/comments/closes it and updates the pseudonymous public `leaderboard.json` (see that repo's own README once scaffolded).
- Alias/avatar for the leaderboard is `ReadingKit.Persona` — reroll-only generator (adjective + animal + emoji), never freeform text, decoupled from the real GitHub username used for actual grading.

## Draft persistence

`ReadingKit.init(...)` autosaves to `localStorage` on every input, namespaced per reading, and restores with a small "we restored your previous progress" banner. For cross-device continuity, every reading also needs the paired "save progress to a file" (already covered by the JSON export) / "load a saved file" (`ReadingKit.wireImport`) buttons — this is the only cross-device story; no backend draft sync.

## Pipeline

1. **Anti-duplication check.** Read the target lecture's deck notes; note what to avoid.
2. **Research** (dispatch to a research subagent with WebSearch/WebFetch): a real-world scenario distinct from the lecture's, a candidate video, 2-4 additional-resource links (w3schools/SQL-Bolt/TED/official docs/games) — the agent live-checks every link it returns.
3. **Fill out the content brief** — copy `content-briefs/TEMPLATE.md`, fill it in. This is the fast-review artifact; if anything about the scenario/video/tags needs a sanity check with Angelica, do it here, before writing HTML.
4. **Author `index.html`** using `assets/brand-tokens.css` + `assets/reading-kit.css` + `assets/reading-kit.js`. Write a sidecar `reading.meta.json` (`{title, tags: [taxonomy.json ids], audience, time_minutes}`) next to it.
5. **QA pass** (dispatch to a separate QA subagent, fresh context — not the same thread that authored the page, so QA isn't grading its own homework): run `python3 qa/reading_qa.py <path>/index.html`, plus a manual semantic check against this file's constraints list (activity variety, feedback-on-every-choice, no seductive-detail diagrams). Fix everything it flags.
6. **Manual smoke test in an actual browser** — click every interactive element, both quiz-attempt paths (right-first-try, wrong-twice-then-reveal), the video, every export button, the import/resume flow, mobile breakpoint.
7. **Regenerate the catalog**: `python3 build_catalog.py` (rebuilds the root landing page + the README table — never hand-edit either between the `READINGS_TABLE_START`/`END` markers or inside the generated `index.html`).
8. **Report**: the live GitHub Pages URL, and a short "please review" list — the video pick, the chosen scenario, any QA findings that were judgment calls rather than hard fixes.

## Reference files

- `assets/brand-tokens.css`, `assets/reading-kit.css`, `assets/reading-kit.js` — shared kit, always load all three.
- `taxonomy.json` — controlled skill-tag vocabulary for `reading.meta.json`.
- `content-briefs/TEMPLATE.md` — fill out per reading.
- `qa/reading_qa.py` — automated QA pass.
- `build_catalog.py` — regenerates the landing page + README table.
- `brand/brand/BRAND_GUIDELINES.md` + `tokens.json` — source of truth if the shared kit ever needs to change.
- `pedagogy/pedagogy/PEDAGOGY_SUMMARY.md` + `liberatory_pedagogy*.md` — the research behind the constraints above.
