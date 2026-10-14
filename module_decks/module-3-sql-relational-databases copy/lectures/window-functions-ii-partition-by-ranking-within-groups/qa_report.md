# QA Report — Window Functions II: PARTITION BY & Ranking Within Groups (Module 3, Day 8)

## 18-Point Scorecard

| # | Check | Result |
|---|---|---|
| 1 | Missing text / diagram exception | Clean — `qa.contrast_check` on the rendered `.pptx` found no empty `TEXT_BOX` shapes. The one `workflow_linear` was visually confirmed: all 6 step labels and details render as real text. |
| 2 | Wordy/wrapping slides | One heuristic overflow warning on the `compare_contrast` "similarities" box (est. 1.14in vs a 1.00in box) — **confirmed a false positive on real render**, same as Day 7's identical warning: both IN COMMON bullets render fully with clear margin below. Two *real* overflows were found by render review and fixed (see Findings 10-11). |
| 3 | Code slides have code + tested | **All 4 code slides validated for real, twice** (Pass A isolated + Pass B one continuous session), against a live `postgres:16-alpine` container, after replaying Days 2-7's own code slides in order. Re-run again after every QA fix. Zero failures, zero skips, zero Pass A/B disagreements. Full detail in `code_validation_report.md`. |
| 4 | Recall builds on prior skills | Bucket 4: 5/5. Slide 5 is a real retrieval-practice recall of Day 7's tie behavior, explicitly tied forward ("today's ranking still ties the exact same way"). `dependent_skills` corrected to name the chained-CTE dependency slide 17 actually uses. |
| 5 | Spaced learning | `qa.skill_coverage_check` (8/12 lectures): **no coverage gaps, no escalating-rigor gaps, no engagement-mode overuse.** The module's one open SPACING GAP (`terminal-command-line`, L1 only) is now **closed** — slide 8's `\c nyc_restaurants` is a genuine terminal rep and was tagged accordingly. |
| 6 | Engagement strategies used | Poll (×2), Game/Quick-Fire, Whiteboard sketch, Discussion/cold-call — spans Retrieval, Predict-and-Verify, Gamified, Collaborative, Business Thinking, and real Interview framing. Every `[ACTIVITY]` carries an explicit online fallback. |
| 7 | WCAG accessibility | 4 buckets: 5/4/4/4 after fixes. WCAG 2.2 AA confirmed current (WCAG 3.0 still a Working Draft, CR targeted ~Q4 2027). A repo-wide 1.1.1 failure was found and fixed — see Finding 1. |
| 8 | Notes on all slides except transitions | Clean — every non-transition slide has structured, tagged notes. |
| 9 | No cutoff text | Two real cutoffs found via render review and **fixed**: the `blanked_code` slide's last code line clipped below the editor card, and the auto-generated `Answer:` reveal title truncated mid-word. Re-rendered and re-verified. |
| 10 | Text fits its box | Clean after fixes — `check_no_offslide_shapes` was flagging the `further_resources` slide (a text box at top=7.47in on a 7.50in slide); resolved by tightening resource titles/attributions/descriptions. Now zero findings. |
| 11 | Icons used properly | Clean — all 9 icon names resolve in `template/icon_manifest.py`, and icon-to-concept mapping is consistent throughout: `sharding` = PARTITION BY (slides 2, 3, 6, 11, 14), `crown` = top-N per group (slides 2, 3). Visually confirmed every glyph renders recognizably, not as a blob. |
| 12 | Case study source + clickable link | N/A — no case study this deck. |
| 13 | Whitespace / Mayer's principles | Bucket 17: 4/5 — well segmented, terse bullets with explanation kept in notes (clean modality/redundancy), no decoration. |
| 14 | AI-sounding language | Clean — no banned phrases, no typed arrow characters, no em-dash density flag. |
| 15 | Dead resource links | **0 dead.** All 8 URLs report `UNCERTAIN` from the same known local SSL cert-verification gap, not from the sites. Every one was independently fetched and confirmed live, free, and login-free by the research subagent; the video's runtime was read off the video page's own metadata (`lengthSeconds: 472` = 7:52), not from its title. |
| 16 | Logical flow / dependency ordering | Bucket 3: 5/5, Bucket 4: 5/5, Bucket 16: 5/5 (was 2/5) — a **real continuity bug** was caught and fixed, see Finding 2. |
| 17 | No day/deck numbers | Clean. One `[SCOPE]` note reading "not taught today" was reworded to "not taught anywhere in this module," since it implied a deferral that never arrives. |
| 18 | Instructor notes completeness | `instructor_prep.md` generated with all 10 sections. Timing: **~59 min total, ~17 min of it code-along** — inside the 50-60 min target. |

## Code-Along Scorecard (9 points)

