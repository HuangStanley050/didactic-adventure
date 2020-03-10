import express from "express";
import randomId from "../util/randomId";
import animeData from "../../animeData";
import requireAuth from "../middleware/requireAuth";
import axios from "axios";
const router = express.Router();
let apiURL = `https://api.jikan.moe/v3/anime/`;

router.get("/api/anime", requireAuth, async (req, res) => {
  let animeId1;
  let animeId2;
  let animeId3;
  animeId1 = parseInt(randomId(1)); //default value if can't find the random id *cowboy bebop
  animeId2 = parseInt(randomId(123)); //fushigi yugi
  animeId3 = parseInt(randomId(30)); //evanglion

  const animeResult1 = axios.get(apiURL + `${animeId1}`);
  const animeResult2 = axios.get(apiURL + `${animeId2}`);
  const animeResult3 = axios.get(apiURL + `${animeId3}`);
  const finalResult = await Promise.all([
    animeResult1,
    animeResult2,
    animeResult3
  ]);
  const finalData = [
    {
      title: finalResult[0].data.title,
      type: finalResult[0].data.type,
      summary: finalResult[0].data.synopsis,
      imageURL: finalResult[0].data.image_url
    },
    {
      title: finalResult[1].data.title,
      type: finalResult[1].data.type,
      summary: finalResult[1].data.synopsis,
      imageURL: finalResult[0].data.image_url
    },
    {
      title: finalResult[2].data.title,
      type: finalResult[2].data.type,
      summary: finalResult[2].data.synopsis,
      imageURL: finalResult[0].data.image_url
    }
  ];
  //console.log(finalResult[0].data);
  res.send({ msg: "anime route", data: finalData });
});

export default router;
