# Instructor Lecture Notes: module-2-exploratory-data-analysis

---

**Lesson 1**

# Instructor Prep: Descriptive Statistics & Reading Distributions
*Module 2: Exploratory Data Analysis*

## Lecture Time Estimate
- Opening: ~55 min
- **Total: ~55 min**

## Prerequisites
- Earlier module: Functions, real Python fluency

## Learning Objectives
- Define mean, median, mode, standard deviation, and quartiles, and explain when each applies
- Read a five-number summary and a histogram to describe a distribution's shape and skew

## Project Connection
*Say this out loud at some point in the lecture - it's the answer to "why does this matter for my project?"*

The project's Part 6 and Part 7 both require picking the statistic that honestly fits a variable's actual shape, then explaining what a large spread implies about a real business metric — not reciting a textbook definition. Today builds the vocabulary and reading skill that choice depends on, before any real data exists to apply it to.

## Section Flow (Why Each Transition Is There)
- **Before We Start → One Quick Check**: A fast recall check on last module's Python, before today's new vocabulary starts.
- **Still Solid → New Vocabulary**: Today's words describe a whole dataset at once, not a single value.
- **Three Measures → A Worked Example**: 10 real shifts of tips — compute each measure by hand before any tool does it for you.
- **Typical Value, Settled → Now, Spread**: Knowing what's typical doesn't tell you how spread out the data actually is.
- **Numbers Alone → Now, the Shape**: The five-number summary hints at shape — a histogram shows it directly.
- **Reading Shape → Verify, Don't Just Trust**: The same habit from Module 1's debugging lesson applies to a chart description, not just code.

## Top Engagement Strategies Used
- **Poll** — Warm-Up: Function Trace: Quick multiple-choice check - reveal results live before moving on.
- **Quick-Fire Game** — Computing the Mean: Quick-fire, leaderboard-style prompt - keep the pace brisk; celebrate participation, not just correctness.
- **Quick-Fire Game** — Computing the Median: Quick-fire, leaderboard-style prompt - keep the pace brisk; celebrate participation, not just correctness.
- **Turn and Talk** — Evaluating a Mean-Based Claim: Turn and talk: pairs discuss 1-2 minutes, then a few share out.
- **Quick-Fire Game** — Spotting the Outlier in a Summary: Quick-fire, leaderboard-style prompt - keep the pace brisk; celebrate participation, not just correctness.
- **Quick-Fire Game** — Skew Direction and the Mean: Quick-fire, leaderboard-style prompt - keep the pace brisk; celebrate participation, not just correctness.
- **Turn and Talk** — Would You Trust That Description?: Turn and talk: pairs discuss 1-2 minutes, then a few share out.


---

**Lesson 2**

# Instructor Prep: Real Pandas Fundamentals I: Inspect & Filter
*Module 2: Exploratory Data Analysis*

## Lecture Time Estimate
- Opening: ~62 min
  - Code-along: ~24 min
- **Total: ~62 min**
- **Total code-along time: ~24 min**

## Code-Along Map (Where to Open the Notebook)
- Slide 8: **Loading the Real Data** — code-along, have Fellows open their notebook
- Slide 11: **Checking dtypes** — code-along, have Fellows open their notebook
- Slide 14: **Checking for Missing Values** — code-along, have Fellows open their notebook
- Slide 16: **Filtering on One Condition** — code-along, have Fellows open their notebook
- Slide 19: **Combining Two Conditions** — code-along, have Fellows open their notebook
- Slide 22: **Sorting by a Column** — code-along, have Fellows open their notebook

## Prerequisites
- Yesterday: Mean, median, mode, spread, distribution shape

## Learning Objectives
- Load a real CSV and inspect its shape, dtypes, and missing values
- Filter rows with one condition and with combined conditions

## Project Connection
*Say this out loud at some point in the lecture - it's the answer to "why does this matter for my project?"*

The project's own starter notebook gives almost no pandas code — every inspection and filter is something you write yourself. Today is the first real rep of the exact syntax that project assumes you already have.

## Section Flow (Why Each Transition Is There)
- **Yesterday's Vocabulary → One Quick Check**: A fast recall check on yesterday's terms, before today's real syntax starts.
- **Still Solid → Meet pandas**: A DataFrame is a real Python object — rows and named, typed columns, not just numbers on a page.
- **The Idea → Code Along: Loading Real Data**: 344 real penguins, 3 species, real missing values — loaded from an actual CSV.
- **Shape, Known → Code Along: Checking dtypes**: What kind of data is actually in each column?
- **dtypes, Checked → Code Along: Missing Values**: The last real inspection step, before anything gets filtered.
- **Now You Know What's In It → Code Along: Filtering**: Keeping only the rows that match a real condition.
- **One Condition, Solid → Code Along: Combining Conditions**: Narrowing further than either condition alone.
- **Filtering, Solid → Code Along: Sorting**: Ranking a filtered result by a real column.

