import express from "express";
import animeData from "../../animeData";
const router = express.Router();

const randomId = () => {
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
  return randomAnimeId;
};
router.get("/api/anime", (req, res) => {
  let id = randomId();

  console.log("random anime id: ", id);
  console.log("randomly selected anime is: ", animeData[id.toString()]);
  console.log("id is: ", id);
  res.send("anime route");
});

export default router;
