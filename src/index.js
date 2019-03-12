import React from "react";
import { render } from "react-dom";
import App from "./components/App";
import store from ".//redux/store/index";
import { Provider } from "react-redux";
import "./index.css";
import 'semantic-ui-css/semantic.min.css';

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
