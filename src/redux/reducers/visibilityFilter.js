import visibilityFilters from "../constants/visibilityFilters";
import { SET_VISIBILITY_FILTER } from "../constants/actionTypes";

let visibilityFilter = (state = visibilityFilters.SHOW_ALL, action) => {
  switch (action.type) {
    case SET_VISIBILITY_FILTER:
      return action.filter;
    default:
      return state;
  }
};

export default visibilityFilter;
