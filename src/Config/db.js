const mongoose = require("mongoose");

module.exports = function(){
    mongoose.connect( process.env.MONGODB_URI || "mongodb://localhost:27017/loginDB", { useNewUrlParser: true, useUnifiedTopology: true });
    mongoose.set("useCreateIndex", true);

    mongoose.connection.on('connected' , function(){
        console.log('mongoose is connected!!');
    });
}