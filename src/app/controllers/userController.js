const Accounts = require('../models/account')
const Feed = require('../models/feed')
const { mongooseToObject, multiltoObject } = require('../../ultis/mongoose')
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
    renderList(req,res,next) {
        let pageSize = 12;
        let page = req.params.id || 1;
        Accounts.findById(req.params.id)
            .then((acc) => {
                Accounts.find()
                    .skip(pageSize * page - pageSize)
                    .limit(pageSize)
                    .sort({lastname: 1, course: 1})
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
           req.body.specialized,req.body.course 
        ]   
        Accounts.findById(req.params.id)
            .then((acc) => {
                if(courseMber == '' && specializedMember == '') {
                    Accounts.find()
                        .then((user) => {
                            res.render('admin/listMember',  {acc: mongooseToObject(acc), user: multiltoObject(user)})
                        })
                }else if(specializedMember == '' && courseMber != '' ) {
                    Accounts.find({ course: courseMber})
                        .then(user => {
                            res.render('admin/listMember',  {acc: mongooseToObject(acc), user: multiltoObject(user), course: courseMber, specialized: specializedMember})
                        } 
                    )
                }else if(specializedMember != '' && courseMber == '' ) {
                    Accounts.find({ specialized: specializedMember})
                        .then(user => {
                            res.render('admin/listMember',  {acc: mongooseToObject(acc), user: multiltoObject(user), course: courseMber, specialized: specializedMember})
                        } 
                    )
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