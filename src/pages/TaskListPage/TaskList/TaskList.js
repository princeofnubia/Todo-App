import React from "react";
import TaskItem from "../TaskItem/TaskItem";
const TaskList = ({ tasks }) => {
  return (
    <div className="task-list">
      <ul>
        {tasks.map((props) => {
          return (
            <li key={props.id}>
              <TaskItem {...props} />
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default TaskList;
