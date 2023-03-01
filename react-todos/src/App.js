import React, { useState } from "react";
import NewTodoForm from "./components/NewTodoForm";
import "./App.css";
import TodoTable from "./components/TodoTable";
function App() {
  const [showTodoForm, setShowTodoForm] = useState(false);
  const [todos, setTodos] = useState([
    { rowNumber: "1", descripton: "Learn Mongodb", Assignedto: "Siva" },
    { rowNumber: "2", descripton: "Learn DataEngineering", Assignedto: "Siva" },
  ]);

  const deleteTodo = (deleterowNumber) => {
    let filtered = todos.filter((todo) => todo.rowNumber !== deleterowNumber);
    setTodos(filtered);
  };
  const addTodo = (descripton, assigned) => {
    let rowNumber = 0;
    if (todos.length > 0) {
      rowNumber = Number(todos[todos.length - 1].rowNumber) + 1;
    } else {
      rowNumber = 1;
    }
    const newTodo = {
      rowNumber: rowNumber,
      descripton: descripton,
      Assignedto: assigned,
    };
    setTodos((todos) => [...todos, newTodo]);
  };
  return (
    <>
      <div className="mt-5 container">
        <div className="card">
          <div className="card-header">Your todos</div>
          <div ckassName="card-body">
            <TodoTable todos={todos} deleteTodo={deleteTodo} />
            <button
              className="btn btn-primary"
              onClick={() => setShowTodoForm(!showTodoForm)}
            >
              {showTodoForm ? "Close Todo" : "New Todo"}
            </button>
          </div>
          {showTodoForm && <NewTodoForm addTodo={addTodo} />}
        </div>
      </div>
    </>
  );
}

export default App;
