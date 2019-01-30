import React from "react";
import Todo from "./todo";
import { deleteTodo, editTodo, toggleTodo } from "../redux/actions/index";
import { connect } from "react-redux";

let mapStateToProps = state => {
  return { todos: state.todos };
};

let mapDispatchToProps = dispatch => {
  return {
    clickCompleted: id => dispatch(toggleTodo(id)),
    clickDelete: id => dispatch(deleteTodo(id)),
    clickEdit: (id, name, description, importance, dateToComplete) =>
      dispatch(editTodo(id, name, description, importance, dateToComplete))
  };
};

let List = ({ todos, clickCompleted, clickDelete, clickEdit }) => (
  <div>
    {todos.map(todo => {
      <Todo
        todo={todo}
        clickCompleted={() => clickCompleted(todo.id)}
        clickDelete={() => clickDelete(todo.id)}
        clickEdit={() =>
          clickEdit(
            todo.id,
            todo.name,
            todo.description,
            todo.importance,
            todo.dateToComplete
          )
        }
      />;
    })}
  </div>
);

let TodoList = connect(
  mapStateToProps,
  mapDispatchToProps
)(List);

export default TodoList;
