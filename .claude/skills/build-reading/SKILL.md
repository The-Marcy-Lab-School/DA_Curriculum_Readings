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
- Complexity flag: standard (up to ~45 min total is fine — see "Time estimate methodology" below) vs. genuinely complex — data structures, OOP, functions, recursion, statistical tests/distributions, linear algebra, ACID, design patterns, gradient descent (no strict time cap for these).

## Hard constraints (do not skip any of these)

1. **No module numbers, no "before lecture" language, anywhere in the reading's own text.** Folder paths can stay module-numbered for now (that's just current repo organization, checked by `qa/reading_qa.py`), but the page content must read as fully standalone — a reading may get moved between modules later.
2. **Never reuse the lecture's analogies/examples/scenarios.** Read the target lecture's `module_decks/module-N-*/INSTRUCTOR_LECTURE_NOTES.md` (+ `PROJECT.md`/`DATASET.md`) first and pick something else — rotate real-world scenarios across finance / healthcare / public sector / nonprofit & social impact / business ops / professional services (see `pedagogy/pedagogy/PEDAGOGY_SUMMARY.md` §5).
3. **Required sections**: **Introduction** (see its own bullet below — this is not optional and not the same thing as "Concept Overview," though the two can flow directly into each other), Concept Overview (scenario-based — open inside a concrete situation, never "a loop is X, a conditional is Y" style dry definitions), Technical Vocabulary, Interactive Practice, "How This Shows Up in Interviews" (data-focused; +SWE angle for Python/OOP/SQL), Overall Summary/Critical Thinking Questions, Additional Resources. Optional but encouraged when genuinely relevant: a prereq-recall section (1-4 questions, mixing types — recall, coding-based/trace, scenario-based, critical-thinking — covering the *actual* prerequisite skills the reading leans on later, not just the one most obvious one; e.g. a nested-loops reading that later unpacks tuples needs a tuple-unpacking prereq question too, not just `range()`), and a "thinking ahead" section on where the concept resurfaces later.

