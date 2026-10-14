# Industry-Domain Rotation for Demos & Code-Alongs

Used to pick realistic scenarios/datasets for `code` and `case_study` slides so a
lesson series doesn't default to the same example (e.g. generic "sales data") every
time. Tag each `code`/`case_study` slide with an optional `domain` field (see
`content_spec/SCHEMA.md`) and rotate across a series — the `new-lesson-deck` skill
checks prior decks' domains when available and picks a different one.

Six domains, in no fixed order — rotate across all six, with Professional Services
further rotating across its four sub-areas. See "Real public datasets" below for
actual, currently-accessible sources to pull real numbers from rather than inventing
fictional ones every time (fictional is fine too — see
`content_spec/SCHEMA.md`'s case-study rules — but a real dataset is more engaging
when one fits and is genuinely free to use).

The Public Sector and Non-Profit & Social Impact domains specifically are where
`pedagogy/liberatory_pedagogy.md`'s "read the world, then write it" principle
(Gutstein) is most directly usable — real data about conditions in communities
like Fellows' own, investigated and acted on, not just analyzed as a generic
exercise. Whenever a dataset touches a real community or vulnerable population
(as several below do), apply that doc's dataset checklist — name who collected
it, what's missing, whose labor produced it — in `notes`, not necessarily the
visible slide.

## Finance
- Transaction/fraud-flag datasets (mismatched category labels, duplicate charges)
- Monthly spend-by-category rollups, budget-vs-actual comparisons
- Loan/credit application fields (missing values, inconsistent formatting)
- Real dataset: SEC EDGAR public-company filings (10-Ks, 10-Qs) for real revenue/
  spend figures — see "Real public datasets" below.

## Healthcare
- Appointment scheduling / no-show rate analysis
- Patient intake form data (messy free-text fields needing cleaning)
- De-identified visit-count aggregation by department/provider (emphasize privacy:
  this is a good moment to mention PII handling even in a teaching dataset)
- Real dataset: WHO Global Health Observatory for global health indicators (life
  expectancy, disease burden, immunization rates) — see "Real public datasets" below.

