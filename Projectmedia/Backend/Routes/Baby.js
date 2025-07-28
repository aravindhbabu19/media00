const express=require("express");
const { getBaby } = require("../Controllers/Babycontroller");



const router=express.Router()

router.route('/Baby').get(getBaby)


module.exports=router;