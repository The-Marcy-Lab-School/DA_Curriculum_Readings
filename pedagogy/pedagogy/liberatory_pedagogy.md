# Liberatory Pedagogy Reference

`pedagogy/engagement_techniques.md` already tags many techniques **Liberatory**
and grounds them in culturally relevant/sustaining pedagogy (Ladson-Billings,
Paris) and stereotype-threat research. This doc grounds that tag in the deeper
tradition it's actually named after — Freire's liberatory pedagogy and its
direct descendants in teaching mathematics/data specifically — and translates
it into concrete slide-design guidance. Full research and citations:
`pedagogy/liberatory_pedagogy_research.md`.

**Read the caution section before the rest of this doc.** The single most
directly relevant piece of research found (Byrd, 2025 — a study of Black adult
learners in a real coding bootcamp) found that liberatory *intent* does not
guarantee liberatory *outcomes*, and that overclaiming can do real harm. This
doc is written to avoid that failure mode.

## What "liberatory" actually means here (not just a vibe)

Four concepts, from Freire (1970) and hooks (1994), give this word actual
content instead of leaving it as a feeling:

1. **Problem-posing, not banking.** Freire's "banking model" of education —
   deposit a fact, retrieve it later — treats students as passive containers.
   The alternative poses a real, open problem and investigates it *with*
   students, teacher as co-investigator, not sole authority.
2. ***Conscientização* (critical consciousness).** Helping learners perceive
   the world — including data, systems, and institutions — as constructed and
   changeable, not a fixed given to simply accept.
3. **Praxis.** Freire is explicit that reflection without action is empty
   verbalism, and action without reflection is empty activism — real learning
   closes the loop with both.
4. **Engaged pedagogy** (hooks). Teaching the whole student, not just the
   intellect — visible instructor investment and enthusiasm, and students'
   full identities (career-changer, cultural background) welcomed as assets to
   build on, not distractions to manage.

## Liberatory pedagogy applied to *data* specifically

This is the most directly usable thread, because it's about teaching this
exact subject, not pedagogy in general:

- **Read the world, then write it** (Gutstein) — use real data to investigate
  conditions in communities like students' own (housing, policing, health,
  wages), then act on what the data shows, rather than only analyzing
  generic/corporate sample data. This is the literal theoretical grounding for
  `pedagogy/industry_domains.md`'s Public Sector / Non-Profit & Social Impact
  domains and its real-public-dataset table — reach for those specifically
  when a lesson can support this, not as decoration.
- **Windows and mirrors** (Gutiérrez) — a case study or example should
  sometimes reflect a Fellow's own background/community back to them (mirror),
  and sometimes open a window into a different context — both matter, neither
  alone is enough.
- **Consider context, make labor visible** (D'Ignazio & Klein, *Data
  Feminism*) — treat this as a literal, checkable habit for any dataset or
  case study: name who collected the data and why, what perspective is
  missing from it, and whose labor (often invisible, often marginalized)
  produced it. Data is never neutral or "raw" — teach it that way.

## A hard caution: liberatory intent doesn't guarantee liberatory outcome

The most population-specific research found (Byrd, 2025) studied Black adult
learners at a real coding bootcamp explicitly designed around liberation and
anti-racism — and found real, important limits, not a success story to copy
uncritically:

- **Most graduates did not land the jobs the program promised.** Racial
  microaggressions, stereotype threat, and whiteness-coded "professionalism"
  norms in the industry undercut the program's liberatory intent even where
  instructors genuinely meant well. **Do not let a slide, `notes`, or
  `interview_prep` framing imply that mastering this material guarantees
  upward mobility or a fair shake in hiring** — that's a promise this system
  can't back up and the research says is often false.
- **What Fellows actually got out of it, per the study, was real: reclaimed
  self-definition, mutual carework, and community — not job placement.**
  Validate those as legitimate, worthwhile outcomes in their own right, not as
  a consolation prize.
- **Name industry bias openly rather than presenting a sanitized
  meritocracy.** Per hooks's engaged pedagogy and this study both: an
  instructor who acknowledges "the hiring bar isn't actually neutral" is doing
  something the research documents as more honest and more supportive than
  pretending it is.

