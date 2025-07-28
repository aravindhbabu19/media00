

const weddingModel = require("../Models/weddingModel");



exports.getWed=async(req,res,next)=>{
    const Wed=await weddingModel.find({});
    res.json({
        success:true,
        Wed
    })
}