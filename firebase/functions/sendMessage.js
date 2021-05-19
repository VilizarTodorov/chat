import { db, firebase } from "../";

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

export default sendMessage;
