import React from "react";
import { Button } from "reactstrap";
import { renderRoutes } from "react-router-config";

const App = ({ route }) => {
  return (
    <div>
      <h1>Nav placement</h1>

      {renderRoutes(route.routes)}
    </div>
  );
};

export default {
  component: App
};
