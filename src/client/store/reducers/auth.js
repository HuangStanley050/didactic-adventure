import ActionType from "../actions";
const initialState = {
  isAuth: false
};

const reducer = (state = initialState, action) => {
  switch (action) {
    case ActionType.CHECK_AUTH:
      // console.log("inside reducer");
      // console.log(action.payload);
      return {
        ...state
      };
    default:
      return state;
  }
};

export default reducer;
