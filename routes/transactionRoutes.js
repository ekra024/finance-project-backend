const express = require('express');
const router = express.Router();
const { getTransactions, addTransaction, getBalance } = require('../controllers/transactionController');
const { verifyToken } = require('../middleware/authMiddleware');

// All transaction routes should be protected
router.use(verifyToken);

// GET /api/transactions
router.get('/', getTransactions);

// POST /api/transactions
router.post('/', addTransaction);

// GET /api/transactions/balance (wait, in index.js we mounted it on /api/transactions)
// Actually, earlier I said GET /api/balance in plan. So we should adjust index.js or put it here as /balance
router.get('/balance', getBalance);

module.exports = router;
