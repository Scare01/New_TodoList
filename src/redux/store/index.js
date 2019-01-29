import { createStore } from "redux";
import rootReducer from "../reducers/index";
import { loadState, saveState } from "./localStorage";
import throttle from "lodash/throttle";

let State = loadState();
let store = createStore(rootReducer, State);

store.subscribe(
  throttle(() => {
    saveState({ todos: store.getState().todos });
  }, 1000)
);

export default store;
