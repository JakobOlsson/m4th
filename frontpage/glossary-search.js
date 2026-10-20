const searchInput = document.querySelector("#glossary-search");
const clearButton = document.querySelector("#glossary-search-clear");
const status = document.querySelector("#glossary-search-status");
const entries = [...document.querySelectorAll(".glossary-entry")];
const groups = [...document.querySelectorAll(".guide-card")]
  .filter((group) => group.querySelector(".glossary-entry"));
const totalEntries = entries.length;

function normalizeText(text) {
  return text
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLocaleLowerCase();
}

function filterGlossary() {
  const query = normalizeText(searchInput.value.trim());
  let matchCount = 0;

  for (const entry of entries) {
    const matches = !query || normalizeText(entry.textContent).includes(query);
    entry.hidden = !matches;
    if (matches) matchCount += 1;
  }

  for (const group of groups) {
    group.hidden = !group.querySelector(".glossary-entry:not([hidden])");
  }

  clearButton.disabled = searchInput.value.length === 0;
  if (!query) {
    status.textContent = `Showing all ${totalEntries} glossary terms.`;
  } else if (matchCount === 0) {
    status.textContent = `No glossary terms match “${searchInput.value.trim()}”.`;
  } else {
    const noun = matchCount === 1 ? "term" : "terms";
    status.textContent = `Showing ${matchCount} matching ${noun}. Press Enter to jump to the matching term title, or the first result.`;
  }
}

searchInput.addEventListener("input", filterGlossary);
clearButton.addEventListener("click", () => {
  searchInput.value = "";
  filterGlossary();
  searchInput.focus();
});
searchInput.addEventListener("keydown", (event) => {
  if (event.key !== "Enter") return;
  event.preventDefault();

  const query = normalizeText(searchInput.value.trim());
  const visibleEntries = entries.filter((entry) => !entry.hidden);
  const titleMatches = visibleEntries.filter((entry) =>
    normalizeText(entry.querySelector("h3").textContent).includes(query));
  const firstMatch = titleMatches[0] ?? visibleEntries[0];
  if (!firstMatch) return;

  const heading = firstMatch.querySelector("h3");
  heading.tabIndex = -1;
  firstMatch.scrollIntoView({
    behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth",
    block: "center",
  });
  heading.focus({ preventScroll: true });
});

filterGlossary();
