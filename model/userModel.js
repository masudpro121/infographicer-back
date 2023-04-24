const mongoose = require('mongoose')
const UserSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    passwordHash: {
        type: String,
        required: true
    },
    projects : [
       { type: mongoose.Schema.Types.ObjectId, ref: 'Project' }
    ]
})

const UserModel = new mongoose.model('User', UserSchema )

module.exports = UserModel