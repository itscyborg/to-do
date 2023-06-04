import { configureStore } from "@reduxjs/toolkit";

import todosReducer from "./todoSlice.js";
import todosSlice from "./todosSlice.js";

// const rootReducer = combineReducers({
//   todos: todoSlice.reducer,
// });

const store = configureStore({
  reducer: {
    todos: todosReducer,
    todo: todosSlice
  },
});

export default store;
