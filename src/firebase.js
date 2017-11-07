import { initializeApp } from 'firebase';

const app = initializeApp({
  apiKey: "AIzaSyBc5GxM9yFkYcTFqsmfce6SljKqRIeLbsQ",
  authDomain: "vuejs-firebase-02-9d95f.firebaseapp.com",
  databaseURL: "https://vuejs-firebase-02-9d95f.firebaseio.com",
  projectId: "vuejs-firebase-02-9d95f",
  storageBucket: "",
  messagingSenderId: "509958288880"
});
export const db = app.database();
export const booksRef = db.ref('books');
