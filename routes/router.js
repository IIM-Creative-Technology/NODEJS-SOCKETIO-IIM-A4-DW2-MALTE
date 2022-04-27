const express = require('express')
const router = express.Router()
const MainController = require('../controllers/main');

const userAPI = require('./user');

router.get('/', MainController.index)

userAPI.createRoutes(router);

module.exports = router;
