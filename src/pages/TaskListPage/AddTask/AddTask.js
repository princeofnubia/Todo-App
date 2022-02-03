import { useNavigate } from "react-router-dom";
import Button from "../../../components/Button/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
const AddTask = () => {
  const navigate = useNavigate();
  return (
    <>
      <Button label="add-task" handleClick={() => navigate("/createtask")}>
        <FontAwesomeIcon icon={faPlus} className="icon-color" />
      </Button>
    </>
  );
};

export default AddTask;
