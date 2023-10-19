// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "realestate-a33af.firebaseapp.com",
  projectId: "realestate-a33af",
  storageBucket: "realestate-a33af.appspot.com",
  messagingSenderId: "279929894233",
  appId: "1:279929894233:web:b27a0b6bbae08895b70848"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);