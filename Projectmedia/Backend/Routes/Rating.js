const express=require('express')
const { getRating } = require('../Controllers/Ratingcontroller')

const router=express.Router()

router.route('/rating').post(getRating)


module.exports=router