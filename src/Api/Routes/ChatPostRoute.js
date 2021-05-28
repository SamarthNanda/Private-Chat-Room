
const auth = require("../Middleware/auth");

var { Message } = require("../Models/Message");

module.exports= function(app){
    app.post("/chat", auth, function (req, res) {

        const { room, email } = req.user;
        const { message } = req.body;
        const newMessage = new Message({
            room: room,
            user: email,
            text: message
        });
        newMessage.save(function (err) {
            if (!err) {
                console.log("message saved");
            }
        });
        res.json({message:"message saved!"});
    });
}