import React from "react";
import PropTypes from "prop-types";
const TaskStat = ({ value, description }) => {
  return (
    <div className="task-stat my-3">
      <h3 aria-label={description}>{value}</h3>
      <span>{description}</span>
    </div>
  );
};

// needs a prop types
TaskStat.propTypes = {
  value: PropTypes.string,
  description: PropTypes.string,
};
export default TaskStat;
