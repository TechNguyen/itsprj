const user = require('../models/userTech')
const tech = require('../models/techSupport')
const { mongooseToObject, multiltoObject } = require('../../ultis/mongoose')
class userTech {
    listuser(req,res,next) {
        tech.findById(req.params.id)
            .then((techs) => {
                user.find({idTech: req.params.id})
                .then((items) => {
                    res.render('userTech/listuser',{techs: mongooseToObject(techs), items: multiltoObject(items) })
                })
            })
            .catch(next)
    } 
}



module.exports = new userTech()