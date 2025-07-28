const express=require("express");
const { getMatri } = require("../Controllers/Matricontroller");



const router=express.Router()

router.route('/Matri').get(getMatri)


module.exports=router;