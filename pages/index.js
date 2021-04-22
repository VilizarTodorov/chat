import { Container } from "@material-ui/core";
import Head from "next/head";
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
        <div className={styles.chatScreenPlaceHolder}></div>
      </Container>
    </div>
  );
}
