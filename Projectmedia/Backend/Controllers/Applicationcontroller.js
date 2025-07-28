const applicationModel = require("../Models/ApplicationModel");

exports.getApplication=async(req,res,next)=>{
    applicationModel.create(req.body)
    .then((application)=>res.json(application))
    .catch((err)=>console.log(err))
    
}