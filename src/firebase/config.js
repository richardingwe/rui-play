import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import 'firebase/storage';

const firebaseConfig = {
    apiKey: "AIzaSyBqkA5eVXjl57bJosfyh885EJ6ceCHzckA",
    authDomain: "rui-play.firebaseapp.com",
    projectId: "rui-play",
    storageBucket: "rui-play.appspot.com",
    messagingSenderId: "689098162058",
    appId: "1:689098162058:web:d3a2e453f3c254449cd273"
};

// init firebase
firebase.initializeApp(firebaseConfig);

// init services
const projectFirestore = firebase.firestore();
const projectAuth = firebase.auth();
const projectStorage = firebase.storage();

// timestamp
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectFirestore, projectAuth, projectStorage, timestamp };