import { SecondRow } from "../Styles/Styles"
import { NewRecord } from "./NewRecord"
import { SetNewGoal } from "./SetNewGoals"

export const Home = ({state, setState}) => {
    return (
        <SecondRow>
          <NewRecord state={state} setState={setState} />
          <SetNewGoal
            title="Update Goals"
            state={state}
            setState={setState}
          />
        </SecondRow>
    )
}

