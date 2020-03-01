import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import rootReducer from "../shared/rootReducer";
import axios from "axios";

export default req => {
  const axiosInstance = axios.create({
    baseURL: "http://localhost:8000",
    headers: { cookie: req.get("cookie") || "" }
  });
  //console.log("inside create store, cooke is: ", req.get("cookie"));
  const store = createStore(
    rootReducer,
    applyMiddleware(thunk.withExtraArgument(axiosInstance))
  );
  return store;
};
