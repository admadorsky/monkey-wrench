import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// analytics are more useful for larger apps.
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore"

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
// const analytics = getAnalytics(app);
// analytics are more useful for larger apps.
export const auth = getAuth(app)
export const googleProvider = new GoogleAuthProvider()

export const db = getFirestore(app)