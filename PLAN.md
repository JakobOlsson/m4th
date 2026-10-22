# Math Refresher — Plan

## Purpose

Build a small, stand-alone webpage to help Jakob refresh mathematical notation and regain confidence reading mathematical expressions, derivations, and proofs—especially when notation feels compressed or unfamiliar.

The central goal is **notation fluency**: learn to read notation aloud, identify what each part is doing, and expand or “compile” it into explicit arithmetic and Python. The aim is not merely to memorize formulas or rush to advanced topics. When faced with a dense expression, the learner should have a reliable way to begin unpacking it rather than freeze.

The learner has encountered some mathematical terminology in Swedish and wants to learn the English names for concepts and notation. **All project content and explanations should be in English; do not use Swedish.**

## Learning principles

- Treat notation as a compact set of instructions that can be unpacked step by step.
- Separate the roles of symbols: for example, an index/counter is not necessarily the value contributed to a sum. When introducing a subscripted family such as `c_f`, explicitly state what the index selects, its range, and how to construct each entry; summation notation alone does not define the indexed values.
- Do not present a formula as a “magic step.” Before using it, state the question it answers, define every symbol and its range/type, identify the inputs or data it summarizes, and list the assumptions it needs. Show the bridge from a concrete example (raw outcomes or data) to a table/list of defined quantities, then to the notation and general rule. Derive the rule or explain its counting/logic; do not rely on readers to recognize unstated conventions. If a convention is standard but has not been taught here, name and explain it briefly or link to its introduction.
- Start with small, concrete examples; then show where the same notation appears in more complex subjects.
- Avoid mixing too much at once: give each lesson one main learning goal, introduce unfamiliar ideas only as brief, clearly labeled previews, and save fuller cross-topic combinations for dedicated synthesis lessons.
- Make the boundary between “what we know now” and “what we will learn later” explicit. A learner can recognize one part of a larger formula without understanding the whole formula yet.
- Do not introduce unfamiliar notation or terminology without acknowledging it. Briefly explain the new piece where it appears, label it as a preview if it is not the lesson focus, and link to its guide or in-depth lesson/anchor when available. If no dedicated page exists yet, define it locally and record that a fuller explanation is planned.
- For each key formula or new notation, show its natural spoken reading directly beside it in a clearly paired **NOTATION / READ IT ALOUD** layout. Translate the operation and full relationship into natural spoken English (including words such as “equals,” “at least,” and what the sum adds); do not merely pronounce a sequence of symbol names such as “sigma, n, k equals.” Stack the paired columns on narrow screens.
- Make the reading visibly distinct with a calm sage panel and a lightly semibold serif body, but keep it visually attached to the formula rather than styling it like a detached editorial quote or alert. Keep expansions and explanatory text outside the read-aloud panel at normal weight. Use a separate warm sand/yellow accent for numeric substitution or “try a small value” examples.
- Show basic Python first: explicit variables, loops, and arithmetic. Avoid `math` and shortcuts such as `sum()` in the first derivation. Introduce built-ins afterward as useful shorthand, not magic.
- Keep code connected to the math and lesson text: name variables for their roles, and use named constants for meaningful model quantities (for example, `dice_sides = 6`) instead of leaving important values as unexplained magic numbers. Derive bounds from those names so the learner can trace each code value back to what they just read. Preserve mathematical endpoint intent when translating to code: Python `range` excludes its stop value, while `random.randint` includes both endpoints.
- Revisit the same notation in different contexts so the learner recognizes its structure even when the application changes.
- Focus on understanding and confidence, not on presenting a catalogue of finished formulas.
- Teach and consistently use the English names for mathematical concepts and notation; do not use Swedish.

## A short guide to mathematical letters and roles

Create a brief beginner guide to how letters are commonly used in mathematical notation. The purpose is to reduce confusion while reading—not to make the learner memorize rigid naming rules.

- Explain that there are **no universally forbidden letters**: a symbol's role is defined by context, and conventions vary by field and author.
- Offer common patterns as helpful clues, not rules: `x`, `y`, `z` often denote variables or unknowns; `a`, `b`, `c` often denote constants or coefficients; `i`, `j`, `k` often denote integer indices; `m`, `n` often denote sizes or bounds; `f`, `g` often name functions.
- Clarify collisions and context: `i` is often an index, but also commonly denotes the imaginary unit; `e` and `π` often have standard meanings, but a letter can still be used as an ordinary variable if defined that way.
- Explain function notation with a small example: `y = f(x)` says the output `y` depends on input `x` through function `f`; for example, if `f(x) = x + 2`, then `x = 3` gives `y = f(3) = 5`.
- Explain that math typography uses italics for many variables (including function names such as `f`), while named operators such as `sin` and `log` are conventionally upright. Typography helps, but context and definitions determine meaning.
- Make clear that a letter alone does not guarantee an object is a scalar, vector, matrix, set, or something else. Authors define the objects; boldface or other typography may provide clues.

Connect the guide to the summation example: `i` is the index, `n` is the upper bound, and the expression being summed supplies each term. Reassure the learner that one can often rename a variable consistently, but conventional names can make notation easier to recognize.

## A reusable notation-decoding routine

Lessons should repeatedly encourage this process:

1. Find the main action (add, multiply, compare, quantify, etc.).
2. Read the limits, conditions, and assumptions.
3. Identify the role of each symbol (index, value, bound, label, operation).
4. Substitute small values and expand a few steps explicitly.
5. Say the result in plain language.
6. Translate the steps into basic Python; only then compare with a shorter/built-in form.

When reading a larger proof or formula, learners can mark which pieces they understand, decode those pieces, and leave the rest for later.

## Lesson pattern

A typical lesson should include:

1. The notation, what the complete expression asserts, and a natural read-aloud version in plain English.
2. A breakdown of its parts and their roles.
3. A small numeric example, expanded fully.
4. Basic, executable Python that follows the expansion.
5. A trace showing the changing index/value and accumulated result.
6. A shorter Python version using an appropriate built-in, introduced after the manual version.
7. A small variation or challenge in the in-browser Python console.
8. A brief “where you’ll see this later” section, where useful, without requiring the learner to understand all surrounding notation.

### Progressive Python versions and the shared editor

When a lesson benefits from showing several equivalent Python implementations, use a consistent progression:

1. **Fully explicit / unpacked** — show the arithmetic and control flow directly so the mathematical steps are visible.
2. **A little more idiomatic** — use a Python construct that removes some mechanical detail while keeping the main process visible (for example, replace a manually advanced `while` index with a `for` loop over `range`).
3. **Concise idiomatic Python** — use an appropriate built-in such as `sum()` when that is the natural expression of the task.

These are teaching stages, not a claim that the shortest version is always best. Explain what each step hides or makes clearer, and keep the same meaningful variables and named model quantities from the math where practical. Make numeric bounds traceable to the described domain, and explain any programming-language endpoint convention that affects which values are visited. Use only as many versions as genuinely help; two are enough when there is no useful middle step. The products/factorials lesson validates a useful three-step ladder: explicit `while` loop → `for`/`range` loop → standard-library helper such as `math.prod()`.

Each displayed Python version should have a **Load into editor** control. All controls load their code into the same CodeMirror editor, where the learner can inspect or edit it and run it with the shared Run button. Keep the interaction predictable across lessons. Make sure each version is executable and gives the same result for the chosen example, and state what changed between versions.

### Exact rational and decimal arithmetic

When a problem benefits from exact fractional results or decimal arithmetic, introduce Python's standard-library `fractions` and `decimal` modules rather than relying automatically on binary floating-point values. Use `fractions.Fraction` for exact rational arithmetic (for example, keeping a probability such as `1/3` as a fraction); use `decimal.Decimal` for base-10 decimal quantities and controlled decimal precision. Explain that `Decimal` division can still round repeating results, and construct decimal values from strings such as `Decimal("0.1")` rather than from a float such as `Decimal(0.1)`. Introduce these tools when the example makes their benefit concrete, and show a decimal approximation alongside an exact fraction when that helps interpretation.

## First topic: summation (∑)

Introduce the short guide to mathematical letters and roles before or alongside the first summation example, so the learner knows that letters are names with context-dependent roles.

The first lesson should teach how to read a general sum, not begin with a long arithmetic exercise and not try to teach probability or linear algebra all at once. Clarify that `∑` is the summation sign/operator, based on the capital Greek letter Sigma `Σ`; the letter and the operator are related but are not the same glyph.

