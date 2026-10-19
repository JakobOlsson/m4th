const navToggle = document.querySelector("#nav-toggle");
const handbookNav = document.querySelector("#handbook-nav");
const navScrim = document.querySelector("#nav-scrim");
const mobileViewport = window.matchMedia("(max-width: 800px)");
const quickReferenceDialog = document.querySelector("#quick-reference-dialog");
const quickReferenceFrame = quickReferenceDialog?.querySelector("iframe");
const referenceTriggers = document.querySelectorAll(".quick-reference-trigger, .inline-reference-trigger, .glossary-trigger");
let activeReferenceTrigger = null;

function setInitialNavigationState() {
  document.body.classList.remove("nav-open", "nav-collapsed");
  navToggle.setAttribute("aria-expanded", String(!mobileViewport.matches));
}

function closeMobileNavigation() {
  document.body.classList.remove("nav-open");
  navToggle.setAttribute("aria-expanded", "false");
  navToggle.focus();
}

navToggle.addEventListener("click", () => {
  if (mobileViewport.matches) {
    const isOpen = document.body.classList.toggle("nav-open");
    navToggle.setAttribute("aria-expanded", String(isOpen));
    if (isOpen) handbookNav.querySelector("a")?.focus();
    else navToggle.focus();
    return;
  }

  const isCollapsed = document.body.classList.toggle("nav-collapsed");
  navToggle.setAttribute("aria-expanded", String(!isCollapsed));
});

navScrim.addEventListener("click", closeMobileNavigation);

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && mobileViewport.matches && document.body.classList.contains("nav-open")) {
    closeMobileNavigation();
  }
});

if (quickReferenceDialog && quickReferenceFrame) {
  referenceTriggers.forEach((trigger) => {
    trigger.addEventListener("click", () => {
      activeReferenceTrigger = trigger;
      if (mobileViewport.matches && document.body.classList.contains("nav-open")) {
        document.body.classList.remove("nav-open");
        navToggle.setAttribute("aria-expanded", "false");
      }

      const source = trigger.dataset.referenceSrc || quickReferenceFrame.dataset.src;
      const title = trigger.dataset.referenceTitle || "Notation and Python";
      const fullPage = trigger.dataset.referenceLink || "quick-reference.html";
      const section = trigger.dataset.referenceTarget || "";
      const destination = `${source}${section ? `#${section}` : ""}`;
      const currentDestination = quickReferenceFrame.dataset.currentDestination || "";
      quickReferenceDialog.querySelector("#quick-reference-dialog-title").textContent = title;
      quickReferenceDialog.querySelector(".dialog-actions a").href = fullPage;
      quickReferenceFrame.title = title;
      if (quickReferenceFrame.dataset.loaded !== "true" || destination !== currentDestination) {
        quickReferenceFrame.src = destination;
        quickReferenceFrame.dataset.currentDestination = destination;
        quickReferenceFrame.dataset.loaded = "true";
      }

      quickReferenceDialog.showModal();
      quickReferenceDialog.querySelector(".dialog-close").focus();
    });
  });

  quickReferenceDialog.querySelector(".dialog-close").addEventListener("click", () => {
    quickReferenceDialog.close();
  });

  quickReferenceDialog.addEventListener("click", (event) => {
    if (event.target === quickReferenceDialog) quickReferenceDialog.close();
  });

  quickReferenceDialog.addEventListener("close", () => {
    if (activeReferenceTrigger?.closest(".sidebar") && mobileViewport.matches) navToggle.focus();
    else activeReferenceTrigger?.focus();
  });
}

mobileViewport.addEventListener("change", setInitialNavigationState);
setInitialNavigationState();
