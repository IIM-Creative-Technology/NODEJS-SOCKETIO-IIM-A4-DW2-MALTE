const bcrypt = require('bcrypt');
const User = require('../models/user');

class UserController {

    static async list(req, res)
    {
        const users = await User.findAll();
        return res.json(users);
    }

    static async read(req, res)
    {
        // Check GET params
        if(!req.params.id) {
            return res.status(400).end('User id parameter is required');
        }

        // Get user by id
        const user = await User.findByPk(req.params.id);
        if(!user) {
            return res.status(404).end('User not found');
        }

        return res.json(user);
    }

    static async create(req, res) 
    {
        // Check POST params
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

    static async update(req, res)
    {
        // Check GET params
        if(!req.params.id) {
            return res.status(400).end('User id parameter is required');
        }

        // Get user by id
        const user = await User.findByPk(req.params.id);
        if(!user) {
            return res.status(404).end('User not found');
        }

        // Check POST params
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
        if(emailExists && emailExists.email !== user.email) {
            return res.status(400).end('Email already used');
        }

        // Update user
        const password = await bcrypt.hash(req.body.password, parseInt(process.env.SALT_ROUNDS));
        const updateResult = await User.update({
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            email: req.body.email,
            password: password
        }, {
            where: {
                id: req.params.id
            }
        });

        if(!updateResult) {
            return res.status(500).end('An error occured');
        }

        // Get updated user
        const updatedUser = await User.findByPk(req.params.id);

        return res.json(updatedUser);
    }

    static async delete(req, res)
    {
        // Check GET params
        if(!req.params.id) {
            return res.status(400).end('User id parameter is required');
        }

        // Get user by id
        const user = await User.findByPk(req.params.id);
        if(!user) {
            return res.status(404).end('User not found');
        }

        // Delete user
        const destroyResult = await User.destroy({ where: { id: req.params.id } });
        if(!destroyResult) {
            return res.status(500).end('An error occured');
        }

        return res.json(user);
    }

}

module.exports = UserController;