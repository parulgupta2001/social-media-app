import { configureStore } from "@reduxjs/toolkit";
import { authReducer } from "../frontend/features/auth-slice";

export const store = configureStore({
  reducer: { auth: authReducer },
});
