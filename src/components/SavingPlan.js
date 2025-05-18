const savingPlans = [
  {
    title: "Bali Vacation",
    date: "August 25 2022",
    balance: "$ 1950,21",
    balanceTop: "$ 4000",
    percentage: "48%",
    color: "#4745A4",
  },
  {
    title: "New Gadget",
    date: "August 25 2022",
    balance: "$ 790,21",
    balanceTop: "$ 1000",
    percentage: "79%",
    color: "#DD9802",
  },
  {
    title: "Charity",
    date: "August 25 2022",
    balance: "$ 32,111",
    balanceTop: "$ 100",
    percentage: "32%",
    color: "#3BBB6E",
  },
];

export default function SavingPlan() {
  const savingPlanContainer = document.createElement("div");
  savingPlanContainer.className = "savingplan-container";

  const savingPlanHeadingContainer = document.createElement("div");
  savingPlanHeadingContainer.className = "savingplan-heading-container";

  const savingPlanHeader = document.createElement("h2");
  savingPlanHeader.textContent = "Saving Plan";

  const seeAll = document.createElement("a");
  seeAll.textContent = "See All";

  savingPlanHeadingContainer.appendChild(savingPlanHeader);
  savingPlanHeadingContainer.appendChild(seeAll);

  const line = document.createElement("div");
  line.className = "line";

  const progressBarWrapper = document.createElement("div");
  progressBarWrapper.className = "progressbar-wrapper";

  function createProgressBar(item) {
    const progressBarContainer = document.createElement("div");
    progressBarContainer.className = "progressbar-container";

    const progressBarHeadingContainer = document.createElement("div");
    progressBarHeadingContainer.className = "progressbar-heading-container";

    const progressBarTitle = document.createElement("h3");
    progressBarTitle.textContent = `${item.title}`;

    const target = document.createElement("p");
    target.innerText = `Target: ${item.date}`;

    progressBarHeadingContainer.appendChild(progressBarTitle);
    progressBarHeadingContainer.appendChild(target);

    const progressContainer = document.createElement("div");
    progressContainer.className = "progress-container";

    const targetContainer = document.createElement("div");
    targetContainer.className = "target-container";

    const div = document.createElement("div");

    const balancevalue = document.createElement("span");
    balancevalue.innerText = `${item.balance}`;
    balancevalue.className = "balance-value";

    const balanceTop = document.createElement("span");
    balanceTop.innerText = `/${item.balanceTop}`;
    balanceTop.className = "balance-top";

    const percentage = document.createElement("span");
    percentage.innerText = `${item.percentage}`;
    percentage.className = "percentage";
    percentage.style.color = `${item.color}`;

    div.appendChild(balancevalue);
    div.appendChild(balanceTop);
    targetContainer.appendChild(div);
    targetContainer.appendChild(percentage);

    const progress = document.createElement("div");
    progress.className = "progress";

    const progressComplete = document.createElement("div");
    progressComplete.className = "progress-complete";
    progressComplete.style.backgroundColor = `${item.color}`;
    progressComplete.style.width = `0`;

    requestAnimationFrame(() => {
      progressComplete.style.width = item.percentage;
    });

    progress.appendChild(progressComplete);

    progressContainer.appendChild(targetContainer);
    progressContainer.appendChild(progress);

    progressBarContainer.appendChild(progressBarHeadingContainer);
    progressBarContainer.appendChild(progressContainer);

    return progressBarContainer;
  }

  savingPlanContainer.appendChild(savingPlanHeadingContainer);
  savingPlanContainer.appendChild(line);
  savingPlanContainer.appendChild(progressBarWrapper);

  for (let i = 0; i < savingPlans.length; i++) {
    const progressBar = createProgressBar(savingPlans[i]);
    progressBarWrapper.appendChild(progressBar);
  }
  return savingPlanContainer;
}
