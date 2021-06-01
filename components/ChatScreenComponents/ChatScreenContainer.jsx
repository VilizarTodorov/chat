import { Box, makeStyles } from "@material-ui/core";
import React from "react";

const useStyles = makeStyles({
  container: {
    position: "relative",
    // flexBasis: "60%",
    flex: 1,
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
