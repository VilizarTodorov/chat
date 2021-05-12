import { Container } from "@material-ui/core";
import React from "react";
import useContainerStyles from "../../commonStyles/container";

const ContactsContainer = ({ isOpen, children }) => {
  const classes = useContainerStyles();
  return <Container className={`${classes.container} ${isOpen && classes.active}`}>{children}</Container>;
};

export default ContactsContainer;
