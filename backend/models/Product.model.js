const mongoose = require('mongoose');

const productSchema = mongoose.Schema({
   selerId : { type : mongoose.Schema.Types.ObjectId, ref : 'auth' },
   name : { type : String, required : true },
   image : { type : Array, required : true },
   desc : { type : String, required : true },
   sub_desc : { type : String, required : true },
   price : { type : Number, required : true },
   size : { type : Number, required : true },
   category : {type : String, required : true},
   rating : { type : Number, default : 1 },
   offer : { type : String },
   review : {type : Array}
},{
    versionKey : false,
    timestamps : true
});

const ProductModel = mongoose.model('product', productSchema);
module.exports = {ProductModel}