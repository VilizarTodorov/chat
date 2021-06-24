import { makeStyles } from "@material-ui/core";
import React from "react";

const useStyles = makeStyles({
  container: {},
});

const PModalImageContainer = ({ img }) => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <img src={img} alt="New Profile Picture" />
    </div>
  );
};

export default PModalImageContainer;
