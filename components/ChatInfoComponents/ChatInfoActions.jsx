import React, { Fragment } from "react";
import ChatInfoAction from "./ChatInfoAction";
import DeleteIcon from "@material-ui/icons/Delete";
import ThumbDownAltIcon from "@material-ui/icons/ThumbDownAlt";
import BlockIcon from "@material-ui/icons/Block";

const ChatInfoActions = () => {
  const onClick = () => {
    console.log("action");
  };
  return (
    <Fragment>
      <ChatInfoAction icon={<BlockIcon />} onClick={onClick}>
        Block
      </ChatInfoAction>
      <ChatInfoAction icon={<ThumbDownAltIcon />} onClick={onClick}>
        Report contact
      </ChatInfoAction>
      <ChatInfoAction icon={<DeleteIcon />} onClick={onClick}>
        Delete chat
      </ChatInfoAction>
    </Fragment>
  );
};

export default ChatInfoActions;
