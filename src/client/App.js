import React from "react";
import { Button } from "reactstrap";
import Header from "./components/Header";
import { renderRoutes } from "react-router-config";
import { checkAuth } from "./store/actions/authActions";

const App = ({ route }) => {
  return (
    <div>
      <Header />
      {renderRoutes(route.routes)}
    </div>
  );
};

const loadData = store => {
  return store.dispatch(checkAuth());
};

export default {
  component: App,
  loadData
};
