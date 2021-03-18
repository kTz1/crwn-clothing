import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config ={
    apiKey: "AIzaSyDAogYKnbpQI3ihcTjeq3k3kOO9rxa9_OE",
    authDomain: "crwn-clothing-28d1b.firebaseapp.com",
    projectId: "crwn-clothing-28d1b",
    storageBucket: "crwn-clothing-28d1b.appspot.com",
    messagingSenderId: "596191129248",
    appId: "1:596191129248:web:18765df3b398ae311623c5",
    measurementId: "G-P5SSTLRYC4"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
