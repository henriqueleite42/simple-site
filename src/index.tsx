import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";

import Router from "./View/Router";

import store from "./Redux/store";

import "./Config/fontawesome";
import "./Style/index.scss";

ReactDOM.render(
  <Provider store={store}>
    <Router />
  </Provider>,
  document.getElementById("root")
);
