const jwt = require('jsonwebtoken');
const {jwtPass} = require('../config/auth');
const UserController = require("../controllers/user");

exports.checkJWT = async (req, res, next) => {
    let token = req.headers['x-access-token'] || req.headers['authorization'];
    if(!token) {
        return res.status(401).json('Headers authorization is required');
    }
    token = token.split(' ')[1];
    if (token) {
        jwt.verify(token, jwtPass, async (err, decoded) => {
            if (err) {
                return res.status(401).json('token_not_valid');
            } else {
                const user = UserController.read
                next();
            }
        });
    } else {
        return res.status(401).json('token is required');
    }
}