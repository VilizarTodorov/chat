import React from "react";
import List from "../List";
import Person from "../Person";

const Chats = ({ chats, user, redirectFunction }) => {
  return (
    <List>
      {chats.map((chat) => {
        const email = chat.users.filter((x) => x !== user.user.email)[0];
        const contact = user.contacts.find((contact) => contact.email === email);
        return (
          <Person
            key={`${email}chat`}
            callbackFunction={redirectFunction(chat.id)}
            email={email}
            photoUrl={contact?.photo}
            message={"Hi I'm using chat"}
          ></Person>
        );
      })}
    </List>
  );
};

export default Chats;
