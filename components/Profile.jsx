import React, { useState } from "react";
import BaseSecondaryContainer from "./BaseSecondaryContainer";
import ProfileAdditionalInfo from "./ProfileComponents/ProfileAdditionalInfo";
import ProfileAvatar from "./ProfileComponents/ProfileAvatar";
import ProfileHeader from "./ProfileComponents/ProfileHeader";
import ProfileInfoContainer from "./ProfileComponents/ProfileInfoContainer";
import ProfileInfoInput from "./ProfileComponents/ProfileInfoInput";
import { useUser } from "../UserContext";

const Profile = (props) => {
  const user = useUser();

  const [displayName, setDisplayName] = useState(user.user.displayName);
  const [about, setAbout] = useState(user.user.about);

  return (
    <BaseSecondaryContainer isOpen={props.isOpen}>
      <ProfileHeader close={props.close}></ProfileHeader>
      <ProfileAvatar isOpen={props.isOpen} photoURL={user.user.photoURL} email={user.user.email}></ProfileAvatar>
      <ProfileInfoContainer isOpen={props.isOpen}>
        <ProfileInfoInput
          id="displayName"
          name="displayName"
          type="text"
          value={displayName}
          onChange={(e) => setDisplayName(e.target.value)}
          placeholder="Your Name"
          label="Your Name"
        ></ProfileInfoInput>
        <ProfileAdditionalInfo></ProfileAdditionalInfo>
        <ProfileInfoInput
          id="about"
          name="about"
          type="text"
          value={about}
          onChange={(e) => setAbout(e.target.value)}
          placeholder="About"
          label="About"
        ></ProfileInfoInput>
      </ProfileInfoContainer>
    </BaseSecondaryContainer>
  );
};

export default Profile;
