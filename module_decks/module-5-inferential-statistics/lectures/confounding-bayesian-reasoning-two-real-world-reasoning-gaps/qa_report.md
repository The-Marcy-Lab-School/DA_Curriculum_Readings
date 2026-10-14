# QA Report — Confounding & Bayesian Reasoning: Two Real-World Reasoning Gaps

**Module 5, Day 4** (flagged by this module's own planning docs as the densest lecture in the module)
**Deck:** `modules/module-5-inferential-statistics/lectures/confounding-bayesian-reasoning-two-real-world-reasoning-gaps/`
**Reviewed:** 2026-09-12

---

## 18-Point Deck Quality Scorecard

| # | Check | Result |
|---|---|---|
| 1 | Missing text / diagram exception | None found. A `workflow_cyclical` for the batch-by-batch Bayesian update was suggested by instructional-quality QA but left as a judgment call, not applied - see below. |
| 2 | Wordy/wrapping slides | Extensive word-count and code-line-count fixes applied during authoring (many bullets shortened to ≤7 words; one code slide's line count reduced from ~13 to ~10 visual lines). All confirmed via render - no cutoff anywhere across 30 slides. |
| 3 | Code slides have code + tested | 3 code slides. Code Execution Validator ran both passes - 3/3 PASS. |
| 4 | Recall builds on prior skills | 5/5. Both `dependent_skills` (`.groupby()`, the Day 2 chi-square result) are explicitly, substantively reused - the chi-square finding is the actual explanatory mechanism for today's confounding demo, not just referenced. |
| 5 | Spaced learning | Module-level check, not yet run - appropriate once more of Module 5's sequence is built (4 of 7 content days now done). |
| 6 | Engagement strategies used | Discussion, game, would_you_rather, interview_prep - correctly restrained from forcing Liberatory framing onto purely technical content. |
| 7 | WCAG accessibility | 5/4/5/5 across the 4 accessibility buckets (see below), no required fixes. |
| 8 | Notes on all slides except transitions | Clean - no missing-notes findings from spec lint. |
| 9 | No cutoff text | Same as #2 - confirmed via actual LibreOffice-rendered PNGs of all 30 slides both before and after the QA-driven edits. |
| 10 | Text fits its box | Clean - zero-heuristic offslide-geometry check passes. |
| 11 | Icons used properly | All icon names resolve; confirmed distinct and appropriate via render (search_zoom_in for confounding, probability/statistics/percentage_metric for the Bayesian half, correlation for the species/island reveal). |
| 12 | Case study source + clickable link | N/A - no `case_study` slide in this deck (both worked examples are real, verified computations on this module's own shared dataset, not an external case). |
| 13 | Whitespace / Mayer's principles | 4/5 (see instructional buckets). |
| 14 | AI-sounding language | Clean - no arrow-character, banned-phrase, or em-dash-density findings. |
| 15 | Dead resource links | `qa.link_check`: all URLs UNCERTAIN (local SSL cert gap only), 0 confirmed dead. All independently verified live during the research pass (Seeing Theory, NN/g, MIT OCW). |
| 16 | Logical flow / dependency ordering | 5/5. Every transition (5 total) carries a real connecting insight; the confounding-half → Bayesian-half pivot is explicitly marked. |
| 17 | No day/deck numbers | Clean - all references use relative phrasing ("last two classes," "next class"). |
| 18 | Instructor notes completeness | `instructor_prep.md` has all expected sections (time estimate ~68 min, prerequisites, objectives, project connection, section flow). |

## Accessibility (4 buckets)

| Bucket | Score | Justification |
|---|---|---|
| Text Alternatives | 5/5 | The deck's one image (title slide) has specific, meaningful alt text. |
| Reading Order & Labels | 4/5 | Docked only for a repo-wide template pattern (the `interview_prep` slide's fixed generic heading doesn't itself signal which half of the lecture the question calls back to) - low severity, not unique to this deck, no fix applied. |
| Color Independence & Contrast | 5/5 | No color-only meaning anywhere; all `icon_hero` styles are pre-verified brand pairs. |
| Cognitive Load & Motion | 5/5 | All bullet/card counts well within limits; no motion notes present. |

## Instructional Quality (16 scored buckets + 2 N/A)

| Bucket | Score | Justification |
|---|---|---|
| 1. Learning Objectives Addressed | 5 | Both objectives get an explicit early objectives slide and a full worked example each. |
| 2. Misconceptions Addressed | 4 → 5 (after fix) | "Credible interval" was used in notes before its own formal-definition slide - fixed by saying "interval"/"range" until the formal reveal. |
| 3. Logical Flow & Transitions | 5 | Clean concept-before-code-before-interpretation build order across both halves. |
| 4. Prior-Knowledge Ties | 5 | Substantive, not just referenced - the Day 2 chi-square result is the actual mechanism explaining today's confounder. |
| 5. Demo/Code Sets Up the Exercise | 5 | `uses_same_scenario_as_lecture: false`; both follow-on labs (Days 5, 6) are set up clearly. |
| 6. Engagement & Gamification | 4 | Good type variety; docked only for a fairly familiar mode-set vs. prior lessons (a minor, not-hard-gap observation). |
| 7. Summary Quality | 5 | Bridge and closing both recap concretely and connect forward. |
| 8. Interview-Prep Coverage | 5 | "Investigation Framework" genuinely fits (a "how would you investigate" question, not a definition to recite); fresh technique vs. Day 1 (Teach-Back) and Day 2 (PREP). |
| 9. Backwards-Design Linkage | 3 → 5 (after fix) | Only the bridge slide made the explicit project tie; objectives and closing slides didn't - fixed by adding one line to each. |
| 10. Question Quality & Bloom's Levels | 4 → 5 (after fixes) | Good climb (apply/analyze/analyze/evaluate, 0% remember); fixed the credible-interval-before-definition issue and retagged one question to `question_style: interview` for a real, low-cost coverage improvement. |
| 11. Concrete, Relatable Analogies | 5 | Both analogies (shoe-size/age for confounding; soup-tasting for prior/posterior) are fresh, well-targeted, and don't collide with Day 1/Day 2's own analogies. |
| 12. Title Framing | 4 | A few code-slide titles read as action-labels rather than headlines - consistent with Day 2's own established pattern, left as-is (judgment call, not applied). |
| 13. Diagram & Table Fit | 3 | A `workflow_cyclical` for the batch-by-batch update cycle was suggested as a genuine opportunity - left as a judgment call, not applied, given this lecture's own explicit "keep it tight, one worked example each" design constraint (see below). |
| 14. Multi-tool Coverage | N/A | Python only. |
| 15. Scaffolding & Project Alignment | 5 | `scaffolding_level: guided` matches the module plan's Day 4 row exactly; both project-graded skills already recur through the module as planned. |
| 16. Cross-Lecture Continuity | 5 | Genuinely strong - the Day 2 chi-square finding is reused as the real explanatory mechanism, not a passing mention. |
| 17. Whitespace & Multimedia Principles | 4 | Good segmenting across two long conceptual arcs; no decorative bloat found. |
| 18. Factual Accuracy & Claim Scope | 5 | Every non-obvious claim (confounding mechanics, beta-binomial conjugacy, the confidence-vs-credible-interval distinction) carries a `[SOURCES]` tag and was independently research-verified before authoring. |

## Code-Along (3 buckets)

| Bucket | Score | Justification |
|---|---|---|
| Scenario & Framing Quality | 3 | Thematic framing rather than a concrete role/org/ask - noted as a real but minor gap by the reviewing subagent itself ("may not need it" given this lecture's two-distinct-worked-examples design); not changed. |
| Instructor Note Depth & Analogies | 3 → 4 (after fix) | The one genuinely novel API call (`stats.beta.ppf`) had no explanation of what it does or why - fixed with a real explanatory note. |
| Scaffolding Fade | 3 → 4 (after fix) | One `starter_code` TODO was verbatim-identical to Day 2's own wording at the 3rd occurrence of the same skill - faded to name the goal rather than the mechanic. |

---

## Findings applied this pass

1. **"Credible interval" used before its own formal-definition slide** — fixed in two places (a code slide's notes, a content slide's notes) to say "interval"/"range" until the dedicated "One Word, Two Different Meanings" slide actually introduces the term.
2. **Missing explanation of `stats.beta.ppf`** — the one genuinely novel API call in the deck had no note explaining what it does; added one.
3. **Stale, verbatim-identical `starter_code` TODO wording** — one TODO comment was word-for-word identical to Day 2's own version at the 3rd real occurrence of the same `.groupby()` skill; faded to name the goal instead of the mechanic.
4. **Backwards-design linkage missing from 2 of 3 touchpoints** — only the bridge slide stated the explicit project tie; added one line each to the objectives slide's and closing slide's notes.
5. **Zero `question_style: interview` check_understanding** — retagged the "Firefighters and Fire Damage" question (a genuinely interview-realistic confounding prompt) to `interview`.

## Findings noted, not changed (judgment calls)

- **A `workflow_cyclical` diagram for the batch-by-batch Bayesian update** — a real, well-argued suggestion (the update cycle has genuine step-to-step dependency, matching `diagram_selection.md`'s strongest case), but adding a new diagram slide risks working against this lecture's own explicit design constraint ("one clean worked example each, keep it tight" - this is the module's flagged densest lecture). Left as-is.
- **A few code-slide titles read as action-labels, not headlines** — consistent with Day 2's own established naming pattern for this deck's code slides; not changed.
- **Scenario framing is thematic rather than role/org/ask-concrete** — the reviewing subagent itself noted this lecture's two-distinct-worked-examples design may not need a concrete role; not changed.
- **`interview_prep`'s fixed generic heading doesn't signal which lecture-half a question belongs to** — a repo-wide template pattern, not unique to this deck, low severity; not changed here.

---

## Code Execution Validation Summary

See `code_validation_report.md` for full detail. **3/3 slides PASS** (both Pass A isolated and Pass B whole-notebook). Both of this lecture's central "aha" moments are independently confirmed real, not illustrative approximations: the naive-vs-controlled body-mass-by-island numbers (Biscoe 4716g → 3710g once species is held constant), and the Bayesian posterior drift/credible-interval narrowing (0.312→0.358→0.361 mean, 0.171→0.125→0.101 width).

## Outstanding items

- **`image_requests.md`** lists 1 pending image (title-slide illustration) — currently renders as a branded placeholder.
- **Module-level checks not yet run**: spaced-practice/skill-coverage alignment (`check-module-alignment`) — appropriate once more of Module 5's sequence is built.

## Output locations

- Deck: `modules/module-5-inferential-statistics/lectures/confounding-bayesian-reasoning-two-real-world-reasoning-gaps/confounding-bayesian-reasoning-two-real-world-reasoning-gaps.pptx`
- Instructor notebook: `Module5_Lesson4_confounding-bayesian-reasoning-two-real-world-reasoning-gaps_INSTRUCTOR.ipynb`
- Student notebook: `Module5_Lesson4_confounding-bayesian-reasoning-two-real-world-reasoning-gaps_STUDENT.ipynb`
- Instructor prep doc: `instructor_prep.md`
- This report: `qa_report.md`
- Code validation record: `code_validation_report.md`

**Import to Google Slides**: upload the `.pptx` to Google Drive — it auto-converts to native Slides on open. No Google Cloud/OAuth setup needed.
