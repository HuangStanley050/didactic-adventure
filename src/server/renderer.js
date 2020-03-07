import React from "react";
import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { renderRoutes } from "react-router-config";
import serialize from "serialize-javascript";

//import { Helmet } from "react-helmet";
import Routes from "../shared/Routes";

export default (req, store, context) => {
  // console.log("before renderString");
  // console.log(context);
  // console.log(req.url);
  const app = (
    <Provider store={store}>
      <StaticRouter location={req.url} context={context}>
        <div>{renderRoutes(Routes)}</div>
      </StaticRouter>
    </Provider>
  );
  //console.log("before render string");
  //console.log(store.getState());
  const content = renderToString(app);
  //const helmet = Helmet.renderStatic();
  //context.notFound = true;
  // console.log("after renderString");
  // console.log(context);
  return `
  <html>
    <head>
      <link rel="stylesheet" type="text/css" href="main.css">
    </head>
    <body>
      <div id="root">
      ${content}
      </div>
      <script>
        window.INITIAL_STATE = ${serialize(store.getState())}
      </script>
      <script src="bundle.js"></script>
    </body>
  </html>
  `;
};