Show common layout variants: in displayed equations, the upper and lower limits are often placed above and below `∑`; inline, they are often placed to its right to save space. Explain that the meaning is the same and typesetting conventions can vary.

Introduce:

\[
\sum_{i=1}^{n} i
\]

Explain the parts:

- `Σ` means add the terms specified by the expression to its right.
- `i = 1` gives the starting index.
- `n` is the upper stopping value in this example.
- The final `i` is the expression whose value is contributed at each step.

For this particular sum, the index and the contributed value happen to be the same. With `n = 4`:

\[
\sum_{i=1}^{4} i = 1 + 2 + 3 + 4 = 10
\]

Then make the distinction explicit with:

\[
\sum_{i=1}^{n} a_i = a_1 + a_2 + \cdots + a_n
\]

Here `i` is the index/position selecting an item, while `a_i` is the value contributed to the sum. The index is not necessarily the value being added.

Explain that the lower bound is chosen to match the terms being asked for, not fixed universally at 1. For example, `Σ(i=0..3) a_i` includes `a₀`, while `Σ(i=2..4) a_i` starts at `a₂`. For an ordinary finite sum with integer bounds, both endpoints are included. Connect bounds to a probability question: if `X` takes integer values from 0 through `n`, “at least 2” sums `P(X=k)` for `k=2..n`, whereas “exactly 2” is just `P(X=2)`. Briefly explain that `P(A)` means the probability of event `A`, and identify `X` as a count/random variable; link to the probability preview in the letters guide and mark probability as a later topic. Read the complete equation aloud: “The probability that X is at least 2 equals the sum, as k ranges from 2 through n, of the probability that X equals k.” Then expand it as `P(X=2) + P(X=3) + ... + P(X=n)`. Contrast with “at most 2”: `P(X≤2) = Σ(k=0..2) P(X=k)`, read aloud as “The probability that X is at most 2 equals the sum, as k ranges from 0 through 2, of the probability that X equals k.” If the desired outcomes are noncontiguous, sum over a set of indices rather than an interval. Make clear that a lower bound of 2 means include every index from 2 through the upper bound, not only the single outcome 2.

Explain briefly that starting at 1 is common when numbering a sequence, but is not a universal rule. Some sums start at 0; for example, a sum from `i = 0` through `n` contains `n + 1` terms. The limits tell us the actual range.

Use precise beginner-friendly terminology:

- **Index**: the counter or label that changes from term to term.
- **Term / summand**: the value or expression being added on that step.
- In common finite sums, the index is often an integer scalar, but the terms being added are not necessarily scalar numbers. More advanced sums can add vectors or matrices, and indices can be more general than a single integer.

For now, work with ordinary numbers. Add a short note that vector and matrix sums, dot products, and matrix multiplication are interesting later topics, not part of the first summation walkthrough.

### Quick recognition tour (do not fully unpack these yet)

Show that summation appears in several contexts, while focusing only on what the sum is adding:

- Sequence: `Σ(i=1..n) i` adds the integers from 1 through `n`.
- Probability: `Σ(k=3..5) P(X = k)` adds the probabilities for `X = 3`, `X = 4`, and `X = 5`.
- Matrix multiplication: `Σ(k=1..m) A[r,k] B[k,c]` adds the products used to calculate one output cell.
- Dot product (a later topic): `a · b = Σ(i=1..n) a_i b_i` adds products of corresponding components.

These examples are signposts for later lessons. Label the surrounding ideas as “we’ll return to this,” so the first lesson remains about reading the sum itself.

### Basic Python progression

Make the code reuse the notation's variables wherever practical: for example, use `i` or `k` as the loop index/outcome when the equation uses that symbol. Name helper values after the mathematical expression they represent (for example, `p_x_equals_k` for `P(X = k)`), and add `#` comments that explicitly map code to notation and concrete substitutions (for example, `# on this pass, k = roll = 6`). If code uses a distinct name such as `x` for one observed random-variable value, comment on that correspondence. Start with a `while` loop that mirrors the inclusive mathematical upper bound directly:

```python
n = 4
i = 1
total = 0

while i <= n:
    total = total + i
    i = i + 1

print(total)
```

Explain that `i <= n` includes the final term. A condition like `i < n` would stop before adding `n`. This loop avoids hiding the index behavior inside `range` while the learner is first mapping notation to code.

Afterward, show the concise, idiomatic version using the same `n` and `i` variables:

```python
n = 4
i = 1
total = sum(range(i, n + 1))
print(total)
```

Explain that Python's built-in `sum()` function adds the values produced by `range`. `range` excludes its stop value, so `n + 1` is needed to include the mathematical upper bound `n`. Explicitly call `sum()` a built-in function (not a method).

## Synthesis and application lessons: putting ideas together

After a small group of related topics has been introduced, add a “put it together” lesson or practice page that combines them. These should feel like a natural next step, not a sudden jump: only rely on ideas already taught, explicitly preview and link any new notation, read the combined expression aloud, expand it in stages, and work through it in Python using the progressive-code pattern.

Completed synthesis lesson: **A sum of factorials**. It combines notation already introduced by expanding `Σ(k=1..4) k! = 1! + 2! + 3! + 4! = 33`, substituting each index into the whole summand, then evaluating it with explicit loops.

Completed counting lesson: **Combinations**. It teaches the order-does-not-matter distinction from a small list, derives “n choose r” from ordered selections and factorials, and checks the edge cases.

Completed synthesis lesson: **A dice probability using combinations**. It calculates the chance of at least two sixes in three independent rolls by counting the exactly-two and exactly-three cases, expanding `P(X ≥ 2)` as a sum, and comparing the exact count (16 of 216) with the probability calculation (`2/27`). It also enumerates all 216 outcomes in optional Python.

Completed synthesis lesson: **Dot products inside a matrix product**. It connects the vector dot-product and matrix-multiplication lessons to a practical project-prioritization use case: rate two proposals on impact and feasibility, apply criterion weights of 3 and 4, and calculate one score per proposal. The two dot products produce scores 20 and 25, so proposal B ranks higher under this chosen model. The lesson explains that this is a common kind of multi-criteria decision aid, while making clear that scores depend on subjective ratings and weights and do not prove which proposal is objectively better.

### Completed capstone lesson: a Bézier curve in polynomial form

The capstone reads and derives the polynomial form the learner shared, using a low-degree curve as the concrete example:

\[
\mathbf{B}(t)=\sum_{j=0}^{n} t^j\mathbf{C}_j,
\qquad
\mathbf{C}_j=\frac{n!}{(n-j)!}\sum_{i=0}^{j}\frac{(-1)^{i+j}\mathbf{P}_i}{i!(j-i)!}
=\left(\prod_{m=0}^{j-1}(n-m)\right)\sum_{i=0}^{j}\frac{(-1)^{i+j}\mathbf{P}_i}{i!(j-i)!}.
\]

The completed lesson uses a quadratic curve with three two-dimensional control points. It first interprets the Bernstein form as a weighted blend, then expands the curve into the polynomial power basis. The derivation uses the binomial theorem, distinguishes the jobs of `i`, `j`, `m`, and `r`, and shows why `n!/(n-j)!` equals a finite product. It explains the empty-product case `j = 0`, where `C₀ = P₀`, and includes optional Python that samples the Bernstein form at five parameter values, applying the shared weights to the control points and mapping each coordinate to a pixel position. A caution notes that high-degree power-basis evaluation can lose numerical accuracy through cancellation; de Casteljau's algorithm is presented as a later practical alternative, not as a correction to the algebra.

Treat these as cumulative exercises that build confidence reading a fuller expression, not as a demand to master every connected topic at once.

### Optional practice sessions (proposed)

Keep practice sessions playful and separate from the core lesson sequence. Give the learner a short scenario, the formulas and assumptions that may be useful, then space to try the problem before revealing a worked breakdown in a native `<details>` accordion. Invite learners to read notation aloud, explain why each step follows, and write a mathematical solution or proof on paper. Some sessions should be purely mathematical, with no code; where code adds value, put it in a separate optional accordion. Model proofs as written mathematical arguments; code can check examples but must not replace the reasoning. These pages should emphasize trying examples rather than introducing long explanations; link to core lessons when a reminder is needed.

Candidate sessions:

