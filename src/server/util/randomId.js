import animeData from "../../animeData";

const randomId = () => {
  const animes = Object.keys(animeData).length;
  const selection = Math.floor(Math.random() * animes) + 1;
  const animeArray = Object.entries(animeData);
  let randomAnimeId = 1;
  for (const [id, title] of animeArray) {
    if (id === selection.toString()) {
      randomAnimeId = id;
      break;
    }
  }

  return randomAnimeId;
};

export default randomId;
