import { useRouter } from "next/router";
import React, { useState } from "react";
import { createChat } from "../firebase/functions";
import { useUser } from "../UserContext";
import Alert from "./Alert";
import BaseSecondaryContainer from "./BaseSecondaryContainer";
import AddNewContact from "./ContactsComponents/AddNewContact";
import AddNewContactModal from "./ContactsComponents/AddNewContactModal";
import ContactsHeader from "./ContactsComponents/ContactsHeader";
import ContactsList from "./ContactsComponents/ContactsList";
import Search from "./Search";

const Contacts = ({ close, isOpen }) => {
  const [open, setOpen] = useState(false);
  const context = useUser();
  const router = useRouter();

  const createChatFunction = (contact) => {
    return () => createChat(contact, context.user, context.userChats, close, router);
  };

  return (
    <BaseSecondaryContainer isOpen={isOpen}>
      <Alert></Alert>
      <ContactsHeader close={close}></ContactsHeader>
      <Search></Search>
      <AddNewContact openForm={() => setOpen(true)}></AddNewContact>
      <ContactsList contacts={context.contacts} createChatFunction={createChatFunction}></ContactsList>
      <AddNewContactModal
        isOpen={open}
        close={() => setOpen(false)}
        userEmail={context.user.email}
        contacts={context.contacts}
      ></AddNewContactModal>
    </BaseSecondaryContainer>
  );
};

export default Contacts;
