// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDevRIjwHtlEfPTaBoiYU32N8LBwSTJrzA",
    authDomain: "assignment10-d1d65.firebaseapp.com",
    projectId: "assignment10-d1d65",
    storageBucket: "assignment10-d1d65.appspot.com",
    messagingSenderId: "9141143369",
    appId: "1:9141143369:web:fd0e4dc32dd819c172fc98"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;