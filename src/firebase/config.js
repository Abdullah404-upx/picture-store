  import * as firebase from 'firebase';
  import 'firebase/storage'
  import 'firebase/firestore'
  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyDLs5smJAWmVtAZWf7Bi5mFNlKAEJO_ivQ",
    authDomain: "coka-firegram.firebaseapp.com",
    databaseURL: "https://coka-firegram.firebaseio.com",
    projectId: "coka-firegram",
    storageBucket: "coka-firegram.appspot.com",
    messagingSenderId: "501531184550",
    appId: "1:501531184550:web:3a1df4d64c53039a139367"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const projectStorage = firebase.storage();
  const projectFireStore = firebase.firestore();


  // timestapm time stamp
  const timeStamp = firebase.firestore.FieldValue.serverTimestamp;
  export {projectStorage, projectFireStore, timeStamp};