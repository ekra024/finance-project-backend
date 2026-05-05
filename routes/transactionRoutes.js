const express = require('express');
const router = express.Router();
const { getTransactions, addTransaction, getBalance } = require('../controllers/transactionController');
const { verifyToken } = require('../middleware/authMiddleware');

router.use(verifyToken);

router.get('/', getTransactions);

router.post('/', addTransaction);

router.get('/balance', getBalance);

module.exports = router;
