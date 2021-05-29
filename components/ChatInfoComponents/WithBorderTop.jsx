import { Box, makeStyles } from "@material-ui/core";
import React from "react";

const useStyles = makeStyles({
  container: {
    borderTop: "1px solid #30383d",
  },
});

const WithBorderTop = ({ children }) => {
  const classes = useStyles();
  return <Box className={classes.container}>{children}</Box>;
};

export default WithBorderTop;
