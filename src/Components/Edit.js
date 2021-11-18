import { useState } from "react";
import { SecondRow } from "../Styles/Styles";
import { BsDropdown } from "./BsDropdown";
import { Table } from "react-bootstrap";

export const Edit = ({ state, setState }) => {
  const [lift, setLift] = useState("bench");

  const handleLift = (e) => {
    setLift(e.target.value.toLowerCase());
  };

  const handleClick = (index) => {
    let newState = {
      ...state,
    };
    let newMax = 0;

    newState.previousLifts[lift].splice(index, 1);

    for (let i = 0; i < newState.previousLifts[lift].length; i++) {
      if (newState.previousLifts[lift][i].y > newMax) {
        newMax = newState.previousLifts[lift][i].y;
      }
    }

    newState.currentMaxes[lift] = newMax;
    setState(newState);
  };

  const inputStyling = {
      height: "15px",
      marginRight: "20px",
      marginTop: "5em"
  }

  return (
    <SecondRow>
        <BsDropdown></BsDropdown>
      <div>
        <label>Exercise Name: </label>
        <input
          style={inputStyling}
          list="lifts"
          id="newLifts"
          name="newLifts"
          onChange={(e) => handleLift(e)}
        />
      </div>
      <datalist id="lifts">
        <option value="Bench" />
        <option value="Squat" />
        <option value="Deadlift" />
        <option value="Overheadpress" />
      </datalist>
      <Table striped bordered hover style={{width:"600px"}}>
        <tr>
          <th>Date</th>
          <th>Lift</th>
          <th>Amount (KG)</th>
          <th>Delete</th>
        </tr>
        {state.previousLifts[lift].map((el, index) => {
          return (
            <tr>
              <td>{el.x}</td>
              <td>{lift}</td>
              <td>{el.y}</td>
              <td>
                <button onClick={() => handleClick(index)}>Delete</button>
              </td>
            </tr>
          );
        })}
        </Table>
    </SecondRow>
  );
};
