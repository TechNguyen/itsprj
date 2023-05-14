const { ObjectId } = require('mongodb')
const mongoose = require('mongoose')
const Schema = mongoose.Schema
const cv = new Schema({
    firstname: String,
    lastname: String,
    phonenumber: String,
    description: String,
    fileSv: File
}, {
    collection: 'cv', 
    timestamps: true
})
const cvModels = mongoose.model('cv', cv)
module.exports = cvModels


