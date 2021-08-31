import firebase from 'firebase';
import 'firebase/firestore';
import 'firebase/auth';


const firebaseConfig = {
    apiKey: 'AIzaSyAEYRqVRtVF5bpHsj5FraxSMxhWpMzHiNQ',
    authDomain: 'react-9adfa.firebaseapp.com',
    projectId: 'react-9adfa',
    storageBucket: 'react-9adfa.appspot.com',
    messagingSenderId: '548491697940',
    appId: '1:548491697940:web:30d72ea4bb15edcb39ac01'
};

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export { db, googleAuthProvider, firebase }