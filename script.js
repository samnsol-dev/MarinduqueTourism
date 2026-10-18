const destinations = [
  {
    id: "ihatub-beach",
    name: "Ihatub Beach",
    category: "coast",
    categoryLabel: "Beach & coast",
    location: "Ihatub, Boac",
    description: "A coastal stop in Boac. The cited photo names Ihatub Beach; confirm public access and swimming conditions locally.",
    searchTerms: "shoreline adis resort",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/Brgy._Ihatub_Beach%2CBoac%2CMarinduque.JPG/960px-Brgy._Ihatub_Beach%2CBoac%2CMarinduque.JPG",
    imageAlt: "Shoreline at Ihatub Beach in Boac",
    imageSource: "https://commons.wikimedia.org/wiki/File:Brgy._Ihatub_Beach,Boac,Marinduque.JPG",
    imageCredit: "Totoyba2 · CC BY-SA 3.0"
  },
  {
    id: "zigzag-beach",
    name: "Zigzag Beach",
    category: "coast",
    categoryLabel: "Beach & coast",
    location: "Ihatub, Boac",
    description: "A coastal stop on the Ihatub shoreline. Verify the exact access point and current conditions before visiting.",
    searchTerms: "seashore shoreline",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/Zigzag_Beach_Seashores.jpg/960px-Zigzag_Beach_Seashores.jpg",
    imageAlt: "Coast at Zigzag Beach",
    imageSource: "https://commons.wikimedia.org/wiki/File:Zigzag_Beach_Seashores.jpg",
    imageCredit: "Totoyba2 · CC BY-SA 4.0"
  },
  {
    id: "mount-malindig",
    name: "Mount Malindig",
    category: "nature",
    categoryLabel: "Nature",
    location: "Southern Marinduque",
    description: "A prominent volcanic mountain and the island's highest peak. Verify route conditions, trail access, and guide requirements before hiking.",
    searchTerms: "mountain hiking trail volcano summit",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Mount_Malindig_from_air_%28Marinduque%3B_04-22-2024%29.jpg/960px-Mount_Malindig_from_air_%28Marinduque%3B_04-22-2024%29.jpg",
    imageAlt: "Aerial view of Mount Malindig on Marinduque",
    imageSource: "https://commons.wikimedia.org/wiki/File:Mount_Malindig_from_air_(Marinduque;_04-22-2024).jpg",
    imageCredit: "Patrickroque01 · CC BY-SA 4.0"
  },
  {
    id: "boac-cathedral",
    name: "Boac Cathedral",
    category: "culture",
    categoryLabel: "Culture",
    location: "Boac town proper",
    description: "A historic church in Boac, Marinduque. Verify visiting hours before your visit.",
    searchTerms: "church heritage history old town immaculate conception",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d8/Simbahan_ng_Boac.jpg/960px-Simbahan_ng_Boac.jpg",
    imageAlt: "Boac Cathedral in the town of Boac",
    imageSource: "https://commons.wikimedia.org/wiki/File:Simbahan_ng_Boac.jpg",
    imageCredit: "JMCapunitan · CC BY-SA 4.0"
  },
  {
    id: "moriones-festival",
    name: "Moriones Festival",
    category: "culture",
    categoryLabel: "Culture",
    location: "Several Marinduque communities · Holy Week",
    description: "A Marinduque Holy Week tradition featuring participants wearing Morion masks and costumes. Check local announcements for current dates and events.",
    searchTerms: "masks tradition festival mogpog boac",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Moriones_of_Marinduque.jpg/960px-Moriones_of_Marinduque.jpg",
    imageAlt: "A participant wearing a Moriones mask and costume",
    imageSource: "https://commons.wikimedia.org/wiki/File:Moriones_of_Marinduque.jpg",
    imageCredit: "Ranieljosecastaneda · CC BY-SA 4.0"
  },
  {
    id: "poctoy-white-beach",
    name: "Poctoy White Beach",
    category: "coast",
    categoryLabel: "Beach & coast",
    location: "Torrijos",
    description: "A beach destination in Torrijos, Marinduque, known for its coastal scenery. Verify the access point, fees, and swimming conditions locally.",
    searchTerms: "poctoy white sand beach",
    image: "https://live.staticflickr.com/3557/3465903672_8b46f37cca_b.jpg",
    imageAlt: "Poctoy White Beach in Torrijos, Marinduque",
    imageSource: "https://www.flickr.com/photos/21609026@N07/3465903672/",
    imageCredit: "kai lazarte · CC BY 2.0"
  },
  {
    id: "maniwaya-island",
    name: "Maniwaya Island",
    category: "coast",
    categoryLabel: "Beach & coast",
    location: "Off Santa Cruz",
    description: "An island destination off Santa Cruz, Marinduque, known for its beaches and coastal scenery. Verify boat schedules and access locally.",
    searchTerms: "island santa cruz beach shoreline",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/14/Maniwaya_Island_Shore.jpg/960px-Maniwaya_Island_Shore.jpg",
    imageAlt: "Shoreline at Maniwaya Island in Santa Cruz, Marinduque",
    imageSource: "https://commons.wikimedia.org/wiki/File:Maniwaya_Island_Shore.jpg",
    imageCredit: "Totoyba2 · CC BY-SA 4.0"
  },
  {
    id: "tres-reyes-islands",
    name: "Tres Reyes Islands",
    category: "nature",
    categoryLabel: "Nature",
    location: "Off Gasan",
    description: "A group of offshore islands near Gasan, Marinduque. Verify boat availability, permitted landing areas, and sea conditions locally.",
    searchTerms: "tres reyes gasan island hopping",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/WV_banner_Marinduque_Cliffs_on_Tres_Reyes_Islands.jpg/960px-WV_banner_Marinduque_Cliffs_on_Tres_Reyes_Islands.jpg",
    imageAlt: "Cliffs on the Tres Reyes Islands off Marinduque",
    imageSource: "https://commons.wikimedia.org/wiki/File:WV_banner_Marinduque_Cliffs_on_Tres_Reyes_Islands.jpg",
    imageCredit: "Tomauer · CC0 1.0"
  },
  {
    id: "bathala-caves",
    name: "Bathala Caves",
    category: "nature",
    categoryLabel: "Nature",
    location: "Exact access point needs verification",
    description: "A cave destination on Marinduque. Verify the municipality, access point, entry requirements, and current conditions with local tourism staff.",
    searchTerms: "bathala cave caves santa cruz",
    image: null
  }
];

