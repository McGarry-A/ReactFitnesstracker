import { NewDataset } from "./NewDataset";
import {SetNewGoals } from "../Styles/Styles"

export const SetNewGoal = ({ state, setState }) => {
  return (
    <SetNewGoals>
      <h3>Set New Goals</h3>
      <NewDataset title="Bench" index="1" state={state} setState={setState} />
      <NewDataset title="Squat" index="2" state={state} setState={setState} />
      <NewDataset
        title="Deadlift"
        index="3"
        state={state}
        setState={setState}
      />
      <NewDataset
        title="Overhead Press"
        index="4"
        state={state}
        setState={setState}
      />
    </SetNewGoals>
  );
};
