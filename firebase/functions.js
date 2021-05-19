import { db, firebase } from ".";

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

const createChat = async (contact, user,userChats, callback, router) => {
  const chat = userChats.find((c) => c.users.includes(contact));

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

const sendMessage = (message, chatId, user) => {
  if (!message) {
    return;
  }

  db.collection("chats").doc(chatId).collection("messages").add({
    timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    message,
    user: user.email,
    photoURL: user.photoURL,
  });
};

const editMessage = (chatId, messageId, message, callBack) => {
  getMessage(chatId, messageId)
    .update({ message })
    .then(() => callBack())
    .then(() => {
      console.log("Document successfully updated!");
    })
    .catch((error) => {
      // The document probably doesn't exist.
      console.error("Error updating document: ", error);
    });
};

const deleteMessage = (chatId, messageId) => {
  getMessage(chatId, messageId)
    .delete()
    .then(() => {
      console.log("Document successfully deleted!");
    })
    .catch((error) => {
      console.error("Error removing document: ", error);
    });
};

export { editProfileInfo, addContact, createChat, sendMessage, editMessage, deleteMessage };

const getMessage = (chatId, messageId) => {
  return db.collection("chats").doc(chatId).collection("messages").doc(messageId);
};
