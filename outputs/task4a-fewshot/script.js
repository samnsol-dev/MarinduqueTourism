const attractions = [
  {
    name: "Ihatub Beach",
    category: "coast",
    categoryLabel: "Beach & Coast",
    description: "A beach destination in Boac, Marinduque, known for its coastal scenery.",
    location: "Ihatub, Boac. Verify shoreline access and swimming conditions locally.",
    searchTerms: "adis resort shoreline",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/Brgy._Ihatub_Beach%2CBoac%2CMarinduque.JPG/960px-Brgy._Ihatub_Beach%2CBoac%2CMarinduque.JPG",
    imageAlt: "Shoreline at Ihatub Beach in Boac",
    imageSource: "https://commons.wikimedia.org/wiki/File:Brgy._Ihatub_Beach,Boac,Marinduque.JPG",
    imageCredit: "Totoyba2 · CC BY-SA 3.0"
  },
  {
    name: "Zigzag Beach",
    category: "coast",
    categoryLabel: "Beach & Coast",
    description: "A coastal stop on the Ihatub shoreline, with views of the sea and surrounding coast.",
    location: "Ihatub, Boac. Confirm the access point and current conditions locally.",
    searchTerms: "seashore shoreline",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/Zigzag_Beach_Seashores.jpg/960px-Zigzag_Beach_Seashores.jpg",
    imageAlt: "Coast at Zigzag Beach",
    imageSource: "https://commons.wikimedia.org/wiki/File:Zigzag_Beach_Seashores.jpg",
    imageCredit: "Totoyba2 · CC BY-SA 4.0"
  },
  {
    name: "Mount Malindig",
    category: "nature",
    categoryLabel: "Nature",
    description: "A prominent volcanic mountain and the highest peak on Marinduque.",
    location: "Southern Marinduque. Verify the trailhead, route conditions, and guide requirements before hiking.",
    searchTerms: "mountain hiking trail volcano summit",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Mount_Malindig_from_air_%28Marinduque%3B_04-22-2024%29.jpg/960px-Mount_Malindig_from_air_%28Marinduque%3B_04-22-2024%29.jpg",
    imageAlt: "Aerial view of Mount Malindig on Marinduque",
    imageSource: "https://commons.wikimedia.org/wiki/File:Mount_Malindig_from_air_(Marinduque;_04-22-2024).jpg",
    imageCredit: "Patrickroque01 · CC BY-SA 4.0"
  },
  {
    name: "Boac Cathedral",
    category: "culture",
    categoryLabel: "Cultural Attraction",
    description: "A historic church located in Boac, Marinduque.",
    location: "Boac town proper. Verify visiting hours before your visit.",
    searchTerms: "church heritage history old town immaculate conception",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d8/Simbahan_ng_Boac.jpg/960px-Simbahan_ng_Boac.jpg",
    imageAlt: "Boac Cathedral in the town of Boac",
    imageSource: "https://commons.wikimedia.org/wiki/File:Simbahan_ng_Boac.jpg",
    imageCredit: "JMCapunitan · CC BY-SA 4.0"
  },
  {
    name: "Moriones Festival",
    category: "culture",
    categoryLabel: "Cultural Attraction",
    description: "A Marinduque Holy Week tradition featuring participants wearing Morion masks and costumes.",
    location: "Observed in several Marinduque communities during Holy Week. Check municipal announcements for dates and events.",
    searchTerms: "holy week masks tradition festival mogpog boac",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Moriones_of_Marinduque.jpg/960px-Moriones_of_Marinduque.jpg",
    imageAlt: "A participant wearing a Moriones mask and costume",
    imageSource: "https://commons.wikimedia.org/wiki/File:Moriones_of_Marinduque.jpg",
    imageCredit: "Ranieljosecastaneda · CC BY-SA 4.0"
  },
  {
    name: "Poctoy White Beach",
    category: "coast",
    categoryLabel: "Beach & Coast",
    description: "A beach destination in Torrijos, Marinduque, known for its coastal scenery.",
    location: "Torrijos. Verify the current access point, fees, and swimming conditions locally.",
    searchTerms: "poctoy beach torrijos white sand",
    image: "https://live.staticflickr.com/3557/3465903672_8b46f37cca_b.jpg",
    imageAlt: "Poctoy White Beach in Torrijos, Marinduque",
    imageSource: "https://www.flickr.com/photos/21609026@N07/3465903672/",
    imageCredit: "kai lazarte · CC BY 2.0"
  },
  {
    name: "Maniwaya Island",
    category: "coast",
    categoryLabel: "Beach & Coast",
    description: "An island destination off Santa Cruz, Marinduque, known for its beaches and coastal scenery.",
    location: "Off Santa Cruz. Verify boat schedules, landing arrangements, and current access locally.",
    searchTerms: "island santa cruz beach shoreline",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/14/Maniwaya_Island_Shore.jpg/960px-Maniwaya_Island_Shore.jpg",
    imageAlt: "Shoreline at Maniwaya Island in Santa Cruz, Marinduque",
    imageSource: "https://commons.wikimedia.org/wiki/File:Maniwaya_Island_Shore.jpg",
    imageCredit: "Totoyba2 · CC BY-SA 4.0"
  },
  {
    name: "Tres Reyes Islands",
    category: "nature",
    categoryLabel: "Nature",
    description: "A group of offshore islands near Gasan, Marinduque, with coastal and island scenery.",
    location: "Off Gasan. Verify boat availability, permitted landing areas, and sea conditions locally.",
    searchTerms: "tres reyes gasan island hopping",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/WV_banner_Marinduque_Cliffs_on_Tres_Reyes_Islands.jpg/960px-WV_banner_Marinduque_Cliffs_on_Tres_Reyes_Islands.jpg",
    imageAlt: "Cliffs on the Tres Reyes Islands off Marinduque",
    imageSource: "https://commons.wikimedia.org/wiki/File:WV_banner_Marinduque_Cliffs_on_Tres_Reyes_Islands.jpg",
    imageCredit: "Tomauer · CC0 1.0"
  },
  {
    name: "Bathala Caves",
    category: "nature",
    categoryLabel: "Nature",
    description: "A cave destination on Marinduque for visitors interested in natural cave landscapes.",
    location: "Commonly associated with Santa Cruz; verify the exact access point, entry requirements, and current conditions locally.",
    searchTerms: "bathala cave caves santa cruz",
    image: null
  }
];

