import { useRouter } from "next/router";
import React, { useState } from "react";
import { db } from "../firebase";
import { createChat } from "../firebase/functions";
import { useUser } from "../UserContext";
import BaseSecondaryContainer from "./BaseSecondaryContainer";
import AddNewContact from "./ContactsComponents/AddNewContact";
import AddNewContactModal from "./ContactsComponents/AddNewContactModal";
import ContactsHeader from "./ContactsComponents/ContactsHeader";
import ContactsList from "./ContactsComponents/ContactsList";
import Search from "./Search";

const Contacts = (props) => {
  const [open, setOpen] = useState(false);
  const user = useUser();
  const router = useRouter();

  const createChatFunction = (contact) => {
    return () =>  createChat(contact, user, props.close, router);
  };

  return (
    <BaseSecondaryContainer isOpen={props.isOpen}>
      <ContactsHeader close={props.close}></ContactsHeader>
      <Search></Search>
      <AddNewContact openForm={() => setOpen(true)}></AddNewContact>
      <ContactsList contacts={user.contacts} createChatFunction={createChatFunction}></ContactsList>
      <AddNewContactModal isOpen={open} close={() => setOpen(false)} user={user}></AddNewContactModal>
    </BaseSecondaryContainer>
  );
};

export default Contacts;
