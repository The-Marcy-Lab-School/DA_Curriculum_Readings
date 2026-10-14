# QA Report — AI-Assisted Code Review: Find the Bug, With a Partner

**Module 4, Day 4** (last lecture day before the 5-day project sprint)
**Deck:** `modules/module-4-python-data-analysis/lectures/ai-assisted-code-review-find-the-bug-with-a-partner/`
**Reviewed:** 2026-09-10

---

## 18-Point Deck Quality Scorecard

| # | Check | Result |
|---|---|---|
| 1 | Missing text / diagram exception | None found (`check_no_empty_text` clean). No workflow/concept_map slides in this deck. |
| 2 | Wordy/wrapping slides | Two real overflow bugs found via build-time heuristic + visual render, both fixed and re-confirmed by re-render: (a) case_study's `hook_question` was restating the whole case narrative, causing bullets to overlap the discussion prompt — trimmed to the actual question; (b) `further_resources` had no bottom-limit check at all (a genuine template gap, not just this deck's content) — patched `add_further_resources_slide` with the same overflow-warning safety net `case_study`/tables already use, and trimmed one wrapping resource title. Zero overflow warnings remain. |
| 3 | Code slides have code + tested | 2 code slides. Code Execution Validator ran both passes (see below) — 1/1 validated slide PASS, 1 intentionally skipped with a documented reason. |
| 4 | Recall builds on prior skills | Bucket 4 = 5/5. Both `dependent_skills` map cleanly onto Days 2-3's actual objectives. |
| 5 | Spaced learning | Module-level check, not yet run (`check-module-alignment` not yet invoked for Module 4 — only Day 4 of 4 lectures is now built, project sprint next). |
| 6 | Engagement strategies used | Bucket 6 = 5/5. Spans Collaborative, Critical Thinking, Gamified, Retrieval, and Business-Thinking engagement types. |
| 7 | WCAG accessibility | 5/5/5/5 across all 4 accessibility buckets. Reviewed against WCAG 2.2 AA (confirmed current version via live search). |
| 8 | Notes on all slides except transitions | Clean — no missing-notes findings from spec lint. |
| 9 | No cutoff text | Same as #2 — both real overflow issues found and fixed; confirmed via actual LibreOffice-rendered PNGs of all 28 slides, not just the heuristic. |
| 10 | Text fits its box | Same as #2/#9. No offslide-shape geometry hits. |
| 11 | Icons used properly | One real inconsistency found by the instructional-quality subagent: "Issue Two" used the same warning/red icon as "Issue One," while a later `panel_preview` transition represented the same concept with a `cycle` icon. Fixed — Issue Two now uses `cycle`, confirmed via re-render. All icon names resolve in the manifest. |
| 12 | Case study source + clickable link | `is_fictional: false`, real `source_url` (Fortune) + `caption`, `[SOURCES]` notes tag present, corroborated by a second outlet (The Register) per the notes. Link itself: SSL-cert gap in this local environment makes `qa.link_check` report UNCERTAIN (not DEAD) — already independently verified live by the step-3 research subagent. |
| 13 | Whitespace / Mayer's principles | Bucket 17 = 5/5. |
| 14 | AI-sounding language | Clean — no arrow-character, banned-phrase, or em-dash-density findings. |
| 15 | Dead resource links | `qa.link_check`: 5/5 URLs UNCERTAIN (local SSL cert gap only), 0 confirmed dead. All independently verified live during step-3 research. |
| 16 | Logical flow / dependency ordering | Buckets 3/4/16 = 5/5/4. One factual slip found and fixed: "measured with real process ids, two lessons ago" was wrong — `pg_backend_pid()` was introduced in Day 3 only (confirmed by grep against both prior decks), not Day 2. Corrected to "one lesson ago." |
| 17 | No day/deck numbers | Clean — no hardcoded day/slide-number references found. |
| 18 | Instructor notes completeness | `instructor_prep.md` has all expected sections (time estimate ~52 min, code-along map, prerequisites, objectives, project connection, section flow). |

## 9-Point Code-Along Scorecard

