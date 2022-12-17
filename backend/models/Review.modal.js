const mongoose = require('mongoose');

const reviewSchema = mongoose.Schema({
    review_title: { type: String, required: true, },
    review_desc: { type: String, required: true },
    review_rating: { type: Number, required: true },
    product_id: { type: mongoose.Schema.Types.ObjectId, ref: 'product' },
    user_id: { type: mongoose.Schema.Types.ObjectId, ref: 'auth' },
}, {
    versionKey: false,
    timestamps: true
});

const ReviewModal = mongoose.model('reviews', reviewSchema);
module.exports = { ReviewModal };
