import { ADD_TASK, DECREMENT, INCREMENT } from "../actions/actionType";

export const inc = () => {
  return { type: INCREMENT, payload: 1 }; //dispatch(action)
};

export const addTask = (task) => {
  return {
    type: ADD_TASK,
    payload: task,
  };
};
