const express=require("express");

const { getWed } = require("../Controllers/Wedcontroller");



const router=express.Router()

router.route('/Wed').get(getWed)


module.exports=router;