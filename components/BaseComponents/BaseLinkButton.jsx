import React from "react";
import Link from "next/link";
import { Button } from "@material-ui/core";
import useButtonStyles from "../../styles/ButtonStyles";

const BaseLinkButton = ({ route, children }) => {
  const classes = useButtonStyles();

  return (
    <Link href={route} passHref>
      <Button type="button" className={classes.button} variant="contained" fullWidth>
        {children}
      </Button>
    </Link>
  );
};

export default BaseLinkButton;
