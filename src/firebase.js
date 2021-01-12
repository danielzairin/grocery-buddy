import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyANOUXkCJxk3HbHgbDrD3MMZeTX3zOYZm8",
  authDomain: "kitchenette-usm.firebaseapp.com",
  projectId: "kitchenette-usm",
  storageBucket: "kitchenette-usm.appspot.com",
  messagingSenderId: "486786494601",
  appId: "1:486786494601:web:d5e2836379bfda9fa89658",
};

firebase.initializeApp(firebaseConfig);

firebase.firestore().enablePersistence();

export default firebase;