## Top Engagement Strategies Used
- **Poll** — Warm-Up: Mean vs. Median: Quick multiple-choice check - reveal results live before moving on.
- **Quick-Fire Game** — What .shape Returns: Quick-fire, leaderboard-style prompt - keep the pace brisk; celebrate participation, not just correctness.
- **Quick-Fire Game** — A Suspicious dtype: Quick-fire, leaderboard-style prompt - keep the pace brisk; celebrate participation, not just correctness.
- **Quick-Fire Game** — Predicting the Filtered Count: Quick-fire, leaderboard-style prompt - keep the pace brisk; celebrate participation, not just correctness.
- **Quick-Fire Game** — The Missing-Parentheses Error: Quick-fire, leaderboard-style prompt - keep the pace brisk; celebrate participation, not just correctness.
- **Would You Rather** — Is Inspection Actually Necessary?: Force a binary choice, then ask Fellows to justify it out loud - surfaces reasoning, not just the pick.


---

**Lesson 3**

# Instructor Prep: Real Pandas Fundamentals II: Group & Create Columns
*Module 2: Exploratory Data Analysis*

## Lecture Time Estimate
- Opening: ~57 min
  - Code-along: ~16 min
- **Total: ~57 min**
- **Total code-along time: ~16 min**

## Code-Along Map (Where to Open the Notebook)
- Slide 8: **Reloading Yesterday's Data** — code-along, have Fellows open their notebook
- Slide 10: **Grouping by Species** — code-along, have Fellows open their notebook
- Slide 13: **Multiple Summaries With .agg()** — code-along, have Fellows open their notebook
- Slide 19: **Deriving bill_ratio** — code-along, have Fellows open their notebook

## Prerequisites
- Yesterday: Inspecting a DataFrame, filtering on one and combined conditions

## Learning Objectives
- Summarize a numeric column by category with .groupby()
- Create a new derived column, and avoid the SettingWithCopyWarning gotcha

## Project Connection
*Say this out loud at some point in the lecture - it's the answer to "why does this matter for my project?"*

Both remaining pandas fundamentals the project assumes: Comparing a variable across categories, and deriving a new column instead of recomputing the same thing inline. Today closes the pandas gap entirely — every project Part from here on assumes this is solid.

## Section Flow (Why Each Transition Is There)
- **Yesterday's Syntax → One Quick Check**: A fast recall check on yesterday's filtering, before today's new syntax starts.
- **Still Solid → Grouping**: Comparing a number across categories, without scrolling through every row by hand.
- **New Session → Code Along: Picking Up From Yesterday**: A fresh notebook needs the same data reloaded before anything else can run.
- **The Idea → Code Along: Groupby**: Average body mass, split by species.
- **One Summary → Code Along: Multiple Summaries at Once**: Count, mean, and median, all in a single line.
- **Grouping, Solid → Creating a New Column**: Deriving a value instead of recomputing the same formula over and over.
- **The Idea → Code Along: A New Column**: One new column, computed from two existing ones.

## Top Engagement Strategies Used
- **Poll** — Warm-Up: Filter Syntax: Quick multiple-choice check - reveal results live before moving on.
- **Quick-Fire Game** — Predicting the Group Winner: Quick-fire, leaderboard-style prompt - keep the pace brisk; celebrate participation, not just correctness.
- **Would You Rather** — .agg() or Separate Calls?: Force a binary choice, then ask Fellows to justify it out loud - surfaces reasoning, not just the pick.
- **Quick-Fire Game** — Fixing SettingWithCopyWarning: Quick-fire, leaderboard-style prompt - keep the pace brisk; celebrate participation, not just correctness.
- **Turn and Talk** — Do Warnings Matter If Code Still Runs?: Turn and talk: pairs discuss 1-2 minutes, then a few share out.
- **Turn and Talk** — Interview Framing: Explaining groupby: Turn and talk: pairs discuss 1-2 minutes, then a few share out.


---

**Lesson 4**

# Instructor Prep: Exploratory vs. Explanatory: Two Kinds of Charts
*Module 2: Exploratory Data Analysis*

## Lecture Time Estimate
- Opening: ~52 min
  - Code-along: ~4 min
- **Total: ~52 min**
- **Total code-along time: ~4 min**

## Code-Along Map (Where to Open the Notebook)
- Slide 15: **Depth vs. Magnitude** — code-along, have Fellows open their notebook

