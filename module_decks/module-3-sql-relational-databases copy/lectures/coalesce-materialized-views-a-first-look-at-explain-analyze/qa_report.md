# QA Report — COALESCE, Materialized Views & a First Look at EXPLAIN ANALYZE (Module 3, Day 9)

## 18-Point Scorecard

| # | Check | Result |
|---|---|---|
| 1 | Missing text / diagram exception | Clean — `qa.contrast_check` on the rendered `.pptx` found no empty `TEXT_BOX` shapes. |
| 2 | Wordy/wrapping slides | Clean — one heuristic overflow warning on the compare_contrast slide's "similarities" bullets (same layout/estimate as Day 8's identical slide, already visually confirmed clean there) is a known false positive, re-confirmed via LibreOffice/PyMuPDF render this session: plenty of margin, no cutoff. |
| 3 | Code slides have code + tested | **All 7 code slides validated for real**, replaying Days 2-8's own cumulative setup first (28 statements, skipping each day's own `expected_error` slide). Confirmed every specific numeric/output claim in this deck against real Postgres output: `= NULL` returns 0 rows, `IS NULL` returns 2; the score average is genuinely 9.50 (real) vs. 4.75 (COALESCE-to-zero); the materialized view genuinely shows `tv=3` before `REFRESH` and `tv=4` after; both `EXPLAIN ANALYZE` outputs match exactly (5 lines with `rows=4` guessed/`rows=3` actual, then 3 lines). Full detail in `code_validation_report.md`. |
| 4 | Recall builds on prior skills | Clean — real recall CFU ties directly into today's own NULL topic (a `LEFT JOIN` producing empty cells). |
| 5 | Spaced learning | `qa.skill_coverage_check` (9/12 lectures): **zero spacing/coverage gaps of any kind** — maintained from Day 8. |
| 6 | Engagement strategies used | Poll (×2), Game/Quick-Fire, Turn and Talk/Discussion — spans Retrieval, Business Thinking, and real Interview framing. |
| 7 | WCAG accessibility | 4 buckets, 5/5/5/5 — see below. WCAG 2.2 confirmed current. |
| 8 | Notes on all slides except transitions | Clean. |
| 9 | No cutoff text | Clean — see #2. |
| 10 | Text fits its box | Clean. |
| 11 | Icons used properly | Clean — confirmed via real render review. |
| 12 | Case study source + clickable link | N/A — no case study this deck. |
| 13 | Whitespace / Mayer's principles | Bucket 17: 4/5 — well-segmented; render review found no crowding. |
| 14 | AI-sounding language | Clean. |
| 15 | Dead resource links | 0 confirmed dead. All 10 URLs report `UNCERTAIN` from the same known local SSL cert-verification gap (not the sites) — includes the PostgreSQL official docs (×6), a real interactive plan visualizer (Dalibo), a LearnSQL article, and a YouTube video resource. |
| 16 | Logical flow / dependency ordering | Bucket 3: 5/5. Bucket 4: 5/5. Bucket 16: 5/5 (was 4/5, see findings) — fixed a narrative mismatch where the scenario's "manager liked the borough rankings" hook implied the materialized view stores rankings, when it actually stores pre-ranking totals; reworded to correctly separate the Day 8 callback from today's actual deliverable. |
| 17 | No day/deck numbers | Clean. |
| 18 | Instructor notes completeness | `instructor_prep.md` generated with all 10 standard sections. Timing: ~60 min total (~24 min code-along) — right at the target ceiling, not over it. |

## Code-Along Scorecard

| Bucket | Score | Justification |
|---|---|---|
| Scenario & Framing Quality | 5/5 | Concrete manager/dashboard scenario maps directly onto all three sections (holes → COALESCE, recompute cost → materialized view, cost measurement → EXPLAIN ANALYZE); no exercise to spoil (fully deferred to the project). |
| Instructor Note Depth & Analogies | 5/5 | Every code cell explains the *why*, proactively flags surprising behavior with sourced doc quotes, and analogies (+ backups) render only in the instructor file as designed. |
| Scaffolding Fade | 5/5 (was 4/5) | Fixed — the `\c` reconnect TODO repeated Day 8's exact wording verbatim at `database-administration`'s 3rd module occurrence instead of continuing to compress; shortened further to just `-- TODO: reconnect`. All genuinely new syntax (`ALTER TABLE ADD COLUMN`, `COALESCE`, `CREATE`/`REFRESH MATERIALIZED VIEW`, `EXPLAIN ANALYZE`) correctly stayed fully explicit, untouched. |

## Accessibility (4 buckets)

| Bucket | Score | Justification |
|---|---|---|
| Text Alternatives | 5/5 | No images in this deck; all visuals are native, real-text shapes. |
| Reading Order & Labels | 5/5 | Every title/prompt/topic specific and descriptive; sequence reads coherently linearly. |
| Color Independence & Contrast | 5/5 | Answers always stated in text/notes, never color alone; icon+label pairing used consistently instead of color cues. |
| Cognitive Load & Motion | 5/5 | All card lists ≤4 items; no diagram slides; zero `motion_note` entries. |

## Instructional Quality (17 scored buckets, 1 N/A)

*Scores reflect the deck after applying every finding.*

