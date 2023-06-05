import React from "react";
import { useSelector } from "react-redux";
import getStat from "../../../helpers/stat";
import TaskStat from "../TaskStat/TaskStat";

const selectTasks = (state: any) => state.tasks;

const StatSection: React.FC = () => {
  const { tasks } = useSelector(selectTasks);
  const [stat] = getStat(tasks);

  return (
    <div className="pb-4">
      <h1 className="mb-1"> Stats </h1>
      <ul>
        {stat.map((item, index) => (
          <li key={index}>
            <TaskStat value={item.value} description={item.description} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default StatSection;
