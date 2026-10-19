# Math Refresher — Plan

## Purpose

Build a small, stand-alone webpage to help Jakob refresh mathematical notation and regain confidence reading mathematical expressions, derivations, and proofs—especially when notation feels compressed or unfamiliar.

The central goal is **notation fluency**: learn to read notation aloud, identify what each part is doing, and expand or “compile” it into explicit arithmetic and Python. The aim is not merely to memorize formulas or rush to advanced topics. When faced with a dense expression, the learner should have a reliable way to begin unpacking it rather than freeze.

The learner has encountered some mathematical terminology in Swedish and wants to learn the English names for concepts and notation. **All project content and explanations should be in English; do not use Swedish.**

## Learning principles

- Treat notation as a compact set of instructions that can be unpacked step by step.
- Separate the roles of symbols: for example, an index/counter is not necessarily the value contributed to a sum.
- Start with small, concrete examples; then show where the same notation appears in more complex subjects.
- Avoid mixing too much at once: give each lesson one main learning goal, introduce unfamiliar ideas only as brief, clearly labeled previews, and save fuller cross-topic combinations for dedicated synthesis lessons.
- Make the boundary between “what we know now” and “what we will learn later” explicit. A learner can recognize one part of a larger formula without understanding the whole formula yet.
- Do not introduce unfamiliar notation or terminology without acknowledging it. Briefly explain the new piece where it appears, label it as a preview if it is not the lesson focus, and link to its guide or in-depth lesson/anchor when available. If no dedicated page exists yet, define it locally and record that a fuller explanation is planned.
- For each key formula or new notation, show its natural spoken reading directly beside it in a clearly paired **NOTATION / READ IT ALOUD** layout. Translate the operation and full relationship into natural spoken English (including words such as “equals,” “at least,” and what the sum adds); do not merely pronounce a sequence of symbol names such as “sigma, n, k equals.” Stack the paired columns on narrow screens.
- Make the reading visibly distinct with a calm sage panel and a lightly semibold serif body, but keep it visually attached to the formula rather than styling it like a detached editorial quote or alert. Keep expansions and explanatory text outside the read-aloud panel at normal weight. Use a separate warm sand/yellow accent for numeric substitution or “try a small value” examples.
- Show basic Python first: explicit variables, loops, and arithmetic. Avoid `math` and shortcuts such as `sum()` in the first derivation. Introduce built-ins afterward as useful shorthand, not magic.
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

These are teaching stages, not a claim that the shortest version is always best. Explain what each step hides or makes clearer, and keep the same meaningful variables from the math where practical. Use only as many versions as genuinely help; two are enough when there is no useful middle step. The products/factorials lesson validates a useful three-step ladder: explicit `while` loop → `for`/`range` loop → standard-library helper such as `math.prod()`.

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

## Synthesis lessons: putting ideas together

After a small group of related topics has been introduced, add a “put it together” lesson or practice page that combines them. These should feel like a natural next step, not a sudden jump: only rely on ideas already taught, explicitly preview and link any new notation, read the combined expression aloud, expand it in stages, and work through it in Python using the progressive-code pattern.

Recommended next lesson: **A sum of factorials**. It is a low-friction synthesis page using notation already introduced: expand a small expression such as `Σ(k=1..4) k! = 1! + 2! + 3! + 4! = 33`, then calculate it with explicit loops. Make clear how each index value is substituted into the whole summand before evaluating, and distinguish the notation's calculation from merely printing a formula.

Other possible synthesis lessons, once their prerequisites are covered:

- After probability, counting/binomial coefficients, and factorials: calculate a small dice probability, such as the chance of at least two sixes on three dice. This can bring together `P(X ≥ 2)`, summation, combinations, powers, and multiplication.
- After vectors and dot products: connect a dot product to one entry of a matrix product.

### Capstone target: the polynomial form of a Bézier curve

Use the polynomial form the learner shared as a longer-term synthesis target, not as a cold introductory example:

