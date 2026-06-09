import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../actions/action";

const TaskInput = () => {
  const [title, setTitle] = useState("");
  const [status, setStatus] = useState("todo");

  const dispatch = useDispatch();

  const handleAdd = () => {
    const task = {
      title,
      status,
    };

    dispatch(addTask(task));
  };

  return (
    <>
      <input
        placeholder="Enter text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <select value={status} onChange={(e) => setStatus(e.target.value)}>
        <option value="todo">Todo</option>
        <option value="done">Done</option>
      </select>

      <button onClick={handleAdd}>Add Task</button>
    </>
  );
};

export default TaskInput;
