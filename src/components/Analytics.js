export default function Analytics() {
  const analyticsContainer = document.createElement("div");
  analyticsContainer.className = "analytics-container";

  const analyticsWrapper = document.createElement("div");
  analyticsWrapper.className = "analytics-wrapper";

  const headersContainer = document.createElement("div");
  headersContainer.className = "headers-container";

  const title = document.createElement("h2");
  title.innerText = "Analytics";

  const rightContainer = document.createElement("div");
  rightContainer.className = "analytics-right-container";

  const labelsContainer = document.createElement("div");
  labelsContainer.className = "analytics-labels-container";

  const labelOneContainer = document.createElement("div");
  labelOneContainer.className = "analytics-labelone-container";

  const labelOneCircle = document.createElement("div");
  labelOneCircle.className = "analytics-labelone-circle";

  const labelOne = document.createElement("p");
  labelOne.innerText = "Label 1";

  const labelTwoContainer = document.createElement("div");
  labelTwoContainer.className = "analytics-labeltwo-container";

  const labelTwoCircle = document.createElement("div");
  labelTwoCircle.className = "analytics-labeltwo-circle";

  const labelTwo = document.createElement("p");
  labelTwo.innerText = "Label 2";

  const timePeriodContainer = document.createElement("div");
  timePeriodContainer.className = "analytics-timeperiod-container";

  const timeperiod = document.createElement("p");
  timeperiod.innerText = "Weekly";

  const dropdownContainer = document.createElement("div");
  dropdownContainer.className = "dropdown";

  const arrowIcon = document.createElement("div");
  arrowIcon.className = "arrow-icon";

  dropdownContainer.appendChild(arrowIcon);

  timePeriodContainer.appendChild(timeperiod);
  timePeriodContainer.appendChild(dropdownContainer);

  labelTwoContainer.appendChild(labelTwoCircle);
  labelTwoContainer.appendChild(labelTwo);

  labelOneContainer.appendChild(labelOneCircle);
  labelOneContainer.appendChild(labelOne);

  labelsContainer.appendChild(labelOneContainer);
  labelsContainer.appendChild(labelTwoContainer);

  rightContainer.appendChild(labelsContainer);
  rightContainer.appendChild(timePeriodContainer);

  headersContainer.appendChild(title);
  headersContainer.appendChild(rightContainer);

  analyticsWrapper.appendChild(headersContainer);

  analyticsContainer.appendChild(analyticsWrapper);
  return analyticsContainer;
}
