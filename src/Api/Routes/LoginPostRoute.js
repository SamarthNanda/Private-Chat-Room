
const bcrypt = require("bcrypt");
const saltRounds = 10;

const jwt = require("jsonwebtoken");

var { User } = require("../Models/User");


module.exports = function(app){
    app.post("/login", async function (req, res) {
        const { username, password, room } = req.body;
    
        User.findOne({ email: username }, function (err, foundUser) {
            if (!foundUser) {
                res.json({ message: "User not found" });
            }
            if (foundUser) {
                bcrypt.compare(password, foundUser.password, function (err, result) {
                    if (result) {
                        const token = jwt.sign({ email: foundUser.email, userType: foundUser.userType, id: foundUser._id, room: room }, "jwtSecret", {
                            expiresIn: '1h'
                        });
                        const refreshToken = jwt.sign({ email: foundUser.email, userType: foundUser.userType, id: foundUser._id, room: room }, "jwtRefreshSecret", {
                            expiresIn: '7d'
                        });
    
                        console.log("logged in");
                        res.json({ refreshToken: refreshToken, token: token});
                    }
                    else {
                        console.log("wrong password");
                        res.json({ message: "wrong password" });
                    }
                });
            }
        });
    });
}