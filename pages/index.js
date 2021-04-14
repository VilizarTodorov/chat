import { Container } from "@material-ui/core";
import Head from "next/head";
import ChatScreen from "../components/ChatScreen";
import Sidebar from "../components/Sidebar";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Chat</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Container className={styles.container}>
        <Sidebar></Sidebar>
        <ChatScreen></ChatScreen>
      </Container>
    </div>
  );
}
