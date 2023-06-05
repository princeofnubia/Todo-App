import React from "react";

interface TaskStatProps {
  value: string | number;
  description: string;
}

const TaskStat: React.FC<TaskStatProps> = ({ value, description }) => {
  return (
    <div className="task-stat my-3">
      <h3 aria-label={description}>{value}</h3>
      <span>{description}</span>
    </div>
  );
};

export default TaskStat;
