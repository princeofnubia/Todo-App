import React from "react";
import AddTask from "../AddTask/AddTask";
import ChangeMode from "../ChangeMode/ChangeMode";
import TaskList from "../TaskList/TaskList";
import { useSelector } from "react-redux";

const selectTasks = (state) => state.tasks;
const TaskSection = (props) => {
  const { tasks } = useSelector(selectTasks);
  return (
    <div>
      <div className="flex mb-4 space-b">
        <h1>Tasks</h1>
        <div className="mb-2 flex space-b w-10">
          <ChangeMode />
          <AddTask />
        </div>
      </div>
      <div className="mt-3">
        <TaskList tasks={tasks} />
      </div>
    </div>
  );
};

export default TaskSection;
