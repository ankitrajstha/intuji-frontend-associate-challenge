const navigationItems = [
  { navItem: "Dashboard", icon: "element-4.svg", active: true, href: "#" },
  { navItem: "Schedule", icon: "Calendar.svg", active: false, href: "#" },
  { navItem: "Messages", icon: "sms.svg", active: false, href: "#" },
  { navItem: "Analytics", icon: "Chart.svg", active: false, href: "#" },
  { navItem: "Team", icon: "profile-2user.svg", active: false, href: "#" },
];

const middleLinks = [
  { navItem: "Profile", icon: "user.svg", active: false, href: "#" },
  { navItem: "Settings", icon: "setting.svg", active: false, href: "#" },
];

const bottomLinks = [
  { navItem: "Help", icon: "info-circle.svg", active: false, href: "#" },
  { navItem: "Logout", icon: "login.svg", active: false, href: "#" },
];

export default function SideBar() {
  const sideBar = document.createElement("aside");
  sideBar.className = "sidebar-container";

  const logoContainer = document.createElement("div");
  logoContainer.className = "logo-container";
  const img = document.createElement("img");
  img.className = "logo-icon";
  img.alt = "gallery";
  img.src = "gallery.svg";
  logoContainer.appendChild(img);
  sideBar.appendChild(logoContainer);

  const navigation = document.createElement("nav");
  navigation.className = "navigation-container";

  const navigationLists = document.createElement("ul");
  navigationLists.className = "navigation-lists";

  navigationItems.forEach(({ navItem, icon, active, href }) => {
    const navigationsList = document.createElement("li");
    navigationsList.className = `navigation-list ${active ? "active" : ""}`;

    const navLink = document.createElement("a");
    navLink.href = href;
    navLink.className = "navlink";

    const navigationEl = document.createElement("div");
    navigationEl.className = "navEl-container";

    const iconImage = document.createElement("img");
    iconImage.className = "navigation-icon";
    iconImage.src = icon;
    iconImage.alt = `${navItem} icon`;

    const navText = document.createElement("span");
    navText.className = "navigation-name";
    navText.textContent = navItem;

    navigationEl.appendChild(iconImage);
    navigationEl.appendChild(navText);
    navLink.appendChild(navigationEl);
    navigationsList.appendChild(navLink);
    navigationLists.appendChild(navigationsList);
  });

  navigation.appendChild(navigationLists);

  const line = document.createElement("div");
  line.className = "line";
  navigation.appendChild(line);

  const middleLists = document.createElement("ul");
  middleLists.className = "middle-lists";

  middleLinks.forEach(({ navItem, icon, active, href }) => {
    const middleList = document.createElement("li");
    middleList.className = `middle-list ${active ? "active" : ""}`;

    const middleLink = document.createElement("a");
    middleLink.href = href;
    middleLink.className = "middle-link";

    const middleEl = document.createElement("div");
    middleEl.className = "middleEl-container";

    const iconImage = document.createElement("img");
    iconImage.className = "middle-icon";
    iconImage.src = icon;
    iconImage.alt = `${navItem} icon`;

    const navText = document.createElement("span");
    navText.className = "middle-name";
    navText.textContent = navItem;

    middleEl.appendChild(iconImage);
    middleEl.appendChild(navText);
    middleLink.appendChild(middleEl);
    middleList.appendChild(middleLink);
    middleLists.appendChild(middleList);
  });

  navigation.appendChild(middleLists);
  sideBar.appendChild(navigation);

  const bottomLists = document.createElement("ul");
  bottomLists.className = "bottom-lists";

  bottomLinks.forEach(({ navItem, icon, active, href }) => {
    const bottomList = document.createElement("li");
    bottomList.className = `bottom-list ${active ? "active" : ""}`;

    const bottomLink = document.createElement("a");
    bottomLink.href = href;
    bottomLink.className = "bottom-link";

    const bottomEl = document.createElement("div");
    bottomEl.className = "bottomEl-container";

    const iconImage = document.createElement("img");
    iconImage.className = "bottom-icon";
    iconImage.src = icon;
    iconImage.alt = `${navItem} icon`;

    const navText = document.createElement("span");
    navText.className = "bottom-name";
    navText.textContent = navItem;

    bottomEl.appendChild(iconImage);
    bottomEl.appendChild(navText);
    bottomLink.appendChild(bottomEl);
    bottomList.appendChild(bottomLink);
    bottomLists.appendChild(bottomList);
  });

  sideBar.appendChild(bottomLists);
  return sideBar;
}
