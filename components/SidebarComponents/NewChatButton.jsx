import { Button, makeStyles } from "@material-ui/core";
import React from "react";

const useStyles = makeStyles({
  button: {
    borderTop: "1px solid whitesmoke",
    borderBottom: "1px solid whitesmoke",
  },
});

const NewChatButton = ({ onClick }) => {
  const classes = useStyles();
  return (
    <Button onClick={onClick} fullWidth className={classes.button}>
      START NEW CHAT
    </Button>
  );
};

export default NewChatButton;
