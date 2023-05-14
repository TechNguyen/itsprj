const siteRouter = require('./site')
const meRouter = require('./me')
const home = require('./home')
const upload = require('./post')
const email = require('./sendingEmail')
const cook = require('./cookie')
const auth = require('./login')
const user = require('./user')
const postFeed = require('./post')
function Route(app) {
    app.use('/', siteRouter)
    app.use('/auth', auth)
    app.use('/auth/admin', user)
    app.use('/auth/admin/post', postFeed)
}
module.exports = Route