const Transaction = require('../models/Transaction');

const getTransactions = async (req, res) => {
    try {
        const transactions = await Transaction.find({ userId: req.user.firebaseUid }).sort({ createdAt: -1 });
        res.status(200).json(transactions);
    } catch (error) {
        console.error('Error fetching transactions:', error);
        res.status(500).json({ message: 'Server error fetching transactions', error: error.message });
    }
};


const addTransaction = async (req, res) => {
    try {
        const { type, amount } = req.body;

        if (!type || !amount) {
            return res.status(400).json({ message: 'Please provide type and amount' });
        }

        if (type !== 'add' && type !== 'withdraw') {
            return res.status(400).json({ message: 'Type must be either add or withdraw' });
        }

        if (amount <= 0) {
            return res.status(400).json({ message: 'Amount must be greater than zero' });
        }

        
        if (type === 'withdraw') {
            const allTx = await Transaction.find({ userId: req.user.firebaseUid });
            let balance = 0;
            allTx.forEach(t => {
                if (t.type === 'add') balance += t.amount;
                else if (t.type === 'withdraw') balance -= t.amount;
            });

            if (amount > balance) {
                return res.status(400).json({ message: 'Insufficient balance' });
            }
        }

        const transaction = await Transaction.create({
            userId: req.user.firebaseUid,
            type,
            amount: Number(amount)
        });

        res.status(201).json(transaction);
    } catch (error) {
        console.error('Error adding transaction:', error);
        res.status(500).json({ message: 'Server error adding transaction', error: error.message });
    }
};


const getBalance = async (req, res) => {
    try {
        const transactions = await Transaction.find({ userId: req.user.firebaseUid });

        let totalAdded = 0;
        let totalWithdrawn = 0;

        transactions.forEach(t => {
            if (t.type === 'add') {
                totalAdded += t.amount;
            } else if (t.type === 'withdraw') {
                totalWithdrawn += t.amount;
            }
        });

        const balance = totalAdded - totalWithdrawn;

        res.status(200).json({
            balance,
            totalAdded,
            totalWithdrawn
        });
    } catch (error) {
        console.error('Error calculating balance:', error);
        res.status(500).json({ message: 'Server error calculating balance', error: error.message });
    }
};

module.exports = {
    getTransactions,
    addTransaction,
    getBalance
};
