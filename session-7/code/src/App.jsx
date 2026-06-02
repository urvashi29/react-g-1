import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Notes from "./components/Notes";
import ProtectedRoute from "./components/ProtectedRoute";
const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route
          path="/notes"
          element={
            <ProtectedRoute>
              <Notes />
            </ProtectedRoute>
          }
        />
      </Routes>
    </>
  );
};

export default App;
