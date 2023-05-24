import axios from 'axios'
import { ADDNEW_TODO } from './type'

const API_URL= 'http://localhost:8000'
 export const addNewTodo =(data)=>async(dispatchEvent)=>{

  try{

  const res= await  axios.post(`${API_URL}/todos`,{data})
  dispatchEvent({type:ADDNEW_TODO ,payload:res.data })
  }catch(error){
    console.log('Error while calling add newtodo api',error.message)
  }
 }