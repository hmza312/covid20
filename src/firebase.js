import  firebase from 'firebase';
var firebaseConfig = {
    apiKey: "AIzaSyDXkUJyYl90_gv2WLZKemcjwv2eEHSkxcI",
    authDomain: "corvid19-9c21b.firebaseapp.com",
    databaseURL: "https://corvid19-9c21b.firebaseio.com",
    projectId: "corvid19-9c21b",
    storageBucket: "corvid19-9c21b.appspot.com",
    messagingSenderId: "900272373112",
    appId: "1:900272373112:web:510c0c5f5d7693df111c8d",
    measurementId: "G-J6Q10YYJ3P"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  export default firebase;