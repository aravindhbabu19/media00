
const ratingModel = require("../Models/ratingModel");

exports.getRating=async(req,res,next)=>{
    ratingModel.create(req.body)
    .then((rating)=>res.json(rating))
    .catch((err)=>console.log(err))
    
}