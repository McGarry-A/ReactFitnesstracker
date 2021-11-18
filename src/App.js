import { useState } from "react";
import { Donught } from "./Charts/Donught";
import { LineChart } from "./Charts/LineChart";
import { MaxContainer } from "./Styles/Styles";
import { initialData } from "./InitialData";
import { FirstRow, SecondRow, DonughtRow } from "./Styles/Styles";
import { Header } from "./Components/Header";
import { NavRouter } from "./Components/NavRouter";

function App() {
  const [state, setState] = useState(initialData);

  return (
    <>
      <Header />
      <FirstRow>
        <LineChart
          benchDataset={state.previousLifts.bench}
          squatDataset={state.previousLifts.squat}
          deadliftDataset={state.previousLifts.deadlift}
          ohpDataset={state.previousLifts.overheadpress}
        />
        <MaxContainer>
          <h3>Progress Towards Goals</h3>
          <DonughtRow>
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
          </DonughtRow>
          <DonughtRow>
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
          </DonughtRow>
        </MaxContainer>
      </FirstRow>
      <NavRouter state={state} setState={setState} />
        
    </>
  );
}

export default App;
