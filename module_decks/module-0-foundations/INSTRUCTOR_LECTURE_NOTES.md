# Instructor Lecture Notes: module-0-foundations

---

**Lesson 1**

# Instructor Prep: Dev Environment & Data Fundamentals
*Module 0: Foundations*

## Lecture Time Estimate
- Opening: ~6 min
- Setting Up Your Tools: ~28 min
  - Code-along: ~8 min
- The Vocabulary You'll Use Every Day: ~6 min
- Put It Into Practice: ~14 min
- **Total: ~56 min**
- **Total code-along time: ~8 min**

## Code-Along Map (Where to Open the Notebook)
- Slide 8: **Check Your Environment** — code-along, have Fellows open their notebook
- Slide 10: **Look Before You Type** — watch-only demo, not a code-along
- Slide 13: **Find Your Way Around** — code-along, have Fellows open their notebook
- Slide 15: **A Typo Looks Like This** — watch-only demo, not a code-along

## Learning Objectives
- Have a working terminal, git, and VS Code setup on your own machine
- Define variable, data type, and data structure in your own words
- Correctly label 5 everyday examples by data type

## Project Connection
*Say this out loud at some point in the lecture - it's the answer to "why does this matter for my project?"*

Every command you run today (checking your environment, opening a file from the terminal) is the exact muscle memory the project's terminal log grades on directly — this isn't a warm-up, it's rep one.

## Section Flow (Why Each Transition Is There)
- **Why This Matters → Setting Up Your Tools**: A setup you've actually verified beats one you're just assuming works — that's the habit starting right now.
- **Tools Named → Code Along: Confirm Your Setup**: Knowing what a tool is isn't the same as knowing it actually works on your machine — let's check.
- **Paths Explained → Code Along: Find Your Way Around**: Relative and absolute are just words until you actually navigate with them.
- **Tools Ready → The Vocabulary You'll Use Every Day**: A working terminal doesn't tell you what you're actually looking at once you're in it — that's next.
- **Vocabulary Down → Put It Into Practice**: Knowing a definition and instantly recognizing it in the wild, under pressure, are two different skills.

