import { act } from "react";
import { ADD_TASK, DECREMENT, INCREMENT } from "../actions/actionType";

// central storage state
const initState = {
  count: 0,
  taskList: [],
};

export const reducer = (state = initState, action) => {
  console.log(action);

  switch (action.type) {
    case INCREMENT:
      return { ...state, count: state.count + action.payload };
    case DECREMENT:
      return { ...state, count: state.count - action.payload };
    case ADD_TASK:
      return { ...state, taskList: [...state.taskList, action.payload] };
    default:
      return state; // returning this central to all the component
  }
};
