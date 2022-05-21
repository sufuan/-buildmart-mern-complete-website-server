// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAtbWwbVnoiVogln3dDwrdjESpA0XyzhxQ",
  authDomain: "doctors-portal-5d251.firebaseapp.com",
  projectId: "doctors-portal-5d251",
  storageBucket: "doctors-portal-5d251.appspot.com",
  messagingSenderId: "289908965861",
  appId: "1:289908965861:web:a00357996da88423c92f0c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;