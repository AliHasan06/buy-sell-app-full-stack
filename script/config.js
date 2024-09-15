import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-auth.js";
import { getStorage } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-storage.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyC8ahxgzcLqLbDf0bzLyXp-u-FMQ839dvc",
  authDomain: "e-commerce-application-ali.firebaseapp.com",
  projectId: "e-commerce-application-ali",
  storageBucket: "e-commerce-application-ali.appspot.com",
  messagingSenderId: "751416739548",
  appId: "1:751416739548:web:4e6172ce3cf7ce733a1619",
  measurementId: "G-2S2451DDFR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const storage = getStorage(app);
export const db = getFirestore(app);