- **Nordic/European Yatzy:** explicitly name and explain the chosen regional scorecard and reroll rules; do not silently import American Yahtzee rules. Practice first-roll chances for straights or a full house, then compare keeping/rerolling choices over the remaining throws. Call out regional variations in scoring.
- **A standard 52-card deck:** state the deck assumptions (including jokers and ace conventions), distinguish an unordered hand from the order cards are dealt, and practice counts/probabilities for pairs, straights, flushes, and full houses, including drawing replacements.
- **Hypothetical infection and immunity:** use clearly invented rates to practice conditional probability, test results, and how prior immunity changes a modeled risk. Distinguish the incubation-time distribution (infection to symptom onset) from the infectious period. Their overlap depends on the disease: infectiousness may occur before symptoms, overlap them, or continue after them; in some diseases, it can end before symptoms begin. State the timeline explicitly rather than assuming a COVID-like pattern. Model transmission risk by day, including hypothetical presymptomatic contacts where appropriate. Let learners combine per-contact risks to find the chance of at least one transmission, estimate expected case counts, and—under stated equal-risk and independence assumptions—use a binomial model for the number infected. Show how the law of total probability combines conditional risks across mutually exclusive groups or pathways, and distinguish it from joint probability. Present all values as a toy model, not as epidemiological estimates or health .
- **Larger vector and matrix examples:** use small but substantial data tables, such as several projects by criteria or factories by products multiplied by products by ingredients. Trace one row-by-column calculation by hand, then let Python calculate the full result. Also consider a tiny pixel-pattern classifier as a neural-network preview: encode a 2×2 or 4×4 grayscale image as a vector, apply a small illustrative weight matrix to produce class scores, and show how a batch of images can be processed with one matrix multiplication. Clearly distinguish hand-chosen toy weights from a trained network; explain that real networks learn weights and use nonlinear activations, without trying to teach model training here. A separate feature-vector similarity exercise could represent objects using normalized measurements, compare distances, and classify by the nearest labeled example. State that closeness depends on the chosen features, scales, and distance rule; learned embedding axes may not have simple human-readable meanings. A housing-price preview could progress from a few hand-chosen feature weights to supervised learning on historical house features and sale prices. Distinguish input features from learned model parameters: a simple model learns weights on the chosen features, while a neural network may also learn internal feature representations. Treat predictions as estimates of patterns in historical data, not guaranteed accepted prices or causal measures of what buyers value.

Proof-focused candidates that need no Python include proving the symmetry of combinations by pairing each chosen group with its complement; using 14 cards and 13 ranks to prove that two cards must share a rank; deriving the sum of the first `n` odd numbers as `n²`; and deriving the law of total probability from a partition of the possible cases.

### Worked examples (distinct from practice challenges)

A worked example is a guided, fully explained application: show the data/question, make the mathematical representation, derive the answer step by step, and interpret its limits. It is not a quiz with the solution withheld. The overview should offer these examples as browseable applications, while the numbered core lesson sequence and its navigation remain stable.

Current synthesis/application examples to link under **Worked examples**:

- `docs/sum-of-factorials.html` — substitute each index into a factorial summand, calculate the terms, and add them.
- `docs/dice-probability.html` — count patterns for at least two sixes in three rolls, then relate the favorable count to all outcomes and to a sum of probabilities.
- `docs/matrix-product-application.html` — turn proposal ratings and criterion weights into matrix/dot-product scores, with caveats about the chosen ratings and weights.
- `docs/bezier-curve.html` — follow control points through the Bernstein and polynomial forms of a curve, then sample and map points to pixels.

Two additional stand-alone worked applications (outside the unchanged 16-page core previous/next sequence) are `docs/monte-carlo-pi.html` and `docs/text-similarity.html`. The first derives π/4 from quarter-circle area inside a unit square and distinguishes a hand-picked counting illustration from a genuine seeded uniform-sampling estimate; Python checks the simulation without proving π. The second builds a shared ordered vocabulary and two word-count vectors, expands the dot product and vector lengths before cosine similarity (2/3 in the concrete example), and warns that bag-of-words similarity is neither a probability nor a guarantee of semantic agreement. Python is optional in both. PageRank/state-transition modeling is deferred; do not import it into these examples without separate groundwork.

Keep these distinct from **optional practice sessions**: practice prompts invite the learner to attempt a challenge first, reveal hints/solutions on request, and may be tried in any order. Yatzy, card-drawing problems, the hypothetical infection model, and paper-only proof exercises belong to that track. Larger production matrices, feature similarity, pixel classifiers, and housing-price prediction are proposed practice/application ideas, not additional finished worked-example pages; if one is later authored as a guided exposition, link it in both the appropriate context and the overview without mislabeling it as complete.

### Focused follow-ups from the external review

Adopt small examples that strengthen existing lessons without adding new prerequisites: compare independent die rolls with a two-card draw without replacement in probability; use a hypothetical net-payout game for expected value; show a complete small recursive Fibonacci call tree in counting work; and recalculate both proposal scores when shared criterion weights change in the matrix-product application. Keep the calculations traceable and the model limitations explicit. Do **not** add rotation, cosine similarity, binary search, or other large side topics to these lessons merely because the review proposes them. The reviewed factorial-overflow suggestion is inaccurate for Python's arbitrary-precision integers; avoid claiming Python integer overflow. A compact math → English → Python bridge belongs in the notation/Python reference, not as a shortcut-heavy landing-page table.

### Practice implementation plan

The proposal is a balanced extension of the current handbook: games supply exact counting, infection scenarios supply conditional reasoning, data tables supply vector/matrix interpretation, and short proofs supply general arguments. The main risks are overloaded pages and prerequisites not yet taught. Split the material into the eight sessions below, with 3–4 core challenges per page and at most one optional stretch problem. ML pages are conceptual previews, not model-training tutorials. The eight sessions are a bounded next phase, not requirements for completing the existing core handbook.

#### Practice visual style

Give examples/practice pages a distinct visual identity from the explanatory core lessons, while retaining the shared site header, navigation, typography, and accessibility conventions. The maintainer wants them to feel different, not like another long lesson.

- Use a scoped `.practice-page` style, with a warmer accent and a workbook/challenge-card layout. Keep core lesson styling unchanged.
- Lead with the scenario, a compact rules/data panel, and a clear question rather than a long introductory explanation. Use simple dice/card visuals or small tables where they help; avoid decorative clutter.
- Mark challenges with short titles and difficulty labels such as Warm-up, Try it, and Stretch. These are difficulty cues, not exam scores or required progression.
- Separate the learner's task from the answer visually. Use clearly labeled Hint, Worked reasoning, and Python check accordions, with strong visible focus states and comfortable click/tap targets. Do not rely on color alone to distinguish them.
- Allow a light graph-paper/grid motif in the practice area if it does not compete with formulas or reduce contrast. Keep tables responsive and diagrams understandable without color.
- Prototype the practice overview and first Yatzy page for visual review before applying the design to the remaining sessions. No timers, grading, or gamification infrastructure is required.

#### Shared page contract

- Start with a goal, prerequisites linked to core lessons, and an explicit model/rules box. Use small, deterministic datasets printed in full; do not require downloads or a backend.
- Each challenge states exactly what to find or justify. Supply a compact formula/read-aloud reminder, define all new symbols locally, and identify the job of each formula. Do not expose the answer before the learner tries it.
- Use separate native `<details>` panels for an optional hint, the worked reasoning/answer, and optional Python. Keep them closed initially. Proof challenges can first ask learners to choose an approach before opening the formula hint.
- Worked reasoning follows: define quantities → state assumptions → derive the result → interpret it and its limits. Read the important formula aloud. Distinguish a numerical calculation, a model-based estimate, a general proof, and a counterexample.
- Ask at least one “why?” question per page: explain why cases can be added, why a product applies, why matrix dimensions match, or why a general claim follows. Not every page needs executable code.
- Keep code out of the paper-first path. Where useful, place one runnable check in a code accordion using the existing shared editor, not a new editor per challenge. Ensure its layout initializes correctly when revealed from a closed panel. State what the check establishes and what it does not prove.
- Continue native MathML with adjacent LaTeX comments. Add genuinely new terminology to the glossary and notation to the reference/letters guide where appropriate; avoid turning a practice page into another long foundational lesson.
- Create a practice overview at `docs/practice.html`, linked from the handbook overview and a stable Practice sidebar group on every page. Keep these sessions outside the 16-lesson previous/next sequence; use links to the practice overview and related sessions instead.

#### A. Nordic Yatzy — `docs/practice-yatzy.html`

