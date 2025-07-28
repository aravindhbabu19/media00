const mongoose=require("mongoose")
const babySchema=new mongoose.Schema({
    images:[{
        image:String
    }]
})
const babyModel=mongoose.model('baby',babySchema)
module.exports=babyModel;