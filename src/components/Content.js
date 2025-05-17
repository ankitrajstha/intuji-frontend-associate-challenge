import Actions from "./Actions";
import Analytics from "./Analytics";
import Overview from "./Overview";
import SavingPlan from "./SavingPlan";
import SearchBar from "./SearchBar";
import Transaction from "./Transaction";

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
  gridLayout.appendChild(Analytics());
  gridLayout.appendChild(Transaction());

  contents.appendChild(gridLayout);

  return contents;
}
