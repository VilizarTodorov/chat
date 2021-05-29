import { Button, makeStyles } from "@material-ui/core";
import React from "react";

const useStyles = makeStyles({
  button: {
    backgroundColor: "#0d1418",
    marginBottom: "10px",
    borderRadius: 0,
    justifyContent: "flex-start",
    height: "60px",
    paddingLeft: "24px",
  },
});

const ChatInfoAction = ({ onClick, children, icon }) => {
  const classes = useStyles();
  return (
    <Button className={classes.button} size="large" fullWidth onClick={onClick} startIcon={icon}>
      {children}
    </Button>
  );
};

export default ChatInfoAction;
