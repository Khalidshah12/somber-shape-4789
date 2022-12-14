const mongoose = require('mongoose');

const productSchema = mongoose.Schema({
   adminId : { type : mongoose.Schema.Types.ObjectId, ref : 'admin' },
   name : { type : String, required : true },
   image : { type : Array, required : true },
   desc : { type : String, required : true },
   sub_desc : { type : String, required : true },
   price : { type : Number, required : true },
   size : { type : Number, required : true },
   catagory : {type : String, required : true},
   rating : { type : Number, default : 1 },
   offer : { type : String }
},{
    versionKey : false,
    timestamps : true
});

const ProductModel = mongoose.model('product', productSchema);
module.exports = {ProductModel}