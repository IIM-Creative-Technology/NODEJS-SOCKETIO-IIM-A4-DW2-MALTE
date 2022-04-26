function create(app) {
    console.log("create")
    app.post('/user', (req, res) => {
        res.sedn('creating user')
    })
};
function read(app) {
    app.get('/user', (req, res) => {
        res.send("reading user")
    })
};
function update(app) {
    app.put('/user', (req, res) => {
        res.send("updating user")
    })
};
function del(app) {
    app.delete('/user', (req, res) => {
        res.send("deleting user")
    })
};

module.exports = {
    createRoutes: (app) => {
        create(app);
        read(app);
        update(app);
        del(app);
    }
}

