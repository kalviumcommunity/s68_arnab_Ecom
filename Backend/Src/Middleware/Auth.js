var jwt = require('jsonwebtoken');

const Auth=(req, res, next) => {
    const token = req.cookies.autherization;
    if (!token) {
        return res.status(401).send("Unauthorized: No token provided");
    }
    
    jwt.verify(token, process.env.privateKey, (err, decoded) => {
        if (err) {
            return res.status(403).send("Forbidden: Invalid token");
        }
        req.user = decoded; 
        next(); 
    });
}
module.exports = Auth;