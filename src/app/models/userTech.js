const { ObjectId } = require('mongodb')
const mongoose = require('mongoose')
const Schema = mongoose.Schema
const userTech = new Schema({
    idTech: String ,
   fullname: String,
   phone: String,
   option: String,
   technical: String,
   timeRecive: Date
}, {
    collection: 'userTech', 
    timestamps: true
})
const FeedModels = mongoose.model('userTech', userTech)
module.exports = FeedModels
