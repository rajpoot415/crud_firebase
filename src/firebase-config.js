import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBAFVEks5vm8_6Sf945bFE1-k4ry5BlvIM",
  authDomain: "fir-36c68.firebaseapp.com",
  databaseURL: "https://fir-36c68-default-rtdb.firebaseio.com",
  projectId: "fir-36c68",
  storageBucket: "fir-36c68.appspot.com",
  messagingSenderId: "888089006044",
  appId: "1:888089006044:web:b80035a98de92afc7fc919",
  measurementId: "G-SFVRP6S18P"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
