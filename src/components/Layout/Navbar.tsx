import React from "react";
import "./Navbar.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { faCheckSquare } from "@fortawesome/free-solid-svg-icons";

const TaskNav: React.FC = () => {
  const icon: IconProp = faCheckSquare;

  return (
    <div className={`nav-bar`}>
      <FontAwesomeIcon icon={icon} size={"2x"} />
    </div>
  );
};

export default TaskNav;
