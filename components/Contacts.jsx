import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { createChat } from "../firebase/functions";
import { useUser } from "../UserContext";
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
  const [filteredContacts, setFilteredContacts] = useState([]);

  useEffect(() => {
    setFilteredContacts(context.contacts);
  }, [context.contacts]);

  const createChatFunction = (contact) => {
    return () => createChat(contact, context.user, context.userChats, close, router);
  };

  const searchFunction = (searchValue, setList, initialList) => {
    const filtered = initialList.filter((contact) => contact.email.includes(searchValue));
    setList(filtered);
  };

  return (
    <BaseSecondaryContainer isOpen={isOpen}>
      <ContactsHeader close={close}></ContactsHeader>
      <Search setList={setFilteredContacts} initialList={context.contacts} searchFunction={searchFunction}></Search>
      <AddNewContact openForm={() => setOpen(true)}></AddNewContact>
      <ContactsList contacts={filteredContacts} createChatFunction={createChatFunction}></ContactsList>
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
