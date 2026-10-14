# Instructor Lecture Notes: module-1-python-foundations

---

**Lesson 1**

# Instructor Prep: Control Flow & Conditionals
*Module 1: Python Foundations*

## Lecture Time Estimate
- Opening: ~58 min
  - Code-along: ~20 min
- **Total: ~58 min**
- **Total code-along time: ~20 min**

## Code-Along Map (Where to Open the Notebook)
- Slide 8: **If/Elif/Else, Live** — code-along, have Fellows open their notebook
- Slide 11: **For Loop, Live** — code-along, have Fellows open their notebook
- Slide 13: **range() Generates Numbers to Loop Over** — code-along, have Fellows open their notebook
- Slide 17: **While Loop, Live** — code-along, have Fellows open their notebook
- Slide 20: **Loop and Conditional, Together** — code-along, have Fellows open their notebook

## Prerequisites
- Module 0: Variable and data-type vocabulary

## Learning Objectives
- Trace short, already-written loop/conditional snippets and state their exact output without running them
- Define iteration, conditional, and loop body in your own words

## Project Connection
*Say this out loud at some point in the lecture - it's the answer to "why does this matter for my project?"*

The project's validate_line function is exactly a loop plus a conditional working together — today is the first rep of that shape, on tiny snippets, long before the project asks for it on 430 real rows.

## Section Flow (Why Each Transition Is There)
- **You Know the Vocabulary → Now Make It Do Something**: Knowing what a variable is and having code actually decide something because of it are two different skills — today's the second one.
- **The Concept → Code Along: If/Elif/Else**: Reading the rule is one thing — typing it and watching Python pick exactly one branch is what actually makes it stick.
- **The Concept → Code Along: For Loop**: Same idea as if/elif/else — reading it is easy, typing it and watching each iteration happen is what makes counting iterations click.
- **Looping Over a List → Code Along: The range() Function**: Sometimes there's no list yet — you just want to repeat something a specific number of times. That's what range() is for.
- **For Loops Repeat by Count → Code Along: While Loop**: A while loop repeats by condition instead — same idea, different trigger for stopping.
- **Two Ideas, One Move → Code Along: Loop + Conditional**: Every function this module builds toward is exactly this combination — a loop visiting every item, a conditional deciding what to do with it.

## Misconceptions to Watch For
- A Conditional Is a Decision: A common early guess is that Python checks every condition every time — walk through one example live showing it stops at the first true branch.
- range() Generates Numbers to Loop Over: A common guess is that range(5) includes 5 itself — run it live and count the actual printed values to correct this.

