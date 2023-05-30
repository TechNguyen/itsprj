const express = require('express')
const router = express.Router()
const tech = require('../app/controllers/techSupport')
router.get('/techs', tech.listTech)
router.post('/teachCreate', tech.createTech)

module.exports = router