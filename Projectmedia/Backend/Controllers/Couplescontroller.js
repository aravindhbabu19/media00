
const coupleModel = require("../Models/coupleModel");


exports.getCouples=async(req,res,next)=>{
    const Couples=await coupleModel.find({});
    res.json({
        success:true,
        Couples
    })
}