\[
\mathbf{B}(t)=\sum_{j=0}^{n} t^j\mathbf{C}_j,
\qquad
\mathbf{C}_j=\frac{n!}{(n-j)!}\sum_{i=0}^{j}\frac{(-1)^{i+j}\mathbf{P}_i}{i!(j-i)!}
=\left(\prod_{m=0}^{j-1}(n-m)\right)\sum_{i=0}^{j}\frac{(-1)^{i+j}\mathbf{P}_i}{i!(j-i)!}.
\]

By then, learners should have met sums, products, factorials, powers, functions, and vectors; introduce the Bernstein basis and binomial-theorem step needed for the derivation. Unpack the separate jobs of `i`, `j`, and `m`, read the outer polynomial sum and inner coefficient sum aloud, and show why `n!/(n-j)!` equals the finite product. Make the edge case concrete: at `j = 0`, the product is empty and equals 1, and the inner sum gives `C₀ = P₀`. Start with a low-degree curve and, where useful, one coordinate before lifting the calculation to vector control points. Then implement the small case in Python, using `Fraction` when exact rational coefficients help and ordinary floating-point evaluation when discussing practical curve evaluation. Explain that the expanded power-basis form can be less numerically stable for high degrees; present de Casteljau's algorithm as a later alternative/preview rather than implying the algebraic formula is wrong.

Treat these as cumulative exercises that build confidence reading a fuller expression, not as a demand to master every connected topic at once.

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

