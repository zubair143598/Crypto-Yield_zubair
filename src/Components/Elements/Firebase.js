// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCFYIVxXa0wGBE_diKgK1AvAlxmLy0R13s",
  authDomain: "crypto-yield-5c3a2.firebaseapp.com",
  projectId: "crypto-yield-5c3a2",
  storageBucket: "crypto-yield-5c3a2.appspot.com",
  messagingSenderId: "589689510672",
  appId: "1:589689510672:web:bf2c9e372908d5ad9ae395"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);