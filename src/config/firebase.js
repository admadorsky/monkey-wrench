// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDh-lOO-hlGoJRoKwFMUn903EfIbUPjLPY",
  authDomain: "monkeywrench-26525.firebaseapp.com",
  projectId: "monkeywrench-26525",
  storageBucket: "monkeywrench-26525.appspot.com",
  messagingSenderId: "552737283768",
  appId: "1:552737283768:web:f2516e9890fceda1f51e4d",
  measurementId: "G-QYEJPLXSBN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);