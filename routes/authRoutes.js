const express = require('express');
const router = express.Router();
const { login } = require('../controllers/authController');
const { verifyToken } = require('../middleware/authMiddleware');

router.post('/login', verifyToken, login);

module.exports = router;
