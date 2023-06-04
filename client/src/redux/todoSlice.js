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
    },
    GETALL_TODO:(state,action)=>{
      return  {
        ...state,
        todos: action.payload,
      };
    }
     
  }
})

export const {addTodo,cleartext,GETALL_TODO}=todoSlice.actions;
export default todoSlice.reducer;