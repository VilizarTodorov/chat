import WithSidebar from "../components/WithSidebar";
import styles from "../styles/Home.module.css";
import withAuthorization from "../UserContext/withAuthorization";

const Home = () => {
  return (
    <WithSidebar>
      <div className={styles.chatScreenPlaceHolder}></div>
    </WithSidebar>
  );
};

const condition = (user) => {
  if (user.userDbEntry) {
    return true;
  }
  return false;
};

export default withAuthorization(condition)(Home);
