// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "webproject-10e9f.firebaseapp.com",
  projectId: "webproject-10e9f",
  storageBucket: "webproject-10e9f.appspot.com",
  messagingSenderId: "224763529495",
  appId: "1:224763529495:web:b5e9957e50fd62e0be0f52"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

