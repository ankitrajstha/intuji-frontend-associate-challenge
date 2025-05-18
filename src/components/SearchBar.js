export default function SearchBar() {
  const searchBarContainer = document.createElement("div");
  searchBarContainer.className = "searchbar-container";

  const searchInput = document.createElement("input");
  searchInput.type = "text";
  searchInput.className = "searchbar";
  searchInput.placeholder = "Search here...";

  const searchIcon = document.createElement("span");
  searchIcon.className = "search-icon";
  const searchIconImage = document.createElement("img");
  searchIconImage.src = "search-normal.png";
  searchIconImage.alt = "Search icon";

  searchIcon.appendChild(searchIconImage);
  searchBarContainer.append(searchIcon);
  searchBarContainer.appendChild(searchInput);

  return searchBarContainer;
}
