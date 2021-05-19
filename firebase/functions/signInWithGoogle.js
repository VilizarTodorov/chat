import { auth, db, googleAuthProvider } from "../";

const signInWithGoogle = async (e,context) => {
  e.preventDefault();
  let user = null;

  try {
    const result = await auth.signInWithPopup(googleAuthProvider);
    user = result.user;
    context.setUser({
      uid: user.uid,
      email: user.email,
      displayName: user.displayName,
      photoURL: user.photoURL,
      about: "",
    });
  } catch (err) {
    console.log(err.message);
    console.log("could not login with google for some reason");
    return;
  }

  const docRef = db.collection("users").doc(user.email);

  docRef.get().then(async (doc) => {
    if (!doc.exists) {
      console.log("doc does not exist");
      db.collection("users").doc(user.email).set({
        email: user.email,
        displayName: user.displayName,
        photoURL: user.photoURL,
        about: "Hi I am using Chat!",
      });

      db.collection("contacts").doc(user.email).set({
        contacts: [],
      });

      db.collection("userChats").doc(user.email).set({
        chats: [],
      });
    }
  });
};

export default signInWithGoogle;
