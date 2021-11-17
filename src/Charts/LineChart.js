import { Line } from "react-chartjs-2";
import "chartjs-adapter-date-fns";
import { LineChartContainer } from "./LineChartStyles";

export const LineChart = ({
  benchDataset,
  squatDataset,
  deadliftDataset,
  ohpDataset,
}) => {
  const data = {
    datasets: [
      {
        label: "Overhead Press",
        data: ohpDataset,
        backgroundColor: "rgba(255, 99, 132, 0.2)",
        borderColor: "rgb(255, 99, 132)",
        borderWidth: 3,
      },
      {
        label: "BenchPress",
        data: benchDataset,
        backgroundColor: "rgba(255, 159, 64, 0.2)",
        borderColor: "rgba(255, 159, 64)",
        borderWidth: 3,
      },
      {
        label: "Squat",
        data: squatDataset,
        backgroundColor: "rgba(255, 205, 86, 0.2)",
        borderColor: "rgba(255, 205, 86)",
        borderWidth: 3,
      },
      {
        label: "Deadlift",
        data: deadliftDataset,
        backgroundColor: "rgba(75, 192, 192, 0.2)",
        borderColor: "rgba(75, 192, 192",
        borderWidth: 3,
      },
    ],
  };

  const options = {
      responsive: true,
      plugins: {
        legend: {
          position: 'top',
        },
        title: {
          display: true,
          text: '1 Rep Max Over Time'
        }
      },
      scales: {
        y: {
          beginAtZero: true,
          ticks: {
            callback: (value) => `${value} KG`
          }
        }
      }
  }
  return (
    <LineChartContainer>
      <Line data={data} options={options}/>
    </LineChartContainer>
  );
};
