import { useEffect } from "react";
import { db } from "../firebase";

const useSubCollection = (collection, subCollection, setFunc, user, callback) => {
  useEffect(() => {
    const listener = db
      .collection(collection)
      .doc(user?.email)
      .collection(subCollection)
      .onSnapshot((querySnapshot) => callback(querySnapshot, setFunc));

    return () => {
      listener();
    };
  }, [user]);
};

export default useSubCollection;
