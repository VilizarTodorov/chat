import { Avatar, Container, makeStyles } from "@material-ui/core";
import React from "react";

const useStyles = makeStyles({
  container: {
    padding: "25px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    transform: "scale(0)",
    transition: "all 0.3s ease-in-out 0.4s",
  },
  active: {
    transform: "scale(1)",
  },
  avatar: {
    width: "200px",
    height: "200px",
  },
});

const ProfileAvatar = ({ isOpen }) => {
  const classes = useStyles();
  return (
    <Container className={`${classes.container} ${isOpen && classes.active}`}>
      <Avatar className={classes.avatar}></Avatar>
    </Container>
  );
};

export default ProfileAvatar;
