import "core-js/stable";
import "regenerator-runtime/runtime";
import "./index.css";
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
//import { BrowserRouter } from "react-router-dom";
//import { Provider } from "react-redux";
//import { renderRoutes } from "react-router-config";
//import Routes from "./Routes";
//import store from "./setupStore";
const app = <App />;

ReactDOM.hydrate(app, document.getElementById("root"));
