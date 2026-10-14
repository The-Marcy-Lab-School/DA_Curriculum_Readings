# The Learning Science Behind These Decks & Live Coding Sessions

*A plain-language summary for technical and non-technical team members, with
sources. Paste this into a Google Doc to share — same "write it locally,
upload it by hand" approach used for every other document this system
produces.*

## Why this document exists

Every lesson deck this system generates, and every live-coding session built
around it, is shaped by a specific, cited set of learning-science research —
not just "what seemed like a good idea." This document explains what that
research says, in plain language, and exactly where to find the original
source if you want to go deeper. It's organized to be skimmable: each section
opens with what it means in practice, then gives the sources behind it.

**A note on the population this is written for:** the Fellowship serves young
adults (18–24), disproportionately Black and Latino/Brown, many of them
career-changers moving into tech for the first time. Several of the research
areas below (stereotype threat, culturally-sustaining pedagogy, funds of
knowledge) are specifically about how instruction lands differently for
exactly this population — they're not generic "best practices," they're
targeted.

**This is a living reference, not a finished conclusion.** The underlying
`pedagogy/*.md` files this document summarizes get revisited periodically as
new research becomes available — treat this as the current best understanding,
not permanent doctrine.

---

## 1. How people learn a hard new concept: analogies and concreteness

**In practice:** the hardest 1–2 concepts in a lesson get a concrete,
familiar analogy *before* the technical vocabulary is introduced — e.g.,
"think about your Liked Songs playlist" before the word "set" ever comes up.
Analogies are drawn from sports, fashion, food, social media, community,
family, travel, music, and gaming — deliberately rotated so no single lesson
(or Fellowship experience) leans on one narrow reference point every time.

**Why it works:** Instruction that starts from something concrete and
familiar and only gradually moves toward the abstract term produces
measurably better understanding than starting with the abstract definition
first. Separately, a well-established finding called "funds of knowledge"
shows that students' home and community knowledge (cooking, budgeting, family
routines) is a genuine cognitive resource for learning — not a distraction
from "real" content.

**The caution that matters:** research on culturally responsive teaching is
explicit that its most common failure is treating "relatability" as one
surface-level gesture (one slide, one basketball reference) rather than
something woven in with real care — and that leaning on a narrow, stereotyped
set of references can read as patronizing rather than validating. Every
analogy is checked against this before it ships.

**Sources:**
- Concreteness Fading in Mathematics and Science Instruction: A Systematic
  Review, *Educational Psychology Review* (Springer)
- Moll, L.C., Amanti, C., Neff, D., & Gonzalez, N. (1992). Funds of Knowledge
  for Teaching. *Theory Into Practice*.
- Does Culturally Relevant Teaching Work? An Examination From Student
  Perspectives — Byrd (2016), *SAGE Journals*
- Culturally Responsive Teaching, Explained — FutureEd
- Teach Using the Lived Experiences of Your Students — Edutopia

---

## 2. When a diagram helps — and when it actively hurts

**In practice:** a workflow diagram, concept map, or comparison chart only
gets used when the *relationship between the parts* is the actually hard
thing — a real dependency between steps, a cycle that repeats, several ideas
that cross-reference each other. A simple checklist of independent items
never becomes a diagram just because it visually could.

**Why it works:** this is the part of the research that's most
counter-intuitive to non-specialists — **a diagram doesn't automatically
help, and can measurably hurt.** Studies on "seductive details" found that
interesting-but-unnecessary visuals actually *reduce* how much students
remember of the content that matters, because attention gets pulled toward
the decoration. A 44-study review confirmed the blunt version: simply
including a visual does not guarantee any learning benefit. On the other
side, concept maps show real, replicated benefit specifically when ideas
genuinely cross-link each other (a 55-study meta-analysis), and diagrams of
otherwise-invisible system behavior (what's actually happening inside a
pipeline or a piece of running code) are the single strongest use case in
technical education, because novices have no working mental model of that
otherwise.

**The single test used before adding any diagram:** say the relationship out
loud in one plain sentence. If a person would correctly remember that
sentence without needing to see it drawn, the diagram isn't adding
information — it's decoration.

**One more finding worth knowing:** students who *build or complete* a
diagram themselves learn more than students who only look at a finished one
(a 142-effect-size meta-analysis found nearly double the benefit). This is
part of why fill-in-the-blank exercises exist in this system, not just
static diagrams.

**Sources:**
- Novak, J. D., & Gowin, D. B. (1984). *Learning How to Learn*. Cambridge
  University Press.
