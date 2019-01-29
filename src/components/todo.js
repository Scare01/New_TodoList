import React from "react";

let Todo = ({ todo, clickEdit, clickDelete, clickCompleted }) => (
  <div className="todo">
    <h2>{todo.name}</h2>
    <h4>{todo.importance}</h4>
    <p>{todo.description}</p>
    <p>Completed to {todo.dateToComplete}</p>
    {todo.completed ? null : <button onClick={clickEdit}>Edit</button>}
    {todo.completed ? null : (
      <button onClick={clickCompleted}>Completed</button>
    )}
    {todo.completed ? <p>Completed date: {todo.completedDate}</p> : null}
    <button onClick={clickDelete}>Delete</button>
  </div>
);

export default Todo;
