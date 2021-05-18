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

    // return async () => {
    //   const chat = user.userChats.find((chat) => chat.users.includes(contact));

    //   if (chat) {
    //     props.close();
    //     router.push(`/chat/${chat.id}`);
    //     return;
    //   }

    //   let chatRef = await db.collection("chats").add({ users: [contact, user.user.email] });
    //   await chatRef.update({ id: chatRef.id });
    //   const newChat = await chatRef.get();

    //   let contactPromise = db
    //     .collection("userChats")
    //     .doc(contact)
    //     .get()
    //     .then(async (doc) => {
    //       await doc.ref.update({ chats: [...doc.data().chats, { ...newChat.data() }] });
    //     });

    //   let userPromise = db
    //     .collection("userChats")
    //     .doc(user.user.email)
    //     .get()
    //     .then(async (doc) => {
    //       await doc.ref.update({ chats: [...doc.data().chats, { ...newChat.data() }] });
    //     });

    //   Promise.all([contactPromise, userPromise])
    //     .then(() => props.close())
    //     .then(() => router.push(`/chat/${chatRef.id}`));
    // };
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
