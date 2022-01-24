import { Routes, Route, Navigate } from "react-router-dom";
import CreateTaskPage from "../pages/CreateTaskPage";
import TaskListPage from "../pages/TaskListPage";

const Navigator = () => {
  // handles routing here
  return (
    <Routes>
      <Route path="/createtask/" element={<CreateTaskPage />} />
      <Route exact path="/viewtasks" element={<TaskListPage />} />
      <Route exact path="/" element={<TaskListPage />} />
      <Route exact path="*" element={<Navigate to="/" />} />
    </Routes>
  );
};

export default Navigator;
