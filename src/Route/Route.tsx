import React from 'react'
import { Routes, Route, Navigate } from "react-router-dom";
import CreateTaskPage from "../pages/CreateTaskPage";
import TaskListPage from "../pages/TaskListPage";

const Navigator: React.FC = () => {
  return (
    <Routes>
      <Route path="/createtask/" element={<CreateTaskPage />} />
      <Route path="/viewtasks" element={<TaskListPage />} />
      <Route path="/" element={<TaskListPage />} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
};

export default Navigator;
