import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDCGkdzl1kc7ej74mYGECUrIKih75oZUMQ",
  authDomain: "dataschoolthree.firebaseapp.com",
  projectId: "dataschoolthree",
  storageBucket: "dataschoolthree.appspot.com",
  messagingSenderId: "524613128608",
  appId: "1:524613128608:web:7fc86d9c5f438defdf94c5",
  measurementId: "G-NSCNPFFZTS"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
