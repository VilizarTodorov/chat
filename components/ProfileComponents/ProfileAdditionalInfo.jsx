import { Container, makeStyles, Typography } from "@material-ui/core";
import React from "react";

const useStyles = makeStyles({
  container: {
    marginTop: "20px",
    marginBottom: "40px",
    userSelect: "none",
  },
});

const ProfileAdditionalInfo = () => {
  const classes = useStyles();
  return (
    <Container className={classes.container}>
      <Typography variant="subtitle2">
        This is not your username or pin. This name will be visible to your Chat contacts.
      </Typography>
    </Container>
  );
};

export default ProfileAdditionalInfo;
