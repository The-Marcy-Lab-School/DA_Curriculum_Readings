# Alignment Report — Module 0: Foundations

This audits Module 0's whole-lecture-lab calendar for backwards-design rubric
coverage and spacing/retrieval-practice health, per `check-module-alignment`
step 3: reading `qa/instructional_review_checklist.md` buckets 15 (Scaffolding
& Project Alignment) and 16 (Cross-Lecture Continuity) as the judgment lens,
and interpreting `qa/skill_coverage_check.py`'s deterministic timeline against
the module's real content (`INSTRUCTOR_MODULE_SUMMARY.md`, `PROJECT.md`,
`curriculum_log.yaml`, both labs, and the individual `deck_spec.yaml` files),
not just restating the raw signal.

## Raw skill timeline (`qa.skill_coverage_check`)

```
Skill timeline for module-0-foundations (6 lectures, 2 labs)

SKILL                        OCCURS IN
---------------------------------------------------------------------
ai-literacy                  L5
chained commands             L4, lab:column-typing-practice
critical-thinking            lab:column-typing-practice
cut                          lab:column-typing-practice
data type vs data structure  L1, L4
data-literacy                L1, L3, lab:column-typing-practice, L6
general-programming-coding   L1
git add                      L2, lab:git-terminal-practice, L4
git clone                    L6
git commit                   L2, lab:git-terminal-practice, L4
git config                   L1
git diff                     L2, L4
git init                     L2, lab:git-terminal-practice, L4
git log                      L2, lab:git-terminal-practice
git push                     L2, lab:git-terminal-practice
git remote                   L2, lab:git-terminal-practice
git status                   L2, lab:git-terminal-practice, L4
git-version-control           L2, L6
grep                          L3, lab:column-typing-practice
head                          L1, L3, L5, lab:column-typing-practice
structured vs unstructured    L3, L4, L5
terminal navigation           L1, lab:git-terminal-practice, L4, L6
terminal-command-line          L1, L6
wc                             L3, L5

COVERAGE GAPS (PROJECT.md skill never appears anywhere):
  - "curiosity" - not exact-matched by any skill_tags in this module

SPACING GAPS (single occurrence, introduced below-independent, later slots existed):
  - "git config": only L1 (scaffolding: modeled) - 7 later lesson(s)/lab(s) existed and never revisited it
  - "general-programming-coding": only L1 (scaffolding: modeled) - 7 later lesson(s)/lab(s) existed and never revisited it
  - "ai-literacy": only L5 (scaffolding: guided) - 2 later lesson(s)/lab(s) existed and never revisited it
  - "cut": only lab:column-typing-practice (scaffolding: unset) - 1 later lesson(s)/lab(s) existed and never revisited it
  - "critical-thinking": only lab:column-typing-practice (scaffolding: unset) - 1 later lesson(s)/lab(s) existed and never revisited it
```

## Judged findings

Most-severe real finding first, then false positives / acceptable
limitations, so a human doesn't need to re-litigate them.

### 1. `curiosity` (coverage gap) — **REAL GAP**

`PROJECT.md`'s `competency_assessments` sidecar lists `curiosity` as one of
the 7 graded skills, at an "apply, independent" rubric ceiling assessed via
"reflection prompt review." The only place the word appears anywhere in the
module's lecture/lab content is two bare mentions in the Project Launch
deck (`lectures/data-literacy-field-notes-project-launch/deck_spec.yaml`
lines 71 and 79 — "one data-quality question, one curiosity question... the
data-quality question and the curiosity question are DIFFERENT questions").
Unlike the AI-literacy and critical-thinking bridging gaps that
`INSTRUCTOR_MODULE_SUMMARY.md` flagged and then closed with one dedicated
worked example each (the AI-literacy lecture's risk-naming rep, the lab's
collection-process-concern rep), **no lesson or lab ever models what a good
vs. weak curiosity question looks like** — Fellows are told the two question
types are different and then asked to write one, cold, during the
independent project. This is exactly the class of gap bucket 15 exists to
catch: a rubric skill that's graded but never actually taught or rehearsed
anywhere in the calendar.

### 2. `general-programming-coding` tagging gap (found while investigating the spacing gap) — worth fixing, not a numeric-scored finding

Not visible to `qa/skill_coverage_check.py` because it only reads
`skill_tags`, but reading the actual slides shows the underlying content
**is** revisited: L1's tagged slide ("everyday item → data type," `remember`
level, `skill_tags: ["general-programming-coding", "data type vs data
structure"]`) and L4's "is a birthdate a data type or a data structure?"
slide (`recall-review-data-types-git/deck_spec.yaml` line ~70-85, also
`remember` level, same objective) are functionally the same exercise — L4
just tagged it only `["data type vs data structure"]`, dropping the broader
rubric-id tag L1 used. Recommend adding `general-programming-coding` back
onto L4's slide so the timeline reflects reality and this false alarm stops
firing on future re-runs.

