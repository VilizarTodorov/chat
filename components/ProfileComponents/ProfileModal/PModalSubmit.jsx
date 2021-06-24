import { makeStyles } from "@material-ui/core";
import React from "react";

const useStyles = makeStyles({
  container: {
    display: "flex",
    alignItems: "center",
    minHeight: "90px",
  },
});

const PModalSubmit = () => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <button>submit</button>
    </div>
  );
};

export default PModalSubmit;
