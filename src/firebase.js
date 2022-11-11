import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyDwjMLYxYJYZTBxchTkQ5AoTPwua9XhDVI",
  authDomain: "feedback-suryatech.firebaseapp.com",
  databaseURL: "https://feedback-suryatech-default-rtdb.firebaseio.com",
  projectId: "feedback-suryatech",
  storageBucket: "feedback-suryatech.appspot.com",
  messagingSenderId: "757943760450",
  appId: "1:757943760450:web:14c02930aa72b48ba75fdb",
  measurementId: "G-6RW86EW2VT"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app)

export { db };
