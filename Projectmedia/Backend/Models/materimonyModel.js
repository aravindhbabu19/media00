const mongoose=require("mongoose")

const matrimonySchema=new mongoose.Schema({
    images:[{
        image:String
    }]
})
const matrimonyModel=mongoose.model('matri',matrimonySchema)
module.exports=matrimonyModel;