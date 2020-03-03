import React from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

export default ChildComponent => {
  const requireAuth = props => {
    switch (props.isAuth) {
      case false:
        return <Redirect to="/auth" />;
      default:
        return <ChildComponent {...props} />;
    }
  };
  const mapState = state => ({ isAuth: state.auth.isAuth });
  return connect(mapState)(requireAuth);
};
