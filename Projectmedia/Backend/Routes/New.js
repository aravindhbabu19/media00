const express=require("express");
const { getNew } = require("../Controllers/Newcontroller");



const router=express.Router()

router.route('/New').get(getNew)


module.exports=router;