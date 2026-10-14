# QA Report — CTEs II: Decomposing a Multi-Table Question, With a Peer (Module 3, Day 6)

## 18-Point Scorecard

| # | Check | Result |
|---|---|---|
| 1 | Missing text / diagram exception | Clean — `qa.contrast_check` on the rendered `.pptx` found no empty `TEXT_BOX` shapes. |
| 2 | Wordy/wrapping slides | Fixed — the "Step 2: Chaining the Second CTE" code slide needed ~19 visual lines against the ~11-line fit (2 CTEs + a final query across 3 joined tables); compacted via `USING` joins instead of `ON`, unqualified column references, shorter aliases, and a shorter CTE name (`restaurant_summary` → `totals`, safe since it's newly introduced on this slide, unlike `violation_counts` which had to stay identical to the prior slide's name) down to exactly 11 lines — confirmed both by the deterministic lint and a real LibreOffice render. |
| 3 | Code slides have code + tested | **All 4 code slides validated for real**, replaying Days 2-5's own cumulative setup first (20 statements, skipping each day's own `expected_error` slide). Confirmed the two central claims are genuinely real on real data: Corner Bistro has exactly 3 inspections and 3 total violations, Green Leaf Cafe exactly 1 of each — matching the deck's own poll answer. Full detail in `code_validation_report.md`. |
| 4 | Recall builds on prior skills | Clean — real recall CFU recites Day 5's own subquery-vs-CTE distinction before building on it. |
| 5 | Spaced learning | `qa.skill_coverage_check` (6/12 lectures): 2 ongoing spacing gaps (`terminal-command-line` — Day 1 only; `database-administration` — Day 2 only) — expected at this build stage, no `ALIGNMENT_REPORT.md` yet (module incomplete). |
| 6 | Engagement strategies used | Turn and Talk (×2), Whiteboard/Collaborative Board, Poll — spans Retrieval, Collaborative Planning, Predict/Verify, and Critical-Thinking. |
| 7 | WCAG accessibility | 4 buckets, 5/5/5/5 — see below. WCAG 2.2 confirmed as the current W3C Recommendation (WCAG 3.0 still a Working Draft). |
| 8 | Notes on all slides except transitions | Clean. |
| 9 | No cutoff text | Clean — see #2; confirmed via real render. |
| 10 | Text fits its box | Clean. |
| 11 | Icons used properly | Clean — confirmed via real render review; `compare_contrast`'s `warning`/`sql` icons and the `join`/`goal`/`checklist` icon_heros are all established icon-manifest members reused from prior days. |
| 12 | Case study source + clickable link | N/A — no case study this deck. |
| 13 | Whitespace / Mayer's principles | Bucket 17: 4/5 — well-segmented; render review found no crowding, including on the newly-lengthened whiteboard prompt. |
| 14 | AI-sounding language | Fixed — 2 fields exceeded em-dash density (3 each) after new explanatory notes were added; both rewritten with periods instead. |
| 15 | Dead resource links | 0 confirmed dead. All 3 URLs report `UNCERTAIN` from a local SSL cert-verification gap (not the sites) — all 3 reused, already-verified from Day 5 (PostgreSQL official docs, GeeksforGeeks, SQLBolt). |
| 16 | Logical flow / dependency ordering | Bucket 3: 4/5 (was 3/5, see findings). Bucket 4: 5/5. Bucket 16 (cross-lecture continuity): 4/5 (was 2/5, see findings) — opens by explicitly picking up Day 5's own bridge language. |
| 17 | No day/deck numbers | Fixed — a "Day 9" reference introduced by a new explanatory note was rephrased relatively ("later this module"). |
| 18 | Instructor notes completeness | `instructor_prep.md` generated with all 8 standard sections. Timing: ~52 min total (~12 min code-along) — within the 50-60 min target. |

## Code-Along Scorecard

| Bucket | Score | Justification |
|---|---|---|
| Scenario & Framing Quality | 4/5 | Concrete, ties directly to the cells that follow; correct second-person voice; no exercise spoiler. |
| Instructor Note Depth & Analogies | 5/5 (was 3/5) | Fixed — added explanatory notes for two syntax choices that were used without comment: `COUNT(col)` vs. `COUNT(*)` under a `LEFT JOIN`, and `USING (...)` as `ON`-clause shorthand (Step 1); `COALESCE`'s NULL-handling purpose (flagged as a Day-9 preview) and the optional `AS` keyword (Step 2). |
| Scaffolding Fade | 4/5 (was 2/5) | Fixed — the `CREATE TABLE`/`INSERT` `starter_code` had regressed to (or exceeded) Lesson-1-level explicitness despite being `sql`'s 5th occurrence in this module, with Day 4 already having proven a compressed version mid-module; both compressed to one-line TODOs matching Day 4's own terse style. The genuinely new content (Step 1→2 CTE chaining) already faded correctly and was left untouched. |

## Accessibility (4 buckets)

| Bucket | Score | Justification |
|---|---|---|
| Text Alternatives | 5/5 | No images in this deck; all visuals are native vector `icon_hero`/`compare_contrast` shapes always paired with real accompanying text. |
| Reading Order & Labels | 5/5 | Shape-build order matches visual reading order in every layout used; every title/prompt/label is specific and content-descriptive. |
| Color Independence & Contrast | 5/5 | Poll/CFU answers live only in notes/answer-reveal, never color-coded on-slide; `compare_contrast` color tints are always backed by explicit text labels; no unverified color pairs introduced. |
| Cognitive Load & Motion | 5/5 | All bullet/card lists stay under the density threshold; no `motion_note` anywhere. |

