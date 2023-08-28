// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBuG69-WYVohgV_dgrfyni7bxgn3Cbez_4",
  authDomain: "social-media-app-f280c.firebaseapp.com",
  projectId: "social-media-app-f280c",
  storageBucket: "social-media-app-f280c.appspot.com",
  messagingSenderId: "437064908139",
  appId: "1:437064908139:web:9a77b65aeb92a19dd1a02e",
  measurementId: "G-TP1Q7TQD5B"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const storage = getStorage(app);