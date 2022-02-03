import React, { useState } from "react";
import Avatar from "../../../components/Avatar/Avatar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faCheckSquare } from "@fortawesome/free-solid-svg-icons";
import { getTime, sleep, getFirstChar } from "../../../utils/";
import { faSquare } from "@fortawesome/free-regular-svg-icons";
import store from "../../../store/store";
import PropTypes from "prop-types";
const TaskItem = ({
  taskName,
  taskDescription,
  color,
  id,
  completed,
  timeDone,
}) => {
  const [done, setDone] = useState(false);
  const checkTask = async (e) => {
    e.preventDefault();
    setDone(true);
    await sleep(200);
    store.dispatch({
      type: "task/doneTask",
      payload: {
        id,
        timeDone: getTime(),
      },
    });
  };
  const handleKeyPress = (e) => {
    e.preventDefault();
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
              alt="checked"
              className="white"
            />
          ) : (
            <h2 aria-labelledby={taskName}>{getFirstChar(taskName)}</h2>
          )}{" "}
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
            tabIndex={"0"}
            aria-label={taskName}
            size={"2x"}
            id={taskName}
            className={"check-box"}
            onClick={checkTask}
            onKeyPress={handleKeyPress}
          />
        )}
      </div>
    </div>
  );
};

TaskItem.propTypes = {
  taskName: PropTypes.string,
  taskDescription: PropTypes.string,
  color: PropTypes.number,
  id: PropTypes.string,
  completed: PropTypes.bool,
  timeDone: PropTypes.string,
};
export default TaskItem;
