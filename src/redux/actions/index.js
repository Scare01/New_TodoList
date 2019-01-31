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
  completedDate: "",
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
  dateToComplete,
  timeToComplete
) => ({
  type: EDIT_TODO,
  id,
  name,
  description,
  importance,
  dateToComplete,
  timeToComplete
});

export const toggleTodo = (id, completedDate) => ({
  type: TOGGLE_TODO,
  id,
  completedDate
});

export const setVisibilityFilter = filter => ({
  type: SET_VISIBILITY_FILTER,
  filter
});
