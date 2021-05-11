import React from "react";
import Register from "../components/Register";
import withAuthorization from "../UserContext/withAuthorization";
import MainContainer from "../components/Layout/MainContainer";

const RegisterPage = (props) => {
  return (
    <MainContainer>
      <Register></Register>
    </MainContainer>
  );
};

const condition = (user) => {
  if (!user.userDbEntry) {
    return true;
  }
  return false;
};

export default withAuthorization(condition)(RegisterPage);
