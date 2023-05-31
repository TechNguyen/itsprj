const user = require('../models/userTech')
const account = require('../models/account')
const { mongooseToObject, multiltoObject } = require('../../ultis/mongoose')
class userTech {
    listuser(req,res,next) {
        account.findById(req.params.idAdmin)
            user.find({idTech: req.params.idTech})
                    .then((items) => {
                        res.render('userTech/listuser', {acc: mongooseToObject(acc), items: multiltoObject(items) })
                    })
        .catch(next)
    } 
}



module.exports = new userTech()