- Nesbit, J. C., & Adesope, O. O. (2006). Learning with concept and knowledge
  maps: A meta-analysis. *Review of Educational Research*, 76(3).
- Paivio, A. (1971/1986). *Mental Representations: A Dual Coding Approach*.
- Larkin, J. H., & Simon, H. A. (1987). Why a diagram is (sometimes) worth ten
  thousand words. *Cognitive Science*, 11(1).
- Mayer, R. E., & Gallini, J. K. (1990). When is an illustration worth ten
  thousand words? *Journal of Educational Psychology*, 82(4).
- Garner, R., Gillingham, M. G., & White, C. S. (1989). Effects of "seductive
  details." *Cognition and Instruction*, 6(1).
- Guo, D., & McTigue, E. M. (2020). The impact of visual displays on learning
  across the disciplines. *Educational Psychology Review*, 32(3).
- Hundhausen, C. D., Douglas, S. A., & Stasko, J. T. (2002). A meta-study of
  algorithm visualization effectiveness. *Journal of Visual Languages &
  Computing*, 13(3).
- Sorva, J., Karavirta, V., & Malmi, L. (2013). A review of generic program
  visualization systems. *ACM Transactions on Computing Education*, 13(4).
- Vessey, I. (1991). Cognitive fit: graphs versus tables. *Decision
  Sciences*, 22(2).
- Schroeder, N. L., Nesbit, J. C., Anguiano, C. J., & Adesope, O. O. (2018).
  Studying and constructing concept maps: A meta-analysis. *Educational
  Psychology Review*, 30(2).
- Anastasiou, D., Wirngo, C. N., & Bagos, P. (2024). The effectiveness of
  concept maps on students' achievement in science. *Educational Psychology
  Review*, 36.
- Wang, X.-M., et al. (2025). Concept mapping in STEM education: A
  meta-analysis (2004–2023). *International Journal of STEM Education*, 12.
- Mayer, R. E. (2024). The past, present, and future of the cognitive theory
  of multimedia learning. *Educational Psychology Review*, 36.
- Li, J.-T., et al. (2024). The effects of four instructional strategies on
  English learners' reading comprehension. *Bilingual Research Journal*.
- Schmader, T., & Johns, M. (2003). Converging evidence that stereotype
  threat reduces working memory capacity. *Journal of Personality and Social
  Psychology*, 85(3).
- Beilock, S. L., Rydell, R. J., & McConnell, A. R. (2007). Stereotype threat
  and working memory. *Journal of Experimental Psychology: General*, 136(2).

---

## 3. How a slide should present information at all (Mayer's Multimedia Learning)

**In practice:** slides stay visually simple and terse on purpose. The fuller
explanation lives in the instructor's spoken notes, not duplicated as a dense
paragraph on the slide. Related text and visuals stay physically close
together. One idea per slide, not two crammed onto one. A technical term is
named and defined *before* it's used to explain something more complex, never
at the same time.

**Why it works:** this is Richard Mayer's Cognitive Theory of Multimedia
Learning — one of the most-replicated frameworks in instructional design,
researched continuously since the late 1990s. Its core finding: how you
combine text, narration, and images has measurable, testable effects on
learning, and several common instincts (put everything on the slide so
nothing gets missed; add extra interesting facts to make it engaging) turn
out to actively work against retention.

**Sources:**
- Mayer, R. E. *Multimedia Learning*. Cambridge University Press.
- Mayer, R. E., & Moreno, R. (2003). Nine Ways to Reduce Cognitive Load in
  Multimedia Learning. *Educational Psychologist*, 38(1).

---

## 4. Bloom's Taxonomy: making sure questions actually test understanding

**In practice:** every comprehension check is tagged with one of six
cognitive levels (Remember, Understand, Apply, Analyze, Evaluate, Create).
No more than about 40% of a lesson's questions can sit at the bottom
"Remember" level (pure recall) — every lesson has to include at least one
question that requires applying, analyzing, or judging, not just recalling a
fact.

**Why it works:** this is the widely-used revised version of Bloom's
Taxonomy (Anderson & Krathwohl, 2001, updating Bloom's original 1956
framework) — the standard reference in education for the idea that not all
questions exercise the same kind of thinking, and a course built entirely on
recall questions isn't actually assessing whether someone understands the
material, just whether they memorized it.

**Sources:**
- Anderson, L. W., & Krathwohl, D. R. (Eds.) (2001). *A Taxonomy for
  Learning, Teaching, and Assessing: A Revision of Bloom's Taxonomy of
  Educational Objectives*. Longman.

---

## 5. Real-world scenarios and industry variety

