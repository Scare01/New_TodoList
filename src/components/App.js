import React from "react";
import AddTodo from "./addTodo";
import TodoList from "./todoList";
import Filter from "./filter";
import { Header } from 'semantic-ui-react';

let App = () => (
  <div>
    <Header textAlign='center' block>Todo List</Header>
  
  <div id="mainContent">
    
    <TodoList />
    <br />
    <h4>Filter:</h4>
    <Filter />
    <AddTodo />
  </div>
  </div>
);

export default App;
