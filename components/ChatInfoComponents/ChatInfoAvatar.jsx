import { Container, Typography } from "@material-ui/core";
import React from "react";
import { Fragment } from "react";
import ProfileAvatar from "../ProfileComponents/ProfileAvatar";

const ChatInfoAvatar = ({ email, isOpen, photoURL }) => {
  return (
    <Fragment>
      <ProfileAvatar email={email} isOpen={isOpen} photoURL={photoURL}></ProfileAvatar>
      <Container>
        <Typography>{email}</Typography>
      </Container>
    </Fragment>
  );
};

export default ChatInfoAvatar;
