import { useState } from "react";
import useSubCollection from "./useSubCollection";

const useUserChats = (user) => {
  const [userChats, setUserChats] = useState([]);

  const callback = (querySnapshot, setFunc) => {
    const arr = [];
    querySnapshot.forEach((item) => {
      arr.push(item.data());
    });
    setFunc(arr);
  };

  useSubCollection("userChats", "chats", setUserChats, user, callback);

  return userChats;
};

export default useUserChats;
