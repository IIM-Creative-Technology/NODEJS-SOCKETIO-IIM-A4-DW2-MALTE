const UserController = require("../controllers/user");

const create = (app) => {
    app.post('/user', UserController.create);
};
const read = (app) => {
    app.get('/user', UserController.read)
};
const update = (app) => {
    app.put('/user', UserController.update)
};
const del = (app) => {
    app.delete('/user', UserController.delete)
};

module.exports = {
    createRoutes: (app) => {
        create(app);
        read(app);
        update(app);
        del(app);
    }
}

