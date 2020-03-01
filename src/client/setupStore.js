import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import rootReducer from "../shared/rootReducer";
import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://localhost:8000"
});
const composeEnhancers =
  process.env.NODE_ENV === "development"
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    : null || compose;

const store = createStore(
  rootReducer,
  window.INITIAL_STATE,
  composeEnhancers(applyMiddleware(thunk.withExtraArgument(axiosInstance)))
);

export default store;
