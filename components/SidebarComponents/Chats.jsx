import React from "react";
import List from "../List";
import Person from "../Person";
import getUser from "../../helpers/functions/getUser";

const Chats = ({ chats, userEmail, redirectFunction }) => {
  return (
    <List>
      {chats.map((chat) => {
        const contact = getUser(chat.users, userEmail);
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