## Prerequisites
- Earlier this module: Real pandas — inspect, filter, group, derive

## Learning Objectives
- Explain the difference between an exploratory chart and an explanatory chart
- Choose the right chart type by naming what's actually being compared

## Project Connection
*Say this out loud at some point in the lecture - it's the answer to "why does this matter for my project?"*

The project's own notebook IS exploratory work; the rewritten README/memo ARE explanatory work — the same split this lecture names explicitly. And every chart in both places needs a real reason for its type, not a histogram by default — the single most-flagged mistake on this project's own rubric.

## Section Flow (Why Each Transition Is There)
- **Pandas, Solid → One Quick Check**: A fast recall check before today's new framing starts.
- **Still Solid → Two Kinds of Charts**: Every chart from here forward is either for you, or for a stakeholder — never both at once.
- **Two Modes, Named → Picking the Right Chart Type**: A real decision framework, not a gallery of chart examples to memorize.
- **The Framework → Code Along: A Real Scatterplot**: Two numeric variables, real earthquake data — the framework's third branch, in code.

## Top Engagement Strategies Used
- **Poll** — Warm-Up: The Copy Gotcha: Quick multiple-choice check - reveal results live before moving on.
- **Turn and Talk** — Applying the Split to the Project: Turn and talk: pairs discuss 1-2 minutes, then a few share out.
- **Quick-Fire Game** — Skipping the Polish Step: Quick-fire, leaderboard-style prompt - keep the pace brisk; celebrate participation, not just correctness.
- **Quick-Fire Game** — Applying the Framework: Quick-fire, leaderboard-style prompt - keep the pace brisk; celebrate participation, not just correctness.
- **Turn and Talk** — Would You Trust That Chart Description?: Turn and talk: pairs discuss 1-2 minutes, then a few share out.
- **Whiteboard / Collaborative Board** — Turning This Chart Explanatory: Collaborative board (Padlet/Jamboard/physical) - everyone posts at once, then scan together for patterns.
- **Turn and Talk** — Interview Framing: Chart-Type Decisions: Turn and talk: pairs discuss 1-2 minutes, then a few share out.
- **Quick-Fire Game** — One More Framework Rep: Quick-fire, leaderboard-style prompt - keep the pace brisk; celebrate participation, not just correctness.


---

**Lesson 5**

# Instructor Prep: Chart Best Practices
*Module 2: Exploratory Data Analysis*

## Lecture Time Estimate
- Opening: ~52 min
  - Code-along: ~4 min
- **Total: ~52 min**
- **Total code-along time: ~4 min**

## Code-Along Map (Where to Open the Notebook)
- Slide 11: **A Boxplot, With showfliers=False** — code-along, have Fellows open their notebook

## Prerequisites
- Yesterday: The chart-type decision framework

## Learning Objectives
- Spot a misleading chart: A truncated axis, or hidden outliers
- Apply real labeling and accessibility practices to any chart

## Project Connection
*Say this out loud at some point in the lecture - it's the answer to "why does this matter for my project?"*

The project's own Part 5 AI-critique exercise caught a real flaw in a reference solution: A boxplot with showfliers=False that hid the exact outliers Part 3 had already found. The right chart type isn't enough — today's practices are what make a chart honest, not just correctly categorized.

## Section Flow (Why Each Transition Is There)
- **Chart Types, Solid → One Quick Check**: A fast recall check before today's new practices start.
- **Still Solid → The Misleading Y-Axis**: The right chart type, drawn dishonestly — real data, real numbers, a real distortion.
- **One Kind of Lie → Code Along: A Second Kind, Hidden Outliers**: A real flaw, actually caught in this project's own reference solution.
- **Two Real Distortions → Labeling & Accessibility**: The baseline practices every chart needs, misleading or not.

## Top Engagement Strategies Used
- **Poll** — Warm-Up: The Framework: Quick multiple-choice check - reveal results live before moving on.
- **Quick-Fire Game** — Spotting the Truncated Axis: Quick-fire, leaderboard-style prompt - keep the pace brisk; celebrate participation, not just correctness.
- **Whiteboard / Collaborative Board** — Is showfliers=False Ever Fine?: Collaborative board (Padlet/Jamboard/physical) - everyone posts at once, then scan together for patterns.
- **Quick-Fire Game** — Diagnosing a Suspiciously Tidy Chart: Quick-fire, leaderboard-style prompt - keep the pace brisk; celebrate participation, not just correctness.
- **Turn and Talk** — Interview Framing: Chart Honesty: Turn and talk: pairs discuss 1-2 minutes, then a few share out.
- **Would You Rather** — Catching It Yourself vs. AI Catching It: Force a binary choice, then ask Fellows to justify it out loud - surfaces reasoning, not just the pick.


