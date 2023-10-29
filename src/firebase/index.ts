import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyA8l_QSOykgSR181gr8hzAcze0b4a9lu3U",
  authDomain: "momentfam-bb54b.firebaseapp.com",
  projectId: "momentfam-bb54b",
  storageBucket: "momentfam-bb54b.appspot.com",
  messagingSenderId: "399493836584",
  appId: "1:399493836584:web:d711199a2919df80db6a1d",
  measurementId: "G-ZQPZ0JKD02",
};

const firebaseApp = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(firebaseApp);
export const firebaseDB = getFirestore(firebaseApp);
export default firebaseApp;
// For more information on how to access Firebase in your project,
// see the Firebase documentation: https://firebase.google.com/docs/web/setup#access-firebase
