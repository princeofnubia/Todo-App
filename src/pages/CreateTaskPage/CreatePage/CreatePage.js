/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getRandom } from "../../../utils";
import { useSelector } from "react-redux";
import store from "../../../store/store";
import "../style.scss";
const selectTasks = (state) => state.tasks;

const TaskInput = ({ formID, onChange, task }) => {
  return (
    <div className={"flex space-b w-100 mx-3"}>
      {" "}
      <input
        type="text"
        value={task.taskName}
        placeholder="Task Name"
        className="input-class"
        required
        onChange={(e) => {
          onChange(formID, { ...task, taskName: e.target.value });
        }}
      />
      <input
        type="text"
        value={task.taskDescription}
        className="input-class"
        placeholder="Task Description"
        required
        onChange={(e) => {
          onChange(formID, { ...task, taskDescription: e.target.value });
        }}
      />
    </div>
  );
};
const CreatePage = () => {
  const { tasks } = useSelector(selectTasks);

  const [values, setValue] = useState([]);
  const addMore = () => {
    const newTask = { taskDescription: "", taskName: "" };
    const id = () => new Date().getTime() + Math.random() * 9090;
    let newColor = getRandom(6, 100);
    let prevColor = tasks.length > 0 ? tasks[tasks.length - 1].color : newColor;
    newTask.color = prevColor === newColor ? ++newColor % 6 : newColor;
    newTask.completed = false;
    newTask.id = id() + "";
    setValue([...values, newTask]);
  };
  useEffect(() => {
    addMore();
  }, []);
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    store.dispatch({
      type: "task/createTask",
      payload: values,
    });
    navigate("/");
  };

  const onChange = (formID, value) => {
    setValue((prevVal) =>
      prevVal.map((task, index) => {
        if (index !== formID) {
          return task;
        } else {
          return value;
        }
      })
    );
  };

  return (
    <div className="create-task">
      <h1> Add Task </h1>
      <form onSubmit={handleSubmit}>
        {values.map((task, formID) => (
          <TaskInput
            key={formID}
            onChange={onChange}
            formID={formID}
            task={task}
          />
        ))}
        <div className={"flex space-b w-100 mx-3"}>
          <button onClick={addMore} tabIndex={"0"} className="add-button">
            {" "}
            AddMore{" "}
          </button>
          <button type="submit" tabIndex={"0"} className="add-button">
            {" "}
            Create Task{" "}
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreatePage;
