const filterButtons = [...document.querySelectorAll(".filter-button")];
const placeCards = [...document.querySelectorAll(".place-card")];
const searchInput = document.querySelector("#place-search");
const emptyState = document.querySelector("#empty-state");
const resultsStatus = document.querySelector("#results-status");

let activeFilter = "all";

function updatePlaces() {
  const query = searchInput.value.trim().toLocaleLowerCase();
  let visibleCount = 0;

  for (const card of placeCards) {
    const matchesCategory = activeFilter === "all" || card.dataset.category === activeFilter;
    const searchableText = `${card.dataset.search} ${card.textContent}`.toLocaleLowerCase();
    const matchesSearch = searchableText.includes(query);
    const isVisible = matchesCategory && matchesSearch;

    card.hidden = !isVisible;
    if (isVisible) visibleCount += 1;
  }

  emptyState.hidden = visibleCount > 0;
  resultsStatus.textContent = `Showing ${visibleCount} ${visibleCount === 1 ? "place" : "places"}`;
}

for (const button of filterButtons) {
  button.addEventListener("click", () => {
    activeFilter = button.dataset.filter;

    for (const filterButton of filterButtons) {
      const isActive = filterButton === button;
      filterButton.classList.toggle("is-active", isActive);
      filterButton.setAttribute("aria-pressed", String(isActive));
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