### 3. `critical-thinking` tagging gap (found while investigating the spacing gap) — worth fixing, not a numeric-scored finding

Same shape as #2. The Project Launch deck (L6) has three
`question_style: critical_thinking` reflective `check_understanding` slides
(lines 207-215 "plan first or dive in?", 279-287 "which pitfall would trip
*you* up personally?", 318-326 "what does the Day-1 exit criterion mean for
you?") — genuine evaluate/apply-level critical-thinking practice happening
after the lab — but none carry `skill_tags: ["critical-thinking"]`, so the
timeline shows zero recurrence. Recommend tagging at least the
"which pitfall would trip you up" slide, since it's the closest thing to a
second rep of the skill before the project.

## False positives / acceptable limitations (no action needed)

### `git config` — **ACCEPTABLE LIMITATION**
A one-time setup command (`git config --global user.name/email`) that
persists across every later terminal session once run — there is nothing to
"revisit," the value of the check's spacing heuristic breaks down exactly
the way its own docstring warns it can ("a one-time setup command that's
correctly never recalled because you only ever configure it once").

### `ai-literacy` — **ACCEPTABLE LIMITATION**
Confirmed directly from the L5 deck's own authorial intent, not inferred:
`lectures/ai-literacy-verified-fact-vs-claim/deck_spec.yaml`'s `bridge` slide
notes state explicitly *"Day 7's lab rehearses the column-typing and
collection-process judgment calls, not this AI-risk skill directly — today's
guided practice, plus the project's own AI-literacy reflection, are this
skill's two real reps."* The `closing` slide notes repeat this: *"Today's AI
risk-naming skill gets its next rep directly in the project's own
reflection, not in Day 7's lab."* This is the deliberate editorial call
`qa/skill_coverage_check.py`'s docstring names as its known limitation — a
skill whose real next occurrence is the independent project itself, which
isn't tracked in this timeline — made on purpose, and stated on the slide,
not an oversight.

### `cut` — **ACCEPTABLE LIMITATION**
Modeled and practiced once, in the lab, immediately before the two project
days that require using `cut`/`head`/`grep`/`sort` repeatedly and
independently on the real dataset (`INSTRUCTOR_MODULE_SUMMARY.md`: "Demo
commands are terminal-only (`head`/`cut`/`grep`/`sort`)"). Same shape as
`ai-literacy`: the real next rep is the untracked project itself, one class
day later, not a missing lecture recall slide.

### `critical-thinking` — **FALSE POSITIVE** (content-wise)
`INSTRUCTOR_MODULE_SUMMARY.md`'s own "Two bridging gaps" note designed the
lab's collection-process-concern exercise as *the* required worked example
before the project, the same one-shot-bridge pattern used for
`ai-literacy` — so by design, a single dedicated rep was judged sufficient.
Separately (see finding #3 above), real additional critical-thinking
practice *does* occur in L6, it's just untagged — so even setting aside the
deliberate one-shot design, the spacing gap is not real on the actual
content.

### `general-programming-coding` — **FALSE POSITIVE** (content-wise)
See finding #2 above: L4 re-drills the identical `remember`-level
"label an everyday item by data type" objective L1 introduced — the skill
is genuinely revisited, the tag just wasn't reapplied.

## Recommendations — status after this pass

All three "worth fixing" items were applied:

1. **Fixed.** Added a "Worked Example: A Real Curiosity Question" content
   slide (good vs. weak, right after "The Brief") plus a paired
   `check_understanding` (pairs draft their own curiosity question,
   `skill_tags: ["curiosity"]`) to the Project Launch deck — mirrors the
   AI-literacy/critical-thinking bridging-gap pattern exactly. Found and
   fixed a real tool bug in the process: `skill_tags` on a plain `content`
   slide is silently dropped by `generator/build_curriculum_log.py`'s
   aggregation, which only reads `code`/`check_understanding` slides (by
   design, per `content_spec/SCHEMA.md`) — the tag has to live on a
   `check_understanding` or `code` slide to actually register. Worth adding
   a `qa/contrast_check.py` lint for "skill_tags present on an unsupported
   slide type" so this fails loudly next time instead of silently.
2. **Fixed.** `general-programming-coding` added back to L4's slide.
3. **Fixed.** `critical-thinking` added to L6's "which pitfall would trip
   you up personally?" slide.

Re-running `qa.skill_coverage_check` after these fixes: **zero coverage
gaps**, and the 3 remaining spacing-gap flags (`git config`, `ai-literacy`,
`cut`) are all the documented acceptable limitations above — no further
action needed on those.
