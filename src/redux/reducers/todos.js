import * as actionTypes from "../constants/actionTypes";

let todos = (state = [], action) => {
  switch (action.type) {
    case actionTypes.ADD_TODO:
      return [
        ...state,
        {
          id: action.id,
          name: action.name,
          description: action.description,
          importance: action.importance,
          dateToComplete: action.dateToComplete,
          timeToComplete: action.timeToComplete,
          completed: action.completed,
          completedDate: action.completedDate,
          isEdit: action.isEdit
        }
      ];
    case actionTypes.EDIT_TODO:
      return state.map(todo => {
        if (todo.id === action.id) {
          return Object.assign({}, todo, {
            ...todo,
            name: action.name,
            description: action.description,
            importance: action.importance,
            dateToComplete: action.dateToComplete,
            timeToComplete: action.timeToComplete,
            isEdit: false
          });
        }
        return todo;
      });

    case actionTypes.EDIT_FORM:
      return state.map(todo => {
        if (todo.id === action.id) {
          return Object.assign({}, todo, {
            ...todo,
            isEdit: true
          });
        }
        return todo;
      });

    case actionTypes.TOGGLE_TODO:
      return state.map(todo => {
        if (todo.id === action.id) {
          return Object.assign({}, todo, {
            ...todo,
            completed: true,
            completedDate: action.completedDate
          });
        }

        return todo;
      });
    case actionTypes.DELETE_TODO:
      return state.filter(todo => todo.id !== action.id);
    default:
      return state;
  }
};

export default todos;
