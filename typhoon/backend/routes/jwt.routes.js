const jwt = require('jsonwebtoken');
const SECRET_KEY = 'your_secret_key';

const generateToken = (req, res) => {
    const { title } = req.body;
    const token = jwt.sign({ title }, SECRET_KEY, { expiresIn: '1h' });
    res.send({ token });
};

const verifyToken = (token) => {
    try {
        return jwt.verify(token, SECRET_KEY);
    } catch (err) {
        return null;
    }
};

module.exports = { generateToken, verifyToken };
