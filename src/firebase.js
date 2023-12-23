import db from './firebase'
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use

//::: I imported this
import {getFirestore} from 'firebase/firestore'
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA47WAhWa6Gb-UJDk2kDGrifC3EYyJoI-0",
  authDomain: "brightdata-ty-build.firebaseapp.com",
  databaseURL: "https://brightdata-ty-build-default-rtdb.firebaseio.com",
  projectId: "brightdata-ty-build",
  storageBucket: "brightdata-ty-build.appspot.com",
  messagingSenderId: "559120974379",
  appId: "1:559120974379:web:1977108fcfe142cc18a06e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

//::: I exported this
export default getFirestore();