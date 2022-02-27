import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const config = {
  apiKey: "AIzaSyD9j9JFr99BHYGsj4nY56TiRzLy_x21hBk",
  authDomain: "crwn-db-5c903.firebaseapp.com",
  projectId: "crwn-db-5c903",
  storageBucket: "crwn-db-5c903.appspot.com",
  messagingSenderId: "390164837750",
  appId: "1:390164837750:web:9e792a49e3779d26db3657",
  measurementId: "G-CNX9H8W00J",
};

firebase.initializeApp(config);
export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