**In practice:** code examples and case studies are pulled from a deliberate
rotation across six real-world domains — Finance, Healthcare, Public Sector,
Non-Profit & Social Impact, Business Operations & Growth, and Professional
Services — using genuinely real, publicly accessible datasets (government
data portals, SEC filings, WHO health data, UN development statistics, IRS
nonprofit filings, and similar) wherever one fits, instead of inventing a
fictional "sales data" example every time.

**Why it matters:** realistic, industry-relevant examples are themselves an
engagement and belonging technique for a Fellowship built around
career-changers — it's not just "more interesting," it's part of how
material connects to the actual job Fellows are training for. The Public
Sector and Non-Profit domains specifically also connect to the liberatory
pedagogy research in section 7 below: real data about real communities,
investigated for a real reason, not a generic classroom exercise.

---

## 6. Engagement techniques: a deliberate catalog, not improvisation

**In practice:** every lesson picks 2–3 concrete engagement techniques from a
researched catalog spanning creative/ideation exercises, structured peer
discussion (like Think-Pair-Share and 1-2-4-All), brainstorming structures,
culturally-responsive game-based warm-ups, PSA/advocacy exercises, applied
ethics design challenges, and low-stakes gamified review — deliberately
varied across at least two different *types* of thinking, so a lesson series
doesn't lean on the same one or two moves every time.

**Two frameworks were built specifically for this Fellowship** (not adapted
from outside research, so they're labeled clearly as original rather than
academic citations):
- **C.H.A.N.G.E.** — a structure for working through a real community data
  scenario (Community → How data helps → Argument → Numbers needed → Get the
  word out → Evaluate impact).
- **S.C.A.L.E.** — a structure for teaching a real technical trade-off
  decision (Scenario → Compare options → Analyze trade-offs → Land on a
  choice → Explain to a stakeholder).

**A few specific, well-evidenced techniques worth knowing about:**
- **Think-Pair-Share** works because of the *structure*, not just "let people
  talk" — individual think time before pairing is what drives the benefit;
  skipping straight to pair discussion loses it.
- **Cold-calling happens after pair discussion, not before** — letting
  someone test an answer with a peer first measurably reduces the stakes of
  being called on, especially for students most affected by stereotype
  threat in a public setting.
- **Culturally-driven game warm-ups** (games many Fellows already know from
  home — dominoes, spades, and similar) measurably improve engagement in the
  exact reasoning/probability/pattern-recognition skills those games already
  require, because the game is already familiar and valued, not a "fun"
  wrapper stapled onto the lesson.

**Sources:**
- Freire, P. (1970/2000). *Pedagogy of the Oppressed*. Continuum.
- Byrd, A. (2025). *Black Tech Ecosystems: How Black Adult Learners Use
  Computer Code Bootcamps for Liberation*. The WAC Clearinghouse & University
  Press of Colorado.
- Ladson-Billings, G. (1995). Toward a Theory of Culturally Relevant
  Pedagogy. *American Educational Research Journal*.
- Culturally Sustaining Pedagogy — Project READY (UNC)
- Culturally Driven Game-Based Strategies: A Tool for Developing Students'
  4Cs in Mathematics Education
- Data Interrogations for Critical Statistical Literacy — Statistics Teacher
- 1-2-4-All — Liberating Structures
- I Like, I Wish, What If — Stanford d.school method card
- "Yes, and..." pedagogical improv workshop recap — UT Austin Center for
  Teaching & Learning
- Friedman, B. et al. — Value Sensitive Design (foundational framework for
  surfacing whose values/harms a technical system encodes)
- Crazy 8's — Design Sprint Kit (Google Ventures methodology)
- What is Divergent Thinking? — Interaction Design Foundation
- Hashtag Activism — research overview, EBSCO Research Starters
- Breaking the Monologue With Active Learning Using the Think-Pair-Share
  Strategy
- Reducing Stereotype Threat — Inclusive CS Teaching
- Mitigating Stereotype Threat — Every Learner Everywhere
- Transforming Inclusive Education Through Gamification and Active Learning
  Strategies (MDPI)

---

## 7. Liberatory pedagogy: teaching data as something to question, not just compute

**In practice:** when a lesson's real content supports it (a real dataset, a
real case study, a real bias/fairness angle — never forced onto a purely
syntax-focused slide), the material treats data as something to interrogate,
not a neutral given: naming who collected a dataset, what perspective might
be missing from it, and whose labor produced it. Case studies and examples
sometimes reflect Fellows' own communities back to them, and sometimes open a
window into a different context — both are used deliberately.

