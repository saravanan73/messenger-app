import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';


// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCNfRO4UbO10tG-bXAfOncpcbGmSyGx1q8",
    authDomain: "messenger-af020.firebaseapp.com",
    projectId: "messenger-af020",
    storageBucket: "messenger-af020.appspot.com",
    messagingSenderId: "194138140127",
    appId: "1:194138140127:web:f84f06e7493d0cace4e86a",
    measurementId: "G-Z6EBPSXW1H"
  };
  const firebaseApp=firebase.initializeApp(firebaseConfig)
 
  
const db = firebaseApp.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp();
  
  export {db,timestamp};