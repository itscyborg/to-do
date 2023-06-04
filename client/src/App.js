import Header from "./components/Header"
import "./App.css"
import TodoForm from "./components/TodoForm";
import { Provider } from "react-redux";
import  store  from "../src/redux/store"
import Todos from "./components/Todos";
function App() {
  return (
    <Provider store={store}>
     
      <Header/>
      <TodoForm/>
      <Todos/>
    </Provider>
  );
}

export default App;
