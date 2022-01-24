import React from "react";
import TaskSection from "../TaskSection/TaskSection";
import StatSection from "../StatSection/StatSection";
// import Divider from "../../components/Divider/Divider"
import "../style.scss";
const TaskListContainer = () => {
  return (
    <div className="w-100">
      <TaskSection />
      <hr className="my-3" />
      <StatSection />
    </div>
  );
};

export default TaskListContainer;
