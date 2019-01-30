import React from "react";
import Todo from "./todo";
import {
  deleteTodo,
  toggleTodo,
  editForm,
  editTodo
} from "../redux/actions/index";
import { connect } from "react-redux";
import EditForm from "./editForm";

let mapStateToProps = state => {
  return { todos: state.todos };
};

let mapDispatchToProps = dispatch => {
  return {
    clickCompleted: id => dispatch(toggleTodo(id)),
    clickDelete: id => dispatch(deleteTodo(id)),
    clickEdit: id => dispatch(editForm(id)),
    clickSave: (name, description, importance, dateToComplete) =>
      dispatch(editTodo(name, description, importance, dateToComplete))
  };
};

let List = ({ todos, clickCompleted, clickDelete, clickEdit, clickSave }) =>
  todos.map(todo =>
    todo.isEdit ? (
      <EditForm
        key={todo.id}
        todo={todo}
        clickSave={() => clickSave(todo.id)}
      />
    ) : (
      <Todo
        key={todo.id}
        todo={todo}
        clickCompleted={() => clickCompleted(todo.id)}
        clickDelete={() => clickDelete(todo.id)}
        clickEdit={() => clickEdit(todo.id)}
      />
    )
  );

let TodoList = connect(
  mapStateToProps,
  mapDispatchToProps
)(List);

export default TodoList;
