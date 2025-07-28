
const familyModel = require("../Models/familyModel");


exports.getFamily=async(req,res,next)=>{
    const Family=await familyModel.find({});
    res.json({
        success:true,
        Family
    })
}