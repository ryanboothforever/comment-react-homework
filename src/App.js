import { useState } from "react"; // Imports hook from react component
import Header from "./components/Header"; //Brings in the next 3  components from components folder that were made
import List from "./components/List";
import AddTodo from "./components/AddTodo";

function App() {
  // Functional component that renders entire project to the DOM

  const [todos, setTodos] = useState([
    {
      id: 1,
      item: "Drink Water",
    },
    {
      id: 2,
      item: "Make Healthy Dinner",
    },
    {
      id: 3,
      item: "Exercise",
    },
  ]);

  const addTodo = (todo) => {
    const id = Math.ceil(Math.random() * 100000);
    const newTodo = { id, ...todo };
    setTodos([...todos, newTodo]);
  };

  return (
    <div className="container">
      <Header title="Todo List" />
      <AddTodo onAdd={addTodo} />
      <List todos={todos} />
    </div>
  );
}

export default App;
