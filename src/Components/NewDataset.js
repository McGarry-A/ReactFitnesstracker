import { useState } from "react";

export const NewDataset = ({ title, index, state, setState }) => {

    const [input, setInput] = useState('')

    const newGoal = () => {
        switch (index) {
            case "1":
            setNewGoal("bench", input)        
                break;
            case "2":
            setNewGoal("squat", input)
                break;
            case "3":
            setNewGoal("deadlift", input)
                break;
            case "4":
            setNewGoal("overheadpress", input)
                break;
            default:
            console.log("Error in switch statement")
                break;
        }
    }

    const setNewGoal = (exercise, newGoal) => { 
        
        const newState = {
            ...state
        }

        newState.goals[exercise] = newGoal
        console.log(newState)
        setState(newState)
        setInput('')
    }

    const handleChange = e => {
        setInput(e.target.value)
        
    }

    const handleClick = () => { 
        newGoal(index)
    }

  return (
    <div>
      <label>{title}</label>
      <input type="number" onChange={(e)=>handleChange(e)}></input>
      <button onClick={handleClick}>Update</button>
    </div>
  );
};
