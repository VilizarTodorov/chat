import { db } from "../";

const addContact = async (email, userEmail, contacts) => {
  const isInContactsAlready = contacts.find((c) => c.email === email);
  if (isInContactsAlready) {
    return Promise.resolve(true);
  }

  const user = await db.collection("users").doc(email).get();

  if (user.exists) {
    return db
      .collection("contacts")
      .doc(userEmail)
      .collection("contacts")
      .doc(user.id)
      .set({ ...user.data() })
      .then(() => {
        return true;
      });
  } else {
    return Promise.reject(false);
  }
};

export default addContact;
