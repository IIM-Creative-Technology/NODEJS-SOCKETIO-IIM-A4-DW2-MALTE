const users = require('../models/user');

class UserController {

    static read(req, res)
    {
        res.send("reading user");
    }

    static create(req, res) 
    {
        console.log("Reponse : ", req.body)
        
        if (!req.body.email || !req.body.password) {
            res.status(400).send({
                status: false,
                message: 'Aucun mot de passe ou mail a été renseigné'
            });
        } else {
            users.create({
                email: req.body.email,
                password: req.body.password,
                role: req.body.role,
            }).then((user) => res.status(201).send(user)).catch((error) => {
                console.log(error);
                res.status(400).send(error);
            });
        }
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