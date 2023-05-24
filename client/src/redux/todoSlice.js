import { createSlice } from "@reduxjs/toolkit";

const todoSlice =createSlice({
  name:'todos',
  initialState:'',
  reducers:{
    addTodo:(state,action)=>{
      return action.payload;
    },
    cleartext:(state)=>{
      return  '';
    }
     
  }
})

export const {addTodo,cleartext}=todoSlice.actions;
export default todoSlice.reducer;