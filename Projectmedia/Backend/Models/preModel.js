
const mongoose=require("mongoose")

const preSchema=new mongoose.Schema({
    images:[{
        image:String
    }]
})
const preModel=mongoose.model('prewed',preSchema)
module.exports=preModel;