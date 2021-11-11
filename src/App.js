import { useState } from "react";
import { Donught } from "./Charts/Donught";
import { LineChart } from "./Charts/LineChart";
import { MaxContainer } from "./Components/GlobalStyles";
import { SetNewGoal } from "./Components/SetNewGoals";
import { initialData } from "./InitialData";
import { NewRecord } from "./Components/NewRecord";
import { FirstRow } from "./Components/FirstRowStyles"
import { SecondRow } from "./Components/SecondRowStyles"
function App() {
  const [state, setState] = useState(initialData);

  return (
    <>
    <h1>1 REP MAX TRACKER</h1>
      <FirstRow>
        <LineChart
          benchDataset={state.previousLifts.bench}
          squatDataset={state.previousLifts.squat}
          deadliftDataset={state.previousLifts.deadlift}
          ohpDataset={state.previousLifts.overheadpress}
        />
        <NewRecord state={state} setState={setState} />
      </FirstRow>
      <SecondRow>
      <MaxContainer>
        <Donught
          goal={state.goals.bench}
          currentMax={state.currentMaxes.bench}
          lift="BenchPress"
        />
        <Donught
          goal={state.goals.squat}
          currentMax={state.currentMaxes.squat}
          lift="Squat"
        />
        <Donught
          goal={state.goals.deadlift}
          currentMax={state.currentMaxes.deadlift}
          lift="Deadlift"
        />
        <Donught
          goal={state.goals.overheadpress}
          currentMax={state.currentMaxes.overheadpress}
          lift="Overhead Press"
        />
      </MaxContainer>
        <SetNewGoal
          title="Update Goals"
          goals={state.goals}
          state={state}
          setState={setState}
        />
        </SecondRow>
      
    </>
  );
}

export default App;
