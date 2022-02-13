import React from "react";
import { Redirect, Route } from "react-router-dom";
import { connect } from "react-redux";

const PrivateRoute = ({ component: Component, isAuthenticated, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) =>
        isAuthenticated.token !== "" ? (
          <Component {...props} />
        ) : (
          <Redirect to="/" />
        )
      }
    />
  );
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.user,
});

export default connect(mapStateToProps)(PrivateRoute);
