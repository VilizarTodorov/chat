import { StylesProvider } from "@material-ui/core/styles";
import "../components/test.css";
import "../styles/globals.css";
import UserProvider from "../UserContext";

function MyApp({ Component, pageProps }) {
  return (
    <StylesProvider injectFirst>
      <UserProvider>
        <Component {...pageProps} />
      </UserProvider>
    </StylesProvider>
  );
}

export default MyApp;
