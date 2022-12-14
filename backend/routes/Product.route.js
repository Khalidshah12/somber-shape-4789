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
   let {s, page = 1, ps, cat} = req.query;
    let allProduct = await ProductModel.find().skip(page <= 1? 0 : (page - 1) * limit).limit(limit);
    if(s){
      allProduct = await ProductModel.find({ name: { $regex: s, $options: "i"} }).skip(page <= 1? 0 : (page - 1) * limit).limit(limit);
    }
    if(ps){
      allProduct = await ProductModel.find().skip(page <= 1? 0 : (page - 1) * limit).sort(ps == "as"? {price : 1} : {price : -1}).limit(limit)
    }

    if(cat){
      allProduct = await ProductModel.find({ category: { $regex: cat, $options: "i"} }).skip(page <= 1? 0 : (page - 1) * limit).limit(limit);
    }
    res.status(200).send(allProduct);
 } catch (error) {
    res.status(500).send({ msg : "Somthing Went Wrong In Product get/all", error });
 }
});

productRouter.patch("/update/:productId", async (req, res) =>{
   try {
     let productId = req.params.productId;
     let updateProduct = await ProductModel.findByIdAndUpdate({_id : productId}, req.body);
     if(updateProduct){
      res.status(200).send({ msg : "Successfully Update!" });
     }
      
   } catch (error) {
      res.status(500).send({ msg : "Somthing Went Wrong In Product update", error });
   }
  });

   //(https://gold-worried-walkingstick.cyclic.app/products/delete/`productId`)
  productRouter.delete("/delete/:productId", async (req, res) =>{
   try {
     let productId = req.params.productId;
     let deleteProduct = await ProductModel.findByIdAndDelete({_id : productId});
     if(deleteProduct){
      res.status(200).send({ msg : "Successfully Deleted!" });
     }
      
   } catch (error) {
      res.status(500).send({ msg : "Somthing Went Wrong In Product Delete", error });
   }
  });
  //(https://gold-worried-walkingstick.cyclic.app/products/single/`productId`)
  productRouter.get("/single/:id", async (req, res) =>{
   try {
     let _id = req.params.id;
     let product = await ProductModel.findById({_id});
      res.status(200).send(product);
   } catch (error) {
      res.status(500).send({ msg : "Somthing Went Wrong In Product single", error });
   }
  });


  // get seller all product (https://gold-worried-walkingstick.cyclic.app/products/seller/product/`sellerId`)
  productRouter.get("/seller/product/:id", async (req, res) =>{
   try {
      let id  = req.params.id;
      let getProduct = await ProductModel.find({selerId : id});
      res.status(200).send(getProduct);
   } catch (error) {
      res.status(500).send({ msg : "Somthing Went Wrong In seller all product", error });
   }
  })
module.exports = {productRouter};