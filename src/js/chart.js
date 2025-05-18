import ApexCharts from "apexcharts";
export function renderAnalyticsChart() {
  const options = {
    chart: {
      type: "area",
      height: 304,
      toolbar: { show: false },
    },
    colors: ["#F8CD70", "#4745A4"],
    dataLabels: { enabled: false },
    stroke: { curve: "smooth", width: 2 },
    series: [
      {
        name: "Label 1",
        data: [10000, 12000, 11000, 16000, 9000, 20000, 17000],
      },
      {
        name: "Label 2",
        data: [4000, 6000, 8000, 9000, 7000, 8500, 11000],
      },
    ],
    xaxis: {
      categories: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
    },
    legend: { show: false },
    grid: { strokeDashArray: 4 },
  };

  const chart = new ApexCharts(
    document.querySelector("#analytics-chart"),
    options
  );
  chart.render();
}
