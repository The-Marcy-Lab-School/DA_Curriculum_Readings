# QA Report — Connecting Two Ways, psycopg2 and SQLAlchemy to pandas

**Module 4: Python for Data Analysis & Database Connectivity — Day 2, Lesson 2**
**Scaffolding level:** `guided` (prior lesson: `modeled`)
**Reviewed:** 2026-08-26 → 2026-08-29
**Overall grade: A (4.71 / 5)** — average of the 21 buckets that had enough
context to score (4 accessibility + 17 instructional; bucket 14 "Multi-tool
Coverage" is N/A for a single-tool deck and is excluded from the average, per
the checklist's own rule). The 3 code-along buckets are scored separately
below.

All scores below are **after** findings were applied. Where a score changed as
a result of a fix, the "as-reviewed → after-fixes" delta is stated explicitly.

---

## The 18-Point Deck Quality Scorecard

| # | Check | Result |
|---|---|---|
| 1 | Missing text / diagram exception | **PASS.** `qa.contrast_check` on the rendered `.pptx`: no empty `TEXT_BOX` shapes across all 32 rendered slides. |
| 2 | Wordy/wrapping slides | **PASS after a fix.** Zero `theme.overflow_warnings` and zero `MAX_BULLET_WORDS`/`MAX_TITLE_WORDS` findings in the final build. Two title-length findings were fixed during review (slide 7's title was 12 words, cut to 8; slide 11's answer explanation was over the 480-char callout cap, rewritten). One real overflow was found **only** by rendering: a 5-bullet `closing` collided with its own exercise label — fixed in `template/layouts.py`, not by shortening content. |
| 3 | Code slides have code + tested | **PASS.** 4 `code` slides, all non-empty, all `language: python`. Code Execution Validator: **4/4 PASS Pass A** (isolated), **4/4 PASS Pass B** (whole instructor notebook, one continuous session), against a real PostgreSQL **16.15** container. Zero Pass A/Pass B disagreement. Re-run twice more after QA edits — still exit 0. |
| 4 | Recall builds on prior skills | **PASS — bucket 4 scored 5/5.** Slide 4 is a real retrieval-practice check on the prior lesson's exact content ("a `TIMESTAMP` came out of a CSV as text — what did the file fail to carry?"), and its notes say out loud why that recall matters for today. |
| 5 | Spaced learning | **Partial — module-level, not yet complete.** Final `qa.skill_coverage_check` (2 lectures, 0 labs) reports **four** repeat skills — `python`, `dtypes`, `pandas-io`, `sql` (all L1→L2) — and first occurrences for `psycopg2`, `sqlalchemy`, `database-connection`, `connection-cleanup`, `code-review`. `sql` only became a repeat after a review finding: the slide that authors and re-runs the query string was practicing `sql` without tagging it, which had made the tool report a spacing gap the lesson didn't actually have. Remaining spacing gaps (`general-programming-coding`, `boolean-filtering`, `uv`) and coverage gaps (`git-version-control`, `data-analysis`, `ai-assisted-coding`) are all expected at Day 2 of 9 and reconciled in `INSTRUCTOR_MODULE_SUMMARY.md`. Run `check-module-alignment` once Days 3-4 exist. |
| 6 | Engagement strategies used | **PASS — bucket 6 scored 5/5.** Four modes across four different technique types: `discussion` (Retrieval — warm-up recall), `poll` (where column names live), `whiteboard` (Collaborative — draw both paths), `game` (Gamified + `question_style: interview` — reviewing connection code). Deliberately a different mode set from Day 1's, which used `would_you_rather` instead of `whiteboard`. |
| 7 | WCAG accessibility | **PASS.** `qa.contrast_check` self-test re-verified `tokens.json`'s contrast table. Accessibility buckets: 5 / 4 → **5** / 5 / 4 → **5** (see the delta note in the bucket table). Reviewed against **WCAG 2.2 AA**, confirmed current by the accessibility subagent's own live search. |
| 8 | Notes on all slides except transitions | **PASS.** Zero "missing speaker notes" findings. Every non-transition slide has structured, tagged notes; every transition also carries one. |
| 9 | No cutoff text | **PASS after the `closing` fix** — same as #2. Verified by rendering all 32 slides to PNG via LibreOffice → PDF → PyMuPDF and looking at every icon-bearing, image-bearing, diagram, and reveal slide. |
| 10 | Text fits its box | **PASS.** Zero `check_no_offslide_shapes` findings (exact geometry, not heuristic) and zero overflow warnings in the final build. Two real mid-word breaks were found by render and fixed: the `workflow_linear` `detail` strings (`psycopg2.connect()` → `.connect()`, etc.). |
| 11 | Icons used properly | **PASS after a fix.** Every icon name resolves in `template/icon_manifest.py`. Visual review confirmed all render as recognizable glyphs, none as blobs. Two icon-consistency fixes applied: `task_complete` (not `lock`) now means "close the connection" everywhere, and `database` (not `api`) means "connection" everywhere, leaving `api` to mean `psycopg2`/driver consistently. |
| 12 | Case study source + clickable link | **PASS.** `is_fictional: false`, `source_url` set and hyperlinked on the rendered caption, `[ARTICLE SUMMARY]` (5 sentences) and `[SOURCES]` both present. The source was fetched live by the research subagent and returned HTTP 200. |
| 13 | Whitespace / Mayer's principles | **Bucket 17: 4/5.** Terse bullets with explanation in notes, one idea per slide, images on the slides with real visual form. Held back by the rideshare analogy's vehicle having no visual (its `icon_hero` is the abstract `settings`). |
| 14 | AI-sounding language | **PASS.** Zero findings: no typed arrows, no emoji glyphs, no banned phrases, em-dash density within bounds. Voice is energetic in the lesson body and deliberately more serious in `interview_prep` and `answer` blocks. |
| 15 | Dead resource links | **No confirmed-dead links.** `qa.link_check` checked 9 URLs; all 9 returned `UNCERTAIN` purely because SSL certificate verification fails in this sandbox, not because anything is broken. Every one was independently fetched and confirmed HTTP 200 by the research subagent on 2026-08-26. |
| 16 | Logical flow / dependency ordering | **PASS.** Bucket 3: 4→**5** after adding the `psycopg2` what/why/who slide and declaring the `try`/`except`/`finally` prerequisite. Bucket 4: 5/5. Bucket 16 (cross-lecture): 5/5. |
| 17 | No day/deck numbers | **PASS.** Zero `_check_no_day_or_deck_references` findings. Prior work is referenced relatively ("the lesson before this one," "the SQL module," "the project's own setup day"), never by day or module number. |
| 18 | Instructor notes completeness | **PASS.** `instructor_prep.md` has all 11 sections, including Misconceptions to Watch For (11 entries), Code-Along Map, Section Flow, Project Connection, Further Resources, and Top Engagement Strategies. **Additional Analogies now populated (3 primary + 6 backups) — it was empty before a generator bug found during this review was fixed.** |

---

## The 9-Point Code-Along Scorecard

| # | Check | Result |
|---|---|---|
| 1 | Instructor code runs fully | **PASS, both passes.** Pass A 4/4, Pass B 4/4, zero disagreement. Two real cross-cell dependencies verified to hold: cell 2 closes both `cur` and `conn` and cell 3 still runs; cell 4 rebinds over the dead objects cleanly. |
| 2 | Module name + objectives on both variants | **PASS.** `qa.notebook_check`: no findings. Both notebooks carry `meta.module`, all 3 learning objectives, and the glossary terms as Skills. |
| 3 | Scenario is given | **PASS.** `meta.scenario` present and concrete (city agency data team, the stale CSV, the live `service_requests` table). Code-along bucket 1 scored **5/5**. |
| 4 | Documentation links work | **4 `doc_url`s, none dead** — same SSL caveat as #15 above; all four were independently verified live. |
| 5 | Second-person student voice | **PASS.** `qa.notebook_check`: zero bare "Fellow(s)" in any student-facing field. |
| 6 | TODOs placed properly | **PASS.** Every code-along cell has real blanks. Slide 20 deliberately has **only** `blanked_code` (no `starter_code`) so the slide's `____` blanks and the student notebook's are the same exercise — a mismatch that was found and fixed during this review. |
| 7 | Scaffolding fades on repeat | **3 → 4 after fixes.** `skill_coverage_check` shows only 3 repeat skills (`python`, `dtypes`, `pandas-io`, all L1→L2). As reviewed, `pandas-io` #2 was *more* spelled-out than #1 and `dtypes` #2 was pre-written; both starter cells were rewritten to fade. The other 6 skills are first occurrences, where full explicitness is correct. |
| 8 | Instructor notes explain what/why + analogies | **4 → 5 after fixes.** Notes explain mechanism rather than narrating syntax throughout. The two gaps found — no analogy reaching the instructor's materials, and check-for-understanding cells rendering stripped of their facilitation notes — were both real generator bugs, now fixed. |
| 9 | Correct deliverable file type | **PASS.** All 4 `code` slides are `language: python`, so `build_deck.py` correctly produced an instructor/student `.ipynb` pair, not a terminal worksheet. |

---

## Bucket scores

### Accessibility (`qa/accessibility_checklist.md`) — reviewed against WCAG 2.2 AA

| Bucket | Score | Justification |
|---|---|---|
| 1. Text Alternatives | **5** | All three `image_alt` values describe what the image contributes to the lesson rather than filler; none duplicates its caption; decorative icons carry an explicit empty `descr`. |
| 2. Reading Order & Labels | 4 → **5** | Sequence is fully linear with descriptive titles and topics, no slide-number references anywhere. Both docked items fixed: slide 7's title no longer names an ordinal the icon-badged diagram doesn't show, and both quiz `[ACTIVITY]` blocks now ask for A/B/C, matching what the layout actually renders. |
| 3. Color Independence & Contrast | **5** | Options are letter-labeled, correct answers stated in words, `icon_hero` colors purely decorative, no layout introduces a pair outside the verified table. |
| 4. Cognitive Load & Motion | 4 → **5** | 3-5 bullets per slide, a 4-step diagram, zero `motion_note` entries. Both docked items fixed: the `whiteboard` activity now offers an equal-credit spoken/written alternative, and the dense final section lost a slide. |

### Instructional quality (`qa/instructional_review_checklist.md`)

| # | Bucket | Score | Justification |
|---|---|---|---|
| 1 | Learning Objectives Addressed | **5** | All three objectives get real teaching slides, an explicit objectives slide at position 2, and one `objective_index`-tagged transition each; no orphan slides. |
| 2 | Misconceptions Addressed | 4 → **5** | Both project-graded misconceptions are confronted repeatedly (case study, four-beat diagram, the verified `with conn:`-doesn't-close demo, the code-review game). The one gap — `driver` used in a student-visible answer explanation before being defined on-slide — is closed by the new `psycopg2` slide. |
| 3 | Logical Flow & Transitions | 4 → **5** | Seven transitions in three styles, each with a real connecting insight, hook resolved by name in the bridge. Both docked items fixed: `psycopg2` now gets a what/why/who slide before the code-along, and `try`/`except`/`finally` is declared in `dependent_skills`. |
| 4 | Prior-Knowledge Ties | **5** | Slide 4 is genuine retrieval practice on the prior lesson, with notes saying why that recall matters today; every `dependent_skills` entry maps to a real prior lesson or module. |
| 5 | Demo/Code Sets Up the Exercise | **5** | `uses_same_scenario_as_lecture: false`; the lecture runs against a shared class database and the exercise repoints the same code at the Fellow's own, with notes explaining exactly why that repoint is the part that breaks. |
| 6 | Engagement & Gamification | **5** | Four modes across four technique types, a real-stakes case study, `interview_prep`; every `[ACTIVITY]` names a virtual fallback; no career overclaiming, no AI-writing tells. |
| 7 | Summary Quality | **5** | The bridge resolves the case study, re-answers the warm-up, ties to the project, and names today's honest limit; the closing keeps logistics durable with no baked-in schedule. |
| 8 | Interview-Prep Coverage | **5** | Both topics verified as genuinely asked; `short_answer`s visibly flow their named framework's steps; `[TECHNIQUE]` notes coach structure rather than restating the answer; neither technique repeats Day 1's. |
| 9 | Backwards-Design Linkage | **5** | The objectives slide, bridge, and closing each make an explicit project tie, and slide 2's notes name the two graded mistakes today's third objective prevents. |
| 10 | Question Quality & Bloom's Levels | 4 → **5** | 25% `remember`, climbing remember → understand → analyze → evaluate, one `question_style: interview`, real plausible sources on both definitive-answer questions. The docked item (`driver` undefined in visible text) is closed by the new slide. |
| 11 | Concrete, Relatable Analogies | **5** | Three deep-treatment analogies (food, travel, community), each with two cross-domain backups in notes only, each on a concept the notes independently flag as hardest, each structurally accurate — and slide 8's `[SOURCES]` names where its own analogy undersells the truth. |
| 12 | Title Framing | **5** | Every teaching slide's title states a takeaway or corrects a misconception; one emphasis each; the title slide names this lesson's real topics. |
| 13 | Diagram & Table Fit | 4 → **4** | The one `workflow_linear` genuinely earns its place (real dependency, invisible connection lifecycle, actively reconstructed later rather than passively viewed) and the recap table is correctly a table. The icon-drift half was fixed; the un-diagrammed SQLAlchemy/psycopg2 layering is now stated in prose on two slides and drawn live by the instructor at the whiteboard debrief, but is still not its own diagram — a deliberate timing tradeoff, see "Deliberately not applied" below. |
| 14 | Multi-tool Coverage | **N/A** | `meta.tools` lists one tool, so this bucket is skipped and excluded from the average. |
| 15 | Scaffolding & Project Alignment | **5** | Content genuinely matches `guided` and is a visible step up from Day 1's `modeled`; both project mistakes whose root cause is this content are preempted; the remaining rubric skills sit on later calendar days by design. |
| 16 | Cross-Lecture Continuity | **5** | Day 1's closing admission ("you loaded a file, not a live database") is the literal opening line of Day 2's notes, and Day 1's *prediction* that a live connection would preserve `TIMESTAMP` is paid off as verified executed code. No forward references, no re-teaching. |
| 17 | Whitespace & Multimedia Principles | **4** | Terse bullets with explanation in notes, no decoration, one idea per slide, images on the slides with real visual form; held back by the rideshare analogy's vehicle having no visual. |
| 18 | Factual Accuracy & Claim Scope | **5** | Every non-obvious claim carries `[SOURCES]`, several verified by real execution; scope policed hard ("'SQLAlchemy uses psycopg2' is only true for Postgres, and only by default"; psycopg3's changed `with` behavior; OWASP cited only for the caveat, never as an endorsement of environment variables; the Toyota breach bounded precisely to what actually leaked). |

### Code-along quality (`qa/code_along_review_checklist.md`)

| Bucket | Score | Justification |
|---|---|---|
| 1. Scenario & Framing Quality | **5** | Concrete role, organization, and ask; names the exact table all four cells query; second-person throughout; cannot spoil the exercise. |
| 2. Instructor Note Depth & Analogies | 4 → **5** | Notes explain *why*, not syntax, and preempt real surprises. Both gaps were generator bugs, now fixed: analogies reach `instructor_prep.md`, and check-for-understanding cells carry their facilitation notes. |
| 3. Scaffolding Fade | 3 → **4** | Full explicitness is correct for the six first-occurrence skills; the two repeat skills' starter cells were rewritten so the `modeled` → `guided` step is now visible in the student notebook. Not a 5 because only three skills have a second occurrence to fade against at Day 2. |

---

## Strengths

- **Every technical claim was verified, not asserted.** The lesson's central payoff — that a live connection preserves the `TIMESTAMP` a CSV drops, and that both libraries return a genuinely identical DataFrame — was confirmed by real execution against a real PostgreSQL 16.15 container, not reasoned about. `df.equals(df2)` really prints `True`; `created_date` really comes back `datetime64[us]`.
- **Claim scope is policed unusually hard.** "SQLAlchemy uses psycopg2" is stated as true *for Postgres, by default*; psycopg3's changed `with` behavior is named; OWASP is cited only for the caveat that environment variables aren't the endpoint, never as an endorsement of them — exactly the overgeneralization failure this repo has shipped before.
- **Cross-lecture continuity is genuinely load-bearing, not decorative.** Day 1 ended by naming its own limit and predicting what a live connection would fix. Day 2 opens on that admission and settles the prediction as running code. A promise made in one lecture, paid in the next.
- **Both project-graded misconceptions get real, repeated treatment.** A cited real breach, a diagram whose whole title is about the skipped step, a fill-in-the-blank on `finally`, a live `conn.closed` demo, and an interview-style code-review verdict — not a passing mention.
- **The analogies are structurally accurate and independently sourced.** The restaurant-table analogy's `[SOURCES]` cites PostgreSQL's own docs on per-connection processes and `max_connections`, *and* names where the analogy undersells the truth (a leaked connection harms other teams, not just you).

## Weaknesses

- **All three images are still placeholders.** `image_requests.md` lists slides 1, 6, and 19; the rendered deck currently shows "AI IMAGE NEEDED" cards with the prompt text visible. Do not present before generating them.
- **The SQLAlchemy-on-top-of-psycopg2 layering is stated in prose, not drawn.** The deck's own notes predict Fellows will draw it wrong; the correct picture now exists as bullets on two slides plus an instructor-drawn board sketch at the whiteboard debrief, but not as a native diagram. A timing tradeoff, taken deliberately.
- **The final twenty minutes remain tight** even after removing a slide, at ~60 minutes against a 50-60 target. A `[~50 min mark]` cue was added so an instructor can self-correct, but a slow room will run over.
- **The `video_resource` has a weak reputation signal.** Runtime (3:40), channel, and topical fit are all verified, and it covers both libraries in a notebook — but the specific video has ~4,900 views. Recorded honestly in `pedagogy/video_resources.md`; someone should watch it before recommending it.
- **`git-version-control` is named but not exercised.** The module's Objective 2 includes committing the working script, but a lecture has no repo. The habit is real, visible closing-slide content; the actual rep is Sprint Day 1. Reconciled in `INSTRUCTOR_MODULE_SUMMARY.md` so `skill_coverage_check`'s coverage gap isn't mistaken for an oversight.

## Deliberately not applied

- **Move `objective_index: 1` off the case-study transition.** The instructional reviewer noted (at low severity) that the case study is objective-3 material sitting inside objective 1's section. Moving the tag to the code-along transition would leave two objective-1 teaching slides (the `psycopg2` intro and the lifecycle diagram) outside any tagged section, which is a worse mismatch. Kept as-is; the transition's own connecting insight does open the connection material.
- **Put definitions on the "Key Terms" opener cards.** The accessibility reviewer suggested it. `content_spec/SCHEMA.md` deliberately splits the opener (term names, "you'll know these by the end of today") from the recap (`table`, term *and* definition) as two distinct reinforcement moments. The underlying concern — jargon load-bearing on-slide before it's defined — was addressed instead by retitling the first code slide to define `cursor` in place, and by the new `psycopg2` slide defining `driver` in place.

---

## Repo-level bugs found and fixed during this review

Five, all found by rendering or by reading generated output rather than the
spec. Each is recorded in `qa/deck_review_exemplar.md`.

1. **`generator/build_instructor_prep.py` dropped every analogy not on a `code` slide** — `analogy` has been valid on `content`/`workflow_linear`/`workflow_cyclical` since the field existed. **32 authored analogies across 22 already-shipped decks** never reached any instructor prep doc. Fixed by reading the field wherever it can be set. Third instance of this exact bug class after `_META_ONLY_KEYS` and `_IMAGE_CAPABLE_TYPES`.
2. **`generator/build_notebook.py` rendered an open-ended check-for-understanding as one bare sentence** in the instructor notebook — no `[ACTIVITY]` mechanic, no `[SCOPE]`, no `[MISCONCEPTIONS]`. Fixed by including the slide's own notes (instructor-variant only, so zero leak risk).
3. **`template/layouts.py:add_closing_slide` positioned the exercise row at a hardcoded `Inches(5.5)`** — a 5-bullet closing overlapped its own exercise label in a real render. Fixed via a shared `_bullets_projected_height()` used for both the box height and the following element's position, floored at the old constants; verified exactly one deck in the repo shifts at all.
4. **`qa/contrast_check.py` never checked a `workflow_*` step's `detail` for mid-word breaks** — real code tokens broke mid-word while the lint reported clean. Fixed, at `caption` size.
5. **`qa/contrast_check.py`'s `_longest_word` mis-measured backticked code** — it stripped `()` as prose punctuation, so `` `cur.fetchall()` `` measured 12 chars instead of 14 and slipped under the threshold despite really breaking. Fixed to strip backticks (markup, never rendered) but keep everything inside them. Verified against the real failing strings and confirmed zero new findings across all 60 existing deck specs.