---

**Lesson 6**

# Instructor Prep: Recall & Practice: Stats, Pandas, Charts
*Module 2: Exploratory Data Analysis*

## Lecture Time Estimate
- Opening: ~58 min
- **Total: ~58 min**

## Prerequisites
- This week: Descriptive stats, real pandas, chart types, chart practices

## Learning Objectives
- Retrieve descriptive statistics, real pandas syntax, and chart practices, unprompted
- Apply all three together under quick-fire time pressure

## Project Connection
*Say this out loud at some point in the lecture - it's the answer to "why does this matter for my project?"*

Every skill this week is something the project grades directly — today tests whether each one is still solid without a study cue, before real cleaning work starts next class.

## Section Flow (Why Each Transition Is There)
- **Five Days Deep → Round 1: Descriptive Statistics**: Mean, median, mode, spread, shape — the very first day this week.
- **Round 1 Done → Round 2: Inspecting & Filtering**: Real pandas syntax — an earlier lesson's own material.
- **Round 2 Done → Round 3: Grouping & Deriving**: The last pandas fundamentals — an earlier lesson's own two moves.
- **Round 3 Done → Round 4: Exploratory vs. Explanatory**: Two chart modes, and the decision framework — an earlier lesson's own material.
- **Round 4 Done → Round 5: Chart Best Practices**: How a real chart can still mislead — an earlier lesson's own material.

## Top Engagement Strategies Used
- **Quick-Fire Game** — Round 1: Reading the Mean-Median Gap: Quick-fire, leaderboard-style prompt - keep the pace brisk; celebrate participation, not just correctness.
- **Poll** — Round 1: The Five-Number Summary: Quick multiple-choice check - reveal results live before moving on.
- **Quick-Fire Game** — Round 2: A Suspicious dtype: Quick-fire, leaderboard-style prompt - keep the pace brisk; celebrate participation, not just correctness.
- **Poll** — Round 2: Filter Syntax: Quick multiple-choice check - reveal results live before moving on.
- **Quick-Fire Game** — Round 3: What groupby Returns: Quick-fire, leaderboard-style prompt - keep the pace brisk; celebrate participation, not just correctness.
- **Quick-Fire Game** — Round 3: The Copy Gotcha: Quick-fire, leaderboard-style prompt - keep the pace brisk; celebrate participation, not just correctness.
- **Poll** — Round 4: The Notebook's Own Mode: Quick multiple-choice check - reveal results live before moving on.
- **Quick-Fire Game** — Round 4: The Decision Framework: Quick-fire, leaderboard-style prompt - keep the pace brisk; celebrate participation, not just correctness.
- **Quick-Fire Game** — Round 5: The Truncated Axis: Quick-fire, leaderboard-style prompt - keep the pace brisk; celebrate participation, not just correctness.
- **Turn and Talk** — Round 5: Hidden Outliers: Turn and talk: pairs discuss 1-2 minutes, then a few share out.
- **Turn and Talk** — Interview Framing: Chart Honesty: Turn and talk: pairs discuss 1-2 minutes, then a few share out.
- **Would You Rather** — Your Own Study Plan: Force a binary choice, then ask Fellows to justify it out loud - surfaces reasoning, not just the pick.


---

**Lesson 7**

# Instructor Prep: Missing Data: Drop, Fill, or Flag
*Module 2: Exploratory Data Analysis*

## Lecture Time Estimate
- Opening: ~50 min
  - Code-along: ~16 min
- **Total: ~50 min**
- **Total code-along time: ~16 min**

## Code-Along Map (Where to Open the Notebook)
- Slide 8: **Reloading the Data** — code-along, have Fellows open their notebook
- Slide 11: **Dropping the Genuinely Empty Rows** — code-along, have Fellows open their notebook
- Slide 16: **Flagging Instead of Guessing** — code-along, have Fellows open their notebook
- Slide 18: **Four Fill Techniques, One Missing Value** — code-along, have Fellows open their notebook

## Prerequisites
- Earlier this week: Real pandas — inspect, filter, group, derive

## Learning Objectives
- Decide whether to drop, fill, or flag missing data, and justify the choice
- Apply mean, median, mode, and forward-fill, and explain when each fits

## Project Connection
*Say this out loud at some point in the lecture - it's the answer to "why does this matter for my project?"*

Part 2 requires a real, justified missing-value decision — "I filled nulls with the mean" isn't wrong by itself, but with no reasoning tied to what the column means, it reads as a reflex, not a decision. Today's the first time this curriculum has taught missing- value handling at all.