**Where this comes from:** Paulo Freire's foundational distinction between
"banking education" (deposit a fact, retrieve it later, student as passive
container) and "problem-posing education" (investigate a real, open problem
together, instructor as co-investigator). Freire is also explicit that
reflection without real action is empty, and that a closing "so what would
you do about it" moment matters — not reflection alone. bell hooks extends
this with "engaged pedagogy": teaching the whole student, not just the
intellect, with visible instructor investment. Applied specifically to data
education: Eric Gutstein's "read the world, then write it" (use real data to
investigate real community conditions, then act on what it shows), Rochelle
Gutiérrez's "windows and mirrors" framing, and Catherine D'Ignazio & Lauren
Klein's *Data Feminism* principle that data is never neutral — always ask
who collected it and whose labor produced it.

**The hard caution, read before any of the above:** the most directly
relevant research found — a 2025 study of Black adult learners at a real
coding bootcamp explicitly built around liberation and anti-racism — found
that **most graduates did not land the jobs the program promised**, even with
genuinely well-intentioned instructors, because racial bias and
whiteness-coded "professionalism" norms in hiring undercut the program's
intent. What Fellows *did* get — reclaimed self-definition, mutual support,
real community — was real and valuable, but not a substitute for the
economic outcome that was promised. **This system never lets interview prep
or career-relevance material imply that mastering the content guarantees a
fair shake in hiring** — it names real industry bias openly instead of a
sanitized meritocracy narrative, per what this research documents as more
honest and more genuinely supportive.

**Sources:**
- Freire, P. (1970/2000). *Pedagogy of the Oppressed*. Continuum.
- hooks, b. (1994). *Teaching to Transgress: Education as the Practice of
  Freedom*. Routledge.
- Gutstein, E. (2006). *Reading and Writing the World with Mathematics:
  Toward a Pedagogy for Social Justice*. Routledge.
- Gutiérrez, R. (2018). Introduction: The need to rehumanize mathematics. In
  *Rehumanizing Mathematics for Black, Indigenous, and Latinx Students*.
  National Council of Teachers of Mathematics.
- D'Ignazio, C., & Klein, L. F. (2020). *Data Feminism*. MIT Press.
- Milner, Y., & Traub, A. (2021). *Data Capitalism and Algorithmic Racism*.
  Data for Black Lives & Demos.
- Byrd, A. (2025). *Black Tech Ecosystems: How Black Adult Learners Use
  Computer Code Bootcamps for Liberation*. The WAC Clearinghouse & University
  Press of Colorado.

---

## 8. How all of this shows up specifically in a live-coding session

Live coding is where several of the principles above become concrete,
minute-to-minute decisions, not just slide design:

- **The instructor's own reference notebook is never shown to students** —
  it's a private answer key. What's actually projected and typed into, live,
  in front of the class, is the student notebook. This is a direct
  application of Mayer's **redundancy principle** (section 3): the finished
  code on a "recap" slide and the actual typing happening in the notebook are
  not the same moment or the same audience — showing both at once would be
  redundant, so the slide shows the result *after* the class has already
  typed it together, not simultaneously.
- **Fill-in-the-blank code, not fully-finished code, whenever possible** —
  the same "generation beats exposure" finding that applies to diagrams
  (section 2: building a concept map yourself beats only looking at a
  finished one) applies directly to code: a student typing the real syntax
  themselves, even with guardrails, retains more than watching someone else
  type it.
- **A short, plain-language explainer for any domain-specific value a
  student wouldn't otherwise recognize** (an HTTP status code, a finance
  ticker convention) is included right where the code uses it — this is
  Mayer's **pre-training principle** (section 3): name and explain an unusual
  term *before* it's needed to understand something more complex, not at the
  same time.
- **A real case study or scenario opens the section before the formal
  definition does** — the curiosity hook comes first (section 6's "Curiosity
  Sprint" placement, and the problem-posing tradition in section 7), then the
  plain-language definition, then the live-coded application — in that
  order, deliberately.
- **Real data, real domains, rotated across a series** (section 5) — a
  live-coding exercise reads as "this is what the job actually looks like,"
  not a toy example, which is itself part of the belonging/engagement
  research in section 6.

---

## Also worth knowing: accessibility

Every deck also targets **WCAG 2.2 AA**, the current W3C web-accessibility
standard (adopted October 2023) — real alt text on every image, verified
color-contrast ratios computed from the actual brand colors (not eyeballed),
and no reliance on color alone to convey meaning. This isn't a separate
initiative from everything above — a Fellow who can't parse a slide because
of a contrast or screen-reader issue isn't benefiting from any of the
pedagogy either, so it's treated as the same baseline requirement.
