const mongoose=require("mongoose")

const weddingSchema=new mongoose.Schema({
    images:[{
        image:String
    }]
})
const weddingModel=mongoose.model('wedding',weddingSchema)
module.exports=weddingModel;