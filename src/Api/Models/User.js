const mongoose = require("mongoose");

const loginSchema = new mongoose.Schema({
    userType: String,
    email: String,
    password: String
});

const User = mongoose.model("User", loginSchema);

module.exports.User = User;