import { db } from "../";

const editProfileInfo = (email, newPropValue, currentPropValue, prop) => {
  if (newPropValue === currentPropValue) {
    return Promise.resolve("Success");
  }
  return db
    .collection("users")
    .doc(email)
    .update({ [prop]: newPropValue });
};

export default editProfileInfo;
