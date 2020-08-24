import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
   
        apiKey: "AIzaSyCe5lJ-2K62H17jSyMROO31yASjj-B6GbE",
        authDomain: "todoapp-a40d8.firebaseapp.com",
        databaseURL: "https://todoapp-a40d8.firebaseio.com",
        projectId: "todoapp-a40d8",
        storageBucket: "todoapp-a40d8.appspot.com",
        messagingSenderId: "795984012025",
        appId: "1:795984012025:web:bc2a2fc4ab020cdc3b7828",
        measurementId: "G-B28TZYZD2E"
     

});

const db = firebase.firestore();

export default db;