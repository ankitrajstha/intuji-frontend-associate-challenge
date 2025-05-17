const overviewCardItems = [
  {
    icon: "empty-wallet.svg",
    heading: "Your Balance",
    subHeading: "15 % compared with last month",
    subHeadingIcon: "export.svg",
    balance: "$ 28,891.138",
    active: true,
  },
  {
    icon: "save-2.svg",
    heading: "Saving",
    subHeading: "10 % compared with last month",
    subHeadingIcon: "export-1.svg",
    balance: "$ 1,050.44",
    active: false,
  },
  {
    icon: "direct-up.svg",
    heading: "Saving",
    subHeading: "2 % compared with last month",
    subHeadingIcon: "export-3.svg",
    balance: "$ 200.31",
    active: false,
  },
  {
    icon: "direct-down.svg",
    heading: "Saving",
    subHeading: "8 % compared with last month",
    subHeadingIcon: "export-4.svg",
    balance: "$ 21,121.0",
    active: false,
  },
];

export default function Overview() {
  const overViewContainer = document.createElement("div");
  overViewContainer.className = "overview-container";

  const overviewHeading = document.createElement("h2");
  overviewHeading.className = "heading-2";
  overviewHeading.innerText = "Overview";

  const overViewCardContainer = document.createElement("div");
  overViewCardContainer.className = "overview-card-container";

  function createCard(overviewCardItem) {
    const card = document.createElement("div");
    card.className = `card ${overviewCardItem.active ? "active" : ""}`;

    const cardContainer = document.createElement("div");
    cardContainer.className = "card-container";

    const cardTop = document.createElement("div");
    cardTop.className = "card-top";

    const cardIconContainer = document.createElement("div");
    cardIconContainer.className = `card-icon-container ${
      overviewCardItem.active ? "active" : ""
    }`;

    const cardIcon = document.createElement("div");
    cardIcon.className = `card-icon ${overviewCardItem.active ? "active" : ""}`;
    cardIcon.style.backgroundImage = `url(${overviewCardItem.icon})`;
    cardIconContainer.appendChild(cardIcon);

    const cardHeadingContainer = document.createElement("div");
    cardHeadingContainer.className = "card-heading-container";

    const cardHeading = document.createElement("h3");
    cardHeading.className = `${overviewCardItem.active ? "active" : ""}`;
    cardHeading.innerText = `${overviewCardItem.heading}`;

    const subHeadingContainer = document.createElement("div");
    subHeadingContainer.className = "subheading-container";

    const subHeadingIcon = document.createElement("div");
    subHeadingIcon.className = "subheading-icon";
    subHeadingIcon.style.backgroundImage = `url(${overviewCardItem.subHeadingIcon})`;

    const subHeading = document.createElement("p");
    subHeading.className = `${overviewCardItem.active ? "active" : ""}`;
    subHeading.textContent = `${overviewCardItem.subHeading}`;

    subHeadingContainer.appendChild(subHeadingIcon);
    subHeadingContainer.appendChild(subHeading);

    cardHeadingContainer.appendChild(cardHeading);
    cardHeadingContainer.appendChild(subHeadingContainer);

    cardTop.appendChild(cardIconContainer);
    cardTop.appendChild(cardHeadingContainer);

    const line = document.createElement("div");
    line.className = `line ${overviewCardItem.active ? "active" : ""}`;

    const cardBottom = document.createElement("div");
    cardBottom.className = "card-bottom";

    const balance = document.createElement("span");
    balance.className = `balance ${overviewCardItem.active ? "active" : ""}`;
    balance.textContent = `${overviewCardItem.balance}`;

    const rightarrow = document.createElement("div");
    rightarrow.className = `right-arrow ${
      overviewCardItem.active ? "active" : ""
    }`;

    cardBottom.appendChild(balance);
    cardBottom.appendChild(rightarrow);

    cardContainer.appendChild(cardTop);
    cardContainer.appendChild(line);
    cardContainer.appendChild(cardBottom);
    card.appendChild(cardContainer);

    return card;
  }

  for (let i = 0; i < overviewCardItems.length; i++) {
    overViewCardContainer.appendChild(createCard(overviewCardItems[i]));
  }

  overViewContainer.appendChild(overviewHeading);
  overViewContainer.appendChild(overViewCardContainer);

  return overViewContainer;
}
