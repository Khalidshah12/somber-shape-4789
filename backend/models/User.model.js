const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    first_name: { type: String, required: true },
    last_name: { type: String, required: true },
    email: { type: String, required: true, unique : true },
    password: { type: String, required: true },
    mobile: { type: String, required: true },
    role: { type: String, default: "user" }
}, {
    versionKey : false,
    timestamps : true
});

const UserModel = mongoose.model('user', userSchema);
module.exports = { UserModel };
