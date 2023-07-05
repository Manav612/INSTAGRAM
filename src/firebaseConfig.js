// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
export const firebaseConfig = {
  apiKey: "AIzaSyDDA2yHjk3Ize5c9nqG_HXILZjvHqx3x-8",
  authDomain: "insta-ca11d.firebaseapp.com",
  projectId: "insta-ca11d",
  storageBucket: "insta-ca11d.appspot.com",
  messagingSenderId: "680484828366",
  appId: "1:680484828366:web:f5b0fbed7391f3b4640c9f"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)