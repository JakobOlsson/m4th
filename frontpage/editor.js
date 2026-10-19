import { basicSetup, EditorView } from "codemirror";
import { HighlightStyle, syntaxHighlighting } from "@codemirror/language";
import { python } from "@codemirror/lang-python";
import { tags } from "@lezer/highlight";

const pythonHighlighting = HighlightStyle.define([
  { tag: tags.keyword, color: "#cba6f7", fontWeight: "600" },
  { tag: tags.definition(tags.variableName), color: "#f9e2af" },
  { tag: tags.function(tags.variableName), color: "#89dceb" },
  { tag: tags.variableName, color: "#e6edf3" },
  { tag: tags.number, color: "#fab387" },
  { tag: tags.string, color: "#a6e3a1" },
  { tag: tags.comment, color: "#9db7a5", fontStyle: "italic" },
  { tag: tags.operator, color: "#89dceb" },
  { tag: tags.punctuation, color: "#bac8d0" },
  { tag: tags.bool, color: "#f38ba8", fontWeight: "600" },
]);

const defaultStarterCode = `n = 4
i = 1
total = 0

while i <= n:
    total = total + i
    i = i + 1

print(total)`;
const starterCode = document.querySelector("#starter-python")?.content.textContent.trim() ?? defaultStarterCode;

const host = document.querySelector("#python-editor");

window.mathEditor = new EditorView({
  doc: starterCode,
  extensions: [basicSetup, python(), syntaxHighlighting(pythonHighlighting), EditorView.lineWrapping],
  parent: host,
});
