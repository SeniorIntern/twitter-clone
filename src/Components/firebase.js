// import firebase from "firebase";
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCJ9ZUSRWRLzhjOf2j8cTyrQ0gQNPH2iEM",
    authDomain: "twitter-clone-5ca59.firebaseapp.com",
    projectId: "twitter-clone-5ca59",
    storageBucket: "twitter-clone-5ca59.appspot.com",
    messagingSenderId: "365019885138",
    appId: "1:365019885138:web:aa6838b606d6a3fa59798b",
    measurementId: "G-FGMWV70EMR",
};

// const firebaseApp = firebase.initializeApp(firebaseConfig);

// const db = firebaseApp.firestore();

// export default db;

// Use this to initialize the firebase App
const firebaseApp = firebase.initializeApp(firebaseConfig);

// Use these for db & auth
const db = firebaseApp.firestore();

export default db;