- Prerequisites: combinations, factorials, dice probability, and independent rolls.
- Maintainer-confirmed rules: five dice, one initial throw and up to two rerolls per turn; unused throws cannot be saved for later turns. Two straights: exactly 1–2–3–4–5 and exactly 2–3–4–5–6. Categories include pairs, three of a kind, four of a kind, and Yatzy (five of a kind). Assume fair independent six-sided dice for the probability exercises and allow the player to choose which dice to reroll. Do not import American four-die “small straight” rules. Omit scores/bonuses unless needed; distinguish completing a category from maximizing expected score. For each exercise, explicitly distinguish exactly a pair/triple from at least that many matching dice. Maintainer-confirmed house category: exactly a triple of one face value and a pair of a different face value; the triple may be lower or higher than the pair. There is one house category, with no small/large distinction. Use the maintainer-supplied scorecard translated into English below, not American Yahtzee scoring.
- Confirmed scorecard (English):

  | Category | Scoring | Maximum |
  | --- | --- | ---: |
  | Ones through sixes | Sum only dice showing that category's face value | 5, 10, 15, 20, 25, 30 |
  | Upper-section bonus | 50 points when the upper-section subtotal is at least 63 | 50 |
  | One pair | Sum of the two matching dice | 12 |
  | Two pairs | Sum of two pairs of different face values | 22 |
  | Three of a kind | Sum of the three matching dice | 18 |
  | Four of a kind | Sum of the four matching dice | 24 |
  | Small straight | Exactly 1–2–3–4–5; fixed score | 15 |
  | Large straight | Exactly 2–3–4–5–6; fixed score | 20 |
  | House (full house) | Triple plus pair of different values; sum all five dice | 28 |
  | Chance | Sum all five dice | 30 |
  | Yatzy | Five matching dice; fixed score | 50 |

  The scorecard's category maxima sum to 105 + 50 + 219 = 374. The supplied text ends in “37,” apparently a truncated total. Keep scoring categories distinct from mutually exclusive probability events: for example, “exactly one pair” is narrower than “contains a pair.” State any additional category-selection or zero-score rules explicitly if an exercise needs them; do not infer unprovided special bonuses or joker rules.

- Use a visual-to-symbolic bridge: one die has 6 outcomes; two dice form a 6×6 outcome grid; three dice can be shown as six 6×6 slices of a cube. Each axis represents a die/throw, not spatial movement. Highlight success cells and explain the counting rule before extending to five dice without asking learners to imagine a five-dimensional cube. Justify the general product rule by unique ordered outcomes: appending one independent six-way result to each existing sequence multiplies its count by six. A picture motivates the rule; the counting argument explains why it continues to hold beyond what can be visualized. Use a small probability tree for conditional reroll decisions rather than forcing every problem into a cube. Explicitly connect checked grid cells to favorable ordered outcomes: probability is checked cells divided by all cells, not checked divided by unchecked (which gives odds in favor). Generalize to `n` independent fair dice with `m` faces each: `m^n` equally likely ordered outcomes and `P(E) = favorable_count / m^n`. Define both symbols locally, and state that only the denominator generalizes automatically; the favorable count depends on the event. For example, all dice showing one specified face has favorable count 1, while at least one showing that face has count `m^n - (m-1)^n`. Derive these counts from the same grid/complement argument before using general notation.
- Focus on probabilities and which dice to hold/reroll, not score optimization; keep the scorecard as a rules reference. First clarify that an independent die has chance 1/6 of showing six on each throw, including after a failure. Distinguish both throws being six (1/36), the first six occurring on the second throw (5/36), and at least one six in two throws (11/36). Use a small outcome tree to show multiplication along a path and addition across disjoint success paths; the second throw's own chance is not reduced by the first throw.
- Challenges: count a specified straight on the first throw; for a three-die example, count how many ordered rolls match a face pattern such as 2, 3, 3 using `n!/(c₁!…cₘ!)`, where each `cᵢ` is that face's multiplicity; count a full house without double-counting; from a displayed hand one die short of a straight, calculate the chance on one final reroll; extend to two remaining rerolls with the same stated holding policy and use the complement of repeated failure. Contrast independent rolls made together with sequential rolls: timing alone changes nothing, but keeping successful dice and changing the next action makes the remaining problem conditional on the current hand.
- Stretch: compare two explicitly specified holding policies for a full-house attempt. State the hand, target, throws remaining, and exactly what is kept after each result. Never call a policy optimal without proving optimality over the allowed choices.
- Check first-throw counts against all `6**5` ordered outcomes. Check rerolls against enumeration or a small exact decision tree; simulations are optional illustrations only.

#### B. A 52-card deck — `docs/practice-cards.html`

- Model: 13 ranks, 4 suits, no jokers; unordered five-card hands drawn uniformly without replacement. For straights, allow ace-low or ace-high but no wraparound. Keep this separate from Yatzy rules.
- Challenges: a specified card or suit in a small draw; exactly one pair in a five-card hand; a full house; a flush or straight with category-overlap conventions stated explicitly (say whether straight flushes are included).
- Stretch: show four cards to a flush, discard the fifth, and calculate the chance that one replacement completes the flush. The discarded card is not returned; the known five-card hand leaves 47 drawable cards. Distinguish this from an entirely new hand.
- Build counts from rank choices and suit choices over the common denominator `C(52, 5)`. Explain exclusions such as “exactly one pair.” Verify with independent combinatorial calculations; exhaustive five-card enumeration is optional and not needed in the browser.

#### C. Infection pathways — `docs/practice-infection.html`

- Provide a tiny hypothetical population table with two disjoint groups (“prior immunity” and “no prior immunity”), fixed group proportions, and conditional risks for one specified exposure scenario. “Prior immunity” means the model's reduced risk, not guaranteed protection. All rates are invented, not estimates for influenza, COVID, or any other real disease.
- Briefly introduce conditional probability, the joint-probability chain rule, and the law of total probability before using them. Link the partition argument to the proof session. Prior immunity, exposure, infection, infectiousness, and symptoms are different events/states.
- Challenges: calculate a joint event such as prior immunity AND infection; combine group-specific risks into the total infection probability; read an explicit day-by-day infectiousness/symptom timeline and identify contacts that carry risk; calculate an expected infection count for a specified exposed cohort.
- Stretch: under explicitly equal and independent infection risks, calculate a probability for the number infected using the binomial model (define that model locally). Explain that expectation can be a non-integer and does not require independence, whereas this binomial calculation does. Repeated exposures of one person are not automatically independent; any product-of-failure calculation must state its conditional-risk/independence assumptions. Avoid modeling an uncontrolled epidemic or cascading infections in this first page.
- Use a stated incubation time for the core timeline; a random incubation distribution and positive-test interpretation can be later extensions rather than overloading this page. Distinguish latent period (infection to infectiousness) from incubation period (infection to symptoms) if that term is used. Specify whether later-day risks are conditional on remaining uninfected.
- Check all probability-tree leaves sum to one, group proportions sum to one, and totals agree with the corresponding hypothetical frequency table. Optional Python calculates the same tree, not a replacement epidemiological simulation.

#### D. Factories, products, and ingredients — `docs/practice-production.html`

- Supply a fully printed 6×4 production matrix (factories by products) and a 4×3 recipe matrix (products by ingredients). Use fictional product names, small nonnegative quantities, and compatible units (product units/day and kg/product unit).
- Challenges: predict the result shape and units; calculate one selected factory/ingredient cell; calculate an entire factory row; derive total daily ingredient requirements across factories.
- The result is a 6×3 matrix in kg/day. Add a short argument explaining why summing factory requirements gives the same totals as first summing production by product and then applying the recipes. This connects matrix calculation to a reusable distributive-law argument.
- Python may calculate the full table after the hand calculation. Validate both routes to the ingredient totals and show that a zero-production row gives zero requirements.

#### E. Feature vectors and similarity — `docs/practice-features.html`

- Use a printed table of 6–8 fictional fruits, labeled by type, with three interpretable features. Supply fixed feature scales and a separate query fruit; do not derive changing scales from the query.
- Briefly define coordinate-wise difference and squared Euclidean distance. Explain that squared distance preserves nearest-neighbor ordering without requiring a square root.
- Challenges: encode a fruit as a vector; calculate differences and distances to two labeled examples; choose the nearest label using a declared tie rule; change one feature scale and explain how the classification can change.
- Do not confuse distance with dot product, a class label with a probability, or a feature representation with a classifier. Closeness is determined by the chosen representation and metric, not universal similarity.
- Optional Python processes all examples. Check self-distance is zero and reversing the comparison gives the same distance. A counterexample with altered scaling should demonstrate the limitation rather than claiming the nearest label is necessarily correct.

#### F. Tiny image scores — `docs/practice-pixels.html`

