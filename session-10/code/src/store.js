import { applyMiddleware, combineReducers, createStore } from "redux";
import { reducer } from "./reducer/reducer";
import { thunk } from "redux-thunk";
import { employeeReducer } from "./reducer/employeeReducer";

export const store = createStore(
  combineReducers({ productList: reducer, emp: employeeReducer }),
  applyMiddleware(thunk),
);
