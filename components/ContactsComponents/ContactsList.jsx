import React from "react";
import List from "../List";
import Person from "../Person";

const ContactsList = ({ contacts, createChatFunction }) => {
  return (
    <List>
      {contacts.map((contact) => {
        return (
          <Person
            key={`${contact.email}contact`}
            callbackFunction={createChatFunction(contact.email)}
            email={contact.email}
            message={"Hi I'm using chat"}
            photoUrl={contact.photoURL}
          ></Person>
        );
      })}
    </List>
  );
};

export default ContactsList;
