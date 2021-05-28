
var { Message } = require("../Models/Message");
const { addUser, removeUser, getUser, getUsersInRoom } = require("../Helper/chatUsers");

module.exports = function(io){
    io.on("connection", function (socket) {

        socket.on("join", function ({ email, room }, callback) {
            const { user } = addUser(socket.id, email, room);
    
            socket.emit("message", { user: "admin", text: `Hey ${user.name} , Welcome to the Room ${user.room}` });
            socket.broadcast.to(user.room).emit("message", { user: "admin", text: `${user.name}, has Joined!` })
    
            Message.find({ room: user.room }, function (err, previousMessages) {
                if (err) {
                    console.log("there was a error: " + err);
                } if (previousMessages.length) {
                    socket.emit("previousMessages", { previousMessages: previousMessages });
                }
            })
    
            socket.join(user.room);
            io.to(user.room).emit("roomData", { room: user.room, users: getUsersInRoom(user.room) });
            callback();
        })
    
        socket.on("sendMessage", function (message, callback) {
            const user = getUser(socket.id);
            io.to(user.room).emit("message", { user: user.name, text: message })
            io.to(user.room).emit("roomData", { room: user.room, users: getUsersInRoom(user.room) });
            callback();
        })
    
        socket.on("disconnect", function () {
            const user = removeUser(socket.id);
            if (user) {
                io.to(user.room).emit("message", { user: "admin", text: `${user.name}, has Left the Chat!` });
            }
        })
    
    });
}