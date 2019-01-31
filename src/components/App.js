import React from "react";
import AddTodo from "./addTodo";
import TodoList from "./todoList";
import Filter from "./filter";

let App = () => (
  <div>
    <AddTodo />
    <TodoList />
    <br />
    <h4>Filter:</h4>
    <Filter />
  </div>
);

export default App;
