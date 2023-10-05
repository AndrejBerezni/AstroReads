// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API,
  authDomain: "astroreads.firebaseapp.com",
  projectId: "astroreads",
  storageBucket: "astroreads.appspot.com",
  messagingSenderId: "61575103862",
  appId: "1:61575103862:web:76d0071050d0b93f7c6657",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;
