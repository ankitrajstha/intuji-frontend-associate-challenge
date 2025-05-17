import Actions from "./Actions";
import Overview from "./Overview";
import SavingPlan from "./SavingPlan";
import SearchBar from "./SearchBar";

export default function Contents() {
  const contents = document.createElement("main");
  contents.className = "contents";

  const topContents = document.createElement("section");
  topContents.className = "top-contents";

  contents.appendChild(topContents);

  topContents.appendChild(SearchBar());
  topContents.appendChild(Actions());

  const gridLayout = document.createElement("section");
  gridLayout.className = "grid-layout";

  gridLayout.appendChild(Overview());
  gridLayout.appendChild(SavingPlan());

  contents.appendChild(gridLayout);

  return contents;
}
