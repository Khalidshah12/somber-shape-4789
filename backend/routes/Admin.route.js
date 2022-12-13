require('dotenv').config();
const express = require('express');
const adminRouter = express.Router();
const { AdminModel } = require('../models/Admin.model');
const { body, validationResult } = require('express-validator');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const saltRounds = 6;
const secretKey = process.env.secretKey;
// console.log(secretKey)

// Signup Route
adminRouter.post('/signup', [
    body('first_name', "Enter Your First Name").not().isEmpty(),
    body('last_name', "Enter Your Last Name").not().isEmpty(),
    body('email', "Enter a valid email").isEmail(),
    body('password', "password must be at least 3 Characters long").isLength({ min: 3 }),  // password must be at least 3 chars long
    body('confirm_password', "confirm password must be at least 3 Characters long").isLength({ min: 3 }),  // confirm password must be at least 3 chars long
    body('mobile', "Enter a valid mobile number").isLength({ min: 10, max : 10 }),
], async (req, res) => {
    try {
        // If Any Error Exists throw Error
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
          return res.status(400).json({ errors: errors.array() });
        }
        let {first_name, last_name, email, password, confirm_password, mobile} = req.body;

        // Check If the password and confirm_password are not match throw Error
        if(password !== confirm_password){
            return res.status(400).send({ msg : "Please Check Confirm Password!" });
        }

        // Check if the Admin already Exists then throw Error
        let isAdminExists = await AdminModel.findOne({email});
        if(isAdminExists){
            res.status(400).send({ msg : "This Email Already Exists Please Login" });
        }

        // If Admin not Exists Create Admin
        // Create hashing Password
        let hashPassword = await bcrypt.hash(password, saltRounds);

        let createAdmin = await AdminModel.create({first_name, last_name, email, password : hashPassword, mobile});
        if(createAdmin){
            res.status(200).send({msg : "Signup Successfully!"});
        }

    } catch (error) {
        res.status(500).send({ msg : "Somthing Went Wrong In Admin Signup", error });
    }
});



// Login Router
adminRouter.post("/login", [
    body('email', "Enter a valid email").isEmail(),
    body('password', "password must be at least 3 Characters long").isLength({ min: 3 }),  // password must be at least 3 chars long
    body('confirm_password', "confirm password must be at least 3 Characters long").isLength({ min: 3 }),  // confirm password must be at least 3 chars long
], async (req, res) =>{
 try {
    // If Any Error Exists throw Error
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    
    let {email, password, confirm_password} = req.body;
    // Check If the password and confirm_password are not match throw Error
    if(password !== confirm_password){
       return res.status(400).send({ msg : "Please Check Confirm Password!" });
    }

    // Check if the Admin with this email are not Exists then throw Error
    let isAdminExists = await AdminModel.findOne({email});
    if(!isAdminExists){
        res.status(400).send({ msg : "Sorry! You have to login first!" });
    }

    // if Admin email and password is match or not
    let isPasswordMatch = await bcrypt.compare(password, isAdminExists.password);
     if(isPasswordMatch){
        // Create Token
        let token = await jwt.sign({ _id: isAdminExists._id, role : isAdminExists.role }, secretKey);
        res.status(200).send({msg : "Login Successfully", first_name : isAdminExists.first_name, last_name : isAdminExists.last_name,email : isAdminExists.email , token });
     }else{
        res.status(400).send({ msg : "Sorry! Fill the right credentials!" });
     }
 } catch (error) {
    res.status(500).send({ msg : "Somthing Went Wrong In Admin Login", error });
 }
});


module.exports = { adminRouter };