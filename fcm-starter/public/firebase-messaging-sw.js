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

importScripts('https://www.gstatic.com/firebasejs/8.2.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.2.0/firebase-messaging.js');

const firebaseConfig = {
    // Insert your Firebase project's configuration here
    apiKey: "AIzaSyCvJO0clLyeApv2oLhWgUy8_yaJfVHS2Pg",
    authDomain: "expense-tracker-c04b9.firebaseapp.com",
    projectId: "expense-tracker-c04b9",
    storageBucket: "expense-tracker-c04b9.appspot.com",
    messagingSenderId: "1038704187533",
    appId: "1:1038704187533:web:91fe82bfa39a43e7ddeac4",
    measurementId: "G-WSR6SBF7BZ"
};

firebase.initializeApp(firebaseConfig);

const messaging = firebase.messaging();

messaging.onBackgroundMessage(payload => {
    console.log('Received background message: ', payload);

    const notificationTitle = payload.notification.title;
    const notificationBody = {
        body: payload.notification.body,
    }

    self.registration.showNotification(notificationTitle, notificationBody);
});