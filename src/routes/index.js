const express = require('express')
const router = express.Router()


const v1AppRoute = require('./v1')

router.use('/v1',v1AppRoute)

module.exports = router