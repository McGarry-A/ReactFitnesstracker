import { Doughnut } from "react-chartjs-2";
import { DonughtContainer } from "./DonughtStyles";

export const Donught = ({ goal, currentMax, lift }) => {
  const remainder = goal - currentMax;

  const data = {
    labels: ["Left to achieve goal", "Current lifts"],
    datasets: [
      {
        data: [remainder, currentMax],
        backgroundColor: ["rgba(255, 99, 132, 0.2)", "rgba(255, 159, 64, 0.2)"],
      },
    ],
  };

  return (
    <DonughtContainer>
      <h3>{lift}</h3>
      <Doughnut data={data} />
    </DonughtContainer>
  );
};
