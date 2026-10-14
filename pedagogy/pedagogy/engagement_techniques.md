# Engagement & Gamification Techniques Reference

Cached, cited reference used by the `new-lesson-deck` skill's outline step to pick
2-3 concrete engagement techniques per lesson (instead of guessing), and by the
instructional-quality subagent to confirm they're actually present. Researched once
rather than re-searched per deck, same reasoning as `qa/accessibility_checklist.md`
being a static doc the subagent reads rather than re-searching WCAG every time.

Grounded in active-learning, culturally-sustaining-pedagogy, liberatory-pedagogy
(see `pedagogy/liberatory_pedagogy.md` for the Freire/hooks/data-education
grounding behind the **Liberatory** tag specifically), design-thinking, and
inclusive-CS-teaching literature — not generic "gamification" advice — because the
Fellowship's population (young adults, many career-changers, disproportionately
Black and Latino/Brown, underrepresented in tech) is specifically who this research
addresses. Re-run the searches periodically to keep this current; don't treat it as
permanently authoritative. Two techniques below (**C.H.A.N.G.E.** and **S.C.A.L.E.**)
are original frameworks designed for this fellowship, not external citations —
labeled as such so nobody mistakes them for established research.

## Two tag dimensions

Every technique below carries **two** tags: **placement** (when in a session) and
**type** (what kind of thinking it exercises). Filter by either when planning a
lesson — e.g. "give me something Liberatory for the End" or "something Technical for
the Middle."

**Placement**: **[Start]** opens a session/segment · **[Middle]** follows a taught
concept or exercise · **[End]** recaps, closes, or gathers feedback. Most can flex —
the tag is a default, not a rule.

**Type** (a technique can carry more than one):

| Type | Meaning |
|---|---|
| Creative | Produces a novel artifact or expression (a sketch, a slogan, a design) |
| Brainstorming | A structured process for generating/prioritizing many ideas |
| Critical Thinking | Interrogation, analysis, argument-building |
| Liberatory | Culturally-sustaining, critical-consciousness, equity-centered — grounded in Freire's problem-posing/praxis tradition and its data-education descendants, see `pedagogy/liberatory_pedagogy.md` (including a hard caution on not overclaiming outcomes) |
| Technical | Directly exercises the day's technical skill |
| Business Thinking | Trade-off framing, stakeholder communication, decision-making |
| Feedback | A protocol for giving/receiving feedback |
| Collaborative | Requires structured peer coordination |
| Reflective | Metacognitive, self-assessment |
| Gamified | Competition/game mechanics |
| Retrieval | Low-stakes recall/concept-check |

Pick 2-3 techniques per lesson spanning at least two different **types** — using the
same technique (or type) every lesson loses its engagement value.

## Quick reference by placement

- **Start**: Curiosity Sprint (`case_study`), Would-You-Rather, C.H.A.N.G.E. (frame),
  Culture-Game Warm-Up, Choose-Your-Path vote, podcast/TED-talk clip
- **Middle**: Think-Pair-Share, 1-2-4-All, Silent Sticky-Note Brainstorm, Round-Robin
  Build ("Yes, and..."), Crazy 8s / Sketch Storm, Five Ways, Brainstorm Matrix,
  S.C.A.L.E., Debug-the-Bug game, Community AI Design Challenge, quick poll,
  tough-concept video clip
- **End**: Concept-map recap, Data Ethics Hashtag, I-Like/I-Wish/What-If, Rose-Thorn-
  Bud, Past-Present-Future reflection, C.H.A.N.G.E. (share-out), Interview-Prep
  tie-in, `further_resources` video

## Framework / acronym techniques

These are multi-step "spines" for a whole segment (or a whole session), not
one-slide prompts — plan a `case_study`/`content`/`check_understanding` sequence
around them.

