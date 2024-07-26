const express = require('express')
const router = express.Router()

//import controller
const userControllers = require('../../controllers/user-controller')


//router
router.post('/user/create',userControllers.create)
router.delete('/user/delete/:id',userControllers.destroy)

module.exports = router



