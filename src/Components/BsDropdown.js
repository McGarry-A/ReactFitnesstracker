import { Dropdown } from "react-bootstrap";

export const BsDropdown = () => {
  const handleChange = (e) => {
    console.log(e.target.value);
  };
  return (
    <Dropdown>
      <Dropdown.Toggle variant="success" id="dropdown-basic">
        Exercise
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item onSelect={handleChange} href="#/action-1">Bench</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Squat</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Deadlift</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Overheadpress</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
};
