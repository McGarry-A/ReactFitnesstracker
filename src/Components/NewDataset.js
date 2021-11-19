import { useState } from "react";
import { Table, Row, Form, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

export const NewDataset = ({ title, index, state, setState }) => {
  const [input, setInput] = useState("");

  const newGoal = () => {
    switch (index) {
      case "1":
        setNewGoal("bench", input);
        break;
      case "2":
        setNewGoal("squat", input);
        break;
      case "3":
        setNewGoal("deadlift", input);
        break;
      case "4":
        setNewGoal("overheadpress", input);
        break;
      default:
        console.log("Error in switch statement");
        break;
    }
  };

  const setNewGoal = (exercise, newGoal) => {
    const newState = {
      ...state,
    };

    newState.goals[exercise] = newGoal;
    console.log(newState);
    setState(newState);
    setInput("");
  };

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const handleClick = () => {
    newGoal(index);
  };

  return (
    <Table className="table">
      <Row>
        <Col>
          <Form.Label column lg={2}>
            {title}
          </Form.Label>
        </Col>
        <Col>
          <Form.Control
            onChange={(e) => handleChange(e)}
            type="number"
            placeholder="KG"
          />
        </Col>
        <Col>
          <FontAwesomeIcon size="2x" onClick={handleClick} icon={faCheck} />
        </Col>
      </Row>
    </Table>
  );
};
