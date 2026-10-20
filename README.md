# Math Refresher

A personal, English-language handbook for rebuilding fluency with mathematical notation, proofs, and the ideas behind formulas. Lessons use step-by-step explanations, worked examples, and optional Python checks.

## How it is made

The handbook is developed collaboratively with an AI assistant. The maintainer chooses topics, guides and edits the explanations, and reviews the mathematics and code; the assistant helps draft, refine, and check content. The site itself is a static collection of HTML, CSS, and JavaScript.

## Access and build

The handbook starts at [`frontpage/index.html`](frontpage/index.html). It can be hosted with GitHub Pages; configure Pages to publish the repository root, then open `/frontpage/` under the repository's Pages URL.

To build and serve it locally:

```sh
npm ci --prefix frontpage
bash scripts/build_frontpage.sh
python3 -m http.server 8000 --directory frontpage
```

Then visit <http://localhost:8000>. The build script bundles the editable Python editor. Running Python examples in the browser may require an internet connection the first time.
