const express=require("express");

const { getPre } = require("../Controllers/Precontroller");



const router=express.Router()

router.route('/PreWed').get(getPre)


module.exports=router;