- Use 2×2 binary images, flattened in top-left, top-right, bottom-left, bottom-right order (1 = ink, 0 = background). Use the hand-designed 4×2 weight matrix with rows `[1, 1]`, `[-1, 1]`, `[1, -1]`, `[-1, -1]`. Label its two columns as left-vertical/top-horizontal pattern detectors; vectors `[1, 0, 1, 0]` and `[1, 1, 0, 0]` should give scores `[2, 0]` and `[0, 2]`, respectively.
- Challenges: encode two pictures; calculate both detector scores for one picture; stack several images in an input matrix and predict/compute the result shape; examine an blank or ambiguous image that ties the detectors.
- Scores are not probabilities and a tie need not choose a class. State a tie rule or return “undecided.” Show a fixed small batch rather than teaching image recognition generally.
- Explain that this is one linear scoring operation, not a trained neural network. Real networks can learn weights and internal representations and use nonlinear operations. Learning does not guarantee better features for every task or dataset.
- Check batch results equal separately computed vector scores. Optional Python is a matrix calculation, not training code.

#### G. Housing-price estimates — `docs/practice-housing.html`

- Use a fictional table of 8–10 houses with three features: floor area in a stated unit, bathroom count, and distance to a named amenity. Print invented sale prices and clearly separate illustrative hand-chosen coefficients from fitted coefficients.
- Introduce a base-price term (intercept) plus a weighted sum; show coefficient units so the contributions are in the same currency. Do not suggest summing raw measurements without dimensional explanation.
- Challenges: construct a feature vector and calculate one predicted price; read what changing one input does while holding the others fixed in this model; calculate prediction errors for a small table; compare two supplied candidate models on held-out examples not used to choose their weights.
- Explain supervised learning as adjusting parameters against known targets. Distinguish fitting from testing on unseen examples, correlation from causation, and estimated sale prices from guaranteed accepted prices. Feature count and parameter count are different; a simple weighted model learns weights on supplied features, not new axes automatically.
- Stop before optimization/training algorithms. An optional sum-of-squared-errors calculation can compare the supplied models; code need not fit a network. Introduce any error formula in words before notation.

#### H. Short proofs to write on paper — `docs/practice-proofs.html`

- Prerequisites: combinations, induction, sums, and the infection session's short probability reminder for the final challenge. The infection page links only to that challenge's explanation; avoid a circular requirement to complete both pages first.
- Challenges: justify combination symmetry using complementary subsets; prove 14 distinct cards must include two of the same rank using 13 rank groups; prove the first `n` odd positive integers sum to `n²` for nonnegative integer `n`; derive total probability by splitting an event into disjoint intersections with groups that cover the sample space.
- Supply optional hints (complement pairing, pigeonhole argument, induction or a square diagram, disjoint cases) without revealing the full argument initially. Define the pigeonhole principle locally and in the glossary.
- Worked answers state a claim, assumptions/domain, and a complete argument ending with a conclusion. Distinguish a proof of a model identity from evidence that the model describes reality. No Python required.

#### Build order and completion checks

- Initial prototype complete: `docs/practice.html` and `docs/practice-yatzy.html` establish the distinct workbook style and paper-first format. Review this prototype before building more sessions. Proposed next order: cards and short proofs; production and feature vectors; infection pathways; pixel and housing previews. Adjust complexity rather than producing eight long lessons at once.
- Before publishing each session, verify every answer independently, its assumptions and units, formula/LaTeX-comment agreement, glossary/anchor links, and any executable code. Keep exact counts/fractions where possible and label decimal approximations.
- Test `<details>` panels with keyboard and touch, hidden-editor initialization, narrow-screen tables, readable MathML/contrast, and the persistent sidebar order across all pages. Rebuild the editor bundle only when relevant source changes require it.
- Practice navigation must not change the current core-lesson sequence. Do not add incomplete placeholders to the reader-facing site. Once a page is finished, add it to the practice overview, overview entry, and shared sidebar consistently.

## Recurring application threads

Use a few familiar application areas as recurring examples, alongside the notation-first exercises:

- **Classic games:** dice games such as Yatzy and card games for counting outcomes, combinations, and probability.
- **Computer science and systems:** loops, algorithm work, randomized procedures, and mathematical guarantees about system behavior. Show how data can be encoded numerically and how structures such as graphs represent entities and relationships.
- **Graphs and databases:** nodes and edges define graph neighbors, often found by traversing adjacency lists or matrices. Keep this distinct from nearest-neighbor search in a vector space; some systems combine graph traversal with vector search, but they are different meanings of “neighbor.”
- **AI and machine learning:** probability for uncertainty and predictions; vectors, matrices, and dot products for representing data, embeddings, and similarity/nearest-neighbor search.
- **Computer graphics:** vectors and matrices for 2D/3D positions, transformations, and rotations.

Use these as motivating contexts where they naturally fit; do not force every notation into every domain. In particular, build the required concepts before using a context-heavy example, and explicitly explain/link any notation that is only being previewed.

## Possible learning roadmap

The order below is provisional; add topics as the project develops and keep the initial scope small.

1. **Summation and indices** — expand notation, distinguish index from summand, write the loop, then introduce `sum()`.
2. **Products and factorials** — introduce `∏` as the multiplication counterpart to `Σ`, then show `n! = ∏(i=1..n) i` with an explicit product loop. Mention `0! = 1` as a useful edge case. Introduce Gamma only as a related future topic, not as part of the first factorial walkthrough.
3. **Probability notation** — outcomes, events, and adding probabilities; then expected value such as `E[X] = Σ_x x P(X = x)` for finite outcomes.
4. **Probability bounds** — for example, the union bound `P(A₁ ∪ ··· ∪ Aₙ) ≤ Σ P(Aᵢ)`, with assumptions and application explained when taught.
5. **Counting and algorithm analysis** — sums as total work, leading toward runtime bounds such as `O(n)` and `O(n log n)`.
6. **Vectors and dot products** — sums of products; distinguish scalar results from vector-valued sums.
7. **Matrices and matrix multiplication** — a cell of the product is a sum of products over the shared dimension.
8. **Program correctness** — preconditions, postconditions, loop invariants, and proof by induction.
9. **Further topics as useful** — the Gamma function as an extension of factorials, concentration inequalities, amortized analysis, optimization/ML, cryptographic reductions, and distributed-systems reasoning.

This roadmap should help connect the refresher to mathematics found in computer-science and engineering white papers, including claims about probability, algorithm performance, and system behavior. A formula is not itself a proof: later lessons should also explain how papers state a model and its assumptions, formulate a claim, and support it through definitions, lemmas, and reasoning.

## Candidate topics from the math-as-code reference

Use `docs/PYTHON-README.md` as a selective source of topic ideas, not as material to port wholesale. It suggests useful future reminders on: equality, definitions, and approximate equality; number sets and set membership; real and complex numbers; piecewise functions, domain/codomain, and mapping arrows; scalar/vector operations (dot, cross, and elementwise products), norms, and determinants; intervals and endpoint conventions; inequalities and logical connectives; absolute value, floor, and ceiling; and prime notation for derivatives as a later-calculus preview. Many topics overlap with the existing roadmap, so introduce them only when prerequisites and a motivating example make them useful.

Fact-check and resequence any adapted example. The source contains outdated NumPy idioms and some inaccurate or overly broad statements. For example, `sum(range(100))` adds 0 through 99 and equals 4950, not 5050; rational numbers do not necessarily have terminating decimal expansions; `ℝ` is not equivalent to Python `float`; and symbol conventions such as boldface vectors are clues, not universal rules. Preserve the useful comparison-based teaching style while explaining context, boundary behavior, types, and assumptions precisely.

## Factorial and Gamma sequencing

Teach the finite product notation and factorial before the Gamma function. For positive integers `n`, `Γ(n) = (n - 1)!`; the offset matters (`Γ(6) = 5!`, not `6!`). A full Gamma lesson should wait until the learner has more context for continuous functions/calculus or probability distributions. When first mentioned in the factorial lesson, label Gamma as a preview and link to its future lesson only once that lesson exists.

## General terms and function-based summands/factors

After the basic summation and product loops are comfortable, show that the loop structure stays the same when the expression being added or multiplied becomes more complex. In notation, generalize from `i` to a term such as `f(i)`; in Python, calculate that term directly or put it in a helper function once `def` has been introduced.

