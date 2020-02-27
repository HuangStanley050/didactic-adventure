import React from "react";
import { Button } from "reactstrap";
import Header from "./components/Header";
import { renderRoutes } from "react-router-config";

const App = ({ route }) => {
  return (
    <div>
      <Header />
      {renderRoutes(route.routes)}
    </div>
  );
};

export default {
  component: App
};
