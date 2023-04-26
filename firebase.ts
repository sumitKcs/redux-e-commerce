// Import the functions you need from the SDKs you need
import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDDPzJoltLrTtW2KVkVUDkTOr7FYjgz7Y4",
  authDomain: "redux-store-3c1f0.firebaseapp.com",
  projectId: "redux-store-3c1f0",
  storageBucket: "redux-store-3c1f0.appspot.com",
  messagingSenderId: "436728930406",
  appId: "1:436728930406:web:c909f3db6d5b4c0de4cda7",
};

// Initialize Firebase
const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
const db = getFirestore(app);
export { db };
