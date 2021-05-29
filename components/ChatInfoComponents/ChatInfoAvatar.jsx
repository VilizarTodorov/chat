import { makeStyles, Typography } from "@material-ui/core";
import React from "react";
import ProfileAvatar from "../ProfileComponents/ProfileAvatar";
import GeneralContainer from "./GeneralContainer";

const useStyles = makeStyles({
  info: {
    padding: "5px 0",
  },
});

const ChatInfoAvatar = ({ displayName, email, isOpen, photoURL }) => {
  const classes = useStyles();
  return (
    <GeneralContainer>
      <ProfileAvatar email={email} isOpen={isOpen} photoURL={photoURL}></ProfileAvatar>
      <Typography className={classes.info}>{displayName}</Typography>
      <Typography className={classes.info}>{email}</Typography>
    </GeneralContainer>
  );
};

export default ChatInfoAvatar;
