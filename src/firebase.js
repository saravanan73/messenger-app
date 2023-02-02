import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';


// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
//end to3 to 4
const firebaseConfig = {
  apiKey: "AIzaSyBnwg6PP2Hd13Yxmq2Y5eeuy_ocllC-1fE",
  authDomain: "new-messenger-24ae7.firebaseapp.com",
  projectId: "new-messenger-24ae7",
  storageBucket: "new-messenger-24ae7.appspot.com",
  messagingSenderId: "889096521751",
  appId: "1:889096521751:web:69115921c776155a8df452",
  measurementId: "G-9LS72069RT"
};
  const firebaseApp=firebase.initializeApp(firebaseConfig)
 
  
const db = firebaseApp.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp();
  
  export {db,timestamp};