## Section Flow (Why Each Transition Is There)
- **Real Pandas, Solid → One Quick Check**: A fast recall check before today's genuinely new material starts.
- **Still Solid → Real Data Has Real Gaps**: Every missing value is a real decision — never taught before this exact moment.
- **The Framework → Code Along: Real Missing Values**: 344 real penguins — some rows are missing everything, some are missing one thing.
- **The Clearest Case → Code Along: Dropping the Empty Rows**: A justified drop, said out loud before the code runs.
- **9 Rows Left → Fill or Flag, for a Category**: Real measurements exist — sex just wasn't recorded. A genuinely different case from the drop.
- **The Reasoning → Code Along: Flagging Instead of Guessing**: A new column, marking the gap instead of filling it.
- **One Category, Flagged → Code Along: Four Fill Techniques**: A small worked example — the same missing spot, four different real answers.

## Top Engagement Strategies Used
- **Poll** — Warm-Up: Counting Missing Values: Quick multiple-choice check - reveal results live before moving on.
- **Quick-Fire Game** — What's Left After the Drop: Quick-fire, leaderboard-style prompt - keep the pace brisk; celebrate participation, not just correctness.
- **Quick-Fire Game** — Mean-Filling a Skewed Column: Quick-fire, leaderboard-style prompt - keep the pace brisk; celebrate participation, not just correctness.
- **Turn and Talk** — Is "I Dropped the Nulls" Enough?: Turn and talk: pairs discuss 1-2 minutes, then a few share out.


---

**Lesson 8**

# Instructor Prep: Writing a Real Cleaning Function
*Module 2: Exploratory Data Analysis*

## Lecture Time Estimate
- Opening: ~52 min
  - Code-along: ~8 min
- **Total: ~52 min**
- **Total code-along time: ~8 min**

## Code-Along Map (Where to Open the Notebook)
- Slide 8: **Fixing It Inline, Twice** — code-along, have Fellows open their notebook
- Slide 11: **One Real Function, Called Twice** — code-along, have Fellows open their notebook

## Prerequisites
- Earlier module: Writing real functions
- Yesterday: The drop, fill, or flag framework

## Learning Objectives
- Write a reusable cleaning function instead of repeating inline fixes
- Tell a genuinely reusable function apart from a renamed one-off script

## Project Connection
*Say this out loud at some point in the lecture - it's the answer to "why does this matter for my project?"*

Part 2 requires at least one real, reusable cleaning function — not copy-pasted inline fixes. This project's own rubric names copy- pasting the same fix 2-3 times as the fastest tell that cleaning was done ad hoc rather than deliberately.

## Section Flow (Why Each Transition Is There)
- **Missing Data, Solid → One Quick Check**: A fast recall check before today's new material starts.
- **Still Solid → A Real Messy Column**: Raw timestamp strings — not usable for sorting or filtering by date, yet.
- **The Problem → Code Along: The Wrong Way**: Fixing it inline, twice — watch what happens the second time.
- **The Real Cost → Code Along: One Real Function**: The same transformation, written once, called twice.

## Top Engagement Strategies Used
- **Poll** — Warm-Up: A Suspicious dtype: Quick multiple-choice check - reveal results live before moving on.
- **Turn and Talk** — The Real Cost of Copy-Pasting: Turn and talk: pairs discuss 1-2 minutes, then a few share out.
- **Quick-Fire Game** — Where a Fix Actually Lives: Quick-fire, leaderboard-style prompt - keep the pace brisk; celebrate participation, not just correctness.
- **Quick-Fire Game** — One Call Isn't Proof: Quick-fire, leaderboard-style prompt - keep the pace brisk; celebrate participation, not just correctness.
- **Whiteboard / Collaborative Board** — Is This Actually Reusable?: Collaborative board (Padlet/Jamboard/physical) - everyone posts at once, then scan together for patterns.
- **Turn and Talk** — Interview Framing: When to Extract a Function: Turn and talk: pairs discuss 1-2 minutes, then a few share out.
- **Would You Rather** — Write General First, or Extract Later?: Force a binary choice, then ask Fellows to justify it out loud - surfaces reasoning, not just the pick.
- **Quick-Fire Game** — Why Take a Parameter at All: Quick-fire, leaderboard-style prompt - keep the pace brisk; celebrate participation, not just correctness.


---

**Lesson 9**

# Instructor Prep: Mining a Pattern, With a Peer
*Module 2: Exploratory Data Analysis*

## Lecture Time Estimate
- Opening: ~50 min
  - Code-along: ~12 min
