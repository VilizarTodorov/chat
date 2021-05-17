import { useEffect, useState } from "react";
import { db } from "../firebase";

const useContacts = (email) => {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    const listener = db
      .collection("contacts")
      .doc(email)
      .collection("contacts")
      .onSnapshot((querySnapshot) => {
        const userContacts = [];
        querySnapshot.forEach((c) => {
          userContacts.push(c.data());
        });
        setContacts(userContacts);
      });

    return () => {
      listener();
    };
  }, [email]);

  return contacts;
};

export { useContacts };
