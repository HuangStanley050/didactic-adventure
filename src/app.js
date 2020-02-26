import "core-js/stable";
import "regenerator-runtime/runtime";
import renderer from "./helpers/renderer";
import express from "express";

const app = express();
app.use(express.static("public"));
app.use("/api/helloworld", (req, res) => res.send("hello world"));
app.use("*", async (req, res) => {
  const content = renderer(req);
  return res.send(content);
});

export default app;
