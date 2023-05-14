const { mongooseToObject, multiltoObject } = require('../../ultis/mongoose')
const Feed = require('../models/feed')
class Feedpost {
    createPost(req,res,next) {
        let title = req.body.title
        let userId = req.params.id
        Feed.create({userId: userId, content: title})
            .then(res.redirect(`/auth/admin/dashboard/${userId}`))
            .catch(next)
    }
}


module.exports = new Feedpost()