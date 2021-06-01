import { Container, makeStyles } from "@material-ui/core";
import React from "react";
import BaseSecondaryContainer from "../BaseSecondaryContainer";

const useStyles = makeStyles({
  container: {
    flex: 0,
    position: "relative",
    padding: 0,
    transition: "all 0.15s",
    overflow: "hidden",
    opacity: 0,
  },
  active: {
    flexBasis: "43%",
    opacity: 1,
    borderLeft: "1px solid whitesmoke",
  },
  secondaryContainer: {
    left: "100%",
  },
  secondaryActive: {
    left: 0,
  },

  [`@media (max-width: 1020px)`]: {
    container: {
      position: "absolute",
      right: 0,
      top: 0,
      width: "100%",
      height: "100%",
    },
  },
});

const ChatInfoContainer = ({ isOpen, children }) => {
  const classes = useStyles();

  return (
    <Container className={`${classes.container} ${isOpen && classes.active}`}>
      <BaseSecondaryContainer
        className={`${classes.secondaryContainer} ${isOpen && classes.secondaryActive}`}
        isOpen={isOpen}
      >
        {children}
      </BaseSecondaryContainer>
    </Container>
  );
};

export default ChatInfoContainer;