- **Total: ~50 min**
- **Total code-along time: ~12 min**

## Code-Along Map (Where to Open the Notebook)
- Slide 8: **Segmenting by Two Categories at Once** — code-along, have Fellows open their notebook
- Slide 13: **Island Looks Like It Predicts Mass** — code-along, have Fellows open their notebook
- Slide 14: **Which Species Live on Which Island?** — code-along, have Fellows open their notebook

## Prerequisites
- Earlier this module: Grouping, deriving, and reading distribution shape

## Learning Objectives
- Mine a real dataset for a non-obvious pattern worth escalating to a stakeholder
- Judge whether mean or median more honestly represents it

## Project Connection
*Say this out loud at some point in the lecture - it's the answer to "why does this matter for my project?"*

Part 4 requires a genuinely non-obvious finding, backed by whichever statistic actually fits the variable's skew — not a trivial or expected result. Today's the first real rep, with a partner, before the project asks for it independently.

## Section Flow (Why Each Transition Is There)
- **Cleaning, Solid → One Quick Check**: A fast recall check before today's new material starts.
- **Still Solid → What Makes a Pattern Non-Obvious?**: Not just any true statement about the data — something a reader wouldn't have guessed.
- **The Bar → Code Along: Segment, Then Compare**: Modeling the real process, live, before working with a partner.
- **One Real Pattern → Code Along: A Pattern That Isn't Real**: Not every real-looking gap survives a closer look.
- **One Pattern, Found → Your Turn, With a Partner**: A second real pattern is waiting in the same dataset.

## Top Engagement Strategies Used
- **Poll** — Warm-Up: Proven Reuse: Quick multiple-choice check - reveal results live before moving on.
- **Quick-Fire Game** — One-Off or Real Pattern?: Quick-fire, leaderboard-style prompt - keep the pace brisk; celebrate participation, not just correctness.
- **Would You Rather** — Is Median Always Safer?: Force a binary choice, then ask Fellows to justify it out loud - surfaces reasoning, not just the pick.
- **Quick-Fire Game** — A Pattern That's Really a Confound: Quick-fire, leaderboard-style prompt - keep the pace brisk; celebrate participation, not just correctness.
- **Turn and Talk** — Interview Framing: Finding a Pattern Cold: Turn and talk: pairs discuss 1-2 minutes, then a few share out.
- **Would You Rather** — Dramatic or Real?: Force a binary choice, then ask Fellows to justify it out loud - surfaces reasoning, not just the pick.


---

**Lesson 10**

# Instructor Prep: Interrogating Your Data: Clarifying Questions
*Module 2: Exploratory Data Analysis*

## Lecture Time Estimate
- Opening: ~52 min
  - Code-along: ~8 min
- **Total: ~52 min**
- **Total code-along time: ~8 min**

## Code-Along Map (Where to Open the Notebook)
- Slide 11: **How Many Penguins, Per Island?** — code-along, have Fellows open their notebook
- Slide 14: **Are the Missing Values Spread Evenly?** — code-along, have Fellows open their notebook

## Prerequisites
- Yesterday: Mining a real, checked pattern

## Learning Objectives
- Evaluate a dataset's collection process before trusting a pattern found in it
- Pose specific, checkable clarifying questions — not generic ones

## Project Connection
*Say this out loud at some point in the lecture - it's the answer to "why does this matter for my project?"*

The memo requires at least 2 specific, checkable clarifying questions about the data's origin, completeness, or bias — a real data steward should be able to answer each with a concrete fact, not a shrug. "Is this data accurate?" is exactly the generic question this project's own rubric flags as too vague to count.

## Section Flow (Why Each Transition Is There)
- **Pattern Mining, Solid → One Quick Check**: A fast recall check before today's new material starts.
- **Still Solid → A Pattern Isn't the Same as Trusted Data**: Checking a pattern against confounds is one thing — questioning where the data came from is another.
- **The Checklist → Code Along: A Real Sampling Question**: The 3 islands weren't sampled equally — is that itself worth asking about?
- **One Real Gap Found → Code Along: Missing Values, By Species**: Applying the Completeness row to a different real number, same dataset.
- **One Good Example → Peer Review, With a Partner**: Trading questions with a partner — checkable, or still too generic?

