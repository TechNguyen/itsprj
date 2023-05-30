const techSupport = require('../models/techSupport')
const { mongooseToObject, multiltoObject } = require('../../ultis/mongoose')
class tech {
    listTech(req, res,next) {
        techSupport.find()
            .then((tech) => {
                res.render('admin/techSupport', {tech: multiltoObject(tech)})
            })
            .catch(next)
    }
    createTech(req,res,next) {
        let vs = Boolean( req.body.ve_sinh) 
        let tk = Boolean( req.body.tra_keo) 
        let nc = Boolean( req.body.nang_cap) 
        let ram = Boolean( req.body.nang_cap_ram) 


        console.log(vs,tk,nc, ram);
        const user = {
            title: req.body.title,
            address: req.body.address,
        }
        techSupport.create(user)
            .then(() => {
                res.send(req.body)
            })
            .catch(next)
    }
}


module.exports = new tech()