import React from "react";
import { useRouter } from "next/router";

const Chat = (props) => {
  const router = useRouter();

  return (
    <div>
      <h2>chat</h2>
      <h2>{router.query.id}</h2>
    </div>
  );
};

export default Chat;
