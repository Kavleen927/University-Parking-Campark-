import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, setPersistence, inMemoryPersistence } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyDcvUboYOdBdXyjZizf0gIZFkpXkvJZq7o",
  authDomain: "campark7-54cfc.firebaseapp.com",
  databaseURL: "https://campark7-54cfc-default-rtdb.firebaseio.com",
  projectId: "campark7-54cfc",
  storageBucket: "campark7-54cfc.appspot.com",
  messagingSenderId: "892684328727",
  appId: "1:892684328727:web:9304503fdfc099af01e152",
  measurementId: "G-7CPN5ZVFPV"
};
const app = initializeApp(firebaseConfig, "CLIENT");
const auth = getAuth(app);
getFirestore(app);
setPersistence(auth, inMemoryPersistence);
