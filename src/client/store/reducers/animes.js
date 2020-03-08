import ActionType from "../actions";

const initialState = {
  defaultAnimes: [],
  loading: false
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.FETCH_DEFAULT_ANIMES_START:
      return {
        ...state,
        loading: true
      };
    case ActionType.FETCH_DEFAULT_ANIMES:
      // console.log("action inside anime reducer");
      // console.log(action.payload);
      return {
        ...state,
        loading: false,
        defaultAnimes: [...action.payload]
      };
    default:
      return state;
  }
};

export default reducer;
