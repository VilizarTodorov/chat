import { Box, makeStyles } from "@material-ui/core";
import React from "react";

const useStyles = makeStyles({
  container: {
    padding: "15px 0",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    cursor: "pointer",
  },
});

const ChatInfoOptionContainer = ({ children }) => {
  const classes = useStyles();

  return <Box className={classes.container}>{children}</Box>;
};

export default ChatInfoOptionContainer;
