
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyD0U-vbovhErdQyjddjcvrtbf0zP_SfKgQ",
    authDomain: "auth-e8080.firebaseapp.com",
    projectId: "auth-e8080",
    storageBucket: "auth-e8080.firebasestorage.app",
    messagingSenderId: "829256239169",
    appId: "1:829256239169:web:82f5ae48a039d870049ec0"
  };

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, provider };