| # | Check | Result |
|---|---|---|
| 1 | Instructor code runs fully | **PASS in both passes.** Pass A: 4/4 slides isolated. Pass B: 4/4 cells of the real generated `TERMINAL_WORKSHEET_INSTRUCTOR.md` in one continuous session. No disagreement between them. |
| 2 | Module name + objectives on both variants | Clean — `qa.notebook_check` reports no findings; `meta.module`, `meta.title`, and both objectives are in both worksheet headers. |
| 3 | Scenario is given | Present and specific (`meta.scenario`), and now **factually correct** about the prior lesson — see Finding 2. Bucket: 5/5. |
| 4 | Documentation links work | 4 `doc_url` links, 0 dead (all PostgreSQL official docs; `UNCERTAIN` from the local SSL gap only). |
| 5 | Student worksheet uses second-person voice | Clean — `qa.notebook_check` found no bare "Fellow(s)" in any student-facing field. |
| 6 | TODOs placed properly | Clean — every code-along slide has a distinct `starter_code` with real `# TODO:` markers, none identical to `code`. |
| 7 | Scaffolding fades on repeated exposure | Bucket: 5/5 (was 2/5) — three of four cells were genuinely failing at `sql` occurrence **#7**; all three rewritten, see Findings 3-5. |
| 8 | Instructor notes explain what/why + analogies | Bucket: 5/5 (was 4/5) — the analogy that carries the concept now reaches the assembled instructor file, and the duplicate-key re-run hazard is flagged. |
| 9 | Correct deliverable file type | Correct — every `code` slide is `language: sql`, so `build_deck.py` produced a `TERMINAL_WORKSHEET_*.md` pair, not a Python `.ipynb`. |

## Accessibility (4 buckets)

| Bucket | Score | Justification |
|---|---|---|
| Text Alternatives | 5/5 (was 2/5) | Fixed at the template level — all 46 pictures were announcing their own PNG filename to a screen reader; every one is now explicitly marked decorative. Verified programmatically on the rendered file: 0 filename-alt, 46 decorative, correct treatment since each icon sits beside text saying the same thing. |
| Reading Order & Labels | 4/5 | Linear order reads correctly, reveals sit adjacent to their questions, options lettered in one box. Fixed the generic `from_label: "The Idea"` and the `Answer Key: Warm-Up:` double prefix. |
| Colour Independence & Contrast | 4/5 | No new palette pairs; every `answer.correct` is the full option text, never a letter or a colour; compare/contrast sides labelled in real text. One open template-level item: the `blanked_code` reveal marks the filled-in line with a gold ring and no non-colour cue (partially mitigated — the question slide shows `____` at that exact position and the reveal's title reads "Answer: ..."). |
| Cognitive Load & Motion | 4/5 | Zero `motion_note`, zero `<p:transition>`; no slide exceeds 3 bullets; the one diagram is 6 short steps. The slide-17 line-break inconsistency it was docked for has been fixed. |

## Instructional Quality (17 scored buckets, 1 N/A)

*Scores reflect the deck after applying every finding.*

| Bucket | Score | Justification |
|---|---|---|
| 1. Learning Objectives | 5/5 | Both objectives taught in contiguous sections, explicit objectives slide, transitions tagged `objective_index` 1 and 2, no scope creep past PARTITION BY. |
| 2. Misconceptions | 5/5 | Eight `[MISCONCEPTIONS]` blocks, each naming a specific wrong model (`GROUP BY boro` as the intuitive-but-wrong guess; "one row per partition"; written-order vs. run-order; the duplicate-key re-run). |
| 3. Logical Flow & Transitions | 5/5 (was 4/5) | Fixed — the clause-execution-order gap that had slide 17's code arriving before anything explained why `WHERE` can't see a rank; now a real `workflow_linear` precedes it. Four transitions, four real connecting insights, three distinct styles. |
| 4. Prior-Knowledge Ties | 5/5 (was 4/5) | Fixed — `dependent_skills` now names the chained-CTE dependency slide 17 actually exercises, matching how Day 7 declared it. |
| 5. Demo Sets Up Exercise | 5/5 | `uses_same_scenario_as_lecture: false`, no new exercise, so nothing to spoil; the optional try-it is stated concretely. |
| 6. Engagement & Gamification | 5/5 (was 4/5) | Fixed — slide 19's cold-call now runs *after* a pair step, per `engagement_techniques.md`'s explicit stereotype-threat guidance. Six activities across five technique types, every one with an online fallback. |
| 7. Summary Quality | 5/5 (was 4/5) | Fixed — the bridge now carries the explicit project tie Day 7's bridge set as the standard. No volatile logistics anywhere. |
| 8. Interview-Prep Coverage | 5/5 | `ARP` is a first-ever use in this module and a correct archetype match (a genuine knowledge gap), with `[TECHNIQUE]` coaching all three beats and a weak/strong contrast. The CFU uses `Query Walkthrough Method`, correct for a live SQL question. Both topics web-verified as genuinely common in real data-analyst interviews. |
| 9. Backwards-Design Linkage | 5/5 (was 4/5) | Fixed — objectives slide, a dedicated "Why This Matters for Your Project" slide, **and** the bridge now all connect to the project's window-function question. |
| 10. Question Quality & Bloom's | 5/5 (was 4/5) | Fixed — "top-N per group" is now named on the slide that actually teaches it, not first defined in the closing recap. Bloom mix: 20% remember, then apply/apply/evaluate/analyze. The quick-fire is a genuinely non-obvious `apply` question (most of the room will answer 3; the real answer is 4). |
| 11. Analogies | 4/5 | One analogy, no stacking, structurally accurate, fresh (music — a national chart vs. a city-by-city chart), backups notes-only across two other domains. Docked because the deep treatment went to objective 1 while objective 2's harder mechanism got a diagram instead of an analogy. |
| 12. Title Framing | 5/5 | Every teaching title is a real headline ("Same Word 'Group,' Opposite Effect on Your Rows", "WHERE Runs Long Before Your Rank Exists"); structural titles correctly generic; the title slide names the actual topic. |
| 13. Diagram & Table Fit | 5/5 (was 3/5) | Fixed — the deck now carries the one diagram `diagram_selection.md` calls the strongest case in a technical curriculum (SQL clause execution order), plus a correct `compare_contrast` and a 3-row `table`. No diagram overkill. |
| 14. Multi-tool Coverage | N/A | `meta.tools` lists a single tool (`PostgreSQL / psql`). |
| 15. Scaffolding & Project Alignment | 5/5 | `guided` matches both the calendar row and the real content; no coverage gaps against `PROJECT.md`'s four skills; explicitly preempts common project mistake #3 (trusting a query that "looks right"). |
| 16. Cross-Lecture Continuity | 5/5 (was 2/5) | **Fixed a real bug** — see Finding 2. |
| 17. Whitespace & Multimedia | 4/5 | Strong segmenting, terse bullets with explanation in notes, `icon_hero` only where there's a real visual hook. Docked because the payoff query output lives only in instructor narration (accepted: it's a live code-along, students produce it themselves). |
| 18. Factual Accuracy & Claim Scope | 5/5 (was 3/5) | Fixed both docked items — the false continuity claim (Finding 2) and an unsourced empirical claim about interviewer behavior. Every mechanism claim is scoped to Postgres specifically and backed by verbatim `[SOURCES]` quotes from the official docs, independently re-verified by running the real errors. |

