//const firebase = require("firebase");
import firebase from 'firebase'

// Required for side-effects
//require("firebase/firestore");

import 'firebase/firestore'
import 'firebase/storage'

// Initialize Cloud Firestore through Firebase
if(!firebase.apps.lendth) {
    const config = {
        apiKey: "AIzaSyBxAWxXjqX2YdCdb1gWKotLaECSb9RZfuo",
        authDomain: "cs344-8dcd6.firebaseapp.com",
        databaseURL: "https://cs344-8dcd6.firebaseio.com",
        projectId: "cs344-8dcd6",
        storageBucket: "cs344-8dcd6.appspot.com",
        messagingSenderId: "185042450583",
        appId: "1:185042450583:web:7b6db6ecb14df4a7d651d2",
     }
    firebase.initializeApp(config)
}
export const db = firebase.firestore();
// Get a reference to the storage service, which is used to create references in your storage bucket
// Points to the root reference

//

