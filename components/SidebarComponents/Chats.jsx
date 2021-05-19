import React from "react";
import List from "../List";
import Person from "../Person";

const Chats = ({ chats, userEmail, redirectFunction }) => {
  return (
    <List>
      {chats.map((chat) => {
        const contact = chat.users.filter((x) => x !== userEmail)[0];
        return (
          <Person
            key={`${contact}chat`}
            callbackFunction={redirectFunction(chat.id)}
            email={contact?.email}
            photoUrl={contact?.photoURL}
            message={contact?.about}
          ></Person>
        );
      })}
    </List>
  );
};

export default Chats;
