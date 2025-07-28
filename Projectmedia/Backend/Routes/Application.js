const express=require('express')
const { getApplication } = require('../Controllers/Applicationcontroller')

const router=express.Router()

router.route('/applicationpath').post(getApplication)


module.exports=router