## Further Resources (Deck's "Keep Learning" Links)
- [Python Tutor — Visualize Code Execution](https://pythontutor.com/) (practice, 5-10 min)
  - Step through any snippet, line by line.
- [Python Documentation: Conditionals](https://docs.python.org/3/tutorial/controlflow.html) (documentation, 10 min to skim)
  - The official reference, straight from Python itself.

## Top Engagement Strategies Used
- **Poll** — Module 0 Data-Type Recall: Quick multiple-choice check - reveal results live before moving on.
- **Poll** — Loop Trace: Quick multiple-choice check - reveal results live before moving on.
- **Whiteboard / Collaborative Board** — While Loop Execution Order: Collaborative board (Padlet/Jamboard/physical) - everyone posts at once, then scan together for patterns.
- **Poll** — While-Loop Off-by-One: Quick multiple-choice check - reveal results live before moving on.
- **Quick-Fire Game** — Off-by-One Trace: Quick-fire, leaderboard-style prompt - keep the pace brisk; celebrate participation, not just correctness.
- **Poll** — Interview-Style Trace: Quick multiple-choice check - reveal results live before moving on.


---

**Lesson 2**

# Instructor Prep: Nested Loops & Conditionals
*Module 1: Python Foundations*

## Lecture Time Estimate
- Opening: ~50 min
  - Code-along: ~12 min
- **Total: ~50 min**
- **Total code-along time: ~12 min**

## Code-Along Map (Where to Open the Notebook)
- Slide 7: **Nested Loop, Live** — code-along, have Fellows open their notebook
- Slide 14: **Nested Conditional, Live** — code-along, have Fellows open their notebook
- Slide 17: **Putting It Together: Loop + Nested Conditional** — code-along, have Fellows open their notebook

## Prerequisites
- Prior lesson: Single loops and conditionals

## Learning Objectives
- Trace nested loops and state exactly how many times the inner body runs
- Trace nested conditionals and state which branch actually executes

## Project Connection
*Say this out loud at some point in the lecture - it's the answer to "why does this matter for my project?"*

The project's validate_line function needs exactly this shape - loop over every line, then a nested conditional checking operation type and then the value itself. Today is the first rep of nesting both, before the project asks for it on 430 real rows.

## Section Flow (Why Each Transition Is There)
- **One Loop, One Check → When That's Not Enough**: A grid has rows and columns, not just one list — one loop alone can't reach every cell.
- **The Concept → Code Along: Nested Loop**: Reading the rule is one thing — watching the inner loop actually finish before the outer one advances is what makes it click.
- **Nesting Loops → Nesting Conditionals**: Loops can nest inside loops — conditionals can nest inside conditionals the exact same way.
- **The Concept → Code Along: Nested Conditional**: Same idea as the nested loop — typing it and watching the inner check only fire when the outer one matched is what makes it real.
- **Both Ideas, One Move → Code Along: Loop + Nested Conditional**: This is the exact shape the project's `validate_line` function needs — a loop over every line, with a nested conditional inside it.

## Misconceptions to Watch For
- A Nested Loop Is a Loop Inside a Loop: A common guess is that the outer and inner loops "take turns" one iteration at a time — walk through one example showing the inner loop always finishes completely before the outer loop advances even once.

## Further Resources (Deck's "Keep Learning" Links)
- [Python Tutor — Visualize Nested Loops](https://pythontutor.com/) (practice, 5-10 min)
  - Step through a nested loop line by line.
- [Python Documentation: Nested Structures](https://docs.python.org/3/tutorial/controlflow.html) (documentation, 10 min to skim)
  - The official reference, straight from Python itself.

## Top Engagement Strategies Used
- **Poll** — Prior-Lesson Loop Recall: Quick multiple-choice check - reveal results live before moving on.
- **Whiteboard / Collaborative Board** — Nested Loop Execution Order: Collaborative board (Padlet/Jamboard/physical) - everyone posts at once, then scan together for patterns.
- **Quick-Fire Game** — Nested Loop Trace: Quick-fire, leaderboard-style prompt - keep the pace brisk; celebrate participation, not just correctness.
- **Quick-Fire Game** — Nested Loop Debug: Quick-fire, leaderboard-style prompt - keep the pace brisk; celebrate participation, not just correctness.
- **Quick-Fire Game** — Nested Conditional Debug: Quick-fire, leaderboard-style prompt - keep the pace brisk; celebrate participation, not just correctness.
- **Poll** — Interview-Style Nested Trace: Quick multiple-choice check - reveal results live before moving on.
- **Would You Rather** — Tracing Strategy: Force a binary choice, then ask Fellows to justify it out loud - surfaces reasoning, not just the pick.


---

**Lesson 3**

# Instructor Prep: Functions, Parameters & Return Values
*Module 1: Python Foundations*

## Lecture Time Estimate
- Opening: ~50 min
  - Code-along: ~12 min
- **Total: ~50 min**
- **Total code-along time: ~12 min**

## Code-Along Map (Where to Open the Notebook)
- Slide 8: **Define and Call, Live** — code-along, have Fellows open their notebook
- Slide 13: **Parameters, Live** — code-along, have Fellows open their notebook
- Slide 18: **Return, Live** — code-along, have Fellows open their notebook

## Prerequisites
- Prior lessons: Loops and conditionals, including nesting

## Learning Objectives
- Define a function with parameters and a return value, and call it correctly
- Explain why splitting code into functions makes it easier to test and reuse

## Project Connection
*Say this out loud at some point in the lecture - it's the answer to "why does this matter for my project?"*

Every piece of the project is a standalone function - read_batch_file, validate_line, process_transactions, print_summary, export_to_json. Today is the first rep of defining one, long before the project asks for five of them working together.

## Section Flow (Why Each Transition Is There)
- **One Long Block → Or One Named, Reusable Piece**: Copy-pasting the same loop and conditional every time you need them gets messy fast — a function names that logic once and reuses it.
- **The Concept → Code Along: Define and Call**: Reading the rule is one thing — watching a function do nothing until it's actually called is what makes it click.
- **Same Job, Every Time → Parameters Customize It**: A recipe that always makes the exact same size cake isn't very useful — parameters let a function's input change each time.
- **The Concept → Code Along: Parameters**: Same function, different name each time it's called — that's the whole point.
- **Getting Input In → Getting a Result Out**: Printing shows a value on screen — it doesn't hand that value back to whatever called the function. Return does.
- **The Concept → Code Along: Return Values**: Watching a printed value disappear when you try to use it is what makes this distinction real, not just a rule to memorize.

## Misconceptions to Watch For
- A Function Is a Named, Reusable Job: A common early guess is that defining a function (the def line) actually runs it — walk through one example showing the function body doesn't execute at all until it's called by name.
- Return Sends a Value Back — Print Doesn't: A function that only prints LOOKS like it worked — the output shows up on screen — but doubled = double(5) silently stores None if double() only prints. Model this live, don't just describe it.

## Further Resources (Deck's "Keep Learning" Links)
- [Python Tutor — Visualize Function Calls](https://pythontutor.com/) (practice, 5-10 min)
  - Step through a function call, line by line.
- [Python Documentation: Defining Functions](https://docs.python.org/3/tutorial/controlflow.html#defining-functions) (documentation, 10 min to skim)
  - The official reference, straight from Python itself.

## Top Engagement Strategies Used
- **Poll** — Nested Loop Recall: Quick multiple-choice check - reveal results live before moving on.
- **Whiteboard / Collaborative Board** — Function Call Order: Collaborative board (Padlet/Jamboard/physical) - everyone posts at once, then scan together for patterns.
- **Quick-Fire Game** — Parameter Trace: Quick-fire, leaderboard-style prompt - keep the pace brisk; celebrate participation, not just correctness.
- **Quick-Fire Game** — Return vs. Print Debug: Quick-fire, leaderboard-style prompt - keep the pace brisk; celebrate participation, not just correctness.
- **Turn and Talk** — Function Granularity: Turn and talk: pairs discuss 1-2 minutes, then a few share out.
- **Turn and Talk** — Why Functions: Turn and talk: pairs discuss 1-2 minutes, then a few share out.


---

**Lesson 4**

# Instructor Prep: Local vs. Global Variables & Scope
*Module 1: Python Foundations*

## Lecture Time Estimate
- Opening: ~51 min
  - Code-along: ~12 min
- **Total: ~51 min**
- **Total code-along time: ~12 min**

## Code-Along Map (Where to Open the Notebook)
- Slide 7: **Local Scope, Live** — code-along, have Fellows open their notebook
- Slide 14: **Reading a Global, Live** — code-along, have Fellows open their notebook
- Slide 19: **Refactor: Global to Parameter** — code-along, have Fellows open their notebook

## Prerequisites
- Prior lesson: Defining functions with parameters and return values

## Learning Objectives
- Explain the difference between a local and a global variable
- Explain why relying on globals makes a function harder to test and reuse than using parameters

## Project Connection
*Say this out loud at some point in the lecture - it's the answer to "why does this matter for my project?"*

The project's functions (read_batch_file, validate_line, process_transactions) all need to work from their own parameters, not outside variables — a function that secretly depends on a global breaks the moment it's reused somewhere else. Today is the first rep of why that matters.

## Section Flow (Why Each Transition Is There)
- **In and Out, Solid → What Happens In Between?**: Parameters get values in, return sends a value out — but where can that variable actually be used while the function is running?
- **The Concept → Code Along: Local Scope**: Reading the rule is one thing — watching Python raise a real error when you reach for a variable that's already gone is what makes it stick.
- **Local Stays Inside → Something Different: Global**: Not every variable disappears when a function ends — one created outside any function works differently.
- **The Concept → Code Along: Reading a Global**: A function can read a global variable without it being passed in as a parameter at all — worth seeing for real.
- **It Works... But → Why Not Just Use Globals for Everything?**: If a global is readable from anywhere, why bother with parameters at all? This is the actual point of today.
- **Found the Problem → Code Along: Fixing It**: Naming the problem is one thing — watching the fix actually happen is what makes the habit stick.

## Misconceptions to Watch For
- A Local Variable Only Exists Inside Its Function: A common early guess is that a variable created inside a function is still there afterward, just hidden — show a live `NameError` to prove it's actually gone, not hidden.
- Globals Make a Function Harder to Reuse: A common instinct is "globals are simpler, why bother passing things as parameters" — the tradeoff shows up later, not on day one, which is exactly why it's easy to reach for a global and regret it once code gets reused or tested.

## Further Resources (Deck's "Keep Learning" Links)
- [Python Tutor — Visualize Variable Scope](https://pythontutor.com/) (practice, 5-10 min)
  - Watch a local variable disappear in real time.
- [Python Documentation: Scopes and Namespaces](https://docs.python.org/3/tutorial/classes.html#python-scopes-and-namespaces) (documentation, 10 min to skim)
  - The official reference, straight from Python itself.

## Top Engagement Strategies Used
- **Poll** — Prior-Lesson Function Recall: Quick multiple-choice check - reveal results live before moving on.
- **Whiteboard / Collaborative Board** — Local Scope Timeline: Collaborative board (Padlet/Jamboard/physical) - everyone posts at once, then scan together for patterns.
- **Quick-Fire Game** — Local Scope Trace: Quick-fire, leaderboard-style prompt - keep the pace brisk; celebrate participation, not just correctness.
- **Quick-Fire Game** — Global Dependency Debug: Quick-fire, leaderboard-style prompt - keep the pace brisk; celebrate participation, not just correctness.
- **Turn and Talk** — Why Avoid Globals: Turn and talk: pairs discuss 1-2 minutes, then a few share out.
- **Poll** — Scope Synthesis Trace: Quick multiple-choice check - reveal results live before moving on.


---

**Lesson 5**

# Instructor Prep: Recall & Practice: Loops, Conditionals, Functions
*Module 1: Python Foundations*

## Lecture Time Estimate
- Opening: ~52 min
  - Code-along: ~4 min
- **Total: ~52 min**
- **Total code-along time: ~4 min**

## Code-Along Map (Where to Open the Notebook)
- Slide 11: **Loop + Conditional + Function, Together** — code-along, have Fellows open their notebook

## Prerequisites
- Prior lessons: Control flow, nested loops, functions, parameters/return values, local/global scope

## Learning Objectives
- Retrieve loop, conditional, and function syntax from memory, unprompted
- Trace and debug realistic loop/function code the way an interviewer would test it

## Project Connection
*Say this out loud at some point in the lecture - it's the answer to "why does this matter for my project?"*

Everything reviewed today — loops, conditionals, functions, scope — is exactly what validate_line and process_transactions are built from. This is a deliberate low-stakes rep before the project asks for all of it at once.

## Section Flow (Why Each Transition Is There)
- **Welcome Back → Today's Format**: Today isn't about learning something new — it's proving what you already know still holds up without a safety net.
- **Trace and Debug, Solid → Code Along: Putting It Together**: Reading the pieces separately is one thing — writing loop, conditional, and function together, from scratch, is the real test.

## Top Engagement Strategies Used
- **Poll** — range() Recall: Quick multiple-choice check - reveal results live before moving on.
- **Poll** — Local vs. Global Recall: Quick multiple-choice check - reveal results live before moving on.
- **Quick-Fire Game** — Nested Loop + Conditional Trace: Quick-fire, leaderboard-style prompt - keep the pace brisk; celebrate participation, not just correctness.
- **Poll** — Comparison Operator Fill-In: Quick multiple-choice check - reveal results live before moving on.
- **Turn and Talk** — Function Call Order, New Example: Turn and talk: pairs discuss 1-2 minutes, then a few share out.
- **Quick-Fire Game** — Scope Bug: NameError: Quick-fire, leaderboard-style prompt - keep the pace brisk; celebrate participation, not just correctness.
- **Would You Rather** — Why Split Functions: Debugging Angle: Force a binary choice, then ask Fellows to justify it out loud - surfaces reasoning, not just the pick.
- **Quick-Fire Game** — Loop + Function Trace: Quick-fire, leaderboard-style prompt - keep the pace brisk; celebrate participation, not just correctness.
- **Poll** — Nested Loop Iteration Count: Quick multiple-choice check - reveal results live before moving on.
- **Quick-Fire Game** — Spot the Accumulator Bug: Quick-fire, leaderboard-style prompt - keep the pace brisk; celebrate participation, not just correctness.


---

**Lesson 6**

# Instructor Prep: Big-O Intuition — Why Some Lookups Stay Fast
*Module 1: Python Foundations*

## Lecture Time Estimate
- Opening: ~55 min
- **Total: ~55 min**

## Prerequisites
- Prior lessons: Lists, loops, and functions (the 'checking one item at a time' habit this builds on)

## Learning Objectives
- Explain, in plain language, why a dict-style lookup stays fast as data grows while a linear scan slows down
- Use the terms O(1) and O(n) correctly, in your own words

## Project Connection
*Say this out loud at some point in the lecture - it's the answer to "why does this matter for my project?"*

The project's own REFLECTION.md asks for a Big-O comparison tied to your own find_item implementation, not a recited textbook definition — the project's grading rubric explicitly separates a reflection that connects the reasoning to your own code from one that doesn't. Today builds the plain-language intuition that makes that connection possible before any code exists to reflect on.

## Section Flow (Why Each Transition Is There)
- **Checking One at a Time → What Happens at Scale?**: Every function so far has checked things one at a time — that habit works fine on 10 items. Does it still work fine on 10 million?
- **The Pattern → This Has a Name**: Engineers don't say "it depends on the list size" every time — there's a short way to say exactly this.

## Misconceptions to Watch For
- Typing a Name vs. Scrolling Every Contact: A common guess is that scrolling and typing "aren't that different" for a small contact list — that's true at small scale, which is exactly the trap. The difference only shows up once the list gets big, which the next slide makes concrete with real numbers.
- This Has a Name: O(1) and O(n): `O(1)` doesn't mean "instant" in absolute terms, and `O(n)` doesn't mean "slow." They describe how the cost scales as data grows, not a literal speed. A single `O(n)` check on 5 items can easily be faster in real seconds than a single `O(1)` check that happens to do more work per lookup. The whole point is what happens as the data grows, not which one wins on any one tiny example.

## Top Engagement Strategies Used
- **Poll** — Contacts Analogy Recall: Quick multiple-choice check - reveal results live before moving on.
- **Quick-Fire Game** — Linear Scan Worst-Case Math: Quick-fire, leaderboard-style prompt - keep the pace brisk; celebrate participation, not just correctness.
- **Poll** — Match the Term: O(1): Quick multiple-choice check - reveal results live before moving on.
- **Poll** — O(n) Scaling Recall: Quick multiple-choice check - reveal results live before moving on.
- **Quick-Fire Game** — Doubling the List: Quick-fire, leaderboard-style prompt - keep the pace brisk; celebrate participation, not just correctness.
- **Turn and Talk** — Which Cost Matters More: A Real Scenario: Turn and talk: pairs discuss 1-2 minutes, then a few share out.
- **Quick-Fire Game** — O(n) Misconception Check: Quick-fire, leaderboard-style prompt - keep the pace brisk; celebrate participation, not just correctness.
- **Quick-Fire Game** — O(1) or Not: Two Operations: Quick-fire, leaderboard-style prompt - keep the pace brisk; celebrate participation, not just correctness.
- **Turn and Talk** — Explain Big-O to a Non-Coder: Turn and talk: pairs discuss 1-2 minutes, then a few share out.


---

**Lesson 7**

# Instructor Prep: Python Data Structures
*Module 1: Python Foundations*

## Lecture Time Estimate
- Opening: ~8 min
- Choosing the Right Container for Your Data: ~26 min
  - Code-along: ~13 min
- The Speed Behind Data Structures: ~34 min
  - Code-along: ~4 min
- **Total: ~67 min**
- **Total code-along time: ~17 min**

## Code-Along Map (Where to Open the Notebook)
- Slide 11: **Lists Let You **Change Anything, Anytime**** — code-along, have Fellows open their notebook
- Slide 12: **Once **Locked In**, a Tuple Can't Be Changed** — code-along, have Fellows open their notebook
- Slide 15: **Only **Hashable** Values Can Be Dict Keys** — code-along, have Fellows open their notebook
- Slide 19: **Sets Make Membership Checks **Instant**** — code-along, have Fellows open their notebook
- Slide 20: **The Cost of Checking a List **Adds Up**** — watch-only demo, not a code-along

## Prerequisites
- Python variables, conditionals, and loops
- Basic Python syntax (functions, print, input)

## Learning Objectives
- Choose the right structure (list/tuple/dict/set) for a given problem
- Explain why tuples are immutable and sets are unordered

## Project Connection
*Say this out loud at some point in the lecture - it's the answer to "why does this matter for my project?"*

The project's inventory tracker needs a dict-keyed lookup by name to beat a linear scan (objective 7's Big-O comparison) - today's lesson is where that dict-vs-list tradeoff, and hashability itself, first get real syntax instead of just concept.

## Section Flow (Why Each Transition Is There)
- **Choosing the Right Container for Your Data**: Lists, tuples, dictionaries, and sets
- **The Four Structures → Live Coding**: Same four ideas from the news story - now in Python, one at a time.
- **Hashable, Defined → Code Along: Hashable Dict Keys**: Knowing the definition is one thing - watching Python actually reject an unhashable key is what makes it real.
- **The Speed Behind Data Structures**: Why picking the right one isn't just about syntax
- **O(1) vs. O(n), Explained → Code Along: Sets Make It Instant**: Big-O on a slide is theory - timing the same lookup on a list vs. a set is where it stops being abstract.
- **Concepts Covered → Interview Prep**: Knowing how a set works is different from being able to explain why it's faster, on the spot, to an interviewer.

## Additional Analogies / Use Cases
- Lists Let You **Change Anything, Anytime** (music): A list is like a playlist - ordered, and you can add, reorder, or swap songs anytime.
- Once **Locked In**, a Tuple Can't Be Changed (travel): A tuple is like a booked flight + hotel itinerary - once it's paid for and locked in, you don't reorder or swap pieces.
  - *Backup (fashion):* A pre-planned outfit for a big event, locked in the night before - you don't swap pieces last-minute.
  - *Backup (gaming):* A submitted final answer in a game show - once it's locked in, you can't quietly change it after seeing the result.
- Only **Hashable** Values Can Be Dict Keys (food): A dict is like a restaurant menu - dish name maps to a price, and you look up by name, not by scanning every item.
- Sets Make Membership Checks **Instant** (social_media): A set is like a Close Friends list - no duplicates possible, and it doesn't matter what order you added people.
- **Use case:** One Dictionary Was **Too Big** for Discord's Servers (slide 6)
  - *Source:* [Discord Engineering Blog, "Why Discord is switching from Go to Rust"](https://discord.com/blog/why-discord-is-switching-from-go-to-rust)
  - *Summary:* Discord's "Read States" service tracked which messages each user had already seen, in every channel, using an in-memory LRU cache holding tens of millions of entries with hundreds of thousands of updates per second. Their original Go implementation hit a hard limit: Go forces a garbage-collection pass at least every 2 minutes no matter what, and each pass had to scan the entire cache to find what was safe to free, causing recurring latency spikes even though the Go code itself was written efficiently. Rust has no garbage collector — memory is freed the instant it's no longer owned, not on a periodic scan — so rewriting the service in Rust eliminated the spikes entirely and beat Go on every performance metric. After the rewrite, Discord grew the cache to 8 million Read States while dropping average response times into the microseconds.
  - *Hook question:* What do you think it costs a company — in time, money, or trust — when a system quietly gets slower and slower as more people use it?
  - *Revisited/resolved in:* "So far, we've covered..."

## Misconceptions to Watch For
- One Dictionary Was **Too Big** for Discord's Servers: Don't answer the hook yet - resolved in today's bridge slide.
- What's a Data Structure?: Fellows sometimes think "data structure" means something exotic (a tree, a graph) - reassure them these four are data structures too, just simpler ones, and the concept scales up later.
- Four Structures, **Four Different Rules**: "dict" being unordered is about guarantees, not display - as of Python 3.7 dicts preserve insertion order in practice, but you should never rely on that for correctness.
- Once **Locked In**, a Tuple Can't Be Changed: A tuple containing a LIST is still technically "immutable" (you can't reassign `log_entry[0]`), but that inner list itself could still be mutated - flag this as a "gotcha" for advanced Fellows if time allows.
- What Makes a Value **Hashable**?: This isn't a brand-new unrelated rule - it's WHY the tuple-vs-list immutability distinction from two slides ago mattered in the first place. Connect it explicitly back rather than introducing it as something separate.
- Why Data Roles Care About Big-O: O(1) doesn't mean "instant" in absolute terms, and O(n) doesn't mean "slow" - they describe how the cost scales, which is exactly why this matters more at real company scale than in a toy example with 5 items.
- Sets Make Membership Checks **Instant**: With small sequential ints like these, CPython's hashing means `print(seen_ids)` will often LOOK sorted/ordered - don't let that undercut the "unordered" claim from two slides ago. Say out loud: "don't read anything into this print order - it isn't guaranteed," or swap in non-sequential values (e.g. strings) live if you want to make the point more convincingly. Open with the Close Friends analogy above before naming "set" formally: no duplicates possible, and the order you added people doesn't matter.

## Further Resources (Deck's "Keep Learning" Links)
- [Python Docs: Data Structures](https://docs.python.org/3/tutorial/datastructures.html) (documentation, ~15 min read)
  - The official reference for lists, tuples, dicts, and sets.
- [Python Tutor](https://pythontutor.com/visualize.html) (practice, ~15 min hands-on)
  - Step through code and watch each structure change live.

## Top Engagement Strategies Used
- **Turn and Talk** — For vs. While Recall: Turn and talk: pairs discuss 1-2 minutes, then a few share out.
- **Poll** — Tuples: Quick multiple-choice check - reveal results live before moving on.
- **Quick-Fire Game** — Sets: Quick-fire, leaderboard-style prompt - keep the pace brisk; celebrate participation, not just correctness.


---

**Lesson 8**

# Instructor Prep: Data Serialization — Why JSON, CSV, and TXT Exist
*Module 1: Python Foundations*

## Lecture Time Estimate
- Opening: ~58 min
  - Code-along: ~16 min
- **Total: ~58 min**
- **Total code-along time: ~16 min**

## Code-Along Map (Where to Open the Notebook)
- Slide 8: **Writing to a File** — code-along, have Fellows open their notebook
- Slide 9: **Reading It Back** — code-along, have Fellows open their notebook
- Slide 13: **A CSV File Is Just Plain Text** — watch-only demo, not a code-along
- Slide 16: **Serializing a Record With json.dump()** — code-along, have Fellows open their notebook
- Slide 17: **Deserializing It Back With json.load()** — code-along, have Fellows open their notebook

## Prerequisites
- Prior lessons: Dicts and lists (what actually gets serialized)

## Learning Objectives
- Explain why serialization matters — what actually happens to a program's data when it closes
- Read and write a real file in Python, and choose between JSON, CSV, and TXT for a given need

## Project Connection
*Say this out loud at some point in the lecture - it's the answer to "why does this matter for my project?"*

The project's own export_to_json function, and the real .txt batch file read_batch_file has to open, are exactly what today teaches — not syntax encountered in passing, but the actual reason those formats were chosen in the first place.

## Section Flow (Why Each Transition Is There)
- **Values in Memory → What Happens When the Program Closes?**: Every variable you've written so far lives only while the program runs — close it, and it's gone.
- **The Idea → Code Along: Writing a Real File**: Reading about it is one thing — watching a file actually appear on disk is what makes it real.
- **JSON Mirrors Python → Code Along: JSON**: JSON isn't just readable by a program — it mirrors Python's own dicts and lists almost exactly.

## Misconceptions to Watch For
- Saving Your Game, and Loading It Back: A common guess is that the object itself gets saved — it doesn't. Only a text representation of its data gets saved; the real object is rebuilt fresh from that text when you load it back.

## Top Engagement Strategies Used
- **Poll** — Save/Load Analogy Recall: Quick multiple-choice check - reveal results live before moving on.
- **Quick-Fire Game** — Write Mode Overwrites: Quick-fire, leaderboard-style prompt - keep the pace brisk; celebrate participation, not just correctness.
- **Quick-Fire Game** — JSON Has No Tuple Type: Quick-fire, leaderboard-style prompt - keep the pace brisk; celebrate participation, not just correctness.
- **Turn and Talk** — Spot the Broken AI-Suggested JSON: Turn and talk: pairs discuss 1-2 minutes, then a few share out.
- **Would You Rather** — JSON vs. TXT for the Project's Batch File: Force a binary choice, then ask Fellows to justify it out loud - surfaces reasoning, not just the pick.


---

**Lesson 9**

# Instructor Prep: Writing Your First Validation Function, From Scratch
*Module 1: Python Foundations*

## Lecture Time Estimate
- Opening: ~60 min
  - Code-along: ~20 min
- **Total: ~60 min**
- **Total code-along time: ~20 min**

## Code-Along Map (Where to Open the Notebook)
- Slide 9: **Step 1: Just Look at the Data** — code-along, have Fellows open their notebook
- Slide 10: **Step 2: Check Each Line's Shape** — code-along, have Fellows open their notebook
- Slide 13: **Step 3: Wrap It in a Real Function** — code-along, have Fellows open their notebook
- Slide 17: **Step 4: Add enumerate()** — code-along, have Fellows open their notebook
- Slide 20: **Putting It Together: Both Checks at Once** — code-along, have Fellows open their notebook

## Prerequisites
- Prior lessons: Loops, conditionals, functions, and string/tuple basics

## Learning Objectives
- Follow a step-by-step template to write a function that validates a list of transaction-like strings
- Use enumerate() to report exactly which line failed, not just that something did

## Project Connection
*Say this out loud at some point in the lecture - it's the answer to "why does this matter for my project?"*

This is the exact shape of the project's own validate_line function — not a simplified toy version, the real template. The board-game data here is deliberately not the project's own scenario, but the function you build today is structurally identical to the one the project grades.

## Section Flow (Why Each Transition Is There)
- **The Pieces, Separately → Now Build the Whole Thing**: Loops, conditionals, and functions have all been separate exercises so far — today they combine into one real, useful tool.
- **The Plan → Code Along: Step 1**: Every step-by-step build starts with the smallest possible piece — just looking at the data first.
- **The Logic Works → Code Along: Step 3**: Now make it reusable — the same loop and conditional, moved inside a real function.
- **It Works — But Which Line? → Naming the Line Number**: "Wrong number of fields: ADD,Uno" tells you what's wrong — but on a 430-line file, you still have to go find it yourself.
- **The Idea → Code Along: Step 4**: Same function, one small change — swap the plain loop for enumerate().
- **One Check Down → Code Along: Both Checks**: Add the second check — a field count that looks right isn't the same as a value that's actually a number.

## Misconceptions to Watch For
- Which Line Failed? enumerate() Tells You: `enumerate()` doesn't change what you loop over — it just adds a position counter alongside it. `for line in lines` becomes `for i, line in enumerate(lines)`, same lines, plus a count.

## Top Engagement Strategies Used
- **Poll** — Referee Analogy Recall: Quick multiple-choice check - reveal results live before moving on.
- **Quick-Fire Game** — Step 2 Trace: Quick-fire, leaderboard-style prompt - keep the pace brisk; celebrate participation, not just correctness.
- **Quick-Fire Game** — enumerate() Off-by-One Bug: Quick-fire, leaderboard-style prompt - keep the pace brisk; celebrate participation, not just correctness.
- **Quick-Fire Game** — Full Function Trace: Quick-fire, leaderboard-style prompt - keep the pace brisk; celebrate participation, not just correctness.
- **Turn and Talk** — Why Check Order Matters: Turn and talk: pairs discuss 1-2 minutes, then a few share out.
- **Whiteboard / Collaborative Board** — The Validation Template, in Order: Collaborative board (Padlet/Jamboard/physical) - everyone posts at once, then scan together for patterns.


---

**Lesson 10**

# Instructor Prep: Error Handling
*Module 1: Python Foundations*

## Lecture Time Estimate
- Opening: ~62 min
  - Code-along: ~8 min
- **Total: ~62 min**
- **Total code-along time: ~8 min**

## Code-Along Map (Where to Open the Notebook)
- Slide 5: **Watch This Crash** — watch-only demo, not a code-along
- Slide 9: **Catching the Crash** — code-along, have Fellows open their notebook
- Slide 18: **Putting It Together: Two except Clauses** — code-along, have Fellows open their notebook

## Prerequisites
- Prior lesson: Writing a validation function with a step-by-step template

## Learning Objectives
- Write a try/except block that catches a real error instead of crashing
- Recognize common Python error types and what triggers each one
- Decide when to check a value first vs. just trying it and catching failure

## Project Connection
*Say this out loud at some point in the lecture - it's the answer to "why does this matter for my project?"*

The project requires a real try/except for type-validating a quantity field — not a simplified classroom version, the actual technique validate_line needs. A script that crashes on one malformed line instead of catching and reporting it is this project's own common mistake #2.

## Section Flow (Why Each Transition Is There)
- **Checking the Shape → What If You Just Try It?**: The last lesson's isdigit() check happens before the risky step — today's tool handles what happens if you skip straight to it.
- **The Idea → Code Along: Catching It**: Same crash as before — this time, caught instead of fatal.
- **One Value at a Time → Code Along: Inside a Real Function**: Same idea, now applied to every line of a batch file — with two different failure types to catch.

## Top Engagement Strategies Used
- **Poll** — Door-Handle Analogy Recall: Quick multiple-choice check - reveal results live before moving on.
- **Quick-Fire Game** — Valid Input Trace: Quick-fire, leaderboard-style prompt - keep the pace brisk; celebrate participation, not just correctness.
- **Quick-Fire Game** — Name the Error: TypeError: Quick-fire, leaderboard-style prompt - keep the pace brisk; celebrate participation, not just correctness.
- **Quick-Fire Game** — Name the Error: NameError: Quick-fire, leaderboard-style prompt - keep the pace brisk; celebrate participation, not just correctness.
- **Quick-Fire Game** — Bare except: Risk: Quick-fire, leaderboard-style prompt - keep the pace brisk; celebrate participation, not just correctness.
- **Quick-Fire Game** — Full Function Trace: Quick-fire, leaderboard-style prompt - keep the pace brisk; celebrate participation, not just correctness.
- **Turn and Talk** — Check First or Try First?: Turn and talk: pairs discuss 1-2 minutes, then a few share out.
- **Turn and Talk** — Why This Matters at Real Scale: Turn and talk: pairs discuss 1-2 minutes, then a few share out.


---

**Lesson 11**

# Instructor Prep: Summarizing Data With a Second Function
*Module 1: Python Foundations*

## Lecture Time Estimate
- Opening: ~54 min
  - Code-along: ~12 min
- **Total: ~54 min**
- **Total code-along time: ~12 min**

## Code-Along Map (Where to Open the Notebook)
- Slide 9: **Step 1: A Formatted Listing** — code-along, have Fellows open their notebook
- Slide 12: **Step 2: Add a Low-Availability Alert** — code-along, have Fellows open their notebook
- Slide 15: **Step 3: Add a Total Count** — code-along, have Fellows open their notebook

## Prerequisites
- Prior lessons: Writing a validation function with a step-by-step template

## Learning Objectives
- Write a second function that summarizes already-validated data
- Keep validating and summarizing as two separate, single-job functions

## Project Connection
*Say this out loud at some point in the lecture - it's the answer to "why does this matter for my project?"*

The project's print_summary function does exactly this shape — a formatted inventory listing plus a low-stock alert list, printed by a function whose only job is summarizing already-validated data, never validating it.

## Section Flow (Why Each Transition Is There)
- **One Function, Done → A Different Job Entirely**: validate_batch's job ends the moment it says valid or not — today's function starts from there.
- **The Plan → Code Along: The Listing**: Start with the simpler half — a formatted line per record.
- **The Listing Works → Code Along: The Alert List**: Now add the second half — flagging anything running low.
- **The Alert Works → Code Along: One More Piece**: One last addition — a quick total, the kind of number a stakeholder actually asks for first.

## Top Engagement Strategies Used
- **Poll** — Library Analogy Recall: Quick multiple-choice check - reveal results live before moving on.
- **Quick-Fire Game** — Formatted Listing Trace: Quick-fire, leaderboard-style prompt - keep the pace brisk; celebrate participation, not just correctness.
- **Quick-Fire Game** — Alert List Trace: Quick-fire, leaderboard-style prompt - keep the pace brisk; celebrate participation, not just correctness.
- **Quick-Fire Game** — Total Count Trace: Quick-fire, leaderboard-style prompt - keep the pace brisk; celebrate participation, not just correctness.
- **Would You Rather** — One Function or Two, Applied: Force a binary choice, then ask Fellows to justify it out loud - surfaces reasoning, not just the pick.
- **Quick-Fire Game** — Don't Re-Validate in summarize_batch: Quick-fire, leaderboard-style prompt - keep the pace brisk; celebrate participation, not just correctness.
- **Turn and Talk** — What Else Would You Report?: Turn and talk: pairs discuss 1-2 minutes, then a few share out.


---

**Lesson 12**

# Instructor Prep: Recall & Practice: Functions, Validation, try/except, Serialization
*Module 1: Python Foundations*

## Lecture Time Estimate
- Opening: ~62 min
  - Code-along: ~8 min
- **Total: ~62 min**
- **Total code-along time: ~8 min**

## Code-Along Map (Where to Open the Notebook)
- Slide 15: **Any Number of Arguments With *args** — code-along, have Fellows open their notebook
- Slide 19: **Any Number of Named Arguments With **kwargs** — code-along, have Fellows open their notebook

## Prerequisites
- Prior lessons: Serialization, validation functions, try/except, summarizing functions

## Learning Objectives
- Retrieve serialization, validation, error-handling, and summarizing from memory, unprompted
- Write a function that accepts a flexible number of arguments with *args and **kwargs

## Project Connection
*Say this out loud at some point in the lecture - it's the answer to "why does this matter for my project?"*

Everything reviewed today — serialization, validation, error handling, summarizing — is exactly what the project's own functions are built from. *args/**kwargs aren't required by the project's own functions, but real Python code you'll read after this program uses them constantly, so today's the day to meet them.

## Section Flow (Why Each Transition Is There)
- **Four Lessons Deep → Prove It's Still Solid**: Serialization, validation, error handling, summarizing — all separate lessons so far. Today tests whether they're still there without a safety net.
- **Four Lessons, Confirmed Solid → Now, Something New**: Every function so far has a fixed, exact parameter list — what happens when you don't know how many arguments you'll get?
- **The Idea → Code Along: *args**: One asterisk collects any number of extra arguments into a tuple.
- **The Idea → Code Along: **kwargs**: Two asterisks collect any number of named arguments into a dict.

## Top Engagement Strategies Used
- **Poll** — json.load() Recall: Quick multiple-choice check - reveal results live before moving on.
- **Poll** — TypeError Recall: Quick multiple-choice check - reveal results live before moving on.
- **Quick-Fire Game** — Which Check Catches It: Quick-fire, leaderboard-style prompt - keep the pace brisk; celebrate participation, not just correctness.
- **Poll** — enumerate() Recall: Quick multiple-choice check - reveal results live before moving on.
- **Quick-Fire Game** — Fix the Bare except: Quick-fire, leaderboard-style prompt - keep the pace brisk; celebrate participation, not just correctness.
- **Whiteboard / Collaborative Board** — The Full Pipeline, in Order: Collaborative board (Padlet/Jamboard/physical) - everyone posts at once, then scan together for patterns.
- **Turn and Talk** — The Cost of Merging Functions Later: Turn and talk: pairs discuss 1-2 minutes, then a few share out.
- **Quick-Fire Game** — *args Trace: Quick-fire, leaderboard-style prompt - keep the pace brisk; celebrate participation, not just correctness.
- **Quick-Fire Game** — **kwargs Trace: Quick-fire, leaderboard-style prompt - keep the pace brisk; celebrate participation, not just correctness.
- **Turn and Talk** — Fixed Parameters or *args?: Turn and talk: pairs discuss 1-2 minutes, then a few share out.


---

**Lesson 13**

# Instructor Prep: OOP: Building a Class With a Partner
*Module 1: Python Foundations*

## Lecture Time Estimate
- Opening: ~57 min
  - Code-along: ~12 min
- **Total: ~57 min**
- **Total code-along time: ~12 min**

## Code-Along Map (Where to Open the Notebook)
- Slide 10: **Step 1: __init__ and Attributes** — code-along, have Fellows open their notebook
- Slide 13: **Step 2: Add a Method** — code-along, have Fellows open their notebook
- Slide 16: **Step 3: Prove Independent Storage** — code-along, have Fellows open their notebook

## Prerequisites
- Prior lessons: Functions with parameters, dicts (attribute-like key/value storage)

## Learning Objectives
- Define a class with __init__, attributes, and a method, following a worked template
- Instantiate multiple objects and confirm each one stores its own data independently

## Project Connection
*Say this out loud at some point in the lecture - it's the answer to "why does this matter for my project?"*

The project's own Item-equivalent class is this exact shape — __init__, real attributes, at least one method. Today's the first rep of the shape the project grades, on data that isn't the project's own scenario.

## Section Flow (Why Each Transition Is There)
- **Solo So Far → Partner Up for Today**: Today's exercise is explicitly collaborative — find your partner before the code-along starts.
- **The Vocabulary → Code Along: The Class Itself**: With your partner — one of you types, the other reads each line out loud before it's run.
- **Data Stored → Code Along: Add a Method**: Now give the object something it can actually do with its own data.
- **One Object Works → Code Along: A Second Object**: The real test — does a second object keep its own data separate from the first?

## Optional Videos (If Time Allows)
- [Object-oriented Programming in 7 minutes](https://www.youtube.com/watch?v=pTB0EiLXUC8) (7:34)
  - Covers more than today needs (inheritance, polymorphism) — optional, if the fuller picture is useful.

## Top Engagement Strategies Used
- **Poll** — Blueprint Analogy Recall: Quick multiple-choice check - reveal results live before moving on.
- **Poll** — self Recall: Quick multiple-choice check - reveal results live before moving on.
- **Quick-Fire Game** — Step 1 Trace: Quick-fire, leaderboard-style prompt - keep the pace brisk; celebrate participation, not just correctness.
- **Quick-Fire Game** — Step 2 Trace: Quick-fire, leaderboard-style prompt - keep the pace brisk; celebrate participation, not just correctness.
- **Quick-Fire Game** — Independent Storage, Confirmed: Quick-fire, leaderboard-style prompt - keep the pace brisk; celebrate participation, not just correctness.
- **Quick-Fire Game** — __init__ Misconception Check: Quick-fire, leaderboard-style prompt - keep the pace brisk; celebrate participation, not just correctness.
- **Turn and Talk** — Objects or Parallel Lists?: Turn and talk: pairs discuss 1-2 minutes, then a few share out.


---

**Lesson 14**

# Instructor Prep: Magic Methods — What __init__/__str__/__repr__ Actually Mean
*Module 1: Python Foundations*

## Lecture Time Estimate
- Opening: ~56 min
  - Code-along: ~12 min
- **Total: ~56 min**
- **Total code-along time: ~12 min**

## Code-Along Map (Where to Open the Notebook)
- Slide 5: **Watch This: The Default Is Ugly** — watch-only demo, not a code-along
- Slide 9: **Step 1: Add __str__** — code-along, have Fellows open their notebook
- Slide 12: **Step 2: Add __repr__ Too** — code-along, have Fellows open their notebook
- Slide 13: **Now Test repr()** — watch-only demo, not a code-along
- Slide 17: **The Real Gotcha: A List of Objects** — code-along, have Fellows open their notebook

## Prerequisites
- Prior lesson: Defining a class with __init__, attributes, and a method

## Learning Objectives
- Add __str__ and __repr__ to a class, extending the last lesson's template
- Explain which one Python actually uses, and when

## Project Connection
*Say this out loud at some point in the lecture - it's the answer to "why does this matter for my project?"*

Not required by the project's own grading, but __str__/__repr__ are standard OOP vocabulary a Fellow will meet immediately in any real codebase, code review, or interview — today closes that gap.

## Section Flow (Why Each Transition Is There)
- **Yesterday's Class → Partner Up Again**: Same partner, same BoardGame class — today adds two more methods on top of it.
- **The Idea → Code Along: Add __str__**: One method fixes what print(connect4) actually shows.
- **Friendly, Done → Code Along: Add __repr__**: Now add the precise version too.
- **The Rule → Code Along: Prove It**: One object alone vs. the same object inside a list — watch which method actually runs.

## Misconceptions to Watch For
- Which One Does Python Actually Use?: A common guess is that `__str__` always wins once it exists. It wins for `print(connect4)` directly — but a list holding objects always shows each one's `__repr__`, even when `__str__` exists too.

## Top Engagement Strategies Used
- **Poll** — ID Analogy Recall: Quick multiple-choice check - reveal results live before moving on.
- **Quick-Fire Game** — __str__ Trace: Quick-fire, leaderboard-style prompt - keep the pace brisk; celebrate participation, not just correctness.
- **Quick-Fire Game** — __repr__ Trace: Quick-fire, leaderboard-style prompt - keep the pace brisk; celebrate participation, not just correctness.
- **Quick-Fire Game** — The List Gotcha, Confirmed: Quick-fire, leaderboard-style prompt - keep the pace brisk; celebrate participation, not just correctness.
- **Would You Rather** — One Method or Two?: Force a binary choice, then ask Fellows to justify it out loud - surfaces reasoning, not just the pick.


---

**Lesson 15**

# Instructor Prep: Big-O in Practice: Linear Scan vs. Dict Lookup, With a Partner
*Module 1: Python Foundations*

## Lecture Time Estimate
- Opening: ~53 min
  - Code-along: ~12 min
- **Total: ~53 min**
- **Total code-along time: ~12 min**

## Code-Along Map (Where to Open the Notebook)
- Slide 6: **Setup: A Class and Its Objects** — code-along, have Fellows open their notebook
- Slide 8: **Search 1: Linear Scan** — code-along, have Fellows open their notebook
- Slide 11: **Search 2: Dict-Keyed Lookup** — code-along, have Fellows open their notebook

## Prerequisites
- Prior lessons: Big-O intuition, list/dict Big-O, defining a class

## Learning Objectives
- Write both a linear-scan function and a dict-keyed lookup over a list of class objects
- With a partner, determine each approach's Big-O and explain why the dict approach scales better

## Project Connection
*Say this out loud at some point in the lecture - it's the answer to "why does this matter for my project?"*

The project's find_item must be implemented as a genuine linear scan or dict lookup — not both, not neither. Today's the first rep of writing both approaches side by side, over real class objects, before the project asks for a single committed choice.

## Section Flow (Why Each Transition Is There)
- **Two Skills, Separately → Partner Up**: Big-O intuition and class syntax have both been separate lessons — today combines them, with a partner.
- **The Recap → Code Along: The Data**: A real class, and a real list of its objects, before either search function gets written.
- **The Data Is Ready → Code Along: Linear Scan**: Write the search the same way you'd check a list by hand — one item at a time.
- **One Search Works → Code Along: Dict Lookup**: Same data, same question — a completely different mechanism.

## Top Engagement Strategies Used
- **Quick-Fire Game** — Linear Scan, No Match: Quick-fire, leaderboard-style prompt - keep the pace brisk; celebrate participation, not just correctness.
- **Quick-Fire Game** — Dict Lookup, No Match: Quick-fire, leaderboard-style prompt - keep the pace brisk; celebrate participation, not just correctness.
- **Whiteboard / Collaborative Board** — Determine and Explain, With a Partner: Collaborative board (Padlet/Jamboard/physical) - everyone posts at once, then scan together for patterns.
- **Quick-Fire Game** — Scaling the Numbers: Quick-fire, leaderboard-style prompt - keep the pace brisk; celebrate participation, not just correctness.
- **Would You Rather** — Small List or Huge List?: Force a binary choice, then ask Fellows to justify it out loud - surfaces reasoning, not just the pick.
- **Turn and Talk** — Interview Framing: Dict vs. List: Turn and talk: pairs discuss 1-2 minutes, then a few share out.
- **Quick-Fire Game** — Big-O Isn't a Stopwatch: Quick-fire, leaderboard-style prompt - keep the pace brisk; celebrate participation, not just correctness.


---

**Lesson 16**

# Instructor Prep: Debugging Like a Pro: Finding Planted Bugs Independently
*Module 1: Python Foundations*

## Lecture Time Estimate
- Opening: ~63 min
- **Total: ~63 min**

## Code-Along Map (Where to Open the Notebook)
- Slide 8: **The Script, Part 1: The Class** — watch-only demo, not a code-along
- Slide 9: **The Script, Part 2: The Data** — watch-only demo, not a code-along
- Slide 10: **The Script, Part 3: Counting Strategy Games** — watch-only demo, not a code-along
- Slide 11: **The Script, Part 4: Counting Available Games** — watch-only demo, not a code-along
- Slide 15: **Fix 1: The Class** — watch-only demo, not a code-along
- Slide 16: **Fix 1, Continued: Rebuilding the Objects** — watch-only demo, not a code-along
- Slide 17: **Fix 2: Counting Strategy Games, Refactored** — watch-only demo, not a code-along
- Slide 18: **Fix 3: Counting Available Games, Refactored** — watch-only demo, not a code-along

## Prerequisites
- Earlier lessons: Tracing code by hand, functions, classes and objects

## Learning Objectives
- Without a template, independently trace an AI-generated script combining a class, a loop, and functions
- Locate and fix at least 3 planted logic errors, then refactor one repeated block into a function

## Project Connection
*Say this out loud at some point in the lecture - it's the answer to "why does this matter for my project?"*

The project's rubric grades whether the `Item` class is used consistently and whether edge cases are actually handled, not just whether the code runs once without crashing — today's independent debugging rep is the same 'read your own code critically, don't just trust that it looks right' skill that rubric line assesses directly.

## Section Flow (Why Each Transition Is There)
- **New Territory → Why This, Why Now**: Every lesson so far handed you correct code to build from — today's script looks just as fluent and isn't.
- **Warmed Up → Here's the Script**: An AI-generated ~30-line script — a class, a loop, and a summary. Read it like you've never seen it before.
- **Independent Work Time → Debrief: What Was Actually Wrong**: Circulate, don't reveal — redirect a stuck Fellow with a question, not the answer.

## Top Engagement Strategies Used
- **Poll** — Warm-Up Trace: Quick multiple-choice check - reveal results live before moving on.
- **Turn and Talk** — Trusting Fluent Code: Turn and talk: pairs discuss 1-2 minutes, then a few share out.
- **Whiteboard / Collaborative Board** — Your Own Debugging Plan: Collaborative board (Padlet/Jamboard/physical) - everyone posts at once, then scan together for patterns.
- **Turn and Talk** — Interview Framing: Debugging Approach: Turn and talk: pairs discuss 1-2 minutes, then a few share out.


---

**Lesson 17**

# Instructor Prep: Final Practice Gauntlet: Mixed HackerRank-Style Review
*Module 1: Python Foundations*

## Lecture Time Estimate
- Opening: ~54 min
- **Total: ~54 min**

## Prerequisites
- Every earlier lesson this module: Control flow, functions, serialization, error handling, OOP, Big-O

## Learning Objectives
- Retrieve every module skill cold, without a per-topic study cue
- Apply control flow, functions, serialization, OOP, and Big-O reasoning under quick-fire time pressure

## Project Connection
*Say this out loud at some point in the lecture - it's the answer to "why does this matter for my project?"*

Every skill in today's gauntlet is a skill the project grades directly - this is the last checkpoint to confirm each one is genuinely solid before the sprint starts, not a new exercise in itself.

## Section Flow (Why Each Transition Is There)
- **Six Lessons Deep → The Gauntlet Begins**: Every round below pulls from a different earlier lesson — no advance notice which one's next.
- **Rules Set → Round 1: Control Flow**: Tracing code by hand, cold — the very first skill this module built.
- **Round 1 Done → Round 2: Functions**: Why functions get split up in the first place — not just how to write one.
- **Round 2 Done → Round 3: Data & Errors**: Serialization and error handling — two lessons, one round.
- **Round 3 Done → Round 4: OOP**: Classes and objects — the newest skill this module built, now under pressure.
- **Round 4 Done → Round 5: Big-O**: Choosing the right structure for the job — not just naming complexities.
- **Round 5 Done → Round 6: Debugging & AI Verification**: The newest lesson, and the one habit every other round secretly depended on.

## Top Engagement Strategies Used
- **Quick-Fire Game** — Round 1: Trace the Loop: Quick-fire, leaderboard-style prompt - keep the pace brisk; celebrate participation, not just correctness.
- **Quick-Fire Game** — Round 1, Part 2: Nested Loop Reset: Quick-fire, leaderboard-style prompt - keep the pace brisk; celebrate participation, not just correctness.
- **Quick-Fire Game** — Round 2: One Function, Three Jobs: Quick-fire, leaderboard-style prompt - keep the pace brisk; celebrate participation, not just correctness.
- **Quick-Fire Game** — Round 3: Which Exception Fires: Quick-fire, leaderboard-style prompt - keep the pace brisk; celebrate participation, not just correctness.
- **Quick-Fire Game** — Round 3, Part 2: Recall json.dump(): Quick-fire, leaderboard-style prompt - keep the pace brisk; celebrate participation, not just correctness.
- **Quick-Fire Game** — Round 4: Independent Storage: Quick-fire, leaderboard-style prompt - keep the pace brisk; celebrate participation, not just correctness.
- **Quick-Fire Game** — Round 5: Pick the Structure: Quick-fire, leaderboard-style prompt - keep the pace brisk; celebrate participation, not just correctness.
- **Quick-Fire Game** — Round 6: Trusting AI Output: Quick-fire, leaderboard-style prompt - keep the pace brisk; celebrate participation, not just correctness.
- **Turn and Talk** — Runs vs. Correct: Turn and talk: pairs discuss 1-2 minutes, then a few share out.
- **Whiteboard / Collaborative Board** — Your Own Study Plan: Collaborative board (Padlet/Jamboard/physical) - everyone posts at once, then scan together for patterns.

