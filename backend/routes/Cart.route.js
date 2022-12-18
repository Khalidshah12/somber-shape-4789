require('dotenv').config();
const express = require('express');
const { CartModel } = require('../models/Cart.model');
const CartRouter = express.Router();

CartRouter.get('/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const reviews = await CartModel.find({ user_id: id }).populate(['product_id', 'user_id']);
        if (reviews.length > 0) {
            res.send(reviews);
        } else {
            res.send({ msg: "No item added to the cart" });
        }
    } catch (e) {
        res.status(500).send({ msg: "Something went wrong in cart Get/All", e });
    }
});

CartRouter.patch('/add', async (req, res) => {
    const { product_id, user_id } = req.body;
    try {
        let isProduct = await CartModel.findOne({ product_id, user_id })
        if (isProduct) {
            const cart = await CartModel.findByIdAndUpdate({ _id: isProduct._id }, { product_count: isProduct.product_count + 1 });
        } else {
            const cart = await CartModel.create(req.body)
            res.send({ msg: "Item added to the cart successfully" });
        }
        res.send({ msg: "Item updated in cart successfully" });
    } catch (e) {
        res.status(500).send({ msg: "Something went wrong in the cart update", e });
    }
});

CartRouter.patch('/remove/:id', async (req, res) => {
    const { product_id, user_id } = req.body;
    const id = req.params.id;
    try {
        let isProduct = await CartModel.findOne({ product_id, user_id })
        if (isProduct.product_count > 1) {
            const cart = await CartModel.findByIdAndUpdate({ _id: isProduct._id }, { product_count: isProduct.product_count - 1 });
        } else {
            const cart = await CartModel.findByIdAndDelete({ _id: id })
            res.send({ msg: "Item deleted from the cart successfully" })
        }
        res.send({ msg: "Item decreased from the cart successfully" });
    } catch (e) {
        res.status(500).send({ msg: "Something went wrong in the cart delete", e });
    }
});

CartRouter.delete('/delete/:id', async (req, res) => {
    const id = req.params.id;
    try {
        const cart = await CartModel.findByIdAndDelete({ _id: id })
        res.send({ msg: "Item deleted from the cart successfully" })
    } catch (e) {
        res.status(500).send({ msg: "Something went wrong in the cart delete", e });
    }
});

module.exports = { CartRouter };
