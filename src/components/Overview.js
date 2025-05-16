export default function Overview() {
  const overViewContainer = document.createElement("div");
  overViewContainer.className = "overview-container";

  const overviewHeading = document.createElement("h2");
  overviewHeading.className = "heading-2";
  overviewHeading.innerText = "Overview";

  const overViewCardContainer = document.createElement("div");
  overViewCardContainer.className = "overview-card-container";

  const card = document.createElement("div");
  card.className = "card";

  const cardContainer = document.createElement("div");
  cardContainer.className = "card-container";

  card.appendChild(cardContainer);

  const cardTop = document.createElement("div");
  cardTop.className = "card-top";

  const cardIconContainer = document.createElement("div");
  cardIconContainer.className = "card-icon-container";
  cardTop.appendChild(cardIconContainer);

  const cardIcon = document.createElement("img");
  cardIcon.className = "card-icon";
  cardIcon.src = "empty-wallet.svg";
  cardIcon.alt = "empty-wallet-logo";

  const cardHeadingContainer = document.createElement("div");
  cardHeadingContainer.className = "card-heading-container";
  cardTop.appendChild(cardHeadingContainer);

  const cardHeading = document.createElement("h3");
  cardHeading.innerText = "Your Balance";

  cardHeadingContainer.appendChild(cardHeading);

  const subHeadingContainer = document.createElement("div");
  subHeadingContainer.className = "subheading-container";

  const subHeadingIcon = document.createElement("img");
  subHeadingIcon.src = "export.svg";
  subHeadingIcon.alt = "export.svg-logo";

  const subHeading = document.createElement("p");
  subHeading.textContent = "15 % compared with last month";

  subHeadingContainer.appendChild(subHeadingIcon);
  subHeadingContainer.appendChild(subHeading);

  cardIconContainer.appendChild(cardIcon);

  cardHeadingContainer.appendChild(subHeadingContainer);

  const line = document.createElement("div");
  line.className = "line";

  const cardBottom = document.createElement("div");
  cardBottom.className = "card-bottom";

  const balance = document.createElement("span");
  balance.className = "balance";
  balance.textContent = "$ 28,891.138";

  const rightarrow = document.createElement("img");
  rightarrow.className = "right-arrow";
  rightarrow.src = "arrow-right.svg";
  rightarrow.alt = "arrow-right-logo";

  cardBottom.appendChild(balance);
  cardBottom.appendChild(rightarrow);

  cardContainer.appendChild(cardTop);
  cardContainer.appendChild(line);
  cardContainer.appendChild(cardBottom);

  overViewCardContainer.appendChild(card);

  overViewContainer.appendChild(overviewHeading);
  overViewContainer.appendChild(overViewCardContainer);
  return overViewContainer;
}
