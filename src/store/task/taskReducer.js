import { DONE_TASK, CREATE_TASK, RESET_TASK } from "./taskAction";
import taskState from "./taskState";

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
      console.log(action.payload);
      return {
        ...state,
        tasks: [...state.tasks, ...action.payload],
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
