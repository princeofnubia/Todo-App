import { combineReducers } from "redux";

import tasksReducer from "./task/taskReducer";

const rootReducer = combineReducers({
  tasks: tasksReducer,
});

export default rootReducer;
