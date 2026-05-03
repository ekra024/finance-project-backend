const mongoose = require('mongoose');

const transactionSchema = new mongoose.Schema({
    userId: {
        type: String, // Firebase UID
        required: true,
        index: true
    },
    type: {
        type: String,
        enum: ['add', 'withdraw'],
        required: true
    },
    amount: {
        type: Number,
        required: true,
        min: 0
    }
}, { timestamps: true });

module.exports = mongoose.model('Transaction', transactionSchema);
