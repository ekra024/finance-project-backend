const express = require('express');
const router = express.Router();
const { login } = require('../controllers/authController');
const { verifyToken } = require('../middleware/authMiddleware');

// POST /api/auth/login
// We use verifyToken middleware to validate Firebase token and create/get user
router.post('/login', verifyToken, login);

module.exports = router;
