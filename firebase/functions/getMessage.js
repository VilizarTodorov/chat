import { db } from "../";

const getMessage = (chatId, messageId) => {
  return db.collection("chats").doc(chatId).collection("messages").doc(messageId);
};

export default getMessage;
