import React from "react";
import BaseSecondaryContainer from "./BaseSecondaryContainer";
import ProfileAdditionalInfo from "./ProfileComponents/ProfileAdditionalInfo";
import ProfileAvatar from "./ProfileComponents/ProfileAvatar";
import ProfileHeader from "./ProfileComponents/ProfileHeader";
import ProfileInfoContainer from "./ProfileComponents/ProfileInfoContainer";
import ProfileInfoInput from "./ProfileComponents/ProfileInfoInput";

const Profile = (props) => {
  return (
    <BaseSecondaryContainer isOpen={props.isOpen}>
      <ProfileHeader close={props.close}></ProfileHeader>
      <ProfileAvatar isOpen={props.isOpen}></ProfileAvatar>
      <ProfileInfoContainer isOpen={props.isOpen}>
        <ProfileInfoInput isOpen={props.isOpen} title="Your Name"></ProfileInfoInput>
        <ProfileAdditionalInfo></ProfileAdditionalInfo>
        <ProfileInfoInput isOpen={props.isOpen} title="About"></ProfileInfoInput>
      </ProfileInfoContainer>
    </BaseSecondaryContainer>
  );
};

export default Profile;
