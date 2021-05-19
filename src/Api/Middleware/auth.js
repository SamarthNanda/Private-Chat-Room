const jwt = require("jsonwebtoken");

module.exports = auth = function (req , res, next){
    let userData = req.headers["x-access-token"];
    const token = userData;

    jwt.verify(token , "jwtSecret" , function(err , user){
        if(!err){
            req.user=user;
            next();
        }else{
            return res.json({ message:"user not authenticated" });
        }
    });
    
}