import {configureStore} from '@reduxjs/toolkit'

import todoSLice from './todoSlice';

const store= configureStore({
  reducer:{
    todos: todoSLice,
  }
});  
export default store; 