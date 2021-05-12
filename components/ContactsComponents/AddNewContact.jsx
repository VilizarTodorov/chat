import { Avatar, Button, Container, makeStyles, Typography } from "@material-ui/core";
import React from "react";
import PersonAddIcon from "@material-ui/icons/PersonAdd";

const useStyles = makeStyles({
  container: {
    padding: 0,
    display: "flex",
    alignItems: "center",
    cursor: "pointer",
    paddingRight: "16px",
  },
  avatar: {
    margin: "17px",
  },
  typography: {
    flex: 1,
    height: "74px",
    display: "flex",
    alignItems: "center",
    borderBottom: "1px solid rgba(255, 255, 255, 0.08);",
  },
});

const AddNewContact = ({ openForm }) => {
  const classes = useStyles();

  return (
    <Button className={classes.container} onClick={openForm}>
      <Avatar className={classes.avatar}>
        <PersonAddIcon></PersonAddIcon>
      </Avatar>
      <Typography className={classes.typography}>ADD NEW CONTACT</Typography>
    </Button>
  );
};

export default AddNewContact;
