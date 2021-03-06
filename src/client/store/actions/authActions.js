import ActionType from "./index";
import axios from "axios";

export const checkAuth = () => {
  return async (dispatch, getState, api) => {
    try {
      const result = await api.get("/api/current_user");
      // console.log("inside action creator");
      // console.log("the result is:===> ", result.data);
      dispatch({ type: ActionType.CHECK_AUTH, payload: result.data });
    } catch (err) {
      console.log("inside error in action creator");
      console.log(err);
    }
  };
};
