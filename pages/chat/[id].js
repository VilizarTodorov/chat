import React from "react";
import { useRouter } from "next/router";
import { Container } from "@material-ui/core";
import Sidebar from "../../components/Sidebar";
import ChatScreen from "../../components/ChatScreen";
import styles from "../../styles/Home.module.css";

const Chat = (props) => {
  const router = useRouter();

  console.log(router.query);

  return (
    <Container className={styles.container}>
      <Sidebar></Sidebar>
      <ChatScreen></ChatScreen>
    </Container>
  );
};

export default Chat;
