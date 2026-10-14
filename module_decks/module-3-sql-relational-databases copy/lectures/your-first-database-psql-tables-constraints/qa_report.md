# QA Report — Your First Database: psql, Tables & Constraints (Module 3, Day 2)

## 18-Point Scorecard

| # | Check | Result |
|---|---|---|
| 1 | Missing text / diagram exception | Clean — no empty text shapes. |
| 2 | Wordy/wrapping slides | Fixed — one code slide (`CREATE TABLE inspections` + its `INSERT`) needed ~13 visual lines against an ~11-line fit; split into two separate code slides. |
| 3 | Code slides have code + tested | **All 7 code slides validated for real** against a live PostgreSQL 16 instance (throwaway Docker container, torn down after) — this repo's first-ever real SQL execution validation. All 7 PASS, including the `expected_error: NotNullViolation` slide raising exactly that error. Full detail in `code_validation_report.md`. |
| 4 | Recall builds on prior skills | Clean — a real discussion-mode PK-vs-FK recall opens the deck, verified against Day 1's own content. |
| 5 | Spaced learning | `qa.skill_coverage_check` (module-wide, 2/12 lectures built): 2 spacing gaps (`terminal-command-line`, `data-modeling`, each only Day 1 so far) — expected at this build stage, not a defect in this specific deck. |
| 6 | Engagement strategies used | `discussion`, `game` (×2), `poll`, `would_you_rather` — 5 techniques across Retrieval/Gamified/Critical-Thinking/Career types. |
| 7 | WCAG accessibility | 4 buckets, 5/5/5/5 — see below. |
| 8 | Notes on all slides except transitions | Clean. |
| 9 | No cutoff text | Clean — see #2. |
| 10 | Text fits its box | Clean — `check_no_offslide_shapes` found zero hits. |
| 11 | Icons used properly | Clean — confirmed via real LibreOffice render review; SQL syntax highlighting (Pygments) and the `psql` terminal label both render correctly for this repo's first-ever `language: sql` code slides. |
| 12 | Case study source + clickable link | N/A — no case study this deck (a hands-on syntax day, not a motivating-narrative day). |
| 13 | Whitespace / Mayer's principles | Bucket 17: 4/5 — clean segmenting into small code chunks; real `icon_hero` on the tool-introduction slide. |
| 14 | AI-sounding language | Clean after fixes — em-dash density and several colon-capitalization issues fixed. |
| 15 | Dead resource links | 0 confirmed dead. Both URLs report `UNCERTAIN` from a local SSL cert-verification gap (not the sites) — both independently confirmed live via direct fetch during authoring (PostgreSQL official docs, SQLBolt). |
| 16 | Logical flow / dependency ordering | Bucket 3: 4/5. Bucket 4: 5/5. Bucket 16 (cross-lecture continuity vs. Day 1): 5/5 — opens with Day 1's own bridge language, no forward references to unlearned SQL (joins/CTEs). |
| 17 | No day/deck numbers | Fixed — 3 hardcoded "Sprint Day 1"/"Sprint Day 2" references rephrased relatively. |
| 18 | Instructor notes completeness | `instructor_prep.md` generated with all standard sections. |

## Code-Along Scorecard

| Bucket | Score | Justification |
|---|---|---|
| Scenario & Framing Quality | 5/5 | Concrete NYC-restaurant-inspection framing, maps directly to all 7 code steps, ties to the deferred project without spoiling it. |
| Instructor Note Depth & Analogies | 5/5 (was 3/5) | Fixed — found and fixed a real generator bug: `build_terminal_worksheet.py` never rendered a slide's `analogy.backups` at all (unlike `build_notebook.py`, which already did), so this deck's own analogy content — and every future SQL deck's — would have silently dropped backup analogies from the instructor worksheet. Ported the same rendering block; verified safe no-op when `backups` is absent (this deck's one analogy has none authored). |
| Scaffolding Fade | 3/5 (limited applicability) | `relational-databases`'s only repeat occurrence (Day 1 → Day 2) has no prior student-facing *code* to fade from, since Day 1 was paper-only — not a real violation, just not a demonstrated fade either. |

## Accessibility (4 buckets)

| Bucket | Score | Justification |
|---|---|---|
| Text Alternatives | 5/5 | No images in this deck (pure code/text/table) — nothing to fail. |
| Reading Order & Labels | 5/5 | Clean linear sequence; every title/prompt specific. |
| Color Independence & Contrast | 5/5 | No color-only meaning; no new color pairs. |
| Cognitive Load & Motion | 5/5 | Low bullet/card counts; zero diagrams; zero motion notes. |

