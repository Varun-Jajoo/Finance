// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDCwyNJjLAeLBF23BB9kCpG1jzYzct65OA",
  authDomain: "community-15dc9.firebaseapp.com",
  projectId: "community-15dc9",
  storageBucket: "community-15dc9.appspot.com",
  messagingSenderId: "1845604646",
  appId: "1:1845604646:web:38c5031f3da74f2408d1e7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db =getFirestore(app)