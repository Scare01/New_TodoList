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
import VisibilityFilters from "../redux/constants/visibilityFilters";

let getVisibleTodos = (todos, filter) => {
  switch (filter) {
    case VisibilityFilters.SHOW_ALL:
      return todos;
    case VisibilityFilters.SHOW_NORMAL:
      return todos.filter(todo => todo.importance === "Normal");
    case VisibilityFilters.SHOW_IMPORTANT:
      return todos.filter(todo => todo.importance === "Important");
    case VisibilityFilters.SHOW_VERY_IMPORTANT:
      return todos.filter(todo => todo.importance === "Very Important");
    default:
      return "error";
  }
};

let mapStateToProps = state => ({
  todos: getVisibleTodos(state.todos, state.visibilityFilter)
});

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
        clickSave={(name, description, importance, dateToComplete) =>
          clickSave(todo.id, name, description, importance, dateToComplete)
        }
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
