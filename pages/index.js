import Head from "next/head";
import WithSidebar from "../components/WithSidebar";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Chat</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <WithSidebar>
        <div className={styles.chatScreenPlaceHolder}></div>
      </WithSidebar>
    </div>
  );
}
