import React from "react";
import Login from "../components/Login";
import withAuthorization from "../UserContext/withAuthorization";
import MainContainer from "../components/Layout/MainContainer";

const LoginPage = (props) => {
  return (
    <MainContainer>
      <Login></Login>
    </MainContainer>
  );
};

const condition = (user) => {
  if (!user) {
    return true;
  }
  return false;
};

export default withAuthorization(condition)(LoginPage);