## Additional Analogies / Use Cases
- **Use case:** A Bad Deploy Cost **$460 Million** in 45 Minutes (slide 3)
  - *Source:* [U.S. Securities and Exchange Commission, Release No. 70694 (2013)](https://www.sec.gov/files/litigation/admin/2013/34-70694.pdf)
  - *Summary:* In 2012, Knight Capital deployed new trading software to eight servers, but one server never received the update and still had old, dormant code left over from years earlier. A repurposed flag in the new code accidentally reactivated that old code, which began sending a flood of unintended stock orders the moment markets opened. Nobody caught the problem for 45 minutes, during which the system executed millions of erroneous trades across dozens of stocks. By the time it was manually shut down, Knight Capital had lost about $460 million and nearly collapsed the firm overnight. The SEC's subsequent order found Knight Capital violated the Market Access Rule by lacking adequate pre-trade risk controls and code-review procedures.
  - *Key takeaway:* Set up your project correctly, with real validation steps, from the very start — that's the habit that would have caught this.

## Further Resources (Deck's "Keep Learning" Links)
- [VS Code Docs: Getting Started](https://code.visualstudio.com/docs) (documentation, 10-15 min to skim)
  - Official VS Code documentation, the canonical reference.
- [The Unix Shell (Software Carpentry)](https://swcarpentry.github.io/shell-novice/) (practice, 30-45 min, self-paced)
  - Free, hands-on intro to the terminal for first-timers.

## Top Engagement Strategies Used
- **Would You Rather** — Terminal Navigation vs. Clicking: Force a binary choice, then ask Fellows to justify it out loud - surfaces reasoning, not just the pick.
- **Poll** — Shopping List: Type or Structure?: Quick multiple-choice check - reveal results live before moving on.
- **Quick-Fire Game** — Round-Robin: Name That Data Type: Quick-fire, leaderboard-style prompt - keep the pace brisk; celebrate participation, not just correctness.


---

**Lesson 2**

# Instructor Prep: Git & GitHub, Guided Walkthrough
*Module 0: Foundations*

## Lecture Time Estimate
- Opening: ~56 min
  - Code-along: ~24 min
- **Total: ~56 min**
- **Total code-along time: ~24 min**

## Code-Along Map (Where to Open the Notebook)
- Slide 6: **Start Tracking a Project** — code-along, have Fellows open their notebook
- Slide 9: **Stage and Check Status** — code-along, have Fellows open their notebook
- Slide 10: **Make Your First Commit** — code-along, have Fellows open their notebook
- Slide 11: **See Exactly What Changed** — code-along, have Fellows open their notebook
- Slide 15: **Link and Push** — code-along, have Fellows open their notebook
- Slide 16: **See Your Own History** — code-along, have Fellows open their notebook

## Prerequisites
- Working terminal / VS Code setup
- Terminal navigation: Pwd, ls, cd

## Learning Objectives
- Initialize a local git repository from the terminal
- Make a well-messaged commit, step by step
- Create a matching GitHub remote and push your first commit

## Project Connection
*Say this out loud at some point in the lecture - it's the answer to "why does this matter for my project?"*

This exact sequence — init, commit, remote, push — is what your project repo needs by the end of the project's first day. Today you do it guided; the project asks you to do it alone.

## Section Flow (Why Each Transition Is There)
- **Terms Named → Code Along: Start Tracking a Project**: A repository is just a folder git is watching — let's actually make one.
- **README Written → Code Along: Stage and Check Status**: Writing the file is one thing — git doesn't know it exists until you tell it to.
- **Your Local Repo → Connecting to GitHub**: Everything so far has lived only on your machine — nothing's been shared with anyone yet.
- **Remote Created → Code Along: Link and Push**: An empty GitHub repo and your local commits still don't know about each other yet — this is the command that connects them.

## Further Resources (Deck's "Keep Learning" Links)
- [Git Basics (Pro Git book, Ch. 2)](https://git-scm.com/book/en/v2/Git-Basics-Getting-a-Git-Repository) (documentation, 15-20 min)
  - The free, canonical git reference, from git's own team.
- [GitHub Docs: Hello World](https://docs.github.com/en/get-started/start-your-journey/hello-world) (practice, 15 min, hands-on)
  - GitHub's own short, guided first-repo walkthrough.

## Top Engagement Strategies Used
- **Poll** — When Stuck, Check Status: Quick multiple-choice check - reveal results live before moving on.
- **Whiteboard / Collaborative Board** — Git Workflow Order: Collaborative board (Padlet/Jamboard/physical) - everyone posts at once, then scan together for patterns.
- **Poll** — Rewrite a Bad Commit Message: Quick multiple-choice check - reveal results live before moving on.


---

**Lesson 3**

# Instructor Prep: Structured vs. Unstructured Data
*Module 0: Foundations*

## Lecture Time Estimate
- Opening: ~51 min
  - Code-along: ~16 min
- **Total: ~51 min**
- **Total code-along time: ~16 min**

## Code-Along Map (Where to Open the Notebook)
- Slide 7: **Look at a Structured File** — code-along, have Fellows open their notebook
- Slide 8: **Look at Unstructured Text** — code-along, have Fellows open their notebook
- Slide 11: **Pulling a Field Out of Unstructured Text** — code-along, have Fellows open their notebook
- Slide 15: **Row Count vs. Word Count** — code-along, have Fellows open their notebook

## Prerequisites
- Variable / data type vocabulary
- Terminal navigation: Pwd, ls, cd

## Learning Objectives
- Explain the difference between structured and unstructured data
- Classify a real file as structured or unstructured, with a reason
- Justify that call using what you actually see in the file

## Project Connection
*Say this out loud at some point in the lecture - it's the answer to "why does this matter for my project?"*

Calling a dataset structured or unstructured, and justifying it, is literally one of the project's graded requirements — today is where that judgment call gets practiced for the first time.

## Section Flow (Why Each Transition Is There)
- **The Concept → Code Along: Seeing It for Real**: The box-score-vs-interview analogy is easy to nod along to — spotting the real difference in an actual file is the actual skill.
- **The Middle Zone → Code Along: Pulling a Field Out**: Unstructured doesn't mean unusable — you can still pull a specific piece out, you just need a different tool for it.
- **Named It Correctly → Code Along: Row Count vs. Word Count**: Structured and unstructured data don't even share the same natural unit to count — let's see that for real.
- **The Practice → Wrapping Up**: Spotting structured vs. unstructured isn't a one-time lesson — it's a judgment call you'll make on every new dataset you open.

## Additional Analogies / Use Cases
- **Use case:** Star Ratings Looked **Fine.** Reviews Said Otherwise (slide 3)
  - *Hook question:* What would it take to actually use the reviews, not just the stars?
  - *Revisited/resolved in:* "What You Have Now"

## Further Resources (Deck's "Keep Learning" Links)
- [What Is Structured Data? (IBM)](https://www.ibm.com/think/topics/structured-vs-unstructured-data) (reading, 8-10 min)
  - A clear, vendor-neutral-enough overview with real examples.
- [Awesome Public Datasets (GitHub)](https://github.com/awesomedata/awesome-public-datasets) (practice, 10 min to browse)
  - Browse real datasets to spot structured vs. unstructured yourself.

## Top Engagement Strategies Used
- **Poll** — Scanned Receipts: Which Type?: Quick multiple-choice check - reveal results live before moving on.
- **Quick-Fire Game** — Name Your Own File Type: Quick-fire, leaderboard-style prompt - keep the pace brisk; celebrate participation, not just correctness.
- **Would You Rather** — Spreadsheet Rows or Raw Emails?: Force a binary choice, then ask Fellows to justify it out loud - surfaces reasoning, not just the pick.


---

**Lesson 4**

# Instructor Prep: Recall Review: Data Types & Git
*Module 0: Foundations*

## Lecture Time Estimate
- Opening: ~61 min
  - Code-along: ~8 min
- **Total: ~61 min**
- **Total code-along time: ~8 min**

## Code-Along Map (Where to Open the Notebook)
- Slide 11: **Type It From Memory** — code-along, have Fellows open their notebook
- Slide 12: **Navigate From Memory** — code-along, have Fellows open their notebook

## Prerequisites
- Variable / data type / data structure vocabulary
- Guided git init / commit / push workflow
- Structured vs. unstructured data judgment

## Learning Objectives
- Retrieve this week's vocabulary and commands from memory, unprompted
- Explain, out loud, why each command/term matters for the project

## Project Connection
*Say this out loud at some point in the lecture - it's the answer to "why does this matter for my project?"*

Everything reviewed today is graded directly on the project — this is a deliberate low-stakes rep before the stakes go up next week.

## Section Flow (Why Each Transition Is There)
- **Welcome Back → Today's Format**: Today isn't about learning something new — it's proving what you already know still holds up without a safety net.
- **No Wrong Answer → Code Along: Type It From Memory**: Talking about whether you'd guess or look it up is easy — actually doing it, cold, is the real test.
- **Retrieval Practice → Wrapping Up**: Recalling this cold, without notes, is exactly what an interview or a teammate will ask of you later.

## Top Engagement Strategies Used
- **Quick-Fire Game** — Data Type vs. Data Structure: Quick-fire, leaderboard-style prompt - keep the pace brisk; celebrate participation, not just correctness.
- **Quick-Fire Game** — Git Status: Quick-fire, leaderboard-style prompt - keep the pace brisk; celebrate participation, not just correctness.
- **Quick-Fire Game** — Data Type vs. Data Structure: Quick-fire, leaderboard-style prompt - keep the pace brisk; celebrate participation, not just correctness.
- **Quick-Fire Game** — Git Commit Debugging: Quick-fire, leaderboard-style prompt - keep the pace brisk; celebrate participation, not just correctness.
- **Would You Rather** — Guessing vs. Looking Up: Force a binary choice, then ask Fellows to justify it out loud - surfaces reasoning, not just the pick.
- **Quick-Fire Game** — Git Commit -m Flag: Quick-fire, leaderboard-style prompt - keep the pace brisk; celebrate participation, not just correctness.
- **Quick-Fire Game** — Git Diff: Quick-fire, leaderboard-style prompt - keep the pace brisk; celebrate participation, not just correctness.
- **Turn and Talk** — Why Version Control Matters: Turn and talk: pairs discuss 1-2 minutes, then a few share out.
- **Turn and Talk** — Pricing Data Judgment: Turn and talk: pairs discuss 1-2 minutes, then a few share out.
- **Turn and Talk** — Working With Incomplete Data: Turn and talk: pairs discuss 1-2 minutes, then a few share out.
- **Turn and Talk** — Habits That Will Stick: Turn and talk: pairs discuss 1-2 minutes, then a few share out.
- **Quick-Fire Game** — Git Init: Quick-fire, leaderboard-style prompt - keep the pace brisk; celebrate participation, not just correctness.


---

**Lesson 5**

# Instructor Prep: AI Literacy: Verified Fact vs. Claim
*Module 0: Foundations*

## Lecture Time Estimate
- Opening: ~59 min
  - Code-along: ~8 min
- **Total: ~59 min**
- **Total code-along time: ~8 min**

## Code-Along Map (Where to Open the Notebook)
- Slide 11: **Before You Run an AI-Suggested Command** — watch-only demo, not a code-along
- Slide 13: **A Safe One: Check Before You Trust** — code-along, have Fellows open their notebook
- Slide 14: **Verify Against the Real File** — code-along, have Fellows open their notebook

## Prerequisites
- Structured vs. unstructured data judgment

## Learning Objectives
- Explain why a verified fact and an AI-generated claim differ
- Name 2 concrete risks of trusting unverified AI output
- State a personal rule for when to double-check AI output

## Project Connection
*Say this out loud at some point in the lecture - it's the answer to "why does this matter for my project?"*

Naming 2 concrete AI-output risks and a personal double-check rule is a direct, graded requirement of the project's AI-literacy reflection — today is the worked example that comes before doing it solo.

## Section Flow (Why Each Transition Is There)
- **The Goal → Why This Matters**: Knowing AI can be wrong is one thing — seeing what actually happens when nobody checks is another.
- **Understanding the Risk → The Worked Example**: *(no connecting insight set)*
- **That One, You Just Read → Code Along: Check Before You Trust**: Not every AI-suggested command is dangerous — the habit is reading it either way, so let's actually type one together.
- **The Practice → Wrapping Up**: Checking one AI-suggested command today is the same habit you'll need every time AI hands you an answer, not just here.

## Additional Analogies / Use Cases
- **Use case:** A Court Filing Cited **Six Fake Cases** (slide 5)
  - *Source:* [Mata v. Avianca, Inc., 678 F. Supp. 3d 443 (S.D.N.Y. 2023)](https://law.justia.com/cases/federal/district-courts/new-york/nysdce/1:2022cv01461/575368/54/)
  - *Summary:* Attorney Steven Schwartz used ChatGPT to research case law for a brief in a client's personal-injury suit against Avianca, and the chatbot generated six case citations that looked completely real — plausible case names, fabricated judicial opinions, invented quotations. Schwartz filed the brief without independently verifying any of the citations. When opposing counsel and the judge couldn't locate the cases, Schwartz asked ChatGPT to confirm they were real, and it falsely reassured him again instead of admitting the fabrication. Judge P. Kevin Castel found the firm violated Federal Rule of Civil Procedure 11 by failing to verify its sources, sanctioning Schwartz and his firm $5,000 and ordering them to notify every judge who had been shown the fake cases.
  - *Hook question:* What single habit would have caught this before it was filed?
  - *Revisited/resolved in:* "What You Have Now"

## Further Resources (Deck's "Keep Learning" Links)
- [AI Hallucinations, Explained (IBM)](https://www.ibm.com/think/topics/ai-hallucinations) (reading, 8-10 min)
  - A clear, current explainer on why this happens.
- [Google: AI Literacy Fundamentals](https://grow.google/ai-literacy/) (practice, 15-20 min, self-paced)
  - Free, interactive modules on using AI tools well.

## Top Engagement Strategies Used
- **Poll** — Chatbot Reply: Type Recall: Quick multiple-choice check - reveal results live before moving on.
- **Poll** — Unsourced Statistic: What Now?: Quick multiple-choice check - reveal results live before moving on.
- **Would You Rather** — Honest Doubt or Confident Guess?: Force a binary choice, then ask Fellows to justify it out loud - surfaces reasoning, not just the pick.
- **Quick-Fire Game** — Never Trust AI On...: Quick-fire, leaderboard-style prompt - keep the pace brisk; celebrate participation, not just correctness.
- **Turn and Talk** — Your Own Risk + Rule: Turn and talk: pairs discuss 1-2 minutes, then a few share out.
- **Turn and Talk** — Share a Real AI Mistake: Turn and talk: pairs discuss 1-2 minutes, then a few share out.
- **Quick-Fire Game** — Name a Checkable Source: Quick-fire, leaderboard-style prompt - keep the pace brisk; celebrate participation, not just correctness.


---

**Lesson 6**

# Instructor Prep: Data Literacy Field Notes — Project Launch
*Module 0: Foundations*

## Lecture Time Estimate
- Opening: ~56 min
  - Code-along: ~4 min
- **Total: ~56 min**
- **Total code-along time: ~4 min**

## Code-Along Map (Where to Open the Notebook)
- Slide 9: **What a Terminal Log Entry Looks Like** — watch-only demo, not a code-along
- Slide 14: **Start Your Own Copy, Right Now** — code-along, have Fellows open their notebook

## Prerequisites
- Variable / data type / data structure vocabulary
- Guided git init / commit / push workflow
- Structured vs. unstructured data judgment
- Naming an AI-output risk and a collection-process concern

## Learning Objectives
- Set up a real development workflow: Terminal, git, GitHub
- Inspect an unfamiliar dataset carefully and honestly
- Ask one specific, checkable data-quality question

## Project Connection
*Say this out loud at some point in the lecture - it's the answer to "why does this matter for my project?"*

This project's git/GitHub and careful-inspection habits are the foundation every later project in the program builds on directly — Module 1's project and every project after it assumes you can already do this without guided help.

## Section Flow (Why Each Transition Is There)
- **Welcome → What's Being Assessed**: Before you touch a single line of code, know exactly what's actually being graded — no surprises later.
- **Pitfalls Named → Code Along: Launch Your Project**: Everything so far was preparation — this is the command that actually starts your own project, not a copy of someone else's.
- **The Brief → Before You Start**: Reading the brief once isn't the same as being ready to actually start — a few things to confirm first.
- **Ready? → Go Build It**: Every reminder you just heard is what separates a smooth first project from a frustrating one.

## Top Engagement Strategies Used
- **Turn and Talk** — Draft Your Curiosity Question: Turn and talk: pairs discuss 1-2 minutes, then a few share out.
- **Quick-Fire Game** — Why Open the Raw File First: Quick-fire, leaderboard-style prompt - keep the pace brisk; celebrate participation, not just correctness.
- **Would You Rather** — Plan First or Dive In?: Force a binary choice, then ask Fellows to justify it out loud - surfaces reasoning, not just the pick.
- **Turn and Talk** — Name Your Personal Risk: Turn and talk: pairs discuss 1-2 minutes, then a few share out.
- **Poll** — ZIP Code: Numeric or Text?: Quick multiple-choice check - reveal results live before moving on.
- **Turn and Talk** — Your First-Day Exit Criterion: Turn and talk: pairs discuss 1-2 minutes, then a few share out.

