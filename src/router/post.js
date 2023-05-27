const express = require('express');
const postRss = require('../app/controllers/createPost')
const router = express.Router();
const upload = require('../app/controllers/uploadFileContent').upload
router.post('/create-post/:id', upload.single('imgPost'), postRss.createPost);
module.exports = router