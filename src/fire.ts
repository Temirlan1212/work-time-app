import firebase from "firebase/compat/app";
import "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/storage";
import "firebase/compat/database";

import "firebase/compat/firestore";
import "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyBX9VF5AXhKEFDigddPpBfu8ZCxCBnROf4",
  authDomain: "work-time-909b7.firebaseapp.com",
  projectId: "work-time-909b7",
  storageBucket: "work-time-909b7.appspot.com",
  messagingSenderId: "230000581408",
  appId: "1:230000581408:web:3d422b8066d10fea5cd545",
  measurementId: "G-L0T5JW4LX8",
};

const fire = firebase.initializeApp(firebaseConfig);

export const firestore = fire.firestore();

export default fire;
