import React from "react";
import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router-dom";
//import { Provider } from "react-redux";
import { renderRoutes } from "react-router-config";
import serialize from "serialize-javascript";

//import { Helmet } from "react-helmet";
import Routes from "../shared/Routes";

export default (req, context) => {
  const app = (
    //<Provider store={store}>
    <StaticRouter location={req.path} context={context}>
      <div>{renderRoutes(Routes)}</div>
    </StaticRouter>
    //</Provider>
  );

  const content = renderToString(app);
  //const helmet = Helmet.renderStatic();
  console.log(req.path);
  console.log(context);
  return `
  <html>
    <head>
      <link rel="stylesheet" type="text/css" href="main.css">
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
