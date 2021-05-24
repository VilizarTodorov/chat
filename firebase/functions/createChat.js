import { db } from "../";
import getUser from "../../helpers/functions/getUser";

const createChat = async (contact, user, userChats, callback, router) => {
  const chat = userChats.find((c) => {
    const hasContact = getUser(c.users, contact);

    if (hasContact.email) {
      return true;
    }
    return false;
  });

  if (chat) {
    callback();
    router.push(`/chat/${chat.id}`);
    return;
  }

  let contactUser = (await db.collection("users").doc(contact).get()).data();

  let chatDoc = await (await db.collection("chats").add({ users: [contactUser, user] })).get();

  let contactPromise = db
    .collection("userChats")
    .doc(contact)
    .collection("chats")
    .doc(chatDoc.id)
    .set({
      id: chatDoc.id,
      ...chatDoc.data(),
    });

  let userPromise = db
    .collection("userChats")
    .doc(user.email)
    .collection("chats")
    .doc(chatDoc.id)
    .set({
      id: chatDoc.id,
      ...chatDoc.data(),
    });

  Promise.all([contactPromise, userPromise])
    .then(() => callback())
    .then(() => router.push(`/chat/${chatDoc.id}`));
};

export default createChat;
