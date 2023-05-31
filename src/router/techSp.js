const express = require('express')
const router = express.Router()
const tech = require('../app/controllers/techSupport')
router.get('/techs/:id', tech.listTech)
router.post('/teachCreate/:id', tech.createTech)
router.get('/techitem/:id', tech.eachTech)
module.exports = router