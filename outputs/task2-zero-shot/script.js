const filterButtons = [...document.querySelectorAll(".filter-button")];
const placeCards = [...document.querySelectorAll(".place-card")];
const searchInput = document.querySelector("#place-search");
const emptyState = document.querySelector("#empty-state");

let activeFilter = "all";

function updatePlaces() {
  const query = searchInput.value.trim().toLowerCase();
  let visibleCount = 0;

  for (const card of placeCards) {
    const matchesFilter = activeFilter === "all" || card.dataset.category === activeFilter;
    const matchesSearch = card.dataset.name.includes(query) || card.querySelector("h3").textContent.toLowerCase().includes(query);
    const isVisible = matchesFilter && matchesSearch;
    card.hidden = !isVisible;
    if (isVisible) visibleCount++;
  }

  emptyState.hidden = visibleCount > 0;
}

for (const button of filterButtons) {
  button.addEventListener("click", () => {
    activeFilter = button.dataset.filter;
    for (const item of filterButtons) {
      const isActive = item === button;
      item.classList.toggle("active", isActive);
      item.setAttribute("aria-pressed", String(isActive));
    }
    updatePlaces();
  });
}

searchInput.addEventListener("input", updatePlaces);

document.addEventListener("keydown", (event) => {
  if (event.key === "/" && document.activeElement !== searchInput && !["INPUT", "TEXTAREA"].includes(document.activeElement.tagName)) {
    event.preventDefault();
    searchInput.focus();
  }
  if (event.key === "Escape" && document.activeElement === searchInput) {
    searchInput.value = "";
    searchInput.blur();
    updatePlaces();
  }
});