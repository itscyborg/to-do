import React from "react";
import {useDispatch, useSelector} from 'react-redux'
import { addTodo, cleartext } from "../redux/todoSlice";

import { addNewTodo } from "../redux/actions";
const TodoForm = () => {
  // const [text, setText] = useState("");

  const dispatch=useDispatch();
  const text =useSelector(store=>store.todos)

  const onFormSubmit = (e) => {
    e.preventDefault();
     dispatch(addNewTodo(text))
     dispatch(cleartext())

  };
  const onInputChange = (e) => {
     
    dispatch(addTodo(e.target.value));
    
  };
  return (
    <form className="form" onSubmit={onFormSubmit}>
      <input
        type="text"
        placeholder="  Enter your task........"
        value={text}
        onChange={onInputChange}
        
      />
    </form>
  );
};

export default TodoForm;