| Bucket | Score | Justification |
|---|---|---|
| 1. Learning Objectives | 5/5 | All 3 objectives get multiple slides each; explicit "By the End of Today" slide maps 1:1; no scope creep. |
| 2. Misconceptions | 5/5 | The NULL ≠ zero/empty-string misconception is directly confronted twice, with no premature jargon. |
| 3. Logical Flow & Transitions | 5/5 | Concept-before-practice throughout; all 5 transitions carry real connecting insight; genuine style variety. |
| 4. Prior-Knowledge Ties | 5/5 | Explicit `LEFT JOIN` retrieval warm-up; materialized-view query explicitly named as reusing the prior "totals" pattern. |
| 5. Demo Sets Up Exercise | 5/5 | Clear, specific project tie in the bridge notes; nothing to spoil. |
| 6. Engagement & Gamification | 4/5 | Real type variety (poll/game/discussion) with genuine pair-share structure; correctly no liberatory framing forced onto pure-technical content. |
| 7. Summary Quality | 5/5 | Bridge genuinely recaps all 3 tools' through-line and names the project tie for each explicitly. |
| 8. Interview-Prep Coverage | 4/5 | Both interview topics get real, verified coverage with proper technique coaching (PREP, Investigation Framework). `Investigation Framework` technique reuse (also used Day 2) considered and left as-is — genuinely the best-fit framework for both "why did X happen" questions, same judgment-call precedent set for Teach-Back/QAR on Day 7; tracked, not force-swapped. |
| 9. Backwards-Design Linkage | 5/5 | Objectives and bridge both explicitly tie every piece of content to a specific graded project requirement. |
| 10. Question Quality & Bloom's | 5/5 | Real distribution (1 remember/1 evaluate/1 apply/1 analyze); one genuine `question_style: interview`; every answer carries a plausible source. |
| 11. Analogies | 5/5 | Deep treatment (primary + 2 backups) correctly reserved for the two genuinely hardest concepts (NULL three-valued logic, materialized-view staleness). |
| 12. Title Framing | 5/5 (was 4/5) | Fixed — two titles read as topic labels rather than headlines ("Real Inspections, Real Missing Data"; "Reading That Plan, Line by Line"); rewritten to state their real takeaways. |
| 13. Diagram & Table Fit | 4/5 | `compare_contrast` and both `table` slides are the right representation for their content; a nested-plan diagram opportunity was considered but the two demoed plans are both flat (not nested), so the concept genuinely isn't in play here — no diagram needed for what's actually taught. |
| 14. Multi-tool Coverage | N/A | `meta.tools` lists a single tool. |
| 15. Scaffolding & Project Alignment | 5/5 | `scaffolding_level: guided` matches the module plan exactly; explicitly preempts the project's own "pandas instead of SQL" common mistake. |
| 16. Cross-Lecture Continuity | 5/5 (was 4/5) | Fixed — the scenario's "manager liked the borough rankings" hook implied Day 8's `RANK()` output gets materialized today, but the actual view stores pre-ranking totals; reworded so the Day 8 callback and today's actual deliverable are both stated accurately. |
| 17. Whitespace & Multimedia | 4/5 | Clean segmenting; render review confirmed no crowding, including on the heuristically-flagged compare_contrast slide. |
| 18. Factual Accuracy & Claim Scope | 5/5 | Unusually disciplined claim-scoping (e.g. explicitly separates Postgres's lack of auto-refresh from Oracle/BigQuery/SQL Server's different behavior); every non-obvious claim independently confirmed via real Docker query output. |

## Overall grade

Accessibility average: **5.0/5**. Instructional average (17 scored, 1 N/A): **4.8/5**. Code-along average: **5.0/5**. Combined: **A**.

## Strengths

- Every single specific numeric/output claim in this deck — the 9.50→4.75 average, the materialized view's 3→4 refresh, both exact `EXPLAIN ANALYZE` outputs — was independently verified as real, not asserted, including a live proof query the instructor notes tell them to run in class if there's time.
- The deck's own claim-scoping discipline is unusually strong: it explicitly separates what's true of core PostgreSQL (no auto-refresh) from what's true of other databases (Oracle/BigQuery/SQL Server), rather than overgeneralizing — exactly the kind of scoping bug this whole QA process exists to catch, done right the first time.
- This deck was recovered from a genuinely interrupted build (the original build agent was cut off mid-task by a session API limit) — every remaining step (Docker validation, visual render review, QA dispatch, findings, report) was completed cleanly from that recovery point with no loss of quality.
- Three real findings across all 3 QA passes were fixed with genuine content changes: two title rewrites, a scaffolding-fade correction, and a narrative-accuracy fix connecting this lesson's scenario honestly to what actually gets built.

## Weaknesses

- `Investigation Framework` is now used twice across the module (Days 2 and 9) — genuinely the best-fit technique both times, not force-swapped, but worth tracking for variety in Days 10-12.
- Timing sits right at the 60-minute ceiling — worth a light trim if a future pass needs headroom, though within this codebase's own "coarse estimate" tolerance.
- This module's own last open item (spacing gaps) is now fully closed as of Day 8 and remains closed here — no new weaknesses of that kind to report.
