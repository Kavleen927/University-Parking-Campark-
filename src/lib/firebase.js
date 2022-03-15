import { initializeApp, getApps, getApp } from "firebase/app";
// import { getFirestore } from "firebase/firestore";
// import { browser } from "$app/env";
import { getAuth, setPersistence, inMemoryPersistence } from "firebase/auth"

// const firebase = require("firebase");
// // Required for side-effects
//require("firebase/firestore");

const firebaseConfig = {
  apiKey: "AIzaSyDcvUboYOdBdXyjZizf0gIZFkpXkvJZq7o",
  authDomain: "campark7-54cfc.firebaseapp.com",
  projectId: "campark7-54cfc",
  storageBucket: "campark7-54cfc.appspot.com",
  messagingSenderId: "892684328727",
  appId: "1:892684328727:web:9304503fdfc099af01e152",
  measurementId: "G-7CPN5ZVFPV"
};



const app = initializeApp(firebaseConfig, "CLIENT");
 //browser && (getApps().length === 0 ? initializeApp(firebaseConfig, "CLIENT") : getApp());


//export const db = getFirestore(); //browser && getFirestore();
export const auth = getAuth(app)

setPersistence(auth, inMemoryPersistence)
