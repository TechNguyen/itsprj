const { ObjectId } = require('mongodb')
const mongoose = require('mongoose')
const Schema = mongoose.Schema
const techSupport = new Schema({
   time: String,
   address: String,
   service: Object,
   title: String,
   status: String,
}, {
    collection: 'techSupport', 
    timestamps: true
})
const FeedModels = mongoose.model('techSupport', techSupport)
module.exports = FeedModels
