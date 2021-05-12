import { makeStyles } from "@material-ui/core";
import MUIList from "@material-ui/core/List";
import React from "react";

const useStyles = makeStyles({
  root: {
    paddingTop: 0,
    flex: 1,
    overflowY: "scroll",
    msOverflowStyle: "none",
    scrollbarWidth: "none",
    "&::-webkit-scrollbar": {
      display: "none",
    },
  },
});

const List = ({ children }) => {
  const classes = useStyles();

  return <MUIList className={classes.root}>{children}</MUIList>;
};

export default List;
