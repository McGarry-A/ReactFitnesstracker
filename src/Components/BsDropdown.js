import { Dropdown } from "react-bootstrap";

export const BsDropdown = ({lift, setLift}) => {

  const handleLift = (e) => {
    setLift(e.target.value);
    console.log(lift)
  };

  return (
    <Dropdown onSelect={(event, eventKey) => setLift(eventKey.target.innerHTML)}>
      <Dropdown.Toggle variant="secondary" id="dropdown-basic">
        {lift}
      </Dropdown.Toggle>

      <Dropdown.Menu onChange={(e)=>handleLift(e)}>
        <Dropdown.Item>bench</Dropdown.Item>
        <Dropdown.Item>squat</Dropdown.Item>
        <Dropdown.Item>deadlift</Dropdown.Item>
        <Dropdown.Item>overheadpress</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
};
