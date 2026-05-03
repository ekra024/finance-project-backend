const admin = require('firebase-admin');

try {
    let serviceAccount;
    // For Vercel production deployment, we pass the JSON string in FIREBASE_SERVICE_ACCOUNT env var
    if (process.env.FIREBASE_SERVICE_ACCOUNT) {
        serviceAccount = JSON.parse(process.env.FIREBASE_SERVICE_ACCOUNT);
    } else {
        // For local development
        serviceAccount = require('../firebase-admin.json');
    }

    admin.initializeApp({
        credential: admin.credential.cert(serviceAccount)
    });
    console.log('Firebase Admin Initialized successfully');
} catch (error) {
    console.error('Firebase Admin Initialization Error:', error.message);
}

module.exports = admin;
