# Math Refresher

A personal, English-language handbook for rebuilding fluency with mathematical notation, proofs, and the ideas behind formulas. Lessons use step-by-step explanations, worked examples, and optional Python checks.

## How it is made

The handbook is developed collaboratively with an AI assistant. The maintainer chooses topics, guides and edits the explanations, and reviews the mathematics and code; the assistant helps draft, refine, and check content. The site is a static collection of HTML, CSS, and JavaScript.

## Access and build

Read the current main-branch GitHub Pages publication: [Math Refresher](https://jakobolsson.github.io/m4th/). The source entry point is [`docs/index.html`](docs/index.html). GitHub Pages publishes the `main` branch's `/docs` folder.

To build and serve it locally:

```sh
npm ci --prefix docs
bash scripts/build_site.sh
python3 -m http.server 8000 --directory docs
```

Then visit <http://localhost:8000>. The build script bundles the editable Python editor. Running Python examples in the browser may require an internet connection the first time.
