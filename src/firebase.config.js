import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'


const firebaseConfig = {
  apiKey: "AIzaSyBvaEyYTBPQ_9tMgPTju6d8n0_-OxnAmn8",
  authDomain: "house-marketplace-app-67ce2.firebaseapp.com",
  projectId: "house-marketplace-app-67ce2",
  storageBucket: "house-marketplace-app-67ce2.appspot.com",
  messagingSenderId: "1035243210025",
  appId: "1:1035243210025:web:026ed7f4c07a4ab530e338"
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const db = getFirestore()