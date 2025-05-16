import Contents from "../components/Content";
import SideBar from "../components/Sidebar";
import "../css/style.scss";

const app = document.getElementById("app");

const layout = document.createElement("div");
layout.className = "layout";

layout.appendChild(SideBar());
layout.appendChild(Contents());

app.appendChild(layout);
