import { basicSetup, EditorView } from "codemirror";
import { python } from "@codemirror/lang-python";

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
  extensions: [basicSetup, python()],
  parent: host,
});