## Public Sector
- 311/constituent-request datasets (category cleanup, response-time aggregation)
- Public transit on-time-performance rollups
- Grant/budget-allocation tracking across departments
- Real datasets: USAspending.gov (federal contracts/grants/budgets), NSF NCSES
  (STEM workforce & R&D funding data — a nice tie-back to the Fellows' own field),
  NASA Earthdata/Open Data Portal (climate, satellite, space-science data), UN
  data/SDG indicators (global development statistics) — all detailed below.

## Non-Profit & Social Impact
- Program-outcome tracking: did an intervention actually move the metric it was
  meant to move? (Good pairing with the **C.H.A.N.G.E.** framework's "Evaluate
  impact" step in `pedagogy/engagement_techniques.md`.)
- Donor retention/acquisition — structurally the same problem as customer
  retention/acquisition below, reframed around mission-driven relationships instead
  of transactions.
- Overhead-vs-program spend ratios: real nonprofit financial data (revenue,
  expenses, executive compensation) is genuinely public via IRS Form 990 filings —
  see "Real public datasets" below. A natural pairing with the PSA/Advocacy Sprint
  and the "Data Ethics Hashtag" technique (`pedagogy/engagement_techniques.md`):
  data about real under-resourced causes, handled carefully and factually.
- Global social-impact angle: UNHCR refugee/displacement statistics, UN SDG
  indicator data — real, current, and high-stakes enough to ground a genuinely
  engaging `case_study` hook (handle with the same care as any real-world stat
  about a vulnerable population — cite it accurately, don't editorialize on the
  slide itself, save the class discussion of implications for `notes`).

## Business Operations & Growth
- **Go-to-market (GTM) / funnel analytics**: conversion-rate-by-stage cleanup and
  aggregation (e.g. visitor → lead → qualified lead → customer), calculating
  stage-to-stage drop-off — a clean, realistic `.groupby()`/aggregation scenario.
- **Client retention & acquisition (churn)**: "why did these customers leave, and
  what pattern would have flagged it earlier?" — the classic, extremely
  well-documented teaching scenario (see the Telco Customer Churn dataset below);
  also a natural fit for set/membership-check lessons (flagging at-risk accounts
  fast) and for the **S.C.A.L.E.** decision framework (which retention approach do
  you recommend, and why?).
- **Business budgets**: budget-vs-actual variance analysis using real public-company
  spend figures (SEC EDGAR) for a legitimately real "business budget" dataset
  without needing access to anyone's private financials.
- Overlaps with Professional Services' **client systems** sub-area — cross-reference
  rather than duplicate if a lesson touches both (e.g. reconciling client IDs across
  two systems *and* analyzing their retention in the same mini-project).

## Professional Services (rotate across these four sub-areas)
- **Support analytics**: ticket volume by category, first-response-time aggregation,
  duplicate-ticket detection (a natural fit for set/dedup lessons)
- **Client systems**: client account records with inconsistent naming/IDs across two
  systems (a natural fit for join/merge and data-quality lessons — mirrors the
  Discord-style "two systems disagreed" case-study pattern)
- **Cybersecurity**: log-event deduplication, flagging repeated failed-login IDs
  (natural fit for set membership-check performance lessons)
- **Digital transformation**: before/after process-time comparisons, legacy-system
  export cleanup (messy exports with inconsistent types — good for data-cleaning
  lessons)

## Real public datasets

Concrete, currently-accessible sources worth starting from instead of inventing a
fictional dataset every time. Always double-check current license/access terms
before use (some require a free account; a few Kaggle datasets have specific reuse
terms) — this list is a starting point for the research subagent, not a guarantee
of unrestricted use.

| Source | What's in it | Good for | Access notes |
|---|---|---|---|
| [NSF NCSES — Explore Data](https://ncses.nsf.gov/explore-data) | STEM workforce size/demographics, R&D funding, science & engineering education stats | Public Sector; a nice tie-back to Fellows' own field ("here's the real data on who's in tech") | Free, no login |
| [NASA Open Data Portal](https://data.nasa.gov/) / [NASA Earthdata](https://www.earthdata.nasa.gov/) | Tens of thousands of datasets: climate, Earth observation, space science, exoplanets | Public Sector; genuinely awe-inspiring `case_study` hook material | Free; Earthdata login required for some downloads |
| [UNdata](https://data.un.org/) / [UN SDG Indicators Database](https://unstats.un.org/sdgs/dataportal/database) | Global development statistics across all 17 Sustainable Development Goals | Public Sector, Non-Profit & Social Impact | Free, no login |
| [UNHCR Refugee Data Finder](https://www.unhcr.org/refugee-statistics/) | 70+ years of global forced-displacement statistics, disaggregated by country/year/population type | Non-Profit & Social Impact — high-stakes, real, current | Free, no login |
| [ProPublica Nonprofit Explorer](https://projects.propublica.org/nonprofits/) | IRS Form 990 data for 1.8M+ US nonprofits — revenue, expenses, executive comp, program spend | Non-Profit & Social Impact | Free API + bulk download |
| [USAspending.gov](https://www.usaspending.gov/) | Federal contracts, grants, loans — searchable/downloadable by agency, state, fiscal year | Public Sector, Business Operations (real "budget" data) | Free, no login |
| [SEC EDGAR](https://www.sec.gov/edgar) | Public company financial filings (10-K, 10-Q) — real revenue/spend/budget figures | Finance, Business Operations | Free, no login |
| [WHO Global Health Observatory](https://www.who.int/data/gho) | Global health indicators — life expectancy, disease burden, immunization | Healthcare | Free, no login |
| [Kaggle — Telco Customer Churn](https://www.kaggle.com/datasets/blastchar/telco-customer-churn) | 7,043-row IBM sample dataset, the standard teaching dataset for churn/retention analysis | Business Operations & Growth | Free Kaggle account |
| [Kaggle — Marketing Funnel (Olist)](https://www.kaggle.com/datasets/olistbr/marketing-funnel-olist) and similar funnel-analysis datasets | Realistic multi-stage marketing/sales funnel data for conversion-rate analysis | Business Operations & Growth (GTM) | Free Kaggle account |
| [Our World in Data](https://ourworldindata.org/) | Curated, sourced global statistics across nearly every topic, with downloadable CSVs | Any domain — good for a quick, credible `case_study` stat | Free, no login |
| [data.gov](https://data.gov/) | US federal open-data clearinghouse across every agency | Public Sector catch-all if nothing above fits | Free, no login |

## "Choose your own path" demos

For a lesson that supports it, offer 2-4 domain options via a `check_understanding`
slide in `choose_path` mode immediately before the `code` slide (see
`content_spec/SCHEMA.md`), then have the instructor live-adapt using guidance written
into that `code` slide's `notes` (e.g. "if the class picked Healthcare, swap the
column name to `visit_date`; the cleaning logic is identical"). Don't do this for
every lesson — it works best when the underlying code is genuinely domain-agnostic
(the same cleaning/aggregation pattern regardless of which dataset), so switching
domains live doesn't require different code, just different column names/framing.
