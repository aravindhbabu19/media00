const express=require("express");
const { getMaternity } = require("../Controllers/Maternitycontroller");



const router=express.Router()

router.route('/Maternity').get(getMaternity)


module.exports=router;