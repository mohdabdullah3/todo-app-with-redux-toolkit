import {configureStore} from "@reduxjs/toolkit";
import TodoSlice from "../slices/TodoSlice";

const store = configureStore({
   reducer: {
      todo: TodoSlice,
   },
});

export default store;