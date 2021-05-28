const jwt = require("jsonwebtoken");

module.exports = auth = function (req, res, next) {
    const bearerData = req.headers.authorization;
    if (typeof bearerData !== "undefined") {
        const token = bearerData.split(" ")[1];

        jwt.verify(token, "jwtSecret", function (err, foundUser) {
            if (!err) {
                req.user = foundUser;
                next();
            } else {
                res.json({ isAuth: false });
            }
        });

    } else {
        return res.json({ isAuth: false });
    }

}