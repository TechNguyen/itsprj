const siteRouter = require('./site')
const auth = require('./login')
const user = require('./user')
const postFeed = require('./post')
const eventech = require('./techSp')
const acctech = require('./acctech')
function Route(app) {
    app.use('/', siteRouter)
    app.use('/auth', auth)
    app.use('/auth/admin', user)
    app.use('/auth/admin/post', postFeed)
    app.use('/auth/admin/techSupport', eventech)
    app.use('/auth/admin/techSupport/techs', acctech)
}
module.exports = Route