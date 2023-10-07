import { initializeApp } from "firebase/app";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
  setPersistence,
  browserSessionPersistence,
} from "firebase/auth";
import {
  getFirestore,
  getDoc,
  setDoc,
  updateDoc,
  doc,
  arrayUnion,
} from "firebase/firestore";

import { IBook } from "./pages/UserPage/Explore";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API,
  authDomain: "astroreads.firebaseapp.com",
  projectId: "astroreads",
  storageBucket: "astroreads.appspot.com",
  messagingSenderId: "61575103862",
  appId: "1:61575103862:web:76d0071050d0b93f7c6657",
};

const app = initializeApp(firebaseConfig);
const authentication = getAuth(app);
setPersistence(authentication, browserSessionPersistence)
  .then(() => {
    // Persistence successfully enabled
  })
  .catch((error) => {
    console.error("Error enabling persistence:", error);
  });

const db = getFirestore(app);

//Google sign-in
const provider = new GoogleAuthProvider();
const signInWithGoogle = async () => {
  try {
    const newUser = await signInWithPopup(authentication, provider);
    const newUserId = newUser.user.uid;
    const userExists = await checkIfUserDocExists(newUserId);
    if (!userExists) {
      await createUserDocument(newUserId);
    }
    return newUserId;
  } catch (error) {
    console.error(error);
  }
};

//Email Sign up
const signUpWithEmail = async (email: string, password: string) => {
  try {
    const newUser = await createUserWithEmailAndPassword(
      authentication,
      email,
      password
    );
    const newUserId = newUser.user.uid;
    createUserDocument(newUserId);
    return newUserId;
  } catch (error) {
    console.error(error);
  }
};

//Email sign in
const signInWithEmail = async (email: string, password: string) => {
  try {
    const user = await signInWithEmailAndPassword(
      authentication,
      email,
      password
    );
    return user.user.uid;
  } catch (error) {
    console.error(error);
  }
};

//Sign out
const signOutUser = () => {
  signOut(getAuth());
};

//Create user document in Firestore
const createUserDocument = async (user: string) => {
  await setDoc(doc(db, "users", user), {
    books: [],
    wishlist: [],
  });
};

//Check if user document exists in Firestore
const checkIfUserDocExists = async (user: string) => {
  const userRef = doc(db, "users", user);
  const userSnapshot = await getDoc(userRef);
  return userSnapshot.exists() ? true : false;
};

//Add book - if book already exists, it won't be added (handled by Firestore)
const addBook = async (user: string, book: IBook, list: string) => {
  const userRef = doc(db, "users", user);
  await updateDoc(userRef, {
    [list]: arrayUnion(book),
  });
};

export {
  authentication,
  signInWithGoogle,
  signUpWithEmail,
  signInWithEmail,
  signOutUser,
  addBook,
};
