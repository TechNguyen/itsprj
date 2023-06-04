const techSupport = require('../models/techSupport')
const Accounts = require('../models/account')
const { mongooseToObject, multiltoObject } = require('../../ultis/mongoose')
class tech {
    listTech(req, res,next) {
        Accounts.findById(req.params.id)
            .then((acc) => {
                techSupport.find()
                    .then((tech) => {
                        res.render('admin/techSupport', {acc: mongooseToObject(acc), tech: multiltoObject(tech)})
                    })
            })
        .catch(next)
    }
    createTech(req,res,next) {
        const {title , address, date_time, ...service } = req.body
        const itemtech  = {
            time: date_time,
            address: address,
            title: title,
            service: service
        } 

        console.log(itemtech);
        techSupport.create(itemtech)
            .then((item) => {
                res.render('admin/itemTech', {item: mongooseToObject(item), service : mongooseToObject(item.service)})
            })
            .catch(next)
    }
}


module.exports = new tech()