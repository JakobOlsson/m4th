const PYODIDE_VERSION = "0.28.2";
const PYODIDE_CDN = `https://cdn.jsdelivr.net/pyodide/v${PYODIDE_VERSION}/full/`;
const runButton = document.querySelector("#run-python");
const resetButton = document.querySelector("#reset-python");
const editorHost = document.querySelector("#python-editor");
const runStatus = document.querySelector("#run-status");
const output = document.querySelector("#python-output");
const loadVersionButtons = [...document.querySelectorAll("[data-load-code]")];

let pythonWorker = null;
let runTimeout = null;

const workerSource = `
  let pyodide = null;

  self.onmessage = async (event) => {
    if (event.data.type !== "run") return;

    try {
      if (pyodide === null) {
        self.postMessage({ type: "status", text: "Loading Python runtime…" });
        importScripts("${PYODIDE_CDN}pyodide.js");
        pyodide = await loadPyodide({ indexURL: "${PYODIDE_CDN}" });
        pyodide.setStdout({ batched: (text) => self.postMessage({ type: "stdout", text: text + "\\n" }) });
        pyodide.setStderr({ batched: (text) => self.postMessage({ type: "stderr", text: text + "\\n" }) });
      }

      self.postMessage({ type: "started" });
      await pyodide.runPythonAsync(event.data.code);
      self.postMessage({ type: "finished" });
    } catch (error) {
      self.postMessage({ type: "error", text: error.message || String(error) });
    }
  };
`;

const workerUrl = URL.createObjectURL(new Blob([workerSource], { type: "text/javascript" }));

function createPythonWorker() {
  pythonWorker = new Worker(workerUrl);

  pythonWorker.addEventListener("message", (event) => {
    const message = event.data;

    if (message.type === "status") {
      runStatus.textContent = message.text;
    } else if (message.type === "started") {
      runStatus.textContent = "Running Python…";
      runTimeout = window.setTimeout(() => {
        pythonWorker?.terminate();
        pythonWorker = null;
        finishRun("Stopped this run after 5 seconds. Check for a loop that never ends.", true);
      }, 5000);
    } else if (message.type === "stdout" || message.type === "stderr") {
      output.textContent += message.text;
      if (message.type === "stderr") output.classList.add("error");
    } else if (message.type === "finished") {
      finishRun("Finished.");
    } else if (message.type === "error") {
      output.textContent += message.text;
      output.classList.add("error");
      finishRun("Python reported an error.");
    }
  });

  pythonWorker.addEventListener("error", (event) => {
    output.textContent = event.message || "The Python worker could not start.";
    output.classList.add("error");
    pythonWorker?.terminate();
    pythonWorker = null;
    finishRun("Could not start Python.");
  });
}

function finishRun(status, isError = false) {
  window.clearTimeout(runTimeout);
  runTimeout = null;
  runButton.disabled = false;
  resetButton.disabled = false;
  loadVersionButtons.forEach((button) => { button.disabled = false; });
  runStatus.textContent = status;
  if (isError) output.classList.add("error");
}

runButton.addEventListener("click", () => {
  if (!window.mathEditor) {
    runStatus.textContent = "The code editor did not load.";
    return;
  }

  output.textContent = "";
  output.classList.remove("error");
  runButton.disabled = true;
  resetButton.disabled = true;
  loadVersionButtons.forEach((button) => { button.disabled = true; });
  runStatus.textContent = "Starting Python…";

  if (pythonWorker === null) createPythonWorker();
  pythonWorker.postMessage({ type: "run", code: window.mathEditor.state.doc.toString() });
});

function fitEditorToCode(code) {
  if (!window.mathEditor || !editorHost) return;

  const lineElement = editorHost.querySelector(".cm-line");
  const gutter = editorHost.querySelector(".cm-gutters");
  const lineHeight = lineElement ? Number.parseFloat(getComputedStyle(lineElement).lineHeight) : 20;
  const canvas = document.createElement("canvas");
  const context = canvas.getContext("2d");
  if (context && lineElement) context.font = getComputedStyle(lineElement).font;
  const characterWidth = context?.measureText("M").width || 9;
  const availableWidth = Math.max(characterWidth, editorHost.clientWidth - (gutter?.getBoundingClientRect().width || 0) - 16);
  const visualLines = code.split("\n").reduce((count, line) => {
    const expandedTabs = line.replaceAll("\t", "    ");
    return count + Math.max(1, Math.ceil(expandedTabs.length * characterWidth / availableWidth));
  }, 0);
  const verticalPadding = 50;
  const height = Math.max(420, Math.ceil(visualLines * lineHeight + verticalPadding));

  editorHost.style.height = `${height}px`;
  window.mathEditor.requestMeasure();
}

fitEditorToCode(window.mathEditor?.state.doc.toString() || "");
window.addEventListener("resize", () => fitEditorToCode(window.mathEditor?.state.doc.toString() || ""));

function loadEditorCode(code, status) {
  if (!window.mathEditor) return;

  const currentLength = window.mathEditor.state.doc.length;
  window.mathEditor.dispatch({
    changes: { from: 0, to: currentLength, insert: code },
  });
  fitEditorToCode(code);
  output.textContent = "Click “Run Python” to run the code above.";
  output.classList.remove("error");
  runStatus.textContent = status;
  window.mathEditor.focus();
  document.querySelector("#python-editor").scrollIntoView({ behavior: "smooth", block: "center" });
}

loadVersionButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const codeTemplate = document.getElementById(button.dataset.loadCode);
    if (!codeTemplate) return;
    loadEditorCode(codeTemplate.content.textContent.trim(), "Example loaded. Run it to compare.");
  });
});

resetButton.addEventListener("click", () => {
  const starterCode = document.querySelector("#starter-python");
  if (!starterCode) return;
  loadEditorCode(starterCode.content.textContent.trim(), "Starter code restored.");
});


window.addEventListener("pagehide", () => {
  pythonWorker?.terminate();
  URL.revokeObjectURL(workerUrl);
});
