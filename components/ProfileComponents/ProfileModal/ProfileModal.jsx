import React from "react";
import PModalContainer from "./PModalContainer";
import PModalHeader from "./PModalHeader";
import BaseModal from "../../BaseComponents/BaseModal";

const ProfileModal = ({ title, close, isOpen }) => {
  return (
    <BaseModal close={close} isOpen={isOpen}>
      <PModalContainer>
        <PModalHeader close={close} title={title}></PModalHeader>
      </PModalContainer>
    </BaseModal>
  );
};

export default ProfileModal;
