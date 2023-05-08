//import firebase from 'firebase/app';
//import 'firebase/database';
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import { getAuth } from "firebase/auth";


const config={
    // your information from the firebase database
    apiKey: "AIzaSyCY7TIhxV_L6KsiuOWoN2Bak88PqclC4co",
    authDomain: "ejemploapp-b25ee.firebaseapp.com",
    databaseURL: "https://ejemploapp-b25ee-default-rtdb.firebaseio.com",
    projectId: "ejemploapp-b25ee",
    storageBucket: "ejemploapp-b25ee.appspot.com",
    messagingSenderId: "569580093680",
    appId: "1:569580093680:web:6f0aada25655efe9378235",
    measurementId: "G-HRKCFCY3ZR"

}

//const fb = !firebase.apps.lenght ? firebase.initializeApp(config):firebase.app()
//export default fb;

const app = initializeApp(config);
const auth = getAuth(app);

export const firebase = getDatabase(app);
export default auth;