const express = require('express');
const productRouter = express.Router();
const {ProductModel} = require('../models/Product.model');
const { body, validationResult } = require('express-validator');
const {verifyToken} = require('../Middleware/verifyToken');

// Add to the product into the database (Only admin can add Product)
productRouter.post("/add", async (req, res) =>{
 try {
    let id = req.headers.authid;
    let {name, image, desc, sub_desc, price, size, offer, category, rating, review} = req.body;

    // If id not exists
    if(!id){
        return res.status(400).send({msg : "Sorry! You are not authorized"});
    }

    // any filed are empty throw Error
   
    if(!name || !image || !desc || !sub_desc || !price || !size || !category){
     return res.status(400).send({msg : "Fill all the input!"});
    }

    let createProduct = await ProductModel.create({
        name, image, desc, sub_desc, price, size, selerId : id, offer, category, rating, review
    });

    if(createProduct){
        res.status(200).send({msg : "Add Product Successfully!"})
    }

 } catch (error) {
    res.status(500).send({ msg : "Somthing Went Wrong In Product add", error });
 }
});

// Get all the Product
productRouter.get("/get/all", async (req, res) =>{
 try {
   let limit = 10;
   let {s, page} = req.query;
    let allProduct = await ProductModel.find().skip(page <= 1? 0 : 2 * limit).limit(limit);
    if(s){
      allProduct = await ProductModel.find({ name: { $regex: s, $options: "i"} }).skip(page <= 1? 0 : 10 * limit).limit(limit);
    }
    res.status(200).send(allProduct);
 } catch (error) {
    res.status(500).send({ msg : "Somthing Went Wrong In Product get/all", error });
 }
})

module.exports = {productRouter};