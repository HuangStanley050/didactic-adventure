import ActionType from "../actions";

const initialState = {
  defaultAnimes: []
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.FETCH_DEFAULT_ANIMES:
      return {
        ...state,
        defaultAnimes: [...action.payload]
      };
    default:
      return state;
  }
};

export default reducer;
