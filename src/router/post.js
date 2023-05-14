const express = require('express');
const postRss = require('../app/controllers/createPost')
const router = express.Router();
router.post('/create-post/:id', postRss.createPost);
module.exports = router