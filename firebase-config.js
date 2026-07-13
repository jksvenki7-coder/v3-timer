// Firebase SDK
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import {
  getAuth,
  RecaptchaVerifier,
  signInWithPhoneNumber
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

import {
  getFirestore
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

// Firebase Config
const firebaseConfig = {
  apiKey: "AIzaSyCoCuThFeKjCY7ovam-PGIeY0mf37K5oJw",
  authDomain: "v3-timer-929d2.firebaseapp.com",
  projectId: "v3-timer-929d2",
  storageBucket: "v3-timer-929d2.firebasestorage.app",
  messagingSenderId: "721042527013",
  appId: "1:721042527013:web:694ccce77e908a72bbc0cc"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
export { RecaptchaVerifier, signInWithPhoneNumber };
