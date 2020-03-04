import ActionType from "./index";

const animeId = [537, 30, 123];
const dataApi = `https://api.jikan.moe/v3/anime/`;
export const fetchDefaultAnimes = () => {
  return async (dispatch, getState, api) => {
    const animePromise1 = api.get(dataApi + animeId[0]);
    const animePromise2 = api.get(dataApi + animeId[1]);
    const animePrimise3 = api.get(dataApi + animeId[2]);
    let result = await Promise.all([
      animePromise1,
      animePromise2,
      animePrimise3
    ]);
    console.log(reuslt);
  };
};
