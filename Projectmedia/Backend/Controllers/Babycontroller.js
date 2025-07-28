const babyModel = require("../Models/babymodel");


exports.getBaby=async(req,res,next)=>{
    const Baby=await babyModel.find({});
    res.json({
        success:true,
        Baby
    })
}