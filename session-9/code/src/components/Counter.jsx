import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { DECREMENT, INCREMENT } from "../actions/actionType";
import { inc } from "../actions/action";

const Counter = () => {
  const [sample, setSample] = useState([]);

  const count = useSelector((state) => state.count);
  const dispatch = useDispatch();

  const increment = () => {
    dispatch(inc());
  };

  return (
    <>
      <button onClick={() => dispatch({ type: DECREMENT, payload: 1 })}>
        -
      </button>
      {count}
      <button onClick={increment}>+</button>
    </>
  );
};

export default Counter;
