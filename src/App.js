import { useState } from "react"; // Imports hook from react component
import Header from "./components/Header"; //Brings in the next 3  components from components folder that were made
import List from "./components/List";
import AddTodo from "./components/AddTodo";

function App() {
  // Functional component that renders entire project to the DOM

  const [todos, setTodos] = useState([
    // a useState hook that sets the todos individually with ids and items.  Items can be the exact same as long as the id is different.
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

  // A function that creates new todo items and assigns them an ID, and puts new todos in the todos list
  const addTodo = (todo) => {
    const id = Math.ceil(Math.random() * 100000);
    const newTodo = { id, ...todo };
    setTodos([...todos, newTodo]);
  };
  // The return compiles the components and props that go in their components together to be exported out.
  return (
    <div className="container">
      <Header title="Todo List" />
      <AddTodo onAdd={addTodo} />
      <List todos={todos} />
    </div>
  );
}
// Component can be exported out to be rendered elsewhere
export default App;
