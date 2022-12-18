const mongoose = require('mongoose');

const cartSchema = mongoose.Schema({
    product_count: { type: Number, default: 1 },
    product_id: { type: mongoose.Schema.Types.ObjectId, ref: 'product' },
    user_id: { type: mongoose.Schema.Types.ObjectId, ref: 'auth' },
}, {
    versionKey: false,
    timestamps: true
});

const CartModel = mongoose.model('carts', cartSchema);
module.exports = { CartModel };

// 