const Todo = ({ todo }) => {
  //Createst a todo component with a todo prop
  return (
    <div>
      {/* Renders out an h2 that accepts the todo item prop which is being created in 'App.js' */}
      <h2>{todo.item}</h2>
    </div>
  );
};
// Exports component out to be rendered elsewhere (List.js)
export default Todo;
