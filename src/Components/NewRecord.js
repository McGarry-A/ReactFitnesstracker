import ReactDatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useState } from "react";
import { getTodaysDate } from "../utils/getTodaysDate";

export const NewRecord = ({ state, setState }) => {
  const [startDate, setStartDate] = useState(new Date());
  const [lift, setLift] = useState("");
  const [amount, setAmount] = useState("");
  const [dateSelected, setDateSelected] = useState(getTodaysDate());

  const handleLift = (e) => setLift(e.target.value.toLowerCase());
  const handleAmount = (e) => setAmount(e.target.value);
  const handleDateChange = (date) => {
    setStartDate(date);
    console.log(date)
    setDateSelected(startDate.toISOString().split("T")[0]);
  };
  const handleSubmit = () => {
    if (lift === "overhead press") {
      let newLift = lift.split(" ").join("");
      setLift(newLift);
    }

    let newState = {
      ...state,
    };

    newState = {
      ...newState,
      previousLifts: {
        ...newState.previousLifts,
        [lift]: [
          ...newState.previousLifts[lift],
          { x: dateSelected, y: amount },
        ],
      },
    };

    for (let i = 0; i < newState.previousLifts[lift].length; i++) {
      if (newState.previousLifts[lift][i].y < amount) {
        newState.currentMaxes[lift] = amount;
      }
    }

    setState(newState);
  };

  

  return (
    <div className="new-record-wrapper">
      <h3 className="subtitle">New Max Attempt</h3>
      <label>Date</label>
      <ReactDatePicker
        selected={startDate}
        onChange={(date) => handleDateChange(date)}
        maxDate={()=>getTodaysDate}
        format="dd-mm-yyyy"
      />
      <label>Exercise Name</label>
      <input
        list="lifts"
        id="newLifts"
        name="newLifts"
        onChange={(e) => handleLift(e)}
      />
      <datalist id="lifts">
        <option value="Bench" />
        <option value="Squat" />
        <option value="Deadlift" />
        <option value="Overheadpress" />
      </datalist>
      <label>Weight Lifted</label>
      <input type="number" onChange={(e) => handleAmount(e)}></input>
      <button onClick={handleSubmit}>Submit Entry</button>
    </div>
  );
};
