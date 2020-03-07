import express from "express";
import animeData from "../../animeData";
const router = express.Router();

router.get("/api/anime", (req, res) => {
  const animes = Object.keys(animeData).length;
  const selection = Math.floor(Math.random() * animes) + 1;
  const animeArray = Object.entries(animeData);
  let randomAnimeId = 1;

  for (const [id, title] of animeArray) {
    if (id === selection.toString()) {
      console.log("selection is: ", selection);
      console.log("id is: ", id);
      randomAnimeId = id;
      break;
    }
  }
  console.log("random anime id: ", randomAnimeId);
  console.log(
    "randomly selected anime is: ",
    animeData[randomAnimeId.toString()]
  );
  console.log("id is: ", randomAnimeId);
  res.send("anime route");
});

export default router;
