const UserController = require("../controllers/user");

const list = (app) => {
    app.get('/user', UserController.list)
};
const read = (app) => {
    app.get('/user/{id}', UserController.read)
};
const create = (app) => {
    app.post('/user', UserController.create);
};
const update = (app) => {
    app.put('/user', UserController.update)
};
const del = (app) => {
    app.delete('/user', UserController.delete)
};

module.exports = {
    createRoutes: (app) => {
        list(app);
        read(app);
        create(app);
        update(app);
        del(app);
    }
}

