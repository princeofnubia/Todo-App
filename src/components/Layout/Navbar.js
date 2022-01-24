import "./Navbar.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckSquare } from "@fortawesome/free-solid-svg-icons";
const TaskNav = (props) => {
  return (
    <div className={`nav-bar`}>
      {" "}
      <FontAwesomeIcon icon={faCheckSquare} size={"2x"} />{" "}
    </div>
  );
};

export default TaskNav;
