import { MyProvider } from "./Context";
import "./App.css";
import Todo from "./Components/Todo";
import Task1 from "./Task1";
import Task2 from "./Task2";
import Task3 from "./Task3";
import Task4 from "./Task4";
import Task6 from "./Task6";
import Task7 from "./Task7";

function App() {
  return (
    <div className="App">
      {/* <Task1 />
      <hr />
      <Task2 />
      <hr />
      <Task3 />
      <hr />
      <MyProvider>
        <Task4 />
      </MyProvider>
      <hr />
      <Task6 />
      <hr />
      <Task7 /> */}

      <MyProvider>
        <Todo />
      </MyProvider>
    </div>
  );
}

export default App;
