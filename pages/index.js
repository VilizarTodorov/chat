import ChatScreenContainer from "../components/ChatScreenComponents/ChatScreenContainer";
import WithSidebar from "../components/WithSidebar";
import withAuthorization from "../UserContext/withAuthorization";

const Home = () => {
  return (
    <WithSidebar>
      <ChatScreenContainer></ChatScreenContainer>
    </WithSidebar>
  );
};

const condition = (user) => {
  if (user) {
    return true;
  }
  return false;
};

export default withAuthorization(condition)(Home);
