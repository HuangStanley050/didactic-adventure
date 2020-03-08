import express from "express";
import randomId from "../util/randomId";
import animeData from "../../animeData";
import axios from "axios";
const router = express.Router();

router.get("/api/anime", (req, res) => {
  let animeId1;
  let animeId2;
  let animeId3;
  animeId1 = parseInt(randomId(1)); //default value if can't find the random id *cowboy bebop
  animeId2 = parseInt(randomId(123)); //fushigi yugi
  animeId3 = parseInt(randomId(30)); //evanglion
  // console.log(animeId1, animeId2, animeId3);
  // console.log("anime1 ", animeData[animeId1.toString()]);
  // console.log("anime2 ", animeData[animeId2.toString()]);
  // console.log("anime3 ", animeData[animeId3.toString()]);
  // console.log("random anime id: ", animeId1);
  // console.log("randomly selected anime is: ", animeData[animeId1.toString()]);
  // console.log("id is: ", animeId1);
  res.send("anime route");
});

export default router;
