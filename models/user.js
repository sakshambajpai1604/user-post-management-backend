const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost:27017/testingthedatabase");

const userSchema = mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    email: String,
    age: Number,
    posts: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'post'
    }]
})

module.exports = mongoose.model('user', userSchema);