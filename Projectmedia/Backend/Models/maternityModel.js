const mongoose=require("mongoose")

const maternitySchema=new mongoose.Schema({
    images:[{
        image:String
    }]
})
const maternityModel=mongoose.model('maternity',maternitySchema)
module.exports=maternityModel;