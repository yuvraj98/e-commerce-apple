const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    products: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Product',
        required: true
    }],
    // other order fields
    createdAt: {
        type: Date,
        default: Date.now // Automatically sets the field to the current date and time
    }
});

const Order = mongoose.model('Order', orderSchema);

module.exports = Order;
