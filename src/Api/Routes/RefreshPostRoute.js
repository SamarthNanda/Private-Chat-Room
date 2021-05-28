
const jwt = require("jsonwebtoken");

module.exports = function (app) {
    app.post("/refresh", (req, res) => {
        const refreshToken = req.body.refreshToken;
        if (!refreshToken) {
            return res.json({ success: false });
        }
        jwt.verify(refreshToken, "jwtRefreshSecret", (err, foundUser) => {
            if (!err) {
                const token = jwt.sign({ email: foundUser.email, userType: foundUser.userType, id: foundUser._id, room: foundUser.room }, "jwtSecret",
                    { expiresIn: "1h" });
                return res.json({ success: true, token });
            }
            else {
                return res.json({ success: false });
            }
        });
    });
}