import { configureStore } from "@reduxjs/toolkit";
import callReducer from "./call.slice";

export const store = configureStore({
  reducer: {
    call: callReducer,
  },
});
