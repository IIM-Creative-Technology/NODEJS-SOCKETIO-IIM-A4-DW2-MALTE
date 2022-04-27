const path = require('path')

class MainController {

    static index(req, res) {
        res.sendFile(path.join(__dirname, '../views/index.html'))
    }

}

module.exports = MainController;