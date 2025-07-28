

const maternityModel = require("../Models/maternityModel");


exports.getMaternity=async(req,res,next)=>{
    const Maternity=await maternityModel.find({});
    res.json({
        success:true,
        Maternity
    })
}