const LoginController = require("../controllers/auth");

const login = (app) => {
    app.post('/login', LoginController.getByEmail)
};

module.exports = {
    createRoutes: (app) => {
        login(app);
    }
}

