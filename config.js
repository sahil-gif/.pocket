import firebase from 'firebase'
require('@firebase/firestore')

const firebaseConfig = {
  apiKey: "AIzaSyBLANoniwBhHNHucsUmgrWibxgZjE9TxJY",
  authDomain: "booksantasahil.firebaseapp.com",
  databaseURL: "https://booksantasahil.firebaseio.com",
  projectId: "booksantasahil",
  storageBucket: "booksantasahil.appspot.com",
  messagingSenderId: "730072924555",
  appId: "1:730072924555:web:df3ec7552d15bb14416f8e"
};
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  export default firebase.firestore();