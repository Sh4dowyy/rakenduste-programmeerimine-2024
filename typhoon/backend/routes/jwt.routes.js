const jwt = require('jsonwebtoken');

const secretKey = process.env.JWT_SECRET || 'key';

exports.generateToken = (name) => {
    return jwt.sign({ name }, secretKey, { expiresIn: '1h' });
};


exports.verifyToken = (token) => {
    try {
        return jwt.verify(token, secretKey);
    } catch (err) {
        return null;
    }
};