import functions, { logger } from 'firebase-functions';
import vision from '@google-cloud/vision';
import admin from 'firebase-admin';
import { object } from 'firebase-functions/v1/storage';

admin.initializeApp();
export const readReceiptDetails = functions.storage.object().onFinalize(async (object) => {
    const imageBucket = `gs://${object.bucket}/${object.name}`;
    const client = new vision.ImageAnnotatorClient();

    const [textDetection] = await client.textDetection(imageBucket);
    const [annotation] = textDetection.textAnnotations;
    const text = annotation ? annotation.description: '';
    logger.log(text);

    // Parse text 

    // Get uid
    // object.name is userId/timestamp
    const re = /(.*)\//;
    const uid = re.exec(object.name)[1];

    // Going to hardcode returned text for relevant fields
    const receipt = {
        address: '326 CMT8 St, Ward 7, District 3, HCM City',
        amount: '1000',
        date: new Date(),
        imageBucket,
        items: 'Best Software Company, best Development Solution',
        locationName: 'Best Company',
        uid,
        isConfirmed: false
    };

    admin.firestore().collection("receipts").add(receipt);
});