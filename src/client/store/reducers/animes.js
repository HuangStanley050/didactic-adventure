import ActionType from "../actions";

const initialState = {
  defaultAnimes: []
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.FETCH_DEFAULT_ANIMES:
      console.log("in anime reducer");
      console.log(action.payload);
      return {
        ...state,
        defaultAnimes: ["hi"]
      };
    default:
      return state;
  }
};

export default reducer;
