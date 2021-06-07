import { useState } from "react";
import useSubCollection from "./useSubCollection";

const useContacts = (user) => {
  const [contacts, setContacts] = useState([]);

  const callback = (querySnapshot, setFunc) => {
    const arr = [];
    querySnapshot.forEach((item) => {
      arr.push({ ...item.data(), displayEmail: item.data().email });
    });
    setFunc(arr);
  };

  useSubCollection("contacts", "contacts", setContacts, user, callback);

  return contacts;
};

export default useContacts;
