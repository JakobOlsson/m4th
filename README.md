# Math Refresher

A personal, English-language handbook for rebuilding fluency with mathematical notation, proofs, and the ideas behind formulas. Lessons use step-by-step explanations, worked examples, and optional Python checks.

## How it is made

The handbook is developed collaboratively with an AI assistant. The maintainer chooses topics, guides and edits the explanations, and reviews the mathematics and code; the assistant helps draft, refine, and check content. The site is a static collection of HTML, CSS, and JavaScript.

## Author's notes

I created this handbook because I needed a refresher on reading mathematical formulas. When I read research papers, algorithms are often described with formulas. I found myself skipping over them because I no longer remembered much of the mathematics I had studied at university.

I also learned math in Swedish. Although mathematics is often called a “universal language,” describing formulas in words is not universal: terminology can differ greatly between English and Swedish. I wanted to get better at reading formulas aloud in English.

Notation also varies between fields. Electrical engineering, computer graphics, and machine learning may use different letters and conventions. Authors of white papers sometimes assume their readers already know the conventions of that field. I wanted a broad refresher to remind myself how to “compile” formulas into spoken language, break them into steps, and think of their logic as code—a way of working that makes the math more tangible to me.

## Access and build

Read the current main-branch GitHub Pages publication: [Math Refresher](https://jakobolsson.github.io/m4th/). The source entry point is [`docs/index.html`](docs/index.html). GitHub Pages publishes the `main` branch's `/docs` folder.

To build and serve it locally:

```sh
npm ci --prefix docs
bash scripts/build_site.sh
python3 -m http.server 8000 --directory docs
```

Then visit <http://localhost:8000>. The build script bundles the editable Python editor. Running Python examples in the browser may require an internet connection the first time.
