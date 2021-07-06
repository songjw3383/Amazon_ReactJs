import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyDV4JQ15PI_1DDicfK6TF6yV7HTmgLP6xs",
    authDomain: "challenge-55311.firebaseapp.com",
    projectId: "challenge-55311",
    storageBucket: "challenge-55311.appspot.com",
    messagingSenderId: "114455517138",
    appId: "1:114455517138:web:d4408fc6c3df5ce3515a0b",
    measurementId: "G-EKP7K0J5FH"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export { db, auth };