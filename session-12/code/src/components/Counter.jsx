import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { increment, decrement } from "../slices/counterSlice";

const Counter = () => {
  const counter = useSelector((state) => state.counter.value);

  const dispatch = useDispatch();

  return (
    <div>
      <button onClick={() => dispatch(decrement())}>-</button>
      {counter}
      <button onClick={() => dispatch(increment())}>+</button>
    </div>
  );
};

export default Counter;
