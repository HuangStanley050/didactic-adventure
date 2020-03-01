import "core-js/stable";
import "regenerator-runtime/runtime";
import authRouter from "./server/routes/auth";
import renderer from "./server/renderer";
import cookieSession from "cookie-session";
import { matchRoutes } from "react-router-config";
import createStore from "./server/setupStore";
import Routes from "./shared/Routes";
import passport from "passport";
import express from "express";
import "./server/config/googleStrategy";
import "./server/config/twitterStrategy";
const app = express();
app.use(express.static("public"));
app.use(express.json());
app.use(
  cookieSession({
    name: "animeSSR",
    maxAge: 1 * 60 * 60 * 1000, // one hour validity for cookie
    keys: [process.env.COOKIE_SECRET]
  })
);
app.use(passport.initialize());
app.use(passport.session());

app.use(authRouter);
app.get("*", async (req, res) => {
  const store = createStore(req);
  // const promises = matchRoutes(Routes, req.path).map(({ route }) => {
  //   console.log(route);
  //   return null;
  //   //return route.loadData ? route.loadData(store) : null;
  // });
  // await Promise.all(promises);

  const context = {};
  const content = renderer(req, store, context);
  if (context.notFound) {
    console.log("not found");
    res.status(404);
  }
  // console.log("before sending response the context: ");
  //console.log(context);
  return res.send(content);
});

export default app;
