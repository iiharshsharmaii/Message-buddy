import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA1bF4pb_kwXqb4Jn45IxDex8cCHorsye0",
  authDomain: "message-buddy-8e804.firebaseapp.com",
  projectId: "message-buddy-8e804",
  storageBucket: "message-buddy-8e804.appspot.com",
  messagingSenderId: "97059720428",
  appId: "1:97059720428:web:f51b05f33b4ffd65cde9c9"
};
// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore()