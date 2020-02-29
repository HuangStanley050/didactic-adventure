import React from "react";
import App from "../client/App";
import Anime from "../client/pages/Anime";
import Landing from "../client/pages/Landing";
import NotFound from "../client/pages/NotFound";
import Auth from "../client/pages/Auth";

export default [
  {
    ...App,
    routes: [
      {
        ...Landing,
        path: "/",
        exact: true
      },
      { ...Auth, path: "/auth" },
      { ...Anime, path: "/anime" },
      { ...NotFound }
    ]
  }
];
