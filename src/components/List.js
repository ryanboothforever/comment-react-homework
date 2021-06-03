import Todo from "./Todo"; //Imports the Todo component to be used in this file

const List = ({ todos }) => {
  //Creates a component of List that accepts todos as a prop
  return (
    <div>
      {/* Maps over all the todo props that exist, and creates a new todo that that todo's name as its key */}
      {todos.map((todo) => (
        <Todo key={todo.id} todo={todo} />
      ))}
    </div>
  );
};
// Exports component to be used elsewhere (App.js)
export default List;
