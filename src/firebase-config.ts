import { initializeApp } from "firebase/app";

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