const storageKey = "marinduque-shortlist-v1";
const filterButtons = [...document.querySelectorAll(".filter-button")];
const searchInput = document.querySelector("#destination-search");
const destinationGrid = document.querySelector("#destination-grid");
const resultsStatus = document.querySelector("#results-status");
const emptyState = document.querySelector("#empty-state");
const savedList = document.querySelector("#saved-list");
const savedCount = document.querySelector("#shortlist-count");
const navSavedCount = document.querySelector("#nav-saved-count");
const shortlistEmpty = document.querySelector("#shortlist-empty");
const clearSavedButton = document.querySelector("#clear-saved");
const saveStatus = document.querySelector("#save-status");

let activeFilter = "all";
let savedIds = readSavedIds();
const cardsById = new Map();

function readSavedIds() {
  try {
    const value = JSON.parse(localStorage.getItem(storageKey) || "[]");
    const validIds = new Set(destinations.map((destination) => destination.id));
    return new Set(Array.isArray(value) ? value.filter((id) => validIds.has(id)) : []);
  } catch {
    return new Set();
  }
}

function persistSavedIds() {
  try {
    localStorage.setItem(storageKey, JSON.stringify([...savedIds]));
    return true;
  } catch {
    saveStatus.textContent = "This browser could not store the shortlist. It will be cleared when this page closes.";
    return false;
  }
}

function createPhoto(destination) {
  const figure = document.createElement("figure");
  figure.className = "destination-photo";

  if (!destination.image) {
    figure.append(createPhotoPlaceholder(destination.name, "Destination photo needs a verified source."));
    return figure;
  }

  const image = document.createElement("img");
  image.src = destination.image;
  image.alt = destination.imageAlt;
  image.loading = "lazy";
  image.addEventListener("error", () => {
    figure.replaceChildren(createPhotoPlaceholder(destination.name, "Photo unavailable; verify the source."));
  }, { once: true });

  const caption = document.createElement("figcaption");
  const creditLink = document.createElement("a");
  creditLink.href = destination.imageSource;
  creditLink.target = "_blank";
  creditLink.rel = "noreferrer";
  creditLink.textContent = `${destination.imageCredit} · Source ↗`;
  caption.append(creditLink);
  figure.append(image, caption);
  return figure;
}

function createPhotoPlaceholder(name, message) {
  const placeholder = document.createElement("div");
  placeholder.className = "photo-placeholder";
  placeholder.setAttribute("role", "img");
  placeholder.setAttribute("aria-label", `${name}: ${message}`);
  const label = document.createElement("span");
  label.textContent = "PHOTO TO VERIFY";
  const text = document.createElement("strong");
  text.textContent = message;
  placeholder.append(label, text);
  return placeholder;
}

