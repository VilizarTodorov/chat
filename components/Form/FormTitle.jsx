import { Typography } from "@material-ui/core";
import React from "react";

const FormTitle = ({ children }) => {
  return (
    <Typography variant="h4" color="textSecondary">
      {children}
    </Typography>
  );
};

export default FormTitle;
