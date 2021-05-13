import { Avatar, Box, IconButton } from "@material-ui/core";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import KeyboardBackspaceIcon from "@material-ui/icons/KeyboardBackspace";
import React from "react";
import styles from "../styles/Profile.module.css";
import ProfileContainer from "./ProfileComponents/ProfileContainer";
import ProfileHeader from "./ProfileComponents/ProfileHeader";
import ProfileInfoContainer from "./ProfileInfoContainer";

const Profile = (props) => {
  return (
    <ProfileContainer isOpen={props.isOpen}>
      <ProfileHeader close={props.close}></ProfileHeader>
      <Container className={`${styles.profileAvatarContainer} ${props.isOpen ? styles.inViewAvatar : ""}`}>
        <Avatar className={styles.profileAvatar}></Avatar>
      </Container>
      <ProfileInfoContainer inView={props.isOpen} title="Your name"></ProfileInfoContainer>
      <Container className={`${styles.additionalInfo} ${props.isOpen ? styles.inViewAdditionalInfo : ""}`}>
        <Box component="span">
          This is not your username or pin. This name will be visible to your WhatsApp contacts.
        </Box>
      </Container>
      <ProfileInfoContainer inView={props.isOpen} title="About"></ProfileInfoContainer>
    </ProfileContainer>
  );
};

export default Profile;