### C.H.A.N.G.E. — Data for Community Impact
*Original framework, designed for this fellowship.* **[Start → End]** **Liberatory,
Critical Thinking, Creative, Business Thinking.** Give Fellows a real (or
clearly-labeled illustrative) community-relevant data scenario — the `case_study`
layout is built for exactly this — and work through:
- **C — Community**: Name the community and the real issue/statistic affecting it.
- **H — How data helps**: What data or metric would clarify or address the issue?
- **A — Argument**: What evidence-based claim would you make with that data?
- **N — Numbers needed**: What's missing? What data would you still need, and what
  are the limits of what you already have? (This is the critical-thinking-about-data
  step — don't skip it just because "Argument" felt complete.)
- **G — Get the word out**: How would you communicate this? Pairs naturally with the
  PSA/Advocacy Sprint below.
- **E — Evaluate impact**: How would you know if it worked? What would you measure
  afterward? (Ties business-analytics thinking — KPIs, before/after measurement —
  into a community-advocacy context.)

### S.C.A.L.E. — Technical Decision Framework
*Original framework, designed for this fellowship.* **[Middle]** **Technical,
Business Thinking, Critical Thinking.** Use right after teaching 2+ ways to solve
the same technical problem (e.g. `.groupby()` vs. a manual loop; a list vs. a set):
- **S — Scenario**: State the real situation/constraint you're solving for.
- **C — Compare options**: List the 2-3 viable approaches.
- **A — Analyze trade-offs**: Speed, cost, readability, maintainability — name them.
- **L — Land on a choice**: Commit to one and justify it.
- **E — Explain to a stakeholder**: Translate the choice into plain language a
  non-technical manager would accept — this is the interview-relevant payoff; pairs
  well with `interview_prep`.

## Techniques catalog

### Creative & ideation
- **[Middle] Creative, Brainstorming.** **Crazy 8s / Sketch Storm**: fold a page (or
  a shared slide) into 8 sections and sketch a different idea/approach/diagram in
  each, one minute per section, no erasing or refining. A core Google Ventures
  Design Sprint method — the tight time-box is what pushes past the obvious first
  idea (usually the least original one) and it levels the playing field since
  everyone gets the same time regardless of drawing skill. Works for UI sketches,
  pipeline diagrams, or "sketch 8 ways this dataset could be visualized."
- **[Middle] Creative, Brainstorming, Technical.** **Five Ways**: before writing any
  code, require 5 different ways to solve the same problem (e.g. 5 ways to
  deduplicate a list) — go wide before narrowing. Divergent-thinking research is
  explicit that quantity precedes quality: early ideas anchor on the obvious
  approach, and the more original solutions tend to show up later in a forced-quantity
  round. Converge afterward with `compare_contrast` or `S.C.A.L.E.` above.
- **[End or Middle] Creative, Liberatory, Critical Thinking.** **Data Ethics
  Hashtag**: after a lesson touching data bias, privacy, or consent, have Fellows
  condense the lesson's ethical stance into a hashtag plus one sentence
  justification (e.g. `#WhoCountsInTheData`). Leverages hashtag activism — a genre
  Fellows already understand from real social movements — as a communication
  device, translating an abstract ethics point into the same compressed,
  shareable format used for real advocacy. Share a few aloud; don't grade for
  cleverness, grade for whether the justification actually holds up.

### Low-stakes retrieval / polling
- **[Middle] Retrieval.** Quick live poll (`check_understanding`, `mode: poll`)
  right after a new concept, not just at the end — catches confusion while it's
  still cheap to fix. Don't reach for `would_you_rather` reflexively for every
  retrieval moment (see the caution below) — a plain poll, a show-of-hands, or
  simply asking for a classroom share-out (instructor writes responses on a
  physical board, types them live on a slide, or drops them into a virtual
  board/chat if remote — always name the virtual fallback explicitly, see
  `qa/deck_review_exemplar.md`'s "[ACTIVITY] written only for a physical
  classroom" entry) all work just as well for a question that isn't
  actually a binary tradeoff.
- **[Start or Middle] Retrieval, Critical Thinking.** "Would you rather"
  (`check_understanding`, `mode: would_you_rather`) to make a trade-off concrete and
  personal before formalizing it (e.g. "Would you rather have O(1) lookup and
  unordered data, or O(n) lookup and ordered data?" ahead of introducing sets vs.
  lists). **Reserve this specifically for a genuine two-option tradeoff** — a
  real, already-shipped pattern found `would_you_rather` used in literally
  every lesson of a module regardless of whether the question was actually a
  tradeoff, which flattens its impact the same way any repeated technique
  does (see "Engagement" in `content_spec/SCHEMA.md`'s authoring
  conventions). If a question doesn't have two genuinely defensible sides,
  it's a `poll` (single right answer) or a `discussion` (open-ended), not a
  `would_you_rather` stretched to fit.
- **[Middle] Retrieval, Collaborative.** **Sequence it**: give Fellows a
  scrambled list of steps (a workflow, a debugging process, a git command
  order) and ask them to put it back in order — verbally, on a shared
  whiteboard/virtual board, or as a `check_understanding` `mode: whiteboard`
  prompt ("post the 4 steps in the order you'd run them"). Distinct from a
  `poll`/`game` multiple-choice check: the "wrongness" is in the *order*, not
  a single fact, which suits any process with a real, non-obvious sequence
  (e.g. `git init` → `git add` → `git commit`, or read → validate →
  summarize).
- **[Middle] Critical Thinking, Technical.** **Evaluate bad code, then fix
  it**: show a broken or subtly wrong snippet and ask what's wrong and what
  the correct version would be — the `check_understanding` mechanism for
  this is `question_style: debug` (see `pedagogy/blooms_taxonomy.md`'s
  "Question styles"), not a separate slide type. Naturally sits at `analyze`
  or above. The lighter, live-coding version of the same idea ("find the
  bug" framing during a code-along, not a formal check_understanding) is
  covered separately under "Light competition / gamification" below — use
  the `debug` question style when it needs a graded/definitive answer,
  the live-coding framing when it's part of a demo.

### Structured peer discourse
- **[Middle] Collaborative.** Think-Pair-Share: individual think time → pair
  discussion → whole-group share. Research shows this structure (not just "turn and
  talk") is what drives the engagement benefit — the individual think step matters,
  don't skip straight to pairing. Use `check_understanding` with `mode: discussion`
  and say "think individually for 30s first" explicitly in the prompt or notes.
- **[Middle] Collaborative, Brainstorming.** **1-2-4-All** (Liberating Structures):
  individuals silently write an idea/answer → pair up and compare → two pairs merge
  into a four and converge on the best idea → one point per group of four is shared
  with the whole room. Scales think-pair-share to bigger groups and guarantees every
  voice is heard before the loudest one dominates.
- **[Middle] Collaborative, Technical.** **Round-Robin Build ("Yes, and...")**: one
  Fellow starts explaining a concept in one sentence, the next must accept it and
  add one more ("yes, and..."), and so on — a cooperative game of telephone where
  the goal is an accurate shared explanation, not seeing how garbled it gets.
  Borrowed from improv pedagogy: building on what's offered rather than shutting it
  down lowers the fear of being wrong. Good for reviewing a multi-step process (e.g.
  "explain the groupby → aggregate → summarize pipeline, one step per person").
- **[Middle] Collaborative, Liberatory.** Cold-call *after* pair discussion, not
  before — lets students test an answer with a peer first, reducing stakes for
  students most affected by stereotype threat in a public-performance setting.

### Brainstorming & ideation structures
- **[Middle] Brainstorming, Creative, Collaborative.** **Silent Sticky-Note
  Brainstorm / Affinity Mapping**: everyone silently writes one idea per sticky
  note (physical wall, or a `whiteboard`-mode `check_understanding` slide pointing
  to a shared digital board), then the group clusters similar notes into named
  categories together. Silent generation first means quieter Fellows contribute
  equally instead of the discussion being dominated by whoever speaks fastest.
- **[Middle] Brainstorming, Business Thinking, Critical Thinking.** **Brainstorm
  Matrix** (2x2 impact/effort, or "known vs. unknown"): give Fellows a two-axis
  grid and have them place ideas/approaches into quadrants before choosing one to
  pursue — makes prioritization itself part of the exercise. Good right after
  teaching several techniques that solve the same problem differently.

### Culturally-responsive games & strategy play
- **[Start or Middle] Liberatory, Technical, Critical Thinking.** **Culture-Game
  Warm-Up** (Mahjong, dominoes, spades, and similar games many Fellows already know
  from home): open a lesson on pattern recognition, probability, or strategic
  trade-offs with 5 minutes of a familiar game, then explicitly name the parallel
  ("the trade-off you just made choosing which tile to discard is the same one as
  choosing a data structure here"). Research on culturally-driven game-based
  strategies shows games rooted in students' own cultural practice measurably
  improve engagement in the exact skills those games already require — reasoning,
  probability, pattern recognition — because the game is already familiar and
  valued, not a "fun" wrapper bolted onto the lesson. Name the connection to today's
  skill explicitly, every time — don't leave it implicit.

### Advocacy, PSA, and critical-data-literacy techniques
- **[Start, framing → End, share-out] Liberatory, Critical Thinking, Creative,
  Business Thinking.** **PSA / Advocacy Sprint**: present a real (or
  clearly-labeled illustrative) alarming statistic about a group or community —
  exactly what `case_study` is for — then have Fellows draft 3 lines of a public
  service announcement that either (a) explains the stat's real cause, (b) raises
  awareness of it, or (c) interrogates/disproves a misleading version of it. This
  operationalizes *critical data literacy* — treating a statistic as something to
  interrogate (who collected it, what's missing, what story does it support or
  undercut) rather than accept at face value — and the "critical consciousness"
  pillar of culturally relevant pedagogy: using the day's technical skill to engage
  a real inequity, not just an abstract practice problem. Resolve/share PSAs in the
  same session the hook opened, so the curiosity gets a real payoff.

### Applied ethics & community design
- **[Middle, once AI/ML content has been introduced] Liberatory, Critical Thinking,
  Technical, Business Thinking.** **Design an "Ethical AI Agent" for a Community
  Task**: once a lesson reaches AI/ML concepts, small groups sketch (not code) an
  AI agent meant to solve a real community-relevant problem (e.g. flagging
  food-desert grocery gaps, triaging 311 requests fairly), and explicitly name: who
  could be harmed if it's wrong, whose data trains it, and what a Fellow would
  insist on before shipping it. A lightweight version of *value-sensitive design* —
  a well-established framework for surfacing whose values and whose harms a
  technical system encodes — applied to a real community rather than an abstract
  user. Pairs naturally with `concept_map` (map the agent's stakeholders) or
  `compare_contrast` (this design vs. a naive one).

### Light competition / gamification
- **[Middle] Gamified, Retrieval.** Small point/leaderboard framing
  (`check_understanding`, `mode: game`) for review moments — e.g. quick-fire
  terminology rounds. Keep stakes low (participation, not grade-bearing) — research
  on CS-education gamification shows the engagement lift comes from *voluntary,
  low-stakes* competition, not high-pressure ranking.
- **[Middle] Gamified, Technical.** Frame code debugging as a "find the bug"
  challenge rather than a plain walkthrough when live-coding — turns a passive demo
  into an active one.

### Curiosity / narrative hooks
- **[Start] Critical Thinking, Liberatory.** `case_study` slides open a segment
  with a real or clearly-labeled-fictional scenario and a `hook_question` — resolve
  the hook later in the same deck (in a `content`, `bridge`, or `closing` slide)
  rather than leaving it open, per the instructional checklist's hook-resolution
  check.

### Media: video, podcast, and talk clips
A short, well-chosen clip is a legitimate engagement technique on its own —
not every moment needs to be interactive to hold attention, and a genuinely
tough concept (see "Which concepts earn one" logic in
`pedagogy/relatable_analogies.md`/`pedagogy/diagram_selection.md` — the
same restraint judgment applies here) often lands better heard/seen a
second way than read as another bullet list.
- **[Middle] Technical.** `video_resource` on a `content`/`bridge`/`closing`
  slide, tied to one specific hard concept — check
  `pedagogy/video_resources.md` (a pre-researched, verified bank for
  recurring tough concepts: OOP, functions, decorators, hypothesis testing,
  probability, data leakage, how AI models work, git branching, MCP, and
  more as they're added) before spending a fresh search. Keep to ~6 minutes
  or less; see "Video resources" in `content_spec/SCHEMA.md`.
- **[Start] Critical Thinking, Liberatory.** A podcast or TED-talk clip
  works especially well as a `case_study`'s companion `video_resource` for
  a topic with real, current public discourse — AI-safety debates, the
  legality of self-driving cars, algorithmic bias in hiring, and similar —
  where hearing an actual expert/stakeholder disagree about something
  live lands harder than a summarized bullet ever could. Same
  `video_resource` field, no separate mechanism; a podcast clip is just a
  differently-sourced video link.
- **[End] Reflective.** A `further_resources` slide's `kind: "video"`
  entries are the deck-wide, end-of-lesson version of this — see
  "Further resources" in `content_spec/SCHEMA.md`.

### Recap & consolidation
- **[End] Reflective, Technical.** `concept_map` slides work well as a closing
  consolidation moment — point to each satellite node and ask a Fellow to say one
  sentence connecting it back to the day's hook or exercise, rather than just
  displaying it silently.

### Feedback & reflection protocols
- **[End] Feedback, Reflective.** **I Like / I Wish / What If** (Stanford d.school):
  ask Fellows to give feedback on the lecture or a peer's approach in three
  sentence starters — "I liked...", "I wish...", "What if...". Positives named
  before gaps, and gaps reframed as forward-looking possibilities rather than
  complaints, is what makes it usable feedback instead of venting.
- **[End] Feedback, Reflective.** **Rose, Thorn, Bud**: a close cousin — Rose (what
  went well), Thorn (what was hard or frustrating), Bud (something with potential,
  not fully grown yet — a question or idea worth returning to next class).
- **[End] Reflective, Feedback.** **Past / Present / Future reflection**: three
  quick prompts — "What did you know about this coming in? (Past)", "What's true
  for you now? (Present)", "What will you do with this next? (Future)" — turns a
  recap into a personal narrative rather than a content checklist. Keep "Future"
  answers spoken/in `notes`, not baked into a `bridge` slide's visible text (see
  "Deliberately no `looking_ahead` field" in content_spec/SCHEMA.md).

### Belonging & career relevance (specific to this population)
- **[Anywhere, esp. End] Business Thinking, Liberatory.** Explicitly tie concepts
  to real career/interview relevance — the `interview_prep` slide exists
  specifically for this; don't treat it as an afterthought bolted onto the end,
  reference it or foreshadow it earlier in `notes` if it connects to a specific
  concept.
- **[Start, in notes] Liberatory.** Normalize struggle rather than implying the
  material should feel easy — e.g. suggest the instructor briefly name a common
  early confusion as expected/normal before diving in, rather than only addressing
  it if it arises. Research on stereotype threat shows framing that assumes
  competence and treats struggle as normal (not as a sign someone doesn't belong)
  improves outcomes for students most affected by it — a `notes`-field instruction
  to the instructor, not visible slide text.
- **[Anywhere] Liberatory, Business Thinking.** Prefer real-world, industry-relevant
  examples over toy/abstract ones where possible (this is also why `case_study` and
  realistic code slides matter) — career relevance is itself an engagement and
  belonging technique for this population, not just a "make it interesting" nicety.
- **[Anywhere, philosophy not a standalone technique] Liberatory.** Culturally
  sustaining pedagogy's core insight: treat Fellows' cultural and community
  practices (the games they already play, the communities they're already part of,
  the causes they already care about) as a resource to build the lesson *on*, not a
  gap to work around. Every technique above tagged Liberatory is a direct
  application of this — name the connection explicitly rather than leaving it
  implicit. See `pedagogy/liberatory_pedagogy.md` for the deeper theoretical
  grounding (Freire's problem-posing/praxis, hooks's engaged pedagogy, and the
  data-specific extensions of both) behind this whole tag.
- **[Anywhere, esp. `interview_prep`] Liberatory — hard caution, read before
  using.** The most directly relevant research found (a 2025 ethnographic study
  of Black adult learners at a real coding bootcamp explicitly built around
  liberation and anti-racism — see `pedagogy/liberatory_pedagogy.md`) found
  most graduates did **not** land the jobs the program promised, even with
  genuinely well-intentioned instructors — racial bias and whiteness-coded
  "professionalism" norms in hiring undercut the promise. **Never let
  `interview_prep` or career-relevance framing imply that mastering this
  material guarantees a fair shake or an outcome** — name real industry bias
  openly instead of a sanitized meritocracy, and validate community,
  self-definition, and mutual support as real wins in their own right, not a
  consolation prize for a job that didn't materialize.

## Sources

- Freire, P. (1970/2000). *Pedagogy of the Oppressed*. Continuum. (Foundational grounding for every Liberatory-tagged technique — see `pedagogy/liberatory_pedagogy.md`.)
- Byrd, A. (2025). *Black Tech Ecosystems: How Black Adult Learners Use Computer Code Bootcamps for Liberation*. The WAC Clearinghouse & University Press of Colorado. (Source of the career-relevance caution above.)
- Ladson-Billings, G. (1995). [Toward a Theory of Culturally Relevant Pedagogy](https://journals.sagepub.com/doi/10.3102/00028312032003465). *American Educational Research Journal*. (The three-pillar framework: academic success, cultural competence, critical consciousness.)
- [Culturally Sustaining Pedagogy — Project READY (UNC)](https://ready.web.unc.edu/section-2-transforming-practice/module-18/)
- [Culturally Driven Game-Based Strategies: A Tool for Developing Students' 4Cs in Mathematics Education](https://rsisinternational.org/journals/ijrias/articles/culturally-driven-game-based-strategies-a-tool-for-developing-students-4cs-in-mathematics-education/)
- [Data Interrogations for Critical Statistical Literacy — Statistics Teacher](https://www.statisticsteacher.org/2020/11/12/data-interrogations-critical-statistical-literacy/)
- [1-2-4-All — Liberating Structures](https://www.liberatingstructures.com/1-2-4-all)
- [Do You Have an Affinity for SILENT Sticky-Wall Brainstorming? — MSU Extension](https://www.canr.msu.edu/news/do_you_have_an_affinity_for_silent_sticky_wall_brainstorming_part_2)
- [I Like, I Wish, What If — Stanford d.school method card](http://dschool-old.stanford.edu/wp-content/themes/dschool/method-cards/i-like-i-wish-what-if.pdf)
- ["Yes, and..." pedagogical improv workshop recap — UT Austin Center for Teaching & Learning](https://ctl.utexas.edu/news/recap-yes-and-pedagogical-improv-workshop)
- Friedman, B. et al. — Value Sensitive Design (foundational HCI/ethics framework for surfacing whose values a technical system encodes; widely cited in responsible-AI education).
- [Crazy 8's — Design Sprint Kit (Google Ventures methodology)](https://designsprintkit.withgoogle.com/methodology/phase3-sketch/crazy-8s)
- [What is Divergent Thinking? — Interaction Design Foundation](https://ixdf.org/literature/topics/divergent-thinking)
- [Hashtag Activism — research overview, EBSCO Research Starters](https://www.ebsco.com/research-starters/social-sciences-and-humanities/hashtag-activism)
- [Breaking the Monologue With Active Learning Using the Think-Pair-Share Strategy](https://www.ncbi.nlm.nih.gov/pmc/articles/PMC12648187/)
- [Creating inclusive classrooms by engaging STEM faculty in culturally responsive teaching workshops](https://www.ncbi.nlm.nih.gov/pmc/articles/PMC7326892/)
- [Reducing Stereotype Threat - Inclusive CS Teaching](https://www.inclusivecsteaching.org/equity/reducing-stereotype-threat)
- [Mitigating Stereotype Threat: How to Support Minoritized Students in the Classroom - Every Learner Everywhere](https://www.everylearnereverywhere.org/blog/mitigating-stereotype-threat-how-to-support-minoritized-students-in-the-classroom/)
- [Kritik - 6 Culturally Responsive Pedagogy Strategies to Boost Student Engagement](https://www.kritik.io/blog-post/culturally-responsive-pedagogy)
- [Transforming Inclusive Education Through Gamification and Active Learning Strategies (MDPI)](https://www.mdpi.com/2078-2489/16/9/753)
- [Active Learning Methodologies for Increasing Interest and Engagement in CS Subjects in VET (MDPI)](https://www.mdpi.com/2227-7102/15/8/1017)
- [Enhancing Computer Science Education Using Learning Assistants: A Gamification Approach (ACM SE 2025)](https://dl.acm.org/doi/10.1145/3696673.3723075)
