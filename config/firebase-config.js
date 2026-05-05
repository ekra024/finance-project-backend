const admin = require('firebase-admin');

try {
    let serviceAccount;
   
    if (process.env.FIREBASE_SERVICE_ACCOUNT) {
        serviceAccount = JSON.parse(process.env.FIREBASE_SERVICE_ACCOUNT);
    } else {
        
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