When the learner first meets a sum whose summand is itself a nontrivial expression, explicitly substitute each small index value into the whole summand and show the resulting terms before evaluating. For example, expand `Σ(k=5..6) P(X = k)` as `P(X = 5) + P(X = 6)`. Do not assume that fluency with `Σ(i=1..n) i` automatically makes this generalization obvious; name the summand and make the substitution step visible.

For example, a product loop can keep the same bounds and accumulator while replacing `product * i` with `product * factor_for(i)`.  Explain that `f(i)` is the term/function value for the current index and that the index bounds and per-step expression have separate roles. Use this as a bridge from simple sigma/product examples to more complex formulas. When showing powers, note that Python uses `**` for exponentiation (`^` means something else in Python).

Add a small **math notation to Python syntax** reference for operators and functions actually used in lessons. Treat an ASCII caret such as `x^2` in a math discussion as an exponent; translate it to Python `x ** 2`. Explicitly warn that Python `^` is bitwise XOR, not exponentiation. Explain that Python has no root operator: `math.sqrt()` handles square roots, `math.cbrt()` handles cube roots in Python 3.11+, and a general n-th root of a nonnegative value can be written as a fractional power (typically an approximation). Distinguish bit-shift operators (`<<`, `>>`) as separate programming topics outside this math refresher, rather than mixing them into the notation lessons.

## Mathematical terminology glossary

Build a compact, cumulative glossary as a separate quick reference, alongside the notation/Python reference. Add terms as they appear in lessons rather than presenting a large unexplained vocabulary list. Each entry should give a plain-English description of the term's job, a small notation or example, and a link to the lesson that teaches it. Where a word-part clue is genuinely useful and accurate (for example, `bi-` in *binomial*), explain it as a memory aid while keeping the formal mathematical definition clear. Mark terms from future topics as previews, and define unfamiliar terminology at first use in the lessons regardless of whether the learner has visited the glossary. Include a short entry for the Monte Carlo method/simulation: repeated sampling can estimate probabilities and other difficult quantities, but simulation is evidence about a model's behavior, not a proof that the model or its assumptions are correct. Open the glossary non-destructively from lessons, using the same contextual reference pattern, and keep a standalone lookup page available.

## Website and Python console

- Use native MathML Core markup for mathematical expressions so subscripts, superscripts, fractions, roots, sums, and matrices use mathematical layout rather than ordinary HTML text styling. Keep variables in prose as normal HTML where they are not part of displayed notation.
- Immediately adjacent to each authored MathML expression, add a non-rendering HTML comment containing its equivalent LaTeX source (for example, `<!-- LaTeX: \\sum_{i=1}^{n} i -->`). Treat the MathML as the rendered/accessibility source and the comment as a human-readable editing aid; keep them in sync.
- Build the handbook with HTML, CSS, and plain JavaScript. Do not use TypeScript.
- Provide a consistent way to jump between lesson pages. Recommended pattern: a left-side table-of-contents sidebar on wider screens, with a clearly labeled click/tap control to collapse or open it; use the same control as an off-canvas/drawer navigation on small screens. Do not make navigation depend on hover, so it remains discoverable and usable with touch, keyboard, and assistive technology. Include a prominent **Notation quick reference** link and organize lesson links into topic groups; clearly mark the current lesson.
- Add previous/next page controls near both the top and bottom of each lesson so learners can move sequentially without reopening the contents. Link to adjacent available pages; at the start/end of the current sequence, show a clear non-clickable boundary state rather than a misleading link. Only present planned lessons as unavailable/coming later if that distinction is clear.
- Include handy notation quick-reference/collection pages. Start with one all-notation index, organized into topic groups; split it into topic-specific collections later if it becomes unwieldy. Each entry should show the notation, its English name, and a brief plain-language reminder, then link to the in-depth lesson. In-depth lessons should link back to their quick-reference entry or collection. Keep these pages as fast lookup aids rather than substitutes for the expanded lessons.
- Add the compact **Math notation → Python syntax** reminder as a clearly labeled section/box on the all-notation quick-reference page to start; it is a reference, not a sequential lesson. Keep the fold-out sidebar focused on navigation, but open the reference as a modal overlay from lesson pages so learners retain their current page and scroll position. Keep the standalone reference page available too, and add small contextual triggers beside relevant code examples. Do not add a separate Python-reference page unless this section grows. Keep the reference out of the lesson previous/next sequence.
- It must be stand-alone and require no server: the intended experience is opening the handbook locally in a browser, with no backend or local web server. Opening the finished page should not require a build step; regenerating development bundles may use a build script.
- The learning/code examples in the editor are Python, not JavaScript.
- Use Pyodide, compiled to WebAssembly, to execute actual Python locally in the browser; no application backend is planned.
- Load the Pyodide runtime only when the learner first runs code. The current prototype fetches the pinned runtime from a CDN, so first use requires an internet connection even though no server is required to open the page.
- Run Python in a Web Worker with an execution timeout so an accidental infinite loop does not freeze the page. Treat this as a responsiveness safeguard, not a claim that arbitrary code is perfectly sandboxed.
- Console basics: editable starter code, Run and Reset controls, readable output and errors, and small exercises tied to lesson content.
- Clarify the offline goal later: a static site can be hosted without a backend, but a runtime fetched from a CDN would still require a network on first load. If offline use is required, include the runtime assets with the site and account for their size.

## Existing material

- `docs/math_proof_syntax.md` is existing exploratory material that may provide ideas and examples; review and fact-check it before adapting it into lessons.
- `docs/math_proof_syntax.html` appears to be a generated HTML rendering. Prefer working from the Markdown source when reusing content.
- Do not port the existing material wholesale: it mixes many topics and needs editorial review for accuracy, scope, and beginner-friendly sequencing.

## Decisions still open

- Whether the site must work fully offline, or whether loading Pyodide from a CDN on first run is acceptable for the stand-alone, no-server handbook.
- Whether lesson content should live directly in HTML/JavaScript or in separate Markdown/data files.
- Exact sidebar/drawer details, labels, and topic categories can be finalized when implementing navigation; the starting structure is an all-notation quick-reference link plus grouped lesson links.
- The final first-release topic scope and whether code progress should be saved between visits.

## Working rules

- Write notation explanations, project plans, and other durable planning material in Markdown files so they can be revisited and updated.
- Keep the project plan and agreed decisions in `PLAN.md`; use the chat to discuss ideas and then record durable agreements in the relevant Markdown file.
- When a specific external example would help choose, explain, or fact-check a topic, ask the learner to share the relevant link or excerpt. Prefer the passage that prompted the question over an entire article, then review it selectively and verify its claims.
- Put any helper, build, or check scripts in a `scripts/` directory.
- Use `uv` to create and run Python scripts. Declare any third-party dependencies in the script's inline PEP 723 metadata block at the top, and run it with `uv run` so dependencies are managed in an isolated script environment. Avoid adding project-wide Python dependencies for one-off helper scripts.

## Current status

