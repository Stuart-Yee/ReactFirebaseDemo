// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCyvZ8zNey45RjlwyQp8xvzgskGc06TArU",
  authDomain: "familyrecipes-c4f1f.firebaseapp.com",
  projectId: "familyrecipes-c4f1f",
  storageBucket: "familyrecipes-c4f1f.appspot.com",
  messagingSenderId: "420248435857",
  appId: "1:420248435857:web:96d2d0affa90a9193e5330",
  measurementId: "G-QEW83X5GPZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();