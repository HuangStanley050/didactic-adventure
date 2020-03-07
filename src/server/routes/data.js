import express from "express";
import animeData from "../../animeData";
const router = express.Router();

router.get("/api/anime", (req, res) => {
  const animes = Object.keys(animeData).length;
  const selection = Math.floor(Math.random() * animes) + 1;
  //console.log(Object.keys(animeData).length);
  console.log("randomly selected anime is: ", animeData[selection.toString()]);
  console.log("id is: ", selection);
  res.send("anime route");
});

export default router;
