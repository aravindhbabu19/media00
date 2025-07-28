const mongoose=require("mongoose")
const familySchema=new mongoose.Schema({
    images:[{
        image:String
    }]
})
const familyModel=mongoose.model('family',familySchema)
module.exports=familyModel;