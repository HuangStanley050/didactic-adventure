import "core-js/stable";
import "regenerator-runtime/runtime";
import renderer from "./server/renderer";
import express from "express";
//import animeData from "./test.js";

const app = express();
app.use(express.static("public"));
app.use("/api/helloworld", (req, res) => {
  //console.log(animeData["1"]);
  res.send("hello world");
});
app.use("*", async (req, res) => {
  const content = renderer(req);
  return res.send(content);
});

export default app;
