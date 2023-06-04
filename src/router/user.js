const express = require('express')
const router = express.Router();
const user = require('../app/controllers/userController')
const [upload, create] = [require('../app/controllers/uploadFile').upload , require('../app/controllers/uploadFile').createUser ]

router.all('/*', function (req, res, next) {
    req.app.locals.layout = 'admin'; // set your layout here
    next(); // pass control to the next handler
});

router.get('/infor/:id', user.showInfor)
router.get('/update/:id', user.updateInfor)
router.put('/infor/:id', user.update)
router.get('/post/:id', user.post)
router.get('/contact/:id', user.contact)
router.get('/create/:id', user.renderUser)
router.get('/dashboard/:id', user.renderContent)
router.get('/listMember/:id', user.renderList)
router.post('/user/:id', upload.single('avatar') , create)
router.post('/search/:id', user.searchMember)
router.post('/filter/:id', user.filterMember)
router.get ('/mission/:id', user.mission)
router.get('/logout/:id',  function(req,res,next) {
    req.app.locals.layout = 'main'
    next();
}, user.logout)
module.exports = router

