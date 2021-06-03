import { db, firebase } from "../";
import getUrls from "../../helpers/functions/checkIfContainsUrl";

const sendMessage = (message, chatId, user) => {
  if (!message) {
    return;
  }

  const ulrArr = getUrls(message);
  if (ulrArr) {
    const promises = [];
    ulrArr.forEach((url) => {
      const promise = db.collection("chats").doc(chatId).collection("links").add({
        timestamp: firebase.firestore.FieldValue.serverTimestamp(),
        url,
        user: user.email,
      });

      promises.push(promise);
    });
    Promise.all(promises)
      .then((x) => console.log("yes", x))
      .catch((err) => console.log(err));
  }

  return db.collection("chats").doc(chatId).collection("messages").add({
    timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    message,
    user: user.email,
    photoURL: user.photoURL,
  });
};

export default sendMessage;
