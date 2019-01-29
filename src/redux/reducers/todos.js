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
          completed: action.completed,
          completedDate: action.completedDate
        }
      ];
    case actionTypes.EDIT_TODO:
      return state.map(todo => {
        if (todo.id === action.id) {
          return Object.assign({}, todo, {
            name: action.name,
            description: action.description,
            importance: action.importance,
            dateToComplete: action.dateToComplete
          });
        }
        return todo;
      });

    case actionTypes.TOGGLE_TODO:
      return state.map(todo => {
        if (todo.id === action.id) {
          return Object.assign({}, todo, {
            ...todo,
            completed: !todo.completed
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
