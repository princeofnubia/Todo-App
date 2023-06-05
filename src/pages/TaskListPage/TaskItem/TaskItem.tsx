import React, { useState } from "react";
import Avatar from "../../../components/Avatar/Avatar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faCheckSquare } from "@fortawesome/free-solid-svg-icons";
import { getTime, sleep, getFirstChar } from "../../../utils";
import { faSquare } from "@fortawesome/free-regular-svg-icons";
import store from "../../../store/store";

interface TaskItemProps {
  taskName: string;
  taskDescription?: string;
  color?: string;
  id: number;
  completed?: boolean;
  timeDone?: string;
}

const TaskItem: React.FC<TaskItemProps> = ({
  taskName,
  taskDescription,
  color,
  id,
  completed,
  timeDone,
}) => {
  const [done, setDone] = useState(false);

  const checkTask = async (e: React.MouseEvent<SVGSVGElement, MouseEvent> | React.KeyboardEvent<SVGSVGElement>) => {
    e.preventDefault();
    if (e.type === 'click' || (e as React.KeyboardEvent<SVGSVGElement>).code === 'Enter') {
      setDone(true);
      await sleep(200);
      store.dispatch({
        type: "task/doneTask",
        payload: {
          id,
          timeDone: getTime(),
        },
      });
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent<SVGSVGElement>) => {
    if (e.code === "Enter") {
      checkTask(e);
    }
  };

  return (
    <div className="task-item my-3 space-between">
      <Avatar color={`avatar-${color}`}>
        <div
          className="task-avatar"
          role="figure"
          aria-hidden="false"
          aria-label={taskName}
        >
          {completed ? (
            <FontAwesomeIcon
              icon={faCheck}
              size={"lg"}
              className="white"
            />
          ) : (
            <h2 aria-labelledby={taskName}>{getFirstChar(taskName)}</h2>
          )}
        </div>
      </Avatar>
      <div className="task-detail mx-3">
        <h3>{taskName}</h3>
        <span>{taskDescription}</span>
      </div>
      <div className="task-check">
        {completed ? (
          <h5 aria-label={timeDone}>{timeDone}</h5>
        ) : (
          <FontAwesomeIcon
            icon={done ? faCheckSquare : faSquare}
            role="checkbox"
            aria-checked={!done}
            aria-hidden={false}
            tabIndex={0}
            aria-label={taskName}
            size={"2x"}
            id={taskName}
            className={"check-box"}
            onClick={(e) => checkTask(e as React.MouseEvent<SVGSVGElement, MouseEvent>)}
            onKeyDown={handleKeyPress}
          />
        )}
      </div>
    </div>
  );
};

export default TaskItem;
