const bcrypt = require('bcrypt');
const User = require('../models/user');
const jwt = require('jsonwebtoken');
const {jwtTime, jwtPass} = require('../config/auth');

class LoginController {

    static async getByEmail(req, res)
    {
        // Check GET params
        if(!req.body.email) {
            return res.status(400).end('User email parameter is required');
        }

        // Get user by id
        const user = await User.findOne({
            where: {
                email: req.body.email
            }
        });
        if(!user) {
            return res.status(404).end('User not found');
        }
        const isValid = await bcrypt.compare(req.body.password, user.password);
        if(!isValid) {
            return res.status(404).send({message: 'Email or password incorrect'});
        }

        jwt.sign({email: user.email, id: user.id}, jwtPass, {algorithm: 'RS256', expiresIn: jwtTime }, (err, token) => {
            return res.send({
                token,
                id: user.id,
                email: user.email
            });
        });
    }

}

module.exports = LoginController;