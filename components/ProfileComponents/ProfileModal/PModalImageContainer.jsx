import { makeStyles } from "@material-ui/core";
import React from "react";
import PModalImageCrop from "./PModalImageCrop";

const useStyles = makeStyles({
  container: {
    flex: "1",
    position: "relative",
  },
});

const PModalImageContainer = ({ img }) => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <PModalImageCrop img={img}></PModalImageCrop>
    </div>
  );
};

export default PModalImageContainer;
