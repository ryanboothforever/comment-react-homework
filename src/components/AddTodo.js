import { useState } from "react"; // Imports react hook from component

const AddTodo = ({ onAdd }) => {
  //Creates a component so we can add to our list
  const [item, setItem] = useState(""); // Array destructuring that sets item to an empty string

  const onSubmit = (e) => {
    // When the form is submitted, the event is prevented unless the input target has something entered into it(?)
    e.preventDefault();
    onAdd({ item });

    setItem("");
  };

  return (
    //   Runs onSubmit method, which won't let anything submit if nothing is written?x
    <form onSubmit={onSubmit}>
      <label>Add Todo:</label>
      <input
        type="text"
        placeholder="Todo Item"
        value={item}
        onChange={(e) => setItem(e.target.value)} //Changed the item from an empty string to whatever the value entered into the input is
      />
      <input type="submit" value="Add Todo" /> // Submits value of form
    </form>
  );
};

export default AddTodo; //Sends component to App.js
