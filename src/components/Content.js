import SearchBar from "./SearchBar";

export default function Contents() {
  const contents = document.createElement("main");
  contents.className = "contents";

  contents.appendChild(SearchBar());
  return contents;
}
