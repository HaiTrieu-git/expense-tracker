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

import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getMessaging, isSupported } from 'firebase/messaging';
import { getStorage } from "firebase/storage";

// Configure Firebase.
export const firebaseConfig = {
    // Insert your Firebase project's configuration here
    apiKey: "AIzaSyCvJO0clLyeApv2oLhWgUy8_yaJfVHS2Pg",
    authDomain: "expense-tracker-c04b9.firebaseapp.com",
    projectId: "expense-tracker-c04b9",
    storageBucket: "expense-tracker-c04b9.appspot.com",
    messagingSenderId: "1038704187533",
    appId: "1:1038704187533:web:91fe82bfa39a43e7ddeac4",
    measurementId: "G-WSR6SBF7BZ"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const messaging = getMessaging(app);
export const storage = getStorage(app); 