- Twelve sequential lesson pages now exist in `frontpage/`: the letters-and-notation guide (`letters.html`), summation lesson (`index.html`), products/factorials lesson (`products.html`), probability lesson (`probability.html`), expected-value lesson (`expectation.html`), probability-bounds lesson (`probability-bounds.html`), counting-work lesson (`counting-work.html`), vectors/dot-products lesson (`vector-dot-product.html`), matrix-multiplication lesson (`matrix-multiplication.html`), program-correctness lesson (`program-correctness.html`), proof-by-induction lesson (`induction.html`), and factorial-sum synthesis lesson (`sum-of-factorials.html`). A separate non-sequential quick-reference page (`quick-reference.html`) collects notation and Python syntax reminders; lesson pages open it in a modal overlay to preserve the current page and scroll position, while the standalone page remains available. The letters and summation lessons preview probability notation and link to its full lesson.
- MathML Core migration is underway: `letters.html`, `products.html`, `probability.html`, `expectation.html`, `counting-work.html`, `vector-dot-product.html`, `matrix-multiplication.html`, `program-correctness.html`, `induction.html`, `sum-of-factorials.html`, and `quick-reference.html` now render their marked-up expressions with native MathML and adjacent LaTeX comments. `index.html` is partially migrated; other pages and remaining plain-text mathematical notation still need an audit. Keep tracking this as incomplete until all mathematical expressions are checked.
- The sidebar groups pages by topic: core notation, probability and counting, linear algebra, proofs and algorithms, synthesis, and quick references. Program correctness is an applied reasoning lesson; induction is a general proof technique, so the grouping presents them as related proof topics rather than calling them basic notation foundations.
- All pages share a grouped, click/tap-controlled navigation sidebar that is visible and collapsible on wider screens and becomes a drawer on small screens. Previous/next controls appear at the top and bottom of lesson pages only, with clear boundary states at the beginning/end of the sequence. Direct local-file navigation between pages and the desktop collapse/reopen interaction have been verified.
- The summation lesson includes displayed and inline notation layouts, examples with different inclusive bounds (including a probability threshold), paired notation/read-aloud panels, a CodeMirror 6 Python editor, Run button, output/error display, Pyodide execution in a Web Worker, and a shorter `sum(range(...))` example that can be loaded into the editor.
- The products/factorials lesson introduces `∏`, factorial notation (including `0! = 1`), an explicit multiplication loop, a `for`-loop version, and a final `math.prod()` shortcut. Each Python variant loads into the shared editor; all three product-code versions were tested to print `24`.
- The probability lesson defines outcomes, events, equally likely outcomes, and a random variable using a fair-die example; it reads `P(E)` and `P(X = k)` aloud, explicitly substitutes `k = 5` and `k = 6` into the nontrivial summand `P(X = k)`, connects event probabilities to summation, and cautions that favorable/all outcomes applies only to finite equally likely outcomes. Its Python code now follows those symbols: `k` is a possible value of `X`, `p_x_at_least_5` maps to `P(X >= 5)`, and comments show the substitution `k = roll = 6`. In simulations, `x` is one observed value of `X`, `j` numbers trials, and `N` is the trial count; sample-size helpers use the equation's `p`, `N`, `z`, and `m`. The count, exact-`Fraction`, simulation, and sample-size variants were tested in Pyodide. The lesson also includes seeded Monte Carlo simulations at 1,000 and at 10/100/1,000/10,000 rolls, distinguishes simulation evidence from mathematical proof, warns that small samples can be unrepresentative, and gives an intuitive law-of-large-numbers preview while separating sampling fluctuation from real-world model mismatch. An optional sample-size preview reads the approximate margin formula aloud and includes reusable Python helpers for margin and trial-count estimates. The simulations and helpers were tested in Pyodide; their results match the displayed checkpoint table and sample-size estimates. The sample-size code reports margins as percentage points (e.g. ±9.24 points), distinct from the 95% confidence level; it clarifies that 95% is the confidence level, not the margin.
- The expected-value lesson follows probability: it reads `E[X] = Σ k P(X = k)` aloud, substitutes every die outcome into the whole weighted term, evaluates the exact fair-die expectation as `7/2 = 3.5`, and explains why an expected value need not be a possible single outcome. Its explicit `Fraction` loop and seeded sample-average simulation were both run in Pyodide; results matched the page (`7/2`, `3.5`, and sample means 3.4, 3.575, 3.4982). The quick reference now includes `E[X]`, and probability links forward to this lesson.
- The probability-bounds lesson introduces the union bound, expands the `i = 1, 2` case term by term, and demonstrates why overlapping events may make the bound loose without requiring independence. Its outcome table uses `A₁ = {2, 4, 6}` (even) and `A₂ = {4, 5, 6}` (greater than 3), showing `P(A₁ ∪ A₂) = 4/6 = 2/3 ≤ P(A₁) + P(A₂) = 1`; an accessible two-event proof separates `A₂ \ A₁`. The Python example maps `A_1`, `A_2`, `P_union`, and `upper_bound` to the notation and explicitly counts overlap.
- The counting-work lesson connects loop iterations to sums: one loop performs `n` steps, while two fixed nested loops each running `n` times perform `n²`. It also contrasts this with recursively processing length-`n` sequences with `n` options at every position, giving `n^n` counted operations. Four Python function examples compare `n^n`, `n²`, `n`, and constant work, with pseudocode comments describing the useful operation being counted. A Fibonacci comparison then shows how a short naïve recursive implementation makes 331,160,281 calls for `n = 40`, while a longer iterative implementation takes 40 loop passes; both return `F₄₀ = 102,334,155`. It distinguishes exact counts from Big O growth and notes that printing a closed-form count is not the same as performing the counted work. The letters-and-notation guide now includes `F_n`, Big O, theta (`Θ`), and the distinction between case labels and growth bounds.
- The vectors and dot-products lesson introduces vectors as ordered components and the dot product as multiplying matching components and summing them. It fully expands a two-component example (`2 × 4 + 3 × 5 = 23`), identifies the scalar result and equal-length requirement, clarifies that the centered dot is an operation symbol rather than a location and that a negative dot product means an angle greater than a right angle (exactly opposite is the special straight-angle case), explains displacement vectors as end coordinates minus start coordinates, explains that any finite dimension is mathematically allowed while practical vectors are limited by memory and time, maps the math's one-based component index to Python's zero-based list indices in an executable loop, includes a shorter `operator.mul`/`map`/`sum` version, contrasts its silent truncation with the explicit loop's `IndexError` when the second vector is shorter, and explains the equal-length requirement, and links to a glossary definition of the standard Euclidean coordinate system used in the example.
- The matrix-multiplication lesson follows dot products: it names input matrices A and B and output C, explicitly defines C = AB before any C cell appears, traces the symbolic and numeric construction of the first cell and all four cells of a two-by-two product (19, 22, 43, 50), explains the general row/column/shared-index summation and a separate shape check that explicitly compares A’s column count with B’s row count (rather than relying on 'inside matches'), then works through a two-by-three times three-by-two example (three products per output cell) and a three-by-two times two-by-one example (a column-shaped result), and shows a Python triple loop followed by a loadable functional-style alternative using `transpose`/`zip`, `itertools.product`/`starmap`/`batched`, and `math.sumprod` (Python 3.12+). The alternative names the number of output columns correctly, omits an unused `prod` import, and explains its tuple rows and shape assumptions. The letters guide documents new matrix symbols and index roles. Python lists are zero-indexed, while the mathematical formula is one-indexed.
- The program-correctness lesson uses the original summation loop to teach preconditions, postconditions, the invariant that `total` sums exactly the integers through `i`, a trace including loop exit at `i == n`, the empty-sum edge case `n = 0`, and the start/maintain/finish proof pattern including termination. The loop begins at `i = 0`, increments before adding, and stops at `i == n`; executable assertions check the input assumption, loop boundary, and result for a particular run, without being presented as a universal proof. The guide defines the new correctness terms. The starter code was checked for `n = 0, 1, 4, 10`; the optional editor is not presented as a proof.
- The factorial-sum synthesis lesson follows proof by induction in the page sequence, but is separately grouped as synthesis in the sidebar. It applies the summation and factorial lessons to `Σ(k=1..4) k!`: first substitutes the whole factorial summand for `k = 1, 2, 3, 4`, then evaluates the factorials (1, 2, 6, 24) and adds them to get 33. Its optional nested-loop Python code calculates each factorial term and accumulates the sum, rather than merely printing a formula.
- The proof-by-induction lesson follows program correctness and proves the first-n-integers formula for nonnegative integers: base case at zero (empty sum), assumption for an arbitrary `k`, algebra for `k+1`, and the conclusion connecting those steps. Python compares the loop and formula for a chosen value as an optional check, explicitly not as a proof. The letters guide defines the induction hypothesis and explains `k`’s context-dependent role.
- Python worker output now preserves line breaks between separate `print()` calls for both standard output and standard error. Verified with the probability and expected-value examples. The CodeMirror editor soft-wraps long lines; keep mapping comments concise and explain the correspondence outside the editor as well. The editor has a 420-pixel minimum height. On page load, reset, and loading a prebuilt example, JavaScript estimates the wrapped line count and sets the editor height with room below the last line; adding lines during manual editing does not resize it on every keystroke, and the editor scrolls internally instead. A viewport resize recalculates the fit. Twenty pixels of padding on the shared scroller (not separate code/gutter padding) preserves line-number alignment and bottom breathing room. Loading a code variant now scrolls to and focuses the shared editor; a **Reset to starter code** control restores the page's original example.
- The shared CodeMirror editor now uses a high-contrast dark Python syntax palette, a vivid blue selection highlight that also overrides CodeMirror's transparent native selection on the active line/end of a drag, a clearer cursor and focus outline, and visible matching-bracket/search-match styling. The theme is shared across pages; its bundle and stylesheet cache versions were bumped. Verified that the selection background and token colors render in the browser and that the concise dot-product version still loads into the editor.
- Verified that the pages, bundled editor, and Python execution work when opened directly from a local `file://` URL. Code runs in the browser; the first run downloads Pyodide from a CDN and therefore needs internet access.
- The Python example uses `n = 4`, `i = 1`, and a running `total`; its `while i <= n` condition includes the final term. A note explains the equivalent `range(1, n + 1)` boundary.
- CodeMirror build dependencies are in `frontpage/package.json`; the generated local bundle is `frontpage/editor.bundle.js`. Rebuild it with `scripts/build_frontpage.sh` after `npm install --prefix frontpage`.
- Agreed direction: make notation reading and expansion the central learning outcome; start with summation, show simple and nontrivial contexts early, and explicitly defer vectors, dot products, and matrices to later lessons.
