

const preModel = require("../Models/preModel");




exports.getPre=async(req,res,next)=>{
    const PreWed=await preModel.find({});
    res.json({
        success:true,
        PreWed
    })
}