require('dotenv').config();
const express = require('express');
const { ReviewModal } = require('../models/Review.modal');
const reviewRouter = express.Router();

reviewRouter.get('/:id', async (req, res) => {
    const id = req.params.id;
    try {
        const reviews = await ReviewModal.find({ product_id: id }).populate(['product_id', 'user_id']);
        if (reviews.length > 0) {
            res.send(reviews);
        } else {
            res.send({ msg: "No review for this item" })
        }
    } catch (e) {
        res.status(500).send({ msg: "Something went wrong in Review Get/All", e });
    }
});

reviewRouter.post('/write', async (req, res) => {
    const payload = req.body;
    try {
        const review = new ReviewModal(payload);
        await review.save();
        res.send({ msg: "review writed successfully" });
    } catch (e) {
        res.status(500).send({ msg: "Something went wrong in review post", e });
    }
});

module.exports = { reviewRouter };
