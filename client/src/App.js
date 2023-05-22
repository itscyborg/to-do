import Header from "./components/Header"
import "./App.css"
import TodoForm from "./components/TodoForm";
import { Provider } from "react-redux";
import  store  from "../src/redux/store"
function App() {
  return (
    <Provider store={store}>
     
      <Header/>
      <TodoForm/>
    </Provider>
  );
}

export default App;