*One minor, deck-non-specific note: a code slide's `domain_note` field (e.g. explaining `\c` is a psql meta-command, not SQL) only ever reaches the student notebook/worksheet export, never the deck's own speaker `notes` or the slide itself — a template-level pattern across the whole repo, not an authoring bug. Applied a light fix here (folded the explanation into this slide's own `[SCRIPT]` note) rather than a generator change, since the field is working as designed elsewhere.*

## Instructional Quality (18 buckets)

*Scores reflect the deck after applying every finding — buckets 8, 9, 10, 12 were the ones materially changed by fixes.*

| Bucket | Score | Justification |
|---|---|---|
| 1. Learning Objectives | 5/5 | Both objectives get dedicated, sequenced code-along coverage. |
| 2. Misconceptions | 4/5 | "Constraints are optional best practice" misconception directly named; jargon defined at first use. |
| 3. Logical Flow & Transitions | 4/5 (was docked for style-sameness) | Fixed — added `panel_preview` to a second transition (was only `icon_hero` once, everything else `bold`). |
| 4. Prior-Knowledge Ties | 5/5 | Real, verified match to Day 1's PK/FK/normalization; genuine retrieval CFU opens the deck. |
| 5. Demo Sets Up Exercise | 5/5 | `uses_same_scenario_as_lecture: false`, clearly explained why. |
| 6. Engagement & Gamification | 4/5 | 5 techniques spanning multiple types; no forced framing. |
| 7. Summary Quality | 5/5 | Bridge names specifics, connects forward; no hardcoded logistics. |
| 8. Interview-Prep Coverage | 5/5 (was 4/5) | Fixed — one CFU converted to `question_style: interview` with a matched `Query Walkthrough Method` technique (a distinct technique from the deck's own `interview_prep` slide's `Investigation Framework`, for real variety). |
| 9. Backwards-Design Linkage | 5/5 (was 4/5) | Fixed — `closing` now also names the project tie; all three required touchpoints (objectives/bridge/closing) covered. |
| 10. Question Quality & Bloom's | 5/5 (was 4/5) | Fixed alongside #8. |
| 11. Analogies | 4/5 | One well-targeted analogy (CHECK-as-bouncer) on the lesson's real enforcement-mechanism concept; appropriately restrained. |
| 12. Title Framing | 4/5 (was 3/5) | Fixed — 2 of 3 flagged procedural code-slide titles reframed as headlines ("One Command Creates a Real Database," "One INSERT, Four Rows At Once," "The Same INSERT Pattern, a Second Table"). |
| 13. Diagram & Table Fit | 5/5 | No diagram forced where the code-along already shows sequence; recap table used correctly; icons reused consistently. |
| 14. Multi-tool Coverage | N/A | Single tool (PostgreSQL/psql). |
| 15. Scaffolding & Project Alignment | 5/5 | Matches "guided" scaffolding; directly preempts the project's own common mistake #4 (skipping NOT NULL/CHECK). |
| 16. Cross-Lecture Continuity | 5/5 | Opens with Day 1's own bridge language; no forward references to unlearned SQL. |
| 17. Whitespace & Multimedia | 4/5 | Real `icon_hero` on tool intro; well-segmented code chunks. |
| 18. Factual Accuracy & Claim Scope | 5/5 | FK enforcement and `NotNullViolation` claims correctly scoped and verified for real. |

## Overall grade

Accessibility average: **5.0/5**. Instructional average (excluding N/A): **4.6/5**. Combined: **A**.

## Strengths

- First-ever real SQL code validation in this repo's history — every statement confirmed against a live Postgres instance, not just eyeballed.
- Found and fixed two real, previously-undiscovered generator bugs during this single build (fence-language hardcoding, dropped analogy backups) — both would have silently repeated across every remaining Module 3 SQL deck if left unfixed.
- Clean, verified continuity with Day 1: reuses its own vocabulary/analogy correctly, no forward references to unlearned material.
- The constraint-violation demo is a real, live-failing moment tied directly back to Day 1's case study payoff — not just asserted, actually run and confirmed.

## Weaknesses

- This module's spaced-practice picture (`terminal-command-line`, `data-modeling`) can't resolve until more lectures exist — expected at 2-of-12, not a defect.
- Scaffolding-fade bucket has limited signal this early, since Day 1 was code-free.

## Code validation

**7/7 PASS** — see `code_validation_report.md` for full detail (real Docker/Postgres execution, not simulated).

## Visual render review

Required and completed twice (before and after QA fixes) — all 29 rendered slides inspected directly both times. SQL syntax highlighting, the `psql` terminal label, the analogy callout, and the new `panel_preview` transition all confirmed rendering cleanly with no overlap/overflow.
