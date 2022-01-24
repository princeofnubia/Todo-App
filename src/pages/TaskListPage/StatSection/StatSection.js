import TaskStat from "../TaskStat/TaskStat";
import { useSelector } from "react-redux";
import getStat from "../../../helpers/stat";
const selectTasks = (state) => state.tasks;

const StatSection = () => {
  const { tasks } = useSelector(selectTasks);
  const [stat] = getStat(tasks);
  return (
    <div className="pb-4">
      <h1 className="mb-1"> Stats </h1>
      <ul>
        {stat.map((item, index) => {
          return (
            <li key={index}>
              <TaskStat value={item.value} description={item.description} />
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default StatSection;
