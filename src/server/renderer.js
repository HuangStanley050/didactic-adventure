import React from "react";
import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router-dom";
//import { Provider } from "react-redux";
import { renderRoutes } from "react-router-config";
import serialize from "serialize-javascript";
import App from "../client/App";
//import { Helmet } from "react-helmet";
import Routes from "../shared/Routes";

export default (req, store, context) => {
  const app = (
    //<Provider store={store}>
    <StaticRouter location={req.path} context={{}}>
      <div>{renderRoutes(Routes)}</div>
    </StaticRouter>
    //</Provider>
  );

  const content = renderToString(app);
  //const helmet = Helmet.renderStatic();

  return `
  <html>
    <head>
    </head>
    <body>
      <div id="root">
      ${content}
      </div>
      <script src="bundle.js"></script>
    </body>
  </html>
  `;
};
