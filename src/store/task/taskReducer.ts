import { DONE_TASK, CREATE_TASK, RESET_TASK } from "./taskAction";
import taskState from "./taskState";

interface Task {
  id: string;
  completed: boolean;
  timeDone: string;
}

interface TaskReducerState {
  tasks: Task[];
}

const initialState: TaskReducerState = taskState;

export default function taskReducer(
  state: TaskReducerState = initialState,
  action: any
) {
  switch (action.type) {
    case DONE_TASK:
      return {
        ...state,
        tasks: state.tasks.map((task: Task) => {
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
        tasks: [...state.tasks, action.payload],
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
