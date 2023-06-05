import React from "react";
import TaskItem from "../TaskItem/TaskItem";

interface TaskProps {
  id: number;
  // Add additional properties of the task object here
}

interface TaskListProps {
  tasks: TaskProps[];
}

const TaskList: React.FC<TaskListProps> = ({ tasks, }) => {
  return (
    <div className="task-list">
      <ul>
        {tasks.map((props) => {
          return (
            <li key={props.id}>
              <TaskItem taskName={""} {...props} />
            </li>
          );
        })}
      </ul>
    </div>
  );
};



export default TaskList;