## Top Engagement Strategies Used
- **Poll** — Warm-Up: The Island Confound: Quick multiple-choice check - reveal results live before moving on.
- **Poll** — Sorting a Real Fact Into the Checklist: Quick multiple-choice check - reveal results live before moving on.
- **Whiteboard / Collaborative Board** — Writing Your Own Checkable Question: Collaborative board (Padlet/Jamboard/physical) - everyone posts at once, then scan together for patterns.
- **Turn and Talk** — Reading an Uneven Gap: Turn and talk: pairs discuss 1-2 minutes, then a few share out.
- **Quick-Fire Game** — Spotting the Checkable Question: Quick-fire, leaderboard-style prompt - keep the pace brisk; celebrate participation, not just correctness.
- **Turn and Talk** — Interview Framing: Questioning a Dataset: Turn and talk: pairs discuss 1-2 minutes, then a few share out.


---

**Lesson 11**

# Instructor Prep: Evaluating AI on Charts, Both Directions
*Module 2: Exploratory Data Analysis*

## Lecture Time Estimate
- Opening: ~54 min
  - Code-along: ~8 min
- **Total: ~54 min**
- **Total code-along time: ~8 min**

## Code-Along Map (Where to Open the Notebook)
- Slide 8: **Depth: Mean vs. Median** — code-along, have Fellows open their notebook
- Slide 13: **Magnitude: Mean vs. Median** — code-along, have Fellows open their notebook

## Prerequisites
- Earlier this module: Reading distribution shape, the chart-type decision framework, checkable questions

## Learning Objectives
- Catch an AI's subtle misreading of a real chart's shape
- Catch an AI's own flawed chart-type suggestion

## Project Connection
*Say this out loud at some point in the lecture - it's the answer to "why does this matter for my project?"*

Parts 5 and 5b require both AI critiques done for real, not just described — this is the first live rep of exactly what those two parts ask for, once each, before doing it solo.

## Section Flow (Why Each Transition Is There)
- **Checkable Questions, Solid → One Quick Check**: A fast recall check before today's new material starts.
- **Still Solid → Two Directions, One Skill**: An AI can misread a chart, or suggest the wrong one — both need the same real check.
- **Direction 1 → Code Along: Building the Real Chart**: Building the real chart first, before seeing what an AI said about it.
- **One Misread, Caught → Code Along: Was Everything Wrong?**: Checking a second claim before assuming the whole chat was unreliable.
- **Direction 1, Caught → Direction 2: Flip It**: Now the AI isn't describing a chart — it's suggesting one.

## Top Engagement Strategies Used
- **Poll** — Warm-Up: Checkable, Again: Quick multiple-choice check - reveal results live before moving on.
- **Quick-Fire Game** — Catching the AI's Misread: Quick-fire, leaderboard-style prompt - keep the pace brisk; celebrate participation, not just correctness.
- **Poll** — A Correct AI Read, This Time: Quick multiple-choice check - reveal results live before moving on.
- **Quick-Fire Game** — Catching the AI's Suggestion: Quick-fire, leaderboard-style prompt - keep the pace brisk; celebrate participation, not just correctness.
- **Whiteboard / Collaborative Board** — Writing the Real Recommendation: Collaborative board (Padlet/Jamboard/physical) - everyone posts at once, then scan together for patterns.
- **Would You Rather** — Obvious or Subtle?: Force a binary choice, then ask Fellows to justify it out loud - surfaces reasoning, not just the pick.
- **Turn and Talk** — Interview Framing: Verifying an AI's Chart Work: Turn and talk: pairs discuss 1-2 minutes, then a few share out.


---

**Lesson 12**

# Instructor Prep: Communicating to a Stakeholder: README & Memo
*Module 2: Exploratory Data Analysis*

## Lecture Time Estimate
- Opening: ~58 min
  - Code-along: ~12 min
- **Total: ~58 min**
- **Total code-along time: ~12 min**

## Code-Along Map (Where to Open the Notebook)
- Slide 8: **Verify the Number, One More Time** — code-along, have Fellows open their notebook
- Slide 13: **Markdown Image Syntax** — code-along, have Fellows open their notebook
- Slide 18: **Memo Skeleton** — code-along, have Fellows open their notebook

## Prerequisites
- Earlier this module: Exploratory vs. explanatory framing, checkable clarifying questions

## Learning Objectives
- Rewrite a project README as a real stakeholder-facing landing page
- Write a data-quality memo a non-technical reader can act on

## Project Connection
*Say this out loud at some point in the lecture - it's the answer to "why does this matter for my project?"*

The rewritten README.md (scenario, data overview, statistical summary, real embedded chart images, takeaways) and memo.md (plain- language answer plus 2 checkable questions) are graded deliverables in their own right, not just a notebook wrapper — today's the first live rep of writing both.

