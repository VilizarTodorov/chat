import getMessage from "./getMessage";

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

export default editMessage;
