import ActionType from "../actions";
const initialState = {
  isAuth: null
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CHECK_AUTH:
      // console.log("inside reducer");
      // console.log(action.payload);
      return {
        ...state,
        isAuth: action.payload ? true : false
      };
    default:
      return state;
  }
};

export default reducer;
