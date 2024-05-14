import { useState } from "react";
import "./App.css";
import TaskBox from "./components/TaskBox";
import Active from "./components/Active";
import Completed from "./components/Completed";

function App() {
  const [todos, setTodos] = useState([]);

  const [completedTodos, setCompletedTodos] = useState([]);

  function handleAdd(name) {
    setTodos([...todos, { id: Math.random(), title: name }]);
  }

  function handleComplete(id) {
    const completedTodo = todos.find((todo) => todo.id === id);

    setCompletedTodos([...completedTodos, completedTodo]);
    setTodos(todos.filter((t) => t.id !== id));
  }
  return (
    <>
      <TaskBox onAdd={handleAdd} />
      <Active todos={todos} onComplete={handleComplete} />
      <Completed completedTodos={completedTodos} />
    </>
  );
}

export default App;
