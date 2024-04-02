const { ObjectId } = require('mongodb');
const mongoose = require('mongoose');
const Notifications = mongoose.model('Notifications', new mongoose.Schema({
    author: {type: String, required: true},
    by: {type: String, required: true},
    date: {type: Date, required: true},
    postId: {type: ObjectId, required: true}
}))
module.exports = Notifications;