## Section Flow (Why Each Transition Is There)
- **AI Critique, Solid → One Quick Check**: A fast recall check before today's new material starts.
- **Still Solid → Two Kinds of Writing**: The notebook was written for yourself. What comes next is written for someone else.
- **Two Kinds of Writing → Code Along: Verify Before You Write It Down**: Before a number goes in a stakeholder document, check it one more time.
- **The 5 Sections → Code Along: Embedding a Real Image**: The one syntax nothing upstream has covered yet.
- **The README, Rewritten → The Memo Is a Different Deliverable**: A README answers "what did you find?" — the memo answers "can I trust it?"
- **The Memo's Job → Code Along: The Memo Skeleton**: The same 4 pieces, every time.

## Top Engagement Strategies Used
- **Poll** — Warm-Up: Verify Every Claim: Quick multiple-choice check - reveal results live before moving on.
- **Poll** — Spotting a Missing Section: Quick multiple-choice check - reveal results live before moving on.
- **Quick-Fire Game** — Describing vs. Embedding: Quick-fire, leaderboard-style prompt - keep the pace brisk; celebrate participation, not just correctness.
- **Would You Rather** — README or Memo, First?: Force a binary choice, then ask Fellows to justify it out loud - surfaces reasoning, not just the pick.
- **Whiteboard / Collaborative Board** — Writing the Trust-Connecting Question: Collaborative board (Padlet/Jamboard/physical) - everyone posts at once, then scan together for patterns.
- **Poll** — One Last Distinction: Quick multiple-choice check - reveal results live before moving on.
- **Turn and Talk** — Interview Framing: Explaining to a Non-Technical Reader: Turn and talk: pairs discuss 1-2 minutes, then a few share out.


---

**Lesson 14**

# Instructor Prep: Final Practice Gauntlet: Everything, Plus Previews: Lambda & Plotly
*Module 2: Exploratory Data Analysis*

## Lecture Time Estimate
- Opening: ~60 min
- **Total: ~60 min**

## Code-Along Map (Where to Open the Notebook)
- Slide 19: **Sorting Species by Mean Mass, One Line** — watch-only demo, not a code-along

## Prerequisites
- This module: Every lesson, Days 1-13

## Learning Objectives
- Retrieve every skill from this module, unprompted, under quick-fire pressure
- Recognize lambda syntax and what a dashboard adds beyond a static chart

## Project Connection
*Say this out loud at some point in the lecture - it's the answer to "why does this matter for my project?"*

Every skill retrieved today is a rubric line the sprint grades directly, starting next class — today confirms each one is still solid without a study cue.

## Section Flow (Why Each Transition Is There)
- **Thirteen Days Deep → Round 1: Stats, Pandas, Charts**: The first half of the module, condensed — a lighter round since the earlier recall day already covered this in depth.
- **Round 1 Done → Round 2: Missing Data & Cleaning**: Drop, fill, or flag — and a real reusable function.
- **Round 2 Done → Round 3: Pattern-Mining**: A real pattern, checked against a confound.
- **Round 3 Done → Round 4: Clarifying Questions**: Checkable, not generic.
- **Round 4 Done → Round 5: AI Critique**: Verify every claim — some hold up, some don't.
- **Round 5 Done → Round 6: Stakeholder Writing**: A README and a memo — two different jobs.
- **Six Rounds Done → Two Quick Previews**: Two tools from later in the program — a taste, not a full lesson.

## Top Engagement Strategies Used
- **Poll** — Round 1: Reading Skew: Quick multiple-choice check - reveal results live before moving on.
- **Quick-Fire Game** — Round 1: The Decision Framework: Quick-fire, leaderboard-style prompt - keep the pace brisk; celebrate participation, not just correctness.
- **Quick-Fire Game** — Round 2: Drop, Fill, or Flag: Quick-fire, leaderboard-style prompt - keep the pace brisk; celebrate participation, not just correctness.
- **Poll** — Round 2: Proven Reuse: Quick multiple-choice check - reveal results live before moving on.
- **Quick-Fire Game** — Round 3: The Island Confound: Quick-fire, leaderboard-style prompt - keep the pace brisk; celebrate participation, not just correctness.
- **Quick-Fire Game** — Round 4: Checkable vs. Generic: Quick-fire, leaderboard-style prompt - keep the pace brisk; celebrate participation, not just correctness.
- **Poll** — Round 5: Catching a Misread: Quick multiple-choice check - reveal results live before moving on.
- **Poll** — Round 6: README vs. Memo: Quick multiple-choice check - reveal results live before moving on.
- **Whiteboard / Collaborative Board** — Designing a Dashboard, in Words: Collaborative board (Padlet/Jamboard/physical) - everyone posts at once, then scan together for patterns.
- **Would You Rather** — Your Own Study Plan: Force a binary choice, then ask Fellows to justify it out loud - surfaces reasoning, not just the pick.

