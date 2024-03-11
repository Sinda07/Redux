import logo from "./logo.svg";
import "./App.css";
import TaskList from "./components/TaskList/TaskList";
import AddTask from "./components/AddTask/addtask";

function App() {
  return (
    <div className="App">
      <AddTask />
      <TaskList />
    </div>
  );
}

export default App;
