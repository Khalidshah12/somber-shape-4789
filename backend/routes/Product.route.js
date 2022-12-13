const express = require('express');
const productRouter = express.Router();
const {ProductModel} = require('../models/Product.model');
const { body, validationResult } = require('express-validator');
const {verifyToken} = require('../Middleware/verifyToken');

// Add to the product into the database (Only admin can add Product)
productRouter.post("/add", verifyToken, async (req, res) =>{
 try {
    let id = req.id;
    let role = req.role;
    let {title, img, desc, sub_desc, price, size, offer} = req.body;

    // If id not exists
    if(!id){
        return res.status(400).send({msg : "Sorry! You are not authorized"});
    }
    // If role is not admin
    if(role !== "admin"){
        return res.status(400).send({msg : "Sorry! You can't add you are not admin"});
    }
    // any filed are empty throw Error
    if(!title || !img || !desc || !sub_desc || !price || !size ){
     return res.status(400).send({msg : "Fill all the input!"});
    }

    let createProduct = await ProductModel.create({
        title, img, desc, sub_desc, price, size, adminId : id, offer
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
    let allProduct = await ProductModel.find().populate('adminId');
    res.status(200).send(allProduct);
 } catch (error) {
    res.status(500).send({ msg : "Somthing Went Wrong In Product get/all", error });
 }
})

module.exports = {productRouter};