const { verifyToken } = require('../routes/jwt.routes.js');

const authenticateJWT = (req, res, next) => {
    const token = req.headers.authorization?.split(" ")[1];

    if (!token) {
        return res.status(401).send({ type: "Error", message: "Token not provided" });
    }

    const decoded = verifyToken(token);
    if (!decoded) {
        return res.status(403).send({ type: "Error", message: "Invalid token" });
    }

    req.user = decoded;
    next();
};

module.exports = authenticateJWT;
