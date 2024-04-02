const mongoose = require('mongoose');
const Post = mongoose.model('Post', new mongoose.Schema({
    author: { type: String, required: true },
    category: { type: String, required: true },
    description: { type: String, required: true },
    location: { type: String, required: true },
    image: { filename: String, path: String},
    date: { type: Date, required: true },
    likes: {type: Number, required: true, default: 0}
}))
module.exports = Post;