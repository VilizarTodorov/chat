// import CssBaseline from "@material-ui/core/CssBaseline";
// import { ThemeProvider } from "styled-components";
// import theme from "../src/theme";

// function MyApp({ Component, pageProps }) {
//   console.log(theme);
//   useEffect(() => {
//     // Remove the server-side injected CSS.
//     const jssStyles = document.querySelector("#jss-server-side");
//     if (jssStyles) {
//       jssStyles.parentElement.removeChild(jssStyles);
//     }
//   }, []);

//   return (
//     <StylesProvider injectFirst>
//       <ThemeProvider theme={theme}>
//         <CssBaseline />
//         <UserProvider>
//           <Component {...pageProps} />
//         </UserProvider>
//       </ThemeProvider>
//     </StylesProvider>
//   );
// }

// export default MyApp;

import CssBaseline from "@material-ui/core/CssBaseline";
import { StylesProvider, ThemeProvider } from "@material-ui/core/styles";
import Head from "next/head";
import React, { Fragment, useEffect } from "react";
import "../components/test.css";
import theme from "../src/theme";
import "../styles/globals.css";
import UserProvider from "../UserContext";

export default function MyApp(props) {
  const { Component, pageProps } = props;

  useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector("#jss-server-side");
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);

  return (
    <Fragment>
      <Head>
        <title>My page</title>
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
      </Head>
      <StylesProvider injectFirst>
        <ThemeProvider theme={theme}>
          {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
          <CssBaseline />
          <UserProvider>
            <Component {...pageProps} />
          </UserProvider>
        </ThemeProvider>
      </StylesProvider>
    </Fragment>
  );
}
