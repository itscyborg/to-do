import { configureStore } from "@reduxjs/toolkit";

import todosReducer from "./todoSlice.js";

// const rootReducer = combineReducers({
//   todos: todoSlice.reducer,
// });

const store = configureStore({
  reducer: {
    todos: todosReducer,
  },
});

export default store;
