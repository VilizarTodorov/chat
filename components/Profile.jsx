import { Box } from "@material-ui/core";
import Container from "@material-ui/core/Container";
import React from "react";
import styles from "../styles/Profile.module.css";
import ProfileAdditionalInfo from "./ProfileComponents/ProfileAdditionalInfo";
import ProfileAvatar from "./ProfileComponents/ProfileAvatar";
import ProfileContainer from "./ProfileComponents/ProfileContainer";
import ProfileHeader from "./ProfileComponents/ProfileHeader";
import ProfileInfoContainer from "./ProfileComponents/ProfileInfoContainer";
import ProfileInfoInput from "./ProfileComponents/ProfileInfoInput";

const Profile = (props) => {
  return (
    <ProfileContainer isOpen={props.isOpen}>
      <ProfileHeader close={props.close}></ProfileHeader>
      <ProfileAvatar isOpen={props.isOpen}></ProfileAvatar>
      <ProfileInfoContainer isOpen={props.isOpen}>
        <ProfileInfoInput isOpen={props.isOpen} title="Your Name"></ProfileInfoInput>
        <ProfileAdditionalInfo></ProfileAdditionalInfo>
        <ProfileInfoInput isOpen={props.isOpen} title="About"></ProfileInfoInput>
      </ProfileInfoContainer>
    </ProfileContainer>
  );
};

export default Profile;