| # | Check | Result |
|---|---|---|
| 1 | Instructor code runs fully | Pass A: 1 slide validated for real (Docker Postgres, `postgres:16-alpine`, real rows returned, `try`/`finally` connection-release independently confirmed), 1 slide correctly skipped (`skip_validation: true`, documented reason — an intentionally insecure, non-executable demo snippet). Pass B (whole assembled instructor notebook, shared session): the one non-skipped cell ran clean with no cross-cell-state issues. No Pass A/Pass B disagreement. |
| 2 | Module name + LOs on both variants | Clean — `qa.notebook_check` reports no header-field findings. |
| 3 | Scenario is given | Present (`meta.scenario`) and scored 5/5 by the code-along subagent for concreteness/framing. |
| 4 | Docs/links work | Same as deck-scorecard #15. |
| 5 | Student-facing second-person voice | One real finding: `skip_validation_reason` (injected as a `# NOTE:` comment into both notebooks) used "Fellows" instead of second person. Fixed to "you"/"your partner"; `qa.notebook_check` now reports no findings. |
| 6 | TODOs placed properly | N/A — no `starter_code`/`blanked_code` in this deck (both code slides show full code directly, by design; this is a discussion lesson, not a fill-in-the-blank one). |
| 7 | Scaffolding fades on repeated exposure | Bucket 3 = 4/5. No `starter_code` to evaluate the checklist's primary fade signal against (structural, not a gap); on the available signal (`psycopg2` at its 3rd module occurrence), the on-screen language appropriately leans on prior fluency rather than re-teaching. |
| 8 | Instructor notes explain what/why + analogies | Bucket 2 = 5/5. Both code cells carry full ACTIVITY/SCRIPT/MISCONCEPTIONS blocks with real reasoning, not syntax narration. |
| 9 | Correct deliverable file type | `.ipynb` pair generated, matching `language: python` on both code slides. |

## Accessibility (4 buckets)

| Bucket | Score | Justification |
|---|---|---|
| Text Alternatives | 5/5 | Both image slides' `image_alt` are specific and distinct from their captions/prompts. |
| Reading Order & Labels | 5/5 | Linear, coherent slide sequence; every title/prompt/label is concrete, never generic. |
| Color Independence & Contrast | 5/5 | Correct answers live only in `answer`/`explanation`, never a color-only cue; `icon_hero` severity colors always paired with explicit text. |
| Cognitive Load & Motion | 5/5 | All card/bullet slides well under the ~5-item threshold; no `motion_note` present. |

## Instructional Quality (18 buckets)

| Bucket | Score | Justification |
|---|---|---|
| 1. Learning Objectives Addressed | 5 | Both objectives get dedicated teaching + practice slides; no scope creep. |
| 2. Misconceptions Addressed | 4 | No formal misconceptions list supplied, but `[MISCONCEPTIONS]` notes throughout directly confront real ones. |
| 3. Logical Flow & Transitions | 5 | Case-study hook set and explicitly resolved in the bridge; all 4 transitions carry real connecting insight. |
| 4. Prior-Knowledge Ties | 5 | Both `dependent_skills` map cleanly onto Days 2-3. |
| 5. Demo/Code Sets Up the Exercise | 5 | `uses_same_scenario_as_lecture: false`; exercise clearly described. |
| 6. Engagement & Gamification | 5 | 5 distinct engagement types; no AI-writing tells. |
| 7. Summary Quality | 5 | Bridge genuinely recaps and connects forward; closing avoids hardcoded logistics. |
| 8. Interview-Prep Coverage | 4 | Both topics well-matched to technique; docked for module-wide `PREP` reuse (3 of 4 built lectures) — noted for future lessons, not fixed here (each individual use is independently defensible). |
| 9. Backwards-Design Linkage | 5 | LO/bridge/closing all explicitly and concretely tie back to `meta.final_project`. |
| 10. Question Quality & Bloom's Levels | 4 | All 4 checks sit at analyze/evaluate; docked only because no `check_understanding` carries `question_style: interview`. |
| 11. Concrete, Relatable Analogies | 5 | One well-targeted GPS/travel analogy on the lesson's genuinely hardest concept; appropriate restraint elsewhere. |
| 12. Title Framing | 5 | Headlines carry real takeaways, not generic labels. |
| 13. Diagram & Table Fit | 4 → 5 (after fix) | Icon inconsistency (Issue Two vs. Issue One vs. panel_preview) found and fixed. |
| 14. Multi-tool Coverage | N/A | `meta.tools` = Python only. |
| 15. Scaffolding & Project Alignment | 5 | Notes explicitly name `common_project_mistakes` #1/#3/#4 by number — a standout backwards-design strength. |
| 16. Cross-Lecture Continuity | 4 → 5 (after fix) | "Two lessons ago" factual slip found and corrected to "one lesson ago." |
| 17. Whitespace & Multimedia Principles | 5 | Good segmenting, no redundant on-slide/notes duplication. |
| 18. Factual Accuracy & Claim Scope | 5 | Case study and technical claims well-scoped and sourced. |