const filterButtons = [...document.querySelectorAll(".filter-button")];
const placeGrid = document.querySelector("#place-grid");
const searchInput = document.querySelector("#place-search");
const emptyState = document.querySelector("#empty-state");
const resultsStatus = document.querySelector("#results-status");

let activeFilter = "all";

function createCard(attraction) {
  const card = document.createElement("article");
  card.className = "place-card";
  card.dataset.category = attraction.category;

  const photo = attraction.image
    ? `<img src="${attraction.image}" alt="${attraction.imageAlt}" loading="lazy"><figcaption><a href="${attraction.imageSource}" target="_blank" rel="noreferrer">${attraction.imageCredit} · Photo source ↗</a></figcaption>`
    : `<div class="photo-pending"><span>LOCAL PHOTO</span><strong>Needs verification</strong></div>`;

  card.innerHTML = `
    <figure class="place-photo">${photo}</figure>
    <div class="card-content">
      <div class="card-meta"><span>MARINDUQUE</span><span class="category-label">${attraction.categoryLabel}</span></div>
      <h3>${attraction.name}</h3>
      <p class="description"><strong>Description</strong>${attraction.description}</p>
      <p class="location-note"><strong>Location note</strong>${attraction.location}</p>
    </div>`;

  card.dataset.search = `${attraction.name} ${attraction.categoryLabel} ${attraction.description} ${attraction.location} ${attraction.searchTerms}`.toLocaleLowerCase();
  return card;
}

const cards = attractions.map(createCard);
placeGrid.append(...cards);

function updatePlaces() {
  const query = searchInput.value.trim().toLocaleLowerCase();
  let visibleCount = 0;

  for (const card of cards) {
    const matchesCategory = activeFilter === "all" || card.dataset.category === activeFilter;
    const matchesSearch = card.dataset.search.includes(query);
    const isVisible = matchesCategory && matchesSearch;

    card.hidden = !isVisible;
    if (isVisible) visibleCount += 1;
  }

  emptyState.hidden = visibleCount > 0;
  resultsStatus.textContent = `Showing ${visibleCount} ${visibleCount === 1 ? "attraction" : "attractions"}`;
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

updatePlaces();