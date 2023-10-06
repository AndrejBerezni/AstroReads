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

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API,
  authDomain: "astroreads.firebaseapp.com",
  projectId: "astroreads",
  storageBucket: "astroreads.appspot.com",
  messagingSenderId: "61575103862",
  appId: "1:61575103862:web:76d0071050d0b93f7c6657",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
setPersistence(auth, browserSessionPersistence)
  .then(() => {
    // Persistence successfully enabled
  })
  .catch((error) => {
    console.error("Error enabling persistence:", error);
  });

//Google sign-in
const provider = new GoogleAuthProvider();
const signInWithGoogle = async () => {
  try {
    const result = await signInWithPopup(auth, provider);
    return result.user.uid;
  } catch (error) {
    throw error;
  }
};

//Email Sign up
const signUpWithEmail = async (email: string, password: string) => {
  try {
    const newUser = await createUserWithEmailAndPassword(auth, email, password);
    return newUser.user.uid;
  } catch (error) {
    throw error;
  }
};

//Email sign in
const signInWithEmail = async (email: string, password: string) => {
  try {
    const user = await signInWithEmailAndPassword(auth, email, password);
    return user.user.uid;
  } catch (error) {
    throw error;
  }
};

//Sign out
const signOutUser = () => {
  signOut(getAuth());
};

export { signInWithGoogle, signUpWithEmail, signInWithEmail, signOutUser };
