const mongoose = require('mongoose');
const Post = mongoose.model('Post', new mongoose.Schema({
    author: { type: String, required: true },
    category: { type: String, required: true },
    description: { type: String, required: true },
    location: { type: String, required: true },
    image: { date: Buffer, contentType: String},
    date: { type: Date, required: true },
    votes: { type: Number, required: true, default: 0},
    likes: {type: Number, required: true, default: 0}
}))
module.exports = Post;