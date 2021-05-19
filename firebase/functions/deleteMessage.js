import getMessage from "./getMessage";

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

export default deleteMessage;
