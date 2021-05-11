import { Container } from "@material-ui/core";
import React from "react";

const Form = ({ onSubmit, children }) => {
  return (
    <Container onSubmit={onSubmit} maxWidth="xs" component="form">
      {children}
    </Container>
  );
};

export default Form;
