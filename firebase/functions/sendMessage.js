import { db, firebase } from "../";
import getUrls from "../../helpers/functions/checkIfContainsUrl";

const sendMessage = (message, chatId, user) => {
  if (!message) {
    return;
  }

  getUrls(message);

  db.collection("chats").doc(chatId).collection("links").add

  return db.collection("chats").doc(chatId).collection("messages").add({
    timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    message,
    user: user.email,
    photoURL: user.photoURL,
  });
};

export default sendMessage;
