import Head from "next/head";
import WithSidebar from "../components/WithSidebar";
import styles from "../styles/Home.module.css";
import withAuthorization from "../UserContext/withAuthorization";

const Home = () => {
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
};

const condition = (user) => {
  if (user.userDbEntry) {
    return true;
  }
  return false;
};

export default withAuthorization(condition)(Home);
