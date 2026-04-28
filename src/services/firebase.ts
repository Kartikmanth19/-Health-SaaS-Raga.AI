import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"; 

const firebaseConfig = {
  apiKey: "AIzaSyBCvf_XEFTg0_UU-OPEuQeC9oWou9YwhfE",
  authDomain: "healthcare-saas-40603.firebaseapp.com",
  projectId: "healthcare-saas-40603",
  storageBucket: "healthcare-saas-40603.firebasestorage.app",
  messagingSenderId: "865732678574",
  appId: "1:865732678574:web:7abf1c0e1a3297eedaae3f",
  measurementId: "G-215E9WF534"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);