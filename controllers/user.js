const bcrypt = require('bcrypt');
const User = require('../models/user');

class UserController {

    static async list(req, res)
    {
        const users = await User.findAll();
        return res.json(users);
    }

    static read(req, res)
    {
        res.send("reading user");
    }

    static async create(req, res) 
    {
        // Check parameters
        if(!req.body.firstName) {
            return res.status(400).end('Firstname is required');
        }
        if(!req.body.lastName) {
            return res.status(400).end('Lastname is required');
        }
        if(!req.body.email) {
            return res.status(400).end('Email is required');
        }
        if(!req.body.password) {
            return res.status(400).end('Password is required');
        }

        // Check email is unique
        const emailExists = await User.findOne({
            where: {
                email: req.body.email
            }
        });
        if(emailExists) {
            return res.status(400).end('Email already used');
        }
        
        // Insert user
        const password = await bcrypt.hash(req.body.password, parseInt(process.env.SALT_ROUNDS));
        const user = await User.create({
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            email: req.body.email,
            password: password,
            role: 'user'
        });

        return res.json(user);
    }

    static update(req, res)
    {
        res.send("updating user");
    }

    static delete(req, res)
    {
        res.send("deleting user");
    }

}

module.exports = UserController;