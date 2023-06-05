import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../../components/Button/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

const AddTask: React.FC = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/createtask");
  };

  return (
    <>
      <Button label="add-task" handleClick={handleClick} className={""}>
        <FontAwesomeIcon icon={faPlus} className="icon-color" />
      </Button>
    </>
  );
};

export default AddTask;
