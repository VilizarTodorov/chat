import { makeStyles } from "@material-ui/core";
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
import sanitizeHtml from "sanitize-html";

const useStyles = makeStyles({
  span: {
    color: "#4da6ff",
  },
});

const HighLight = ({ value }) => {
  const classes = useStyles();
  return <span className={classes.span}>{value}</span>;
};

const Contacts = ({ close, isOpen }) => {
  const classes = useStyles();
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
    const regex = new RegExp(searchValue, "gi");
    let filtered = initialList.filter((contact) => contact.email.includes(searchValue));

    filtered = filtered.map((contact) => {
      const newEmail = contact.email.replaceAll(regex, `<span class='${classes.span}'>${searchValue}</span>`);
      const cleanEmail = sanitizeHtml(newEmail, {
        allowedAttributes: false,
        allowedTags: false,
      });
      return { ...contact, email: cleanEmail };
    });
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