**Overall grade: A** (22/22 buckets at 4-5/5, two real bugs found and fixed, no unresolved findings.)

---

## Findings applied this pass

1. **Case-study overflow (real, confirmed via render)** — `hook_question` restated the entire case narrative, causing the bullet list to visually overlap the discussion prompt. Trimmed to the actual question. Re-rendered and confirmed clean.
2. **`further_resources` template gap (real, affects future decks too)** — `add_further_resources_slide` in `template/layouts.py` had no bottom-limit overflow check at all, unlike `case_study`/table slides. Added the same `theme.overflow_warnings` pre-filter pattern used elsewhere, plus tightened `top`/`gap` slightly. This deck's own resource-title wrap was also trimmed. Re-rendered and confirmed the last row now sits comfortably above the logo.
3. **Icon inconsistency** — "Issue Two" and "Issue One" shared an identical warning/red icon; a later transition represented Issue Two's own concept with a different icon (`cycle`). Made Issue Two consistent with its own later reference. Confirmed via re-render.
4. **Factual slip** — "measured with real process ids, two lessons ago" was wrong (the `pg_backend_pid()` measurement was introduced in Day 3 only, confirmed by grep against both prior decks' specs). Corrected to "one lesson ago."
5. **Student-facing voice** — `skip_validation_reason` (injected as a real `# NOTE:` comment into both notebooks) used "Fellows" instead of second person. Rewritten to "you"/"your partner."

## Findings noted, not changed (judgment calls)

- **PREP interview-technique reuse across the module** (3 of 4 built lectures) — each individual use fits its specific question well; flagged for variety in a *future* lesson, not a defect in this one.
- **`git-version-control` competency-assessment coverage** — a whole-module signal (best resolved by `check-module-alignment` once Module 4's lecture phase is fully reviewed), not a Day 4 gap.
- **Key Terms card paraphrasing** ("sounds sure"/"safe query" vs. exact terms) — a deliberate, defensible teaser choice.
- **"No hands-on activity" lint flag** — intentional false positive. Both code slides are `code_along: false` by design; this is a partner discussion/code-review lesson (read and trace, not type), matching established precedent from Module 1's Day 18/19 decks.

---

## Code Execution Validation Summary

See `code_validation_report.md` in this deck's own directory for full detail. Headline: 1/1 validated slide PASS (both Pass A and Pass B), 1 slide intentionally skipped with a documented reason. The skipped slide's own factual claim (what the SQL injection actually returns) was independently re-verified anyway against a real disposable Postgres container, since it's asserted on a poll slide — confirmed correct (all 15 rows returned).

## Outstanding items

- **`image_requests.md`** lists 2 pending images (title-slide illustration, case-study photo) — both currently render as branded placeholders. Re-running the generator after real files are dropped into `images/` will silently upgrade them.
- **Module-level checks not yet run**: spaced-practice/skill-coverage alignment against `PROJECT.md` (`check-module-alignment`) — appropriate to run once the whole module's lecture phase is complete, which it now is (all 4/4 lectures built).

## Output locations

- Deck: `modules/module-4-python-data-analysis/lectures/ai-assisted-code-review-find-the-bug-with-a-partner/ai-assisted-code-review-find-the-bug-with-a-partner.pptx`
- Instructor notebook: `Module4_Lesson4_ai-assisted-code-review-find-the-bug-with-a-partner_INSTRUCTOR.ipynb`
- Student notebook: `Module4_Lesson4_ai-assisted-code-review-find-the-bug-with-a-partner_STUDENT.ipynb`
- Instructor prep doc: `instructor_prep.md`
- This report: `qa_report.md`
- Code validation record: `code_validation_report.md`

**Import to Google Slides**: upload the `.pptx` to Google Drive — it auto-converts to native Slides on open. No Google Cloud/OAuth setup needed.
