
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCCNFysWBqYo8vMn_Mv1_wNq80wcufF3f4",
  authDomain: "bionutripi-35fc0.firebaseapp.com",
  projectId: "bionutripi-35fc0",
  storageBucket: "bionutripi-35fc0.appspot.com",
  messagingSenderId: "917878990726",
  appId: "1:917878990726:web:1ba2c540ffc8eec94f2e07",
  measurementId: "G-0Q2J8EXSVN"
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
