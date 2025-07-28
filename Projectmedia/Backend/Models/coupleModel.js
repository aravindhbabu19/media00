const mongoose=require("mongoose")
const coupleSchema=new mongoose.Schema({
    images:[{
        image:String
    }]
})
const coupleModel=mongoose.model('couples',coupleSchema)
module.exports=coupleModel;