import { IconButton, makeStyles } from "@material-ui/core";
import React from "react";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";

const useStyles = makeStyles({
  scrollDownButton: {
    position: "fixed",
    right: "8px",
    bottom: "70px",
    transform: "scale(0)",
    opacity: 0,
    transition: "all 0.25s ease-in-out",
  },

  visible: {
    transform: "scale(1)",
    opacity: 1,
  },
});

const ScrollDownButton = ({ isVisible, scrollDown }) => {
  const classes = useStyles();
  return (
    <IconButton className={`${classes.scrollDownButton} ${isVisible && classes.visible}`} onClick={scrollDown}>
      <KeyboardArrowDownIcon></KeyboardArrowDownIcon>
    </IconButton>
  );
};

export default ScrollDownButton;
