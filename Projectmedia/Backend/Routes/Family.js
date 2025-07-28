const express=require("express");
const { getFamily } = require("../Controllers/Familycontroller");



const router=express.Router()

router.route('/Family').get(getFamily)


module.exports=router;