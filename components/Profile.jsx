import React, { useState } from "react";
import BaseSecondaryContainer from "./BaseComponents/BaseSecondaryContainer";
import ProfileAdditionalInfo from "./ProfileComponents/ProfileAdditionalInfo";
import ProfileAvatar from "./ProfileComponents/ProfileAvatar";
import ProfileHeader from "./ProfileComponents/ProfileHeader";
import ProfileInfoContainer from "./ProfileComponents/ProfileInfoContainer";
import ProfileInfoInput from "./ProfileComponents/ProfileInfoInput";
import { useUser } from "../UserContext";
import { editProfileInfo } from "../firebase/functions";

const Profile = ({ close, isOpen }) => {
  const context = useUser();

  const [displayName, setDisplayName] = useState(context.user.displayName);
  const [about, setAbout] = useState(context.user.about);

  return (
    <BaseSecondaryContainer isOpen={isOpen}>
      <ProfileHeader close={close}></ProfileHeader>
      <ProfileAvatar isOpen={isOpen} photoURL={context.user.photoURL} email={context.user.email}></ProfileAvatar>
      <ProfileInfoContainer isOpen={isOpen}>
        <ProfileInfoInput
          id="displayName"
          name="displayName"
          type="text"
          value={displayName}
          onChange={(e) => setDisplayName(e.target.value)}
          placeholder="Your Name"
          label="Your Name"
          onSubmit={() => editProfileInfo(context.user.email, displayName, context.user.displayName, "displayName")}
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
          onSubmit={() => editProfileInfo(context.user.email, about, context.user.about, "about")}
        ></ProfileInfoInput>
      </ProfileInfoContainer>
    </BaseSecondaryContainer>
  );
};

export default Profile;
