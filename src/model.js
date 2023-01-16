const mongoose = require('mongoose');


const userSchema = mongoose.Schema({
    name: String,
    age: Number
})

const users = mongoose.model('user', userSchema);
module.exports = users;
