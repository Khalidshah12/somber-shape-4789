const mongoose = require('mongoose');

const cartSchema = mongoose.Schema({
    name: { type: String, required: true },
    image: { type: Array, required: true },
    desc: { type: String, required: true },
    sub_desc: { type: String, required: true },
    price: { type: Number, required: true },
    size: { type: Number, required: true },
    category: { type: String, required: true },
    rating: { type: Number, default: 1 },
    offer: { type: String },
    product_qty: { type: Number, default: 1 },
    product_id: { type: String, required: true },
    user_id: { type: String, required: true },
}, {
    versionKey: false,
    timestamps: true
});

const CartModel = mongoose.model('cart', cartSchema);
module.exports = { CartModel };
