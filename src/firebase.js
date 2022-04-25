import firebase from "firebase/app";
import "firebase/auth";

export const auth = firebase.initializeApp({
    apiKey: "AIzaSyAytGqYvZIJiUFCapnpowGzWOH9qP0OdoE",
    authDomain: "unichat-83cd5.firebaseapp.com",
    projectId: "unichat-83cd5",
    storageBucket: "unichat-83cd5.appspot.com",
    messagingSenderId: "409727509680",
    appId: "1:409727509680:web:a8e64945230b5b4bb68775"
  }).auth();
