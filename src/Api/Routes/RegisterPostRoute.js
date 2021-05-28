
const bcrypt = require("bcrypt");
const saltRounds = 10;

var { User } = require("../Models/User");

module.exports = function(app){
    app.post("/register", async function (req, res) {
        console.log("in reg route");
        const { userType, username, password } = req.body;
    
        const existingUser = await User.findOne({ email: username });
        if (existingUser) {
            console.log("user existed")
            res.json({ message: "error" });
        } else {
            bcrypt.hash(password, saltRounds, function (err, hash) {
    
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
            });
        }
    });
}