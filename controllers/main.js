const path = require('path');
require('dotenv').config();

class MainController {

    static index(req, res) {
        res.render((path.join(__dirname, '../views/index.ejs')), {
            url: process.env.NODE_URL
        });
    }

}

module.exports = MainController;