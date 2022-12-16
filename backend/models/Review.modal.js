const mongoose = require('mongoose');

const reviewSchema = mongoose.Schema({
    review_title: { type: String, required: true, },
    review_desc: { type: String, required: true },
    review_rating: { type: String, required: true },
    product_id: { type: String, required: true },
    user_id: { type: String, required: true },
}, {
    versionKey: false,
    timestamps: true
});

const ReviewModal = mongoose.model('reviews', reviewSchema);
module.exports = { ReviewModal };
