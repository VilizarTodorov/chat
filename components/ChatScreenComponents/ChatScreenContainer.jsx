import { Box, Container, makeStyles } from "@material-ui/core";
import React from "react";

const useStyles = makeStyles({
  container: {
    height: "100%",
    flexBasis: "60%",
    display: "flex",
    flexDirection: "column",
    borderLeft: "1px solid whitesmoke",
  },
});

const ChatScreenContainer = ({ children }) => {
  const classes = useStyles();
  return <Box className={classes.container}>{children}</Box>;
};

export default ChatScreenContainer;
