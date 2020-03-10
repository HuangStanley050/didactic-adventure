import ActionType from "./index";

const animeId = [537, 30, 123];
const dataApi = `https://api.jikan.moe/v3/anime/`;
export const fetchDefaultAnimes = () => {
  return async (dispatch, getState, api) => {
    dispatch({ type: ActionType.FETCH_DEFAULT_ANIMES_START });
    const animePromise1 = api.get(dataApi + animeId[0]);
    const animePromise2 = api.get(dataApi + animeId[1]);
    //const animePrimise3 = api.get(dataApi + animeId[2]);
    let result = await Promise.all([
      animePromise1,
      animePromise2
      //animePrimise3
    ]);
    let animeData = result.map(anime => {
      // console.log(anime.data.title);
      // console.log(anime.data.type);
      // console.log(anime.data.synopsis);
      // console.log(anime.data.image_url);
      return {
        title: anime.data.title,
        type: anime.data.type,
        summary: anime.data.synopsis,
        imgURL: anime.data.image_url
      };
    });
    //console.log(animeData);
    dispatch({ type: ActionType.FETCH_DEFAULT_ANIMES, payload: animeData });
  };
};
