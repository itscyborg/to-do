import axios from 'axios'
import { ADDNEW_TODO, GETALL_TODO } from './type'

const API_URL= 'http://localhost:8000'
 export const addNewTodo =(data)=>async(dispatchEvent)=>{

  try{

  const res= await  axios.post(`${API_URL}/todos`,{data})
  dispatchEvent({type:ADDNEW_TODO ,payload:res.data })
  }catch(error){
    console.log('Error while calling add newtodo api',error.message)
  }
 } 

 export const getAllTodos =()=> async(dispatchEvent)=>{
  try{
    const res= await axios.get(`${API_URL}/todos`);
    dispatchEvent({type:GETALL_TODO,payload:res.data})
  }catch(error){
    console.log('eror while calling getalltodos api',error.message);
  }
 }