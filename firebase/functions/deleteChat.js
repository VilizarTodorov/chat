import { db } from "..";

const deleteChat = async (chatId, userEmail, recipientEmail) => {
  try {
    await db.collection("chats").doc(chatId).delete();
    console.log("Document successfully deleted from chats collection!");

    await db.collection("userChats").doc(userEmail).collection("chats").doc(chatId).delete();
    console.log(`Document successfully deleted from ${userEmail} chats collection!`);

    await db.collection("userChats").doc(recipientEmail).collection("chats").doc(chatId).delete();
    console.log(`Document successfully deleted from ${recipientEmail} chats collection!`);

    return Promise.resolve();
  } catch (error) {
    console.error("Error removing document: ", error);
    return Promise.reject(error);
  }
};

export default deleteChat;
