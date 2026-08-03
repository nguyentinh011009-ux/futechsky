// config.js - FUtech Sky Alliance Central Configuration
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-analytics.js";
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js";
import { getFirestore, collection, doc, setDoc, getDoc, getDocs, updateDoc, deleteDoc, onSnapshot } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-firestore.js";

// Thông tin cấu hình Firebase gốc của bạn
const firebaseConfig = {
  apiKey: "AIzaSyBJwcAlXCU7oRdDrhIozL_lHJWM54sSKTo",
  authDomain: "ftfuedu.firebaseapp.com",
  projectId: "ftfuedu",
  storageBucket: "ftfuedu.firebasestorage.app",
  messagingSenderId: "836592822298",
  appId: "1:836592822298:web:af96a04b93e3fba47a49a3",
  measurementId: "G-YNVDTQXY76"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const db = getFirestore(app);
const googleProvider = new GoogleAuthProvider();

export { 
  app, auth, db, analytics, googleProvider,
  signInWithPopup, signOut, onAuthStateChanged,
  collection, doc, setDoc, getDoc, getDocs, updateDoc, deleteDoc, onSnapshot 
};
