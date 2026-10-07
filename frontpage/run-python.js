const PYODIDE_VERSION = "0.28.2";
const PYODIDE_CDN = `https://cdn.jsdelivr.net/pyodide/v${PYODIDE_VERSION}/full/`;
const runButton = document.querySelector("#run-python");
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
        pyodide.setStdout({ batched: (text) => self.postMessage({ type: "stdout", text }) });
        pyodide.setStderr({ batched: (text) => self.postMessage({ type: "stderr", text }) });
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
  loadVersionButtons.forEach((button) => { button.disabled = true; });
  runStatus.textContent = "Starting Python…";

  if (pythonWorker === null) createPythonWorker();
  pythonWorker.postMessage({ type: "run", code: window.mathEditor.state.doc.toString() });
});

loadVersionButtons.forEach((button) => {
  button.addEventListener("click", () => {
    if (!window.mathEditor) return;

    const codeTemplate = document.getElementById(button.dataset.loadCode);
    if (!codeTemplate) return;
    const exampleCode = codeTemplate.content.textContent.trim();
    const currentLength = window.mathEditor.state.doc.length;

    window.mathEditor.dispatch({
      changes: { from: 0, to: currentLength, insert: exampleCode },
    });
    output.textContent = "Click “Run Python” to run the code above.";
    output.classList.remove("error");
    runStatus.textContent = "Example loaded. Run it to compare.";
  });
});

window.addEventListener("pagehide", () => {
  pythonWorker?.terminate();
  URL.revokeObjectURL(workerUrl);
});
