const { ObjectId } = require('mongodb')
const mongoose = require('mongoose')
const Schema = mongoose.Schema
const feed = new Schema({
    userId: String,
    username: String,
    content: String,
    imageContent: String,
    imageUser: String
}, {
    collection: 'Feed', 
    timestamps: true
})
const FeedModels = mongoose.model('Feed', feed)
module.exports = FeedModels
