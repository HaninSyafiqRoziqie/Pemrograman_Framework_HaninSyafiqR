import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDcCvOVTit7z9bgnTNpEj5YQrkUN6ixNxA",
    authDomain: "minggu11hanin.firebaseapp.com",
    projectId: "minggu11hanin",
    storageBucket: "minggu11hanin.appspot.com",
    messagingSenderId: "638436785458",
    appId: "1:638436785458:web:ee92dd83fb49996f916b2b",
    measurementId: "G-BSERRE6CDM"
  };

export const myFirebase = firebase.initializeApp(firebaseConfig);
const baseDb = myFirebase.firestore();
export const db = baseDb;