const Formmodel = require("../Models/Formmodel")


exports.getForm=async(req,res,next)=>{
    Formmodel.create(req.body)
    .then((form)=>res.json(form))
    .catch((err)=>console.log(err))
    
}