import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAnrJ7c2If_RqanA4hKq_v_jF0HUDhFVNA",
  authDomain: "task-management-a94fd.firebaseapp.com",
  projectId: "task-management-a94fd",
  storageBucket: "task-management-a94fd.firebasestorage.app",
  messagingSenderId: "423180771591",
  appId: "1:423180771591:web:ea7671ef6d797c7ec465a2",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);

// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);

export default app;
