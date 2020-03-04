import { combineReducers } from "redux";
import authReducer from "../client/store/reducers/auth";
import animeReducer from "../client/store/reducers/anime";

const rootReducer = combineReducers({
  auth: authReducer,
  anime: animeReducer
});

export default rootReducer;
