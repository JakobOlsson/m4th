#!/usr/bin/env sh
set -eu

ROOT="$(CDPATH= cd -- "$(dirname -- "$0")/.." && pwd)"
ESBUILD="$ROOT/docs/node_modules/.bin/esbuild"

if [ ! -x "$ESBUILD" ]; then
  echo "CodeMirror build dependencies are missing. Run: npm install --prefix docs" >&2
  exit 1
fi

"$ESBUILD" \
  "$ROOT/docs/editor.js" \
  --bundle \
  --format=iife \
  --target=es2020 \
  --legal-comments=inline \
  --outfile="$ROOT/docs/editor.bundle.js"
