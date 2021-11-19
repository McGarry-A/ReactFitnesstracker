import { useState } from "react";
import { Table } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { BsDropdown } from "./BsDropdown";

export const Edit = ({ state, setState }) => {
  const [lift, setLift] = useState("bench");

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

  return (
    <div>
      <div className="edit-wrapper">
        <BsDropdown 
          lift={lift} 
          setLift={setLift}/>
        <br/>
        <div>
          <Table striped bordered hover style={{ width: "800px" }}>
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
                    <FontAwesomeIcon
                      className="check"
                      size="2x"
                      icon={faTrash}
                      onClick={() => handleClick(index)}
                    />
                  </td>
                </tr>
              );
            })}
          </Table>
        </div>
      </div>
    </div>
  );
};
