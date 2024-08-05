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

import { db, messaging } from "./firebase";
import { doc, setDoc } from 'firebase/firestore';
import { getToken, onMessage } from 'firebase/messaging';

const VAPID_KEY = "BDWZ7YzOeCEKMETDFzn8ATdOMMH-x8AfH4c-lGbna58LOh-p-INu9ftma793-38smsaxJaAhVMFzVUTg2OaaxJQ";
export const FCM_TOKEN_COLLECTION = 'fcmTokens';

export async function requestNotificationsPermissions(uid) {
    console.log('Requesting notifications permissions...');
    const permission = await Notification.requestPermission();

    if (permission === 'granted') {
        await saveMessagingDeviceToken(uid);
    } else {
        console.log('Unable to get permission to notify.');
    }
}

export async function saveMessagingDeviceToken(uid) {
    const msg = await messaging();
    const fcmToken = await getToken(msg, { vapidKey: VAPID_KEY });
    console.log('fcmToken: ', fcmToken);
    
    if (fcmToken) {
        console.log('GOT FCM device token: ', fcmToken);
        
        // Save device token to Firestore
        const tokenRef = doc(db, FCM_TOKEN_COLLECTION, uid);
        await setDoc(tokenRef, { fcmToken }); // overwrite document if already exists

        onMessage(msg, (message) => {
            console.log(
                'New foreground notification from Firebase Messaging!',
                message.notification
            );
            new Notification(message.notification.title, { body: message.notification.body });
        })
    } else {
        // Need to request permissions to show notifications
        requestNotificationsPermissions(uid);
    }
}