import { initializeApp, type FirebaseApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { Firestore, getFirestore } from "firebase/firestore";

class GoogleFirebase {
  firebaseApp: FirebaseApp;
  firebaseConfig = {
    apiKey: "AIzaSyBPbgEMgHny25kToCV8Vhpr4m3ImMpUjHM",
    authDomain: "quizz-1afd9.firebaseapp.com",
    databaseURL:
      "https://quizz-1afd9-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "quizz-1afd9",
    storageBucket: "quizz-1afd9.appspot.com",
    messagingSenderId: "619013405309",
    appId: "1:619013405309:web:91455980251e8885f74f14",
    measurementId: "G-LRWBH2M9B8",
  };

  constructor() {
    this.firebaseApp = initializeApp(this.firebaseConfig);
  }

  getApp() {
    return this.firebaseApp;
  }

  getAuth() {
    return getAuth(this.firebaseApp);
  }

  getFirestore(): Firestore {
    return getFirestore(this.firebaseApp);
  }
}

export default new GoogleFirebase();