function createDestinationCard(destination) {
  const card = document.createElement("article");
  card.className = "destination-card";
  card.dataset.id = destination.id;
  card.dataset.category = destination.category;
  card.dataset.search = `${destination.name} ${destination.categoryLabel} ${destination.location} ${destination.description} ${destination.searchTerms}`.toLocaleLowerCase();
  card.append(createPhoto(destination));

  const content = document.createElement("div");
  content.className = "card-content";

  const meta = document.createElement("div");
  meta.className = "card-meta";
  const category = document.createElement("span");
  category.className = "category-tag";
  category.textContent = destination.categoryLabel;
  meta.append(category);

  const title = document.createElement("h3");
  title.textContent = destination.name;
  const description = document.createElement("p");
  description.className = "card-description";
  description.textContent = destination.description;
  const location = document.createElement("p");
  location.className = "card-location";
  const locationLabel = document.createElement("strong");
  locationLabel.textContent = "LOCATION";
  location.append(locationLabel, document.createTextNode(destination.location));

  const saveButton = document.createElement("button");
  saveButton.type = "button";
  saveButton.className = "save-button";
  saveButton.dataset.saveId = destination.id;
  saveButton.addEventListener("click", () => toggleSaved(destination.id));

  content.append(meta, title, description, location, saveButton);
  card.append(content);
  cardsById.set(destination.id, card);
  syncSaveButton(saveButton, destination);
  return card;
}

function syncSaveButton(button, destination) {
  const isSaved = savedIds.has(destination.id);
  button.setAttribute("aria-pressed", String(isSaved));
  button.setAttribute("aria-label", `${isSaved ? "Remove" : "Save"} ${destination.name} ${isSaved ? "from" : "to"} shortlist`);
  button.textContent = isSaved ? "Saved" : "Save place";
}

function toggleSaved(id) {
  const destination = destinations.find((item) => item.id === id);
  if (!destination) return;

  if (savedIds.has(id)) {
    savedIds.delete(id);
    saveStatus.textContent = `${destination.name} removed from your shortlist.`;
  } else {
    savedIds.add(id);
    saveStatus.textContent = `${destination.name} added to your shortlist.`;
  }

  persistSavedIds();
  syncSaveButton(cardsById.get(id).querySelector(".save-button"), destination);
  renderSavedPlaces();
}

function renderSavedPlaces() {
  savedList.replaceChildren();
  const savedDestinations = destinations.filter((destination) => savedIds.has(destination.id));
  savedCount.textContent = String(savedDestinations.length);
  navSavedCount.textContent = String(savedDestinations.length);
  shortlistEmpty.hidden = savedDestinations.length > 0;
  clearSavedButton.disabled = savedDestinations.length === 0;

  for (const destination of savedDestinations) {
    const item = document.createElement("li");
    item.className = "saved-item";
    const text = document.createElement("div");
    const name = document.createElement("strong");
    name.textContent = destination.name;
    const location = document.createElement("span");
    location.textContent = `${destination.categoryLabel} · ${destination.location}`;
    text.append(name, location);

    const removeButton = document.createElement("button");
    removeButton.className = "remove-button";
    removeButton.type = "button";
    removeButton.textContent = "Remove";
    removeButton.setAttribute("aria-label", `Remove ${destination.name} from shortlist`);
    removeButton.addEventListener("click", () => toggleSaved(destination.id));
    item.append(text, removeButton);
    savedList.append(item);
  }
}

function updateDestinations() {
  const query = searchInput.value.trim().toLocaleLowerCase();
  let visibleCount = 0;

  for (const [id, card] of cardsById) {
    const matchesCategory = activeFilter === "all" || card.dataset.category === activeFilter;
    const matchesSearch = card.dataset.search.includes(query);
    const visible = matchesCategory && matchesSearch;
    card.hidden = !visible;
    if (visible) visibleCount += 1;
  }

  resultsStatus.textContent = `Showing ${visibleCount} of ${destinations.length} ${visibleCount === 1 ? "destination" : "destinations"}`;
  emptyState.hidden = visibleCount > 0;
}

destinationGrid.append(...destinations.map(createDestinationCard));
renderSavedPlaces();
updateDestinations();

for (const button of filterButtons) {
  button.addEventListener("click", () => {
    activeFilter = button.dataset.filter;
    for (const filter of filterButtons) {
      const active = filter === button;
      filter.classList.toggle("is-active", active);
      filter.setAttribute("aria-pressed", String(active));
    }
    updateDestinations();
  });
}

searchInput.addEventListener("input", updateDestinations);
clearSavedButton.addEventListener("click", () => {
  if (savedIds.size === 0) return;
  savedIds.clear();
  persistSavedIds();
  for (const destination of destinations) {
    const button = cardsById.get(destination.id).querySelector(".save-button");
    syncSaveButton(button, destination);
  }
  renderSavedPlaces();
  saveStatus.textContent = "Your shortlist has been cleared.";
});

document.addEventListener("keydown", (event) => {
  if (event.key === "/" && document.activeElement !== searchInput && !["INPUT", "TEXTAREA"].includes(document.activeElement.tagName)) {
    event.preventDefault();
    searchInput.focus();
  }

  if (event.key === "Escape" && document.activeElement === searchInput) {
    searchInput.value = "";
    searchInput.blur();
    updateDestinations();
  }
});