- The first optional practice prototype is live in `docs/practice.html` and `docs/practice-yatzy.html`. The Yatzy page uses the maintainer-confirmed five-dice, initial-roll-plus-two-rerolls rules; focuses on fair independent outcomes, the 6×6 two-dice grid, favorable/all outcomes versus odds in favor, a complement count, generalization to `n` dice with `m` faces, counting ordered arrangements of a repeated face pattern (`2, 3, 3`) with `n!/(c₁!…cₘ!)`, and the chance of completing 1–2–3–4–5 when one die is rerolled up to twice. It uses a distinct workbook-style design, closed hint/worked-reasoning panels, and no required code. Linked from the overview and a stable Practice group in every page sidebar. `bash scripts/build_site.sh`, `git diff --check`, and local-link/anchor checks pass; browser review confirms the hub and activity render.
- Sixteen sequential lesson pages now exist in `docs/`, the GitHub Pages publishing folder: the letters-and-notation guide (`letters.html`), summation lesson (`summation.html`), products/factorials lesson (`products.html`), probability lesson (`probability.html`), expected-value lesson (`expectation.html`), probability-bounds lesson (`probability-bounds.html`), counting-work lesson (`counting-work.html`), vectors/dot-products lesson (`vector-dot-product.html`), matrix-multiplication lesson (`matrix-multiplication.html`), program-correctness lesson (`program-correctness.html`), proof-by-induction lesson (`induction.html`), factorial-sum synthesis lesson (`sum-of-factorials.html`), combinations lesson (`combinations.html`), dice-probability synthesis lesson (`dice-probability.html`), dot-product/matrix-product synthesis lesson (`matrix-product-application.html`), and Bézier-curve capstone lesson (`bezier-curve.html`). `index.html` is now the handbook overview and learning path, linking the foundations, their connections, and synthesis/application examples. Separate non-sequential reference pages include `quick-reference.html` for notation and Python syntax and `glossary.html` for plain-language mathematical terms; both are available as standalone pages and open in a modal overlay from lesson sidebars to preserve the current page and scroll position. The letters and summation lessons preview probability notation and link to its full lesson.
- MathML Core migration is underway: `letters.html`, `products.html`, `probability.html`, `expectation.html`, `counting-work.html`, `vector-dot-product.html`, `matrix-multiplication.html`, `program-correctness.html`, `induction.html`, `sum-of-factorials.html`, `combinations.html`, `dice-probability.html`, `matrix-product-application.html`, `bezier-curve.html`, `glossary.html`, `quick-reference.html`, and the new overview `index.html` render their marked-up expressions with native MathML and adjacent LaTeX comments. The relocated `summation.html` remains partially migrated; other pages and remaining plain-text mathematical notation still need an audit. Keep tracking this as incomplete until all mathematical expressions are checked.
- The notation/Python quick reference now has a compact Math → plain English → Python comparison for a four-term sum, 4!, and a two-component dot product. It expands each small calculation before showing a runnable Python check, explains `range`'s exclusive stop and Python's zero-based positions, states the dot-product equal-length assumption, and links to the explicit-loop lessons. This belongs in the reference rather than crowding the overview.
- The sidebar groups pages by topic: core notation, probability and counting (including combinations), linear algebra, proofs and algorithms, synthesis and applications (factorial sum, dice probability, dot products inside a matrix product, and the Bézier-curve capstone), and quick references. Each page has a distinct Start here link to the handbook overview; the wordmark also returns there. Both notation/Python and glossary references open non-destructively in the shared modal; contextual triggers can open a glossary section directly. Program correctness is an applied reasoning lesson; induction is a general proof technique, so the grouping presents them as related proof topics rather than calling them basic notation foundations.
- All pages share a grouped, click/tap-controlled navigation sidebar that is visible and collapsible on wider screens and becomes a drawer on small screens. Previous/next controls appear at the top and bottom of lesson pages only, with clear boundary states at the beginning/end of the sequence. Direct local-file navigation between pages and the desktop collapse/reopen interaction have been verified.
- The former `index.html` summation lesson now lives at `summation.html`; every navigation and cross-reference was redirected. The new `index.html` overview explains the learning journey, groups foundation lessons by topic, shows how sums, probabilities, combinations, vectors, matrices, proofs, and Bézier curves connect, and links to available synthesis and application lessons.
- The summation lesson includes displayed and inline notation layouts, examples with different inclusive bounds (including a probability threshold), paired notation/read-aloud panels, a CodeMirror 6 Python editor, Run button, output/error display, Pyodide execution in a Web Worker, and a shorter `sum(range(...))` example that can be loaded into the editor.
- The products/factorials lesson introduces `∏`, factorial notation (including `0! = 1`), an explicit multiplication loop, a `for`-loop version, and a final `math.prod()` shortcut. Each Python variant loads into the shared editor; all three product-code versions were tested to print `24`. The factorial walkthrough also includes `5! = 120` and a three-distinct-books permutation example (`3! = 6`). A brief, explicitly out-of-scope preview introduces non-integer factorials via `x! = Γ(x+1)`, illustrates `(1/2)! = √π/2`, and uses an accessible SVG graph of `Γ(x+1)` with integer factorial points and an inset of the dip between 0! and 1!. It clarifies that `math.factorial` only accepts nonnegative integers. The same source file's selection, probability, and growth examples are now covered too: the lesson derives ordered `P(n,r)` and unordered `C(n,r)` counts, works a five-candidate team example, carefully distinguishes all-one-suit hands from the standard poker flush category (which excludes 40 straight flushes), and shows why trying every permutation can have factorial growth `O(n!)` without claiming every such algorithm checks exactly `n!` cases.
- The probability lesson defines outcomes, events, equally likely outcomes, and a random variable using a fair-die example; it reads `P(E)` and `P(X = k)` aloud, explicitly substitutes `k = 5` and `k = 6` into the nontrivial summand `P(X = k)`, connects event probabilities to summation, and cautions that favorable/all outcomes applies only to finite equally likely outcomes. Its Python code now follows those symbols: `k` is a possible value of `X`, `p_x_at_least_5` maps to `P(X >= 5)`, and comments show the substitution `k = roll = 6`. In simulations, `x` is one observed value of `X`, `j` numbers trials, and `N` is the trial count; sample-size helpers use the equation's `p`, `N`, `z`, and `m`. The count, exact-`Fraction`, simulation, and sample-size variants were tested in Pyodide. The lesson also includes seeded Monte Carlo simulations at 1,000 and at 10/100/1,000/10,000 rolls, distinguishes simulation evidence from mathematical proof, warns that small samples can be unrepresentative, and gives an intuitive law-of-large-numbers preview while separating sampling fluctuation from real-world model mismatch. An optional sample-size preview reads the approximate margin formula aloud and includes reusable Python helpers for margin and trial-count estimates. The simulations and helpers were tested in Pyodide; their results match the displayed checkpoint table and sample-size estimates. The sample-size code reports margins as percentage points (e.g. ±9.24 points), distinct from the 95% confidence level; it clarifies that 95% is the confidence level, not the margin.
- The expected-value lesson follows probability: it reads `E[X] = Σ k P(X = k)` aloud, substitutes every die outcome into the whole weighted term, evaluates the exact fair-die expectation as `7/2 = 3.5`, and explains why an expected value need not be a possible single outcome. Its explicit `Fraction` loop and seeded sample-average simulation were both run in Pyodide; results matched the page (`7/2`, `3.5`, and sample means 3.4, 3.575, 3.4982). The quick reference now includes `E[X]`, and probability links forward to this lesson.
- The probability-bounds lesson introduces the union bound, expands the `i = 1, 2` case term by term, and demonstrates why overlapping events may make the bound loose without requiring independence. Its outcome table uses `A₁ = {2, 4, 6}` (even) and `A₂ = {4, 5, 6}` (greater than 3), showing `P(A₁ ∪ A₂) = 4/6 = 2/3 ≤ P(A₁) + P(A₂) = 1`; an accessible two-event proof separates `A₂ \ A₁`. The Python example maps `A_1`, `A_2`, `P_union`, and `upper_bound` to the notation and explicitly counts overlap.
- The counting-work lesson connects loop iterations to sums: one loop performs `n` steps, while two fixed nested loops each running `n` times perform `n²`. It also contrasts this with recursively processing length-`n` sequences with `n` options at every position, giving `n^n` counted operations. Four Python function examples compare `n^n`, `n²`, `n`, and constant work, with pseudocode comments describing the useful operation being counted. A Fibonacci comparison then shows how a short naïve recursive implementation makes 331,160,281 calls for `n = 40`, while a longer iterative implementation takes 40 loop passes; both return `F₄₀ = 102,334,155`. It distinguishes exact counts from Big O growth and notes that printing a closed-form count is not the same as performing the counted work. The letters-and-notation guide now includes `F_n`, Big O, theta (`Θ`), and the distinction between case labels and growth bounds.
- The vectors and dot-products lesson introduces vectors as ordered components and the dot product as multiplying matching components and summing them. It fully expands a two-component example (`2 × 4 + 3 × 5 = 23`), identifies the scalar result and equal-length requirement, clarifies that the centered dot is an operation symbol rather than a location and that a negative dot product means an angle greater than a right angle (exactly opposite is the special straight-angle case), explains displacement vectors as end coordinates minus start coordinates, explains that any finite dimension is mathematically allowed while practical vectors are limited by memory and time, maps the math's one-based component index to Python's zero-based list indices in an executable loop, includes a shorter `operator.mul`/`map`/`sum` version, contrasts its silent truncation with the explicit loop's `IndexError` when the second vector is shorter, and explains the equal-length requirement, and links to a glossary definition of the standard Euclidean coordinate system used in the example.
- The matrix-multiplication lesson follows dot products: it names input matrices A and B and output C, explicitly defines C = AB before any C cell appears, traces the symbolic and numeric construction of the first cell and all four cells of a two-by-two product (19, 22, 43, 50), explains the general row/column/shared-index summation and a separate shape check that explicitly compares A’s column count with B’s row count (rather than relying on 'inside matches'), then works through a two-by-three times three-by-two example (three products per output cell) and a three-by-two times two-by-one example (a column-shaped result), and shows a Python triple loop followed by a loadable functional-style alternative using `transpose`/`zip`, `itertools.product`/`starmap`/`batched`, and `math.sumprod` (Python 3.12+). The alternative names the number of output columns correctly, omits an unused `prod` import, and explains its tuple rows and shape assumptions. The letters guide documents new matrix symbols and index roles. Python lists are zero-indexed, while the mathematical formula is one-indexed.
- The program-correctness lesson uses the original summation loop to teach preconditions, postconditions, the invariant that `total` sums exactly the integers through `i`, a trace including loop exit at `i == n`, the empty-sum edge case `n = 0`, and the start/maintain/finish proof pattern including termination. The loop begins at `i = 0`, increments before adding, and stops at `i == n`; executable assertions check the input assumption, loop boundary, and result for a particular run, without being presented as a universal proof. The guide defines the new correctness terms. The starter code was checked for `n = 0, 1, 4, 10`; the optional editor is not presented as a proof.
- The factorial-sum synthesis lesson follows proof by induction in the page sequence, but is separately grouped as synthesis in the sidebar. It applies the summation and factorial lessons to `Σ(k=1..4) k!`: first substitutes the whole factorial summand for `k = 1, 2, 3, 4`, then evaluates the factorials (1, 2, 6, 24) and adds them to get 33. Its optional nested-loop Python code calculates each factorial term and accumulates the sum, rather than merely printing a formula. A further application introduces the sine Taylor series as an infinite sum with factorial denominators, expands it at one radian, and shows finite partial sums. For this alternating, decreasing example, it uses the first omitted term as an error bound to motivate choosing the upper index from a target tolerance; an optional editor variant calculates the approximation and compares it with `math.sin(1)`. A related `e^x = Σ(k=0..∞) x^k/k!` example connects the source notes' exponential series and explains its first term using `0! = 1`; the Python variant is in a sibling section below the editor/output panel.
- The standalone glossary (`glossary.html`) organizes the handbook's terminology into notation, counting/sets (including membership, subsets, union, intersection, cardinality, common number sets, binomials, coefficients, combinations, and Pascal’s triangle), probability, linear algebra, series/approximation (including Taylor series), factorial extensions (Gamma function), permutations, curves/graphics (including Bézier curves, control points, the Bernstein basis, polynomials and their monomial/binomial/trinomial special cases, polynomial degree, and vector coefficients), and proof/algorithm groups. Entries give plain-language definitions, small examples, and lesson links; the probability terms now include independent events and powers, and the Monte Carlo entry explicitly distinguishes simulation evidence from proof. A glossary search filters terms and definitions and can jump to the first match. Lesson sidebars open it in the shared modal, and the combinations code example can open directly at its new terms.
- The combinations lesson follows the factorial-sum synthesis page. It first defines finite sets and subsets locally, with brace notation, because combinations count subsets; this is a focused introduction rather than assuming prior set-theory fluency. It distinguishes unordered groups from ordered selections using the A/B/C example, derives `n! / (r!(n-r)!)` by counting ordered selections and removing the `r!` orderings of each group, checks boundary cases, explicitly explains that the formula’s value is a count of distinct groups (not a group or probability), and uses a two-six-sided-dice example to count 15 unordered pairs of different face values, then distinguish those from 30 ordered rolls with different faces and 36 total ordered outcomes including doubles. Pascal’s triangle is shown as a visual way to read/build coefficients (top row is row zero; inner entries add the two above). The lesson includes optional Python enumeration and a factorial-formula comparison. Its notation and terms are added to the letters guide and quick reference. Sidebar link ordering is consistent across pages so the current-page highlight does not make Combinations jump relative to Counting work.
- The letters-and-notation guide now explains set membership (`∈`, `∉`), subsets (`⊆`), union/intersection, the empty set, cardinality, the common number sets (`ℕ`, `ℤ`, `ℚ`, `ℝ`, `ℂ`), and the roles of `P(n,r)`, `C(n,r)`, `Γ`, `k`, and `K` in the factorial and Taylor examples. It connects these to `ℝ^d` as the set of d-component real vectors. The quick reference now includes the set relations and number-set symbols.
- The dot-product/matrix-product synthesis lesson follows the dice-probability lesson in the sequential navigation and is grouped with the other synthesis pages in the sidebar. It uses a project-prioritization example: rate two proposals from 1 to 5 on impact and feasibility, assign criterion weights 3 and 4, then dot each proposal's rating row with the weight vector to get scores 20 and 25. Proposal B ranks higher under these assumptions. The lesson explains that weighted scoring is used to compare options across multiple criteria, while noting that scores depend on chosen ratings and weights and are not probabilities or objective proof. It explains matrix/vector shapes, defines weights and weighted sums locally, provides optional Python that repeats one dot product per proposal, documents the example-specific roles of R, w, and s in the letters guide, and links to a glossary definition of weighted sum.
- The Bézier-curve capstone follows the matrix-product application. It starts from three 2D control points and includes an accessible SVG linking the control polygon, curve, and halfway point to their coordinates and power formula. It explains the quadratic curve first as a Bernstein weighted blend, then as a polynomial in powers of t, defining polynomials and distinguishing polynomial degree from angle measure or trigonometry. It derives the general coefficient formula from the binomial theorem and factorial identities, explains the empty-product edge case and how scalar powers scale vector coefficients component by component, and samples the curve at five parameter values in optional Python, applying the Bernstein weights to the control points and mapping each output coordinate to a pixel position. It notes the numerical-cancellation risk of high-degree power-basis evaluation and previews de Casteljau's method as an alternative.
- The dice-probability synthesis lesson follows combinations. It finds the chance of at least two sixes in three independent rolls by separately counting exactly two (3 position patterns × 5 remaining faces = 15 sequences) and exactly three (1 sequence), then dividing 16 favorable sequences by 216 equally likely outcomes to get 2/27 (about 7.41%). It also derives the same result from a sum over k = 2, 3, carefully distinguishing combination counts of positions from complete roll outcomes. The optional Python triple loop enumerates all 216 sequences and counts the 16 successes. A seeded Monte Carlo simulation of three-roll trials uses `Fraction` to display exact sample ratios alongside the true `2/27` probability; checkpoint estimates approach about 7.4% without claiming to prove the result. New glossary entries define independent events and powers.
- The proof-by-induction lesson follows program correctness and proves the first-n-integers formula for nonnegative integers: base case at zero (empty sum), assumption for an arbitrary `k`, algebra for `k+1`, and the conclusion connecting those steps. Python compares the loop and formula for a chosen value as an optional check, explicitly not as a proof. The letters guide defines the induction hypothesis and explains `k`’s context-dependent role.
- Python worker output now preserves line breaks between separate `print()` calls for both standard output and standard error. Verified with the probability and expected-value examples. The CodeMirror editor soft-wraps long lines; keep mapping comments concise and explain the correspondence outside the editor as well. The editor has a 420-pixel minimum height. On page load, reset, and loading a prebuilt example, JavaScript estimates the wrapped line count and sets the editor height with room below the last line; adding lines during manual editing does not resize it on every keystroke, and the editor scrolls internally instead. A viewport resize recalculates the fit. Twenty pixels of padding on the shared scroller (not separate code/gutter padding) preserves line-number alignment and bottom breathing room. Loading a code variant now scrolls to and focuses the shared editor; a **Reset to starter code** control restores the page's original example.
- The shared CodeMirror editor now uses a high-contrast dark Python syntax palette, a vivid blue selection highlight that also overrides CodeMirror's transparent native selection on the active line/end of a drag, a clearer cursor and focus outline, and visible matching-bracket/search-match styling. The theme is shared across pages; its bundle and stylesheet cache versions were bumped. Verified that the selection background and token colors render in the browser and that the concise dot-product version still loads into the editor.
- Verified that the pages, bundled editor, and Python execution work when opened directly from a local `file://` URL. Code runs in the browser; the first run downloads Pyodide from a CDN and therefore needs internet access.
- The Python example uses `n = 4`, `i = 1`, and a running `total`; its `while i <= n` condition includes the final term. A note explains the equivalent `range(1, n + 1)` boundary.
- CodeMirror build dependencies are in `docs/package.json`; the generated local bundle is `docs/editor.bundle.js`. Rebuild it with `scripts/build_site.sh` after `npm install --prefix docs`.
- Agreed direction: make notation reading and expansion the central learning outcome; start with summation, show simple and nontrivial contexts early, and explicitly defer vectors, dot products, and matrices to later lessons.