## Instructional Quality (18 scored buckets)

*Scores reflect the deck after applying every finding.*

| Bucket | Score | Justification |
|---|---|---|
| 1. Learning Objectives | 5/5 | Both objectives (peer decomposition across 3+ tables; chaining CTEs) get dedicated, explicit coverage. |
| 2. Misconceptions | 4/5 | The JOIN-bolt-on and overcounting misconceptions both surface in `notes` and get revisited in the `compare_contrast`/evaluate discussion. |
| 3. Logical Flow & Transitions | 4/5 (was 3/5) | Fixed — the unexplained `COALESCE`/`USING` syntax was a real prerequisite-coherence break; both now get an explanatory note at first use. |
| 4. Prior-Knowledge Ties | 5/5 | Real recall CFU for Day 5's exact subquery-vs-CTE distinction. |
| 5. Demo Sets Up Exercise | 4/5 | Clear "no new exercise today" framing with a real, explicit project tie. |
| 6. Engagement & Gamification | 5/5 | Good type variety (turn-and-talk, collaborative whiteboard, poll); on-brand voice. |
| 7. Summary Quality | 5/5 | Bridge summarizes and connects forward; closing has no hardcoded volatile logistics. |
| 8. Interview-Prep Coverage | 4/5 (was slightly under, see #5) | Fixed — `notes` now names Query Walkthrough Method's actual steps (Understand, Plan, Write, Explain, Validate), matching Day 5's PREP-naming precedent; the `short_answer` already walked all 5 steps in substance. |
| 9. Backwards-Design Linkage | 5/5 | Explicit project tie in objectives, mid-deck ("Why This Matters for Your Project"), and closing/interview_prep. |
| 10. Question Quality & Bloom's | 4/5 | Good bloom spread (1 remember of 4); the "query plan" term-before-definition issue is fixed (see #16), but no `question_style: interview` this deck — considered and deliberately **not** forced onto an existing CFU, since `interview`-style requires a web-verified genuinely-common interview topic and "was chaining necessary" is deck-specific, not an external interview topic; left open as a real, worth-tracking gap for Day 7+. |
| 11. Analogies | 5/5 | Travel primary + music backup analogy, correctly targeted at the one genuinely hard new concept (CTE chaining), no stacking. |
| 12. Title Framing | 4/5 | Most titles state a real takeaway; the compare_contrast title (fixed for length this session) and a couple of code-slide titles lean slightly label-y. |
| 13. Diagram & Table Fit | 4/5 | `table`/`compare_contrast` both well-matched; a `workflow_linear` for the chained-CTE "by name" reference was considered but narrowly fails the one-sentence test at only 2 steps — not required. |
| 14. Multi-tool Coverage | N/A | `meta.tools` lists a single tool. |
| 15. Scaffolding & Project Alignment | 5/5 | `collaborative` scaffolding genuinely reflected in the real peer-planning whiteboard activity; directly preempts `PROJECT.md`'s named "unfiltered-join overcounting" mistake. |
| 16. Cross-Lecture Continuity | 4/5 (was 2/5) | Fixed — `COALESCE` (real Day-9 content, not in this lesson's own objectives) and `USING` (never otherwise taught in the module as built) were both silent forward-references/unexplained-assumption bugs; both now get an explanatory note flagging scope. |
| 17. Whitespace & Multimedia | 4/5 | Clean segmenting; render review confirmed no crowding even after the whiteboard prompt and two notes fields grew longer. |
| 18. Factual Accuracy & Claim Scope | 5/5 | No overgeneralized or uncited non-obvious claims; all data claims independently confirmed real via Docker validation. |

## Overall grade

Accessibility average: **5.0/5**. Instructional average (17 scored buckets, 1 N/A): **4.5/5**. Code-along average: **4.3/5**. Combined: **A**.

## Strengths

- Every one of 10 real findings across 3 independent QA passes was fixed with genuine content changes: a term renamed to dodge a real Day-9 terminology collision, 2 scaffolding regressions corrected back to the module's own established fade, 3 unexplained-syntax forward-references closed with real explanatory notes, and an interview-technique's actual steps named explicitly.
- The chained-CTE code slide's central claim (Corner Bistro 3/3, Green Leaf Cafe 1/1) is independently verified as real on real cumulative data, not just asserted — and the compaction needed to fit the ~11-line budget (renaming a newly-introduced CTE, switching to `USING`) was applied carefully enough to preserve full correctness and pedagogical clarity, confirmed by both a real render and a real query run.
- A genuinely difficult formatting constraint (a 2-CTE, 3-table chained query in ~11 visual lines) was solved through real SQL simplification (unqualified columns, `USING` joins) rather than by cutting content or silently exceeding the budget.

## Weaknesses

- This module's spacing gaps (`terminal-command-line`, `database-administration`) remain open — expected at 6-of-12 lectures, not a defect.
- Zero `check_understanding` slides in this deck carry `question_style: interview`, despite the module plan flagging SQL as a strong fit for a deliberate interview-style push — deliberately not force-fit here without proper topic verification; worth addressing with a genuinely-verified interview topic in an upcoming lesson.
- `PREP`/`Query Walkthrough Method` technique variety across the module is worth continued tracking as Days 7+ get built.
