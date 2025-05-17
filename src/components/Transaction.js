export default function Transaction() {
  const transactionContainer = document.createElement("div");
  transactionContainer.className = "transaction-conatainer";

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

  transactionContainer.appendChild(transactionHeadersContainer);
  transactionContainer.appendChild(line);
  return transactionContainer;
}
