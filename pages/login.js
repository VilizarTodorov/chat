import React from "react";
import Login from "../components/Login";
import withAuthorization from "../UserContext/withAuthorization";

const LoginPage = (props) => {
  return <Login></Login>;
};

const condition = (user) => {
  if (!user.userDbEntry) {
    return true;
  }
  return false;
};

export default withAuthorization(condition)(LoginPage);
