const express=require('express')
const { getForm } = require('../Controllers/Formcontroller')


const router=express.Router()

router.route('/form').post(getForm)


module.exports=router