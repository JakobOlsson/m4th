const embeddedReference = new URLSearchParams(window.location.search).get("embed") === "1";

if (embeddedReference) {
  document.body.classList.add("reference-embed");
  document.querySelectorAll("main a[href]").forEach((link) => {
    link.target = "_blank";
    link.rel = "noopener";
  });
}
