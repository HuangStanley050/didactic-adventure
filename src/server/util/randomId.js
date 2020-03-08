import animeData from "../../animeData";

const randomId = defaultId => {
  const animes = Object.keys(animeData).length;
  const selection = Math.floor(Math.random() * animes) + 1;
  const animeArray = Object.entries(animeData);
  //let randomAnimeId = 1;
  for (const [id, title] of animeArray) {
    if (id === selection.toString()) {
      defaultId = id;
      break;
    }
  }

  return defaultId;
};

export default randomId;
