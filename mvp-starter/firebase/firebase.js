/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCvJO0clLyeApv2oLhWgUy8_yaJfVHS2Pg",
  authDomain: "expense-tracker-c04b9.firebaseapp.com",
  projectId: "expense-tracker-c04b9",
  storageBucket: "expense-tracker-c04b9.appspot.com",
  messagingSenderId: "1038704187533",
  appId: "1:1038704187533:web:91fe82bfa39a43e7ddeac4",
  measurementId: "G-WSR6SBF7BZ"
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const auth = getAuth();
export const db = getFirestore();
export const storage = getStorage();