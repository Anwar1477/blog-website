import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import {getAuth, GoogleAuthProvider} from 'firebase/auth'
const firebaseConfig = {
  apiKey: "AIzaSyBBr6YTIDSB7wxL9IYs6W6IeaJMyVqZZPI",
  authDomain: "blogs-a2b94.firebaseapp.com",
  projectId: "blogs-a2b94",
  storageBucket: "blogs-a2b94.appspot.com",
  messagingSenderId: "598517287038",
  appId: "1:598517287038:web:33203a999cabfc9889702f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;
export const db = getFirestore (app)
export const auth = getAuth(app)
export const provider = new GoogleAuthProvider()