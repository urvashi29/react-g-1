import React from "react";
import { useSelector } from "react-redux";

const TaskList = () => {
  const taskList = useSelector((state) => state.taskList);
  console.log(taskList);
  
  return (
    <>
      {taskList.length &&
        taskList.map((task) => {
          return task.title;
        })}
    </>
  );
};

export default TaskList;
