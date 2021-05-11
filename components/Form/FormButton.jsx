import { Button } from "@material-ui/core";
import React from "react";
import useButtonStyles from "../../styles/ButtonStyles";

const FormButton = ({ children }) => {
  const classes = useButtonStyles();
  return (
    <Button className={classes.button} fullWidth variant="contained" type="submit">
      {children}
    </Button>
  );
};

export default FormButton;
