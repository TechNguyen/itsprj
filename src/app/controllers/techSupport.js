const techSupport = require('../models/techSupport')
const { mongooseToObject, multiltoObject } = require('../../ultis/mongoose')
class tech {
    listTech(req, res,next) {
        techSupport.find()
            .then((res) => {
                res.render('admin/techSupport')
            })
            .catch(next)
    }
    createTech(req,res,next) {
        const user = {
            title: req.body.title,
            address: req.body.address,
            time: req.body.date_time
        }
        techSupport.create(user)
            .then(res =>res.json('Success'))
    }
}


module.exports = new tech()