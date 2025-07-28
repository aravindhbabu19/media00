const express=require("express");
const { getCouples } = require("../Controllers/Couplescontroller");



const router=express.Router()

router.route('/Couples').get(getCouples)


module.exports=router;