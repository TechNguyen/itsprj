const express = require('express')
const customer = require('../app/controllers/createCustomer')
const router = express.Router()

router.get('/techitem/:idCustomer', customer.listuser)



module.exports = router