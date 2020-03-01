import { combineReducers } from "redux";
import authReducer from "../client/store/reducers/auth";

const rootReducer = combineReducers({
  auth: authReducer
});

export default rootReducer;
