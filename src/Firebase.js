import firebase from 'firebase';

const firebaseConfig = firebase.initializeApp({
  apiKey: "AIzaSyA4mjhzz-x7p_ZaLg16NGOdUzavxtrrHqE",
  authDomain: "imango-675f0.firebaseapp.com",
  projectId: "imango-675f0",
  storageBucket: "imango-675f0.appspot.com",
  messagingSenderId: "113716020157",
  appId: "1:113716020157:web:c01ec54fb04fe6a65448d4",
  measurementId: "G-3Q76ZX18G6"
});

const auth = firebase.auth();
const db = firebaseConfig.firestore();
const storage = firebase.storage();

export { auth, db, storage };
