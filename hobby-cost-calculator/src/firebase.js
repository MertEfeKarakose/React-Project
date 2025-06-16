// src/firebase.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyD5mOHgT2yFFVlZCP3IBnZeflNr0e0AeYA",
  authDomain: "hcc-admin.firebaseapp.com",
  projectId: "hcc-admin",
  storageBucket: "hcc-admin.firebasestorage.app",
  messagingSenderId: "150918009188",
  appId: "1:150918009188:web:5712451281834e251b6a71"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);
