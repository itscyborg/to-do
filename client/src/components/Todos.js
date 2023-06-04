import React, { useEffect } from "react";
import { getAllTodos } from "../redux/actions/index.js";
import { useDispatch, useSelector } from "react-redux";
import Todo from "./Todo.jsx";

const Todos = () => {
  const dispatch = useDispatch();
  const todos = useSelector((store) => store.todo);
  useEffect(() => {
    dispatch(getAllTodos());
  }, []);

  return (
    <article>
      <ul>
        {todos.map(data=>(<li>{data}</li>))}
      </ul>
    </article>
  );
};

export default Todos;
