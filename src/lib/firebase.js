import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyB1C7wFft8z9vjOgOi5nKBy8ET9pkV2Dbg",
  authDomain: "reactgen-4ebaf.firebaseapp.com",
  projectId: "reactgen-4ebaf",
  storageBucket: "reactgen-4ebaf.appspot.com",
  messagingSenderId: "1048948129645",
  appId: "1:1048948129645:web:bca19ec0c7b3358b102464",
  measurementId: "G-RVXJ241Z8D"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth() 
export const db = getFirestore() 
export const storage = getStorage() 