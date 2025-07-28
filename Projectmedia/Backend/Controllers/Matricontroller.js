
const matrimonyModel = require("../Models/materimonyModel");



exports.getMatri=async(req,res,next)=>{
    const Matri=await matrimonyModel.find({});
    res.json({
        success:true,
        Matri
    })
}