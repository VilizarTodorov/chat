import { Box } from "@material-ui/core";
import Container from "@material-ui/core/Container";
import React from "react";
import styles from "../styles/Profile.module.css";
import ProfileAvatar from "./ProfileComponents/ProfileAvatar";
import ProfileContainer from "./ProfileComponents/ProfileContainer";
import ProfileHeader from "./ProfileComponents/ProfileHeader";
import ProfileInfoContainer from "./ProfileInfoContainer";

const Profile = (props) => {
  return (
    <ProfileContainer isOpen={props.isOpen}>
      <ProfileHeader close={props.close}></ProfileHeader>
      <ProfileAvatar isOpen={props.isOpen}></ProfileAvatar>
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
