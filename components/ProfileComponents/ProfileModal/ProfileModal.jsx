import React from "react";
import PModalContainer from "./PModalContainer";
import PModalHeader from "./PModalHeader";
import BaseModal from "../../BaseComponents/BaseModal";
import PModalBody from "./PModalBody";
import PModalImageContainer from "./PModalImageContainer";
import PModalSubmit from "./PModalSubmit";

const ProfileModal = ({ title, close, isOpen, img }) => {
  return (
    <BaseModal close={close} isOpen={isOpen}>
      <PModalContainer>
        <PModalHeader close={close} title={title}></PModalHeader>
        <PModalBody>
          <PModalImageContainer img={img}></PModalImageContainer>
          <PModalSubmit></PModalSubmit>
        </PModalBody>
      </PModalContainer>
    </BaseModal>
  );
};

export default ProfileModal;
