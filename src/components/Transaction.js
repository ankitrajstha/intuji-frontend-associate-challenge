const recentTransactions = [
  {
    icon: "gallery.svg",
    title: "Figma",
    date: "August 20,2022",
    total: "$100",
    status: "Completed",
  },
  {
    icon: "gallery.svg",
    title: "Youtube",
    date: "August 20,2022",
    total: "$120",
    status: "Completed",
  },
  {
    icon: "gallery.svg",
    title: "Spotify",
    date: "August 20,2022",
    total: "$15",
    status: "Completed",
  },
  {
    icon: "gallery.svg",
    title: "Freepik",
    date: "August 20,2022",
    total: "$300",
    status: "Completed",
  },
];

export default function Transaction() {
  const transactionContainer = document.createElement("div");
  transactionContainer.className = "transaction-container";

  const transactionHeadersContainer = document.createElement("div");
  transactionHeadersContainer.className = "transaction-header-container";

  const transactionHeader = document.createElement("h2");
  transactionHeader.innerHTML = "Recent Transaction";

  const seeAll = document.createElement("a");
  seeAll.className = "see-all";
  seeAll.innerText = "See All";

  transactionHeadersContainer.appendChild(transactionHeader);
  transactionHeadersContainer.appendChild(seeAll);

  const line = document.createElement("div");
  line.className = "line";

  const transactionsContainer = document.createElement("div");
  transactionsContainer.className = "transactions-container";

  function createTransactions(item) {
    const transactionWrapper = document.createElement("div");
    transactionWrapper.className = "transaction-container";

    const leftContainer = document.createElement("div");
    leftContainer.className = "left-container";

    const iconContainer = document.createElement("div");
    iconContainer.className = "icon-container";

    const icon = document.createElement("div");
    icon.className = "icon";
    icon.style.backgroundImage = `url(${item.icon})`;

    const textContainer = document.createElement("div");
    textContainer.className = "text-container";

    const title = document.createElement("h3");
    title.innerText = `${item.title}`;

    const date = document.createElement("p");
    date.innerText = `${item.date}`;

    textContainer.appendChild(title);
    textContainer.appendChild(date);

    iconContainer.appendChild(icon);

    leftContainer.appendChild(iconContainer);
    leftContainer.appendChild(textContainer);
    transactionWrapper.appendChild(leftContainer);

    return transactionWrapper;
  }

  recentTransactions.forEach((transaction) => {
    transactionsContainer.appendChild(createTransactions(transaction));
  });
  transactionContainer.appendChild(transactionHeadersContainer);
  transactionContainer.appendChild(line);
  transactionContainer.appendChild(transactionsContainer);
  return transactionContainer;
}
