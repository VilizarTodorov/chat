import { Box, makeStyles } from "@material-ui/core";
import React from "react";

const useStyles = makeStyles({
  container: {
    opacity: 0,
    transform: "translateY(-50px)",
    transition: "all 0.4s ease-in-out 0.44s",
  },
  active: {
    opacity: 1,
    transform: "translateY(0)",
  },
});

const ProfileInfoContainer = ({ isOpen, children }) => {
  const classes = useStyles();
  return <Box className={`${classes.container} ${isOpen && classes.active}`}>{children}</Box>;
};

export default ProfileInfoContainer;
