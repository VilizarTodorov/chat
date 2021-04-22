import Container from "@material-ui/core/Container";
import React from "react";
import KeyboardBackspaceIcon from "@material-ui/icons/KeyboardBackspace";
import Typography from "@material-ui/core/Typography";
import { Avatar, Box, IconButton, Input, TextField } from "@material-ui/core";
import styles from "../styles/Profile.module.css";
import ProfileInfoContainer from "./ProfileInfoContainer";

const Profile = (props) => {
  return (
    <Container className={`${styles.container} ${props.isOpen ? styles.active : ""}`}>
      <div className={styles.headerContainer}>
        <div className={styles.headerPart}>
          <IconButton className={styles.padding25px} onClick={props.close}>
            <KeyboardBackspaceIcon className={styles.icon}></KeyboardBackspaceIcon>
          </IconButton>
          <Typography variant="h5">Profile</Typography>
        </div>
      </div>
      <Container className={styles.profileAvatarContainer}>
        <Avatar className={styles.profileAvatar}></Avatar>
      </Container>
      <ProfileInfoContainer title="Your name"></ProfileInfoContainer>
      <Container className={styles.additionalInfo}>
        <Box component="span">
          This is not your username or pin. This name will be visible to your WhatsApp contacts.
        </Box>
      </Container>
      <ProfileInfoContainer title="About"></ProfileInfoContainer>
    </Container>
  );
};

export default Profile;
