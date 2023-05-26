const Accounts = require('../models/account')
const Feed = require('../models/feed')
const uploadFile = require('./uploadFile')
const { mongooseToObject, multiltoObject } = require('../../ultis/mongoose')
const multer = require('multer')
const store = multer.diskStorage({
    destination: 'public/accounts/images',
    filename: function (req, file, cb) {
        const name = file.originalname.toLowerCase().split(' ').join('_');
        cb(null, name + '-' + Date.now());
    }
});
const upload = multer({ storage: store }).single('avartar');
class userController{
    showInfor(req ,res,next) {
        Accounts.findById(req.params.id)
            .then((acc) => {
                res.render('admin/showinfor', {acc: mongooseToObject(acc)})
            })
            .catch(next)
    }
    updateInfor(req,res,next) {
        Accounts.findById(req.params.id) 
            .then((acc) => {
                res.render('admin/update', {acc: mongooseToObject(acc)})
            })
            .catch(next)
    }
    update(req,res,next) {
        Accounts.findById(req.params.id)
            .then((acc) => {
                Accounts.updateOne({_id: req.params.id}, req.body)
                    .then(() => {
                        res.render('admin/showinfor', {acc: mongooseToObject(acc)})
                    })
            })
            .catch(next)
    }
    post(req,res,next) {
        Accounts.findById(req.params.id)
            .then((acc) => {
                res.render('admin/post',{acc: mongooseToObject(acc)})
            })
            .catch(next)
    }
    renderUser(req,res,next) {
        Accounts.findById(req.params.id)
            .then((acc) => { 
                res.render('admin/createMember', {acc: mongooseToObject(acc)})  
            })
            .catch(next)
    }
    renderContent(req,res,next) {
        Accounts.findById(req.params.id)
            .then((acc) => {
                Feed.find()
                    .then((posts) => {
                        res.render('admin/mainContent', {acc: mongooseToObject(acc), posts: multiltoObject(posts)}) 
                    })
                }  
            )
            .catch(next)
    }
    createUser(req,res,next) {
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
            thumbImg: req.body.file  
        }


        console.log(thumbImg);
        Accounts.findById(req.params.id)
            .then(() => {
                Accounts.create(user)
                    .then((acc) => {
                        res.json(acc)
                    })
            })
            .catch(next)



    }
    renderList(req,res,next) {
        Accounts.findById(req.params.id)
            .then((acc) => {
                Accounts.find()
                    .then((user) => {
                        res.render('admin/listMember', {acc: mongooseToObject(acc), user : multiltoObject(user)})
                    })
            })
            .catch(next)
    }
    async logout(req,res,next) {
        await res.clearCookie('refreshtoken')
        res.redirect('/')
    }
    searchMember(req,res,next) {
        const checkmember = req.body.usercheck
        Accounts.findById(req.params.id)
            .then((acc) => {
                Accounts.find({lastname: checkmember})
                .then((user) => {
                    res.render('admin/listMember', {acc: mongooseToObject(acc), user: multiltoObject(user)})
                })
                })
            .catch(next)   
    }
    filterMember(req,res,next) {
        const [specializedMember,courseMber] = [
            req.body.course ,req.body.specialized
        ]   
        Accounts.findById(req.params.id)
            .then((acc) => {
                if(courseMber == '') {
                    Accounts.find({course: courseMber})
                        .then((user) => {
                            res.render('admin/listMember',  {acc: mongooseToObject(acc), user: multiltoObject(user), course: courseMber, specialized: specializedMember})
                        })
                }else if(specializedMember == '') {
                    Accounts.find({ specialized: specializedMember})
                        .then(user => {
                            res.render('admin/listMember',  {acc: mongooseToObject(acc), user: multiltoObject(user), course: courseMber, specialized: specializedMember})
                        } 
                        )
                } else if(courseMber == '' && specializedMember == '') {
                    Accounts.find()
                        .then((user) => {
                            res.render('admin/listMember',  {acc: mongooseToObject(acc), user: multiltoObject(user)})
                        })
                } else {
                    Accounts.find({course: courseMber, specialized: specializedMember})
                    .then((user) => {
                        res.render('admin/listMember', {acc: mongooseToObject(acc), user: multiltoObject(user), course: courseMber, specialized: specializedMember})
                    })    
                }})
            .catch(next)   
    }
    teachSupport(req,res,next) {
        Accounts.findById(req.params.id)
            .then((acc) => {
                res.render('admin/techSupport', {acc: mongooseToObject(acc)})
            })
            .catch(next)
    }
    contact(req,res,next) {
        Accounts.findById(req.params.id)
            .then((acc) => {
                res.render('admin/contact', {acc: mongooseToObject(acc)})
            })
            .catch(next)
    }
    mission (req,res,next) {
        Accounts.findById(req.params.id)
            .then((acc) => {
                res.render('admin/mission', {acc: mongooseToObject(acc)})
            })
            .catch(next)
    }
}
module.exports = new userController()