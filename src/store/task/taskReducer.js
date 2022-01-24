import { DONE_TASK, CREATE_TASK, RESET_TASK } from "./taskAction";
import taskState from "./taskState";
const nextTaskId = () => new Date().getTime();
const initialState = taskState;

export default function taskReducer(state = initialState, action) {
  switch (action.type) {
    case DONE_TASK:
      return {
        ...state,
        tasks: state.tasks.map((task) => {
          if (task.id !== action.payload.id) {
            return task;
          }
          return {
            ...task,
            completed: !task.completed,
            timeDone: action.payload.timeDone,
          };
        }),
      };

    case CREATE_TASK:
      return {
        ...state,
        tasks: [
          ...state.tasks,
          {
            // make a random time our ID
            id: nextTaskId(),
            ...action.payload,
            color: action.payload.color,
            completed: false,
          },
        ],
      };
    case RESET_TASK:
      return {
        ...state,
        tasks: [],
      };
    default:
      return state;
  }
}
