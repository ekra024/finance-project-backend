const admin = require('../config/firebase-config');
const User = require('../models/User');

const verifyToken = async (req, res, next) => {
    try {
        const authHeader = req.headers.authorization;
        if (!authHeader || !authHeader.startsWith('Bearer ')) {
            return res.status(401).json({ message: 'No token provided, authorization denied' });
        }

        const token = authHeader.split(' ')[1];
        
        
        const decodedToken = await admin.auth().verifyIdToken(token);
        
       
        let user = await User.findOne({ firebaseUid: decodedToken.uid });
        
        if (!user) {
            user = await User.create({
                firebaseUid: decodedToken.uid,
                email: decodedToken.email,
                name: decodedToken.name || decodedToken.email.split('@')[0]
            });
        }

        
        req.user = user;
        next();
    } catch (error) {
        console.error('Auth Middleware Error:', error.message);
        res.status(401).json({ message: 'Invalid token', error: error.message });
    }
};

module.exports = { verifyToken };
