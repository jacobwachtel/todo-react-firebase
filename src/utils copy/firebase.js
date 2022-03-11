// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBG1JuDElcxgR3w-e6Ywwj5jWpVl3PzDh4",
  authDomain: "todo-app-f247e.firebaseapp.com",
  projectId: "todo-app-f247e",
  storageBucket: "todo-app-f247e.appspot.com",
  messagingSenderId: "877998877538",
  appId: "1:877998877538:web:4b98f3135e3423ec0f5a3b",
  measurementId: "G-T53B1PZQCP"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore();

export default db;