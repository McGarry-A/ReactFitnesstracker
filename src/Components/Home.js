import { NewRecord } from "./NewRecord"
import { SetNewGoal } from "./SetNewGoals"

export const Home = ({state, setState}) => {
    return (
        <div className="link-wrapper">
          <NewRecord state={state} setState={setState} />
          <SetNewGoal
            title="Update Goals"
            state={state}
            setState={setState}
          />
        </div>
    )
}

