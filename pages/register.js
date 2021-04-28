import React from "react";
import Register from "../components/Register";
import withAuthorization from "../UserContext/withAuthorization";

const RegisterPage = (props) => {
  return <Register></Register>;
};

const condition = (user) => {
  if (!user.userDbEntry) {
    return true;
  }
  return false;
};

export default withAuthorization(condition)(RegisterPage);
