import { db } from ".";

const editProfileInfo = (email, newPropValue, currentPropValue, prop) => {
  if (newPropValue === currentPropValue) {
    return Promise.resolve("Success");
  }
  return db
    .collection("users")
    .doc(email)
    .update({ [prop]: newPropValue });
};

const addContact = async (email, userEmail, contacts) => {
  const isInContactsAlready = contacts.find((c) => c.email === email);
  if (isInContactsAlready) {
    return Promise.resolve(true);
  }

  const user = await db.collection("users").doc(email).get();

  if (user.exists) {
    return db
      .collection("contacts")
      .doc(userEmail)
      .collection("contacts")
      .doc(user.id)
      .set({ ...user.data() })
      .then(() => {
        return true;
      });
  } else {
    return Promise.reject(false);
  }
};

const createChat = async (contact, user, callback, router) => {
  const chat = user.userChats.find((c) => c.users.includes(contact));

  if (chat) {
    callback();
    router.push(`/chat/${chat.id}`);
    return;
  }

  let chatDoc = await (await db.collection("chats").add({ users: [contact, user.user.email] })).get();

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
    .doc(user.user.email)
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

export { editProfileInfo, addContact, createChat };
