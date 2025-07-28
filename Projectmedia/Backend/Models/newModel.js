const mongoose=require("mongoose")

const newSchema=new mongoose.Schema({
    images:[{
        image:String
    }]
})
const newModel=mongoose.model('new',newSchema)
module.exports=newModel;