## Overall grade

Accessibility average: **4.25/5**. Instructional average (17 scored, 1 N/A): **4.88/5**. Code-along average: **5.0/5**.

**Combined: 4.79/5 → A.**

## Findings fixed (11 real findings across 3 QA passes + 2 found by render review)

1. **Every picture in every deck announced its own PNG filename to a screen reader.** `add_picture` never set `descr`, so PowerPoint/Slides fell back to the filename — `wordmark_ink_on_light.png` on all 30 slides, plus each icon. The canonical WCAG 1.1.1 failure (W3C failure technique F30). Fixed in `template/helpers.py` for the whole repo: `add_picture` now takes an `alt` kwarg defaulting to `""` (explicitly decorative, the correct treatment for icons that restate adjacent text), while `image_slot.py`'s real `image_alt` path still overrides it. Verified on the rendered file: 46 pictures, 0 filename-alt.
2. **A real cross-lecture continuity bug, and it shipped to students.** `meta.scenario` said last class's ranking left "five of them in one enormous tie." Day 7's tie was **three** — five only tie after *this* deck's own slide 8 inserts two more restaurants. It contradicted slide 5's own prompt, spoiled slide 10's prediction, and `build_terminal_worksheet.py` writes `meta.scenario` verbatim into both student and instructor worksheet headers. Exactly the failure shape Day 7's own QA caught in the other direction.
3. **A fill-in-the-blank whose worksheet printed the answer.** Slide 12 blanks `PARTITION BY` on screen and gives the room 60 seconds to guess — while the student worksheet, open on their screens, said `-- TODO: add PARTITION BY boro inside the OVER clause`. (`build_terminal_worksheet.py` gives `starter_code` precedence over `blanked_code`.) Rewritten to withhold the keyword.
4. **No scaffolding fade at `sql` occurrence #7.** Slide 9's `starter_code` restated the full `RANK() OVER (ORDER BY tv DESC)` expression the room wrote at occurrence #6, and its first TODO restated the slide's own `domain_note` — giving away the one thing the cell exists to make a Fellow notice. Rewritten to name the shape, not the syntax.
5. **A fade regression.** Slide 8's `-- TODO: reconnect to nyc_restaurants` was *more* explicit than the `-- TODO: reconnect (you know this one by now)` the module already settled on at occurrences #3-#4. Matched to the established wording.
6. **The lesson's hardest mechanism was notes-only.** Objective 2 rests entirely on SQL's logical clause-execution order (`WHERE` finishes before `SELECT`, which is where window functions run, so `rnk` doesn't exist yet). All of it lived in speaker notes. Added a real `workflow_linear` — FROM, WHERE, GROUP BY, HAVING, SELECT ("Rank Here"), ORDER BY — with the mechanism sourced verbatim from the PostgreSQL docs.
7. **An unsourced empirical claim about hiring behavior** ("Interviewers weight reasoning out loud far more heavily than memorized syntax") on the one slide type the brand guidelines require to read as a credible career coach. Softened to what's actually defensible.
8. **`tv` and `rnk` never expanded in visible text**, despite both appearing as bare identifiers in student-facing prompts. Added `AS` aliases and a real, syntax-highlighted naming comment inside slide 9's code block.
9. **Two different line-break shapes for one construct.** Slide 17 split `RANK() OVER` from its own `(PARTITION BY ...)` while slide 12 broke the identical construct correctly — on the two slides Fellows diff against each other. Rewrapped slide 17 to match, and re-validated the query.
10. **Two real render cutoffs, invisible in the YAML** (found only by converting to PDF and looking). The `FILL IN THE BLANK` kicker band shrinks the editor card, so an 11-line snippet clipped its last line; and the auto-generated `Answer: <title>` prefix pushed the reveal's title past the slide width, truncating "Borough" mid-title. Fixed by compacting that snippet to 10 lines and shortening its title.
11. **A text box rendering below the bottom of the `further_resources` slide** (`check_no_offslide_shapes`, exact geometry not a heuristic). Fixed by tightening titles, attributions, and descriptions.

**Also fixed, outside this deck:** `qa/accessibility_checklist.md` still told reviewers that answer-reveal slides are hidden (`show="0"`) and should be excluded from live-presentation review. That's been stale since visible-by-default was adopted — a reviewer following it literally would have skipped 4 of this deck's 30 slides. Corrected, with the reversal recorded inline.

## Strengths

- **`PARTITION BY` is taught on data engineered so the payoff is genuinely observable, not asserted.** Two restaurants were added (one Queens, one Brooklyn) so every borough has a real multi-member group; the same seven rows go from one flat five-way tie at rank 3 to three separate borough winners. Every number was confirmed by running the real query.
- **The lesson's non-obvious moment is the quiz question, not a footnote.** "Three boroughs, so how many rows have `rnk = 1`?" has the intuitive answer 3 and the real answer **4** — Queens ties at the top — which forces the actual insight (`PARTITION BY` sets the comparison group; it never promises a unique winner) instead of stating it.
- **Every behavioral claim was executed, not asserted.** `WHERE rnk = 1` really errors with `column "rnk" does not exist`; `HAVING` really errors with `window functions are not allowed in HAVING`; `ORDER BY` before `PARTITION BY` really is a syntax error. The speaker notes quote those errors verbatim because they were run.
- **A repo-wide accessibility failure was found and fixed at the source.** Every deck this system has ever produced was announcing image filenames to screen readers; the one-line fix in `template/helpers.py` repairs all of them, not just this one.
- **Real technique variety after Day 7 flagged the pressure.** `ARP` is a first-ever use in this module and a genuine archetype fit (being asked about `DENSE_RANK()` you've never used) rather than a forced swap, and it rehearses an honestly-scoped situation the research confirmed is real.

## Weaknesses

- `Query Walkthrough Method` is now on its 3rd module appearance (L2, L6, L8) — the same count that pushed this deck away from Teach-Back and QAR. It remains the correct archetype match for a live SQL question, so it was deliberately not force-swapped, but the rotation pressure now applies to three of the module's techniques.
- The `blanked_code` reveal still marks its filled-in line with a gold ring and no non-colour cue. Partially mitigated (the question slide shows `____` at that exact position and the reveal title reads "Answer: ..."), but a real fix belongs in `template/code_render.py` — deliberately not attempted here, since that highlight's positioning math has a documented history of off-by-one bugs and changing it would need a re-verification pass across every deck.
- The payoff query output never appears on a slide; it exists only as instructor narration. Accepted, because this is a live code-along where students produce the output themselves — but a Fellow who falls behind typing has nothing on screen to answer the quick-fire question from.
- `public_sector` is this module's domain on every single day. Deliberate and accepted (one cumulative database across twelve lectures), but it means this deck contributes no domain rotation.
