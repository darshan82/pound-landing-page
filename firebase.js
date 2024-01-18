// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCrjfjDwl7tRt6MYVhwuJj218-C2XcGUic",
  authDomain: "pound-landing-page.firebaseapp.com",
  projectId: "pound-landing-page",
  storageBucket: "pound-landing-page.appspot.com",
  messagingSenderId: "1067203141795",
  appId: "1:1067203141795:web:dc808c487abc17ea239f16"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
