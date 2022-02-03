import React from "react";
import TaskItem from "../TaskItem/TaskItem";
import PropTypes from "prop-types";
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
// needs props types
TaskList.propTypes = {
  tasks: PropTypes.array,
};
export default TaskList;
