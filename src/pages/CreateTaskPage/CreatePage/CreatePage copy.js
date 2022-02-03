import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { getRandom } from "../../../utils";
import { useSelector } from "react-redux";
import store from "../../../store/store";
import "../style.scss";
const selectTasks = (state) => state.tasks;

const CreatePage = () => {
  const { tasks } = useSelector(selectTasks);
  const [values, setValue] = useState({ taskDescription: "", taskName: "" });
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    let newColor = getRandom(6, 100);
    let prevColor = tasks.length > 0 ? tasks[tasks.length - 1].color : newColor;
    let color = prevColor === newColor ? ++newColor % 6 : newColor;

    store.dispatch({
      type: "task/createTask",
      payload: { ...values, completed: false, color },
    });
    navigate("/");
  };
  return (
    <div className="create-task">
      <h1> Add Task </h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={values.taskName}
          placeholder="Task Name"
          className="input-class"
          required
          onChange={(e) => {
            e.preventDefault();
            setValue({ ...values, taskName: e.target.value });
          }}
        />
        <input
          type="text"
          value={values.taskDescription}
          className="input-class"
          placeholder="Task Description"
          required
          onChange={(e) => {
            e.preventDefault();
            setValue({ ...values, taskDescription: e.target.value });
          }}
        />
        <button type="submit" tabIndex={"0"} className="add-button">
          {" "}
          Add{" "}
        </button>
      </form>
    </div>
  );
};

export default CreatePage;
