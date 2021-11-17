import { Doughnut } from "react-chartjs-2";
import { DonughtContainer, DonughtHeading } from "./DonughtStyles";

export const Donught = ({ goal, currentMax, lift }) => {
  const remainder = goal - currentMax;

  const data = {
    labels: ["Remaining", "Current"],
    datasets: [
      {
        data: [remainder, currentMax],
        backgroundColor: ["rgba(255, 99, 132, 0.2)", "rgba(255, 159, 64, 0.2)"],
      },
    ],
  };

  const options = { 
    responsive: true,
    plugins: {
      legend: {
        position: null
      },
      title: {
        display: true,
        text: `${lift}`,
      }
    }
  }

  return (
    <DonughtContainer>
      <Doughnut data={data} options={options} />
    </DonughtContainer>
  );
};
