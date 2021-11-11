import ReactDatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useState } from "react";
import { NewRecordWrapper } from "./NewRecordStyles";

export const NewRecord = ({ state, setState }) => {
  const [startDate, setStartDate] = useState(new Date());
  const [dateSelected, setDateSelected] = useState("");
  const [lift, setLift] = useState("");
  const [amount, setAmount] = useState("");

  const handleLift = (e) => setLift(e.target.value.toLowerCase());
  const handleAmount = (e) => setAmount(e.target.value);
  const handleDateChange = (date) => {
      setStartDate(date)
      setDateSelected(startDate.toISOString().split("T")[0])
  };
  const handleSubmit = () => {
    
    if (lift === "overhead press") {
      let newLift = lift.split(" ").join("")
      setLift(newLift)
      console.log(lift)
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
    console.log(newState);
    setState(newState);
  };

  return (
    <NewRecordWrapper>
      <ReactDatePicker
        selected={startDate}
        onChange={(date) => handleDateChange(date)}
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
      <input type="number"onChange={(e) => handleAmount(e)}></input>
      <button onClick={handleSubmit}>Submit Entry</button>
    </NewRecordWrapper>
  );
};
