require('dotenv').config();
const express = require('express');
const { CartModel } = require('../models/Cart.model');
const CartRouter = express.Router();

CartRouter.get('/', async (req, res) => {
    try {
        const reviews = await CartModel.find();
        res.send(reviews)
        // if (reviews.length > 0) {
        //     res.send(reviews);
        // } else {
        //     res.send({ msg: "No review for this item" })
        // }
    } catch (e) {
        res.send({ msg: "Something went wrong in cart Get/All", e });
    }
});

CartRouter.post('/add', async (req, res) => {
    const payload = req.body;
    try {
        const review = new ReviewModal(payload);
        await review.save();
        res.send("review writed successfully");
    } catch (e) {
        res.send({ msg: "Something went wrong in review post", e });
    }
});

module.exports = { CartRouter };
