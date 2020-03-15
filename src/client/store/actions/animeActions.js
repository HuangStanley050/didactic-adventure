import ActionType from "./index";

//const animeId = [1, 123, 30];
const dataApi = `/api/anime`;
export const fetchDefaultAnimes = () => {
  return async (dispatch, getState, api) => {
    dispatch({ type: ActionType.FETCH_DEFAULT_ANIMES_START });
    try {
      let result = await api.get(dataApi);
      console.log(result.data.data);
      let animeData = result.data.data.map(anime => {
        return {
          title: anime.title,
          type: anime.type,
          summary: anime.summary,
          imgURL: anime.imageURL
        };
      });

      dispatch({ type: ActionType.FETCH_DEFAULT_ANIMES, payload: animeData });
    } catch (err) {
      console.log("fetching animes....");
      console.log(err.response);
    }
  };
};