## Not every slide, not forced — "when applicable" is load-bearing

Same restraint principle as `pedagogy/relatable_analogies.md`'s analogy
budget: a deck where every single slide reaches for community stakes or
critical-consciousness framing dilutes the technique into background noise
and starts to feel performative rather than real — which is exactly the kind
of surface-level gesture the culturally-relevant-pedagogy literature already
warns against (see the tokenism caution in `relatable_analogies.md`). Liberatory
framing earns its place when:
- The lesson's actual content (a real dataset, a real case study, a real
  algorithmic-bias example) has a genuine community/justice angle — don't
  invent one where the technical content doesn't support it.
- A technical concept has a natural "why does this matter beyond the
  exercise" angle worth surfacing (most do, some don't — a lesson on basic
  list syntax may not need it; a lesson on data aggregation/bias/sampling
  usually does).
- It fits one of the existing `pedagogy/engagement_techniques.md` Liberatory-
  tagged techniques (C.H.A.N.G.E., PSA/Advocacy Sprint, Data Ethics Hashtag,
  Ethical AI Agent design) rather than being bolted on as an isolated gesture.

A purely technical, mechanics-focused slide (syntax, a library method, a data
type) doesn't need liberatory framing forced onto it. Reserve it for where the
content genuinely carries it.

## Authoring guidance

- **Problem-posing phrasing**: where a concept naturally supports it, phrase
  the opening framing as an open question rooted in a real stake ("this
  neighborhood's 311 data shows X — what would you check first?") rather than
  only a declarative definition. Not every slide needs this — see restraint
  section above.
- **Dataset/case-study checklist**: for any `case_study` or dataset-driven
  `code` slide with a genuine community/justice angle, consider naming (in
  `notes`, not necessarily the visible slide) who collected the data, what
  perspective might be missing, and whose labor produced it — Data Feminism's
  "consider context"/"make labor visible," made concrete.
- **Praxis close**: where a unit's content supports it, close with a real
  action step (the `closing` slide's exercise, a `check_understanding`
  `mode: game`/PSA-style prompt, or the final-project tie-in), not just a
  reflection prompt — reflection alone is Freire's "verbalism," not praxis.
  This is exactly what `pedagogy/blooms_taxonomy.md`'s `create` level and the
  backwards-design linkage to `final_project` already exist for; treat them as
  the natural home for this, not a separate new mechanism.
- **Delivery framing in `notes`**: write instructor notes that model visible
  investment and honesty about real stakes (including industry bias, where
  relevant to `interview_prep`) rather than a detached, purely neutral tone —
  consistent with the brand's existing fun/conversational voice guidance
  (`BRAND_GUIDELINES.md`), now with a specific pedagogical reason behind it,
  not just a style preference.
- **Don't overclaim in `interview_prep`/career-relevance framing** — be
  honest about real industry conditions (per the caution above) rather than
  implying mastery alone guarantees an outcome the research says it often
  doesn't.

## Sources

Full findings and per-citation reasoning: `pedagogy/liberatory_pedagogy_research.md`.

- Freire, P. (1970/2000). *Pedagogy of the Oppressed*. Continuum.
- hooks, b. (1994). *Teaching to Transgress: Education as the Practice of Freedom*. Routledge.
- Gutstein, E. (2006). *Reading and Writing the World with Mathematics: Toward a Pedagogy for Social Justice*. Routledge.
- Gutiérrez, R. (2018). Introduction: The need to rehumanize mathematics. In *Rehumanizing Mathematics for Black, Indigenous, and Latinx Students*. NCTM.
- D'Ignazio, C., & Klein, L. F. (2020). *Data Feminism*. MIT Press.
- Milner, Y., & Traub, A. (2021). *Data Capitalism and Algorithmic Racism*. Data for Black Lives & Demos.
- Byrd, A. (2025). *Black Tech Ecosystems: How Black Adult Learners Use Computer Code Bootcamps for Liberation*. The WAC Clearinghouse & University Press of Colorado.
