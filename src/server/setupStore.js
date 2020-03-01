import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import rootReducer from "../shared/rootReducer";

export default req => {
  const store = createStore(rootReducer, applyMiddleware(thunk));
  return store;
};
