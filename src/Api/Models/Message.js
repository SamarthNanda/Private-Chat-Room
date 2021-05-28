const mongoose = require("mongoose");

const messageSchema = new mongoose.Schema({
    room:String ,
    user:String,
    text:String 
});

const Message = mongoose.model("Message" , messageSchema);

module.exports.Message = Message;