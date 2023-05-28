const Accounts = require('../models/account')
const { mongooseToObject, multiltoObject } = require('../../ultis/mongoose')
const multer = require('multer')
const storeage = multer.diskStorage({
    destination:  'src/public/accounts/images/',
    filename: (req, file, cb) => {
        const name =  file.originalname
        cb(null, name)
    }
})
const upload = multer({ storage: storeage })  
function createUser(req,res,next) {
    const user = {
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        username: req.body.username,
        password: req.body.password,
        address: req.body.address,
        class: req.body.class,
        email: req.body.email,
        specialized: req.body.specialized,
        course: req.body.course,
        position: req.body.position,
        permision: req.body.permision,
        phonenumber: req.body.phonenumber,
        msv: req.body.msv,
        thumbImg: req.file.filename,
    }
    Accounts.findById(req.params.id)
        .then(() => {
            Accounts.create(user)
                .then((acc) => {
                    res.render('admin/showinfor', {acc: mongooseToObject(acc)})
                })
        })
        .catch(next)
}



module.exports = { upload, createUser}