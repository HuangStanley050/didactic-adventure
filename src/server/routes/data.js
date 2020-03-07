import express from "express";
import randomId from "../util/randomId";
import animeData from "../../animeData";
const router = express.Router();

router.get("/api/anime", (req, res) => {
  let id = randomId();

  console.log("random anime id: ", id);
  console.log("randomly selected anime is: ", animeData[id.toString()]);
  console.log("id is: ", id);
  res.send("anime route");
});

export default router;
