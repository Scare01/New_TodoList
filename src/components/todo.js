import React from "react";

let date = new Date();
let dd = date.getDate();
let mm =
  date.getMonth() < 10 ? "0" + (date.getMonth() + 1) : date.getMonth() + 1;
let yyyy = date.getFullYear();

let today = dd + mm + yyyy;

let Todo = ({ todo, clickCompleted, clickDelete, clickEdit }) => (
  <div className="todo">
    <h2
      style={{
        color: todo.dateToComplete.split(".").join("") < today ? "red" : "balck"
      }}
    >
      {todo.name}
    </h2>
    <h4>{todo.importance}</h4>
    <p>{todo.description}</p>
    {todo.dateToComplete ? <p>Deadline date {todo.dateToComplete}</p> : null}
    {todo.completed ? null : <button onClick={clickEdit}>Edit</button>}
    {todo.completed ? null : (
      <button onClick={clickCompleted}>Completed</button>
    )}
    {todo.completed ? <p>Completed: {todo.completedDate}</p> : null}
    <button onClick={clickDelete}>Delete</button>
  </div>
);

export default Todo;
