const { ObjectId } = require('mongodb')
const mongoose = require('mongoose')
const Schema = mongoose.Schema
const account = new Schema({
    username: String,
    password: String,
    firstname: String,
    lastname: String,
    email: String,
    class: String,
    specialized: String,
    thumbImg: String,
    address: String,
    position: String,
    permision: String,
    msv: String,
    phonenumber: String,
    course : String
}, {
    collection: 'Accounts', 
    timestamps: true
})
const AccountModels = mongoose.model('Accounts', account)
module.exports = AccountModels


