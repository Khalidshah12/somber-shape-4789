require('dotenv').config();
const jwt = require('jsonwebtoken');
const secretKey = process.env.secretKey;


const verifyToken = async (req, res, next) =>{
 try {
   const token = req.headers.authenticationtoken || null;
   if(!token){
      res.status(400).send({msg : "Sorry! You are not authorized"})
   }
   const decoded = await jwt.verify(token, secretKey);
    if(decoded){
      req.id = decoded._id;
      req.role = decoded.role;
      next()
    }
 } catch (error) {
    res.status(500).send({ msg : "Sorry! You are not authorized", error });
 }
}

module.exports = {verifyToken};
