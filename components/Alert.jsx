import { Snackbar } from "@material-ui/core";
import MuiAlert from "@material-ui/lab/Alert";
import MuiAlertTitle from "@material-ui/lab/AlertTitle";
import React from "react";
import { useUser } from "../UserContext";

const Alert = () => {
  const context = useUser();

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    context.setAlert({ ...context.alert, open: false });
  };

  return (
    <Snackbar open={context.alert.open} autoHideDuration={2500} onClose={handleClose}>
      <MuiAlert onClose={handleClose} severity={context.alert.severity}>
        <MuiAlertTitle>{context.alert.title}</MuiAlertTitle>
        {context.alert.message}
      </MuiAlert>
    </Snackbar>
  );
};

export default Alert;
