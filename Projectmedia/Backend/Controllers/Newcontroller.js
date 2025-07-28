
const newModel = require("../Models/newModel");


exports.getNew=async(req,res,next)=>{
    const New=await newModel.find({});
    res.json({
        success:true,
        New
    })
}