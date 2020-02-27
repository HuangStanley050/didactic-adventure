import "core-js/stable";
import "regenerator-runtime/runtime";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import React from "react";
import ReactDOM from "react-dom";

import { BrowserRouter } from "react-router-dom";
//import { Provider } from "react-redux";
import { renderRoutes } from "react-router-config";
import Routes from "../shared/Routes";
//import store from "./setupStore";
const app = (
  <BrowserRouter>
    <div>{renderRoutes(Routes)}</div>
  </BrowserRouter>
);

ReactDOM.hydrate(app, document.getElementById("root"));