3a. **The Introduction must do four things, explicitly** — not just imply them:
   - A concrete scenario (this can be the same scenario the Concept Overview then develops further — they don't need to be two unrelated hooks).
   - **Why the reader should care** — a real stake: how this shows up in a job, a project, an interview, or a decision someone actually has to make. Not "this is an important skill you'll use throughout your career" — say something *specific* to this concept.
   - **A connection to what the reader already knows** *and* **where this is headed** — e.g. "you already know how to write a single loop; this is about combining two of them" plus a forward gesture in terms of *concepts*, never reading/lecture sequence (no "the next reading," no "in the upcoming lecture" — readings are standalone; point forward at an idea, not at another artifact).
   - **A visual** (an illustration or a simple diagram) to break up the intro's text — this is about engagement and giving visual learners something to anchor to, a looser bar than the "diagrams only when genuinely hard to hold in your head" rule that governs explanatory diagrams elsewhere in the reading. An intro visual illustrating the scenario itself (not a random decoration) satisfies this; build an inline SVG when no image-gen tool is available (see the Concept Overview illustration in `loops-conditionals` for the pattern).

3b. **Never call any section a "bridge to lecture," "required bridge," or anything that positions the reading relative to a lecture/project artifact.** The closing section is always a **Summary, Review, or Critical Thinking** section that has the reader *expand on the reading's own concepts* in a new but still-standalone scenario — never phrased as preparation for, or a handoff to, something else. This has been raised before; `qa/reading_qa.py` now checks for it automatically, but don't rely on that alone — don't write the phrase in the first place.
4. **Activity variety** — rotate at least 4-6 types across a reading (flip cards, quiz with feedback, select-all, drag-drop, order-the-steps, fill-in-the-blank code, terminal/code simulator, pseudocode-from-scenario, video reflection). Every answer choice, right or wrong, gets specific feedback text. Hints are allowed; solutions are not handed over outright. **Prefer an activity where the student types something themselves (fill-in-the-blank, a typed prediction, a simulator command) over one that's purely click-a-button-and-watch a reveal** — Angelica has specifically praised this pattern (e.g. the "type the missing function name" fill-blank) over an all-simulated-output reading. Don't drop the reveal-button code traces entirely (they're still a real, useful activity type and count toward variety), just don't let a reading be *only* that.
5. **Diagrams only when the relationship between parts is genuinely hard** to hold in your head otherwise — per the "seductive details" research in `pedagogy/pedagogy/PEDAGOGY_SUMMARY.md` §2, a decorative diagram can actively hurt retention.
6. **AI integration required wherever it fits** — even something lightweight (an AI-generated brainstorm/reflection prompt).
7. **Brand**: load `assets/brand-tokens.css` + `assets/reading-kit.css` — do not hand-roll colors. Only Tabler-icon-equivalent simplicity, no emoji/typed-arrow standing in for a real icon or connector.
8. **Accessibility (WCAG AA)**: exactly one `<h1>`, no skipped heading levels, no text under 14px, alt text on every image, never convey meaning by color alone, visible focus states (the kit provides these by default).
9. **Copyright footer** on every reading, exact HTML (Marcy links to `https://marcylabschool.org`, Angelica links to her LinkedIn):
   ```html
   <footer class="mlrk-footer">This reading is the property of <a href="https://marcylabschool.org" target="_blank" rel="noopener">The Marcy Lab School</a> and <a href="https://www.linkedin.com/in/angelicaspratley/" target="_blank" rel="noopener">Angelica Spratley</a>. Contact the owners before republishing, reusing, or monetizing this content elsewhere.</footer>
   ```
10. **All links must resolve** — verified by `qa/reading_qa.py` before shipping.
11. **The specific skills/objectives a reading covers must be visibly listed on the page**, not just recorded in `reading.meta.json`'s `skills` field — that field and the visible "Skills you'll practice" callout must always be written together, never one without the other. `qa/reading_qa.py` checks that a sibling `reading.meta.json` with a non-empty `skills` array has a matching visible callout in the HTML; a reading that fails this check is not done.

## Points & gamification (build in via `assets/reading-kit.js`, do not reinvent)

- Quiz question correct on 1st attempt = 1.0 pt; correct on 2nd attempt = 0.5 pt; still wrong after 2 attempts = 0 pt, and the kit auto-reveals the answer with an encouraging note — never punitive framing.
- Video watched to completion (YouTube IFrame API `ENDED` state) = 1.0 pt flat, once.
- Each interactive activity completed (flip-set, drag-drop, order-the-steps, simulator run) = 1.0 pt flat, for participation, not correctness.
- Each free-response filled with real effort (word-count floor, not content-graded) = 1.0 pt.
- `ReadingKit.Scoring.total()` gives `{earned, possible, pct}` — the leaderboard ranks by `pct`, never raw totals, so a longer reading doesn't mechanically outrank a shorter one.
- No time-on-page scoring — deliberately dropped (too easy to game either direction; students revisit readings and leave tabs open).

## Video handling

Embed the chosen video directly (`youtube.com/embed/<id>` via `ReadingKit.video(...)`), and show a clean "Watch on YouTube" anchor (not the raw URL as visible text) underneath regardless of embed status. Reputable channel (freeCodeCamp, Corey Schafer, Programming with Mosh, Tech With Tim, Bro Code, Data with Baraa, official docs orgs, etc.), Python-flavored unless the reading is SQL/data-viz-specific.

**Verify the actual duration before picking — do not guess, and do not trust `WebFetch` on a YouTube URL (it can't see duration; the page is JS-rendered and WebFetch's markdown conversion strips the embedded data).** Use this instead, which reads the real value straight out of the raw watch-page HTML with no API key:
```bash
curl -s -A "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36" "https://www.youtube.com/watch?v=<id>" | grep -o '"lengthSeconds":"[0-9]*"' | head -1
```
This was skipped for the first few readings and shipped two videos at 29 and 36 minutes — both several times longer than the reading itself — before it was caught in review. **Always run this before finalizing a video pick.**

- **Target under ~10-12 minutes** for a supplementary/reinforcement embed. A video can run longer if it's genuinely the best match and reputable — a long video is fine, but it must be a deliberate choice made with the real duration in hand, not an accident.
- **Don't let every reading end up with a long video** — vary it. A reading with an already-substantial activity set should lean toward a shorter video precisely because it doesn't need the video to carry the teaching load.
- **The video's real duration must be folded into the displayed time estimate at the top of the reading** (see "Time estimate methodology" below) — this is the actual point of verifying it.
- Record the pick + verified duration + one-line reasoning in the reading's content brief (`content-briefs/`) so it's fast to review and swap later — do not gate on approval before publishing, just make the pick reviewable.

## Time estimate methodology

Angelica's calibration: students are encountering this material for the first time, and first-pass digestion takes meaningfully longer than a fluent read-through — don't estimate at *your* reading speed. Build the top-of-page time pill from real counts, not a vibe:
- ~50 seconds per quiz/question-style item (read the prompt, look at any code, think, click, read the feedback).
- ~2 minutes per hands-on activity (flip-card set, drag-drop, order-the-steps, trace-stepper, container-matcher, code simulator run) — each counted once regardless of how many sub-items it has.
- ~2 minutes per free-response box.
- The video's actual verified duration (see above), plus a little for the reflection question after it.
- Plus roughly 5-8 minutes of baseline for reading the prose/scenario/code snippets themselves, more if the reading has a lot of setup text or an SVG diagram to read.
Add it up, round to a comfortable range (e.g. "~33-36 minutes"). This will usually land noticeably higher than a quick mental estimate — that's the point.

**Ceiling (confirmed 2026-09-01, supersedes the earlier 25-minute figure): a non-complex-topic reading with videos and activities can run up to ~45 minutes and that's completely fine.** Complex topics (the list in "Inputs to gather" above — data structures, OOP, functions, recursion, stats/distributions, linear algebra, ACID, design patterns, gradient descent) can run longer than 45 minutes when the content genuinely calls for it. Either way: never under-report the time to make a reading look shorter than it actually is — if the honest count lands at 44 minutes, say 44 minutes. If a non-complex reading's honest count comes out well past 45, that's a real signal to trim activities or split the reading, not to shrink the displayed number.

## Submission / grading

Two separate, unrelated tiers, both from `assets/reading-kit.js`:
- **Always**: download the response file (md/json/txt) + an on-page git cheat-sheet (`git add`/`commit`/`push`) for the student's own personal portfolio repo — no token, real commit, real streak credit. This has nothing to do with grading; it's purely the student's own copy.
- **Submit for credit**: `ReadingKit.submitForCredit({readingId, title, tags, onDone})` opens a pre-filled GitHub Issue in the **student's own private submission repo** (created by each student from the `The-Marcy-Lab-School/DA-Reading_Submissions` template — that repo's own README has the student-facing setup steps), with the instructor added as the only other collaborator. Not a shared repo — that was tried first and any repo collaborator can see every other collaborator's issues, which defeats per-student privacy. Not a Google Form or Apps Script Web App either — both were tried and both hit the same marcylabschool.org Google Workspace admin policy blocking anonymous/external access, confirmed unfixable from an individual account across multiple approaches (`assets/SubmissionsAppsScript.gs` is kept for reference only, clearly marked unused). GitHub Issues never had that problem; the fix was scoping to one repo per student, not abandoning GitHub.
  - Student enters GitHub username + their submissions repo name (defaults to `reading-submissions` via `DEFAULT_SUBMISSIONS_REPO_NAME` in the kit — most students never need to type it).
  - **The submit block must include first-time setup directions, not just assume the repo already exists.** A student's first-ever reading is exactly when they don't have a submissions repo yet, and "ask your instructor" alone isn't self-service. Every reading's submit-for-credit callout needs a collapsed `<details class="mlrk-hint">` (summary: "First time submitting? Set up your private submission repo") containing: (1) a link to the `DA-Reading_Submissions` template with "click Use this template," (2) keep it Private, (3) Settings → Collaborators → Add people → add the instructor's GitHub username (don't hardcode a specific instructor's username in reading content — say "your instructor will share their GitHub username with you," since this varies by cohort/instructor), (4) come back and fill in the two fields below, (5) a note that clicking "Submit for credit" opens a new tab with a pre-filled Issue and they still need to click "Submit new issue" there themselves — the button doesn't finish it for them.
  - **`tags` AND `skills` must both be passed on every call**, matching that reading's `reading.meta.json` arrays exactly, so performance is trackable at both the broad-category and specific-objective level.
  - No server-side code at all now, so no shared-secret gate and no server-enforced attempt cap — the 2-attempt limit is client-side (`localStorage`) only. Accepted trade-off; state this plainly if asked.
  - Grading/aggregation is NOT automatic — there's no Action watching every student's repo. The instructor runs `instructor-tools/aggregate_submissions.py` (own GitHub token, own machine) periodically to pull scores across the whole roster. See that script's own header comment.
- Alias/avatar for the leaderboard is `ReadingKit.Persona` — reroll generator (adjective + animal + emoji, paired list only, never independently-randomized name/emoji) plus a "type in your exact existing persona" option, never freeform-typed from scratch. Decoupled from the GitHub username used only as a gradebook label. Even though per-student private repos removed the original privacy reason for personas, keep them — they're worth having for a future leaderboard and for their own sake, as an engagement/fun touch.
- **The persona should show up wherever it can add a fun, personal touch, not just once in the picker widget.** This is already wired into the shared kit — don't reinvent it per reading: `Scoring.renderChip()` prefixes the score with the emoji+name automatically, the restored-progress banner greets the student by persona ("Welcome back, 🦦 Turbo Otter!"), and `submitForCredit()`'s `onDone(status, message)` callback hands back a ready-made, persona-included message — a reading's `onDone` handler should just display `message` as-is (`fb.textContent = message`) rather than writing its own status text.

## Content & UX lessons from review (apply these, don't rediscover them)

- **Concept overview must be genuinely scenario-based** — open inside a concrete situation and let definitions fall out of it; never "a loop is X, a conditional is Y." For a genuinely hard-to-hold-in-your-head execution order (nested loops especially), consider `ReadingKit.traceStepper()` (click-through, one line at a time) or a small inline SVG diagram over a static code dump — build/complete-it-yourself beats a static reveal.
- **Prereq-recall framing must never reference "the last reading" or any other reading by name** — say "understanding X is a prerequisite skill for this reading," not "this builds on the last reading." Cover the *actual* prereqs the reading leans on later (check what later sections assume — tuple unpacking, comparison operators, etc. — not just the one most obvious skill), 1-4 questions mixing recall/coding/scenario/critical-thinking types.
- **Binary (2-choice) quiz questions get `maxAttempts:1`**, not the default 2 — with only two options, a second try is a guaranteed freebie. Save the default 2-attempt scale for 3+-option questions.
- **Self-checks (ungraded activities like order-the-steps or a drag-drop match) still get 2 tries before revealing** — same philosophy as graded quizzes, just without points attached. Let the student undo/redo before committing (toggle-to-remove on order-the-steps, not lock-on-first-click), and use `ReadingKit.selfCheck()`/the `checkSelector` option on `orderSteps()` rather than auto-revealing on the first attempt.
- **Don't duplicate a check** — if an activity already has a real self-check confirming right/wrong, a follow-up quiz testing the exact same fact is redundant; cut it.
- **Incorrect-answer feedback must be specific, never generic** ("Not quite, try again" is not acceptable) — for select-all, point at one specific mismatched statement via a per-option `hint` field, without revealing whether it should be true or false.
- **Hints go in a collapsed `<details><summary>Need a hint?</summary>...</details>`**, not an always-visible callout — reserve always-visible callouts for non-hint information (e.g. interview framing).
- **Never leak internal authoring/QA commentary into student-facing copy** (e.g. "I can't verify this video's view count" has no business being on the page). Frame video sections as genuine pre-training ("as you watch, notice...") — Mayer's pre-training principle — not a disclaimer.
- **Video/resource links render as clean anchor text** ("Watch on YouTube"), never the raw URL as visible text.
- **Regular body content must not default to `.mlrk-small`** (muted + reduced size) — that class is for genuine captions/labels only. A "thinking ahead" paragraph, or any real reading content, stays full body size and `ink_900`, per the brand guide's "color is for emphasis, not default de-emphasis" rule.
- **Watch em-dash density, especially in feedback/hint/reveal text** — occasional em-dashes are fine in narrative prose, but every quiz-feedback sentence leaning on one reads as choppy/AI-generated. Prefer a period, comma, or colon; reserve the dash for when it's genuinely clearest.
- **The JSON resume/import control belongs near the TOP of the reading** ("Already started this reading? Upload your saved file..."), not buried in the bottom export section — the export/download controls (which produce new saves) stay at the bottom.
- **Persona name+emoji must come from one paired list**, never two independently-randomized lists (that's exactly how a lizard emoji ends up next to "Dolphin"). Pick animals with an exact, unambiguous, single-codepoint emoji match — rename the animal if needed rather than accepting a near-miss.
- **Length ceiling is ~45 minutes for a non-complex-topic reading with videos and activities** (complex topics can run longer — see "Time estimate methodology"). This number has moved twice as real, honestly-counted readings kept landing higher than earlier guidance assumed — trust the current figure in that section, not an older one remembered from a previous pass.
- **A copyright/QA/em-dash/heading-hierarchy pass is not optional** — always finish with `python3 qa/reading_qa.py <path>` clean, and where possible a real headless-Chrome render check (`google-chrome --headless --disable-gpu --no-sandbox --virtual-time-budget=3000 --dump-dom`) to catch runtime bugs a static code read won't — e.g. a script mis-registering points or a duplicate DOM id.
- **Every reading with an inline SVG diagram needs an actual screenshot check, not just a source-code read.** Text overlapping a same-colored line/arrow, a text block wider than the box drawn around it, and a label sitting where two diverging lines haven't yet spread apart are all real bugs that pass `qa/reading_qa.py`, a JS syntax check, and a DOM-dump console-error check clean — they only show up by looking at the rendered page. Take a real screenshot (`--screenshot=path.png`, with a `--window-size` tall enough to cover the full page — check the output's actual pixel dimensions with `sips -g pixelHeight` or PIL before assuming a fixed height covered everything; a long reading can exceed 3000px) and view it (crop into sections with PIL if needed, since a single very tall image can be hard to read at once). When fixing an overlap between text and a line, remember two lines from a shared point *diverge* as they extend — place the label at the point of widest separation, not just at a different y-value — and re-screenshot to confirm the fix rather than trusting the new coordinates on geometry alone.

## Draft persistence

`ReadingKit.init(...)` autosaves to `localStorage` on every input, namespaced per reading, and restores with a small "we restored your previous progress" banner. For cross-device continuity, every reading also needs the paired "save progress to a file" (already covered by the JSON export) / "load a saved file" (`ReadingKit.wireImport`) buttons — this is the only cross-device story; no backend draft sync.

## Pipeline

1. **Anti-duplication check + skill lookup.** Read the target lecture's deck notes; note what to avoid. In the same pass, find which of that module's `skills.json` competencies this lesson feeds into — cross-reference `module_decks/<module>/INSTRUCTOR_MODULE_SUMMARY.md`'s day-by-day/objective table (which lesson maps to which objective number) against its "Skill | Rubric ceiling | Assessment method" table (which objective number maps to which `competency_assessments` slug from `PROJECT.md`). Usually one, sometimes two slugs per reading — don't over-tag. If the target deck is new, run `python3 extract_skills.py` first (writes `skills_raw.json`, a reference file) and hand-write the new slug's `name`/`definition` into `skills.json` yourself — this step is never fully automatic, see that script's header comment for why.
2. **Research** (dispatch to a research subagent with WebSearch/WebFetch): a real-world scenario distinct from the lecture's, a candidate video, 2-4 additional-resource links (w3schools/SQL-Bolt/TED/official docs/games) — the agent live-checks every link it returns.
3. **Fill out the content brief** — copy `content-briefs/TEMPLATE.md`, fill it in. This is the fast-review artifact; if anything about the scenario/video/tags needs a sanity check with Angelica, do it here, before writing HTML.
4. **Author `index.html`** using `assets/brand-tokens.css` + `assets/reading-kit.css` + `assets/reading-kit.js`. Near the top (after the persona widget, before section 1), add a visible "Skills you'll practice in this reading" callout — one `<p><strong>{skills.json name}</strong> — {skills.json definition}</p>` per matched slug, using that file's `name`/`definition` fields verbatim (they're already written for students, don't reword or shorten them). Write a sidecar `reading.meta.json` (`{title, tags: [taxonomy.json ids], skills: [skills.json competency slugs], audience, time_minutes}`) next to it. Pass both `tags` and `skills` into the `ReadingKit.submitForCredit({..., tags, skills})` call so instructor-side analytics can report at both the broad-category and the specific-competency level.
5. **QA pass** (dispatch to a separate QA subagent, fresh context — not the same thread that authored the page, so QA isn't grading its own homework): run `python3 qa/reading_qa.py <path>/index.html`, plus a manual semantic check against this file's constraints list (activity variety, feedback-on-every-choice, no seductive-detail diagrams). Fix everything it flags.
6. **Manual smoke test in an actual browser** — click every interactive element, both quiz-attempt paths (right-first-try, wrong-twice-then-reveal), the video, every export button, the import/resume flow, mobile breakpoint.
7. **Regenerate the catalog**: `python3 build_catalog.py` (rebuilds the root landing page + the README table — never hand-edit either between the `READINGS_TABLE_START`/`END` markers or inside the generated `index.html`).
8. **Report**: the live GitHub Pages URL, and a short "please review" list — the video pick, the chosen scenario, any QA findings that were judgment calls rather than hard fixes.

## Reference files

- `assets/brand-tokens.css`, `assets/reading-kit.css`, `assets/reading-kit.js` — shared kit, always load all three.
- `taxonomy.json` — controlled *broad-category* tag vocabulary for `reading.meta.json`'s `tags` (drives landing-page grouping — keep this coarse).
- `skills.json` — the module-level graded competencies (from each `module_decks/*/PROJECT.md`'s `competency_assessments` list), one `{name, definition, modules}` entry per slug, **hand-curated** — this is the source for `reading.meta.json`'s `skills` field and the in-reading "Skills you'll practice" callout. `extract_skills.py` regenerates `skills_raw.json` (the raw rubric-table data, reference only) when a new deck lands; a human/agent still has to write the readable `name`/`definition` into `skills.json` itself — never paste raw rubric-column text ("guided coding exercise + trace review") in front of students, and never hand-edit `skills_raw.json` (it's disposable, always regenerated).
- `content-briefs/TEMPLATE.md` — fill out per reading.
- `qa/reading_qa.py` — automated QA pass.
- `build_catalog.py` — regenerates the landing page + README table.
- `instructor-tools/aggregate_submissions.py` — instructor-run only, pulls scores across the roster and reports performance by reading, by broad tag, and by specific objective.
- `brand/brand/BRAND_GUIDELINES.md` + `tokens.json` — source of truth if the shared kit ever needs to change.
- `pedagogy/pedagogy/PEDAGOGY_SUMMARY.md` + `liberatory_pedagogy*.md` — the research behind the constraints above.
