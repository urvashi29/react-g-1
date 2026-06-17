import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./slices/counterSlice";
import { userApi } from "./slices/userSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    [userApi.reducerPath]: userApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(userApi.middleware),
});
