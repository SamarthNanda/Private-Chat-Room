require('dotenv').config()
const express = require("express");
const app = express();

const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const cors = require("cors");

const http = require("http");
const server = http.createServer(app);
const socketio = require("socket.io");
const io = socketio(server);

const {addUser , removeUser , getUser , getUsersInRoom} = require("./Api/Helper/chatUsers");

const bcrypt = require("bcrypt");
const saltRounds = 10;

const jwt = require("jsonwebtoken");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

const PORT = process.env.PORT || 3001;

// Socket.io----------------------------------------------------------------------------------

io.on("connection", function(socket) {
    console.log('a user connected');

    socket.on("join" , function({ email , room }, callback){
        const { user } = addUser(socket.id , email , room);

        socket.emit("message" , {user:"admin" , text:`Hey ${user.name} , Welcome to the Room ${user.room}` });
        socket.broadcast.to(user.room).emit("message" , { user:"admin" , text:`${user.name}, has Joined!` })
        
        socket.join(user.room);

        io.to(user.room).emit("roomData" , {room:user.room , users:getUsersInRoom(user.room)});

        callback();
    })

    socket.on("sendMessage" , function( message , callback ){
        const user = getUser(socket.id);
        io.to(user.room).emit("message" , { user:user.name , text:message })
        io.to(user.room).emit("roomData" , {room:user.room , users:getUsersInRoom(user.room)});
        callback();
    })

    socket.on("disconnect" , function(){
        const user = removeUser(socket.id);
        if(user){
            io.to(user.room).emit("message" , {user:"admin" , text:`${user.name}, has Left the Chat!`});
        }
    })

});

// database-----------------------------------------------------------------------------------

require("./Config/db")();

var { User } = require("./Api/Models/User");


// register route------------------------------------------------------------------------------
app.post("/register", async function (req, res) {
    console.log("in reg route");
    const userType = req.body.userType;
    const username = req.body.username;
    const password = req.body.password;

    const existingUser = await User.findOne({ email: username });
    if (existingUser) {
        console.log("user existed")
        res.json({ message: "error" });
    } else {
        bcrypt.hash(password, saltRounds, function (err, hash) {

            try {

                const newUser = new User({
                    userType: userType,
                    email: username,
                    password: hash
                })

                newUser.save(function (err) {
                    if (err) {
                        console.log("error  " + err);
                        res.json({ message: "error" })
                    } else {
                        console.log("user is saved in database");
                        res.json({ message: "saved" })
                    }
                });
            } catch (error) {
                console.log(error);
            }

        });
    }
});


// login route------------------------------------------------------------------------------
app.post("/login", async function (req, res) {
    const username = req.body.username;
    const password = req.body.password;
    const room = req.body.room;

    User.findOne({ email: username }, function (err, foundUser) {
        if (!foundUser) {
            res.json({ message: "User not found" });
        }
        if (foundUser) {
            bcrypt.compare(password, foundUser.password, function (err, result) {
                console.log(result);
                if (result) {
                    const token = jwt.sign({ email: foundUser.email, userType: foundUser.userType, id: foundUser._id }, "jwtSecret", {
                        expiresIn: '20s'
                    });
                    const refreshToken = jwt.sign({ email: foundUser.email, userType: foundUser.userType, id: foundUser._id }, "jwtRefreshSecret", {
                        expiresIn: '7d'
                    });

                    console.log("logged in");
                    res.json({ refreshToken: refreshToken, token: token, email: foundUser.email, userType: foundUser.userType, room:room , id: foundUser._id });
                }
                else {
                    console.log("wrong password");
                    res.json({ message: "wrong password" });
                }
            });


        }

    });
});

// app.post("/chat" , function(req,res){
//     const room = req.body.room;
//     const message = req.body.message;
//     const email = req.body.email;



// });


// const auth = require("./Api/Middleware/auth")();

// app.post("/refresh", (req, res, next) =>{
//     const refreshToken = req.body.token;
//     if (!refreshToken) {
//         return res.json({ message: "Refresh token not found, login again" });
//     }
//     // If the refresh token is valid, create a new accessToken and return it. 
//     jwt.verify(refreshToken, "jwtRefreshSecret", (err, foundUser) => {
//         if (err) {
//             const token = jwt.sign({ email: foundUser.email, userType: foundUser.userType, id: foundUser._id }, "jwtSecret", {expiresIn: "20s"}); 
//             return res.json({success: true, token }); 
//         } 
//         else {
//         return res.json({success: false , message: "Invalid refresh token"});
//         }
//     });
// });

// app.get("/chats",auth  , function (req ,res){

//     res.json({ message: "allowed in chat room" });
// })

if (process.env.NODE_ENV === "production") {
    app.use(express.static("frontEnd/build"));
}


server.listen(PORT, function (req, res) {
    console.log("server is working on port : " + PORT);
})