const savingPlans = [
  {
    title: "Bali Vacation",
    date: "August 25 2022",
    balance: "$ 1950,21",
    balanceTop: "$ 4000",
    percentage: "48%",
  },
  {
    title: "New Gadget",
    date: "August 25 2022",
    balance: "$ 790,21",
    balanceTop: "$ 1000",
    percentage: "79%",
  },
  {
    title: "Charity",
    date: "August 25 2022",
    balance: "$ 32,111",
    balanceTop: "$ 100",
    percentage: "32%",
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

  savingPlanContainer.appendChild(savingPlanHeadingContainer);

  return savingPlanContainer;
}
