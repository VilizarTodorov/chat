import { Container } from "@material-ui/core";
import React from "react";

const Message = ({ user, message }) => {
  return (
    <Container>
      <p>{message}</p>
    </Container>
  );
};

export default Message;
