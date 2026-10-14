# QA Report — Subquery vs. CTE vs. Window Function: Choosing the Right Tool (Module 3, Day 10)

## 18-Point Scorecard

| # | Check | Result |
|---|---|---|
| 1 | Missing text / diagram exception | Clean — `qa.contrast_check` on the rendered `.pptx` found no empty `TEXT_BOX` shapes. |
| 2 | Wordy/wrapping slides | **Fixed a real, previously-undiscovered, module-wide bug** — the auto-inserted `interview_prep` answer slide's callout box has a fixed height with no dynamic reserve, unlike every other overflow-prone field in this codebase. This deck's own `short_answer` (641 chars) rendered past the box and collided with the footer logo on a real render. Checking every Module 3 deck built so far found **8 of 10 affected** (Days 1, 2, 3, 4, 5, 8, 9, 10 — 497 to 648 chars each); a repo-wide scan of all 58 `deck_spec.yaml` files confirmed Modules 0-2 are unaffected. Fixed permanently with a new `MAX_INTERVIEW_ANSWER_CHARS = 480` check in `qa/contrast_check.py`, and trimmed all 8 affected decks' `short_answer` text to fit — re-verified via real render on 3 of the 8 (Days 1, 9, 10). |
| 3 | Code slides have code + tested | **All 4 code slides validated for real**, replaying Days 2-9's own cumulative setup first (34 statements, skipping each day's own `expected_error` slide). Confirmed the deck's two central "same answer, different shape" claims: the nested-subquery and CTE rewrites return identical rows (Corner Bistro/Green Leaf Cafe, real citywide average 0.7143); the correlated-subquery and window-function rewrites return identical rows with the same real per-borough averages (Brooklyn 0.33/Manhattan 2.00/Queens 0.00). Also fact-checked a claim asserted only in a `check_understanding.answer` (not a formal code slide): filtering directly on a window function in `WHERE` produces the exact quoted error `window functions are not allowed in WHERE` — confirmed verbatim. Full detail in `code_validation_report.md`. |
| 4 | Recall builds on prior skills | Clean — real recall CFU on what a window function does to row count sets up the whole second half. |
| 5 | Spaced learning | `qa.skill_coverage_check` (10/12 lectures): 3 new spacing "gaps" (`null handling`, `coalesce`, `materialized view` — all Day 9's own brand-new skills, only 1 lesson elapsed since) are expected/early-stage, not real findings yet. |
| 6 | Engagement strategies used | Poll, would-you-rather, game/quick-fire, whiteboard, discussion — 5 distinct modes spanning Retrieval, Critical Thinking, Business Thinking, Collaborative, and real Interview framing. |
| 7 | WCAG accessibility | 4 buckets, 5/5/5/5 — see below. WCAG 2.2 confirmed current. |
| 8 | Notes on all slides except transitions | Clean. |
| 9 | No cutoff text | Fixed — see #2. |
| 10 | Text fits its box | Fixed — see #2. |
| 11 | Icons used properly | Clean — confirmed via real render review, including the module's first `framework_columns` slide. |
| 12 | Case study source + clickable link | N/A — no case study this deck. |
| 13 | Whitespace / Mayer's principles | Bucket 17: 4/5 — well-segmented; render review found no crowding elsewhere. |
| 14 | AI-sounding language | Clean. |
| 15 | Dead resource links | 0 confirmed dead. All 9 URLs report `UNCERTAIN` from the same known local SSL cert-verification gap (not the sites). |
| 16 | Logical flow / dependency ordering | Bucket 3: 4/5. Bucket 4: 5/5. Bucket 16: 4/5 — real, explicit callback to Day 9's `EXPLAIN ANALYZE` mid-lesson. |
| 17 | No day/deck numbers | Fixed — a hardcoded "Week 1" reference introduced by my own new `closing` slide notes was rephrased relatively before shipping. |
| 18 | Instructor notes completeness | `instructor_prep.md` generated with all 11 standard sections. Timing: ~56 min total (~16 min code-along) — within the 50-60 min target. |

## Code-Along Scorecard

| Bucket | Score | Justification |
|---|---|---|
| Scenario & Framing Quality | 5/5 | Concrete, directly maps onto all 4 code cells; no exercise spoiler. |
| Instructor Note Depth & Analogies | 5/5 (was 4/5) | Fixed — **a second real, module-wide generator bug**: `build_terminal_worksheet.py`/`build_notebook.py` only ever rendered a code slide's backup analogies, never the primary `analogy.mapping`, even though the primary renders visibly on the actual slide. An instructor working from just the generated worksheet never saw what "the labelled-loop comparison" the notes reference actually says. Fixed in both generators; rebuilt every other already-built Module 3 deck (Days 1-9) to apply retroactively, all confirmed to still build clean. |
| Scaffolding Fade | 5/5 (was 3/5) | Fixed — the window-function tag's 3rd module occurrence (`OVER (PARTITION BY ...)` in an `AVG` context) was *more* explicit than its 2nd occurrence (Day 8), a real regression; compressed to match. The brand-new correlated-subquery tag correctly stayed fully explicit at its 1st occurrence, and the reconnect scaffolding's fade to zero (folded into prose) was confirmed as a deliberate final step, not an omission. |

## Accessibility (4 buckets)

| Bucket | Score | Justification |
|---|---|---|
| Text Alternatives | 5/5 | No images; all visuals are native text/table/code/`framework_columns` shapes. |
| Reading Order & Labels | 5/5 | Every title/topic/label specific; `framework_columns` panels render as real, correctly-ordered text (verified against the layout function directly). |
| Color Independence & Contrast | 5/5 | Answers always stated in notes/explanation, never color alone; `framework_columns` panels share one fill color, distinguished only by text. |
| Cognitive Load & Motion | 5/5 | Max 4 bullets/card-items; no workflow diagrams; zero `motion_note` entries. |

## Instructional Quality (17 scored buckets, 1 N/A)

*Scores reflect the deck after applying every finding.*

| Bucket | Score | Justification |
|---|---|---|
| 1. Learning Objectives | 5/5 | All 3 objectives get dedicated, well-sequenced slides; no scope creep. |
| 2. Misconceptions | 5/5 (was 4/5) | Fixed — a table slide's notes contradicted its own visible content ("name the third one as a promise, not a definition" when the row already defined it); reworded to state accurately that the term is defined here but not yet demonstrated in code. |
| 3. Logical Flow & Transitions | 5/5 (was 4/5) | Fixed — the same notes contradiction above, plus one transition missing its `style` field (silently defaulting to `bold` while its 3 siblings used real variety); given `icon_hero` to match its code-along-leading siblings. |
| 4. Prior-Knowledge Ties | 5/5 | Both `dependent_skills` verified against `curriculum_log.yaml`'s real history (Days 5-8). |
| 5. Demo Sets Up Exercise | 4/5 (was 2/5) | Fixed — `meta.exercise` correctly points at Day 11's lab per the schema's own "post-lecture assignment, whatever's scheduled next" convention (confirmed against `content_spec/SCHEMA.md`'s literal field comment), but nothing in the deck acknowledged that lab is a different topic (schema critique, not tool-choice) until now; added a `closing` slide stating the jump honestly and tying today's own practice to the project's written mapping instead. |
| 6. Engagement & Gamification | 5/5 | 5 distinct modes with genuine collaborative structure; career-relevance via interview_prep and Teach-Back. |
| 7. Summary Quality | 5/5 | Bridge explicitly ties to the project's seven-question mapping requirement. |
| 8. Interview-Prep Coverage | 5/5 | Both interview topics covered with real, well-verified sourcing (PREP, Teach-Back); no unscoped performance claims. |
| 9. Backwards-Design Linkage | 5/5 | LO slide and bridge both explicitly tie to the project's mapping requirement. |
| 10. Question Quality & Bloom's | 5/5 | Only 1/5 CFUs at `remember`; real climb to apply/analyze/evaluate; genuine format variety. |
| 11. Analogies | 5/5 | Two deep-treatment analogies (music, sports), each correctly targeted and now correctly rendered in the worksheet too (see code-along fix). |
| 12. Title Framing | 5/5 | Every slide title is a real headline with the takeaway stated. |
| 13. Diagram & Table Fit | 5/5 | Three `table` slides correctly used for lookup/definition content; `framework_columns` is the right fit for a named 4-item decision routine. |
| 14. Multi-tool Coverage | N/A | `meta.tools` lists a single tool. |
| 15. Scaffolding & Project Alignment | 4/5 | `collaborative` scaffolding genuinely reflected in the peer whiteboard/role-play activities. |
| 16. Cross-Lecture Continuity | 4/5 | Real, explicit mid-lesson callback to Day 9's `EXPLAIN ANALYZE`; opening doesn't reference Day 9, but that's correct since `dependent_skills` accurately names Days 5-8 as the real prerequisites. |
| 17. Whitespace & Multimedia | 4/5 | Clean segmenting; content is inherently abstract (SQL logic), so no concrete-object image opportunity was missed. |
| 18. Factual Accuracy & Claim Scope | 5/5 | Unusually disciplined claim-scoping — CTE materialization behavior explicitly scoped to PostgreSQL vs. SQL Server vs. MySQL; "once per row" explicitly hedged against a literal-execution misreading. |

## Overall grade

Accessibility average: **5.0/5**. Instructional average (17 scored, 1 N/A): **4.7/5**. Code-along average: **5.0/5**. Combined: **A**.

## Strengths

- Found and permanently fixed two real, previously-undiscovered generator bugs during this deck's recovery, both benefiting every deck in the repo going forward: the `interview_prep` answer box's missing overflow protection (8 of 10 Module 3 decks were silently affected, now all fixed and lint-guarded), and the primary-analogy-never-renders gap in both worksheet/notebook generators (retroactively fixed across all of Days 1-9 too).
- The deck's own central teaching claim — that three genuinely different-looking queries (nested subquery, CTE, correlated subquery, window function) return provably identical results — is independently verified as real on real data, not just asserted, including a fact-check of a claim that wasn't even in a formal code slide.
- Recovered cleanly from two independent crashes in the same build (a session API limit on the main agent, a machine-sleep crash on its own dispatched subagent) without losing any of the genuinely excellent underlying content or needing to restart from scratch.
- Every one of 6 real findings across 3 QA passes was fixed with genuine content changes, not surface patches: a notes/content contradiction, a missing transition style, a scaffolding regression, and a new `closing` slide that honestly names a real topic jump instead of leaving it unstated.

## Weaknesses

- This module's spacing "gaps" (`null handling`, `coalesce`, `materialized view` — all from Day 9, only 1 lesson old) are expected at this stage, not real findings.
- The interview-technique reuse pattern flagged in Day 9's own qa_report (Investigation Framework, PREP, Teach-Back, QAR each used 2-3 times) continues — this deck reuses PREP and Teach-Back, both still genuinely best-fit for their question shapes. Worth a fresh technique in Days 11-12 if a naturally-fitting topic comes up.
