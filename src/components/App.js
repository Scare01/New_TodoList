import React from "react";
import AddTodo from "./addTodo";
import TodoList from "./todoList";
import Filter from "./filter";
import { Header } from "semantic-ui-react";

let App = () => (
  <div>
    <Header textAlign="center" block as="h1">
      Todo List
    </Header>

    <div id="mainContent">
      <div id="todoList">
        <TodoList />
      </div>

      <br />
      <h3>Filter:</h3>
      <Filter />
      <br />
      <AddTodo />
    </div>
  </div>
);

export default App;
