import express from 'express';
import { addTodo,getAllTodos } from '../controller/todo-controller.js';
//import { getAllTodos } from '../../client/src/redux/actions/index.js';

const route = express.Router();


route.post('/todos',addTodo)
route.get('/todos',getAllTodos)
export default route; 