import {
  CategoryScale,
  Chart,
  ChartOptions,
  Filler,
  Legend,
  LinearScale,
  LineElement,
  PointElement,
  Title,
  Tooltip,
} from "chart.js";
import { Line } from "react-chartjs-2";

Chart.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend
);

const options: ChartOptions<"line"> = {
  responsive: true,
  plugins: {
    legend: {
      position: "top",
      display: false,
    },
  },
  scales: {
    x: {
      grid: {
        display: true,
      },
    },
    y: {
      grid: {
        display: true,
      },
      ticks: {
        stepSize: 50,
      },
    },
  },
};

const data = {
  labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
  datasets: [
    {
      fill: true,
      label: "Dataset 1",
      data: [30, 60, 90, 120, 150, 180],
      borderColor: "#2082FB",
      borderWidth: 2,
      backgroundColor: "rgba(179, 184, 237, 0.8)",
      pointBackgroundColor: "#2082FB",
      pointBorderColor: "#fff",
      pointHoverBackgroundColor: "#2082FB",
      pointHoverBorderColor: "#2082FB",
      pointRadius: 6,
      pointHoverRadius: 6,
    },
    {
      fill: true,
      label: "Dataset 2",
      data: [40, 80, 120, 160, 200, 240],
      borderColor: "#DAE2F3",
      borderWidth: 2,
      backgroundColor: "rgba(179, 201, 237, 0.8)",
      pointBackgroundColor: "#DAE2F3",
      pointBorderColor: "#fff",
      pointHoverBackgroundColor: "#DAE2F3",
      pointHoverBorderColor: "#DAE2F3",
      pointRadius: 6,
      pointHoverRadius: 6,
    },
    {
      fill: true,
      label: "Dataset 3",
      data: [20, 70, 120, 170, 220, 250],
      borderColor: "#DAE2F3",
      borderWidth: 2,
      backgroundColor: "rgba(179, 219, 237, 0.8)",
      pointBackgroundColor: "#DAE2F3",
      pointBorderColor: "#fff",
      pointHoverBackgroundColor: "#DAE2F3",
      pointHoverBorderColor: "#DAE2F3",
      pointRadius: 6,
      pointHoverRadius: 6,
    },
  ],
};

function VacancyChart() {
  return <Line options={options} data={data} />;
}

export default VacancyChart;
