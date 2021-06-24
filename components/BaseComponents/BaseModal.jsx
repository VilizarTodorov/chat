import { Container, makeStyles, Modal } from "@material-ui/core";
import React from "react";

const useStyles = makeStyles({
  container: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
});

const BaseModal = ({ children, isOpen, close }) => {
  const classes = useStyles();

  return (
    <Modal className={classes.container} open={isOpen} onClose={close}>
      <Container>{children}</Container>
    </Modal>
  );
};

export default BaseModal;
