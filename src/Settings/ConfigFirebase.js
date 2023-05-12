//import firebase from 'firebase/app';
//import 'firebase/database';
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import { getAuth } from "firebase/auth";


const config={
    // your information from the firebase database


}

//const fb = !firebase.apps.lenght ? firebase.initializeApp(config):firebase.app()
//export default fb;

const app = initializeApp(config);
const auth = getAuth(app);

export const firebase = getDatabase(app);
export default auth;