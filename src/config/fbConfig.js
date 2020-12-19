//Personal project's Firebase credentials
import firebaseConfig from './firebase';


import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.firestore().settings({ timestampsinSnapshots: true});

export default firebase;