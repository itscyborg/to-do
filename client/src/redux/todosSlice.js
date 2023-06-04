import { createSlice } from "@reduxjs/toolkit";

const todosSlice = createSlice({
  name: "todo",
  initialState: [],
  reducers: {
    GETALL_TODO: (state, action) => {
      return action.payload;
    },
  },
});

export const { GETALL_TODO } = todosSlice.actions;
export default todosSlice.reducer;
