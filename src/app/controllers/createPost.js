const { mongooseToObject, multiltoObject } = require('../../ultis/mongoose')
const Feed = require('../models/feed')
const Accounts = require('../models/account')
class Feedpost {
    async createPost(req,res,next) {
        let title = req.body.title
        let userId = req.params.id
        let imageContent = req.file.filename
        let username;
        Accounts.findById(userId)
            .then((acc) => {
                username = acc.username
                Feed.create({userId: userId, content: title, username: username, imageContent: imageContent})
                    .then(res.redirect(`/auth/admin/dashboard/${userId}`))
            
            })
            .catch(next)
        
    }
}


module.exports = new Feedpost()