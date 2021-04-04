// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyAFhiOPyTQv1E_YwlE_hMzmA-7Fdu-vDJk",
    authDomain: "clone-51f2b.firebaseapp.com",
    projectId: "clone-51f2b",
    storageBucket: "clone-51f2b.appspot.com",
    messagingSenderId: "179363697194",
    appId: "1:179363697194:web:9d1d1b84aa4e8ba3e2e953",
    measurementId: "G-BMM5D576NM"
  };

  const firebaseApp=firebase.initializeApp(firebaseConfig);

  const db=firebaseApp.firestore();

  const auth=firebase.auth();

  export {db,auth};