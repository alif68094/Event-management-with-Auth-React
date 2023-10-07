// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC7IBjQK0obf4xGkeQxUdgTJuSkuDqZVqc",
  authDomain: "react-event-management-2950a.firebaseapp.com",
  projectId: "react-event-management-2950a",
  storageBucket: "react-event-management-2950a.appspot.com",
  messagingSenderId: "130772866936",
  appId: "1:130772866936:web:da972437bb5b985b2b9a8d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;