const express = require('express')
const router = express.Router();
const user = require('../app/controllers/userController')
const multer = require('multer')
const store = multer.diskStorage({
    destination: 'public/accounts/images',
    filename: function (req, file, cb) {
        const name = file.originalname.toLowerCase().split(' ').join('_');
        cb(null, name + '-' + Date.now());
    }
});
const upload = multer({ storage: store });
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
router.post('/user/:id', upload.single('avartar'), user.createUser)
router.post('/search/:id', user.searchMember)
router.post('/filter/:id', user.filterMember)
router.get('/techSupport/:id', user.teachSupport)
router.get ('/mission/:id', user.mission)
router.get('/logout/:id',  function(req,res,next) {
    req.app.locals.layout = 'main'
    next();
}, user.logout)
module.exports = router

