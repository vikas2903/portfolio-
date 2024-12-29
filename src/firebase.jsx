// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCUNmhwWCL3GWWY6BUx2Z48Ct16cQoOvhs",
  authDomain: "portfolio-data-c37f8.firebaseapp.com",
  databaseURL: "https://portfolio-data-c37f8-default-rtdb.firebaseio.com",
  projectId: "portfolio-data-c37f8",
  storageBucket: "portfolio-data-c37f8.firebasestorage.app",
  messagingSenderId: "1027249816251",
  appId: "1:1027249816251:web:e4d17fd0d7e8fab31a5f9e",
  databaseURL:"https://portfolio-data-c37f8-default-rtdb.firebaseio.com/"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);