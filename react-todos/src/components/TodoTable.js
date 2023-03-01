import TodoRowItem from "./TodoRowItem";
const TodoTable = (props) => {
  return (
    <table className="table table-hover">
      <thead>
        <th scope="col">#</th>
        <th scope="col">Task</th>
        <th scope="col">Assigned</th>
      </thead>
      <tbody>
        {props.todos.map((todo) => {
          return (
            <TodoRowItem
              deleteTodo={props.deleteTodo}
              key={todo.rowNumber}
              rowNumber={todo.rowNumber}
              descripton={todo.descripton}
              Assignedto={todo.Assignedto}
            />
          );
        })}
      </tbody>
    </table>
  );
};

export default TodoTable;
