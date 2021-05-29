import React, { Fragment } from "react";
import ChatInfoAction from "./ChatInfoAction";
import DeleteIcon from "@material-ui/icons/Delete";
import ThumbDownAltIcon from "@material-ui/icons/ThumbDownAlt";
import BlockIcon from "@material-ui/icons/Block";
import { deleteChat } from "../../firebase/functions";
import { useRouter } from "next/router";

const ChatInfoActions = ({ chatId, userEmail, recipientEmail }) => {
  const router = useRouter();

  const onClick = () => {
    console.log("action");
  };

  const delChat = () => {
    deleteChat(chatId, userEmail, recipientEmail)
      .then(() => router.push("/"))
      .catch((err) => console.log(err));
  };

  return (
    <Fragment>
      <ChatInfoAction icon={<BlockIcon />} onClick={onClick}>
        Block
      </ChatInfoAction>
      <ChatInfoAction icon={<ThumbDownAltIcon />} onClick={onClick}>
        Report contact
      </ChatInfoAction>
      <ChatInfoAction icon={<DeleteIcon />} onClick={delChat}>
        Delete chat
      </ChatInfoAction>
    </Fragment>
  );
};

export default ChatInfoActions;
