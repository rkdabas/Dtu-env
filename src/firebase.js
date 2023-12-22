// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
// import { getDatabase } from "firebase/database";
// import { Firestore } from "firebase/firestore";
import { getFirestore } from "firebase/firestore";
import { secret } from "./secret";

import 'firebase/storage'
import { getStorage } from 'firebase/storage'

// const firebaseConfig = {
//   apiKey: process.env.REACT_APP_FIREBASE_API_KEY ,
//   authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN ,
//   projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID ,
//   storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET ,
//   messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID ,
//   appId: process.env.REACT_APP_FIREBASE_APP_ID 
// };

// Initialize Firebase
const app = initializeApp(secret);
const auth = getAuth(app);

// export const storage = getStorage(app);

export const db = getFirestore(app);
export default auth;
