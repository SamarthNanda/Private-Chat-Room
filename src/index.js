require('dotenv').config()
const express = require("express");
const app = express();

const bodyParser = require("body-parser");
const cors = require("cors");

const http = require("http");
const server = http.createServer(app);
const socketio = require("socket.io");
const io = socketio(server);

const { addUser, removeUser, getUser, getUsersInRoom } = require("./Api/Helper/chatUsers");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

const PORT = process.env.PORT || 3001;

app.get("/*", function (req, res) {
    res.sendfile(path.join(__dirname = 'frontEnd/build/index.html'))
})

// Database-----------------------------------------------------------------------------------

require("./Config/db")();

var { User } = require("./Api/Models/User");

var { Message } = require("./Api/Models/Message");

// Auth MiddleWare----------------------------------------------------------------------------

const auth = require("./Api/Middleware/auth");

// Socket.io----------------------------------------------------------------------------------

require("./Api/Routes/ChatSocket")(io);

// Register post route-------------------------------------------------------------------------

require("./Api/Routes/RegisterPostRoute")(app);

// Login post route----------------------------------------------------------------------------

require("./Api/Routes/LoginPostRoute")(app);

// Chat post route-----------------------------------------------------------------------------

require("./Api/Routes/ChatPostRoute")(app);

// RefreshToken post Route---------------------------------------------------------------------

require("./Api/Routes/RefreshPostRoute")(app);

// heroku production---------------------------------------------------------------------------
if (process.env.NODE_ENV === "production") {
    app.use(express.static("frontEnd/build"));
}

server.listen(PORT, function (req, res) {
    console.log("server is working on port : " + PORT);
})