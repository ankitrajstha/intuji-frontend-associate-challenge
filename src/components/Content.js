import Actions from "./Actions";
import SearchBar from "./SearchBar";

export default function Contents() {
  const contents = document.createElement("main");
  contents.className = "contents";

  const topContents = document.createElement("div");
  topContents.className = "top-contents";

  contents.appendChild(topContents);

  topContents.appendChild(SearchBar());
  topContents.appendChild(Actions());
  
  return contents;
}
