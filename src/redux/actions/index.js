import {
  ADD_TODO,
  DELETE_TODO,
  EDIT_TODO,
  TOGGLE_TODO,
  SET_VISIBILITY_FILTER,
  EDIT_FORM
} from "../constants/actionTypes";
import v4 from "uuid";

export const addTodo = (
  name,
  description,
  importance,
  dateToComplete,
  timeToComplete
) => ({
  type: ADD_TODO,
  name,
  description,
  importance,
  dateToComplete,
  timeToComplete,
  id: v4(),
  completed: false,
  completedDate: null,
  isEdit: false
});

export const deleteTodo = id => ({
  type: DELETE_TODO,
  id
});

export const editForm = id => ({
  type: EDIT_FORM,
  id
});

export const editTodo = (
  id,
  name,
  description,
  importance,
  dateToComplete
) => ({
  type: EDIT_TODO,
  id: id,
  name: name,
  description: description,
  importance: importance,
  dateToComplete: dateToComplete
});

export const toggleTodo = id => ({
  type: TOGGLE_TODO,
  id
});

export const setVisibilityFilter = filter => ({
  type: SET_VISIBILITY_FILTER,
  filter
});
