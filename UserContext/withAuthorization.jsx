import React, { Fragment, useEffect } from "react";
import { useUser } from ".";
import Loading from "../components/Loading";
import { useRouter } from "next/router";

const withAuthorization = (condition) => (Component) => {
  const WithAuthorization = (props) => {
    const user = useUser();
    const router = useRouter();

    useEffect(() => {
      if (user.loadingUser) {
        return;
      }
      if (!condition(user)) {
        if (router.pathname === "/login" || router.pathname === "/register") {
          router.push("/");
          return;
        }
        router.push("/login");
        return;
      }
    }, [user.userDbEntry, user]);

    if (user.loadingUser) {
      return <Loading></Loading>;
    }

    return <Fragment>{condition(user) ? <Component {...props}></Component> : <Loading></Loading>}</Fragment>;
  };

  return WithAuthorization;
};

export default withAuthorization;
