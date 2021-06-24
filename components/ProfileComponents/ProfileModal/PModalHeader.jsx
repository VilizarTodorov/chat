import { IconButton, makeStyles, Typography } from "@material-ui/core";
import ClearIcon from "@material-ui/icons/Clear";
import React from "react";

const useStyles = makeStyles({
  header: {
    backgroundColor: "#323739",
    height: "50px",
    display: "flex",
    alignItems: "center",
  },
  container: {
    display: "flex",
  },
  icon: {
    marginRight: "20px",
  },
});

const PModalHeader = ({ title, close }) => {
  const classes = useStyles();

  return (
    <header className={classes.header}>
      <div className={classes.container}>
        <IconButton className={classes.icon} onClick={close}>
          <ClearIcon></ClearIcon>
        </IconButton>
        <Typography>{title}</Typography>
      </div>
    </header>
  );
};

export default PModalHeader;
