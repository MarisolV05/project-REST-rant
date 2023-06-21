const mongoose = require('mongoose')

let commentSchema = new mongoose.Schema({
    author: { type: String, default: 'Anonymous'},
    rant: { type: Boolean, default: false },
    stars: { type: Number, required: true },
    content: { type: String, default: ''}
})

module.export = mongoose.model('Comment', commentSchema)